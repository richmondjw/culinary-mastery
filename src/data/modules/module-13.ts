import type { CourseModule, Recipe } from '../../types/content'

export const module13: CourseModule = {
  id: 'm13',
  number: 13,
  stage: 3,
  title: 'Flavour Development & Recipe Creation',
  subtitle: 'From following recipes to writing them',
  description:
    'Twelve modules of technique become authorship here. You will learn how flavour combinations actually work — classic affinities, shared aroma compounds, structural balance — and how to layer flavour deliberately through a cook rather than rescuing it at the end. Then you will design an original dish from a concept, document it in the standardised recipe format professionals use, and improve it through structured, versioned tasting.',
  objectives: [
    'Build flavour combinations from classic affinities and shared aroma compounds, then vary one element with intent',
    'Layer salt, umami, fat, acid and freshness at the correct stages of a cook, not in one rescue at the end',
    'Engineer texture and temperature contrast into a dish as deliberately as flavour',
    'Take an original dish from written concept to plated result',
    'Write a standardised recipe another cook could execute: weights, temperatures, critical points, plating spec',
    'Iterate a dish across versions using structured tasting notes and a one-change-per-version discipline',
  ],
  difficulty: 4,
  estimatedHours: 10,
  prerequisites: ['m08', 'm09', 'm10', 'm11', 'm12'],
  skillsUnlocked: [
    'Flavour pairing frameworks',
    'Deliberate flavour layering',
    'Original dish design',
    'Standardised recipe writing',
    'Structured tasting & iteration',
  ],
  equipment: [
    'Digital scales (1 g resolution; 0.1 g for spices is ideal)',
    'Probe thermometer',
    'A dozen tasting spoons and small tasting bowls',
    'Heavy lidded casserole (4–5 L)',
    'Wide sauté pan',
    'Stick or jug blender and a fine sieve',
    'Recipe cards or a dedicated notebook — the paperwork is part of the craft',
  ],
  ingredients: [
    'Carnaroli or arborio rice (1 kg)',
    'Beef chuck or boneless shin (1.5 kg)',
    'Good stock — your own from Module 4, white and brown',
    'Umami pantry: parmesan, anchovies, fish sauce, dried porcini, tomato paste, miso',
    'Acid shelf: red and white wine vinegar, sherry vinegar, lemons, limes',
    'Carrots, feta, hazelnuts, honey, mint (contrast-plate set)',
    'Pork loin cutlets, fennel, apples, cider (worked-example set)',
  ],
  lessons: [
    {
      id: 'm13-l01',
      title: 'Pairing frameworks: why combinations work',
      summary: 'Classic affinities, shared aroma compounds, and the structural checklist every dish must pass.',
      theory: [
        {
          heading: 'Start from the canon',
          body: 'Every cuisine is a library of proven pairings: tomato and basil, lamb and anchovy, pork and apple, duck and orange, chocolate and coffee. These affinities survived because they work — acid cutting fat, sweetness flattering salt, an aromatic bridging two heavier partners. The fastest route to an original dish is not invention from nothing; it is taking a proven affinity and varying exactly one element. Pork and apple becomes pork and quince. Tomato and basil becomes tomato and tarragon. One step from the canon reads as creative; three steps reads as random.\n\nKeep a running affinity list in your notebook, organised by anchor ingredient. When you eat something that works — at a restaurant, from a book, at a friend’s table — write the pairing down and note why it worked. That list becomes your raw material for the rest of this course and the rest of your cooking life.',
        },
        {
          heading: 'Aroma compounds and the structural checklist',
          body: 'The second framework is chemical: ingredients that share dominant aroma compounds tend to harmonise. Basil and clove share eugenol; parmesan and pineapple share esters; oysters and cucumber share the same green aldehydes. This explains odd-sounding pairs that work, and it is a useful tiebreaker — but treat it as a compass, not a licence. A pairing that shares molecules can still fail structurally.\n\nStructure is the non-negotiable checklist. Every finished dish needs richness, salt, acid, texture contrast and something fresh; most benefit from a quiet layer of umami and a controlled note of sweetness or bitterness. And discipline the cast: two stars per plate maximum, everything else in a supporting role. When a “creative” dish tastes muddled, it almost always failed the checklist or exceeded the star limit — not the chemistry.',
        },
      ],
      demonstrations: [
        {
          title: 'Building a combination from an anchor ingredient',
          steps: [
            'Choose an anchor — say, roast carrots — and write it at the centre of a page.',
            'List five canonical partners from your affinity list (cumin, honey, orange, feta, dill).',
            'Pick two partners maximum as co-stars; strike the rest or demote them to background.',
            'Run the structural checklist: richness (feta), salt (feta again), acid (lemon), texture (toasted hazelnut), freshness (mint). Fill any gap with a supporting ingredient, not another star.',
            'Vary one element only: swap honey for hot honey — sweetness plus heat — and note why.',
            'Say the dish out loud as a menu line. If you cannot name it in eight words, it has too many ideas.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The affinity ladder',
          instructions: 'Take three proven pairings you love. For each, generate three one-step variations (swap exactly one element for a close neighbour: apple → pear → quince → membrillo). Taste-test the most promising variation as a two-ingredient bite — a sliver of each together on a spoon — before committing it to a dish. Record verdicts in your notebook.',
          repeatPractice: 'Do a two-ingredient spoon test before every new dish you design in Modules 13–20. It costs two minutes and kills bad ideas before they cost you a dinner.',
        },
      ],
      recipeIds: ['r-m13-01'],
      techniqueIds: ['t-flavour-pairing', 't-tasting'],
      troubleshooting: [
        {
          problem: 'My original combinations taste muddled and busy',
          cause: 'Too many stars on the plate — every ingredient is fighting for the lead.',
          fix: 'Rebuild with a hard cast list: one anchor, one or two co-stars, everything else supporting. If removing an ingredient does not hurt the dish, it was noise.',
        },
        {
          problem: 'A pairing that sounded clever tastes wrong together',
          cause: 'Shared aroma compounds without structural balance — chemistry is a compass, not a guarantee.',
          fix: 'Run the checklist. Usually the pair lacks acid or texture contrast; add the missing pillar before abandoning the idea.',
        },
      ],
    },
    {
      id: 'm13-l02',
      title: 'Layering flavour through the cook',
      summary: 'Seasoning at every transformation, stacking umami, and engineering texture and temperature contrast.',
      theory: [
        {
          heading: 'Season the transformations',
          body: 'Deep flavour is built in layers at the moments food transforms — never in one correction at the end. Salt the protein before it sears so seasoning penetrates. Salt the aromatics as they sweat so they release and concentrate. Build umami early where it has time to integrate: tomato paste cooked to rust, a parmesan rind in the simmer, a teaspoon of fish sauce or a few chopped anchovies that dissolve into depth without announcing themselves. Browning is a layer too — fond is flavour capital, and a braise inherits every bit of colour you give the meat and mirepoise at the start.\n\nThe final layer is brightness. Acid and fresh herbs go in at the end, off the heat, because volatility is the point — a splash of vinegar into a three-hour braise in its last five minutes does more than a cup added at the start.',
        },
        {
          heading: 'Contrast is a flavour',
          body: 'The palate registers difference, not absolutes. A dish that is uniformly soft, uniformly rich or uniformly hot reads as flat regardless of how well it is seasoned — the third spoonful tastes duller than the first because nothing changes. Texture contrast fixes this: something crisp against something yielding, a crumb on a purée, a raw shaved element over a braise. Temperature contrast works the same lever — cold whipped feta under hot roast carrots, warm pudding against cold cream.\n\nEngineer contrast on purpose. When you design a dish, write its texture map next to its flavour map: what is crisp, what is soft, what is cold, what is hot. If every line says “soft and warm”, the dish needs a garnish that earns its place — toasted nuts, pickled shallot, a tuile, chilled cream — before it needs another flavour.',
        },
      ],
      demonstrations: [
        {
          title: 'Layer audit on the master braise',
          steps: [
            'Before cooking r-m13-02, list every layering opportunity in order: salt on the raw beef, hard sear, browned mirepoise, pincéed tomato paste, wine reduction, umami additions, finishing acid.',
            'Cook the braise, tasting the liquid at each stage on a clean spoon; write one line per stage describing what changed.',
            'At the two-hour mark, taste and name what is missing — usually brightness, sometimes salt.',
            'Finish with vinegar added a teaspoon at a time, tasting between additions, until the richness snaps into focus.',
            'Compare your stage notes with the finished pot: identify which single layer contributed most.',
            'Repeat the dish another day skipping one early layer (no pincé, say) and taste what its absence costs.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The flat-dish rescue drill',
          instructions: 'Deliberately make a small pot of soup or braise seasoned only at the end. Taste it against a properly layered batch of the same recipe. Write down the difference in your own words, then rescue the flat batch as far as you can with salt, acid, umami and a textural garnish. Note how close you can get — and what you cannot recover.',
          repeatPractice: 'Whenever any dish tastes flat for the rest of the course, run the rescue sequence in this order: salt first, then acid, then umami, then contrast. Log each rescue in your tasting notebook — the pattern of what your palate misses is the lesson.',
        },
        {
          title: 'Contrast retrofit',
          instructions: 'Take one soft, warm dish from your repertoire — a purée soup, a dal, a stew — and add one texture element and one temperature element (for example: fried curry leaves and a spoon of cold yoghurt). Serve both versions side by side and note which bowl gets finished first.',
        },
      ],
      recipeIds: ['r-m13-02', 'r-m13-03'],
      techniqueIds: ['t-seasoning-salt', 't-umami-layering', 't-acid-balance'],
      troubleshooting: [
        {
          problem: 'Deep and savoury, but somehow boring',
          cause: 'All bass, no treble — umami and salt are layered, but nothing bright or fresh survives to the plate.',
          fix: 'Add acid off the heat at the very end, a little at a time, and a fresh element on the plate. The jump from rich-but-dull to vivid is usually two teaspoons of vinegar away.',
        },
        {
          problem: 'Tastes seasoned at the stove, under-seasoned at the table',
          cause: 'You tasted it scalding hot — heat masks both salt and sweetness.',
          fix: 'Cool every tasting spoonful for a few seconds and season for serving temperature. Cold and room-temperature dishes need noticeably more seasoning than hot ones.',
        },
      ],
    },
    {
      id: 'm13-l03',
      title: 'From concept to card: designing and writing the dish',
      summary: 'Turning a written brief into components, and documenting the result in the standardised recipe format.',
      theory: [
        {
          heading: 'Concept before components',
          body: 'Professionals do not start a new dish at the stove; they start with a brief. A usable brief answers four questions: who is it for and when (a weeknight dinner, a dinner-party main, a menu entrée); what season and therefore what ingredients are at their best; what is the anchor ingredient; and what constraint applies (budget, time, dietary, equipment). Constraints are not obstacles — they are what give a dish its shape. “Pork, autumn, under an hour, one pan” designs half the dish for you.\n\nFrom the brief, work outwards using Lesson 1: choose the anchor, add at most two co-stars from its affinity list, then fill the structural checklist with supporting elements. Only then decide techniques — and choose techniques you have already banked in Modules 1–12. A new dish is not the place to attempt a new technique; one variable at a time applies to skills as much as ingredients.',
        },
        {
          heading: 'The standardised recipe',
          body: 'A recipe you cannot hand to another cook is a memory, not a document. The standardised format fixes that: every ingredient in grams or millilitres (cups and “a splash” are banned); every temperature in °C; pan sizes and heat levels stated; timings given with the sensory cue that overrides them (“12–15 minutes, until deep mahogany”). Critical control points are flagged explicitly — the steps where rushing ruins the dish — and the plating spec describes the finished plate precisely enough to reproduce it.\n\nEvery card carries a version number, a date, and a change log: what you altered from the previous version and why. This feels bureaucratic exactly once. From the second iteration onward it is the only way to know whether the dish is actually improving, and in Modules 15 and 18 these cards become the raw material for menus and costing.',
        },
      ],
      demonstrations: [
        {
          title: 'Writing the card',
          steps: [
            'Cook your dish once, weighing every ingredient as you go — including salt, oil and finishing elements you would normally eyeball.',
            'Write the ingredient list in order of use, metric only, with prep attached to each line (“fennel, 400 g, shaved 2 mm”).',
            'Write the method as numbered steps, one action per step, each with its time, temperature and sensory cue.',
            'Mark the critical control points with a flag: the sear you must not rush, the emulsion that must not boil.',
            'Write the plating spec: plate, component placement, sauce application, garnish, serving temperature.',
            'Add the header: dish name, yield in portions, version 1.0, today’s date — and file it where the next version will join it.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Standardise a family favourite',
          instructions: 'Take the dish you cook most often from memory and write it as a full standardised card — weights, temperatures, critical points, plating spec. Then cook it strictly from your own card, changing nothing. Every place you feel the urge to deviate is a place the card is wrong; correct the card, not the cooking.',
          repeatPractice: 'Every recipe you design from now to the Module 20 capstone gets a standardised card before anyone else tastes it. By Module 18 your cards feed directly into costing sheets — sloppy cards become wrong prices.',
        },
      ],
      recipeIds: ['r-m13-04'],
      techniqueIds: ['t-recipe-writing', 't-flavour-pairing'],
      troubleshooting: [
        {
          problem: 'The dish in my head keeps growing components',
          cause: 'Designing at the stove instead of from a brief — every good idea gets added instead of judged.',
          fix: 'Cap the plate at four components: anchor, co-star, support, sauce or dressing. Park every further idea in the notebook for the next dish; a brief is also a fence.',
        },
      ],
    },
    {
      id: 'm13-l04',
      title: 'Iteration: structured tasting and the one-change rule',
      summary: 'Tasting with a vocabulary, scoring against axes, and versioning a dish until it is worth its card.',
      theory: [
        {
          heading: 'Taste with a structure',
          body: '“Is it good?” is not a question a cook can act on. Structured tasting replaces it with axes you score one at a time: salt, acid, fat/richness, sweetness, bitterness, umami, texture contrast, temperature, and aroma. Taste a cooled spoonful, ask about one axis, write a score from 1 (absent) to 5 (dominant), and add one line of comment. The target is rarely 5s across the board — a bright salad wants low richness; a braise wants low bitterness — so start each dish by writing its target profile, then score the actual against the target.\n\nRecruit other palates, but structure them too. Diners say “lovely”; a form saying “score salt 1–5” gets you data. Three tasters scoring the same axes will disagree on numbers and agree on direction — and direction is what you need.',
        },
        {
          heading: 'One change per version',
          body: 'Iteration dies when you change four things at once, because the next version cannot tell you which change mattered. The discipline: each version changes exactly one variable — an ingredient, a quantity, a technique or a time — chosen to close the biggest gap between the actual scores and the target profile. Version 1.1 might be “fennel salted 30 minutes ahead”; 1.2 might be “cider reduced by half before cream”. The change log on the card records each move and its result.\n\nKnow when to stop. A dish is done when two consecutive versions produce no meaningful score movement, or when the remaining gaps are taste preferences rather than faults. Most dishes settle in three to five versions; a dish still moving at version eight usually has a flawed concept, and the honest move is back to the brief, not version nine.',
        },
      ],
      demonstrations: [
        {
          title: 'The iteration loop, end to end',
          steps: [
            'Write the target profile for your dish: intended score on each tasting axis, one line each.',
            'Cook version 1.0 exactly from your card; taste and score every axis on a cooled spoon.',
            'Identify the single biggest gap between actual and target — say acid at 1 against a target of 3.',
            'Choose one change that addresses that gap; write it in the change log before you cook again.',
            'Cook version 1.1, re-score all axes, and check nothing else regressed.',
            'Repeat until two versions in a row hold steady; mark the card FINAL with its version number.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Three versions of one dish',
          instructions: 'Take your design-brief dish (r-m13-04) through three full iterations across three cooking sessions. Keep all three scoresheets and the change log. At the end, write a five-line summary: what the dish was at 1.0, what it is now, and which single change earned its place hardest.',
          repeatPractice: 'The score-and-one-change loop is the improvement engine for everything ahead: your Module 14 plating drills, the Module 15 menu trio, and the Stage 4 capstone all iterate on exactly this loop.',
        },
      ],
      recipeIds: ['r-m13-04'],
      techniqueIds: ['t-tasting', 't-recipe-writing'],
      troubleshooting: [
        {
          problem: 'Every version tastes different but none tastes better',
          cause: 'Multiple simultaneous changes — the versions are not comparable, so there is no signal.',
          fix: 'Return to the last version you have a full scoresheet for and restart with strict one-change discipline. Slower per version, far faster to done.',
        },
        {
          problem: 'Tasters just say it is nice, which helps nobody',
          cause: 'You asked an open question of polite people.',
          fix: 'Hand them the axis form and ask them to score, then ask one forced choice: “more acid or less?” Specific questions get honest answers politeness cannot blur.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Inventing from nothing instead of varying the canon',
      cause: 'Creativity misunderstood as distance from tradition.',
      fix: 'Start from a proven affinity and change one element. Originality is a well-chosen step, not a leap.',
    },
    {
      problem: 'Fixing flavour only at the end of the cook',
      cause: 'Seasoning treated as a correction rather than a construction.',
      fix: 'Layer at every transformation: raw protein, sweating aromatics, deglaze, simmer, finish. The final adjust should be a nudge, not a rescue.',
    },
    {
      problem: 'Recipes written in cups, splashes and vibes',
      cause: 'Documenting for yourself-today instead of any-cook-tomorrow.',
      fix: 'Grams, millilitres, °C, pan sizes, sensory cues, critical points, version and date. If another cook cannot execute it, it is not written yet.',
    },
    {
      problem: 'Changing several variables between versions',
      cause: 'Impatience — every idea goes into the next cook at once.',
      fix: 'One change per version, logged before you cook. You are running an experiment; protect the signal.',
    },
  ],
  assessment: {
    id: 'as-m13',
    moduleId: 'm13',
    title: 'The Original Dish',
    brief:
      'In one practical session (with one earlier design sitting): design an original dish from a written brief you set yourself (occasion, season, anchor, constraint); cook it; score it against your target profile; make one logged change; cook and score version 1.1 in the same session using a fresh half-batch. Produce the finished plate and a complete standardised recipe card at version 1.1 — weights, temperatures, critical points, plating spec, change log.',
    rubric: [
      { criterion: 'Concept & pairing logic', maxScore: 8, guidance: '7–8: clear brief, canonical affinity varied by one deliberate step, cast limited to two stars. 4–6: sound but crowded or derivative. Below 4: random assembly.' },
      { criterion: 'Flavour balance & layering', maxScore: 10, guidance: 'Seasoning built through the cook; salt, acid, umami and freshness all present and proportioned at serving temperature.' },
      { criterion: 'Texture & temperature contrast', maxScore: 6, guidance: 'At least one deliberate texture contrast and one temperature contrast, both earning their place.' },
      { criterion: 'Standardised recipe card', maxScore: 10, guidance: 'Metric weights, °C, timed steps with sensory cues, flagged critical points, plating spec, version header and change log — executable by another cook without you.' },
      { criterion: 'Iteration evidence', maxScore: 6, guidance: 'Both scoresheets present; the 1.0 → 1.1 change is single, justified by the scores, and audibly improved the dish.' },
    ],
    passScore: 28,
    evidence: 'Photos of the plated dish (versions 1.0 and 1.1), both completed tasting scoresheets, and the finished recipe card.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'All four module recipes cooked, including the design-brief dish taken through three logged versions',
    'At least three standardised recipe cards written to the full format',
    'Assessment passed (28/40 or better) with photo and scoresheet evidence',
  ],
}

export const module13Recipes: Recipe[] = [
  {
    id: 'r-m13-01',
    title: 'Risotto as a Canvas',
    moduleId: 'm13',
    description:
      'A masterclass parmesan risotto cooked as a neutral canvas, then taken in one of three directions — pea and mint, porcini and thyme, or prawn, chilli and lemon. The template teaches you to vary a dish along one flavour axis at a time.',
    difficulty: 3,
    serves: 4,
    timeMins: 50,
    techniqueIds: ['t-risotto', 't-flavour-pairing', 't-seasoning-salt', 't-tasting'],
    ingredients: [
      { item: 'Carnaroli or arborio rice', qty: 320, unit: 'g' },
      { item: 'White chicken or vegetable stock', qty: 1.3, unit: 'L', prep: 'hot, held at a simmer' },
      { item: 'Brown onion', qty: 100, unit: 'g', prep: 'fine dice' },
      { item: 'Butter', qty: 90, unit: 'g', prep: '30 g for the base, 60 g cold for mantecatura' },
      { item: 'Olive oil', qty: 20, unit: 'ml' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'Parmesan', qty: 60, unit: 'g', prep: 'finely grated' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Variation set (choose one — see notes)', qty: null, unit: 'as required' },
    ],
    method: [
      'Choose your variation before you start and complete its mise: blanched peas and mint chiffonade; rehydrated porcini (soaking liquid reserved and added to the stock) with thyme; or raw prawn pieces with minced chilli and lemon zest.',
      'Sweat the onion in 30 g butter and the oil over medium-low with a pinch of salt until translucent, about 5 minutes — no colour.',
      'Add the rice and toast, stirring, until the grains turn translucent at the edges and smell faintly nutty, 2–3 minutes.',
      'Deglaze with the wine and stir until fully absorbed.',
      'Add hot stock a ladle at a time, stirring almost constantly, letting each addition absorb before the next. Season the pot lightly at the halfway mark, tasting a grain as you go.',
      'At 16–18 minutes the rice should be just al dente. Fold in the variation now: peas in the final 2 minutes; porcini with the last ladle; prawns for the final 90 seconds only.',
      'Off the heat, beat in the cold butter and parmesan hard for the mantecatura (omit parmesan for the prawn version; finish with lemon juice instead). Rest 1 minute, loosen with a splash of stock to all’onda, and taste for salt and brightness.',
      'Serve on warm flat plates, shaken to a level pool. Score the finished dish on your tasting axes while it is in front of you.',
    ],
    chefNotes: [
      'The three variations each move one axis: peas and mint add freshness, porcini adds umami depth, prawn-chilli-lemon adds heat and acid. Cook all three across the module and write one scoresheet each — same canvas, three lessons.',
      'Cream is still cheating. The creaminess is starch agitation plus cold butter — re-drilled from Module 6 on purpose.',
    ],
    reinforces: ['Risotto method', 'Layered salting and tasting', 'Varying one flavour axis at a time'],
  },
  {
    id: 'r-m13-02',
    title: 'Master Braise, Three Directions',
    moduleId: 'm13',
    description:
      'A deeply layered beef braise built as a flavour-layering audit: every stage — cure, sear, pincé, deglaze, umami stack, finishing acid — is tasted and logged. The base recipe is Burgundian; the notes show how the same skeleton turns Moroccan or Northern Chinese.',
    difficulty: 4,
    serves: 6,
    timeMins: 240,
    techniqueIds: ['t-braising-meat', 't-searing', 't-umami-layering', 't-acid-balance'],
    ingredients: [
      { item: 'Beef chuck or boneless shin', qty: 1.5, unit: 'kg', prep: 'cut into 5 cm pieces, salted 1% by weight, 1 hour ahead' },
      { item: 'Olive oil', qty: 40, unit: 'ml' },
      { item: 'Brown onions', qty: 300, unit: 'g', prep: 'medium dice' },
      { item: 'Carrots', qty: 200, unit: 'g', prep: 'medium dice' },
      { item: 'Celery', qty: 150, unit: 'g', prep: 'medium dice' },
      { item: 'Tomato paste', qty: 40, unit: 'g' },
      { item: 'Red wine', qty: 300, unit: 'ml' },
      { item: 'Brown stock', qty: 700, unit: 'ml' },
      { item: 'Dried porcini', qty: 10, unit: 'g', prep: 'rinsed' },
      { item: 'Fish sauce', qty: 10, unit: 'ml' },
      { item: 'Bay leaves', qty: 2, unit: 'each' },
      { item: 'Thyme sprigs', qty: 4, unit: 'each' },
      { item: 'Red wine vinegar', qty: null, unit: 'to taste', prep: 'added by the teaspoon at the end' },
    ],
    method: [
      'Heat the oven to 150°C. Dry the salted beef thoroughly and sear in batches in the oil over high heat until deeply browned on all faces — do not crowd the pot. Taste nothing yet, but smell the fond: that is layer one.',
      'Lower the heat, add the onion, carrot and celery with a pinch of salt and brown them properly — colour here is flavour the braise inherits.',
      'Add the tomato paste and pincé: cook, stirring, until it darkens to rust and smells sweet, about 2 minutes.',
      'Deglaze with the wine, scraping every trace of fond, and reduce by half. Taste the liquid on a cooled spoon and write one line.',
      'Return the beef with any juices; add stock, porcini, fish sauce, bay and thyme. The liquid should come two-thirds up the meat. Bring to a bare simmer, cover, and braise in the oven 2.5–3 hours until a fork twists in freely.',
      'Taste the liquid at the 2-hour mark and log it. Lift the meat, strain the liquid, and reduce it hard in a wide pan until it coats a spoon.',
      'Return the meat to the sauce. Finish with red wine vinegar a teaspoon at a time, tasting between additions, until the richness turns vivid. Log the before-and-after.',
      'Rest 15 minutes and serve with something that provides contrast — potato purée and a sharp dressed-leaf salad is the classic answer.',
    ],
    chefNotes: [
      'Same skeleton, new coordinates: swap wine for 400 ml stock plus ras el hanout, dried apricots and preserved lemon for a Moroccan direction; or use Shaoxing wine, soy in place of fish sauce, star anise, ginger and a little rock sugar for a red-braised direction. The layering stages do not change — that is the lesson.',
      'This braise is better on day two, which makes it ideal for iteration: cook Friday, score Saturday, log both.',
    ],
    reinforces: ['Hard searing and fond management', 'Umami layering', 'Finishing with acid'],
  },
  {
    id: 'r-m13-03',
    title: 'The Contrast Plate: Roast Carrots, Whipped Feta, Hazelnut & Hot Honey',
    moduleId: 'm13',
    description:
      'A dish engineered around contrast: blistering-hot roast carrots over cold whipped feta, soft against crunch, sweet heat against salt and lactic tang. Cheap, fast, and a complete demonstration of the structural checklist.',
    difficulty: 2,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-roasting-veg', 't-flavour-pairing', 't-acid-balance', 't-garnish'],
    ingredients: [
      { item: 'Carrots', qty: 800, unit: 'g', prep: 'peeled, halved lengthwise' },
      { item: 'Olive oil', qty: 40, unit: 'ml' },
      { item: 'Ground cumin', qty: 3, unit: 'g' },
      { item: 'Feta', qty: 200, unit: 'g' },
      { item: 'Greek yoghurt', qty: 100, unit: 'g', prep: 'cold' },
      { item: 'Hazelnuts', qty: 50, unit: 'g', prep: 'toasted, roughly crushed' },
      { item: 'Honey', qty: 40, unit: 'g' },
      { item: 'Dried chilli flakes', qty: 2, unit: 'g' },
      { item: 'Lemon', qty: 1, unit: 'each' },
      { item: 'Mint leaves', qty: 10, unit: 'g', prep: 'torn at the last minute' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 220°C with a tray inside. Toss the carrots with oil, cumin and salt; roast cut-side down on the hot tray 25–30 minutes until deeply caramelised at the edges but still holding a little bite.',
      'Meanwhile blend the feta and yoghurt smooth with a squeeze of lemon. Taste — it should be sharp, salty and cold. Refrigerate until serving.',
      'Warm the honey with the chilli flakes in a small pan until loose and fragrant; hold warm.',
      'Toast the hazelnuts in the drying oven if not done ahead, and crush coarsely — rubble, not powder.',
      'Swipe the cold whipped feta thickly across each plate. Pile the hot carrots on top, deliberately off-centre.',
      'Spoon over the hot honey, scatter hazelnuts and mint, and finish with lemon juice and a last pinch of salt.',
      'Eat immediately and audit the contrasts as you do: hot/cold, soft/crunch, sweet/salt, rich/bright. Every one should register.',
    ],
    chefNotes: [
      'The window matters: hot carrots on cold feta is a five-minute experience. Plate at the last moment — this dish is your first lesson in serve-temperature engineering, which Module 14 builds on.',
      'Run the affinity ladder on it: carrot–cumin–feta swaps cleanly to pumpkin–sage–goat’s curd or beetroot–caraway–labneh. One-step variations, all cookable with the same method.',
    ],
    reinforces: ['High-heat vegetable roasting', 'Structural balance checklist', 'Temperature and texture contrast'],
  },
  {
    id: 'r-m13-04',
    title: 'Design Your Own Dish: The Brief',
    moduleId: 'm13',
    description:
      'The module’s centrepiece: an original dish designed by you against a fixed creative brief — one anchor protein or vegetable, one proven affinity varied by one step, four components maximum, techniques only from Modules 1–12. The method below is the design scaffold, illustrated throughout by a worked example: pork cutlet, cider-braised fennel, apple and sage.',
    difficulty: 4,
    serves: 4,
    timeMins: 120,
    techniqueIds: ['t-flavour-pairing', 't-recipe-writing', 't-tasting', 't-searing', 't-pan-sauce'],
    ingredients: [
      { item: 'Anchor: pork loin cutlets (worked example — substitute your own anchor)', qty: 4, unit: 'each', prep: 'about 250 g each, salted 1% one hour ahead' },
      { item: 'Co-star: fennel bulbs', qty: 2, unit: 'each', prep: 'cut into 2 cm wedges, fronds reserved' },
      { item: 'Co-star: firm apples', qty: 2, unit: 'each', prep: 'one in 12 mm dice, one shaved raw at service' },
      { item: 'Butter', qty: 60, unit: 'g' },
      { item: 'Dry cider', qty: 200, unit: 'ml' },
      { item: 'White chicken stock', qty: 150, unit: 'ml' },
      { item: 'Sage leaves', qty: 8, unit: 'each' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Write the brief before touching food. Fix the occasion, season, anchor and one constraint. Worked example: “autumn dinner for four, anchor pork, everything from one pan plus one pot, on the table in two hours.”',
      'Design on paper: pick one canonical affinity for your anchor and vary one element. Worked example: pork–apple is canon; fennel is the one-step variation, braised in cider to bridge the two. Run the structural checklist and cap the plate at four components.',
      'Write version 1.0 as a standardised card — estimated weights, temperatures, timings, critical points — before cooking. You will correct it against reality as you go; that is the point.',
      'Cook the supporting components first. Worked example: braise the fennel wedges and diced apple in 30 g butter, the cider and stock with a cartouche until tender and the liquid is a glaze, about 25 minutes.',
      'Cook the anchor with a banked technique, not a new one. Worked example: sear the cutlets hard in a heavy pan, baste with the remaining butter and sage, pull at 58°C core and rest 8 minutes.',
      'Build the sauce from what the cooking gives you. Worked example: deglaze the cutlet pan with a splash of cider, reduce with the fennel glaze and resting juices, finish with lemon.',
      'Plate against your written spec, adding the fresh element last. Worked example: fennel and apple braise down, sliced cutlet leaning on it, sauce spooned over the meat, shaved raw apple and fennel fronds on top.',
      'Taste and score the finished dish on all axes while it is hot, then correct the card to match what you actually did. This corrected card is your true version 1.0 — iteration starts from here in Lesson 4.',
    ],
    chefNotes: [
      'The worked example is scaffolding, not the assignment. Cook it once to feel the process, then run the same eight steps with your own brief — that dish is what the assessment examines.',
      'Guard the constraint hardest. Every dish that collapses in this module collapses because a fifth component or an unbanked technique crept in at step 4.',
    ],
    reinforces: ['Searing and pan sauces', 'Standardised recipe writing', 'Structured tasting'],
  },
]
