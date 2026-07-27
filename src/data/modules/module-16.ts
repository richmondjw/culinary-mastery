import type { CourseModule, Recipe } from '../../types/content'

export const module16: CourseModule = {
  id: 'm16',
  number: 16,
  stage: 4,
  title: 'Food Safety & Kitchen Operations',
  subtitle: 'Cook like the inspector is watching',
  description:
    'Stage 4 turns a good cook into a reliable operation. This module installs the safety and workflow systems professional kitchens run on — HACCP thinking, temperature discipline, cross-contamination control, rapid cooling, label-and-date, cleaning schedules and station flow — scaled honestly to one cook. The dishes are chosen because they are the classic danger cases: big braises, raw chicken, cooked rice and cook-chill meal prep.',
  objectives: [
    'Apply HACCP thinking to any recipe: identify hazards, name the critical control points, set limits and verify them',
    'Keep food out of the 5–60°C danger zone, and log it when it must pass through',
    'Cool cooked food to the 2-hour/4-hour standard (60→21°C in 2 hours, 21→5°C in 4 hours) and reheat safely to 75°C',
    'Run raw/ready-to-eat separation, label-and-date and FIFO as automatic habits',
    'Build a one-cook station plan, prep list and cleaning schedule for a multi-dish service',
  ],
  difficulty: 2,
  estimatedHours: 8,
  prerequisites: ['m15'],
  skillsUnlocked: [
    'HACCP thinking for a home kitchen',
    'Cooling & reheating discipline',
    'Raw/ready-to-eat separation',
    'Label-and-date & cleaning schedules',
    'One-cook station planning',
  ],
  equipment: [
    'Digital probe thermometer (fast-read)',
    'Fridge/freezer thermometer',
    'Shallow metal trays or containers for rapid cooling',
    'Masking tape and a marker (labels), or printed labels',
    'Two cutting boards (or a strict two-state system)',
    'Airtight containers in several sizes',
    'Heavy casserole or Dutch oven',
    'Sanitiser spray or diluted bleach solution',
  ],
  ingredients: [
    '2 kg beef chuck or shin (braise batch)',
    '1.6 kg whole chicken or 1 kg thigh fillets',
    'Jasmine or long-grain rice (1 kg)',
    'Mirepoix vegetables: onions, carrots, celery',
    'Tinned tomatoes, stock, red wine',
    'Broccoli, green beans, sweet potato (meal-prep vegetables)',
  ],
  lessons: [
    {
      id: 'm16-l01',
      title: 'HACCP thinking for one cook',
      summary: 'The professional food-safety framework, stripped to what a single cook actually controls: hazards, critical points, limits, checks.',
      theory: [
        {
          heading: 'Hazards and critical control points',
          body: 'HACCP — Hazard Analysis and Critical Control Points — is not paperwork theatre. It is a way of reading a recipe: where can this food become unsafe, and at which exact steps do I control that? For a braise, the critical control points are three: cook (core above 75°C kills vegetative pathogens), cool (through the danger zone fast) and reheat (back to 75°C, once only).\n\nEach CCP gets a limit and a check. The limit is a number — 75°C core, 2 hours to 21°C — and the check is how you verify it: a probe thermometer, a timer, a note. If you cannot name the number and the check, you are hoping, not controlling. One cook can run this in their head plus a probe; a brigade needs the paperwork.',
        },
        {
          heading: 'The danger zone: 5–60°C',
          body: 'Bacteria that cause food poisoning multiply fastest between 5°C and 60°C, doubling as often as every 20 minutes at body temperature. The Australian standard is the 2-hour/4-hour rule for ready-to-eat food held in that zone: under 2 hours cumulative, refrigerate or use; 2–4 hours, use immediately; over 4 hours, bin it. Cumulative means the clock never resets — time on the bench this morning counts against time on the bench tonight.\n\nYour fridge must run at 5°C or below (check it — most home fridges drift to 7–8°C when overloaded) and your freezer at −15°C or below, ideally −18°C. Hot holding means 60°C or above. Everything in this module is an application of those four numbers: 5, 60, 75, and the 2-hour/4-hour clock.',
        },
      ],
      demonstrations: [
        {
          title: 'HACCP walkthrough of a braise',
          steps: [
            'Read the braise recipe (r-m16-01) end to end and list every step from shopping to leftovers.',
            'Mark the hazards: raw beef juices at prep, the cook itself, the cool-down, storage, and the reheat.',
            'Name the CCPs: cook to a genuine simmer for hours (comfortably past 75°C); cool 60→21°C within 2 h and 21→5°C within 4 h; reheat to 75°C core.',
            'Assign a check to each: probe the pot before it comes off the heat; set timers at the start of cooling; probe the centre on reheat.',
            'Write the three numbers on the container label along with contents and date.',
            'File the mental model: every recipe for the rest of the course gets this 60-second read.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Fridge audit',
          instructions: 'Put a thermometer in the middle shelf of your fridge for 30 minutes and record the temperature. Then map the fridge: raw meats lowest, ready-to-eat above, nothing warm going in uncovered, nothing unlabelled. Move what fails. Photograph before and after.',
          repeatPractice: 'Repeat the audit at the start of Modules 17 and 19. The capstone prep plan assumes a fridge you can trust at 5°C or below.',
        },
      ],
      recipeIds: ['r-m16-01'],
      techniqueIds: ['t-haccp'],
      troubleshooting: [
        {
          problem: 'The fridge reads 8°C no matter the dial setting',
          cause: 'Overloading blocks airflow, or the door seal leaks — the compressor cannot keep up.',
          fix: 'Clear space around the vents, check the seal with a sheet of paper (it should grip), and re-test overnight. If it still fails, cool food in the coldest zone (bottom back) and shorten storage times by a day.',
        },
      ],
    },
    {
      id: 'm16-l02',
      title: 'Raw handling & cross-contamination',
      summary: 'Raw chicken is the sharpest teacher in the kitchen: board discipline, hand washing, and a workflow where raw never touches ready-to-eat.',
      theory: [
        {
          heading: 'Separation is a workflow, not a warning',
          body: 'Campylobacter and Salmonella live on a meaningful share of raw chicken — Australian surveys have found Campylobacter on most retail birds. The control is not fear; it is sequence. Raw protein is handled last in prep, on its own board, with its own tongs, and everything it touched — board, knife, hands, tap handle — is washed before anything ready-to-eat is handled again.\n\nNever wash raw chicken. Rinsing aerosolises bacteria up to 80 cm around the sink onto benches, cloths and clean dishes; cooking to 75°C kills everything washing was hoping to remove. Pat dry with paper towel that goes straight to the bin, and treat the wrapping and its drip as contaminated too.',
        },
        {
          heading: 'The two-board system and the 20-second wash',
          body: 'Run two boards or two board-states: one for raw protein, one for everything else, with a full hot-soapy wash between states. Cloths that touch raw protein leave the bench immediately — a contaminated cloth is a contamination sprayer. Sanitiser finishes what washing starts: detergent removes, sanitiser kills, in that order.\n\nHand washing is 20 seconds with soap, then dried on paper or a clean towel — a damp shared towel undoes the wash. The professional habit worth stealing: wash hands at every category change (raw → anything else), not just when they look dirty. In this lesson’s chicken recipe the workflow is written into the method steps; follow it literally the first time.',
        },
      ],
      demonstrations: [
        {
          title: 'Raw-chicken workflow, start to finish',
          steps: [
            'Prep everything else first: vegetables cut, sauce ingredients measured, pan and tools staged.',
            'Set the raw zone: dedicated board at one end of the bench, waste bowl beside it, tongs ready.',
            'Unwrap the chicken over the board; the wrapper goes straight into the bin, not onto the bench.',
            'Trim and season. Do not wash the bird. Touch only the chicken and the board.',
            'Chicken into the pan with tongs; those tongs are now raw-only until washed.',
            'Wash hands 20 seconds, then wash board, knife and tongs in hot soapy water; sanitise; wipe the tap handle.',
            'Verify doneness by probe: 75°C in the thickest part (or 65°C held for several minutes for breast, if you cook to hold times).',
          ],
        },
      ],
      exercises: [
        {
          title: 'Contamination trace',
          instructions: 'Cook the chicken recipe (r-m16-02) and afterwards write down every surface your hands touched between unwrapping the chicken and washing them. Tap? Fridge handle? Salt jar? Phone? Each item on the list is a contamination path. Re-run the dish next week with a target of three or fewer touches, all washable and washed.',
          repeatPractice: 'Do a mental contamination trace every time you handle raw protein through Modules 17–19. By the capstone it should be zero-thought.',
        },
      ],
      recipeIds: ['r-m16-02'],
      techniqueIds: ['t-haccp', 't-mise-en-place', 't-doneness'],
      troubleshooting: [
        {
          problem: 'Probe says 75°C but juices near the bone still look pink',
          cause: 'Pink near bone can be myoglobin, not undercooking — but it can also mean you probed the wrong spot.',
          fix: 'Probe the thickest part of the thigh away from bone, in two places. If both read 75°C+, the colour is harmless pigment; trust the number, not the hue.',
        },
        {
          problem: 'The whole bench feels contaminated after handling chicken',
          cause: 'Raw handling was interleaved with other prep instead of sequenced last.',
          fix: 'Restructure: all other prep finished and covered before raw protein comes out. One raw window, then one full reset.',
        },
      ],
    },
    {
      id: 'm16-l03',
      title: 'Cooling, reheating & the rice problem',
      summary: 'The 2-hour/4-hour cooling standard, why rice has its own reputation, and label-and-date as the memory of the kitchen.',
      theory: [
        {
          heading: 'Cooling is a race you must win',
          body: 'The Australian cook-chill standard: cooked food must fall from 60°C to 21°C within 2 hours, and from 21°C to 5°C within the next 4 hours. A full 4 L pot of braise left on the stove overnight fails this by six hours or more — the centre can still be 30°C at midnight, a perfect incubator.\n\nWin the race with surface area: decant into shallow trays no more than 5 cm deep, leave uncovered (or loosely covered) in the fridge until cold, stir occasionally, and never stack warm containers. An ice bath around the pot before decanting takes the first 30°C off in minutes. Reheating is once, to 75°C core, and food is never reheated twice — the second trip through the danger zone is the one that bites.',
        },
        {
          heading: 'Rice, and label-and-date',
          body: 'Uncooked rice commonly carries Bacillus cereus spores that survive cooking. In cooked rice left in the danger zone, the spores germinate and produce a toxin that reheating does not destroy — this is why day-old bench rice is the classic fried-rice poisoning. The control is speed: serve rice hot, or spread it on a tray and chill it within an hour, use within 2 days, reheat once to steaming (75°C).\n\nLabel-and-date is the memory that makes all of this work: every container gets contents, date made and use-by. Standard home shelf lives at 5°C: cooked meat dishes 3 days, cooked rice 2 days, stocks 4 days (or boil and re-chill), raw chicken 2 days. If it has no label, it has no history — and food with no history goes in the bin.',
        },
      ],
      demonstrations: [
        {
          title: 'Cooling a 4-litre braise on the clock',
          steps: [
            'When the braise is done, probe and note the temperature (it will be 85–95°C off the heat).',
            'Sit the pot in a sink of cold water and ice for 15 minutes, stirring twice — this typically drops it to about 60°C. Start the 2-hour timer now.',
            'Decant into shallow containers, 5 cm deep maximum, and space them out in the fridge, lids ajar.',
            'Probe at the 2-hour mark: the centre must be at or below 21°C. Stir and re-space if it is lagging.',
            'Probe again within 4 more hours: 5°C or below. Seal the lids, label: contents, date, use-by (+3 days).',
            'To serve: reheat one portion to 75°C core — probe it — and never return reheated food to the batch.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The cooling log',
          instructions: 'Cool the braise (r-m16-01) and the rice for r-m16-03 using the demonstrated method, logging actual temperatures at 0 h, 2 h and 6 h for each. Photograph the log and the labelled containers. If either food misses a checkpoint, write down why (too deep? fridge too full?) and what you will change.',
          repeatPractice: 'Keep a cooling log for every batch-cooked item in Modules 17–19. The capstone waste-and-safety review expects real numbers, not vibes.',
        },
        {
          title: 'Label sweep',
          instructions: 'Label every container currently in your fridge with contents and date (best guess where unknown — and note what that guess cost you). Bin anything you cannot identify or date. Rebuild the fridge with labels as the default.',
        },
      ],
      recipeIds: ['r-m16-01', 'r-m16-03'],
      techniqueIds: ['t-haccp', 't-fifo', 't-absorption'],
      troubleshooting: [
        {
          problem: 'The braise is still 30°C in the centre after 2 hours in the fridge',
          cause: 'Container too deep, lid sealed while warm, or containers stacked — the core is insulated.',
          fix: 'Decant shallower (5 cm max), leave lids ajar until cold, and give containers air space. An ice-bath head start before the fridge makes the deadline easy.',
        },
        {
          problem: 'Reheated rice smells fine but the hold time is unknown',
          cause: 'The rice sat out unlogged — Bacillus cereus toxin has no smell and survives reheating.',
          fix: 'Bin it. Smell detects spoilage bacteria, not toxins. With rice, the label and the clock are the only tests that count.',
        },
      ],
    },
    {
      id: 'm16-l04',
      title: 'Stations, prep lists & the cleaning schedule',
      summary: 'The brigade system scaled to one cook: station geography, a written prep list, service flow and cleaning that happens on schedule, not on guilt.',
      theory: [
        {
          heading: 'A brigade of one',
          body: 'Escoffier’s brigade gave every kitchen job a station: garde manger (cold), entremetier (vegetables), saucier (sauces and proteins), pâtissier (pastry). One cook cannot be four people at once, but you can be them in sequence. Batch all cold work, then all vegetable work, then hot work — instead of ricocheting between them — and each "station" gets a set-up, a run, and a full board reset before the next.\n\nThe prep list is the station plan written down: every task, grouped by station, sequenced by hold time (longest-holding first), with times estimated. A realistic prep list for a three-dish dinner runs 15–25 line items. Writing it takes ten minutes and removes every mid-cook "what now?" — which is where errors, and danger-zone drift, actually happen.',
        },
        {
          heading: 'Clean on schedule, not on mood',
          body: 'Professional kitchens split cleaning into three tiers. As-you-go: board scraped and reset between tasks, spills immediately, tools straight to the sink. Daily close: benches washed then sanitised, sink emptied and cleaned, floors swept, bin out, fridge scan for anything dying. Weekly: fridge shelves wiped, thermometer checked against iced water (it should read 0°C ±1°C), oils and dry stores FIFO’d, one appliance deep-cleaned on rotation.\n\nWrite the daily and weekly lists once and pin them. A schedule you can read beats a standard you have to remember — and in the capstone you will hand the examiner (yourself) exactly this paperwork as evidence.',
        },
      ],
      demonstrations: [
        {
          title: 'Writing a one-cook prep list for the meal-prep set',
          steps: [
            'List every component of r-m16-04 (protein, two vegetables, grain, dressing) and its cook method.',
            'Group into stations: cold/dressings, vegetable prep, hot lines (oven and stovetop), pack-out.',
            'Sequence by hold: what holds longest is made first — dressing, then roast vegetables, then grain, then protein.',
            'Estimate minutes per task and mark the two points where the oven and stovetop run unattended — that is when pack-out labels get written.',
            'Add the safety lines: cooling checkpoints for the grain, fridge space cleared in advance, labels pre-written.',
            'Run the list top to bottom, ticking as you go. Note every task you did out of order — that is next week’s better list.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Timed service flow',
          instructions: 'Execute the full meal-prep set (r-m16-04) from your written prep list, timing each station block. Target: all four components cooked, cooled correctly and packed with labels inside 2.5 hours, with the bench reset between stations.',
          repeatPractice: 'Write a prep list for every multi-component cook from here to the capstone. The capstone prep plan (two days, every task with a station and duration) is this exercise at full scale.',
        },
      ],
      recipeIds: ['r-m16-04'],
      techniqueIds: ['t-mise-en-place', 't-fifo', 't-haccp'],
      troubleshooting: [
        {
          problem: 'The prep list gets abandoned halfway through the cook',
          cause: 'Tasks were listed in recipe order, not station order, so the list fought the workflow.',
          fix: 'Rewrite grouped by station and sequenced by hold time. A good list should feel like it is pulling you forward, not nagging.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Cooling the whole pot in the fridge with the lid on',
      cause: 'The pot looks tidy, but a deep, sealed mass insulates itself — the centre stays in the danger zone for hours.',
      fix: 'Ice-bath first, then shallow containers (5 cm max), lids ajar until cold. Probe at 2 h and 6 h until the habit is proven.',
    },
    {
      problem: 'Washing raw chicken "to be safe"',
      cause: 'An inherited habit that feels hygienic but sprays bacteria up to 80 cm around the sink.',
      fix: 'Never wash poultry. Pat dry, bin the towel, and let 75°C do the killing.',
    },
    {
      problem: 'Trusting look and smell over the probe and the clock',
      cause: 'Spoilage organisms announce themselves; pathogens and toxins mostly do not.',
      fix: 'The probe and the label are the only tests. If the history of a food is unknown, its future is the bin.',
    },
    {
      problem: 'Running safety rules only when cooking for guests',
      cause: 'Treating HACCP as a performance rather than a default.',
      fix: 'The systems only protect you if they run every day. Solo weeknight rice gets the same cooling discipline as the capstone dinner.',
    },
  ],
  assessment: {
    id: 'as-m16',
    moduleId: 'm16',
    title: 'The Safe Kitchen Audit',
    brief:
      'Over one week, run your kitchen to professional standard and document it: (1) cook the braise (r-m16-01) with a completed cooling log hitting 60→21°C in 2 h and 21→5°C in 4 h; (2) cook the chicken dish (r-m16-02) with a written contamination trace of three touches or fewer; (3) execute the meal-prep set (r-m16-04) from a written prep list with every container labelled and dated; (4) photograph your fridge map, thermometer reading and pinned cleaning schedule.',
    rubric: [
      { criterion: 'Cooling log accuracy & compliance', maxScore: 10, guidance: '9–10: real probe readings at each checkpoint, both windows met. 6–8: met with one late reading. Below 6: missed checkpoints or reconstructed numbers.' },
      { criterion: 'Raw-handling & cross-contamination discipline', maxScore: 10, guidance: 'One raw window, dedicated board, full wash-and-sanitise reset, honest contamination trace. No washing of raw poultry.' },
      { criterion: 'Label-and-date & fridge organisation', maxScore: 10, guidance: 'Every container labelled with contents, date and use-by; raw below ready-to-eat; fridge verified at 5°C or below.' },
      { criterion: 'Prep list & station flow', maxScore: 5, guidance: 'Written list grouped by station, sequenced by hold time, actually followed and annotated.' },
      { criterion: 'Cleaning schedule in operation', maxScore: 5, guidance: 'Daily and weekly lists written, pinned and showing a week of ticks — not written the night before.' },
    ],
    passScore: 28,
    evidence:
      'Photos: the completed cooling log, labelled containers in the organised fridge, thermometer reading, the annotated prep list, and the pinned cleaning schedule with a week of ticks.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'All four module recipes cooked with their safety workflows followed and logged',
    'One full week of the cleaning schedule executed with the fridge verified at 5°C or below',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module16Recipes: Recipe[] = [
  {
    id: 'r-m16-01',
    title: 'Big-Batch Beef & Red Wine Braise, Cook-Chill',
    moduleId: 'm16',
    description:
      'A deep, glossy chuck braise made at four-litre scale specifically so you must cool it properly. The dish is Stage 2 technique; the point is the cook-chill discipline — 60→21°C in 2 hours, 21→5°C in 4, labelled, and reheated once to 75°C.',
    difficulty: 2,
    serves: 8,
    timeMins: 240,
    techniqueIds: ['t-braising-meat', 't-searing', 't-haccp', 't-reduction'],
    ingredients: [
      { item: 'Beef chuck or shin', qty: 2, unit: 'kg', prep: 'cut into 5 cm pieces, patted dry' },
      { item: 'Fine salt', qty: 20, unit: 'g' },
      { item: 'Olive oil', qty: 40, unit: 'ml' },
      { item: 'Brown onions', qty: 400, unit: 'g', prep: 'medium dice' },
      { item: 'Carrots', qty: 200, unit: 'g', prep: 'medium dice' },
      { item: 'Celery', qty: 200, unit: 'g', prep: 'medium dice' },
      { item: 'Tomato paste', qty: 50, unit: 'g' },
      { item: 'Red wine', qty: 500, unit: 'ml' },
      { item: 'Beef or chicken stock', qty: 1, unit: 'L' },
      { item: 'Bay leaves', qty: 2, unit: 'each' },
      { item: 'Thyme sprigs', qty: 6, unit: 'each' },
    ],
    method: [
      'Season the beef with the salt (1% of its weight) and sear hard in batches in oil in a heavy casserole until deeply browned. Do not crowd the pan — crowding steams.',
      'Lower the heat, add the mirepoix and cook 8–10 minutes until softening; stir in the tomato paste and cook 2 minutes until brick-red.',
      'Deglaze with the wine, scraping the fond, and reduce by half. Return the beef, add stock to halfway up the meat, plus bay and thyme.',
      'Cover and braise at 150°C for 2.5–3 hours, until a fork twists freely in the meat. This cook step is your first CCP — hours at a simmer is far past 75°C.',
      'Off the heat, probe and note the temperature. Sit the pot in an iced sink for 15 minutes, stirring twice, until it reads about 60°C. Start the clock.',
      'Decant into shallow containers (5 cm deep maximum), lids ajar, spaced out in the fridge. Probe at 2 hours: 21°C or below. Probe within 4 more hours: 5°C or below.',
      'Seal and label every container: "Beef braise / made [date] / use by [+3 days]". Freeze anything you will not eat in 3 days.',
      'To serve: reheat only the portion you need to 75°C core (probe it), loosen with a splash of stock, and season. Never reheat twice; never return reheated braise to the batch.',
    ],
    chefNotes: [
      'The braise genuinely improves overnight — cook-chill is not a compromise here, it is the better version of the dish.',
      'Log your actual cooling temperatures the first three times. Once you have proven your containers and fridge hit the windows, the log can retire; the habit cannot.',
    ],
    reinforces: ['Hard searing and fond management', 'Braising to fork-tender', 'Label-and-date storage'],
  },
  {
    id: 'r-m16-02',
    title: 'Pan-Roasted Chicken Thighs, Lemon & Garlic Pan Sauce',
    moduleId: 'm16',
    description:
      'Crisp-skinned thighs with a four-minute pan sauce — cooked as a raw-handling drill. The workflow is the recipe: one raw window, one board, tongs with a memory, and a probe reading before anything is plated.',
    difficulty: 2,
    serves: 4,
    timeMins: 50,
    techniqueIds: ['t-pan-roasting', 't-pan-sauce', 't-haccp', 't-doneness'],
    ingredients: [
      { item: 'Chicken thighs, skin-on, bone-in', qty: 8, unit: 'each', prep: 'patted dry — never washed' },
      { item: 'Fine salt', qty: 10, unit: 'g' },
      { item: 'Olive oil', qty: 20, unit: 'ml' },
      { item: 'Garlic', qty: 4, unit: 'each', prep: 'sliced' },
      { item: 'Chicken stock', qty: 250, unit: 'ml' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'juiced' },
      { item: 'Cold butter', qty: 40, unit: 'g', prep: 'cubed' },
      { item: 'Flat-leaf parsley', qty: 10, unit: 'g', prep: 'chopped' },
    ],
    method: [
      'Prep everything except the chicken first: garlic sliced, stock measured, butter cubed, oven heating to 190°C, probe and tongs staged. Cover and set aside.',
      'Open the raw window: dedicated board, chicken unwrapped over it, wrapper straight to the bin. Pat dry with paper towel (binned), season both sides with the salt.',
      'Lay the thighs skin-down in a cold oven-proof pan with the oil, then bring to medium heat. Slow-start renders the fat and crisps the skin — about 12 minutes without moving them.',
      'Close the raw window: wash hands for 20 seconds, then wash and sanitise the board, knife and bench, and wipe the tap handle. The tongs stay raw-side until the flip.',
      'Flip the thighs, transfer the pan to the oven and roast 15–18 minutes. Probe the thickest thigh away from bone: 75°C or above. Wash the tongs now — they touched raw surfaces.',
      'Rest the chicken on a rack. Pour off all but a spoonful of fat, sweat the garlic 30 seconds, deglaze with stock, and reduce by two-thirds.',
      'Off the heat, mount the cold butter, add lemon juice and parsley, and season. Add the resting juices.',
      'Plate skin-up with sauce underneath, not over — the crisp skin you rendered stays crisp.',
    ],
    chefNotes: [
      'The cold-pan skin method is slower than a hot sear but renders more fat and never sticks — and it buys you an unhurried raw-window reset while the skin works.',
      'If your probe habit is new, probe two thighs. Two matching numbers build trust in the tool faster than one.',
    ],
    reinforces: ['Pan-roasting and resting', 'Pan sauce from fond', 'Probe-verified doneness'],
  },
  {
    id: 'r-m16-03',
    title: 'Next-Day Chicken Fried Rice, Done Safely',
    moduleId: 'm16',
    description:
      'Proper fried rice demands day-old rice — which makes it the perfect rice-safety drill. The rice is cooked, tray-chilled inside an hour, labelled, held at 5°C, and flash-fried once at full heat.',
    difficulty: 2,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-absorption', 't-sauteing', 't-haccp', 't-fifo'],
    ingredients: [
      { item: 'Jasmine rice', qty: 400, unit: 'g', prep: 'rinsed until water runs clear' },
      { item: 'Water', qty: 600, unit: 'ml' },
      { item: 'Cooked chicken (from r-m16-02 or the braise batch)', qty: 300, unit: 'g', prep: 'shredded, from labelled stock within use-by' },
      { item: 'Eggs', qty: 3, unit: 'each', prep: 'beaten' },
      { item: 'Spring onions', qty: 4, unit: 'each', prep: 'sliced, whites and greens separated' },
      { item: 'Frozen peas', qty: 150, unit: 'g' },
      { item: 'Neutral oil', qty: 45, unit: 'ml' },
      { item: 'Soy sauce', qty: 40, unit: 'ml' },
      { item: 'Sesame oil', qty: 10, unit: 'ml' },
    ],
    method: [
      'Day one: cook the rice by absorption — rice and water to the boil, lid on, lowest heat 12 minutes, rest 10 off the heat.',
      'Spread the hot rice on a tray in a layer no deeper than 3 cm and get it into the fridge within the hour, uncovered until cold. Bacillus cereus is the whole reason this step exists.',
      'Once cold, container, label ("cooked rice / [date] / use by +2 days") and hold at 5°C or below.',
      'Day two: mise en place completely — fried rice allows zero mid-cook chopping. Confirm the rice label is within use-by.',
      'Heat a wok or wide pan until smoking, add half the oil and scramble the eggs hard in 30 seconds; remove.',
      'Remaining oil in, then spring onion whites, then the cold rice. Toss and press against the hot metal for 3–4 minutes until the grains separate and toast.',
      'Add chicken and peas; toss 2 minutes until everything is steaming hot throughout — this is the single reheat, and it must be thorough, not just warmed.',
      'Return the eggs, season with soy and sesame oil, finish with spring onion greens. Serve immediately; fried rice is not a leftover of a leftover — no second chilling.',
    ],
    chefNotes: [
      'Cold, dry, day-old grains fry into distinct toasted kernels; fresh rice steams into clumps. Safety and quality point the same direction here.',
      'This is also a FIFO drill: the chicken must come from a labelled container within its use-by. Unlabelled protein does not get a cameo.',
    ],
    reinforces: ['Absorption-method rice', 'High-heat wok work and batch control', 'Single-reheat discipline'],
  },
  {
    id: 'r-m16-04',
    title: 'Cook-Chill Meal-Prep Set: Roast Chicken, Two Veg & Grains',
    moduleId: 'm16',
    description:
      'Four weekday lunches built as one two-and-a-half-hour production run: roast chicken, roasted sweet potato, blanched greens and dressed grains — cooked from a written prep list, cooled on the clock, packed and labelled like a professional cook-chill line.',
    difficulty: 2,
    serves: 4,
    timeMins: 150,
    techniqueIds: ['t-roasting-veg', 't-blanching', 't-haccp', 't-fifo', 't-vinaigrette'],
    ingredients: [
      { item: 'Chicken thigh fillets', qty: 800, unit: 'g', prep: 'trimmed — handled last, raw window' },
      { item: 'Sweet potato', qty: 800, unit: 'g', prep: 'large dice (20 mm)' },
      { item: 'Broccoli', qty: 400, unit: 'g', prep: 'cut into florets, stem peeled and sliced' },
      { item: 'Green beans', qty: 200, unit: 'g', prep: 'topped' },
      { item: 'Pearl barley or brown rice', qty: 300, unit: 'g', prep: 'rinsed' },
      { item: 'Olive oil', qty: 90, unit: 'ml' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'juiced' },
      { item: 'Dijon mustard', qty: 15, unit: 'g' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Write the prep list first, grouped by station: cold (dressing, labels), oven (sweet potato, then chicken), stovetop (grains, blanching), pack-out. Pre-write four labels with today’s date and a +3-day use-by (+2 days if you used rice).',
      'Cold station: whisk lemon juice, mustard and 60 ml of the oil into a vinaigrette; season. Set aside.',
      'Stovetop: simmer the barley in salted water 30–35 minutes until tender with bite; drain, spread on a tray to steam off and cool.',
      'Oven at 210°C: toss sweet potato with 30 ml oil and salt, roast 30–35 minutes until caramelised at the edges.',
      'Blanch broccoli and beans in 2–3% salted water for 2 minutes, refresh in iced water, drain hard and dry — wet vegetables drown a meal-prep box by day three.',
      'Raw window last: season the chicken, pan-cook or roast at 210°C for 14–16 minutes to 75°C core (probe it), then full wash-and-sanitise reset.',
      'Cool everything with the clock running: nothing goes into a sealed box above 21°C. Shallow trays, fridge, lids ajar; probe the chicken and grains at the 2-hour mark.',
      'Pack four boxes — grains dressed lightly, vegetables and sliced chicken on top, remaining vinaigrette in a corner cup — label, and store FIFO: new boxes behind anything older in the fridge.',
    ],
    chefNotes: [
      'The order of the prep list is the lesson: longest-holding items first, raw protein last, cooling windows respected. If you finish and the bench is chaos, the list was wrong — rewrite it, don’t just cook harder.',
      'Eat the boxes oldest-first across the week and note quality on day three vs day one; that observation calibrates every hold time you will ever write.',
    ],
    reinforces: ['Blanch-and-refresh', 'Roasting vegetables without crowding', 'Prep-list-driven station work'],
  },
]
