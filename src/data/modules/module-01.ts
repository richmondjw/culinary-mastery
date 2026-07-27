import type { CourseModule, Recipe } from '../../types/content'

export const module01: CourseModule = {
  id: 'm01',
  number: 1,
  stage: 1,
  title: 'Mise en Place & Knife Skills',
  subtitle: 'The grammar of the kitchen',
  description:
    'Everything in cooking sits on two foundations: an organised station and confident knife work. This module builds both. You will learn to set up and run a station like a professional, hold and maintain a knife properly, and produce the classic cuts with consistency. Every later module assumes — and re-drills — what you learn here.',
  objectives: [
    'Set up a complete mise en place for any recipe before heat is applied',
    'Hold a knife with a pinch grip and guide it with a claw hand, at working speed, safely',
    'Produce julienne, brunoise, small/medium/large dice, chiffonade and fine mince to consistent dimensions',
    'Sharpen a knife on a whetstone and hone it before each session',
    'Run a clean board: raw/ready-to-eat separation, waste management, reset between tasks',
  ],
  difficulty: 1,
  estimatedHours: 8,
  prerequisites: [],
  skillsUnlocked: [
    'Pinch grip & claw',
    'Classic knife cuts',
    'Whetstone sharpening',
    'Station setup & mise en place',
  ],
  equipment: [
    "20–24 cm chef's knife",
    'Paring knife',
    'Whetstone (1000/3000) and honing steel',
    'Two large cutting boards + damp cloth to anchor them',
    'Digital scales',
    'Prep containers and a waste bowl',
  ],
  ingredients: [
    '3 kg brown onions (practice stock — cheap and unforgiving)',
    'Carrots, celery, potatoes (2 kg mixed)',
    'Flat-leaf parsley, basil, garlic',
    'Firm tomatoes, cucumbers, capsicum',
    'Limes, chillies, coriander, red onion',
  ],
  lessons: [
    {
      id: 'm01-l01',
      title: 'Mise en place: the organised kitchen',
      summary: 'Why professionals prep everything before the pan goes on, and how to make it a habit.',
      theory: [
        {
          heading: 'Everything in its place',
          body: 'Mise en place — "put in place" — is the defining habit of professional cooking. Before any heat is applied, every ingredient is prepped, weighed and arranged in order of use; every tool is positioned; the board is clear.\n\nThe reason is not tidiness. Cooking is a real-time activity: once a pan is hot, you cannot pause to peel garlic. Home cooks burn onions while chopping the next ingredient. Professionals never chop while cooking — they cook, then plate. The two activities are separated completely.',
        },
        {
          heading: 'The station',
          body: 'A working station has a fixed geography: board anchored on a damp cloth, knife at the top edge when not in hand, prepped items in containers to one side in order of use, a waste bowl within reach so the bin never interrupts the work, and a side towel that lives on your apron or the bench — not draped over your shoulder near flame.\n\nClean-as-you-go is part of the method, not an interruption to it. Between tasks: scrape the board, wipe it, reset. A cluttered board is slower and more dangerous than the thirty seconds it takes to clear it.',
        },
      ],
      demonstrations: [
        {
          title: 'Setting a station from scratch',
          steps: [
            'Wipe the bench and lay a damp cloth flat; seat the board on it and check it cannot slide.',
            'Place a waste bowl at the top-left of the board, prep containers to the right.',
            'Read the recipe end to end. List every ingredient and its prep ("onion — small dice", "garlic — minced").',
            'Prep in order: dry before wet, mild before pungent, vegetables before raw protein.',
            'Weigh each item into its container and line the containers up in order of use.',
            'Reset the board — scrape, wipe — and only now think about heat.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Recipe teardown',
          instructions: 'Take any recipe from your repertoire. Rewrite it as two lists: a prep list (every ingredient with its cut/measure) and a cook list (only the actions that happen after heat). Do the entire prep list, photograph your lined-up mise, then cook without touching the knife again.',
          repeatPractice: 'Do this for every recipe in the course. From Module 4 onward you should no longer need to write the lists — the split becomes automatic.',
        },
      ],
      recipeIds: [],
      techniqueIds: ['t-mise-en-place'],
      troubleshooting: [
        {
          problem: 'Prep feels slower than "chopping as I go"',
          cause: 'You are measuring total time, not cooking quality. Interleaved chopping makes the cooking unattended and rushed.',
          fix: 'Time yourself both ways on the same dish a week apart. Prepped cooking is calmer, the pan gets full attention, and total time converges as your knife speeds up.',
        },
      ],
    },
    {
      id: 'm01-l02',
      title: 'The knife: grip, stance and sharpness',
      summary: 'Pinch grip, claw hand, body position, and keeping an edge with stone and steel.',
      theory: [
        {
          heading: 'Grip and stance',
          body: 'Hold the knife by pinching the blade itself between thumb and the side of your forefinger, just ahead of the handle — the remaining three fingers wrap the handle. This pinch grip puts your hand over the balance point: the knife stops wobbling and starts obeying.\n\nThe guiding hand curls into a claw: fingertips tucked under, knuckles vertical, holding the food. The flat of the blade rides against those knuckles, which means the edge physically cannot reach your fingertips. Stand at a slight angle to the bench, feet shoulder-width, board at a height where your forearm is roughly parallel to the board when the knife is flat on it.',
        },
        {
          heading: 'Sharp is safe',
          body: 'A dull knife needs force; force is what slips. A sharp edge bites where you place it with almost no pressure — it is the single biggest safety upgrade available.\n\nTwo different maintenance jobs: honing (the steel) realigns a rolled edge and takes ten seconds before each session. Sharpening (the whetstone) removes metal to create a new edge and is needed every few weeks of regular cooking. On a 1000-grit stone, hold the blade at 15–20° and stroke edge-leading across the stone until you can feel a burr — a tiny wire of metal — along the entire opposite side. Flip, repeat, then polish on the finer grit and strop the burr away.',
        },
      ],
      demonstrations: [
        {
          title: 'Honing before a session',
          steps: [
            'Hold the steel vertically, tip planted on a folded towel on the board.',
            'Set the heel of the blade against the top of the steel at ~15–20°.',
            'Draw the blade down and toward you, heel to tip, with light pressure.',
            'Alternate sides, 6–8 strokes each. Test on a sheet of paper — it should slice, not tear.',
          ],
        },
        {
          title: 'Whetstone sharpening',
          steps: [
            'Soak or splash the stone per its type; anchor it on a damp cloth.',
            'Mark the edge with a marker if unsure of your angle — the strokes should erase the ink evenly.',
            'Sweep the full edge across the 1000-grit stone, consistent angle, moderate pressure, until a burr forms along the whole opposite side.',
            'Flip and repeat to raise the burr on the other side.',
            'Move to the fine stone with light pressure to polish; finish with alternating feather-light strokes.',
            'Wash the knife, slice paper and then a tomato: it should fall through the skin under its own weight.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Ten-minute grip drill',
          instructions: 'Slice three onions into thin half-moons using strict pinch grip and claw. Slow is fine; broken form is not. Film 30 seconds of it and watch your knuckle position — the blade should touch your knuckles on every slice.',
          repeatPractice: 'Begin every cooking session in Modules 1–4 with two minutes of slow, perfect-form slicing before you start the actual prep.',
        },
      ],
      recipeIds: [],
      techniqueIds: ['t-knife-grip', 't-sharpening'],
      troubleshooting: [
        {
          problem: 'The pinch grip feels weak and unnatural',
          cause: 'Your hand is used to the handle grip, which feels stronger but steers badly.',
          fix: 'Persist for three sessions. The pinch grip recruits the forearm instead of the wrist; by the third session it will feel like the only sensible way to hold a knife.',
        },
        {
          problem: 'Knife skates off the food instead of biting',
          cause: 'Dull edge, or you are pushing straight down instead of slicing.',
          fix: 'Hone first. Then remember the edge cuts on the forward or backward stroke — draw the blade through the food, don’t press it.',
        },
      ],
    },
    {
      id: 'm01-l03',
      title: 'The classic cuts',
      summary: 'Julienne, brunoise, the dice family, chiffonade and mince — with the dimensions that define them.',
      theory: [
        {
          heading: 'Why uniform cuts matter',
          body: 'Uniform cuts are not chef vanity. Pieces of the same size cook at the same rate — an even brunoise sweats evenly, an even dice braises evenly. Mixed sizes give you burnt corners and raw centres in the same pan.\n\nThe classical dimensions: julienne 2 mm × 2 mm × 5 cm; brunoise 2 mm cubes (julienne cut crosswise); small dice 6 mm; medium dice 12 mm; large dice 20 mm; chiffonade — leaves rolled and ribbon-cut; mince — as fine as the knife allows, evenly. Every cut starts the same way: square off the vegetable so it sits flat and stable, then reduce it plane by plane — planks, then sticks, then cubes.',
        },
        {
          heading: 'The onion, specifically',
          body: 'Onion dice has its own geometry because the onion is already layered. Halve it pole to pole, peel, lay flat. Make radial vertical cuts toward the root (which stays intact — it holds the onion together), one or two horizontal cuts parallel to the board, then slice crosswise: dice falls off the knife. The root end is the last centimetre; it goes to the stock bag, not the bin.',
        },
      ],
      demonstrations: [
        {
          title: 'Carrot: plank → julienne → brunoise',
          steps: [
            'Peel and cut the carrot into 5 cm barrels.',
            'Take a thin slice off one side so it sits flat — never cut a rolling vegetable.',
            'Slice into 2 mm planks, working down the flat-sided barrel.',
            'Stack two or three planks; slice lengthwise into 2 mm sticks: julienne.',
            'Gather the julienne parallel and cut crosswise every 2 mm: brunoise.',
            'Check your work against a ruler once per session — eyes drift.',
          ],
        },
        {
          title: 'Basil chiffonade',
          steps: [
            'Stack leaves largest at the bottom, smallest on top.',
            'Roll the stack lengthwise into a tight cigar.',
            'Slice across the roll in single forward strokes, as thin as you can.',
            'Fluff the ribbons; use immediately — cut basil blackens within the hour.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The cut card',
          instructions: 'Produce and photograph a "cut card": on one board, one tablespoon each of julienne, brunoise, small dice, medium dice, chiffonade and minced garlic, arranged in a grid. Judge yourself on consistency within each pile, not speed.',
          repeatPractice: 'Re-shoot the cut card at the end of Modules 4, 8 and 12. Keep the photos — the improvement is your progress bar.',
        },
        {
          title: 'Onion volume drill',
          instructions: 'Dice six onions in one sitting: two slow and perfect, two at moderate pace, two pushing speed without breaking form. Bag them for stock, soffritto or caramelising — nothing is wasted.',
          repeatPractice: 'Every soup, stock, braise and sauce in this course starts with aromatics. Treat each one as a timed cut drill.',
        },
      ],
      recipeIds: ['r-m01-01', 'r-m01-02'],
      techniqueIds: ['t-julienne', 't-brunoise', 't-dice', 't-chiffonade', 't-mince'],
      troubleshooting: [
        {
          problem: 'Dice are wildly inconsistent',
          cause: 'The planks were uneven, so everything downstream is uneven.',
          fix: 'Slow down at the plank stage — it sets the size of every cut after it. Check plank thickness before moving on.',
        },
        {
          problem: 'Fingertips keep drifting into the open',
          cause: 'Claw collapses as the piece gets small.',
          fix: 'When a piece gets too small to claw safely, stop. That last knuckle of carrot goes in the stock bag. Professionals throw the ends; amputees held on.',
        },
      ],
    },
    {
      id: 'm01-l04',
      title: 'Workflow: speed, safety and the clean board',
      summary: 'Raw/ready-to-eat separation, board discipline and building real speed the honest way.',
      theory: [
        {
          heading: 'Board discipline',
          body: 'Keep two boards or two board-states: one for raw protein, one for everything ready to eat. Between them, always a wash. Cloths that touch raw protein go straight to the laundry pile, not back on the bench. This is the first food-safety habit of the course, and it costs nothing once it is automatic.\n\nWaste flows continuously into the waste bowl, and the waste bowl gets triaged: trim for the stock bag, genuine waste to the bin. From Module 4 you will feed every stock from these bags.',
        },
        {
          heading: 'Speed is an outcome, not a goal',
          body: 'Professional speed comes from three things, in order: no wasted movement (mise en place), no hesitation (the cut is decided before the knife moves), and only then, faster strokes. Chasing stroke-speed first is how fingertips get shortened. Build accuracy at a metronome pace and let the pace rise on its own — it will.',
        },
      ],
      demonstrations: [
        {
          title: 'The between-task reset',
          steps: [
            'Scrape the board into the waste bowl with the spine of the knife (never the edge).',
            'Triage the bowl: stock bag or bin.',
            'Wipe the board with the damp cloth; flip or wash if changing food category.',
            'Wipe the blade, reposition the knife at the top of the board.',
            'Ten seconds, total. Do it every time.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The full prep run',
          instructions: 'Prep the complete mise en place for the minestrone (r-m01-02) as one timed run: every vegetable cut, containers lined up, board reset between each item. Note your time, then cook it. Repeat the same prep next week and compare times — same accuracy, less hesitation.',
        },
      ],
      recipeIds: ['r-m01-03', 'r-m01-04'],
      techniqueIds: ['t-mise-en-place', 't-knife-grip'],
      troubleshooting: [
        {
          problem: 'Everything takes forever and the kitchen ends up chaotic anyway',
          cause: 'Prepping and cooking are still interleaved, and the board never gets reset.',
          fix: 'Hard rule for the rest of Stage 1: the knife goes to the top of the board before any pan is touched, and the board is reset before any new ingredient lands on it.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Gripping the handle like a hammer',
      cause: 'Instinct — it feels more secure.',
      fix: 'Pinch the blade. Control comes from being over the balance point, not from squeezing harder.',
    },
    {
      problem: 'Cutting rounded vegetables without squaring them',
      cause: 'Skipping the stabilising cut to save food.',
      fix: 'A rolling vegetable is the most common cause of kitchen cuts. Take the thin slice; put it in the stock bag.',
    },
    {
      problem: 'Sharpening rarely, honing never',
      cause: 'Sharpening feels like a project instead of maintenance.',
      fix: 'Steel for ten seconds every session, stone once a month. Put the stone somewhere visible.',
    },
    {
      problem: 'Prep bowls everywhere, none labelled, order unknown',
      cause: 'Mise en place done as decoration rather than sequence.',
      fix: 'Containers go in order of use, left to right. If you cannot say what is next without looking at the recipe, the mise is not done.',
    },
  ],
  assessment: {
    id: 'as-m01',
    moduleId: 'm01',
    title: 'The Cut Card & Timed Mise',
    brief:
      'In a single 45-minute session: (1) hone your knife and demonstrate one full sharpening pass; (2) produce a cut card — 2 tbsp each of julienne, brunoise, small dice, medium dice, chiffonade and minced garlic, photographed on one board; (3) complete the full mise en place for the minestrone (r-m01-02) with containers in order of use, board reset between items. Photograph the cut card and the finished mise.',
    rubric: [
      { criterion: 'Cut consistency', maxScore: 10, guidance: '9–10: every pile uniform within ±1 mm. 6–8: minor variation. Below 6: mixed sizes visible at a glance.' },
      { criterion: 'Knife handling & safety', maxScore: 10, guidance: 'Pinch grip and claw throughout; blade never lifts above knuckle height; board stable and anchored.' },
      { criterion: 'Mise en place order & completeness', maxScore: 10, guidance: 'Every recipe item prepped, weighed, containered, sequenced left to right; nothing missing, nothing extra.' },
      { criterion: 'Board discipline & waste triage', maxScore: 5, guidance: 'Reset between items; trim triaged to a stock bag; clean finish.' },
      { criterion: 'Time', maxScore: 5, guidance: '5: everything inside 45 min at full accuracy. 3: under an hour. Accuracy is never traded for time.' },
    ],
    passScore: 28,
    evidence: 'Two photos: the cut card grid, and the complete lined-up mise en place.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Both knife-drill exercises done at least twice across separate sessions',
    'All four module recipes cooked',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module01Recipes: Recipe[] = [
  {
    id: 'r-m01-01',
    title: 'Soffritto, Big-Batch',
    moduleId: 'm01',
    description:
      'The Italian flavour base — onion, carrot, celery, cooked slow in olive oil — made in volume. Pure knife practice with a freezer payoff: cubes of ready soffritto for the soups, sauces and braises of the next ten modules.',
    difficulty: 1,
    serves: 12,
    timeMins: 60,
    techniqueIds: ['t-dice', 't-brunoise', 't-mise-en-place', 't-sauteing'],
    ingredients: [
      { item: 'Brown onions', qty: 600, unit: 'g', prep: 'small dice (6 mm)' },
      { item: 'Carrots', qty: 300, unit: 'g', prep: 'small dice' },
      { item: 'Celery', qty: 300, unit: 'g', prep: 'small dice' },
      { item: 'Olive oil', qty: 120, unit: 'ml' },
      { item: 'Fine salt', qty: 6, unit: 'g' },
    ],
    method: [
      'Full mise first: dice everything before the pan goes on. This is the drill — aim for even 6 mm dice across all three vegetables, checking your planks as you go.',
      'Warm the oil in a wide heavy pan over medium-low. Add the vegetables and the salt together; the salt draws moisture and stops browning too fast.',
      'Cook gently 25–35 minutes, stirring every few minutes. The target is soft, sweet, translucent and lightly golden — not fried.',
      'Taste. It should be quietly sweet with no raw-onion bite. Cool completely.',
      'Portion into an ice-cube tray or small containers and freeze. Label and date — your first FIFO habit.',
    ],
    chefNotes: [
      'Classic ratio is 2:1:1 onion:carrot:celery by weight. Learn it — you will use it for the rest of your life.',
      'Batch cuts honestly: if your dice drifts, stop and recheck plank thickness rather than pushing on.',
    ],
    reinforces: ['Small dice at volume', 'Salting early', 'Label-and-date storage'],
  },
  {
    id: 'r-m01-02',
    title: 'Knife-Cut Minestrone',
    moduleId: 'm01',
    description:
      'A minestrone where every vegetable shows your knife work — uniform dice cooking evenly in one pot is the whole point. Uses your frozen soffritto and produces lunches for days.',
    difficulty: 1,
    serves: 6,
    timeMins: 75,
    techniqueIds: ['t-dice', 't-mise-en-place', 't-seasoning-salt', 't-tasting'],
    ingredients: [
      { item: 'Soffritto (from r-m01-01)', qty: 200, unit: 'g' },
      { item: 'Olive oil', qty: 30, unit: 'ml' },
      { item: 'Garlic', qty: 3, unit: 'each', prep: 'minced' },
      { item: 'Potato', qty: 250, unit: 'g', prep: 'medium dice (12 mm)' },
      { item: 'Zucchini', qty: 200, unit: 'g', prep: 'medium dice' },
      { item: 'Green beans', qty: 150, unit: 'g', prep: 'cut to 2 cm' },
      { item: 'Tinned whole tomatoes', qty: 400, unit: 'g', prep: 'crushed by hand' },
      { item: 'Cooked cannellini beans', qty: 400, unit: 'g', prep: 'drained' },
      { item: 'Water or stock', qty: 1.5, unit: 'L' },
      { item: 'Small pasta (ditalini)', qty: 120, unit: 'g' },
      { item: 'Parmesan rind', qty: 1, unit: 'each' },
      { item: 'Flat-leaf parsley', qty: 15, unit: 'g', prep: 'chopped' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Complete the entire mise en place first — this recipe is the Module 1 assessment prep run. Containers in order of use.',
      'Sweat the soffritto in oil over medium heat 3–4 minutes; add garlic for the last minute.',
      'Add potato, tomatoes, water/stock and the parmesan rind. Season with a three-finger pinch of salt. Simmer 10 minutes.',
      'Add zucchini and green beans; simmer until the potato is just tender, about 10 more minutes.',
      'Add the pasta and cannellini; cook until the pasta is al dente.',
      'Remove the rind. Taste in stages: salt first, then ask whether it needs brightness — a few drops of good vinegar if flat.',
      'Finish with parsley and olive oil. Every spoonful should carry evenly-sized, evenly-cooked vegetables — that is the test.',
    ],
    chefNotes: [
      'If some dice are cooked and others crunchy, the cutting was uneven — useful feedback, not failure.',
      'Minestrone is a template: swap vegetables by season, keep the method.',
    ],
    reinforces: ['Medium dice', 'Mise en place under mild time pressure', 'Layered salting and tasting'],
  },
  {
    id: 'r-m01-03',
    title: 'Crunchy Julienne Salad, Lime & Peanut',
    moduleId: 'm01',
    description:
      'A Southeast-Asian-style salad that is nothing but julienne — carrot, cucumber, capsicum — under a bright lime dressing. Raw cuts have nowhere to hide.',
    difficulty: 1,
    serves: 4,
    timeMins: 30,
    techniqueIds: ['t-julienne', 't-chiffonade', 't-vinaigrette', 't-acid-balance'],
    ingredients: [
      { item: 'Carrots', qty: 250, unit: 'g', prep: 'fine julienne' },
      { item: 'Cucumber', qty: 250, unit: 'g', prep: 'seeded, julienne' },
      { item: 'Red capsicum', qty: 1, unit: 'each', prep: 'julienne' },
      { item: 'Red onion', qty: 0.5, unit: 'each', prep: 'shaved thin' },
      { item: 'Mint + coriander leaves', qty: 20, unit: 'g', prep: 'mint chiffonade, coriander picked' },
      { item: 'Roasted peanuts', qty: 60, unit: 'g', prep: 'roughly crushed' },
      { item: 'Lime juice', qty: 60, unit: 'ml' },
      { item: 'Fish sauce', qty: 30, unit: 'ml' },
      { item: 'Caster sugar', qty: 20, unit: 'g' },
      { item: 'Red chilli', qty: 1, unit: 'each', prep: 'finely minced' },
    ],
    method: [
      'Whisk lime juice, fish sauce, sugar and chilli until the sugar dissolves. Taste: it should hit sour, then salty, then sweet, then heat — adjust one axis at a time.',
      'Julienne the vegetables: 2 mm sticks, 5 cm long. Match-stick uniformity is the exercise; a ruler on the first few is allowed.',
      'Toss vegetables with half the dressing; taste a strand and decide if it needs more.',
      'Fold through the herbs, plate in a loose tall pile, scatter peanuts, spoon a little dressing around.',
    ],
    chefNotes: [
      'This dressing is the course’s first lesson in four-way balance — you will meet the same logic again in Module 2 and Module 13.',
      'Dress just before serving; salt and acid start wilting julienne within minutes.',
    ],
    reinforces: ['Fine julienne', 'Chiffonade', 'Balancing sour/salt/sweet/heat'],
  },
  {
    id: 'r-m01-04',
    title: 'Pico de Gallo & Guacamole',
    moduleId: 'm01',
    description:
      'Two table salsas that are pure knife discipline: an even, small-diced pico and a coarse, controlled guacamole. Great party food; better dice practice.',
    difficulty: 1,
    serves: 6,
    timeMins: 25,
    techniqueIds: ['t-dice', 't-mince', 't-acid-balance', 't-tasting'],
    ingredients: [
      { item: 'Firm ripe tomatoes', qty: 400, unit: 'g', prep: 'seeded, small dice' },
      { item: 'White or red onion', qty: 100, unit: 'g', prep: 'fine dice, rinsed' },
      { item: 'Jalapeño or long green chilli', qty: 1, unit: 'each', prep: 'finely minced' },
      { item: 'Coriander', qty: 15, unit: 'g', prep: 'chopped' },
      { item: 'Limes', qty: 2, unit: 'each' },
      { item: 'Ripe avocados', qty: 3, unit: 'each' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Pico: combine tomato, onion, chilli, coriander, juice of one lime and a good pinch of salt. Rest 10 minutes, then taste and adjust — salt sharpens the tomato, lime lifts it.',
      'Guacamole: halve the avocados and dice the flesh in the skin, then scoop. Fold with lime, salt and two spoonfuls of the pico. Coarse and chunky — a purée is a different (lesser) dish.',
      'Taste both against a corn chip, not a spoon — season for the vehicle they will ride on.',
    ],
    chefNotes: [
      'Seeding the tomatoes keeps the pico from going watery — the seeds and jelly go in the stock bag? No: tomato seeds are bitter in stock; this one really is for the bin or a vinaigrette.',
      'Rinsing diced onion under cold water tames its bite without losing crunch.',
    ],
    reinforces: ['Small dice', 'Fine mince', 'Seasoning against the serving context'],
  },
]
