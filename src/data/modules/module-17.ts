import type { CourseModule, Recipe } from '../../types/content'

export const module17: CourseModule = {
  id: 'm17',
  number: 17,
  stage: 4,
  title: 'Sourcing, Inventory & Yield',
  subtitle: 'Where the food comes from, and where the money hides',
  description:
    'Every dollar a kitchen makes or loses is decided before the pan goes on: what you buy, from whom, at what yield, and how you store it. This module turns you into your own purchasing officer — supplier selection, product specs, receiving checks, FIFO and par levels, and the yield testing that reveals the true cost of everything you cook. The knife work is a whole chicken and a whole fish, weighed at every stage.',
  objectives: [
    'Choose suppliers deliberately and write a product spec a supplier could fill without a phone call',
    'Run receiving checks: temperature, weight, freshness indicators, and the confidence to reject',
    'Operate FIFO storage with par levels and a weekly stocktake (usage = opening + purchases − closing)',
    'Run a yield test: yield % = EP ÷ AP × 100, and true cost/kg = AP price ÷ yield %',
    'Track waste in grams with reasons, and route trim into revenue instead of the bin',
  ],
  difficulty: 3,
  estimatedHours: 8,
  prerequisites: ['m16'],
  skillsUnlocked: [
    'Supplier specs & receiving checks',
    'Par levels & stocktaking',
    'Yield testing (AP vs EP)',
    'True-cost calculation',
    'Trim utilisation & waste logging',
  ],
  equipment: [
    'Digital scales (1 g resolution, 5 kg capacity)',
    'Probe thermometer for receiving checks',
    "20–24 cm chef's knife and a flexible filleting knife",
    'Kitchen shears or poultry scissors',
    'Containers with labels for trim, portions and stock',
    'A notebook or spreadsheet for yield tests and the stocktake',
    'Stockpot (6 L or larger)',
  ],
  ingredients: [
    '1 whole chicken, 1.6–1.8 kg (buy the best you can source)',
    '1 whole plate-sized fish, 400–600 g (snapper, bream or flathead)',
    '1 bunch of beetroot with leaves attached, or cauliflower with leaves',
    'Pantry staples at par: tinned tomatoes, chickpeas, olive oil, dried pasta, onions, garlic',
    'Mirepoix vegetables for stock',
    'Lemons, parsley, butter',
  ],
  lessons: [
    {
      id: 'm17-l01',
      title: 'Suppliers, specs & seasonal buying',
      summary: 'Choosing where your food comes from, writing specs that get you what you asked for, and buying with the season instead of against it.',
      theory: [
        {
          heading: 'The supplier is part of the recipe',
          body: 'A professional kitchen does not "go shopping" — it sources. For one cook the principle scales down intact: choose a butcher, a fishmonger and a greengrocer deliberately, and give each a spec. A spec names the product, size, form and quality marker: "whole chicken, 1.6–1.8 kg, free range, neck and giblets in" beats "a chicken" every time, and it makes price comparison honest — you are comparing identical items.\n\nBuild the relationship with questions: what came in today, what is about to be cheap, what would you take home? A fishmonger who knows you will fillet a whole fish yourself starts pointing you at the best whole fish. Two or three suppliers who know your specs are worth more than ten anonymous checkouts.',
        },
        {
          heading: 'Seasonality is a price signal',
          body: 'In-season produce is cheaper, better and more abundant — the three things a menu wants. Tomatoes swing from about $4/kg at the February peak to $9–12/kg in winter; the winter tomato is worse and triple the price. The professional answer is to write menus from what is at its peak, not to force a dish onto the wrong month.\n\nTrack it simply: each shop, note the two best-value items you saw. Within a month you will have a personal season map of your suppliers. In the capstone you will be asked for seasonal alternatives on every volatile ingredient — this habit is where those answers come from.',
        },
      ],
      demonstrations: [
        {
          title: 'Writing a product spec, then testing it',
          steps: [
            'Pick the whole chicken for r-m17-01 and draft its spec: product, weight range (1.6–1.8 kg), form (whole, head off, giblets in if possible), quality marker (free range; skin intact, unbruised).',
            'Add the commercial lines: target price band ($9–14/kg whole as a current benchmark) and an acceptable substitute (1.4–1.6 kg bird, adjust portions).',
            'Take the spec to two suppliers — a supermarket and a butcher — and price the identical spec at both.',
            'Record both prices per kg, not per item; per-item prices hide weight differences.',
            'Buy the better offer and note why it won: price, freshness, or information the seller gave you.',
            'File the spec — it becomes a line in your capstone supplier cost sheet.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The season scan',
          instructions: 'At your greengrocer, identify the three best-value items this week (price per kg against your memory of the usual price). Write down current price, condition, and one dish each would carry. Buy one and use it in this module’s root-to-leaf recipe (r-m17-03) if it fits.',
          repeatPractice: 'Repeat every shop through Modules 18–19. Your capstone menu should lean on at least two ingredients you know are at seasonal peak.',
        },
      ],
      recipeIds: ['r-m17-03'],
      techniqueIds: ['t-fifo', 't-flavour-pairing'],
      troubleshooting: [
        {
          problem: 'Supplier prices per item, spec thinks per kg — comparisons keep going fuzzy',
          cause: 'Retail loves each-pricing because it hides weight variance.',
          fix: 'Weigh or ask for the weight, divide, and record everything in $/kg in your notebook. One unit, no exceptions.',
        },
      ],
    },
    {
      id: 'm17-l02',
      title: 'Receiving, storage, FIFO & par levels',
      summary: 'The moment food enters your kitchen it becomes your inventory. Check it, store it in the right zone, rotate it, and count it weekly.',
      theory: [
        {
          heading: 'Receiving and the storage map',
          body: 'Professional receiving is a 60-second ritual you should steal: probe chilled goods (reject above 5°C), check frozen goods are frozen solid, look for freshness markers — clear eyes and red gills on fish, no tears or blood pooling in poultry packs, no swollen tins — and weigh anything bought by weight. The power to reject is the point; polite acceptance of tired stock is how kitchens quietly lose money.\n\nThen everything goes to its zone within 15 minutes: fridge at 5°C or below with raw meats lowest, freezer at −18°C, dry store cool and dark. Every item is dated on entry. FIFO — first in, first out — means new stock physically goes behind old, everywhere, every time. It is a hand movement, not a policy document.',
        },
        {
          heading: 'Par levels and the weekly stocktake',
          body: 'A par level is the amount of an ingredient you hold between shops: enough to cover normal use plus a small buffer, little enough to stay fresh. Set pars for your 15–20 core items — e.g. olive oil 1 L, tinned tomatoes 4 × 400 g, onions 1 kg — and shopping becomes subtraction: par minus on-hand equals order.\n\nThe weekly stocktake closes the loop: count what you hold, at the same time each week. Usage = opening + purchases − closing. If you bought $180 of food, opened with $60 and closed with $75, you consumed $165 — and if the bin got a visible share of that, the waste log (next lesson) tells you why. Ten minutes a week; it is the habit that makes Module 18’s costing real instead of theoretical.',
        },
      ],
      demonstrations: [
        {
          title: 'Setting pars and running the first stocktake',
          steps: [
            'List your 15–20 pantry core items in a notebook or spreadsheet, one row each.',
            'Set a par for each: normal weekly use plus roughly half again as buffer. Write the par and the unit ($/pack noted too).',
            'Count current stock into an "opening" column, converting part-packs to decimals (half a bottle of oil = 0.5).',
            'Date-check as you count: anything past best-before gets a decision now — use this week, or bin and log it.',
            'Build this week’s shopping list as par minus on-hand, item by item.',
            'Diary the same count for the same day next week; the second count is where usage numbers appear.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The par-level cook',
          instructions: 'Cook the pantry batch dish (r-m17-04) entirely from your par-stocked pantry, buying nothing. Afterwards, update the stocktake and calculate exactly what the dish consumed in stock (and roughly in dollars). This is the whole inventory loop — par, cook, count — in one evening.',
          repeatPractice: 'Run the weekly stocktake for the rest of the course. By the capstone it should take under ten minutes and your pars should have been corrected at least twice.',
        },
        {
          title: 'Receiving drill',
          instructions: 'On your next shop, run the full receiving check at the bench before anything is put away: probe one chilled item, inspect the fish or meat against its spec, weigh one by-weight purchase, and date every label. Note anything you would have rejected from a supplier.',
        },
      ],
      recipeIds: ['r-m17-04'],
      techniqueIds: ['t-fifo', 't-haccp'],
      troubleshooting: [
        {
          problem: 'Pars keep producing too much stock and the fridge fills with dying vegetables',
          cause: 'Pars were set from aspiration (how much you might cook) rather than measured usage.',
          fix: 'Cut the perishable pars to last week’s actual usage plus one meal. Pars are corrected by stocktakes, not by optimism.',
        },
        {
          problem: 'FIFO collapses within days — new stock lands at the front',
          cause: 'Rotation requires moving old stock, and the hand takes the lazy path.',
          fix: 'Make the shelf enforce it: old stock lives in a marked "use first" zone at the front, and unloading shopping always starts with that shuffle.',
        },
      ],
    },
    {
      id: 'm17-l03',
      title: 'Yield testing: AP, EP and the true cost of food',
      summary: 'As-purchased versus edible-portion — the weighing exercise that reveals what your ingredients actually cost on the plate.',
      theory: [
        {
          heading: 'AP, EP and yield %',
          body: 'AP (as purchased) is what you pay for; EP (edible portion) is what reaches the plate. Yield % = EP weight ÷ AP weight × 100. A 1.7 kg chicken breaks down to roughly 1.1 kg of usable meat and skin — about a 65% yield — with the rest frame, wing tips and trim. A whole snapper fillets out at 40–45%; peeled onions run about 90%; trimmed broccoli about 60% if you bin the stem, closer to 80% if you don’t.\n\nThe rule of this course: weigh it yourself. Published yield tables are averages of other people’s knives. Your bird, your blade, your numbers — and the gap between your 58% and the textbook 65% is a knife-skills lesson with a dollar value attached.',
        },
        {
          heading: 'True cost per kilogram',
          body: 'Yield % converts shelf price into plate price: true cost/kg = AP price ÷ yield %. A $30/kg whole snapper at 45% yield is really $66.67/kg of fillet on the plate — suddenly the $52/kg pre-cut fillet in the cabinet is a fair comparison, not a rip-off. A $9/kg chicken at 65% yield is $13.85/kg of usable meat, still comfortably under the $14–17/kg of pre-cut pieces, before you count the free stock from the frame.\n\nThis is the decision the numbers exist to serve: buy whole and process, or buy prepared? The answer depends on your yield, your time, and whether the trim earns money. Every serious kitchen re-runs this test whenever prices move; from now on, so do you.',
        },
      ],
      demonstrations: [
        {
          title: 'Full yield test on a whole chicken',
          steps: [
            'Weigh the whole bird and record the AP weight and price (e.g. 1.7 kg at $9.50/kg = $16.15).',
            'Break the bird into 8 pieces plus carcass, exactly as drilled in the poultry module — joints first, blade on the frame.',
            'Weigh each output pile separately: breasts, thighs, drumsticks, wings, skin/fat trim, carcass and bones.',
            'Total the saleable meat and calculate yield %: EP ÷ 1.7 kg × 100. Expect 60–68%.',
            'Calculate true cost: $9.50 ÷ yield % — then compare against the shelf price of pre-cut breast and thigh.',
            'Assign every gram a destination before the fridge: portions to labelled containers, carcass to the stockpot, skin to render. Weigh anything binned and log it with a reason.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Two-animal yield ledger',
          instructions: 'Complete written yield tests for both the chicken (r-m17-01) and the whole fish (r-m17-02): AP weight and price, every output weighed, yield %, true cost/kg, and the buy-whole vs buy-prepared verdict for each. Keep the ledger — it feeds directly into Module 18 costing and the capstone cost sheets.',
          repeatPractice: 'Yield-test every whole protein and one vegetable per week through Module 18. Three tests per ingredient gives you a personal average you can cost from with confidence.',
        },
      ],
      recipeIds: ['r-m17-01', 'r-m17-02'],
      techniqueIds: ['t-yield-testing', 't-bird-breakdown', 't-filleting-round'],
      troubleshooting: [
        {
          problem: 'Chicken yield comes in under 55%',
          cause: 'Meat is staying on the frame — the blade is cutting through the bird instead of riding the bones.',
          fix: 'Slow down and let the carcass guide the knife; pop joints before cutting. Then re-test on the next bird. The yield ledger is also a knife-skills progress bar.',
        },
        {
          problem: 'The maths says buy pre-cut, but the whole bird "feels" cheaper',
          cause: 'You are pricing the meat but not valuing the by-products — or the reverse: valuing your time at zero.',
          fix: 'Put numbers on both: the carcass makes about 1.5 L of stock (worth $6–8 retail), and the breakdown takes you 10 minutes. Decide with the full equation, then respect the answer.',
        },
      ],
    },
    {
      id: 'm17-l04',
      title: 'Waste tracking & trim utilisation',
      summary: 'The bin is a ledger. Weigh what goes in, name why, and learn the professional reflex of routing trim into food before it becomes waste.',
      theory: [
        {
          heading: 'Weigh the bin',
          body: 'Restaurants that measure food waste typically find it runs 4–10% of food purchased — and cutting it is pure margin, because the food was already paid for. The tool is a waste log: every significant bin event recorded in grams with one of four reasons — trim (cut off in prep), spoilage (died in storage), over-production (cooked too much), or plate waste (served and not eaten).\n\nThe reasons matter because the fixes differ. Trim waste is a knife or utilisation problem. Spoilage is a par-level or FIFO problem. Over-production is a planning problem. Plate waste is a portioning problem. A month of honest logging tells you precisely which cook you need to become. Target for this course: under 5% of purchased weight to the bin — the same number your capstone waste plan will be scored against.',
        },
        {
          heading: 'Trim is an ingredient with no invoice',
          body: 'The professional reflex is to map every trim to a use before the knife moves: chicken frames → stock; fish bones → fumet; beetroot stems → pickles; leaves → sautéed greens; herb stems → oils; stale bread → crumbs and pangrattato; parmesan rinds → the soup pot. None of these cost anything — they were bought when you bought the main ingredient.\n\nRoot-to-leaf and nose-to-tail cooking is this logic applied on purpose. One bunch of beetroot at about $5 yields three components — roots, stems, leaves — that plate as a complete dish; binning two of them doubles the effective cost of the third. In the capstone, a written trim-utilisation plan is a deliverable in its own right; this lesson is its rehearsal.',
        },
      ],
      demonstrations: [
        {
          title: 'Starting the waste log',
          steps: [
            'Rule up four columns in your notebook: date/item, weight (g), reason (trim / spoilage / over-production / plate), and destination-if-saved.',
            'Put the scales next to the bin for one week — friction is the enemy of logging.',
            'Before binning anything over ~20 g, weigh it and ask: could this have been stock, pickle, purée, crumb or soup?',
            'Log this module honestly: the chicken and fish tests will generate real trim entries; record what was routed to use as saved weight.',
            'At week’s end, total the bin weight and divide by total purchased weight for your first waste %.',
            'Write one corrective action against the biggest reason category — that is next week’s experiment.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Zero-bin cook',
          instructions: 'Cook the root-to-leaf dish (r-m17-03) with a target of under 30 g total to the bin (peels and roots ends only). Weigh what you bin anyway. Then write a one-page trim map for your five most-used ingredients: every trim, its best use, and how it is stored until used.',
          repeatPractice: 'Keep the waste log running through Modules 18 and 19 — the capstone requires a live log and a sub-5% result, and a cold start on capstone week will show.',
        },
      ],
      recipeIds: ['r-m17-03'],
      techniqueIds: ['t-yield-testing', 't-fifo', 't-pickling'],
      troubleshooting: [
        {
          problem: 'The waste log dies after three days',
          cause: 'Logging was set up as an accounting task instead of a bench habit.',
          fix: 'Lower the bar: scales beside the bin, entries of three words, and only items over 20 g. An imperfect log kept beats a perfect log abandoned.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Comparing supplier prices per item instead of per kilogram',
      cause: 'Each-pricing hides weight variance, and shops know it.',
      fix: 'Convert everything to $/kg at the shelf. Two numbers in the same unit, or no comparison.',
    },
    {
      problem: 'Trusting textbook yield tables instead of weighing',
      cause: 'Tables feel authoritative and scales feel like homework.',
      fix: 'Your knife, your bird, your number. Three personal tests beat any published average — and the gap is feedback on your fabrication skills.',
    },
    {
      problem: 'Counting trim used elsewhere as waste — or waste as "trim"',
      cause: 'Fuzzy categories flatter the log and hide the real problem.',
      fix: 'Trim routed to stock, pickles or crumbs is yield. Only what physically enters the bin is waste, and it gets a weight and a reason every time.',
    },
    {
      problem: 'Setting par levels once and never correcting them',
      cause: 'The first pars were guesses, and guesses age badly.',
      fix: 'Every stocktake is a chance to move a par. Two corrections per month is a healthy system; zero means you stopped looking.',
    },
  ],
  assessment: {
    id: 'as-m17',
    moduleId: 'm17',
    title: 'The Yield & Inventory File',
    brief:
      'Assemble a working purchasing file over two weeks: (1) written specs and two-supplier price comparisons ($/kg) for a whole chicken and a whole fish; (2) completed yield tests for both animals — every output weighed, yield %, true cost/kg, and a buy-whole vs buy-prepared verdict; (3) a pantry par sheet with two consecutive weekly stocktakes and usage calculated; (4) a seven-day waste log with totals, waste %, and one corrective action. Cook all four module recipes from this file.',
    rubric: [
      { criterion: 'Yield tests: completeness & accuracy', maxScore: 10, guidance: '9–10: every output weighed, arithmetic correct, yields within honest range, verdicts argued from the numbers. Below 6: missing weights or copied table values.' },
      { criterion: 'Fabrication quality (bird & fish)', maxScore: 10, guidance: 'Clean joints, blade riding the frame, chicken yield ≥ 60%, fish fillets tidy with frame saved for stock. Trim assigned, not abandoned.' },
      { criterion: 'Inventory system in operation', maxScore: 10, guidance: 'Pars set and corrected, two real stocktakes, usage calculated, FIFO visible in the fridge and dry store, receiving checks performed.' },
      { criterion: 'Waste log & trim utilisation', maxScore: 10, guidance: 'Seven honest days, weights and reasons, waste % computed, trim map written, root-to-leaf dish under 30 g binned.' },
    ],
    passScore: 28,
    evidence:
      'Photos: the chicken and fish yield tests mid-weighing (piles on the scales), the completed yield ledger pages, the par sheet with both stocktakes, the waste log, and the four finished dishes.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Yield tests completed and documented for one whole chicken and one whole fish',
    'Two consecutive weekly stocktakes run with pars corrected where the numbers demanded it',
    'Assessment passed (28/40 or better) with the full file as evidence',
  ],
}

export const module17Recipes: Recipe[] = [
  {
    id: 'r-m17-01',
    title: 'One Chicken, Four Outcomes: Yield-Tested Bird & Pot of Stock',
    moduleId: 'm17',
    description:
      'A whole chicken broken down on the scales: breasts pan-ready, thighs and drumsticks portioned for later in the week, wings roasted for cook’s snack, and the carcass simmered into stock — every stage weighed, so the bird leaves a yield test behind it.',
    difficulty: 3,
    serves: 6,
    timeMins: 300,
    techniqueIds: ['t-bird-breakdown', 't-yield-testing', 't-white-stock', 't-pan-roasting'],
    ingredients: [
      { item: 'Whole chicken', qty: 1.7, unit: 'kg', prep: 'weighed and price recorded before the first cut' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'halved, skin on' },
      { item: 'Carrot', qty: 1, unit: 'each', prep: 'chunks' },
      { item: 'Celery stalk', qty: 1, unit: 'each', prep: 'chunks' },
      { item: 'Bay leaf', qty: 1, unit: 'each' },
      { item: 'Black peppercorns', qty: 6, unit: 'each' },
      { item: 'Fine salt', qty: 10, unit: 'g', prep: 'for the breasts and pieces' },
      { item: 'Olive oil', qty: 20, unit: 'ml' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
    ],
    method: [
      'Record the AP numbers: whole-bird weight and $/kg paid. Set up the scales, six containers and your yield ledger before the knife moves.',
      'Break the bird down into 8 pieces plus carcass: pop the hip joints, take legs and split into thigh and drumstick; remove wings at the shoulder; take each breast off the frame with long strokes against the bone.',
      'Weigh every pile — breasts, thighs, drumsticks, wings, skin/fat trim, carcass — and enter each in the ledger. Calculate yield % (expect 60–68%) and true cost/kg (AP $/kg ÷ yield %).',
      'Portion and label: thighs and drumsticks into dated containers (use or freeze within 2 days), skin and fat reserved to render.',
      'Start the stock: carcass and wing tips into cold water to cover (about 2 L), bring up slowly, skim the scum raft, and hold at a bare shiver — never a boil — for 3–4 hours.',
      'Add onion, carrot, celery, bay and peppercorns for the final hour only. Strain, then cool on the clock: iced sink to 21°C within 2 hours, fridge to 5°C within 4. Label with a 4-day use-by.',
      'Cook the breasts for tonight: salt at 1% of weight, sear skin-side in oil until golden, finish in a 190°C oven to 62–65°C core with a rest to carryover, and finish with lemon.',
      'Close the ledger: note stock volume produced (about 1.5 L) and assign it a retail value — the by-product line that usually decides the buy-whole verdict.',
    ],
    chefNotes: [
      'Weigh before you tidy. The honest yield test includes the ragged first attempt — your numbers will improve bird by bird, and that curve is the point.',
      'A supermarket bird and a proper free-range bird run the same test beautifully; test both over two weeks and you have a genuine quality-vs-cost comparison in your own handwriting.',
    ],
    reinforces: ['Whole-bird breakdown', 'White stock discipline', 'Cook-chill cooling windows'],
  },
  {
    id: 'r-m17-02',
    title: 'Whole Fish Yield Test: Crisp-Skin Fillets & Frame Fumet',
    moduleId: 'm17',
    description:
      'A plate-sized snapper or bream filleted on the scales — AP weight, fillet weight, frame weight — then cooked as crisp-skin fillets with a quick fumet from the frame. The 40–45% yield number you calculate will change how you read every fish counter.',
    difficulty: 3,
    serves: 2,
    timeMins: 90,
    techniqueIds: ['t-filleting-round', 't-yield-testing', 't-skin-searing', 't-pan-sauce'],
    ingredients: [
      { item: 'Whole snapper or bream', qty: 500, unit: 'g', prep: 'gutted and scaled by the fishmonger; weight and $/kg recorded' },
      { item: 'Fine salt', qty: 4, unit: 'g' },
      { item: 'Neutral oil', qty: 20, unit: 'ml' },
      { item: 'Butter', qty: 30, unit: 'g', prep: 'cubed, cold' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'half juiced, half in wedges' },
      { item: 'Flat-leaf parsley', qty: 8, unit: 'g', prep: 'chopped, stems reserved for the fumet' },
      { item: 'Brown onion', qty: 0.5, unit: 'each', prep: 'sliced' },
      { item: 'White wine', qty: 60, unit: 'ml' },
    ],
    method: [
      'Record AP weight and price per kg. Check freshness at the bench: clear eyes, red gills, sea-smell not fish-smell, firm flesh — your receiving check from lesson 2, applied.',
      'Fillet: cut behind the head to the spine, then long strokes along the backbone letting the frame guide the blade. Take both fillets, pin-bone with tweezers, and trim the belly line.',
      'Weigh fillets and frame separately; calculate yield % (expect 40–45%) and true cost/kg (AP $/kg ÷ yield %). Compare to the pre-cut fillet price at the same counter and write the verdict in the ledger.',
      'Fumet from the frame: rinse the frame, chop, and sweat with the onion in a little oil 3 minutes without colour. Add wine, parsley stems and cold water to barely cover; simmer gently 25 minutes — no longer, fish frames turn bitter — then strain.',
      'Dry the fillet skin thoroughly, salt both sides, and press skin-down into a hot oiled pan; hold flat for 30 seconds so they cannot cup.',
      'Cook 80% on the skin, 3–4 minutes until crisp and released, flip for 30 seconds, and rest.',
      'Reduce 150 ml of the fumet by two-thirds in the same pan, mount the cold butter off the heat, add lemon juice and parsley, and season.',
      'Plate skin-up on the sauce with lemon wedges. Label and refrigerate the remaining fumet (use within 2 days, or freeze) — it is a paid-for ingredient now, not a by-product.',
    ],
    chefNotes: [
      'A 45% yield means more than half the fish’s price is in the frame — which is why the fumet is not optional garnish economics; it is the other half of your money.',
      'Filleting small fish is harder than big ones. If your first yield is 35%, log it without shame and book a second fish; the ledger rewards honesty, then improvement.',
    ],
    reinforces: ['Round-fish filleting', 'Crisp-skin fish cookery', 'Pan sauce from reduction'],
  },
  {
    id: 'r-m17-03',
    title: 'Root-to-Leaf Beetroot: Roasted Roots, Pickled Stems, Sautéed Leaves',
    moduleId: 'm17',
    description:
      'One bunch of beetroot plated as three components — sweet roasted roots, sharp quick-pickled stems, and garlicky wilted leaves over whipped feta. Effective yield close to 95%, bin under 30 g. This is trim utilisation as a finished dish, not a virtue.',
    difficulty: 2,
    serves: 4,
    timeMins: 80,
    techniqueIds: ['t-roasting-veg', 't-pickling', 't-sauteing', 't-yield-testing'],
    ingredients: [
      { item: 'Beetroot with stems and leaves attached', qty: 1, unit: 'bunch', prep: 'about 800 g total; weigh whole, then weigh each part after separating' },
      { item: 'Olive oil', qty: 50, unit: 'ml' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'White wine vinegar', qty: 90, unit: 'ml' },
      { item: 'Water', qty: 60, unit: 'ml' },
      { item: 'Caster sugar', qty: 30, unit: 'g' },
      { item: 'Garlic', qty: 2, unit: 'each', prep: 'sliced' },
      { item: 'Feta', qty: 150, unit: 'g' },
      { item: 'Greek yoghurt', qty: 75, unit: 'g' },
      { item: 'Walnuts', qty: 40, unit: 'g', prep: 'toasted, crushed' },
    ],
    method: [
      'Weigh the whole bunch, then separate into roots, stems and leaves and weigh each pile — a three-line yield test where almost nothing should be lost.',
      'Roots: scrub (don’t peel — the skins roast off tender and keep yield high), cut into wedges, toss with 30 ml oil and salt, and roast at 210°C for 40–45 minutes until caramelised and knife-tender.',
      'Stems: cut into 3 cm batons and pack into a jar. Bring vinegar, water, sugar and a good pinch of salt to the boil and pour hot over the stems. Pickled in 30 minutes; keeps 2 weeks labelled in the fridge.',
      'Whip the feta and yoghurt smooth with a fork or small processor; loosen with a little oil.',
      'Leaves: wash well, then sauté in the remaining oil with the garlic over high heat for 2 minutes until just wilted; season.',
      'Plate: whipped feta swept across the base, roasted roots piled on, wilted leaves tucked between, pickled stems and walnuts scattered over. A little pickle liquid whisked with oil makes the dressing.',
      'Weigh what actually hit the bin (root tails, bruised leaves) and log it. Under 30 g is the target; under 15 g is a professional result.',
    ],
    chefNotes: [
      'The three parts are genuinely different vegetables — earthy-sweet, crunchy-sharp, mineral-green. Cross-utilisation done well tastes designed, not thrifty.',
      'Same template works for cauliflower (florets roasted, stem shaved raw, leaves charred) and radishes. One template, half your greengrocer bill working harder.',
    ],
    reinforces: ['High-heat vegetable roasting', 'Quick pickling ratios', 'Waste logging in grams'],
  },
  {
    id: 'r-m17-04',
    title: 'Par-Level Pantry Chickpea & Tomato Braise',
    moduleId: 'm17',
    description:
      'A rich, smoky chickpea and tomato braise built entirely from a documented par-level pantry — no shopping allowed. The dish proves the inventory system works: if the pars are right, dinner is always in the house.',
    difficulty: 2,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-tomato-sauce', 't-fifo', 't-umami-layering', 't-seasoning-salt'],
    ingredients: [
      { item: 'Olive oil', qty: 45, unit: 'ml' },
      { item: 'Brown onions', qty: 2, unit: 'each', prep: 'small dice' },
      { item: 'Garlic', qty: 4, unit: 'each', prep: 'sliced' },
      { item: 'Smoked paprika', qty: 6, unit: 'g' },
      { item: 'Tomato paste', qty: 30, unit: 'g' },
      { item: 'Tinned whole tomatoes', qty: 800, unit: 'g', prep: 'crushed by hand — take the oldest tins first' },
      { item: 'Tinned chickpeas', qty: 800, unit: 'g', prep: 'drained, liquid reserved' },
      { item: 'Dried oregano', qty: 2, unit: 'g' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Red wine vinegar', qty: 15, unit: 'ml' },
      { item: 'Stale bread', qty: 100, unit: 'g', prep: 'torn for pangrattato — trim utilisation, not garnish theatre' },
    ],
    method: [
      'Shop your own shelves with the stocktake sheet in hand: pull every ingredient FIFO — oldest tins and the open paste first — and note what the dish will consume against pars.',
      'Sweat the onions in 30 ml oil with a pinch of salt over medium heat, 8–10 minutes until soft and golden.',
      'Add garlic, paprika and tomato paste; cook 2 minutes until the paste darkens brick-red and the paprika blooms in the oil.',
      'Add tomatoes, chickpeas, oregano and a splash of the chickpea liquid. Simmer uncovered 20–25 minutes until thick and glossy, stirring occasionally.',
      'Meanwhile, blitz or hand-tear the stale bread to coarse crumbs and fry in the remaining oil with a pinch of salt until deep gold: pangrattato.',
      'Season the braise in layers — salt first, taste, then the vinegar to lift it. It should taste deep, smoky and bright, in that order.',
      'Serve scattered with pangrattato. Cool leftovers on the clock (21°C in 2 h, 5°C in 4 h), label, use within 3 days.',
      'Close the loop: update the stocktake, flag anything the dish took below par onto the shopping list, and note the rough cost of the pot (typically $8–10 — about $2.50 a serve).',
    ],
    chefNotes: [
      'This is the dish that makes par levels emotional instead of administrative: a stocked pantry means a $2.50 dinner is always 45 minutes away, which is what makes $30 of panic takeaway resistible.',
      'The recipe tolerates substitution by design — butter beans for chickpeas, chilli for paprika — because a par-level pantry cooks templates, not shopping lists.',
    ],
    reinforces: ['Tomato sauce depth from paste and slow onions', 'FIFO in practice', 'Layered seasoning and acid balance'],
  },
]
