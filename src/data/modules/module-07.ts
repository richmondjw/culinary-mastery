import type { CourseModule, Recipe } from '../../types/content'

export const module07: CourseModule = {
  id: 'm07',
  number: 7,
  stage: 1,
  title: 'Grains, Rice & Potatoes',
  subtitle: 'Starch, mastered by ratio',
  description:
    'Starches are the quiet half of almost every plate, and they are cooked by ratio and method, not by luck. This module covers the absorption method, pilaf, risotto, polenta, potato purée, roast potatoes and the gratin — plus enough starch science (waxy versus floury, amylose versus amylopectin) to know why each method works and when to swap potatoes.',
  objectives: [
    'Cook rice by the absorption method to separate, fully cooked grains using measured ratios',
    'Build a pilaf: aromatics sweated, grains toasted, measured hot stock, undisturbed finish',
    "Produce a risotto all'onda — creamy from starch agitation, finished with mantecatura",
    'Cook soft polenta to complete tenderness, judged by taste rather than time',
    'Choose waxy or floury potatoes correctly and explain the choice in terms of starch',
    'Execute pommes purée through a ricer, crisp roast potatoes, and a gratin dauphinois',
  ],
  difficulty: 2,
  estimatedHours: 8,
  prerequisites: ['m02'],
  skillsUnlocked: [
    'Absorption & pilaf methods',
    'Risotto & mantecatura',
    'Polenta cookery',
    'Potato purée, roast & gratin',
    'Starch science literacy',
  ],
  equipment: [
    'Heavy saucepan with a tight-fitting lid',
    'Wide heavy risotto pan or sauté pan (26–30 cm)',
    'Potato ricer or food mill',
    'Heavy roasting tray',
    'Gratin or baking dish (about 20 × 30 cm)',
    'Digital scales and a 1 L measuring jug',
    'Ladle and wooden spoon',
  ],
  ingredients: [
    'Basmati and arborio (or carnaroli) rice, 1 kg each',
    'Coarse polenta (500 g)',
    'Floury potatoes — sebago or king edward (2 kg)',
    'Waxy potatoes — dutch cream or nicola (1 kg)',
    'Chicken or vegetable stock (2 L, ideally your Module 4 stock)',
    'Parmesan (300 g block), unsalted butter (500 g)',
    'Full-cream milk and thickened cream',
    'Brown onions, garlic, thyme, bay leaves',
  ],
  lessons: [
    {
      id: 'm07-l01',
      title: 'Starch science, absorption and the pilaf',
      summary: 'Why waxy and floury behave differently, and the two measured-liquid methods that make rice reliable forever.',
      theory: [
        {
          heading: 'Amylose, amylopectin, and why it matters at the stove',
          body: 'Starch is two molecules in different proportions. Amylose is long and straight: high-amylose starches (basmati, floury potatoes) cook to separate, fluffy, dry results. Amylopectin is branched and sticky: high-amylopectin starches (arborio, sushi rice, waxy potatoes) cling, cream and hold their shape when cut. Every choice in this module — which rice, which potato, which method — is really a choice between these two molecules.\n\nStarch granules absorb water and swell irreversibly from about 60–70°C; that swelling is gelatinisation, and it is what "cooked" means for a starch. Agitation during cooking ruptures swollen granules and releases starch into the liquid — a disaster in a pilaf, the entire point of a risotto. Once you see stirring as a starch-release lever, every method in this module explains itself.',
        },
        {
          heading: 'Absorption and pilaf: measured liquid, no decisions mid-flight',
          body: 'The absorption method is rice cooked in exactly the water it will absorb: rinse basmati until the water runs clear (surface starch is what glues grains together), then use a 1:1.5 rice-to-water ratio by volume. Boil, lid on, lowest heat 12 minutes, then 10 minutes rest off the heat with the lid untouched — the rest lets moisture equalise so the bottom is not wet while the top is chalky. No stirring, ever.\n\nA pilaf adds flavour at two points: aromatics sweated in fat first, and the raw grains toasted in that fat until the edges turn translucent before hot stock goes in. The toasting coats each grain with fat, which slows starch release and keeps grains separate. Same ratio, same lid discipline, and the finished pilaf is forked — never stirred — to fluff it.',
        },
      ],
      demonstrations: [
        {
          title: 'Absorption-method basmati',
          steps: [
            'Rinse 300 g basmati in a sieve under cold water, agitating with your fingers, until the water runs clear — usually 4–5 changes.',
            'Tip into a heavy saucepan with 450 ml cold water and 3 g salt.',
            'Bring to a full boil uncovered, then clamp the lid on and drop to the lowest possible heat.',
            'Cook 12 minutes. Do not lift the lid — the steam doing the work escapes in seconds and takes minutes to rebuild.',
            'Off the heat, rest 10 minutes, lid still on.',
            'Fluff with a fork from the edges inward. Every grain should be separate, tender and dry to the touch.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Ratio proof',
          instructions: 'Cook three 150 g batches of basmati by absorption at ratios of 1:1.25, 1:1.5 and 1:1.75. Same pot, same heat, same 12-plus-10 timing. Taste all three and write one line on each — texture, separateness, wetness at the pot base. Circle the ratio your pot and stove actually want; it is now your number.',
          repeatPractice: 'Every rice dish from here on — the pilafs of Stage 2, the sides under Module 10 braises — uses your calibrated ratio. Re-run this proof once whenever you change pot, stove or rice brand.',
        },
      ],
      recipeIds: ['r-m07-01'],
      techniqueIds: ['t-absorption', 't-pilaf', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'Rice is wet and clumped at the bottom, dry on top',
          cause: 'Lid lifted mid-cook, heat too high (liquid boiled off before absorption finished), or the rest was skipped.',
          fix: 'Lowest heat, lid stays down, and give the full 10-minute rest — the rest is where the moisture equalises. If the pot scorches even on minimum, slide it half off the burner.',
        },
        {
          problem: 'Pilaf grains are sticky despite toasting',
          cause: 'Rice not rinsed, or the pot was stirred after the stock went in.',
          fix: 'Rinse until clear, add hot stock once, one brief stir to level, then lid on and hands off until the fork at the end.',
        },
      ],
    },
    {
      id: 'm07-l02',
      title: 'Risotto and polenta: starch as the sauce',
      summary: 'Two dishes where released starch is the point — constant movement, hot stock in stages, and a rich finish beaten in off the heat.',
      theory: [
        {
          heading: 'Risotto is controlled starch release',
          body: 'Risotto inverts the pilaf: instead of protecting the grain, you deliberately rub starch off it. Arborio and carnaroli carry a surface layer of amylopectin that constant stirring releases into the surrounding liquid, thickening it into the sauce. Hence the method: toast the rice in fat until the edges turn translucent, deglaze with wine, then add hot stock one ladle at a time, stirring, letting each addition nearly absorb before the next. Cold stock stalls the cooking each time it hits the pan, which is why the stock pot stays at a simmer alongside.\n\nEighteen to twenty minutes of this and the rice is al dente in a creamy tide. The finish — mantecatura — happens off the heat: cold butter and finely grated parmesan beaten in hard, emulsifying fat into the starchy liquid. The texture target is all\'onda, "like a wave": tilt the plate and the risotto should flow lazily. If it stands in a mound, loosen it with stock; cream has no business in it.',
        },
        {
          heading: 'Polenta: hydration takes as long as it takes',
          body: 'Coarse polenta is dried corn that needs serious hydration: five parts liquid to one part polenta by weight, and 45 minutes or more of gentle cooking. Rain the grains into simmering salted liquid while whisking — dumped in at once, they ball into permanent lumps. Then swap to a wooden spoon and stir every few minutes, scraping the base, while it blips like slow lava.\n\nDoneness is judged on the tongue, not the clock: taste from 40 minutes, and cook until every trace of hard graininess is gone. Finish generously — 50 g butter and 50 g parmesan per 250 g dry polenta is a starting point, not an indulgence. Leftovers set solid in a tray overnight and slice for grilling or pan-frying: two dishes from one pot, standard professional economy.',
        },
      ],
      demonstrations: [
        {
          title: 'Soft polenta, start to finish',
          steps: [
            'Bring 1 L water and 250 ml milk to a simmer with 8 g salt in a heavy pot.',
            'Rain in 250 g coarse polenta in a thin stream, whisking constantly until it thickens and blips.',
            'Drop to the lowest heat and swap to a wooden spoon. Stir every 3–4 minutes, scraping the base and corners.',
            'From 40 minutes, taste: cook until completely smooth on the tongue, adding hot water if it tightens past a soft, pourable flow.',
            'Off the heat, beat in 50 g butter and 50 g grated parmesan. Taste and adjust the salt.',
            'Serve immediately while it flows, or pour leftovers 2 cm deep into an oiled tray to set for tomorrow.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The stir experiment',
          instructions: 'Cook two 100 g batches of arborio side by side in small pots with the same hot stock: stir the first constantly, add the stock to the second all at once with a lid and no stirring. Taste both at 18 minutes. One is creamy, one is stock-flavoured absorption rice. Write down, in one sentence of your own, what stirring actually does.',
          repeatPractice: 'This is the module’s core mental model — agitation releases starch. Recall it every time a sauce needs body (Module 8 pasta water) or a purée goes gluey (potato in this module). One principle, many symptoms.',
        },
      ],
      recipeIds: ['r-m07-02'],
      techniqueIds: ['t-risotto', 't-polenta', 't-umami-layering', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Risotto is gluey and heavy instead of flowing',
          cause: 'Overcooked past al dente, stock added too rarely in big floods, or it sat in the pan tightening before serving.',
          fix: "Taste from 16 minutes and pull at al dente; keep additions to one ladle; loosen with a final splash of stock at the mantecatura so it flows all'onda onto the plate.",
        },
      ],
    },
    {
      id: 'm07-l03',
      title: 'The potato, part one: purée and mash',
      summary: 'Floury potatoes, gentle simmering, a ricer, and butter in quantities that would frighten your doctor — pommes purée done properly.',
      theory: [
        {
          heading: 'Waxy or floury is the first decision',
          body: 'Potatoes divide by starch. Floury varieties (sebago, king edward, russet) are high in starch and low in moisture: their cells separate when cooked, giving fluffy mash and crisp roast edges, but they collapse in a salad. Waxy varieties (dutch cream, nicola, kipfler) are lower in starch with cells that hold together: they stay intact in salads, gratins and boiling, but make gluey mash. Choosing the wrong potato is the single most common reason a potato dish fails, and no technique downstream can fix it.\n\nCooking start matters too: potatoes go into cold salted water (10 g salt per litre) and come up to a gentle simmer together. Dropped into boiling water, the outside gelatinises and starts shedding starch while the centre is raw. Simmer gently until a knife slides through without resistance — a rolling boil batters the outsides apart.',
        },
        {
          heading: 'Why the ricer, never the blender',
          body: 'Cooked potato cells are fragile sacks of swollen starch. A ricer or food mill separates them almost without breakage; a blender or food processor ruptures them wholesale, releasing free starch that turns the purée into wallpaper paste within seconds. This is the same starch-release lever as risotto, pointed in the wrong direction — which is why potato is the one purée that never sees a blade.\n\nSequence matters as much as tools. Rice the potatoes while hot, return them to the dry pot over low heat for a minute to steam off excess moisture, then beat in cold butter first — the fat coats the starch — followed by hot milk. Classic pommes purée runs to 20–25% butter by weight of potato; even a restrained home version wants 10%. Season, taste, and pass through a sieve if you want the full silk of a restaurant version.',
        },
      ],
      demonstrations: [
        {
          title: 'Pommes purée, the sequence',
          steps: [
            'Peel 800 g floury potatoes, cut into even 4 cm chunks, and start them in cold water with 10 g salt per litre.',
            'Bring to a gentle simmer and cook 15–20 minutes until a knife meets no resistance. Drain well.',
            'Rice the potatoes back into the dry pot while steaming hot.',
            'Stir over low heat 1 minute to dry the purée — you will see steam rising off it.',
            'Beat in 150 g cold cubed butter, a third at a time, then 150 ml hot milk in stages until it just slumps off the spoon.',
            'Season with fine salt, taste, and adjust. For service-grade silk, pass once through a fine sieve.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Waxy versus floury, proven',
          instructions: 'Boil 300 g each of a waxy and a floury variety in separate pots, identically salted. Mash half of each with the same butter ratio, and dress the other half warm with vinaigrette as a salad. Taste all four results and score each out of 5. The floury mash and waxy salad should win decisively — now you have tasted why.',
          repeatPractice: 'Before any potato dish for the rest of the course, name the variety and justify it in one sentence. By Module 10 (braises with mash) and Stage 2 service plates, the choice should be automatic.',
        },
      ],
      recipeIds: ['r-m07-03'],
      techniqueIds: ['t-potato-puree', 't-seasoning-salt', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Mash turned gluey and elastic',
          cause: 'Blender or food processor used, potatoes over-worked after ricing, or a waxy variety chosen.',
          fix: 'Floury potatoes, ricer only, and fold enrichments in with the minimum strokes. Gluey mash cannot be rescued — but it can be spread in a tray, chilled and pan-fried as a respectable cake.',
        },
      ],
    },
    {
      id: 'm07-l04',
      title: 'The potato, part two: roast and gratin',
      summary: 'Rough-edged crisp roast potatoes and a cream-bound gratin dauphinois — the two potato dishes guests actually remember.',
      theory: [
        {
          heading: 'Roast potatoes are engineered, not hoped for',
          body: 'Great roast potatoes come from a three-stage process. First, parboil chunks of floury potato in well-salted water for 8–10 minutes until the outsides are just soft. Second, drain and shake them hard in the colander to rough up the surfaces — that shaggy layer of loose gelatinised starch is what fries crisp; smooth potatoes stay smooth. Third, roast in preheated fat: 60 ml of oil (or better, duck fat) heated in the tray at 200°C until shimmering before the potatoes go in.\n\nOnce they hit the fat, turn each piece to coat, space them out, and then leave them alone in 25-minute blocks — constant turning tears off the crust as it forms. Salt properly at the end while they are hot and glistening. Total oven time runs 50–60 minutes; the reward is glass-crisp outside and fluffy centre, both of which were decided before the oven door ever closed.',
        },
        {
          heading: 'The gratin: waxy slices, seasoned cream, low patience',
          body: 'Gratin dauphinois is thin slices of waxy potato cooked slowly in seasoned cream until the starch they release thickens it into a sauce around them. Waxy is deliberate: the slices must hold their shape in layers, and their gentler starch release thickens the cream without turning it to glue. Slice 3 mm thick and do not rinse — that surface starch is the thickener.\n\nHeat the cream and milk with garlic, thyme, salt and a rasp of nutmeg before assembling; hot, seasoned liquid shortens the bake and seasons every layer instead of just the top. Bake at 150–160°C for 60–75 minutes until a knife slips through the centre with no resistance, then rest 15 minutes before cutting — molten gratin flows, rested gratin slices. Cheese on top is a choice (it makes it a gratin savoyard-style); the dauphinois itself needs none.',
        },
      ],
      demonstrations: [
        {
          title: 'Gratin dauphinois',
          steps: [
            'Heat the oven to 160°C. Rub a 20 × 30 cm baking dish with a cut garlic clove and butter it.',
            'Slice 1 kg waxy potatoes 3 mm thick — even slices are the whole game. Do not rinse them.',
            'Heat 400 ml cream and 200 ml milk with 2 crushed garlic cloves, 3 thyme sprigs, 8 g salt and a rasp of nutmeg to a bare simmer; steep 5 minutes and strain.',
            'Layer the potatoes in overlapping rows, pouring a little hot cream over each layer as you go.',
            'Press the top layer flat, pour over the remaining cream until it just shows between slices.',
            'Bake 60–75 minutes until deep gold on top and a knife slides through the centre effortlessly.',
            'Rest 15 minutes before serving — the cream sets from sauce to silk as it cools.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The rough-up test',
          instructions: 'Parboil 600 g of floury potato chunks, then rough up half hard in the colander and leave the other half smooth. Roast both on the same tray of preheated fat at 200°C and compare crusts at the end. Photograph the tray — the shaggy half tells you everything about surface starch and crispness.',
          repeatPractice: 'The parboil-rough-hot-fat sequence reappears under the Module 11 roast chicken and every Stage 2 roast plate. Run it from memory next time — three stages, no recipe.',
        },
      ],
      recipeIds: ['r-m07-04'],
      techniqueIds: ['t-roasting-veg', 't-potato-puree', 't-seasoning-salt', 't-mise-en-place'],
      troubleshooting: [
        {
          problem: 'Gratin cream split into grainy curds and oil',
          cause: 'Baked too hot, or the liquid was mostly milk — low-fat dairy curdles where cream holds.',
          fix: 'Keep at least two-thirds of the liquid as cream, stay at 150–160°C, and if the top browns before the centre is tender, cover loosely with foil.',
        },
        {
          problem: 'Roast potatoes crisp at first, soggy by the table',
          cause: 'Crowded tray, fat not preheated, or potatoes stacked in a bowl where their own steam softened the crust.',
          fix: 'Preheat the fat until shimmering, space the pieces, and serve straight from tray to plate — roast potatoes wait for no one.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Lifting the lid on absorption rice to check progress',
      cause: 'Anxiety. The pot is silent and you want proof something is happening.',
      fix: 'The steam you release takes minutes to rebuild and the timing collapses. Trust the ratio, the timer and the rest. Twelve minutes, ten minutes, fork.',
    },
    {
      problem: 'Using one potato variety for every job',
      cause: 'The supermarket bag says "brushed potatoes" and habit does the rest.',
      fix: 'Name the job first: floury for mash and roasting, waxy for gratins, salads and boiling. Keep both in the pantry, labelled.',
    },
    {
      problem: 'Adding cold stock to risotto straight from the fridge',
      cause: 'It seems harmless, and one less pot to wash.',
      fix: 'Every cold addition stalls gelatinisation and stretches the cook, battering the outside of the grain while the centre lags. Keep the stock at a simmer beside the risotto pan — always.',
    },
    {
      problem: 'Finishing starches without tasting for salt',
      cause: 'Starches drink seasoning, and what tasted right in the liquid tastes flat in the finished dish.',
      fix: 'Taste at the end, every time. Rice, polenta, potato — all of them need a final salt adjustment after the starch has absorbed the liquid.',
    },
  ],
  assessment: {
    id: 'as-m07',
    moduleId: 'm07',
    title: 'The Starch Bench',
    brief:
      'In one 2-hour session, produce four starches side by side: (1) absorption-method basmati or a pilaf with separate, fully cooked grains; (2) a parmesan risotto finished with mantecatura, flowing all\'onda; (3) pommes purée through the ricer, smooth and properly enriched; (4) either crisp roast potatoes or a gratin dauphinois. Present all four together at the end — the test is managing four timelines and four textures at once, each seasoned and finished correctly.',
    rubric: [
      { criterion: 'Absorption/pilaf grain quality', maxScore: 8, guidance: '7–8: separate, tender, dry grains; no wet clump at the base. 4–6: minor stickiness. Below 4: mushy or chalky.' },
      { criterion: 'Risotto texture & finish', maxScore: 10, guidance: "9–10: al dente grains in a creamy tide that flows when tilted; glossy mantecatura. Deduct for gluey, stiff, soupy or chalky results.", },
      { criterion: 'Potato purée', maxScore: 8, guidance: 'Smooth, light, no glue; butter and salt in evident, confident quantity; riced not blended.' },
      { criterion: 'Roast or gratin execution', maxScore: 8, guidance: 'Roast: glass-crisp exterior, fluffy centre. Gratin: shape-holding slices in thickened, unsplit cream, knife-tender centre.' },
      { criterion: 'Timeline management & seasoning', maxScore: 6, guidance: 'All four arrive together, hot, each tasted and adjusted at the finish. A cold or flat element caps this criterion at 2.' },
    ],
    passScore: 28,
    evidence: 'Four photos: the full mise en place, the risotto flowing on a tilted plate, the purée off the spoon, and all four starches presented together.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Ratio proof and waxy-versus-floury exercises done with written notes kept',
    'All four module recipes cooked, including one risotto taken to proper mantecatura',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module07Recipes: Recipe[] = [
  {
    id: 'r-m07-01',
    title: 'Chicken Stock Pilaf with Almonds & Herbs',
    moduleId: 'm07',
    description:
      'A proper pilaf — onion sweated in butter, basmati toasted to translucence, measured hot stock, and an untouched lid — finished with toasted almonds, currants and herbs. The dish that proves your ratio discipline.',
    difficulty: 2,
    serves: 4,
    timeMins: 40,
    techniqueIds: ['t-pilaf', 't-absorption', 't-sauteing', 't-seasoning-salt'],
    ingredients: [
      { item: 'Basmati rice', qty: 300, unit: 'g', prep: 'rinsed until the water runs clear' },
      { item: 'Chicken stock', qty: 450, unit: 'ml', prep: 'hot' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'small dice (6 mm)' },
      { item: 'Unsalted butter', qty: 50, unit: 'g' },
      { item: 'Bay leaf', qty: 1, unit: 'each' },
      { item: 'Cinnamon stick', qty: 1, unit: 'each' },
      { item: 'Flaked almonds', qty: 40, unit: 'g', prep: 'toasted' },
      { item: 'Currants', qty: 30, unit: 'g' },
      { item: 'Flat-leaf parsley and dill', qty: 20, unit: 'g', prep: 'roughly chopped' },
      { item: 'Fine salt', qty: 4, unit: 'g' },
    ],
    method: [
      'Full mise first: rice rinsed and drained, stock hot in a jug, onion diced, everything measured. A pilaf gives you no time to prep mid-flight.',
      'Melt the butter in a heavy saucepan over medium heat and sweat the onion with a pinch of the salt, 5–6 minutes, soft without colour.',
      'Add the rice, bay and cinnamon. Toast, stirring, 2–3 minutes until the grains turn translucent at the edges and smell faintly nutty — this fat coating is what keeps them separate.',
      'Pour in the hot stock with the remaining salt, stir once to level, and bring to a boil.',
      'Clamp the lid on, drop to the lowest heat, and cook 12 minutes. Do not lift the lid.',
      'Rest 10 minutes off the heat, lid on. Then fork the pilaf gently from the edges, lifting rather than stirring.',
      'Fold through the almonds, currants and herbs. Taste a forkful and adjust the salt — stock varies, so the finish is always tasted.',
    ],
    chefNotes: [
      'The currants plump in the steam during the rest and land as little bursts of sweetness — add them with the stock next time if you prefer them fully soft.',
      'Same skeleton, endless variations: swap the spice for cumin seed and the herbs for coriander, or the stock for your Module 4 brown stock under a braise. Master the frame, then improvise.',
    ],
    reinforces: ['Small dice from memory', 'Mise en place before heat', 'Final tasting and salt adjustment'],
  },
  {
    id: 'r-m07-02',
    title: 'Parmesan Risotto with Peas',
    moduleId: 'm07',
    description:
      "The benchmark risotto: rice toasted, wine flashed off, hot stock in ladles with constant movement, and a hard mantecatura of butter and parmesan. Peas keep it honest — they overcook if your timeline slips. All'onda or it goes back in the pan.",
    difficulty: 2,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-risotto', 't-umami-layering', 't-tasting', 't-seasoning-salt'],
    ingredients: [
      { item: 'Arborio or carnaroli rice', qty: 320, unit: 'g' },
      { item: 'Chicken or vegetable stock', qty: 1.2, unit: 'L', prep: 'at a simmer on the back burner' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'fine dice' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'Olive oil', qty: 30, unit: 'ml' },
      { item: 'Unsalted butter', qty: 70, unit: 'g', prep: 'cold, cubed — 20 g for the base, 50 g for the finish' },
      { item: 'Parmesan', qty: 80, unit: 'g', prep: 'finely grated' },
      { item: 'Frozen peas', qty: 150, unit: 'g' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Set the stock at a bare simmer beside your risotto pan — cold stock stalls the cook every time it hits the rice.',
      'Sweat the onion in the oil and 20 g butter over medium heat with a pinch of salt, 5 minutes, no colour.',
      'Add the rice and toast 2–3 minutes, stirring, until the grains are hot and translucent at the edges — you should hear them click against the pan.',
      'Add the wine and stir until it has evaporated completely; raw wine sours the finish.',
      'Add hot stock one ladle at a time, stirring almost constantly, letting each addition nearly absorb before the next. Settle into the rhythm — this phase runs about 16–18 minutes.',
      'At 14 minutes, stir in the peas. From 16 minutes, taste: you want al dente — tender with a fine white pin at the very centre of the grain.',
      'Pull the pan off the heat. Beat in the cold butter and parmesan hard for 30 seconds — the mantecatura — then a final splash of stock so it flows.',
      "Taste, adjust the salt, and plate immediately. Tilt the plate: the risotto should spread in a slow wave. If it stands still, loosen and re-plate.",
    ],
    chefNotes: [
      'Salt cautiously through the middle and correct at the end — the stock reduces as you go and the parmesan brings its own salt with it.',
      'Risotto waits for the eater, never the reverse. Have plates warm and the table sat before the mantecatura — it tightens noticeably within two minutes.',
    ],
    reinforces: ['Tasting for doneness under time pressure', 'Layered salting with a final adjustment', 'Station organisation — stock, ladle, spoon in fixed positions'],
  },
  {
    id: 'r-m07-03',
    title: 'Pommes Purée',
    moduleId: 'm07',
    description:
      'The restaurant potato: floury potatoes simmered gently, riced hot, dried in the pan, then mounted with serious butter and hot milk. Learn it at the classic ratio once — you can retreat to civilian quantities afterwards, knowing what the ceiling tastes like.',
    difficulty: 2,
    serves: 6,
    timeMins: 40,
    techniqueIds: ['t-potato-puree', 't-seasoning-salt', 't-tasting'],
    ingredients: [
      { item: 'Floury potatoes (sebago or king edward)', qty: 1, unit: 'kg', prep: 'peeled, even 4 cm chunks' },
      { item: 'Unsalted butter', qty: 200, unit: 'g', prep: 'cold, cubed' },
      { item: 'Full-cream milk', qty: 180, unit: 'ml', prep: 'hot' },
      { item: 'Fine salt', qty: 10, unit: 'g', prep: 'per litre of cooking water' },
      { item: 'White pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'Start the potatoes in cold water salted at 10 g per litre. Bring to a gentle simmer — never a rolling boil, which batters the outsides apart before the centres cook.',
      'Simmer 15–20 minutes until a knife slides through with no resistance. Drain thoroughly.',
      'Rice the potatoes back into the dry pot while they are steaming hot — cold potato turns gluey under pressure.',
      'Dry the purée over low heat for a minute, stirring, until steam stops rising. Drier purée drinks more butter.',
      'Beat in the cold butter a third at a time with a spatula — the fat should emulsify in, leaving the purée glossy.',
      'Add the hot milk in stages until the purée just slumps from the spoon. You may not need it all.',
      'Season with fine salt and white pepper. Taste properly — potato absorbs salt greedily and almost always wants more than you think.',
      'For full restaurant silk, pass once through a fine sieve and serve hot, with a last cube of butter melting on top.',
    ],
    chefNotes: [
      'Twenty per cent butter sounds obscene and tastes inevitable. Try the classic ratio once at full strength; every future compromise will at least be an informed one.',
      'Holding purée: keep it covered over a pot of barely simmering water and loosen with hot milk at service. Reheated purée in a microwave goes gluey at the edges.',
    ],
    reinforces: ['Choosing the right potato for the job', 'Salting from the water up', 'Tasting and adjusting at the finish'],
  },
  {
    id: 'r-m07-04',
    title: 'Crisp Roast Potatoes, Rosemary & Garlic',
    moduleId: 'm07',
    description:
      'The three-stage roast potato: parboiled in salty water, roughed up hard in the colander, then roasted in preheated fat until glass-crisp. Rosemary and whole garlic cloves join late so they perfume rather than burn.',
    difficulty: 2,
    serves: 5,
    timeMins: 80,
    techniqueIds: ['t-roasting-veg', 't-potato-puree', 't-seasoning-salt', 't-mise-en-place'],
    ingredients: [
      { item: 'Floury potatoes', qty: 1.2, unit: 'kg', prep: 'peeled, cut into 5 cm chunks' },
      { item: 'Fine salt (for parboiling water)', qty: 10, unit: 'g', prep: 'per litre' },
      { item: 'Olive oil, duck fat or beef dripping', qty: 80, unit: 'ml' },
      { item: 'Garlic', qty: 6, unit: 'each', prep: 'whole cloves, skin on, lightly crushed' },
      { item: 'Rosemary sprigs', qty: 3, unit: 'each' },
      { item: 'Flaky salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 200°C with the fat in a heavy roasting tray inside — the fat must be shimmering before any potato touches it.',
      'Start the potatoes in cold salted water, bring to a simmer, and parboil 8–10 minutes until the outsides are soft but the centres still firm.',
      'Drain, then shake the colander hard for a good ten seconds to rough every surface into a shaggy, starchy fuzz. This fuzz is your future crust.',
      'Let them steam-dry in the colander 5 minutes — wet potatoes spit and steam instead of frying.',
      'Carefully tip the potatoes into the hot fat, turn each piece once to coat, and space them out with gaps.',
      'Roast 25 minutes untouched, then turn each piece onto a pale face. Add the garlic cloves and rosemary now, tucked between potatoes.',
      'Roast a further 25–30 minutes until deeply golden and audibly crisp when tapped with a spoon.',
      'Season generously with flaky salt straight from the oven and serve immediately — the crust is at its peak for about ten minutes.',
    ],
    chefNotes: [
      'Duck fat or beef dripping brown at least a shade deeper and taste it — worth the roughly $6 AUD a tub costs. Strain and reuse the fat twice more; label and date it, as always.',
      'Rosemary added at the start turns to bitter pine needles. Herbs and garlic go in at the halfway turn — perfumed, not carbonised.',
    ],
    reinforces: ['Mise en place and sequencing before heat', 'Even knife cuts for even cooking', 'Finishing seasoning at the moment of serving'],
  },
]
