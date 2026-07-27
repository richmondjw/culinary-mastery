import type { CourseModule, Recipe } from '../../types/content'

export const module02: CourseModule = {
  id: 'm02',
  number: 2,
  stage: 1,
  title: 'Seasoning & the Palate',
  subtitle: 'Learning to taste on purpose',
  description:
    'Technique gets food cooked; seasoning gets it eaten. This module trains your palate as deliberately as Module 1 trained your hands. You will learn what salt, acid, fat, sweetness, bitterness, umami and heat each do, when to add them, and how to run a structured tasting that turns "something is missing" into a specific, fixable answer. Every dish for the rest of the course is seasoned with what you build here.',
  objectives: [
    'Salt in layers through a dish — knowing the difference between salting early and salting late',
    'Identify which axis a dish is missing (salt, acid, fat, sweet, bitter, umami, heat) by structured tasting',
    'Use acid as a finishing seasoning, matched to the dish',
    'Layer umami sources to build depth without extra salt',
    'Rescue over-salted, flat, greasy or harsh dishes with the standard corrections',
  ],
  difficulty: 1,
  estimatedHours: 6,
  prerequisites: ['m01'],
  skillsUnlocked: [
    'Layered salting',
    'Structured tasting protocol',
    'Acid finishing',
    'Umami layering',
    'Dish rescue & rebalancing',
  ],
  equipment: [
    'Digital scales (1 g resolution)',
    'A dozen teaspoons for clean-spoon tasting',
    'Small tasting bowls or ramekins (6+)',
    'Heavy wide frying pan or sauté pan',
    'Large roasting tray',
    'Heavy-based soup pot (4 L+)',
    'Fine grater (microplane)',
  ],
  ingredients: [
    'Fine sea salt, flaky finishing salt, iodised table salt (for comparison)',
    'Red and white wine vinegar, sherry vinegar, lemons and limes',
    'Extra-virgin olive oil and unsalted butter',
    'Fish sauce, soy sauce, parmesan (with rind), anchovies, tomato paste',
    'Caster sugar and honey',
    'Fresh and dried chillies',
    'Ripe tomatoes, seasonal roasting vegetables, silverbeet, cannellini beans',
  ],
  lessons: [
    {
      id: 'm02-l01',
      title: 'Salt: types, timing and how much',
      summary: 'Why salt is the master seasoning, why when you add it matters as much as how much, and how to calibrate your hand.',
      theory: [
        {
          heading: 'What salt actually does',
          body: 'Salt does three jobs. It suppresses bitterness, which is why a pinch improves grapefruit and coffee alike. It amplifies aroma, making a tomato taste more of tomato. And through diffusion and osmosis it changes texture: salted early, it penetrates food and seasons it from within; salted at the end, it sits on the surface as a bright, separate hit.\n\nThe working numbers: pasta and blanching water at about 1% — 10 g per litre, which tastes like pleasant seawater. Meat and fish at roughly 1% of their weight, applied ahead of cooking so it has time to travel inward. Soups and sauces are salted in stages and finished by taste, never by measure alone, because reduction concentrates whatever you added.',
        },
        {
          heading: 'Crystals are not interchangeable',
          body: 'Salt is measured by weight, not volume, because crystal shape lies. A teaspoon of fine sea salt weighs nearly twice as much as a teaspoon of flaky salt, so a recipe written in spoons behaves differently in every kitchen. Your scales end the argument: 5 g is 5 g.\n\nUse fine salt for cooking — it dissolves fast and distributes evenly. Save flaky salt for finishing, where the crystal itself is the point: a crunch of salt on a tomato or a steak is a texture event as much as a seasoning. Iodised table salt carries a faint metallic edge; taste all three side by side once, dissolved in water, and you will never confuse them again.',
        },
      ],
      demonstrations: [
        {
          title: 'The 0.5% to 1.5% calibration ladder',
          steps: [
            'Make 1 litre of plain vegetable or chicken broth (or use hot water with a little olive oil).',
            'Divide 200 ml into each of five bowls, labelled 0.5%, 0.75%, 1%, 1.25%, 1.5%.',
            'Weigh salt for each bowl: 1 g, 1.5 g, 2 g, 2.5 g, 3 g. Dissolve fully.',
            'Taste in ascending order with a clean spoon each time, water between tastes.',
            'Find the bowl where flavour blooms without tasting "salty" — for most palates, 0.75–1%.',
            'Now taste a three-finger pinch of fine salt into your dry palm and weigh it. Repeat five times until you can pinch 2 g on demand.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Salt-timing tomatoes',
          instructions: 'Slice one ripe tomato. Salt half the slices immediately and leave half plain. After 15 minutes, salt the plain half and taste both straight away. The early-salted slices are seasoned throughout and have wept their juice; the late-salted ones are bland inside with a bright surface. Write two sentences on when you would want each effect.',
          repeatPractice: 'Before salting anything in Modules 3–6, say out loud whether you are salting for penetration or for surface. By Module 7 the decision should be automatic.',
        },
        {
          title: 'The calibrated pinch',
          instructions: 'Once a day for a week, pinch what you believe is 2 g of fine salt into a bowl on the scales, then check. Log your error. You are done when five consecutive pinches land within 0.3 g.',
        },
      ],
      recipeIds: ['r-m02-01'],
      techniqueIds: ['t-seasoning-salt', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Food tastes flat even though I salted it',
          cause: 'One late addition of salt seasons only the surface of the liquid or the outside of the food.',
          fix: 'Salt at every transformation — raw protein, sweating aromatics, simmering liquid, final adjust — so the seasoning is inside the food, not sitting on it.',
        },
      ],
    },
    {
      id: 'm02-l02',
      title: 'Acid and fat: brightness and carriage',
      summary: 'The two seasonings home cooks under-use: acid to lift, fat to carry — and how they balance each other.',
      theory: [
        {
          heading: 'Acid is a seasoning, not an ingredient',
          body: 'When a dish is salted correctly but still tastes dull, it almost always wants acid. Acid cuts through fat, sharpens sweetness and makes every other flavour read more clearly — the same job stage lighting does for actors. The professional habit is to ask "salt or acid?" as two separate questions every time you taste.\n\nAdd acid at the end wherever possible: the volatile aromatics in lemon juice and vinegar are driven off by prolonged heat, leaving sourness without perfume. Match the acid to the dish — lemon with butter and fish, wine vinegar with rich meats and lentils, lime with chilli and fish sauce, sherry vinegar with roasted vegetables and soups. And go a few drops at a time: the jump from flat to vivid happens suddenly, and one drop past it is "too sour".',
        },
        {
          heading: 'Fat carries flavour',
          body: 'Most aroma compounds are fat-soluble, which is why chilli infused in oil tastes hotter and garlic cooked in butter perfumes a whole dish. Fat also coats the palate, giving richness, and rounds off harsh edges — a spoon of butter swirled into a sharp tomato sauce is a correction you will use for life.\n\nToo much fat, though, mutes everything and leaves the palate coated and tired; the correction is acid, which is why vinaigrette exists at a ratio of 3:1 oil to acid and not 6:1. Fat and acid are a seesaw. Brown butter — butter cooked to 150°C or so until its milk solids toast hazelnut-brown — adds a nutty, almost umami depth, and is this module’s introduction to fat as a flavour in its own right rather than just a medium.',
        },
      ],
      demonstrations: [
        {
          title: 'Brown butter, and catching it in time',
          steps: [
            'Cut 100 g of unsalted butter into even cubes and melt over medium heat in a light-coloured pan so you can see the solids.',
            'Let it foam; the crackle is water boiling off. Swirl occasionally.',
            'Watch the milk solids on the pan floor turn gold, then hazelnut. It smells of toasted nuts at around 3–5 minutes.',
            'The moment the solids are amber-brown, pour the butter into a cold bowl — the pan’s heat will carry it to black if you hesitate.',
            'Add a squeeze of lemon to half the batch. Taste both halves on a piece of bread: fat alone, then fat balanced with acid.',
          ],
        },
        {
          title: 'The acid staircase',
          steps: [
            'Make 300 ml of simple puréed vegetable soup, salted correctly to taste.',
            'Divide into three bowls. Leave one plain.',
            'Add 3 drops of sherry vinegar to the second, stir, taste against the first.',
            'Add 1 teaspoon (5 ml) to the third, stir, taste all three in a row.',
            'Identify the point where brightness becomes sourness — that boundary is what you are learning to feel.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Acid matching board',
          instructions: 'Set out lemon juice, lime juice, red wine vinegar and sherry vinegar. Taste each against three vehicles: buttered bread, a spoon of warm white beans, and a piece of roasted carrot. Note which acid flatters which vehicle and why. There are no wrong answers, only defended ones.',
          repeatPractice: 'Every sauce and soup from Module 4 onward gets a deliberate acid decision before serving — name the acid and the amount before you add it.',
        },
      ],
      recipeIds: ['r-m02-02', 'r-m02-04'],
      techniqueIds: ['t-acid-balance', 't-tasting'],
      troubleshooting: [
        {
          problem: 'I added lemon and now the dish just tastes sour',
          cause: 'Acid was added in one large hit, past the brightness threshold.',
          fix: 'Counter with a pinch of sugar or a knob of butter to re-round it, and next time add acid drops at a time, tasting between additions.',
        },
        {
          problem: 'Brown butter went from nutty to burnt',
          cause: 'The pan’s residual heat kept cooking the milk solids after the colour looked right.',
          fix: 'Pour it out of the pan into a cold bowl the instant the solids are hazelnut — the colour you see in the pan is one shade lighter than where it will finish.',
        },
      ],
    },
    {
      id: 'm02-l03',
      title: 'Sweet, bitter, umami and heat',
      summary: 'The supporting cast: sugar as a corrector, bitterness as an adult pleasure, umami as depth, and chilli as sensation.',
      theory: [
        {
          heading: 'Sweetness and bitterness are a pair',
          body: 'Sugar in savoury cooking is a corrector, not a flavour. A pinch — 2 to 5 g in a whole pot — rounds a genuinely sharp tomato sauce or an over-vinegared dressing. If you find yourself adding more than that, the real problem is elsewhere: over-reduction, poor tomatoes, too much acid. Sweetness also comes free from technique: caramelised onions, roasted roots and browned crusts all deliver it without the sugar jar.\n\nBitterness is the palate’s acquired taste, and dishes without any read as childish — think radicchio, charred crusts, coffee, dark greens, olive oil’s peppery finish. You rarely add bitterness directly; you preserve it, by not over-blanching greens or drowning a salad, and you leash it with salt and fat, which are its natural counterweights.',
        },
        {
          heading: 'Umami and heat',
          body: 'Umami — the savoury taste of glutamates and nucleotides — is what makes a dish feel deep rather than merely salty. The pantry sources are tomato paste, parmesan and its rind, anchovies, fish sauce, soy, miso and dried mushrooms. The professional trick is layering: glutamate sources multiplied by nucleotide sources taste far more than the sum, which is why tomato plus anchovy plus parmesan is the backbone of half of Italian cooking. A teaspoon of fish sauce deepens a braise without anyone tasting fish.\n\nChilli heat is not a taste but a sensation — capsaicin firing pain receptors — and it needs the same discipline as salt: added in increments, distributed evenly, and balanced by fat, sweetness or dairy, which dissolve and dilute capsaicin far better than water can.',
        },
      ],
      demonstrations: [
        {
          title: 'Umami layering in a plain broth',
          steps: [
            'Heat 500 ml of light vegetable broth, correctly salted. Taste and note its depth on a 1–10 scale.',
            'Add 1 teaspoon of tomato paste, dissolve, simmer 2 minutes. Taste and re-score.',
            'Add a 3 cm piece of parmesan rind, simmer 5 minutes. Taste and re-score.',
            'Add 1/2 teaspoon of fish sauce. Taste and re-score.',
            'Notice the broth has become dramatically more savoury while the salt level barely moved — that gap is umami.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The seven-axis flight',
          instructions: 'Prepare seven spoons from one batch of plain white bean purée: plain; +salt; +lemon; +olive oil; +pinch of sugar; +fish sauce; +chilli oil. Taste in that order and write one line per spoon describing exactly what changed. This is your reference library for what each axis does in isolation.',
          repeatPractice: 'Re-run this flight in Module 5 using velouté and in Module 9 using a braising liquid — the axes behave the same in every medium, and recognising them under richness is the harder skill.',
        },
      ],
      recipeIds: ['r-m02-03'],
      techniqueIds: ['t-umami-layering', 't-tasting', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'The dish tastes salty but still shallow',
          cause: 'Salt has been asked to do umami’s job — there is no glutamate depth underneath it.',
          fix: 'Back off the salt and add a layered umami source: tomato paste cooked out, a parmesan rind in the simmer, or a teaspoon of fish sauce or soy.',
        },
      ],
    },
    {
      id: 'm02-l04',
      title: 'The tasting protocol: balancing and rescuing',
      summary: 'A repeatable checklist that turns tasting into diagnosis, and the standard rescues for the standard failures.',
      theory: [
        {
          heading: 'Taste with a question',
          body: '"Is this good?" is unanswerable mid-cook. The professional protocol asks one dimension at a time, in order: Salt — does flavour bloom or lie flat? Acid — is it bright or dull? Fat — rich enough, or greasy? Sweet/bitter — rounded, or harsh, or cloying? Umami — deep, or thin? Heat — present where intended? Texture — does it match the dish’s promise?\n\nThe mechanics matter as much as the questions. Always taste from a clean spoon — double-dipping seeds bacteria and, worse, habituates your palate. Cool the spoonful first: heat above about 70°C suppresses your perception of both salt and sweetness, which is why a soup seasoned boiling tastes over-salted at the table. And taste components the way they will be eaten — the sauce on the meat, the dressing on the leaf — not naked on steel.',
        },
        {
          heading: 'The rescue table',
          body: 'Most failures have standard corrections, and knowing them removes the panic. Over-salted: dilute with unsalted liquid, add bulk (potato, beans, cream), or sharpen with acid so the salt reads as less dominant — the raw potato "sponge" myth removes almost nothing. Flat: salt first; if salted, acid; if bright, umami. Greasy: acid, and skim visible fat. Too sour: a pinch of sugar or a knob of butter, or dilute. Bitter: salt and fat leash it; sweetness masks it. Too spicy: dairy, fat or sweetness — never more water.\n\nThe deeper rule is to correct in small moves and re-taste after each one. A dish is balanced when no single axis announces itself and the main ingredient tastes intensely of itself. Stop there — seasoning past that point makes the seasoning the subject.',
        },
      ],
      demonstrations: [
        {
          title: 'Deliberately breaking and rescuing a soup',
          steps: [
            'Make 1 litre of simple bean and vegetable soup, seasoned to balanced. Reserve 250 ml as the control.',
            'Split the rest into three pots. Over-salt the first (add 3 g), over-acidify the second (15 ml vinegar), make the third greasy (30 ml oil, stirred through).',
            'Rescue the salty pot with unsalted stock plus a handful of cooked beans; re-taste against the control.',
            'Rescue the sour pot with 3 g sugar and 10 g butter; re-taste.',
            'Rescue the greasy pot by skimming, then brightening with vinegar drops; re-taste.',
            'Compare all three rescues with the control and note which correction worked fastest.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Blind axis diagnosis',
          instructions: 'Have someone secretly doctor three cups of the same soup — one over-salted, one over-acidified, one thinned flat — and shuffle them. Run the full protocol on each and name the fault. Then fix each one. Three out of three, twice in a row, is the pass mark.',
          repeatPractice: 'From Module 4, run the full seven-question protocol out loud on every stock, soup and sauce before it leaves the stove. By Stage 2 the questions run silently in about ten seconds.',
        },
      ],
      recipeIds: ['r-m02-01', 'r-m02-03'],
      techniqueIds: ['t-tasting', 't-acid-balance', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'Everything tastes fine to me until someone else eats it',
          cause: 'Palate fatigue — continuous tasting habituates you to the dish’s current state.',
          fix: 'Taste less often but more deliberately: clean spoon, sip of water first, one question at a time. Step away for two minutes before the final adjustment.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Seasoning once, at the end',
      cause: 'Treating salt as a table condiment rather than a cooking ingredient.',
      fix: 'Salt at every transformation — protein, aromatics, liquid, final adjust. Late salt sits on top; layered salt is inside.',
    },
    {
      problem: 'Reaching for salt when the dish needs acid',
      cause: 'Salt is the only correction most home cooks know, so every dullness gets the same answer.',
      fix: 'Ask the two questions separately every time: salt first, then "is it bright?" If salting stops helping, stop salting.',
    },
    {
      problem: 'Tasting from the stirring spoon, boiling hot',
      cause: 'Habit, plus impatience.',
      fix: 'Clean spoon every taste, cooled for a few seconds. Heat masks salt and sweetness, so hot tasting mis-calibrates every decision that follows.',
    },
    {
      problem: 'Measuring salt by the spoon from recipes',
      cause: 'Crystal sizes vary so much that volume measures are nearly meaningless across salt types.',
      fix: 'Weigh it. Learn your own pinch in grams, and translate any recipe’s "1 tsp salt" through your scales once before trusting it.',
    },
  ],
  assessment: {
    id: 'as-m02',
    moduleId: 'm02',
    title: 'The Balance Bench',
    brief:
      'In a single 90-minute session: (1) cook the staged-seasoning soup (r-m02-03), pausing to log salt added at each stage in grams; (2) plate the tomato salad (r-m02-01) with a written note naming your salt timing and acid choice; (3) have a helper doctor two cups of your soup (one over-salted, one over-acidified) — diagnose each blind using the protocol and rescue it. Photograph the finished dishes and your seasoning log.',
    rubric: [
      { criterion: 'Layered seasoning in the soup', maxScore: 10, guidance: '9–10: salted at every stage, final dish balanced with no late rescue needed. 6–8: balanced but corrected heavily at the end. Below 6: flat or salty.' },
      { criterion: 'Blind diagnosis accuracy', maxScore: 10, guidance: 'Both faults named correctly on first taste using the protocol: 10. One correct: 6. Guessing without the protocol: below 6.' },
      { criterion: 'Rescue execution', maxScore: 8, guidance: 'Both doctored cups brought back to match the control in small, deliberate corrections with re-tasting between moves.' },
      { criterion: 'Acid judgement on the salad', maxScore: 7, guidance: 'Dressing bright but not sour; acid named and justified in the note; salt timing deliberate and stated.' },
      { criterion: 'Tasting discipline', maxScore: 5, guidance: 'Clean spoon every taste, spoonfuls cooled, one axis questioned at a time, log kept in grams.' },
    ],
    passScore: 28,
    evidence: 'Three photos: the plated salad, the finished soup, and your handwritten seasoning log showing grams of salt per stage.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Salt calibration ladder and seven-axis flight both done, with written notes kept',
    'All four module recipes cooked',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module02Recipes: Recipe[] = [
  {
    id: 'r-m02-01',
    title: 'The Perfect Tomato Salad',
    moduleId: 'm02',
    description:
      'Ripe tomatoes, salt, olive oil, vinegar — nothing else, nowhere to hide. The whole recipe is four seasoning decisions: how much salt, when, which acid, how much fat. Ten minutes of work; a whole lesson on a plate.',
    difficulty: 1,
    serves: 4,
    timeMins: 25,
    techniqueIds: ['t-seasoning-salt', 't-acid-balance', 't-tasting', 't-knife-grip'],
    ingredients: [
      { item: 'Ripe tomatoes, mixed sizes', qty: 800, unit: 'g', prep: 'cored, cut in irregular wedges and thick slices' },
      { item: 'Flaky sea salt', qty: null, unit: 'to taste' },
      { item: 'Extra-virgin olive oil', qty: 45, unit: 'ml' },
      { item: 'Red wine or sherry vinegar', qty: 10, unit: 'ml' },
      { item: 'Small red onion', qty: 0.25, unit: 'each', prep: 'shaved paper-thin, rinsed in cold water' },
      { item: 'Basil leaves', qty: 10, unit: 'g', prep: 'torn at the last moment' },
      { item: 'Freshly ground black pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'Cut the tomatoes with a freshly honed knife — a dull blade crushes the flesh and bleeds the jelly. Vary the cuts so different pieces present different textures.',
      'Arrange on a large flat plate in one loose layer, cut faces up, and salt them 15 minutes before serving: about two three-finger pinches, aimed at the cut surfaces. This is deliberate early salting — it seasons the flesh and draws juice onto the plate.',
      'Taste a small piece after 10 minutes. It should taste more of tomato, not of salt. Adjust with a light final scatter only if needed.',
      'Whisk the vinegar into the oil with a pinch of salt, then spoon it over — over the tomatoes and through the pooled juice, which becomes part of the dressing.',
      'Scatter the rinsed onion and torn basil, grind over pepper, and serve within 10 minutes with bread for the juices.',
      'Before it leaves the bench, run the protocol once: salt, acid, fat, done. Resist a fifth ingredient.',
    ],
    chefNotes: [
      'The salted-tomato juice mixed with oil and vinegar on the plate is your first pan-less "sauce" — from Module 5 you will recognise it as a broken vinaigrette, and that is exactly what it should be.',
      'Never refrigerate the tomatoes: below about 10°C their aroma enzymes shut down and the salad tastes of cold water. Buy ripe, keep on the bench, eat within days.',
    ],
    reinforces: ['Knife sharpness and clean slicing', 'Salt timing for penetration', 'Tasting before serving'],
  },
  {
    id: 'r-m02-02',
    title: 'Roast Vegetables, Sherry Vinegar Finish',
    moduleId: 'm02',
    description:
      'A tray of deeply browned roots and brassicas, seasoned before the oven and finished with vinegar after it. No sauce, no cheese — the browning is the richness and the acid is the lift. The template for every roast-veg side you will ever make.',
    difficulty: 1,
    serves: 4,
    timeMins: 55,
    techniqueIds: ['t-roasting-veg', 't-acid-balance', 't-seasoning-salt', 't-dice'],
    ingredients: [
      { item: 'Carrots', qty: 400, unit: 'g', prep: 'peeled, cut in 3 cm oblique chunks' },
      { item: 'Cauliflower', qty: 400, unit: 'g', prep: 'cut in flat-sided florets' },
      { item: 'Red onions', qty: 2, unit: 'each', prep: 'peeled, cut in eighths through the root' },
      { item: 'Olive oil', qty: 60, unit: 'ml' },
      { item: 'Fine salt', qty: 6, unit: 'g' },
      { item: 'Sherry vinegar', qty: 20, unit: 'ml' },
      { item: 'Honey', qty: 10, unit: 'g' },
      { item: 'Flat-leaf parsley', qty: 10, unit: 'g', prep: 'roughly chopped' },
      { item: 'Flaky salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 210°C with a large heavy tray inside — a screaming-hot tray browns the cut faces on contact instead of steaming them.',
      'Toss the vegetables with the oil and the fine salt in a bowl. Salting now, before heat, seasons them through and helps drive off surface moisture.',
      'Tip onto the hot tray in a single layer, cut faces down, with visible gaps between pieces. Crowding traps steam and steam is the enemy of browning — use two trays before you overlap anything.',
      'Roast 20 minutes without touching them, then turn and roast a further 15–20 minutes until deeply golden at the edges and tender at a knife point.',
      'Whisk the vinegar and honey together. The moment the tray leaves the oven, splash it over the hot vegetables — heat blooms the vinegar’s aroma and the residue in the tray becomes a glaze as you toss.',
      'Taste one piece deliberately: richness from browning, brightness from vinegar, a whisper of sweetness. Adjust with drops of vinegar or a pinch of flaky salt, then fold through the parsley and serve from the tray.',
    ],
    chefNotes: [
      'Acid after the oven, never before: vinegar in the raw toss slows browning and its perfume burns off. The after-splash is a rule you will reuse on grilled meat and pan-fried fish.',
      'Oblique (roll) cuts give carrots maximum flat surface for caramelising — and they are quiet knife practice from Module 1.',
    ],
    reinforces: ['Even chunk cuts for even roasting', 'Salting before heat', 'Finishing with acid'],
  },
  {
    id: 'r-m02-03',
    title: 'White Bean & Silverbeet Soup, Seasoned in Stages',
    moduleId: 'm02',
    description:
      'A humble pot of beans and greens built as a seasoning exercise: salt goes in at four distinct stages, umami is layered in three, and the acid decision is made at the table. Cook it with the scales next to the pot and a log sheet beside them.',
    difficulty: 1,
    serves: 6,
    timeMins: 60,
    techniqueIds: ['t-seasoning-salt', 't-umami-layering', 't-tasting', 't-dice', 't-chiffonade'],
    ingredients: [
      { item: 'Olive oil', qty: 45, unit: 'ml' },
      { item: 'Brown onion', qty: 200, unit: 'g', prep: 'small dice (6 mm)' },
      { item: 'Carrot', qty: 100, unit: 'g', prep: 'small dice' },
      { item: 'Celery', qty: 100, unit: 'g', prep: 'small dice' },
      { item: 'Garlic', qty: 3, unit: 'each', prep: 'minced' },
      { item: 'Tomato paste', qty: 30, unit: 'g' },
      { item: 'Cooked cannellini beans', qty: 800, unit: 'g', prep: 'drained, liquid reserved if home-cooked' },
      { item: 'Water or light stock', qty: 1.5, unit: 'L' },
      { item: 'Parmesan rind', qty: 1, unit: 'each' },
      { item: 'Silverbeet', qty: 300, unit: 'g', prep: 'stems in 1 cm slices, leaves in chiffonade' },
      { item: 'Fine salt', qty: null, unit: 'to taste', prep: 'weighed at each addition' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'cut in wedges' },
      { item: 'Extra-virgin olive oil', qty: 30, unit: 'ml', prep: 'for finishing' },
    ],
    method: [
      'Mise en place first, Module 1 style, including a log sheet with four lines: Stage 1 aromatics, Stage 2 liquid, Stage 3 greens, Stage 4 final. You will record grams of salt at each.',
      'Stage 1: sweat the onion, carrot, celery and silverbeet stems in the oil over medium-low with 2 g of salt, 8–10 minutes, without colour. Log it. The salt pulls moisture and seasons the base from the inside.',
      'Add the garlic for 1 minute, then the tomato paste; cook it 2 minutes until it darkens a shade and smells sweet. This is umami layer one.',
      'Stage 2: add beans, water and the parmesan rind (umami layer two) with 4 g of salt. Log it. Simmer gently 20 minutes.',
      'Taste with a clean, cooled spoon: the broth should taste seasoned but one notch under. If it is flatly under, add 2 g and log it.',
      'Stage 3: stir in the silverbeet leaves and simmer 5 minutes until silky. Greens dilute seasoning — taste again and log any correction.',
      'Stage 4: off the heat, remove the rind, run the full protocol. Adjust salt in 1 g steps. Umami layer three, if the soup still feels shallow: half a teaspoon of fish sauce or soy.',
      'Serve with a wedge of lemon and a thread of olive oil per bowl — each eater makes the acid decision themselves, and you should taste yours before and after squeezing.',
    ],
    chefNotes: [
      'Your log will usually total 9–12 g of salt for this pot — about 0.5% of its weight. Keep the sheet; comparing logs across three makings of this soup teaches more than any paragraph.',
      'The lemon-at-the-table trick is honest cooking, not laziness: acid added in the pot dulls within minutes, so brothy soups are brightest when acidified per bowl.',
    ],
    reinforces: ['Small dice and chiffonade', 'Layered salting with a written log', 'Umami stacking', 'Clean-spoon tasting'],
  },
  {
    id: 'r-m02-04',
    title: 'Brown Butter Green Beans, Lemon & Almonds',
    moduleId: 'm02',
    description:
      'Blanched beans rolled in nut-brown butter with toasted almonds and a sharp edge of lemon — amandine, by its French name. A five-ingredient study in fat as flavour, and in how far acid can push richness before either wins.',
    difficulty: 1,
    serves: 4,
    timeMins: 30,
    techniqueIds: ['t-blanching', 't-acid-balance', 't-tasting', 't-seasoning-salt'],
    ingredients: [
      { item: 'Green beans', qty: 500, unit: 'g', prep: 'topped' },
      { item: 'Fine salt', qty: 30, unit: 'g', prep: 'for the blanching water' },
      { item: 'Unsalted butter', qty: 80, unit: 'g', prep: 'cut in even cubes' },
      { item: 'Flaked almonds', qty: 40, unit: 'g' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'juice of half, wedges from the rest' },
      { item: 'Flaky salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Bring 3 litres of water to a hard rolling boil with the 30 g of salt — about 1%, tasting of pleasant seawater. Set a big bowl of iced water beside the stove.',
      'Blanch the beans 2–3 minutes: taste one at 2 minutes; it should be tender with a clean snap, no squeak. Lift straight into the iced water, then drain and dry thoroughly — wet beans will spit in butter and dilute the sauce.',
      'Melt the butter in a wide light-coloured pan over medium heat. When the foam subsides, add the almonds; they toast as the butter browns and act as your colour gauge.',
      'Cook, swirling, until the almonds are golden and the milk solids beneath are hazelnut-brown — 3–4 minutes, nutty-smelling. Pull the pan off the heat the instant it is right.',
      'Add the beans and toss to coat and reheat, 1 minute, then squeeze in the lemon juice off the heat — it will hiss and emulsify slightly into the butter.',
      'Taste one bean: rich, nutty, then bright. If the butter dominates, more lemon by the drop; if it tastes lean, a few more seconds in the pan. Finish with flaky salt and serve immediately with the wedges.',
    ],
    chefNotes: [
      'The blanching water’s salt is doing the deep seasoning here — properly salted water means the beans need almost nothing later. Under-salt the pot and no amount of finishing salt tastes right.',
      'This butter-plus-lemon finish is a proto-sauce: in Module 5 you will meet it grown up, stabilised and glossy, as beurre blanc and beurre noisette sauces.',
    ],
    reinforces: ['Blanch and refresh', 'Seasoning via the cooking water', 'Balancing fat with acid'],
  },
]
