import type { CostingSheet, CostLine, MenuPlan, Unit } from '../types/state'

// Base-unit conversion: mass → g, volume → ml, each → each.
const UNIT_FACTOR: Record<Unit, number> = { g: 1, kg: 1000, ml: 1, L: 1000, each: 1 }

const UNIT_KIND: Record<Unit, 'mass' | 'volume' | 'each'> = {
  g: 'mass',
  kg: 'mass',
  ml: 'volume',
  L: 'volume',
  each: 'each',
}

export function unitsCompatible(a: Unit, b: Unit): boolean {
  return UNIT_KIND[a] === UNIT_KIND[b]
}

/** Cost per base unit (g / ml / each) as purchased. */
export function unitCost(line: CostLine): number {
  const baseQty = line.packQty * UNIT_FACTOR[line.packUnit]
  if (baseQty <= 0) return 0
  return line.packPrice / baseQty
}

/**
 * Cost of the quantity actually used, adjusted for edible-portion yield:
 * EP cost = AP cost / yield%. Incompatible units fall back to AP quantity as entered.
 */
export function lineCost(line: CostLine): number {
  const usedBase = line.usedQty * UNIT_FACTOR[line.usedUnit]
  const ap = unitCost(line) * usedBase
  const yieldFrac = Math.min(100, Math.max(1, line.yieldPct)) / 100
  return ap / yieldFrac
}

export function sheetIngredientCost(sheet: CostingSheet): number {
  return sheet.lines.reduce((sum, l) => sum + lineCost(l), 0)
}

/** Total recipe cost including Q-factor allowance. */
export function sheetTotalCost(sheet: CostingSheet): number {
  return sheetIngredientCost(sheet) * (1 + sheet.qFactorPct / 100)
}

export function portionCost(sheet: CostingSheet): number {
  if (sheet.portions <= 0) return 0
  return sheetTotalCost(sheet) / sheet.portions
}

/** Selling price excluding tax, from a tax-inclusive menu price. */
export function priceExTax(sellPrice: number, taxPct: number): number {
  return sellPrice / (1 + taxPct / 100)
}

export function foodCostPct(sheet: CostingSheet): number | null {
  if (sheet.sellPrice == null || sheet.sellPrice <= 0) return null
  const ex = priceExTax(sheet.sellPrice, sheet.taxPct)
  if (ex <= 0) return null
  return (portionCost(sheet) / ex) * 100
}

export function grossProfitPct(sheet: CostingSheet): number | null {
  const fc = foodCostPct(sheet)
  return fc == null ? null : 100 - fc
}

export function grossProfitPerPortion(sheet: CostingSheet): number | null {
  if (sheet.sellPrice == null || sheet.sellPrice <= 0) return null
  return priceExTax(sheet.sellPrice, sheet.taxPct) - portionCost(sheet)
}

/** Tax-inclusive selling price needed to hit a target food-cost %. */
export function targetSellPrice(sheet: CostingSheet, targetFoodCostPct: number): number {
  if (targetFoodCostPct <= 0) return 0
  const ex = portionCost(sheet) / (targetFoodCostPct / 100)
  return ex * (1 + sheet.taxPct / 100)
}

// ---- Menu-level analysis ----

export interface DishEconomics {
  dishId: string
  name: string
  courseName: string
  cost: number
  sellPrice: number
  exTaxPrice: number
  gpDollars: number
  gpPct: number | null
  forecastSold: number
  revenue: number
  totalGp: number
}

export interface MenuAnalysis {
  dishes: DishEconomics[]
  totalRevenueExTax: number
  totalCost: number
  totalGpDollars: number
  blendedGpPct: number | null
  blendedFoodCostPct: number | null
  avgGpPerItem: number
  avgPopularity: number
}

export type MenuMixClass = 'star' | 'plowhorse' | 'puzzle' | 'dog'

export function analyseMenu(
  menu: MenuPlan,
  costOf: (dish: { costingSheetId?: string; manualCost?: number }) => number,
): MenuAnalysis {
  const dishes: DishEconomics[] = []
  for (const course of menu.courses) {
    for (const d of course.dishes) {
      const cost = costOf(d)
      const ex = priceExTax(d.sellPrice, menu.taxPct)
      const gpD = ex - cost
      dishes.push({
        dishId: d.id,
        name: d.name,
        courseName: course.name,
        cost,
        sellPrice: d.sellPrice,
        exTaxPrice: ex,
        gpDollars: gpD,
        gpPct: ex > 0 ? (gpD / ex) * 100 : null,
        forecastSold: d.forecastSold,
        revenue: ex * d.forecastSold,
        totalGp: gpD * d.forecastSold,
      })
    }
  }
  const totalRevenueExTax = dishes.reduce((s, d) => s + d.revenue, 0)
  const totalCost = dishes.reduce((s, d) => s + d.cost * d.forecastSold, 0)
  const totalGpDollars = totalRevenueExTax - totalCost
  const totalSold = dishes.reduce((s, d) => s + d.forecastSold, 0)
  return {
    dishes,
    totalRevenueExTax,
    totalCost,
    totalGpDollars,
    blendedGpPct: totalRevenueExTax > 0 ? (totalGpDollars / totalRevenueExTax) * 100 : null,
    blendedFoodCostPct: totalRevenueExTax > 0 ? (totalCost / totalRevenueExTax) * 100 : null,
    avgGpPerItem: dishes.length > 0 ? dishes.reduce((s, d) => s + d.gpDollars, 0) / dishes.length : 0,
    avgPopularity: dishes.length > 0 ? totalSold / dishes.length : 0,
  }
}

/**
 * Menu-engineering quadrant: profitability vs popularity, each against the menu average.
 * star = high/high, plowhorse = low GP/high pop, puzzle = high GP/low pop, dog = low/low.
 */
export function classifyDish(dish: DishEconomics, analysis: MenuAnalysis): MenuMixClass {
  const profitable = dish.gpDollars >= analysis.avgGpPerItem
  const popular = dish.forecastSold >= analysis.avgPopularity * 0.7 // industry-standard 70% rule
  if (profitable && popular) return 'star'
  if (!profitable && popular) return 'plowhorse'
  if (profitable && !popular) return 'puzzle'
  return 'dog'
}
