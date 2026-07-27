import type { CourseModule, Recipe } from '../../types/content'

export const module03: CourseModule = {
  id: 'm03',
  number: 3,
  stage: 1,
  title: 'Eggs',
  subtitle: 'Protein chemistry you can eat for breakfast',
  description:
    'The egg is the cheapest, fastest feedback loop in cooking: every degree of heat control and every second of timing shows in the result. This module covers the whole family — boiled, poached, fried, scrambled, the French omelette, custard, and mayonnaise as your first emulsion — and underneath them all, the protein science of exactly when eggs set. Master eggs and you have mastered gentle heat.',
  objectives: [
    'Explain the setting temperatures of white and yolk and use them to hit any target texture',
    'Boil eggs to a stated doneness on demand — 6, 8 or 10 minutes, peeled cleanly',
    'Poach eggs with fully set whites and liquid yolks, including holding and reheating for service',
    'Roll a French omelette: pale, tender, small-curded, baveuse at the centre',
    'Cook a crème anglaise to nappe at 82–84°C without scrambling it',
    'Build and rescue a mayonnaise by hand',
  ],
  difficulty: 2,
  estimatedHours: 8,
  prerequisites: ['m02'],
  skillsUnlocked: [
    'Gentle-heat control',
    'Egg doneness by temperature',
    'French omelette technique',
    'Custard to nappe',
    'First emulsions (mayonnaise)',
  ],
  equipment: [
    '20 cm non-stick frying pan (the omelette pan — keep it for eggs)',
    'Probe thermometer',
    'Small heavy saucepan (custard)',
    'Balloon whisk and flexible silicone spatula',
    'Slotted spoon and fine sieve',
    'Digital scales',
    'Mixing bowls and a damp cloth to anchor them',
  ],
  ingredients: [
    'Three dozen of the freshest free-range eggs you can buy (dated cartons)',
    'Unsalted butter (500 g)',
    'Full-cream milk and pouring cream',
    'Neutral oil (grapeseed or light olive) and Dijon mustard',
    'White wine vinegar and lemons',
    'Chives, chervil or parsley, tarragon',
    'Vanilla bean or paste, caster sugar',
    'Natural Greek-style yoghurt and garlic (for çılbır)',
  ],
  lessons: [
    {
      id: 'm03-l01',
      title: 'Egg science and the boiled egg',
      summary: 'What actually happens as an egg heats, degree by degree — and the boiled egg as your first precision instrument.',
      theory: [
        {
          heading: 'Temperatures of set',
          body: 'An egg is two different materials sharing a shell. The white is mostly ovalbumin and ovotransferrin in water: it begins to thicken around 61–63°C, is milky and barely set by 65°C, and fully firm around 80°C. The yolk’s proteins start setting later but finish sooner — thickening from about 65°C, creamy-jammy at 68°C, fudgy at 70°C, and dry-crumbly beyond 75°C.\n\nEvery egg dish is a strategy for exploiting that gap. A poached egg holds the white above its setting point while keeping the yolk below its own. Scrambled eggs are whole-egg proteins taken just past setting with constant agitation. Custard dilutes yolk proteins with dairy, which pushes the setting band up to 75–84°C and widens your margin. Overcooking is always the same event: proteins tightening, squeezing out water — weeping scramble, rubbery white, green-ringed yolk.',
        },
        {
          heading: 'Boiling without guesswork',
          body: 'Start eggs in already-boiling water, not cold — the timing becomes repeatable because the starting point is fixed. Lower fridge-cold eggs in gently, keep the water at a simmer, and count: 6 minutes gives a set white and fully liquid yolk; 8 minutes a jammy, translucent-centred yolk; 10 minutes a just-cooked-through yolk with no chalkiness; 12 minutes is hard-boiled and the edge of the grey-green ring, which is iron and sulphur reacting at the yolk’s surface — a smell and colour of overcooking, not danger.\n\nShock them in iced water the moment the timer sounds. This stops carryover exactly and shrinks the egg from the shell, which — together with using eggs a week or more old, whose higher pH loosens the membrane — is most of the secret to clean peeling. Peel under a trickle of water, starting at the fat end where the air cell is.',
        },
      ],
      demonstrations: [
        {
          title: 'The six-egg doneness ladder',
          steps: [
            'Bring a pot of water to a gentle boil; prepare a large bowl of iced water and a timer.',
            'Lower six fridge-cold eggs in on a slotted spoon and start the clock.',
            'Pull one egg at 5, 6, 7, 8, 10 and 12 minutes, straight into the ice.',
            'Peel all six, halve them, and line them up in order on a board.',
            'Photograph the ladder, then taste along it, matching what you see to the temperatures in the theory.',
            'Choose your personal "default egg" and write down its number.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Call your shot',
          instructions: 'Three days running, announce a target before cooking — "8-minute jammy" — then boil two eggs and halve them. Score yourself honestly against the photo ladder. You pass when the halved egg matches the called shot three days straight.',
          repeatPractice: 'Eggs reappear as garnish through the course — on soups in Module 4, salads and grain bowls later. Every one is a called shot: name the doneness before the egg hits the water.',
        },
      ],
      recipeIds: ['r-m03-01'],
      techniqueIds: ['t-mise-en-place', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Shells tear the white when peeling',
          cause: 'Very fresh eggs (membrane welded to the white) and no ice shock.',
          fix: 'Use eggs at least a week old for boiling, shock hard in iced water, and peel under running water from the fat end. Save the freshest eggs for poaching, where freshness helps instead of hurting.',
        },
        {
          problem: 'Grey-green ring around the yolk',
          cause: 'Overcooking — iron in the yolk meeting sulphur from the white at high heat.',
          fix: 'Cut the time to 10–11 minutes maximum and ice immediately. The ring is a timer error made visible.',
        },
      ],
    },
    {
      id: 'm03-l02',
      title: 'Poached and fried',
      summary: 'The two service eggs: poaching in trembling water, and frying with a chosen personality — crisp-edged or quietly set.',
      theory: [
        {
          heading: 'Poaching is water control',
          body: 'A poached egg is naked protein in hot water, so the water does all the cooking and most of the damage. The target is 90–95°C — a shiver, with bubbles forming on the pot base but not rolling. A true boil shreds the white; too cool and the egg sinks and splats before it sets.\n\nFreshness matters more here than anywhere: a fresh egg’s thick white clings to the yolk, while an old egg trails ragged streamers. Crack each egg into a small cup, and strain off the watery thin white in a slotted spoon — that thin white is what becomes the wispy mess. A teaspoon of vinegar per litre speeds surface setting slightly; the swirling vortex is theatre for one egg and chaos for four. Three minutes gives a set white and liquid yolk. For service, poach ahead, hold in iced water up to two days, and reheat 30–45 seconds in 80°C water — the professional method, and the reason cafés can serve fifty.',
        },
        {
          heading: 'Frying is fat control',
          body: 'A fried egg has two legitimate personalities, and you should be able to order either from yourself. Crisp and lacy: 2–3 mm of hot oil or foaming butter in a hot pan, the white blistering and browning at the edges, spooning fat over the yolk to film it — 90 seconds, Spanish style. Tender and pale: butter over low heat, the egg set gently with no colour at all, 2–3 minutes, lid on for the last 30 seconds if you want the yolk filmed.\n\nEither way, season at the end — salt striking a bare yolk early leaves pale spots where it dissolves — and crack the egg into a cup first, always, so a broken yolk or a shell shard never lands in the pan. The pan tells you which egg you are getting before the egg does: listen for a confident sizzle for crisp, near-silence for tender.',
        },
      ],
      demonstrations: [
        {
          title: 'Four poached eggs, restaurant method',
          steps: [
            'Bring 2 litres of water to 92°C with a tablespoon of vinegar; verify with the probe and adjust the flame until it holds steady.',
            'Crack four fresh eggs into four cups, straining each through a slotted spoon to drop the thin white.',
            'Slide the eggs in one at a time from cup level — not dropped — at four points around the pot.',
            'Poach 3 minutes; the whites should be opaque and the yolks soft to a gentle prod.',
            'Lift into iced water. Trim any wisps with scissors for a neat teardrop.',
            'To serve: reheat 30–45 seconds in 80°C water, drain on a cloth, season on the plate.',
          ],
        },
        {
          title: 'One egg, two personalities',
          steps: [
            'Heat 30 ml of oil in a small pan until it shimmers; crack in an egg from a cup and fry hard, basting the yolk, until the edges are brown lace — about 90 seconds. Plate it.',
            'Wipe the pan, melt 15 g of butter over low heat until it barely foams.',
            'Add a second egg and cook 2–3 minutes with no colour, lid on for the final 30 seconds.',
            'Season both at the end with flaky salt and taste them side by side against the same slice of toast.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The dozen-egg poaching session',
          instructions: 'Poach twelve eggs in three rounds of four, holding each round in iced water. Reheat the best four and plate them. Track your count: how many of twelve are servable teardrops with liquid yolks? Eight or better passes; repeat the session next week aiming for ten.',
          repeatPractice: 'A held-and-reheated poached egg tops dishes throughout the course — brothy soups in Module 4, vegetables and grains later. Poach ahead every time; the hold-and-reheat is the skill being drilled.',
        },
      ],
      recipeIds: ['r-m03-02'],
      techniqueIds: ['t-poaching-eggs', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Poached whites shred into wisps',
          cause: 'Water boiling instead of shivering, stale eggs, or the thin white left unstrained.',
          fix: 'Hold 90–95°C on the probe, buy the freshest eggs for poaching, and strain each egg in a slotted spoon before it goes in.',
        },
        {
          problem: 'Fried egg white is rubbery with a raw patch near the yolk',
          cause: 'Pan too hot: the base overcooked before the thick white near the yolk received any heat.',
          fix: 'Lower the heat, or add a teaspoon of water and a lid for the last 30 seconds to steam the top set.',
        },
      ],
    },
    {
      id: 'm03-l03',
      title: 'Scrambled eggs and the French omelette',
      summary: 'Curd size as a decision, and the three-minute examination of pan control that is the rolled omelette.',
      theory: [
        {
          heading: 'Scrambled: curd size is heat times patience',
          body: 'Scrambled eggs are a spectrum defined by heat and agitation. Big soft folds: medium heat, minimal stirring, 90 seconds — diner style. Small creamy curds: low heat and constant slow stirring, 4–6 minutes, French style, finished with a knob of cold butter or a splash of cream that stops the cooking dead. The eggs must leave the pan looking slightly underdone; carryover finishes them on the plate, and "perfect in the pan" means overcooked in the mouth.\n\nWeeping — watery liquid pooling under the eggs — is protein overcontraction wringing water out, the scrambled-egg version of the grey yolk ring. It means the heat was too high or the eggs stayed on it too long. Salt the beaten eggs 10 minutes before cooking if you can: it changes how the proteins bond and keeps the curd tender.',
        },
        {
          heading: 'The omelette: an exam you can retake daily',
          body: 'The French omelette is scrambled eggs interrupted and organised: pale gold outside, no browning, small-curded and baveuse — creamy, barely set — within, rolled seam-down into a plump cigar. It uses three eggs, a 20 cm non-stick pan, and about three minutes, which is why chefs use it to test job applicants: nowhere to hide, nothing to blame.\n\nThe sequence is fixed. Butter foaming but not browning, eggs in, then constant fast stirring with a silicone spatula while shaking the pan — you are making tiny curds and preventing any of them sticking. When the eggs are two-thirds set but still wet on top, stop stirring completely and let the base knit for 10–15 seconds. Then tilt the pan, roll the far edge back over the middle, and turn the omelette out onto the plate seam-down, shaping it with a cloth. Residual heat finishes the centre during the walk to the table.',
        },
      ],
      demonstrations: [
        {
          title: 'Rolling the omelette',
          steps: [
            'Beat three eggs with a pinch of fine salt until fully blended, no streaks of white.',
            'Melt 15 g of butter in a 20 cm non-stick pan over medium heat until it foams; it must not brown.',
            'Pour in the eggs and stir fast and continuously with a silicone spatula, shaking the pan, for 60–90 seconds — small curds, no colour.',
            'At two-thirds set, stop. Smooth the top and let the base set 10–15 seconds undisturbed.',
            'Scatter a teaspoon of chopped fine herbs down the centre if using.',
            'Tilt the pan away from you, fold the far edge over the centre with the spatula, then roll the omelette out onto the plate seam-down.',
            'Shape gently with a clean cloth into a neat cigar; gloss with a trace of butter.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Thirty omelettes',
          instructions: 'Commit to one omelette per day for thirty days — eggs are cheap tuition. Photograph each beside its predecessor. Judge on four points: no browning, closed seam, even cigar shape, baveuse centre when cut. Expect the first week to be rough and week four to look professional.',
          repeatPractice: 'The stir-then-set-then-roll motor pattern returns in crêpes and in every delicate pan dish later in the course. When your omelettes plateau, switch hands for a week — it rebuilds attention.',
        },
        {
          title: 'Curd-size ladder',
          instructions: 'Scramble two eggs three ways in one sitting: big folds on medium heat, small curds on low, and ultra-fine cream-finished curds on the lowest flame. Serve all three on one plate and note the differences in texture and — critically — in how fast each one overcooks.',
        },
      ],
      recipeIds: ['r-m03-03'],
      techniqueIds: ['t-french-omelette', 't-chiffonade', 't-mince'],
      troubleshooting: [
        {
          problem: 'Omelette browns before it sets',
          cause: 'Pan too hot — the base is frying while the top is still raw.',
          fix: 'Medium heat, and watch the butter: foaming is right, browning means the pan is already too hot. Pull the pan off the flame while you stir if needed.',
        },
        {
          problem: 'Scrambled eggs weep liquid on the plate',
          cause: 'Overcooked — the proteins contracted and squeezed water out.',
          fix: 'Take the eggs off while they still look glossy and slightly loose, and kill the heat with cold butter or cream. Carryover does the rest.',
        },
      ],
    },
    {
      id: 'm03-l04',
      title: 'Custard and the first emulsion',
      summary: 'Crème anglaise — yolks thickening dairy at 82–84°C — and mayonnaise, where a single yolk holds a cup of oil.',
      theory: [
        {
          heading: 'Custard: the 75–84°C window',
          body: 'Dilute yolks with milk and cream and their proteins can no longer find each other easily: setting shifts up to roughly 75–84°C and happens gradually, giving you a wide, forgiving window compared with a naked egg. Crème anglaise — yolks, sugar, milk and cream, stirred over gentle heat — is cooked to 82–84°C, the nappe stage, where it coats the back of a spoon and holds a clean line when you draw a finger through. At 85°C and beyond the proteins curdle and the sauce turns to sweet scrambled egg.\n\nThe protective moves: temper the yolks by whisking the hot dairy in gradually before returning everything to the pan; stir constantly in a figure-eight so no spot overheats; and strain immediately into a cold container, because carryover in a hot pan will finish what the flame started. Sugar whisked with the yolks first also raises their setting point — a buffer you get for free. Baked custards use the same chemistry in the oven, insulated by a water bath and pulled while the centre still wobbles.',
        },
        {
          heading: 'Mayonnaise: fat persuaded into water',
          body: 'Mayonnaise is your first emulsion: oil droplets dispersed through the water phase of a yolk, each droplet coated by lecithin so they cannot re-merge. One yolk can hold about 250 ml of oil — the constraint is never the yolk, it is your patience at the start. Everything at room temperature; whisk the yolk with mustard (a second emulsifier and an insurance policy), salt and a little acid first; then oil literally drop by drop until the mixture visibly thickens and tightens. Only then move to a thin stream.\n\nA split mayonnaise — thin, greasy, curdled-looking — is droplets that merged because oil arrived faster than the emulsion could coat it. The rescue is always the same: start again with a fresh yolk (or a teaspoon of water) in a clean bowl, and whisk the broken batch in gradually as if it were the oil. This exact logic — droplets, emulsifier, patience, rescue-by-restart — is hollandaise and beurre blanc in Module 5 with heat added. Learn it cold first.',
        },
      ],
      demonstrations: [
        {
          title: 'Crème anglaise to nappe',
          steps: [
            'Whisk 4 yolks with 60 g of caster sugar in a bowl until slightly pale.',
            'Heat 250 ml milk and 250 ml cream with a split vanilla bean to a bare simmer; rest 5 minutes off the heat.',
            'Temper: pour the hot dairy onto the yolks in a thin stream, whisking constantly.',
            'Return to the pan over low heat, stirring in a figure-eight with a spatula, probe in the pot.',
            'Cook to 82–84°C — the custard coats the spatula and a finger-line holds. This takes 4–6 minutes; do not walk away.',
            'Strain immediately through a fine sieve into a bowl set over ice; stir until warm, then chill.',
          ],
        },
        {
          title: 'Hand-whisked mayonnaise, and a deliberate split',
          steps: [
            'Anchor a bowl on a damp cloth. Whisk 1 room-temperature yolk with 5 g Dijon, 5 ml vinegar and a pinch of salt.',
            'Add 200 ml of neutral oil drop by drop, whisking constantly, until the mixture thickens and stiffens — about the first 50 ml is the danger zone.',
            'Continue in a thin stream to a thick, glossy mayonnaise. Season with lemon and salt; loosen with a teaspoon of warm water if it is greasy-stiff.',
            'Now break a spoonful on purpose: put it in a clean bowl and beat in 30 ml of oil all at once. Watch it split thin and shiny.',
            'Rescue it: whisk a teaspoon of water in a third bowl, then whisk the split batch in gradually until it re-thickens.',
            'Taste rescued against original — identical. Splitting is now boring, not frightening.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Anglaise by feel',
          instructions: 'Make crème anglaise twice in one week. First time: probe in the pot, noting what nappe looks and feels like at 83°C. Second time: cook by eye and spatula alone, then check with the probe at the moment you would have pulled it. Within 2°C of target is a pass.',
          repeatPractice: 'This is the same judgement you will use for hollandaise in Module 5 and pastry cream in the pastry module — heat-sensitive yolk sauces are one skill wearing three hats. Re-verify yourself with the probe the first time in each new sauce.',
        },
      ],
      recipeIds: ['r-m03-04', 'r-m03-01'],
      techniqueIds: ['t-custard', 't-mayonnaise', 't-emulsification'],
      troubleshooting: [
        {
          problem: 'Anglaise has tiny lumps and smells eggy',
          cause: 'It passed 85°C — the yolk proteins curdled.',
          fix: 'Strain immediately and blitz with a stick blender; mildly grainy custard is recoverable. Next time cook to 82–84°C with the probe in the pot and strain over ice at once.',
        },
        {
          problem: 'Mayonnaise refuses to thicken from the start',
          cause: 'Oil added too fast before any emulsion formed, or cold ingredients.',
          fix: 'Everything at room temperature, and treat the first 50 ml of oil as drop-by-drop territory. If it never catches, restart with a fresh yolk and whisk the failed mixture in as the oil.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Cooking every egg dish over the same high heat',
      cause: 'The stove’s default setting, and impatience.',
      fix: 'Eggs set between 61°C and 84°C. Almost every egg failure is heat arriving faster than the protein can politely absorb it — halve the flame and double the attention.',
    },
    {
      problem: 'Judging doneness in the pan instead of on the plate',
      cause: 'Ignoring carryover: eggs keep cooking after the heat stops.',
      fix: 'Pull scrambles glossy, omelettes wet on top, custards at 83°C. "Slightly underdone in the pan" is the definition of done.',
    },
    {
      problem: 'Poaching with stale eggs and boiling with fresh ones',
      cause: 'Treating all eggs as interchangeable.',
      fix: 'It is exactly backwards: the freshest eggs poach (thick white clings), week-old eggs boil (they peel cleanly). Date your cartons and assign accordingly.',
    },
    {
      problem: 'Pouring oil into mayonnaise in a confident stream from the first second',
      cause: 'Recipes say "slowly" without explaining that the first 50 ml is where every split happens.',
      fix: 'Drop by drop until the emulsion visibly tightens, and only then a thin stream. Patience at the start buys speed at the end.',
    },
  ],
  assessment: {
    id: 'as-m03',
    moduleId: 'm03',
    title: 'The Egg Bench Test',
    brief:
      'In a single 60-minute session, produce four plates in order: (1) two poached eggs, teardrop-shaped, liquid yolks; (2) one rolled French omelette, no colour, baveuse; (3) a called-shot boiled egg — announce 6, 8 or 10 minutes before cooking, halve to verify; (4) 200 ml of hand-whisked mayonnaise, thick enough to hold a spoon upright. Between plates, reset your station Module 1 style. Photograph each plate as it is finished, including the halved boiled egg.',
    rubric: [
      { criterion: 'Poached eggs', maxScore: 10, guidance: '9–10: both eggs neat teardrops, whites fully set, yolks liquid. 6–8: servable but wispy or slightly over. Below 6: ragged or hard yolks.' },
      { criterion: 'French omelette', maxScore: 10, guidance: 'Pale gold with zero browning, closed seam, even cigar, creamy baveuse centre when cut. Browning caps this at 6.' },
      { criterion: 'Boiled egg called shot', maxScore: 8, guidance: 'Halved egg matches the announced doneness against your photo ladder: 8. One stage off: 4.' },
      { criterion: 'Mayonnaise', maxScore: 8, guidance: 'Glossy, stiff, correctly seasoned with salt and acid; no oil slick. A split rescued during the session scores a maximum of 6 — noting the rescue.' },
      { criterion: 'Station discipline & timing', maxScore: 4, guidance: 'All four plates inside 60 minutes with the board reset between plates and eggs cracked into cups throughout.' },
    ],
    passScore: 28,
    evidence: 'Five photos: each of the four plates as completed, plus the halved boiled egg beside a note of the doneness you called.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Doneness ladder photographed and at least ten consecutive days of the omelette drill logged',
    'All four module recipes cooked',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module03Recipes: Recipe[] = [
  {
    id: 'r-m03-01',
    title: 'Œufs Mayonnaise',
    moduleId: 'm03',
    description:
      'The Parisian bistro classic: halved jammy eggs blanketed in loose, mustardy hand-whisked mayonnaise. Two techniques from this module on one plate, with nothing to distract from whether you executed them.',
    difficulty: 2,
    serves: 4,
    timeMins: 40,
    techniqueIds: ['t-mayonnaise', 't-emulsification', 't-tasting', 't-seasoning-salt'],
    ingredients: [
      { item: 'Eggs', qty: 8, unit: 'each', prep: 'at least a week old, fridge-cold' },
      { item: 'Egg yolk', qty: 1, unit: 'each', prep: 'room temperature, for the mayonnaise' },
      { item: 'Dijon mustard', qty: 10, unit: 'g' },
      { item: 'White wine vinegar', qty: 10, unit: 'ml' },
      { item: 'Neutral oil', qty: 200, unit: 'ml' },
      { item: 'Extra-virgin olive oil', qty: 25, unit: 'ml' },
      { item: 'Lemon juice', qty: null, unit: 'to taste' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Chives', qty: 5, unit: 'g', prep: 'finely sliced' },
      { item: 'Butter lettuce leaves', qty: 8, unit: 'each', prep: 'washed and dried' },
    ],
    method: [
      'Boil the 8 eggs exactly 8 minutes from a gentle boil, then shock in iced water for 10 minutes. You want the jammy stage — set enough to halve cleanly, glossy at the centre.',
      'While they cool, make the mayonnaise: whisk the yolk, mustard, vinegar and a good pinch of salt in an anchored bowl until slightly thickened.',
      'Add the neutral oil drop by drop until the emulsion catches and stiffens, then in a thin stream. Finish with the olive oil — added last so its bitterness stays a background note, not the headline.',
      'Loosen the mayonnaise with warm water, a teaspoon at a time, to a thick pouring consistency — bistro œufs mayo is napped, not dolloped. Season with lemon and salt, tasting on a piece of egg white, not the spoon.',
      'Peel the eggs under a trickle of water from the fat end. Halve lengthwise with a clean wet knife.',
      'Lay the lettuce on plates, seat the egg halves cut-side down, and spoon the mayonnaise generously over so each egg is coated but not drowned.',
      'Scatter with chives and a few grains of flaky salt. Serve within the hour, at room temperature — cold mutes both yolk and mayo.',
    ],
    chefNotes: [
      'The dish stands or falls on the yolk stage: a hard-boiled centre makes it canteen food, a raw one makes it collapse. If your 8-minute egg runs over, recalibrate against your doneness ladder rather than blaming the recipe.',
      'Mayonnaise consistency is a service decision — stiff for sandwiches, napping for this dish, near-pourable for dipping. Same sauce, three waters.',
    ],
    reinforces: ['Boiled-egg timing', 'Emulsion patience', 'Seasoning against the vehicle'],
  },
  {
    id: 'r-m03-02',
    title: 'Çılbır — Poached Eggs on Garlic Yoghurt',
    moduleId: 'm03',
    description:
      'The Turkish breakfast of poached eggs on warm garlic-laced yoghurt under a spiced butter — a complete seasoning argument on one plate: rich yolk, tangy dairy, hot fat, and bread to carry it. Poaching practice with a destination.',
    difficulty: 2,
    serves: 4,
    timeMins: 35,
    techniqueIds: ['t-poaching-eggs', 't-acid-balance', 't-tasting', 't-mince'],
    ingredients: [
      { item: 'Greek-style natural yoghurt', qty: 500, unit: 'g', prep: 'brought to room temperature' },
      { item: 'Garlic', qty: 2, unit: 'each', prep: 'crushed to a paste with a pinch of salt' },
      { item: 'Eggs', qty: 8, unit: 'each', prep: 'the freshest available' },
      { item: 'White wine vinegar', qty: 15, unit: 'ml', prep: 'for the poaching water' },
      { item: 'Unsalted butter', qty: 80, unit: 'g' },
      { item: 'Sweet paprika', qty: 4, unit: 'g' },
      { item: 'Dried chilli flakes (Aleppo-style if you have them)', qty: 2, unit: 'g' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Dill or mint leaves', qty: 5, unit: 'g', prep: 'picked' },
      { item: 'Crusty bread or flatbread', qty: 4, unit: 'each', prep: 'warmed or grilled' },
    ],
    method: [
      'Beat the yoghurt with the garlic paste and a pinch of salt until smooth and pourable. Sit the bowl over a pot of warm (not simmering) water to take the fridge chill off — warm yoghurt, never hot, or it splits into curds.',
      'Bring 2 litres of water to 90–95°C with the vinegar. Crack each egg into a cup and strain off the thin white in a slotted spoon.',
      'Poach the eggs in two rounds of four, 3 minutes each, into iced water. This is the restaurant hold from the lesson — no last-minute panic at plating.',
      'Make the spiced butter: melt the butter over medium heat until it foams and the solids just begin to turn gold, then pull it off and stir in the paprika and chilli. The residual heat blooms the spices; on the flame they scorch bitter in seconds.',
      'Reheat the eggs 30–45 seconds in 80°C water and drain on a clean cloth.',
      'Spoon the garlic yoghurt into four shallow bowls, seat two eggs in each, and spoon the red-gold butter over and around.',
      'Season the eggs with flaky salt, scatter the herbs, and serve immediately with bread. Instruct everyone to break the yolks into the yoghurt — that mixing is the dish.',
    ],
    chefNotes: [
      'The yoghurt’s lactic acidity is doing the acid-balance work from Module 2 — against the butter and yolk it plays the role lemon usually would. Taste the assembled spoonful, not the components, before adjusting anything.',
      'If your poached eggs come out ragged, serve them anyway and diagnose afterwards against the lesson troubleshooting — dinner is data.',
    ],
    reinforces: ['Poach-hold-reheat workflow', 'Fat as a spice carrier', 'Balancing rich against acidic'],
  },
  {
    id: 'r-m03-03',
    title: 'Omelette aux Fines Herbes',
    moduleId: 'm03',
    description:
      'The canonical rolled omelette with the classic herb mixture folded through — the dish cooks have auditioned with for a century. Three eggs, three minutes, no hiding place. Cook one per person, serving as you go; an omelette does not wait.',
    difficulty: 2,
    serves: 4,
    timeMins: 30,
    techniqueIds: ['t-french-omelette', 't-chiffonade', 't-mince', 't-mise-en-place'],
    ingredients: [
      { item: 'Eggs', qty: 12, unit: 'each', prep: 'room temperature' },
      { item: 'Unsalted butter', qty: 60, unit: 'g', prep: 'cut in 15 g knobs' },
      { item: 'Chives', qty: 8, unit: 'g', prep: 'finely sliced' },
      { item: 'Flat-leaf parsley', qty: 8, unit: 'g', prep: 'finely chopped' },
      { item: 'Chervil or extra parsley', qty: 4, unit: 'g', prep: 'finely chopped' },
      { item: 'Tarragon', qty: 2, unit: 'g', prep: 'leaves finely chopped — it dominates, use a light hand' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Mise en place completely: herbs chopped and mixed, eggs cracked into four bowls of three, butter knobbed, plates warming. Once the first pan heats, there is no stopping.',
      'Beat the first three eggs with a pinch of fine salt and a teaspoon of the herb mix until no streaks of white remain.',
      'Melt a knob of butter in the 20 cm non-stick pan over medium heat until foaming — pull the pan if it threatens to brown.',
      'Pour in the eggs and stir fast and constantly with a silicone spatula while shaking the pan, 60–90 seconds, forming small pale curds.',
      'At two-thirds set, stop stirring. Smooth the surface, scatter a little more herb mix down the centre, and let the base knit 10–15 seconds.',
      'Tilt the pan, fold the far third over the middle, then roll the omelette out onto the warm plate seam-down. Shape with a cloth into an even cigar.',
      'Gloss with butter, a few grains of salt, serve immediately — then wipe the pan and cook the next. Each omelette should take under four minutes door to door.',
    ],
    chefNotes: [
      'Cut when serving yourself and inspect the centre: baveuse means creamy and just-flowing, not raw. If it runs like beaten egg, you rolled 20 seconds early; if it is set solid, 30 late. Adjust the next one — that is why you are cooking four.',
      'Fines herbes is a fixed quartet for a reason: chives for allium, parsley for green, chervil for perfume, tarragon for anise depth. Dried herbs have no place here at all.',
    ],
    reinforces: ['Mise en place under time pressure', 'Fine herb knife work', 'Pan control at speed'],
  },
  {
    id: 'r-m03-04',
    title: 'Vanilla Crème Anglaise with Roasted Stone Fruit',
    moduleId: 'm03',
    description:
      'The mother custard — yolks, dairy and vanilla taken to exactly nappe — poured cold over hot caramelised peaches or nectarines. A temperature-discipline drill disguised as a very good dessert.',
    difficulty: 2,
    serves: 6,
    timeMins: 50,
    techniqueIds: ['t-custard', 't-roasting-veg', 't-tasting'],
    ingredients: [
      { item: 'Egg yolks', qty: 6, unit: 'each' },
      { item: 'Caster sugar', qty: 90, unit: 'g', prep: '60 g for the custard, 30 g for the fruit' },
      { item: 'Full-cream milk', qty: 300, unit: 'ml' },
      { item: 'Pouring cream', qty: 300, unit: 'ml' },
      { item: 'Vanilla bean', qty: 1, unit: 'each', prep: 'split and scraped (or 8 g vanilla bean paste)' },
      { item: 'Ripe peaches or nectarines', qty: 6, unit: 'each', prep: 'halved and stoned' },
      { item: 'Unsalted butter', qty: 30, unit: 'g' },
      { item: 'Lemon juice', qty: 10, unit: 'ml' },
      { item: 'Fine salt', qty: 1, unit: 'g' },
    ],
    method: [
      'Heat the milk, cream and vanilla (bean and seeds) to a bare simmer, then rest off the heat 10 minutes to infuse. Meanwhile set a fine sieve over a bowl nested in iced water — the landing zone comes first, because the custard cannot wait while you find it.',
      'Whisk the yolks with 60 g of sugar and the salt until slightly pale. Temper: pour the hot dairy on in a thin stream, whisking constantly.',
      'Return the mixture to the pan over low heat, probe clipped in, stirring a slow figure-eight with a flexible spatula so no spot on the base overheats.',
      'Cook to 82–84°C, 4–6 minutes. At nappe the custard coats the spatula and a finger drawn through leaves a clean, holding line. The change from thin to nappe happens in the final degree — do not leave the pot.',
      'Strain immediately into the iced bowl, stir until warm, then chill. Fish out the vanilla pod, rinse and dry it for the sugar jar.',
      'Heat the oven grill (or oven at 220°C). Sit the fruit cut-side up in a baking dish, dot with butter, scatter the remaining 30 g of sugar over the cut faces.',
      'Grill or roast 8–12 minutes until the edges caramelise and a knife meets no resistance. Finish with the lemon juice — acid against sweetness, straight from Module 2.',
      'Serve the hot fruit in shallow bowls with cold anglaise poured around. The temperature contrast is deliberate; assemble at the table if you can.',
    ],
    chefNotes: [
      'Anglaise thickens noticeably as it chills — pull it at 82–83°C if you prefer a pouring custard, 84°C for a coating one. One degree is a texture decision, which is the entire point of this module.',
      'Keep the six egg whites: bag, label and freeze them. They clarify consommé in Module 4 — the trim habit applies to eggs too.',
    ],
    reinforces: ['Probe-verified temperature control', 'Mise en place (the landing zone rule)', 'Acid balancing a sweet dish'],
  },
]
