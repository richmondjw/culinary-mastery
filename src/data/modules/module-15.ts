import type { CourseModule, Recipe } from '../../types/content'

export const module15: CourseModule = {
  id: 'm15',
  number: 15,
  stage: 3,
  title: 'Menu Design Theory',
  subtitle: 'The menu is the business plan',
  description:
    'A menu is not a list of dishes you like — it is a designed system balancing the diner’s experience, the kitchen’s capacity and the ingredients’ economics. This module teaches menu structure and balance, cross-utilisation of ingredients across dishes, the execution reality of station load, and the psychology of how menus are read and ordered from. You will finish by designing a balanced three-course menu on paper and cooking a menu-ready trio engineered from a single shopping list.',
  objectives: [
    'Structure a menu: courses, options per course, and balance across richness, proteins, temperatures and dietary needs',
    'Design cross-utilisation so ingredients and prep are shared across dishes instead of forming islands',
    'Assess a menu’s execution reality: station load, pick-up times, and the prep-ahead versus à la minute split',
    'Apply menu psychology deliberately: position, anchoring, naming and highlights',
    'Classify dishes conceptually as stars, plowhorses, puzzles and dogs — ahead of the costing numbers in Module 18',
    'Cook a three-course menu-ready trio from one shopping list with shared prep',
  ],
  difficulty: 3,
  estimatedHours: 8,
  prerequisites: ['m13'],
  skillsUnlocked: [
    'Menu structure & balance',
    'Cross-utilisation design',
    'Station-load assessment',
    'Menu psychology',
    'Menu engineering (conceptual)',
  ],
  equipment: [
    'A3 paper, index cards and pens — menu design is a paper sport',
    'A spreadsheet or ruled notebook for the cross-utilisation map',
    'Digital scales and a probe thermometer',
    'Large stockpot (6 L+) and a heavy ovenproof frying pan',
    'Potato ricer and a fine sieve',
    'Six small serving glasses or ramekins for the posset',
    'A kitchen timer — pick-up times get measured, not guessed',
  ],
  ingredients: [
    'Two whole chickens (about 1.6 kg each) — the trio’s engine',
    'Leeks (3 large) and floury potatoes (1.2 kg)',
    'Cream (900 ml) — shared across all three courses',
    'Lemons (4) and a bunch each of thyme and chives',
    'Day-old sourdough or similar (300 g) for the shared crumb',
    'Butter (250 g) and milk',
    'Bay leaves, black peppercorns, caster sugar',
  ],
  lessons: [
    {
      id: 'm15-l01',
      title: 'Menu structure and balance',
      summary: 'Course architecture, how many options per course, and balancing a menu across richness, protein, temperature and diet.',
      theory: [
        {
          heading: 'Course architecture and option count',
          body: 'A menu’s skeleton is its course structure — entrées, mains, desserts at minimum, with sides, snacks or a cheese course as deliberate additions, never drift. Within each course, fewer options than instinct suggests: five to seven mains is the working ceiling for a real kitchen, three to five entrées and desserts. Every option is prep, storage, waste risk and a decision the diner must make; menus with thirty dishes signal a freezer, not a range. The professional question is never “what else could we offer?” but “what does this option cost the kitchen, and what does it add for the diner?”\n\nStructure also sets the meal’s arc: lighter and brighter early, richest at the main, sweet to close. An entrée heavier than its main is a sequencing error diners feel even when they cannot name it.',
        },
        {
          heading: 'Balance across the axes',
          body: 'Read any course you design down four axes. Protein spread: a mains list of four should not be three chicken dishes — vary the animals, and treat the vegetarian option as a dish you would order, not an apology. Richness spread: at least one light, sharp option per course against the braises and creams. Temperature and texture spread: something cold or raw against the hot and soft. And dietary coverage as design, not retrofit: a strong vegetarian option per course, at least one gluten-free-friendly path through all three courses, and known allergens (nuts, shellfish) never hidden in unexpected places.\n\nThe test is the grid: courses as rows, axes as columns. Fill it in for any menu and the gaps announce themselves — three brown soft rich mains, no fish, no cold entrée. Balance is visible on paper long before anyone cooks.',
        },
      ],
      demonstrations: [
        {
          title: 'Menu autopsy on a real menu',
          steps: [
            'Pull the menu of a restaurant you know online; print it or copy it onto paper.',
            'Draw the balance grid: one row per course, columns for protein, richness, temperature/texture, dietary coverage.',
            'Fill the grid dish by dish, using one-word entries (chicken / rich / hot-soft / GF-possible).',
            'Circle the collisions: repeated proteins, all-rich courses, missing cold or vegetarian options.',
            'Count options per course against the five-to-seven ceiling and note anything over.',
            'Write a three-line verdict: the menu’s strongest structural choice, its clearest gap, and the one change you would make first.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The balance grid drill',
          instructions: 'Run the autopsy on three different menus — one fine-dining, one pub or bistro, one café. Keep the three grids side by side and write five lines on how option count and balance shift with the venue’s ambition and kitchen size.',
          repeatPractice: 'Every menu you design from here to the Module 20 capstone gets a balance grid before anything else. In Module 18 the same grid grows costing columns — the habit starts now.',
        },
      ],
      recipeIds: [],
      techniqueIds: ['t-menu-engineering', 't-flavour-pairing'],
      troubleshooting: [
        {
          problem: 'My draft menus balloon to ten options per course',
          cause: 'Designing by accumulation — every dish you can cook goes on the list.',
          fix: 'Design by subtraction: draft long, then cut to five per course, keeping only dishes that earn their slot on the balance grid. The cuts become specials, not passengers.',
        },
      ],
    },
    {
      id: 'm15-l02',
      title: 'Cross-utilisation: one shopping list, many dishes',
      summary: 'Designing menus as ingredient webs — shared prep, shared components, and trim that becomes tomorrow’s dish.',
      theory: [
        {
          heading: 'Ingredient webs, not ingredient islands',
          body: 'The amateur menu buys forty ingredients and uses each once. The professional menu buys twenty and uses each twice or three times: the chicken whose breasts headline the main sends its carcass to the entrée’s stock and its skin to a garnish; one crumb seasons a soup and bases a dessert; one batch of pickled shallots touches three plates. This is cross-utilisation, and it earns three ways at once — a shorter, cheaper shopping list; less waste, because every part has a destination before you buy; and fresher stock, because ingredients turn over fast instead of dying in the coolroom.\n\nDesign it deliberately: list every raw ingredient down the page and every dish across it, and tick the intersections. Any ingredient with one tick must justify itself or be swapped for something already on the list.',
        },
        {
          heading: 'Shared prep and the trim loop',
          body: 'Cross-utilisation applies to labour as much as to ingredients. One stock feeds a soup, a sauce and tomorrow’s braise; one purée base becomes a side and a sauce foundation; the crumb toasted for the entrée is the same crumb, differently seasoned, on the dessert. When you design a dish, ask what its components could do elsewhere on the menu — components designed once and deployed twice halve the prep list.\n\nThe trim loop closes the system: leek tops and chicken carcasses into stock, bread ends into crumbs, herb stems into infusions, egg whites banked for clarification or meringue. This is Module 1’s stock-bag habit scaled up to menu design — and it is why the trio in this module is shopped as one list. In Module 18 you will put dollar figures on these loops; here you build the reflex.',
        },
      ],
      demonstrations: [
        {
          title: 'Mapping the trio',
          steps: [
            'Lay out the three trio recipes (r-m15-01, r-m15-02, r-m15-03) side by side.',
            'Down a page, list every raw ingredient once: chickens, leeks, potatoes, cream, lemons, bread, butter, herbs, sugar.',
            'Across the top, write the three dishes; tick every intersection where an ingredient appears.',
            'Trace the chicken with arrows: breasts to the main, carcasses to the stock that feeds both the velouté and the jus, skin to the entrée’s crisp.',
            'Trace the shared prep the same way: one crumb batch split two ways, one cream purchase split three ways, lemon across velouté and posset.',
            'Count single-tick ingredients. There should be almost none — anything with one tick, either find it a second job or note why it stays.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Cook the trio as one production',
          instructions: 'Shop the single list, then cook all three trio dishes in one afternoon, sequenced for the shared prep: posset first (it needs hours to set), stock next (it feeds two dishes), crumb while the stock simmers, then the velouté and the main’s components. Keep a timeline log of what you did when.',
          repeatPractice: 'Sequencing multiple dishes off shared prep is the core mechanic of every dinner party, the Module 18 costing project and the Module 20 capstone service. Re-run a two-dish version of this drill whenever you cook for guests between now and then.',
        },
      ],
      recipeIds: ['r-m15-01', 'r-m15-02', 'r-m15-03'],
      techniqueIds: ['t-bird-breakdown', 't-white-stock', 't-yield-testing', 't-fifo'],
      troubleshooting: [
        {
          problem: 'The cross-utilised menu ends up tasting repetitive',
          cause: 'Sharing ingredients without changing their register — cream treated the same way three times reads as one long dish.',
          fix: 'Share the ingredient, vary the treatment: cream is savoury and leek-sweet in the velouté, buttery in the purée, sharp with lemon in the posset. Cross-utilise the shopping list, not the flavour.',
        },
        {
          problem: 'Shared prep creates a bottleneck instead of saving time',
          cause: 'The shared component (usually the stock) sits on the critical path of every dish.',
          fix: 'Sequence longest-lead items first and decouple where you can — stock can be made the day before; crumbs keep for a week. Shared prep saves time only when it starts early.',
        },
      ],
    },
    {
      id: 'm15-l03',
      title: 'Station load and execution reality',
      summary: 'Whether the kitchen can actually cook the menu: station mapping, pick-up times, and the prep-ahead versus à la minute split.',
      theory: [
        {
          heading: 'Map the load before you print the menu',
          body: 'Every dish lands on a station — stove, oven, grill, cold larder, pastry — and a menu that looks balanced to the diner can be a catastrophe at the pass. If six of seven mains are pan-fried à la minute, one cook and four burners are the whole restaurant’s bottleneck while the oven stands idle. Map it: list each dish, name the station that finishes it, and count. The load should spread — some dishes finished in the oven, some assembled cold, some ladled from a pot that has been ready since 4 pm.\n\nAt home the same analysis applies with one station: you. A dinner-party menu where all three courses need the stove in the final ten minutes is a menu you will eat standing up. One course fully prepped ahead, one finished in the oven, one à la minute is the classic home split — the trio in this module is built exactly that way.',
        },
        {
          heading: 'Pick-up time and the prep split',
          body: 'Pick-up time is the minutes from “order in” to “plate up” once mise is done — and it is measured, not guessed. A dish that picks up in six minutes is a service dish; one that genuinely needs twenty-five is a liability unless the menu warns the diner and the station is protected. Design most dishes so the slow work (braising, stocks, purées, setting) happens in prep hours and the pick-up is finishing: reheat, sear, sauce, plate.\n\nWrite the split explicitly on every dish card: prep-ahead steps above the line, pick-up steps below it, with the pick-up timed. The velouté in this module picks up in four minutes because the soup exists by mid-afternoon; the chicken picks up in about fifteen because searing and resting cannot be faked; the posset picks up in ninety seconds because design put every slow step the day before. That spread — 2, 15, 4 — is what an executable menu looks like.',
        },
      ],
      demonstrations: [
        {
          title: 'Service simulation of the trio',
          steps: [
            'With all trio prep done, write the pick-up steps for each course on three cards, with your predicted times.',
            'Run service against the clock: fire the entrée, plate it, note the true pick-up time against your prediction.',
            'Fire the main: chicken into the pan, purée reheating, jus finishing — log every minute and every moment two things needed your hands at once.',
            'Fire the dessert: possets out, crumb on, garnish — time it.',
            'Compare predicted versus actual for all three; circle the collisions where stations (your two hands) were double-booked.',
            'Re-sequence the pick-up cards to remove the worst collision and note the fix — that is menu engineering at the pass.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The pick-up time trial',
          instructions: 'Cook the trio’s main course (r-m15-02) twice on different days with mise fully done, timing pick-up honestly from cold pan to wiped rim. Write both times on the recipe card. Then redesign one pick-up step to cut two minutes without cutting quality, and prove it on a third run.',
          repeatPractice: 'From now on, every recipe card you write carries a measured pick-up time below the prep line. Those numbers drive the Module 18 pricing work and decide the Module 20 capstone menu.',
        },
      ],
      recipeIds: ['r-m15-02'],
      techniqueIds: ['t-mise-en-place', 't-portion-control'],
      troubleshooting: [
        {
          problem: 'Everything is ready at different times and courses stall between',
          cause: 'No written pick-up plan — you are deciding the sequence during service instead of before it.',
          fix: 'Cards, written and ordered, before anyone sits down. The thinking happens in the afternoon; the evening only executes.',
        },
      ],
    },
    {
      id: 'm15-l04',
      title: 'Menu psychology and the engineering matrix',
      summary: 'How diners actually read menus — position, anchoring, naming, highlights — and the stars/plowhorses/puzzles/dogs matrix, conceptually.',
      theory: [
        {
          heading: 'How a menu gets read',
          body: 'Diners do not read menus; they scan them, for under two minutes, and where the eye lands is designable. First and last items in a list are recalled best, and eyes gravitate to the top-right region of a two-panel menu and to anything visually distinct — a box, bolding, whitespace around one dish. That distinct treatment is a spotlight: use it once, on the dish you most want to sell, because three boxes cancel each other out.\n\nAnchoring shapes the spend: an expensive dish at the top of a list makes everything beneath it feel reasonable — it sells its neighbours even if it rarely sells itself. Naming sells too, within honesty: provenance and technique (“slow-braised”, “wood-roasted”, a named farm) raise perceived value, while a thicket of adjectives reads as compensation. Describe the two things that matter and stop.',
        },
        {
          heading: 'Stars, plowhorses, puzzles, dogs',
          body: 'Menu engineering plots every dish on two axes: how popular it is, and how much gross profit it contributes. Four quadrants result. Stars — popular and profitable: protect them, feature them, never fiddle with them. Plowhorses — popular but low-profit: keep them, but nudge the price or trim the cost, carefully, because diners watch these dishes closest. Puzzles — profitable but unpopular: the dish is good business that nobody orders, so reposition it — rename it, move it up the list, box it, have staff mention it. Dogs — neither popular nor profitable: remove them, sentimentality notwithstanding.\n\nIn this module the classification is conceptual: you can already judge popularity from what gets ordered and eaten, and estimate relative profitability from ingredient intuition. Module 18 replaces intuition with real costing numbers — but the matrix, and the four verdicts it produces, are exactly this.',
        },
      ],
      demonstrations: [
        {
          title: 'Reworking a menu’s psychology on paper',
          steps: [
            'Take the weakest menu from your Lesson 1 autopsies and sketch its current layout on A3.',
            'Mark where the eye lands first: top of lists, top-right region, any boxed or bolded items.',
            'Classify each dish into the four quadrants using judgement: what sells, what seems expensive to make.',
            'Redesign the layout: a likely star into a first-or-last list position, one box only around the dish most worth selling, an anchor dish placed above the mid-priced options.',
            'Rewrite two dish names: one gaining provenance or technique, one losing its adjective thicket.',
            'Put the before and after side by side and write three lines on what each change is designed to do to ordering behaviour.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Classify a menu you know',
          instructions: 'For a restaurant you visit often (or your own dinner-party repertoire), classify every main into stars, plowhorses, puzzles and dogs using observed popularity and estimated profitability. Write one action per dish drawn from the quadrant verdicts. No spreadsheet yet — this is judgement training for Module 18’s numbers.',
          repeatPractice: 'Re-classify the same menu after Module 18 with real costing data and compare against today’s intuitions. The gap between the two is precisely what the costing module teaches.',
        },
      ],
      recipeIds: ['r-m15-01', 'r-m15-03'],
      techniqueIds: ['t-menu-engineering', 't-recipe-costing'],
      troubleshooting: [
        {
          problem: 'Psychology tweaks feel manipulative',
          cause: 'Confusing presentation with deception.',
          fix: 'The line is honesty: position, naming and highlights direct attention to dishes you genuinely stand behind. Lying about provenance or padding names is the manipulation — placement is just typography doing its job.',
        },
        {
          problem: 'Every dish I classify lands as a star',
          cause: 'Author’s bias — you are grading your own menu on affection.',
          fix: 'Force a ranking: order all dishes by popularity, split at the median, and do the same for estimated profit. The matrix requires relative judgements; nobody’s menu is all stars.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'A menu of greatest hits with nothing in common',
      cause: 'Choosing dishes one by one on merit, ignoring the system they must form.',
      fix: 'Design the ingredient web first, then choose dishes that live on it. A menu is a system; audition dishes for the system, not for themselves.',
    },
    {
      problem: 'Every course à la minute',
      cause: 'Menu written at the desk with no thought for whose hands cook it.',
      fix: 'One course fully ahead, one finished in the oven, one à la minute. Map station load and measure pick-up times before the menu is final.',
    },
    {
      problem: 'Options multiplying to please everybody',
      cause: 'Treating every possible diner preference as a menu line.',
      fix: 'Cover diets with a few excellent, deliberate options inside a five-to-seven ceiling. Coverage is design quality, not list length.',
    },
    {
      problem: 'Dropping the diner’s favourite because the matrix calls it a plowhorse',
      cause: 'Applying quadrant verdicts mechanically without the costing numbers or the goodwill maths.',
      fix: 'Plowhorses are kept and quietly improved, not culled — and until Module 18 gives you real numbers, the matrix advises, it does not decide.',
    },
  ],
  assessment: {
    id: 'as-m15',
    moduleId: 'm15',
    title: 'The Menu on Paper',
    brief:
      'In one design session, produce a complete paper menu for a 30-seat neighbourhood restaurant (or an ambitious dinner party of twelve): three courses, three to five options per course. Deliverables: (1) the diner-facing menu, laid out with deliberate position, anchoring, naming and one highlight; (2) the balance grid across protein, richness, temperature and dietary axes; (3) a full cross-utilisation map showing every ingredient’s appearances and the shared-prep components, with no unjustified single-use ingredients; (4) a station-load and pick-up plan per dish, prep-ahead and à la minute split marked; (5) a conceptual engineering classification of every dish with one line of reasoning each. At least one dish should be the trio or a Module 13 original.',
    rubric: [
      { criterion: 'Structure & balance', maxScore: 10, guidance: '9–10: option counts inside the ceiling, arc from light to rich, all four balance axes covered per course. Below 6: repeated proteins, missing coverage, or bloated courses.' },
      { criterion: 'Cross-utilisation map', maxScore: 10, guidance: 'Complete ingredient-by-dish grid; shared prep and trim loops traced with arrows; single-tick ingredients eliminated or explicitly justified.' },
      { criterion: 'Execution reality', maxScore: 8, guidance: 'Station load spread believably; pick-up times stated per dish (measured where cooked, estimated with reasoning where not); prep split marked.' },
      { criterion: 'Menu psychology', maxScore: 8, guidance: 'Position, anchoring, naming and a single highlight all used deliberately and honestly, each choice explainable in one sentence.' },
      { criterion: 'Engineering classification', maxScore: 4, guidance: 'Every dish placed in a quadrant with a plausible one-line rationale; verdicts follow the quadrant logic.' },
    ],
    passScore: 28,
    evidence: 'Photos or scans of all five deliverables — menu, balance grid, cross-utilisation map, station/pick-up plan, classification sheet — plus one photo of the cooked trio plated as three courses.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'The trio cooked as one production from a single shopping list, with the timeline log kept',
    'Three menu autopsies with balance grids filed, and the service simulation run with timed pick-ups',
    'Assessment passed (28/40 or better) with all deliverables photographed',
  ],
}

export const module15Recipes: Recipe[] = [
  {
    id: 'r-m15-01',
    title: 'Leek & Potato Velouté, Chicken-Skin Crisp',
    moduleId: 'm15',
    description:
      'The trio’s entrée, engineered from the main’s by-products: the stock comes from the chicken carcasses, the crisp garnish from the reserved skin, and half the toasted crumb it shares with the dessert. Silk texture, four-minute pick-up.',
    difficulty: 2,
    serves: 6,
    timeMins: 60,
    techniqueIds: ['t-white-stock', 't-puree', 't-seasoning-salt', 't-tasting', 't-garnish'],
    ingredients: [
      { item: 'Leeks, white and pale green', qty: 400, unit: 'g', prep: 'sliced, washed thoroughly; dark tops to the stockpot' },
      { item: 'Floury potatoes', qty: 300, unit: 'g', prep: 'peeled, thin slices' },
      { item: 'Butter', qty: 50, unit: 'g' },
      { item: 'White chicken stock (from the r-m15-02 carcasses)', qty: 1, unit: 'L', prep: 'hot' },
      { item: 'Cream', qty: 100, unit: 'ml' },
      { item: 'Reserved chicken skin (from r-m15-02)', qty: null, unit: 'as available', prep: 'flattened between trays' },
      { item: 'Toasted sourdough crumb (shared batch — see r-m15-03)', qty: 30, unit: 'g' },
      { item: 'Chives', qty: 10, unit: 'g', prep: 'finely cut' },
      { item: 'Lemon juice', qty: null, unit: 'to taste' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Crisp the skin first: lay the reserved chicken skin flat between two baking-paper-lined trays and bake at 180°C until deep golden and glassy, 15–20 minutes. Salt while hot, drain on paper, and break into shards.',
      'Sweat the leeks in the butter with a pinch of salt over medium-low until completely soft and sweet, 8–10 minutes — no colour; this is a white soup.',
      'Add the potatoes and the hot stock; simmer gently until the potato slices crush against the pot wall, about 15 minutes.',
      'Blend hot until completely smooth, then pass through a fine sieve back into a clean pot. This double-smoothing is what separates velouté from soup.',
      'Stir in the cream, bring back to just under a simmer, and season in stages: salt first, tasting on a cooled spoon, then lemon juice a few drops at a time until the sweetness of the leeks brightens.',
      'Hold warm. At pick-up: ladle into warm bowls, and land the garnish in one line — crumb, chive, then chicken-skin shards standing upright.',
      'Serve immediately; the shards soften within minutes, so garnish is the last ten seconds, as always.',
    ],
    chefNotes: [
      'Every garnish element is a by-product: skin from the main’s breast prep, crumb from the dessert’s batch, chives shared across two courses. If you buy anything specifically for this garnish, the cross-utilisation map has failed.',
      'Blend-and-pass is worth the sieve wash: the same 15 minutes of technique reads as a $19 entrée instead of a $6 soup — a preview of the value logic Module 18 puts numbers on.',
    ],
    reinforces: ['Stock from trim', 'Blend-and-pass purée texture', 'Garnishing at the pass'],
  },
  {
    id: 'r-m15-02',
    title: 'Pan-Roasted Chicken Breast, Pommes Purée, Thyme Jus',
    moduleId: 'm15',
    description:
      'The trio’s main and its engine room: two whole birds broken down by hand — breasts to the pan, carcasses and wing tips to the stock that feeds both the entrée and this jus, legs banked for the next day’s meal. Restaurant main, one shopping docket.',
    difficulty: 3,
    serves: 4,
    timeMins: 150,
    techniqueIds: ['t-bird-breakdown', 't-white-stock', 't-pan-roasting', 't-potato-puree', 't-pan-sauce'],
    ingredients: [
      { item: 'Whole chickens', qty: 2, unit: 'each', prep: 'about 1.6 kg each' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'halved, for the stock' },
      { item: 'Leek tops (from r-m15-01)', qty: null, unit: 'as available', prep: 'washed' },
      { item: 'Bay leaves', qty: 2, unit: 'each' },
      { item: 'Black peppercorns', qty: 6, unit: 'each' },
      { item: 'Floury potatoes', qty: 900, unit: 'g', prep: 'peeled, even chunks' },
      { item: 'Butter', qty: 180, unit: 'g', prep: '120 g for the purée, 30 g for basting, 30 g cold for the jus' },
      { item: 'Milk', qty: 150, unit: 'ml', prep: 'hot' },
      { item: 'Cream', qty: 50, unit: 'ml', prep: 'for the purée' },
      { item: 'Thyme sprigs', qty: 6, unit: 'each' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Break down both birds: remove legs (bag, label and refrigerate — tomorrow’s braise or confit), take the breasts off the frame keeping them neat, and pull the skin from one breast pair flat and whole for the entrée’s crisp. Salt the breasts at 1% and refrigerate uncovered.',
      'Start the stock immediately: chop the carcasses, cover with 2.5 L cold water, bring up slowly and skim. Add onion, leek tops, bay and peppercorns after the first skim; simmer gently, never boiling, for 2–3 hours. Strain; you need 1 L for the velouté and 300 ml here.',
      'Make the purée: simmer the potatoes from cold salted water until a knife slides through, rice hot, dry over low heat, then beat in the butter, hot milk and cream. Season, film the surface, hold warm.',
      'Pick-up begins here. Heat the oven to 190°C. Dry the breasts, lay skin-side down in a barely-filmed ovenproof pan over medium-high, and press gently for the first 30 seconds.',
      'Sear until the skin is deep gold, about 5 minutes; flip, add 30 g butter and the thyme, baste, and finish in the oven to 63°C core, 6–8 minutes. Rest on a rack, 8 minutes.',
      'Build the jus in the pan: pour off excess fat, deglaze with the wine, reduce to a syrup, add 300 ml stock and reduce by two-thirds. Mount the cold butter off the heat, add resting juices, season.',
      'Plate on warm plates: purée spread with the back of the spoon, breast sliced once on the bias and leant against it, jus spooned over the meat, a few thyme leaves. Wipe the rim.',
      'Log your pick-up time from step 4 to the wiped rim — this number goes on the recipe card and into the Lesson 3 trial.',
    ],
    chefNotes: [
      'Whole birds are the cross-utilisation argument in one purchase: breasts here, carcasses into two dishes’ worth of stock, skin to the entrée, legs banked. Cost the same plate from bought breast fillets and bought stock once you reach Module 18 — the difference is the margin.',
      'The stock is the critical path: start it before anything else on production day, or make it the day before and hold it chilled. Nothing else in the trio waits on anything but this pot.',
    ],
    reinforces: ['Whole bird breakdown', 'Pan-roasting and resting', 'Pan sauce from fond and stock'],
  },
  {
    id: 'r-m15-03',
    title: 'Lemon Posset, Brown-Butter Sourdough Crumb',
    moduleId: 'm15',
    description:
      'The trio’s dessert, engineered for zero pick-up pressure: cream, sugar and lemon set themselves in the fridge while you cook everything else, and the brown-butter crumb comes from the same toasted-sourdough batch that garnishes the velouté. Ninety-second pick-up, day-ahead friendly.',
    difficulty: 2,
    serves: 6,
    timeMins: 40,
    techniqueIds: ['t-acid-balance', 't-tasting', 't-portion-control', 't-caramel'],
    ingredients: [
      { item: 'Cream', qty: 600, unit: 'ml' },
      { item: 'Caster sugar', qty: 150, unit: 'g' },
      { item: 'Lemons', qty: 3, unit: 'each', prep: 'zest of one, 90 ml juice' },
      { item: 'Day-old sourdough', qty: 300, unit: 'g', prep: 'crusts off, blitzed to coarse crumbs — the full shared batch; 30 g goes to r-m15-01' },
      { item: 'Butter', qty: 60, unit: 'g' },
      { item: 'Caster sugar (for the crumb)', qty: 25, unit: 'g' },
      { item: 'Fine salt', qty: 1, unit: 'g' },
    ],
    method: [
      'Make the posset base first on production day — it needs at least 4 hours to set. Bring the cream, 150 g sugar and lemon zest to a boil in a roomy pot (it climbs); boil steadily for 3 minutes.',
      'Off the heat, whisk in the lemon juice. The acid sets the cream — no gelatine, no eggs; this dessert is pure chemistry from Module 3’s dairy lessons.',
      'Taste on a cooled spoon: it should be rich, sharp and just short of too sweet — cold dulls both sugar and acid, so it must read slightly loud when warm.',
      'Strain into six glasses or ramekins at 120 ml each — weigh or measure the first pour and match the rest; equal portions are a discipline, not a nicety. Chill uncovered 30 minutes, then covered at least 4 hours or overnight.',
      'Make the shared crumb: toast the sourdough crumbs dry in a wide pan until pale gold. Remove 30 g plain for the velouté garnish; set aside.',
      'Return the pan with the butter and cook until it foams and smells nutty — brown, not black. Add the remaining crumbs, 25 g sugar and the salt; toss until deep golden and crisp. Cool completely on a tray; store airtight.',
      'Pick-up: a generous spoon of crumb over each posset, a little fresh zest, done. Ninety seconds for six covers — this is what a zero-pressure dessert station feels like.',
    ],
    chefNotes: [
      'Active time is well under an hour; the fridge does the rest. On production day this dish goes first precisely because its slowest step needs none of your attention — sequencing lesson included free.',
      'One bread purchase, two courses: the crumb splits savoury (plain, onto the velouté) and sweet (brown-buttered and sugared, onto the posset). This is cross-utilisation at garnish scale — same ingredient, different register, per the Lesson 2 rule.',
    ],
    reinforces: ['Acid balance and tasting for serving temperature', 'Portion control', 'Prep-ahead sequencing'],
  },
]
