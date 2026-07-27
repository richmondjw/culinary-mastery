export interface EquipmentItem {
  id: string
  name: string
  category: string
  /** Which module first needs it (informational). */
  neededFrom: string
  essential: boolean
  note?: string
}

export const equipmentList: EquipmentItem[] = [
  // Knives & prep
  { id: 'eq-chef-knife', name: "20–24 cm chef's knife", category: 'Knives & prep', neededFrom: 'Module 1', essential: true, note: 'One good knife beats a block of bad ones.' },
  { id: 'eq-paring', name: 'Paring knife', category: 'Knives & prep', neededFrom: 'Module 1', essential: true },
  { id: 'eq-serrated', name: 'Serrated / bread knife', category: 'Knives & prep', neededFrom: 'Module 1', essential: false },
  { id: 'eq-filleting', name: 'Flexible filleting knife', category: 'Knives & prep', neededFrom: 'Module 9', essential: false },
  { id: 'eq-whetstone', name: 'Whetstone (1000/3000 grit)', category: 'Knives & prep', neededFrom: 'Module 1', essential: true },
  { id: 'eq-steel', name: 'Honing steel', category: 'Knives & prep', neededFrom: 'Module 1', essential: true },
  { id: 'eq-boards', name: 'Large cutting boards ×2 (raw / ready-to-eat)', category: 'Knives & prep', neededFrom: 'Module 1', essential: true },
  { id: 'eq-peeler', name: 'Y-peeler', category: 'Knives & prep', neededFrom: 'Module 1', essential: true },
  { id: 'eq-tweezers', name: 'Fish tweezers', category: 'Knives & prep', neededFrom: 'Module 9', essential: false },

  // Measurement
  { id: 'eq-scale', name: 'Digital scales (1 g precision)', category: 'Measurement', neededFrom: 'Module 1', essential: true },
  { id: 'eq-probe', name: 'Instant-read probe thermometer', category: 'Measurement', neededFrom: 'Module 3', essential: true, note: 'The single highest-value tool in the course.' },
  { id: 'eq-oven-thermo', name: 'Oven thermometer', category: 'Measurement', neededFrom: 'Module 6', essential: false },
  { id: 'eq-timer', name: 'Kitchen timer (or phone)', category: 'Measurement', neededFrom: 'Module 1', essential: true },

  // Pots & pans
  { id: 'eq-stockpot', name: '8–12 L stockpot', category: 'Pots & pans', neededFrom: 'Module 4', essential: true },
  { id: 'eq-saucepans', name: 'Saucepans: 1.5 L and 3 L', category: 'Pots & pans', neededFrom: 'Module 2', essential: true },
  { id: 'eq-stainless-fry', name: '26–30 cm stainless frying pan', category: 'Pots & pans', neededFrom: 'Module 2', essential: true },
  { id: 'eq-nonstick', name: '20 cm non-stick pan (eggs)', category: 'Pots & pans', neededFrom: 'Module 3', essential: true },
  { id: 'eq-cast-iron', name: 'Cast-iron skillet or grill pan', category: 'Pots & pans', neededFrom: 'Module 11', essential: false },
  { id: 'eq-dutch-oven', name: '4–6 L enamelled Dutch oven', category: 'Pots & pans', neededFrom: 'Module 6', essential: true },
  { id: 'eq-roasting-tray', name: 'Heavy roasting tray + rack', category: 'Pots & pans', neededFrom: 'Module 4', essential: true },
  { id: 'eq-sheet-pans', name: 'Rimmed sheet pans ×2', category: 'Pots & pans', neededFrom: 'Module 6', essential: true },

  // Tools
  { id: 'eq-whisk', name: 'Balloon whisk', category: 'Tools', neededFrom: 'Module 3', essential: true },
  { id: 'eq-spatula', name: 'Silicone spatulas', category: 'Tools', neededFrom: 'Module 3', essential: true },
  { id: 'eq-tongs', name: 'Tongs (30 cm)', category: 'Tools', neededFrom: 'Module 2', essential: true },
  { id: 'eq-fish-slice', name: 'Fish slice / flexible turner', category: 'Tools', neededFrom: 'Module 9', essential: false },
  { id: 'eq-ladle', name: 'Ladles (60 ml + 120 ml)', category: 'Tools', neededFrom: 'Module 4', essential: true },
  { id: 'eq-sieve', name: 'Fine-mesh sieve / chinois', category: 'Tools', neededFrom: 'Module 4', essential: true },
  { id: 'eq-ricer', name: 'Potato ricer or food mill', category: 'Tools', neededFrom: 'Module 7', essential: false },
  { id: 'eq-blender', name: 'Stick or jug blender', category: 'Tools', neededFrom: 'Module 4', essential: true },
  { id: 'eq-processor', name: 'Food processor', category: 'Tools', neededFrom: 'Module 12', essential: false },
  { id: 'eq-mixer', name: 'Stand mixer', category: 'Tools', neededFrom: 'Module 12', essential: false, note: 'Hand kneading and a hand mixer will get you through.' },
  { id: 'eq-pasta-machine', name: 'Pasta machine', category: 'Tools', neededFrom: 'Module 8', essential: false, note: 'A rolling pin works; the machine makes it repeatable.' },
  { id: 'eq-rolling-pin', name: 'Rolling pin', category: 'Tools', neededFrom: 'Module 8', essential: true },
  { id: 'eq-mandoline', name: 'Mandoline (with guard)', category: 'Tools', neededFrom: 'Module 6', essential: false },
  { id: 'eq-microplane', name: 'Microplane / fine grater', category: 'Tools', neededFrom: 'Module 2', essential: true },
  { id: 'eq-piping', name: 'Piping bags + plain tips', category: 'Tools', neededFrom: 'Module 12', essential: false },
  { id: 'eq-tart-tin', name: '23 cm loose-base tart tin', category: 'Tools', neededFrom: 'Module 12', essential: false },
  { id: 'eq-cake-tin', name: '20 cm springform / cake tin', category: 'Tools', neededFrom: 'Module 12', essential: false },

  // Storage & service
  { id: 'eq-containers', name: 'Stackable storage containers + labels', category: 'Storage & service', neededFrom: 'Module 1', essential: true },
  { id: 'eq-squeeze', name: 'Squeeze bottles', category: 'Storage & service', neededFrom: 'Module 14', essential: false },
  { id: 'eq-plates', name: 'Large white plates ×6 (28–30 cm)', category: 'Storage & service', neededFrom: 'Module 14', essential: false, note: 'Your plating canvas for Stage 3 onwards.' },
  { id: 'eq-cloths', name: 'Kitchen cloths + side towels', category: 'Storage & service', neededFrom: 'Module 1', essential: true },
]
