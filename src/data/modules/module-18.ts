import type { CourseModule, Recipe } from '../../types/content'

export const module18: CourseModule = {
  id: 'm18',
  number: 18,
  stage: 4,
  title: 'Costing, Pricing & Profitability',
  subtitle: 'Every plate is a P&L',
  description:
    'This module puts a dollar figure on everything you cook and teaches you to price it like a professional. You will build standard recipe cards, cost dishes from real supplier pack prices at the EP level, apply Q-factor, handle GST correctly, and price using food-cost %, GP targeting and menu psychology. Three classic bistro dishes are cooked and fully costed as worked exercises — the same workflow the capstone will demand at menu scale.',
  objectives: [
    'Write a standard recipe card with weighed portions that makes a dish repeatable and costable',
    'Cost a recipe from supplier pack prices at EP: pack price → unit cost → used quantity → ÷ yield %',
    'Apply a 3–5% Q-factor and divide to a true portion cost',
    'Price with GST handled correctly (menu price ÷ 1.1 = ex-GST revenue) and verify food-cost % and GP%',
    'Run a simple menu-mix analysis and calculate a break-even point in covers',
  ],
  difficulty: 3,
  estimatedHours: 10,
  prerequisites: ['m17'],
  skillsUnlocked: [
    'Standard recipe cards',
    'EP recipe costing & Q-factor',
    'GP% and food-cost % fluency',
    'GST-correct menu pricing',
    'Menu engineering & break-even basics',
  ],
  equipment: [
    'Digital scales (1 g resolution)',
    'A spreadsheet or ruled costing sheets',
    'Calculator (the phone is fine; the discipline is not optional)',
    'Portion tools: ladles, scoops and ramekins of known volume',
    'Probe thermometer',
    'Heavy frying pan and a large pasta pot',
    '6 × 150 ml ramekins or dariole moulds',
  ],
  ingredients: [
    'Chicken breasts or a whole bird to break down (m17 habits apply)',
    'Dried rigatoni, parmesan, pancetta or bacon',
    'Eggs, cream, milk, caster sugar, vanilla',
    'Potatoes, green beans, lemons',
    'Butter, olive oil, garlic, thyme',
    'Tinned tomatoes and red wine (pantry at par)',
  ],
  lessons: [
    {
      id: 'm18-l01',
      title: 'The standard recipe card & portion control',
      summary: 'A dish you cannot repeat, you cannot cost. The standard recipe card fixes quantities, methods and portions — and portion control is where the margin lives day to day.',
      theory: [
        {
          heading: 'Standardise before you cost',
          body: 'A standard recipe card states: dish name, total yield and number of portions, every ingredient in grams or millilitres, method in numbered steps with critical points, and the plated portion spec — "180 g chicken, 150 g purée, 80 g beans, 60 ml sauce", not "a piece of chicken with some mash". Costing an unstandardised recipe is costing a rumour: if the portion drifts, the cost drifts with it.\n\nThe card is also the contract with your future self. Cook the dish twice from the card and weigh the plated components both times; anything that moved more than 10% gets a tighter spec or a better tool. This is exactly the format the capstone requires for every dish on your menu.',
        },
        {
          heading: 'Portion control is daily margin',
          body: 'Portion control is the least glamorous, most profitable habit in hospitality. If a 180 g chicken portion drifts to 200 g — one careless 10% — and the chicken costs $14/kg EP, that is $0.28 given away per plate. At 60 covers a week it is $873 a year, from one ingredient on one dish. Multiply across a menu and over-portioning quietly eats the entire net profit of many small restaurants.\n\nThe tools are boring and effective: scales at the plating bench, ladles and scoops by number (a 60 ml ladle for sauce, a No. 12 scoop for mash), and an occasional audit — weigh five plated portions unannounced and compare to spec. Under-portioning is the mirror error: it saves cents and costs customers. The card states the number; the bench holds it.',
        },
      ],
      demonstrations: [
        {
          title: 'Building the card for the bistro chicken',
          steps: [
            'Cook r-m18-01 once, weighing every component as you plate: protein, purée, beans, sauce.',
            'Write the card: name, yield (4 portions), every ingredient in g/ml, numbered method, critical points (brine time, 62–65°C core, sauce mounted off heat).',
            'Fix the portion spec from what you actually plated: e.g. 180 g chicken / 150 g purée / 80 g beans / 60 ml sauce.',
            'Assign a tool to each portion: scales for protein, scoop for purée, ladle for sauce.',
            'Cook the dish again days later from the card alone, then weigh five components and compare — anything off by more than 10% gets a note on the card.',
            'Date and version the card (v1.1); it now feeds the costing sheet in the next lesson.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Portion audit',
          instructions: 'Plate the chicken dish for four, then weigh every component on every plate against the card spec. Calculate your worst drift as a percentage and its cost in cents per plate using your m17 true-cost numbers. Write the fix (tool, technique or spec change) on the card.',
          repeatPractice: 'Audit one dish per week through Module 19. The capstone execution rubric scores portion consistency across covers — this drill is how it becomes automatic.',
        },
      ],
      recipeIds: ['r-m18-01'],
      techniqueIds: ['t-recipe-writing', 't-portion-control'],
      troubleshooting: [
        {
          problem: 'The second cook from the card produced a different dish',
          cause: 'The card recorded intentions, not observations — quantities were written before they were weighed.',
          fix: 'Re-cook and write the card from the scales as you go. A standard recipe is measured off a successful cook, not drafted at a desk.',
        },
      ],
    },
    {
      id: 'm18-l02',
      title: 'Costing a recipe: EP, pack prices & Q-factor',
      summary: 'From supplier pack price to true portion cost: unit costs, yield adjustment, the Q-factor, and the honesty to count everything.',
      theory: [
        {
          heading: 'The costing chain',
          body: 'Every ingredient line follows the same chain: pack price → unit cost → used quantity → yield adjustment. Butter at $6.50 per 500 g is $0.013/g; 40 g in the sauce costs $0.52. Where trim is involved, cost at EP: chicken breast bought whole-bird at $9.50/kg with a 65% yield truly costs $9.50 ÷ 0.65 = $14.62/kg, so a 180 g portion is $2.63 — not the $1.71 the shelf price whispers.\n\nSum every line for the batch, divide by portions, and resist rounding down. The classic amateur error is costing the hero ingredients and hand-waving the rest; the professional error is trusting last quarter’s prices. Re-cost when any key ingredient moves 10% or more — and in Australia, they do.',
        },
        {
          heading: 'Q-factor: the cost of everything you never weigh',
          body: 'Salt, pepper, cooking oil, the butter that seasons the beans, the parsley on top, the lemon wedge — no kitchen weighs them per dish, and skipping them understates every cost on the menu. The industry fix is the Q-factor: add 3–5% to the summed ingredient cost to cover incidentals. A dish costing $5.80 in listed ingredients carries $0.17–$0.29 of quiet extras; call it $6.05 at 4% and you are telling yourself the truth.\n\nUse 3% for simple dishes with few garnishes, 5% for garnish-heavy or fried dishes (oil is the great unweighed expense). The Q-factor is not padding — it is the difference between a costing sheet and a wish. Your capstone costing sheets are expected to show it as an explicit line.',
        },
      ],
      demonstrations: [
        {
          title: 'Costing the rigatoni, line by line',
          steps: [
            'List every ingredient of r-m18-02 with the used quantity from the recipe card (e.g. rigatoni 400 g, pancetta 150 g, tomatoes 800 g).',
            'Against each, write the supplier pack price as bought: rigatoni $2.20/500 g, pancetta $7.50/150 g, tinned tomatoes $1.60/400 g, parmesan $9.00/200 g.',
            'Compute unit costs and line costs: rigatoni $0.0044/g × 400 g = $1.76; tomatoes 2 tins = $3.20; parmesan 60 g = $2.70; pancetta = $7.50.',
            'Sum the lines (with onion, garlic, wine and oil this batch lands near $17.20), then add a 4% Q-factor: $17.20 × 1.04 = $17.89.',
            'Divide by portions: $17.89 ÷ 4 = $4.47 per portion. Write it on the costing sheet with today’s date.',
            'Stress-test one price: if pancetta rises 20%, the portion moves to about $4.85 — note which lines dominate the cost; they are the ones to watch and the ones to negotiate.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Three-dish costing file',
          instructions: 'Cost all three module recipes (r-m18-01, r-m18-02, r-m18-03) from real pack prices you gathered shopping — not guesses. Each sheet shows every line, the Q-factor, batch total and portion cost, dated. Flag the two most expensive lines on each dish.',
          repeatPractice: 'Cost one dish from your regular repertoire each week until the capstone. Menu-scale costing in Module 19 should be assembly of a habit, not a new skill.',
        },
      ],
      recipeIds: ['r-m18-01', 'r-m18-02'],
      techniqueIds: ['t-recipe-costing', 't-yield-testing'],
      troubleshooting: [
        {
          problem: 'The costed portion price seems impossibly low',
          cause: 'Costing at AP instead of EP, missing lines (oil, butter, garnish), or no Q-factor.',
          fix: 'Walk the chain again: yield-adjust every trimmed ingredient, list everything that touches the plate, add the Q-factor. Suspiciously cheap means incompletely counted.',
        },
        {
          problem: 'Pack maths keeps tripping between grams, packs and dollars',
          cause: 'Mixing units mid-calculation.',
          fix: 'Force every line through the same three columns: $/g (or $/ml), quantity used, line cost. One direction of travel, no shortcuts.',
        },
      ],
    },
    {
      id: 'm18-l03',
      title: 'Pricing: food-cost %, GP%, GST and the menu price',
      summary: 'Turning a portion cost into a menu price — with the GST step Australians get wrong, and the pricing methods professionals actually use.',
      theory: [
        {
          heading: 'The three numbers, and the GST trap',
          body: 'Food-cost % = portion cost ÷ ex-GST selling price × 100. GP% = 100 − food-cost %. Australian menu prices include 10% GST that is never yours — divide the menu price by 1.1 first. A $26 menu dish returns $23.64 ex-GST; with a $4.47 portion cost, food cost is 18.9% and GP is 81.1%. Skip the division and you would report 17.2% — flattering, wrong, and compounding across every dish.\n\nHealthy targets: most restaurants run 28–35% food cost overall; the capstone asks for blended GP of 65% or better (food cost ≤ 35%). Remember what GP% is not: it is gross profit before labour, rent and power. A 70% GP dish is not "70% profit" — it is the contribution that has to pay for everything else.',
        },
        {
          heading: 'Three pricing methods',
          body: 'Factor pricing: divide portion cost by the target food-cost % — $4.47 ÷ 0.30 = $14.90 ex-GST, × 1.1 = $16.39, rounded to a menu-friendly $16.50. GP targeting is the same arithmetic aimed at margin: for 70% GP, price so cost is 30% of ex-GST revenue. Both give a floor, not an answer.\n\nThe answer comes from psychology and context: charm prices ($26 reads meaningfully cheaper than $27.90; whole-dollar prices without cents read confident on bistro menus), price relative to neighbours on your own menu (a $38 steak makes the $29 chicken look reasonable — the anchor effect), and what your market expects for the category. Method: calculate the floor, choose the price the menu can carry, then verify the food-cost % lands inside target. Price first and check later — never the reverse.',
        },
      ],
      demonstrations: [
        {
          title: 'Pricing the crème caramel, floor to menu',
          steps: [
            'Take the portion cost from your r-m18-03 costing sheet — roughly $1.65 with Q-factor (eggs, cream, milk, sugar, vanilla are humble).',
            'Factor-price at a 25% dessert food-cost target: $1.65 ÷ 0.25 = $6.60 ex-GST.',
            'Add GST: $6.60 × 1.1 = $7.26 — the arithmetic floor, not a menu price.',
            'Consider the context: bistro desserts in your city sit at $12–16. Choose $14.',
            'Verify: $14 ÷ 1.1 = $12.73 ex-GST; $1.65 ÷ $12.73 = 13.0% food cost, 87% GP — desserts subsidise the menu, which is exactly their job.',
            'Record price, food-cost % and GP% on the costing sheet. Repeat the walk for the chicken and the rigatoni, then compute the three-dish average GP.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Price the bistro trio',
          instructions: 'Set menu prices for all three module dishes using the floor-then-context method. For each, record: portion cost, ex-GST revenue (price ÷ 1.1), food-cost %, GP%, and one sentence on why the price fits a real menu. Target: every dish under 35% food cost and a trio blended GP of 65%+.',
          repeatPractice: 'Re-run the pricing walk whenever you re-cost a dish. In the capstone, every dish carries exactly this paper trail.',
        },
      ],
      recipeIds: ['r-m18-03'],
      techniqueIds: ['t-recipe-costing', 't-menu-engineering'],
      troubleshooting: [
        {
          problem: 'Every "correct" price looks too expensive for friends and family',
          cause: 'You are comparing a fully-costed price to supermarket ingredients, not to restaurant economics (labour, rent, waste, GST).',
          fix: 'Hold the discipline in the exercise even if you charge nothing at home. The capstone judges whether your prices would survive commercially, not whether your mates would pay them.',
        },
      ],
    },
    {
      id: 'm18-l04',
      title: 'Menu engineering & break-even',
      summary: 'Reading a menu as a portfolio: stars, plowhorses, puzzles and dogs — and the break-even arithmetic that tells you what a service must sell.',
      theory: [
        {
          heading: 'Menu mix: dollars, not percentages',
          body: 'Menu engineering crosses two measures for each dish: popularity (share of items sold) and GP dollars per plate — dollars, because you bank dollars, not percentages. An 85% GP soup earning $8.20 a plate is a worse engine than a 62% GP steak earning $17.30. Classify each dish: Stars (popular, high GP$) — protect and feature; Plowhorses (popular, low GP$) — raise price or cut cost; Puzzles (unpopular, high GP$) — rename, reposition, or let a waiter sell them; Dogs (unpopular, low GP$) — remove without sentiment.\n\nWorked mix: over a week you sell rigatoni 42 times at $12.53 GP ($526), chicken 31 at $18.13 ($562), crème caramel 24 at $11.08 ($266). The chicken is your star despite selling less — the numbers reorder your instincts, which is the whole point of doing them.',
        },
        {
          heading: 'Break-even in covers',
          body: 'Break-even tells you what a service must do before it earns anything: fixed costs ÷ average contribution per cover. Suppose a small supper-club night costs $310 in fixed terms (venue share $180, power and sundries $50, hired help $80) and your average cover spends $52 ex-GST with a 68% GP — contribution $35.36. Break-even = $310 ÷ $35.36 ≈ 8.8, so cover nine pays the bills and covers ten onward earn.\n\nThe formula generalises: raise GP or average spend and break-even falls; add fixed cost and it climbs. For the capstone dinner you will run this arithmetic for real — even a free dinner for friends has a break-even, and knowing yours is the difference between hosting and haemorrhaging.',
        },
      ],
      demonstrations: [
        {
          title: 'A one-page menu-mix analysis',
          steps: [
            'Rule a table: dish, number sold, menu price, ex-GST price, portion cost, GP$ per plate, total GP$.',
            'Enter the three bistro dishes with an imagined week of sales (use 42 / 31 / 24, or your own numbers).',
            'Compute GP$ per plate for each: ex-GST price − portion cost.',
            'Compute each dish’s share of items sold and share of total GP$ — the two axes.',
            'Classify: above-average popularity + above-average GP$ = star; map the other three quadrants.',
            'Write one action per dish (feature it, reprice it, rework it, or cut it) — analysis without an action is decoration.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Break-even for your capstone dinner',
          instructions: 'Draft the fixed costs of your planned capstone service (ingredients are variable; count hire, extras, printing, fuel). Using your trio’s average GP per cover, calculate break-even in covers for three price points. Keep the page — it becomes the margin-targets input to Module 19.',
          repeatPractice: 'Re-run the break-even with real numbers after the capstone service and compare. Planned-vs-actual is the post-service review’s core discipline.',
        },
      ],
      recipeIds: ['r-m18-01', 'r-m18-02', 'r-m18-03'],
      techniqueIds: ['t-menu-engineering', 't-portion-control'],
      troubleshooting: [
        {
          problem: 'Menu-mix classification flips depending on the week',
          cause: 'Small sales samples are noisy; one quiet Tuesday reorders the quadrants.',
          fix: 'Classify on four weeks of data minimum, and treat borderline dishes as "watch", not "act". Engineering is a season-by-season practice, not a daily one.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Forgetting the GST division and reporting flattering food-cost percentages',
      cause: 'The menu price feels like revenue; the $2.36 of GST in a $26 dish is invisible until BAS time.',
      fix: 'Divide by 1.1 first, always. Write "ex-GST" as a column header on every costing sheet so the step cannot be skipped.',
    },
    {
      problem: 'Costing hero ingredients and ignoring oil, butter, garnish and salt',
      cause: 'Small lines feel like rounding errors, and weighing them feels absurd.',
      fix: 'That is what the Q-factor is for: 3–5% on top of every summed cost, as an explicit line. Absurd to weigh, expensive to ignore.',
    },
    {
      problem: 'Chasing GP percentage instead of GP dollars',
      cause: 'Percentages are tidy and feel comparable; the 87% GP dessert looks like the hero.',
      fix: 'You bank dollars. Rank dishes by GP$ per plate and total GP$ contribution before deciding what to feature or cut.',
    },
    {
      problem: 'Pricing by cost-plus arithmetic alone',
      cause: 'The formula gives a number, and numbers feel final.',
      fix: 'The formula gives the floor. The menu, the neighbourhood and the anchor dishes set the price — then you verify the percentage. Price first, check second.',
    },
  ],
  assessment: {
    id: 'as-m18',
    moduleId: 'm18',
    title: 'The Bistro Trio, Fully Costed',
    brief:
      'Cook and fully document all three bistro dishes as one exercise: (1) a standard recipe card per dish with weighed portion specs, cooked and verified twice; (2) a dated costing sheet per dish from real pack prices — every line, EP adjustments, 3–5% Q-factor, portion cost; (3) menu prices set with the GST step shown, food-cost % and GP% verified, trio blended GP ≥ 65%; (4) a one-page menu-mix analysis with a classification and action per dish, plus a break-even calculation for a hypothetical 20-cover service.',
    rubric: [
      { criterion: 'Recipe cards & portion control', maxScore: 10, guidance: '9–10: complete cards, portions in grams, second cook within 10% of spec, audit recorded. Below 6: unweighed portions or cards written from memory.' },
      { criterion: 'Costing accuracy', maxScore: 10, guidance: 'Every line priced from real packs, EP adjustments where trim exists, Q-factor explicit, arithmetic correct to the cent, sheets dated.' },
      { criterion: 'Pricing & GST handling', maxScore: 10, guidance: 'Ex-GST step shown on every dish, food-cost % and GP% correct, prices defensible against a real menu context, blended GP ≥ 65%.' },
      { criterion: 'Menu-mix & break-even analysis', maxScore: 5, guidance: 'Quadrants computed from GP dollars, one concrete action per dish, break-even arithmetic correct and assumptions stated.' },
      { criterion: 'Cooking quality of the trio', maxScore: 5, guidance: 'The numbers describe dishes worth selling: chicken juicy at temperature, pasta properly emulsified, caramel set silken with clean caramel.' },
    ],
    passScore: 28,
    evidence:
      'Photos of the three plated dishes and of the paperwork: three recipe cards, three costing sheets, the pricing page with GST workings, and the menu-mix/break-even page.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'All three bistro dishes cooked twice — once to build the card, once to verify it',
    'Costing sheets, pricing pages and the menu-mix analysis completed with real supplier prices',
    'Assessment passed (28/40 or better) with dishes and paperwork photographed',
  ],
}

export const module18Recipes: Recipe[] = [
  {
    id: 'r-m18-01',
    title: 'Bistro Chicken Breast, Pan Jus, Pommes Purée & Beans',
    moduleId: 'm18',
    description:
      'The archetypal bistro main: brined chicken breast pan-roasted to temperature, a four-minute jus from the fond, silky potato purée and buttered beans — cooked to a weighed portion spec and costed line by line. The costing steps are part of the method, because in this module they are part of the dish.',
    difficulty: 3,
    serves: 4,
    timeMins: 90,
    techniqueIds: ['t-pan-roasting', 't-pan-sauce', 't-potato-puree', 't-brining', 't-recipe-costing', 't-portion-control'],
    ingredients: [
      { item: 'Chicken breasts, skin on', qty: 4, unit: 'each', prep: 'about 200 g each; dry-brined 1% salt, 12 h ahead if possible' },
      { item: 'Floury potatoes (sebago or dutch cream)', qty: 800, unit: 'g', prep: 'peeled, even chunks — weigh the peel for your yield note' },
      { item: 'Butter', qty: 150, unit: 'g', prep: '100 g cold cubes for purée, 50 g for beans and jus' },
      { item: 'Milk', qty: 100, unit: 'ml', prep: 'hot' },
      { item: 'Green beans', qty: 320, unit: 'g', prep: 'topped' },
      { item: 'Chicken stock', qty: 250, unit: 'ml' },
      { item: 'Thyme sprigs', qty: 4, unit: 'each' },
      { item: 'Garlic', qty: 2, unit: 'each', prep: 'crushed' },
      { item: 'Olive oil', qty: 20, unit: 'ml' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
    ],
    method: [
      'Before cooking, open the costing sheet: list every ingredient above with its pack price as bought (e.g. breasts $14.50/kg, butter $6.50/500 g, potatoes $3.50/kg) — you will fill in line costs as you weigh.',
      'Start the purée: potatoes in cold salted water, simmer gently until a knife slides through, about 20 minutes.',
      'Raw window for the chicken: pat dry (never wash), season if not brined, then lay skin-down in a cold oven-proof pan with oil and bring to medium heat. Render 10–12 minutes until deep gold. Reset the board and hands completely.',
      'Flip, add thyme and garlic, and finish in a 190°C oven to 62–65°C core (probe it). Rest on a rack — the carryover finishes the job and the resting juices belong to the jus.',
      'Rice the potatoes while hot, dry the purée over low heat 1 minute, then beat in the cold butter, then the hot milk. Season. It should just hold a soft peak.',
      'Blanch the beans in 2–3% salted water for 2 minutes, drain hard, and roll in 20 g butter with a squeeze of lemon and salt.',
      'Jus: pour off excess fat, deglaze the pan with stock, reduce by two-thirds scraping the fond, mount 30 g cold butter off the heat, and add the resting juices. Season last — reduction concentrates salt.',
      'Plate to spec and weigh the first plate: 1 breast (about 180 g cooked), 150 g purée (scoop), 80 g beans, 60 ml jus (ladle). Correct the spec to what you actually plated.',
      'Close the sheet: line costs summed (typically about $16.60 for four), + 4% Q-factor ≈ $17.26, ÷ 4 = about $4.32 a portion. Price it in lesson 3.',
    ],
    chefNotes: [
      'This plate is deliberately the same skill set as your Stage 2 and 3 work — nothing new at the stove, everything new on the clipboard. If the cooking wobbles, the costing is measuring a dish you cannot yet repeat.',
      'Cost it with breast bought two ways — pre-cut versus your m17 whole-bird true cost — and note which wins. On most weeks the whole bird funds the jus stock for free and still comes in cheaper.',
    ],
    reinforces: ['Pan-roasting to probe temperature', 'Potato purée discipline', 'Blanch-and-butter vegetables'],
  },
  {
    id: 'r-m18-02',
    title: 'Rigatoni all’Amatriciana-ish, Costed by the Line',
    moduleId: 'm18',
    description:
      'A punchy pancetta, tomato and pecorino rigatoni — the classic high-margin pasta plate — finished with a proper starch-water emulsion and costed ingredient by ingredient. The exercise shows why pasta anchors every bistro menu: a $4.50 portion cost that plates like $26.',
    difficulty: 2,
    serves: 4,
    timeMins: 50,
    techniqueIds: ['t-tomato-sauce', 't-pasta-emulsion', 't-recipe-costing', 't-portion-control', 't-umami-layering'],
    ingredients: [
      { item: 'Dried rigatoni', qty: 400, unit: 'g' },
      { item: 'Pancetta or streaky bacon', qty: 150, unit: 'g', prep: 'cut into batons' },
      { item: 'Tinned whole tomatoes', qty: 800, unit: 'g', prep: 'crushed by hand' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'small dice' },
      { item: 'Garlic', qty: 3, unit: 'each', prep: 'sliced' },
      { item: 'Dried chilli flakes', qty: 2, unit: 'g' },
      { item: 'Pecorino or parmesan', qty: 60, unit: 'g', prep: 'finely grated, plus rind to the sauce' },
      { item: 'Olive oil', qty: 30, unit: 'ml' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Open the costing sheet and enter pack prices before you cook: rigatoni $2.20/500 g, pancetta $7.50/150 g, tomatoes $1.60/400 g tin, cheese $9.00/200 g. The two lines that dominate this dish are already visible.',
      'Render the pancetta in the oil over medium heat until the fat runs and the batons crisp, about 6 minutes. Lift out the crisp pieces; leave the fat — it is a paid-for flavour asset, and the Q-factor is not for things you can actually weigh.',
      'Sweat the onion in the pancetta fat with a pinch of salt until soft, 8 minutes; add garlic and chilli for the final minute.',
      'Add the tomatoes and the cheese rind; simmer 20 minutes until thick and brick-red. Season in layers, tasting.',
      'Cook the rigatoni in 1% salted water, pulling it 2 minutes short of the packet time. Reserve 250 ml of the starchy water.',
      'Marry pasta and sauce: rigatoni into the pan with a ladle of pasta water, tossing hard over heat until the sauce turns glossy and clings — the emulsion is the technique being re-drilled here.',
      'Off the heat, toss through most of the cheese and the crisp pancetta. Loosen with pasta water if it tightens.',
      'Plate 4 equal portions — weigh them the first time (about 320 g each) — and finish with the remaining cheese.',
      'Close the sheet: lines total about $17.20, + 4% Q-factor = $17.89, ÷ 4 = $4.47 a portion. At $26 on a menu that is 18.9% food cost ex-GST — write those numbers where you will see them.',
    ],
    chefNotes: [
      'Pasta is the menu engineer’s favourite quadrant: cheap, fast, loved. When your capstone menu needs its margin engine, remember this sheet.',
      'The pancetta line is 44% of the dish cost — this is what "flag the dominant lines" means. Swapping to good bacon at $4.80 drops the portion cost to about $3.80 without embarrassing the dish; taste both and decide like an owner.',
    ],
    reinforces: ['Tomato sauce depth', 'Starch-water emulsion', 'Equal portioning by weight'],
  },
  {
    id: 'r-m18-03',
    title: 'Crème Caramel, Costed to the Cent',
    moduleId: 'm18',
    description:
      'Six silken crème caramels — dry caramel, gently baked custard, clean unmoulding — for a portion cost around $1.65. Dessert is where menus quietly make their margin, and this classic proves it with a food cost under 15% at any sane bistro price.',
    difficulty: 3,
    serves: 6,
    timeMins: 90,
    techniqueIds: ['t-custard', 't-caramel', 't-recipe-costing', 't-portion-control'],
    ingredients: [
      { item: 'Caster sugar', qty: 150, unit: 'g', prep: 'for the caramel' },
      { item: 'Eggs', qty: 3, unit: 'each' },
      { item: 'Egg yolks', qty: 2, unit: 'each', prep: 'whites frozen and labelled — trim has value in pastry too' },
      { item: 'Caster sugar', qty: 80, unit: 'g', prep: 'for the custard' },
      { item: 'Full-cream milk', qty: 400, unit: 'ml' },
      { item: 'Pouring cream', qty: 200, unit: 'ml' },
      { item: 'Vanilla bean or paste', qty: 1, unit: 'tsp' },
      { item: 'Fine salt', qty: 1, unit: 'g' },
    ],
    method: [
      'Costing first, it takes four minutes: eggs $6.50/dozen, milk $1.80/L, cream $3.60/300 ml, sugar $1.60/kg, vanilla paste about $0.60 a teaspoon. Line it up: the whole batch lands near $9.50; with a 3% Q-factor, $9.79 — $1.63 a portion.',
      'Dry caramel: sugar in an even layer in a clean pan over medium heat. No stirring — swirl only as it melts. Take it to deep amber (about 180°C; it should smell toasty, one shade before you get nervous) and divide immediately between six 150 ml ramekins, tilting to coat the bases.',
      'Heat milk, cream, vanilla and salt to a bare simmer. Whisk eggs, yolks and sugar just to combine — minimal foam; foam becomes surface bubbles on the finished custard.',
      'Temper: pour the hot dairy over the eggs gradually, whisking, then strain the lot through a fine sieve into a jug. Straining is non-negotiable; it removes chalazae and every future regret.',
      'Fill the ramekins, then set them in a deep tray. Pour boiling water around them to two-thirds up their sides — the bain-marie keeps the custard under 100°C everywhere.',
      'Bake at 150°C for 30–35 minutes until set at the edges with a definite tremble at the centre; a probe should read 80–82°C in the middle.',
      'Chill a minimum of 4 hours, better overnight — the caramel needs time to dissolve into sauce beneath the custard. Label and date; use within 3 days.',
      'Unmould: run a thin knife around the edge, invert onto a rimmed plate with one decisive shake, and let the caramel flood over. Weigh one for the card (about 145 g); serve cold.',
      'Close the sheet: at a $14 menu price, $14 ÷ 1.1 = $12.73 ex-GST; $1.63 ÷ $12.73 = 12.8% food cost, 87.2% GP. Note in the file why every serious menu carries a custard.',
    ],
    chefNotes: [
      'The tremble is the exam: a custard baked until firm in the centre will be rubbery when cold. Carryover sets it — trust 80–82°C and the wobble, not your nerves.',
      'This dessert holds three days and unmoulds to order, which is exactly why it belongs on a one-cook capstone menu: zero à-la-minute pastry work during service.',
    ],
    reinforces: ['Custard temperature control', 'Dry caramel to deep amber', 'Batch portioning and holding'],
  },
]
