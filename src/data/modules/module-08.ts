import type { CourseModule, Recipe } from '../../types/content'

export const module08: CourseModule = {
  id: 'm08',
  number: 8,
  stage: 1,
  title: 'Pasta & Noodles',
  subtitle: 'Flour, eggs, water and judgement',
  description:
    'Pasta is two crafts in one module: making fresh egg dough from the 100 g flour to 1 egg ratio — kneaded, rested, rolled and shaped — and cooking any pasta, fresh or dried, so it marries its sauce through the starchy-water emulsion. By the end you will fill and seal ravioli, cut tagliatelle by hand, and finish dried pasta the way restaurants do: in the pan, in the sauce, glossy.',
  objectives: [
    'Mix and knead fresh egg dough at 100 g flour : 1 egg to a smooth, springy finish, and rest it fully',
    'Roll and laminate pasta sheets progressively to translucent thinness without tearing',
    'Cut and shape tagliatelle and pappardelle by hand, and form sealed, air-free ravioli',
    'Cook dried pasta in properly salted water to true al dente',
    'Finish pasta in its sauce with starchy cooking water, building the emulsion that makes sauce cling',
    'Match pasta shapes to sauce styles and explain the pairing logic',
  ],
  difficulty: 3,
  estimatedHours: 10,
  prerequisites: ['m03'],
  skillsUnlocked: [
    'Fresh egg pasta dough',
    'Rolling & laminating',
    'Hand-cut and filled shapes',
    'The starchy-water emulsion',
    'Shape-to-sauce matching',
  ],
  equipment: [
    'Pasta machine (hand-crank) or a long rolling pin and patience',
    'Bench scraper',
    'Digital scales',
    'Large pot (6 L+) for pasta water',
    'Wide sauté pan (28–30 cm) for finishing',
    'Tongs, spider and a ladle for pasta water',
    'Clean tea towels and a lightly floured tray',
    'Fluted pastry wheel or sharp knife for ravioli',
  ],
  ingredients: [
    "Plain flour and '00' flour (2 kg total)",
    'Free-range eggs (2 dozen — dough practice is egg-hungry)',
    'Good dried pasta: spaghetti and rigatoni (1 kg total)',
    'Parmesan (300 g block) and pecorino (150 g)',
    'Fresh ricotta (500 g), baby spinach (300 g)',
    'Tinned whole tomatoes (2 × 400 g), garlic, chilli flakes',
    'Unsalted butter (250 g), olive oil, sage, lemon',
  ],
  lessons: [
    {
      id: 'm08-l01',
      title: 'Fresh egg dough: the 100:1 ratio',
      summary: 'One egg per 100 g of flour, kneaded to silk and rested without exception — the dough that everything else in this module stands on.',
      theory: [
        {
          heading: 'The ratio, and what the flour is doing',
          body: 'Fresh egg pasta is 100 g of flour to one large egg (roughly 55–60 g in shell), scaled to as many portions as you need — 400 g flour and 4 eggs feeds four generously. \'00\' flour gives a silkier, more extensible sheet; plain flour works honestly and is what you should learn on. The eggs provide all the hydration, which is why dough feel varies day to day: flour, humidity and egg size all move, so the ratio is a starting point and your hands make the final call.\n\nMixing is simple: flour in a mound or bowl, well in the centre, eggs beaten in the well with a fork, flour drawn in gradually from the walls until a shaggy mass forms. Then the scraper gathers everything and kneading begins. Too tacky, dust with flour a teaspoon at a time; too crumbly to cohere, work it with a barely-wet hand. Adjust early — a rested dough cannot be corrected.',
        },
        {
          heading: 'Kneading builds it, resting makes it usable',
          body: 'Kneading — 8 to 10 minutes of pushing the dough away with the heel of your hand, folding it back and rotating a quarter turn — organises the flour proteins into a gluten network. The dough is done when it is smooth as a sea stone, springy, and bounces back from a firm thumb press within a couple of seconds. Under-kneaded dough tears at the rollers; there is no shortcut through this stage.\n\nThen the stage impatience always wants to skip: the rest. Wrap the ball tightly and leave it at room temperature for at least 30 minutes, better 60. Kneading leaves the gluten tight and elastic — roll it now and the sheet snaps back like a rubber band, thinning unevenly and fighting you at every pass. Rest relaxes the network so the dough holds whatever shape you roll. Rested dough keeps refrigerated for a day, though it will oxidise to a deeper yellow-grey; for best colour, use it the day it is made.',
        },
      ],
      demonstrations: [
        {
          title: 'Mixing and kneading a 2-egg batch',
          steps: [
            'Weigh 200 g plain flour onto a clean bench and shape a wide well in the centre — high walls, wide floor.',
            'Crack 2 eggs into the well with a pinch of fine salt and beat them with a fork without breaching the walls.',
            'Draw flour in from the inside walls a little at a time until the mixture is too thick for the fork.',
            'Scrape everything together with a bench scraper and press into a shaggy mass — it will look wrong; keep going.',
            'Knead 8–10 minutes: push away with the heel of the hand, fold back, quarter-turn. The dough transforms in the last 3 minutes.',
            'Test with a firm thumb press — it should spring back almost fully within 2 seconds.',
            'Wrap tightly and rest at room temperature a minimum of 30 minutes before rolling.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The rest proof',
          instructions: 'Make two identical one-egg doughs. Roll the first immediately after kneading, the second after a full 45-minute rest. Try to take each to the second-thinnest setting. Note how each behaves — snap-back, tearing, effort — and keep the note. You will never argue with the rest again.',
          repeatPractice: 'Gluten relaxation is a course-wide lever: the same logic governs shortcrust in Module 12 and rolled doughs in Stage 2. When any dough fights you, the answer is nearly always rest, not force.',
        },
        {
          title: 'Dough by feel',
          instructions: 'Make a one-egg dough three days in a row without re-reading the method. Day one you may check; days two and three run on your hands alone — judge tackiness, adjust with flour or wet hands, and test the thumb-spring. Three consecutive doughs at the same finish means the skill has moved into your hands.',
        },
      ],
      recipeIds: ['r-m08-01'],
      techniqueIds: ['t-pasta-dough', 't-mise-en-place'],
      troubleshooting: [
        {
          problem: 'Dough stays shaggy and dry, refusing to come together',
          cause: 'Small eggs or thirsty flour — the hydration is genuinely short.',
          fix: 'Wet one hand under the tap, shake it off and keep kneading; repeat once if needed. Water goes in by the half-teaspoon this way — never poured.',
        },
        {
          problem: 'Dough is sticky and smears on the bench',
          cause: 'Large eggs, humid day, or flour added too timidly during mixing.',
          fix: 'Dust with flour a teaspoon at a time and knead it through fully before judging again. It firms further during the rest, so stop one step before it feels perfect.',
        },
      ],
    },
    {
      id: 'm08-l02',
      title: 'Rolling, laminating and hand-cut shapes',
      summary: 'From rested ball to translucent sheet: laminating for strength, thinning one setting at a time, and cutting ribbons that cook evenly.',
      theory: [
        {
          heading: 'Laminate first, then thin patiently',
          body: 'Rolling starts with lamination: flatten a portion of rested dough, pass it through the widest setting, fold it in thirds like a letter, and pass it through again — three or four cycles. Lamination does two jobs: it works the sheet into a strong, even structure, and it squares the edges so the sheet stays a rectangle instead of wandering into an amoeba. A laminated sheet resists tearing at the thin settings; an unlaminated one shreds.\n\nThen thin progressively: one setting at a time, one pass per setting, never skipping. Each notch asks the gluten for a small stretch; jumping two notches asks for a big one, and the sheet answers by tearing or rippling. Dust lightly with flour only when the sheet turns tacky — excess flour toughens the surface and later clouds the cooking water.',
        },
        {
          heading: 'Thickness targets and cutting ribbons',
          body: 'Match thickness to purpose. Ribbons — tagliatelle, pappardelle — want the second-thinnest setting on most machines, around 1 mm, where the pasta has bite but no toughness. Filled pasta goes one step thinner, almost translucent, because the edges seal into a double layer. Hold a sheet up to the light: for filled pasta you should see the shadow of your fingers through it.\n\nTo hand-cut ribbons, flour the sheet lightly, fold it loosely into a flat roll about 8 cm wide, and cut cleanly across: 6–8 mm for tagliatelle, 2–3 cm for pappardelle. Shake the ribbons out immediately and either nest them on a floured tray, or hang them to dry slightly. Sheets and cut pasta dry fast — keep whatever you are not working with covered by a tea towel, always. Fresh pasta cooks in 2–3 minutes, so the sauce is finished before the pasta ever touches water.',
        },
      ],
      demonstrations: [
        {
          title: 'Rolling a sheet to ribbon thickness',
          steps: [
            'Cut a rested 2-egg dough in half; keep the unused half wrapped.',
            'Flatten the piece to a rough rectangle and pass through the widest setting.',
            'Laminate: fold in thirds, open end first through the rollers. Repeat 3–4 times until the sheet is smooth-edged and even.',
            'Thin one setting at a time, one pass each, supporting the sheet flat on the back of your hand as it lengthens.',
            'Stop at the second-thinnest setting. Dust lightly only if tacky.',
            'Halve the sheet when it grows unwieldy — two manageable sheets beat one dramatic one.',
            'Fold loosely, cut 6–8 mm ribbons, shake out at once and nest on a floured tray under a tea towel.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Sheet consistency drill',
          instructions: 'Roll four sheets from one 2-egg batch to the same setting. Lay them side by side and compare width, evenness and edge quality, then cut all four into tagliatelle and look for ribbons that match. Uneven sheets mean uneven ribbons mean uneven cooking — trace any fault back to the lamination stage.',
          repeatPractice: 'Rolling reappears with the laminated pastry of Module 12 — same progressive-thinning discipline, different dough. Roll a batch of pasta the week before you start that module as a warm-up.',
        },
      ],
      recipeIds: ['r-m08-01'],
      techniqueIds: ['t-rolling-laminating', 't-pasta-dough'],
      troubleshooting: [
        {
          problem: 'Sheet tears or develops holes at the thin settings',
          cause: 'Settings skipped, lamination rushed, or the dough was under-kneaded or under-rested.',
          fix: 'Fold the sheet back to a short rectangle, return to the widest setting, re-laminate twice, and walk down the settings one at a time. Persistent tearing means the dough itself needs 15 more minutes of rest.',
        },
        {
          problem: 'Cut ribbons stick together into a solid block',
          cause: 'Ribbons left folded after cutting, or the sheet was too moist going into the fold.',
          fix: 'Shake ribbons out the moment they are cut, dust with a little flour or fine semolina, and nest loosely. Once fused, cook the block as "maltagliati" and cut ribbons from a better-dusted sheet next time.',
        },
      ],
    },
    {
      id: 'm08-l03',
      title: 'Filled pasta',
      summary: 'Thin sheets, a filling that holds its shape, and seals with no air inside — ravioli built to survive the pot.',
      theory: [
        {
          heading: 'The filling comes first, and it must stand',
          body: 'Filled pasta fails at the filling more often than the pasta. The rule: a filling must hold its shape on a spoon turned sideways. Fresh ricotta carries too much whey straight from the tub — drain it in a sieve lined with a clean cloth for at least an hour, better overnight. Cooked spinach is wrung in a tea towel until it stops giving water, then chopped fine. Purées destined for filling get reduced in a pan until they mound. A wet filling turns the pasta around it to slime and bursts the seal in the water.\n\nSeason fillings assertively — a filling tastes duller through pasta than off the spoon — and always cook and taste a teaspoon of it first if it contains raw elements. A classic ricotta-spinach filling wants salt, black pepper, a rasp of nutmeg and enough parmesan that you can name it in a blind taste.',
        },
        {
          heading: 'Air is the enemy; the seal is the craft',
          body: 'Every air pocket sealed inside a raviolo expands in the pot and bursts the pasta open. The sequence that prevents it: pipe or spoon filling onto the bottom sheet at even intervals, lightly mist or brush the exposed pasta with water if it has dried, lay the top sheet loosely over, then — starting beside each mound of filling — press the sheets together working outward, driving air toward the edges before the seal closes. Cup your hands around each mound and press down and away.\n\nCut with a wheel or knife leaving at least a 1 cm sealed border, and pinch-check every edge. Cook filled pasta in water at a gentle boil only — around a simmer-plus, not the rolling boil dried pasta enjoys — for 3–4 minutes until the pasta at the thick sealed edges is tender. They are ready when they float and the edges taste cooked, and they are lifted out with a spider, never dumped through a colander.',
        },
      ],
      demonstrations: [
        {
          title: 'Ravioli, mound to pot',
          steps: [
            'Roll two sheets one setting thinner than ribbon thickness — you should see your hand shadow through them. Keep one covered.',
            'Pipe walnut-sized mounds of drained filling onto the bottom sheet, 4 cm apart, in a straight line.',
            'Brush the exposed pasta around the mounds very lightly with water.',
            'Lay the second sheet loosely on top without stretching it.',
            'Press around each mound from the filling outward, cupping with both hands to drive air to the edges before sealing.',
            'Cut between mounds with a fluted wheel, leaving a 1 cm border, and pinch every edge to confirm the seal.',
            'Rest on a semolina-dusted tray; cook within 2 hours (or freeze flat) at a gentle boil for 3–4 minutes and lift out with a spider.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Twelve survivors',
          instructions: 'Make a dozen ravioli and cook all twelve. Count how many arrive intact, and autopsy every failure: burst seam means air or a wet seal; blown corner means an air pocket; dissolved patch means a hole in the sheet. Repeat next session and beat your count. Twelve from twelve, twice running, is the pass.',
          repeatPractice: 'Filled pasta is a recurring test piece: it returns as a garnish for the consommé work of Stage 2 and in the capstone menus. Log your survivor count each time — it is the cleanest single measure of your sheet, filling and seal working together.',
        },
      ],
      recipeIds: ['r-m08-02'],
      techniqueIds: ['t-filled-pasta', 't-rolling-laminating', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Ravioli burst open in the water',
          cause: 'Air sealed inside, a wet filling weakening the pasta, or a hard rolling boil battering the seams.',
          fix: 'Drain the filling properly, press air outward before sealing, pinch-check every edge, and keep the water at a gentle boil — bubbles breaking lazily, not churning.',
        },
      ],
    },
    {
      id: 'm08-l04',
      title: 'Dried pasta and the marriage of pasta and sauce',
      summary: 'Salted water, true al dente, and the finishing move that defines good pasta cookery: pasta and sauce emulsified together in the pan.',
      theory: [
        {
          heading: 'Cooking dried pasta properly',
          body: 'Dried pasta is not the compromise; it is a different, excellent ingredient — extruded semolina dough whose firm bite fresh egg pasta cannot imitate. Cook it in abundant water, 1 litre per 100 g, salted at 1% (10 g per litre): that water should taste seasoned, and it is the only chance to season the pasta itself. A rolling boil and an immediate stir stop sticking; oil in the water does nothing except grease the pasta against its sauce.\n\nThe packet time is a ceiling, not an instruction. Taste from two minutes before it: true al dente shows a hairline of white at the core of the strand and real resistance at the tooth. And because the pasta will finish cooking in the sauce, you will actually pull it 1–2 minutes before even that — undercooked in the pot, perfect on the plate.',
        },
        {
          heading: 'The starchy-water emulsion',
          body: 'The move that separates good pasta from sauced-noodles: marry them in the pan. Before draining, ladle out a cup of the cooking water — cloudy with dissolved starch. Transfer the under-cooked pasta into the pan of sauce over medium-high heat, add a splash of that water, and toss or stir vigorously for a minute or two. The starch emulsifies the sauce\'s fat with the water into a glossy coating that grips every surface of the pasta; this is the same starch-and-agitation logic as risotto, and it is why the water is called liquid gold.\n\nProportions follow the principle of coat, not drown: when the pasta is lifted, sauce should come with it, and a lightly glazed pan bottom should remain — no puddle. Cheese goes in off the heat so it melts into the emulsion instead of seizing into strings. Shape-matching is the last piece of judgement: long strands take clinging, emulsified sauces (aglio e olio, carbonara); tubes and ridged shapes trap chunky sauces (rigatoni with sugo); wide fresh ribbons and filled pasta want butter and cream-based coats that lie across them.',
        },
      ],
      demonstrations: [
        {
          title: 'Finishing dried pasta in sauce',
          steps: [
            'Boil 4 L of water with 40 g salt; taste it — properly seasoned, like a mild broth.',
            'Have the sauce finished and waiting in a wide pan before the pasta goes in — the pasta never waits for the sauce.',
            'Cook 400 g pasta at a rolling boil, stirring in the first minute, and taste from 3 minutes before the packet time.',
            'Ladle out 250 ml of cooking water just before the pasta reaches 2 minutes short of al dente.',
            'Transfer the pasta straight into the sauce with tongs or a spider — dripping wet is good.',
            'Add a splash of pasta water and toss hard over medium-high heat for 1–2 minutes until the sauce turns glossy and clings.',
            'Off the heat: cheese, a final toss, taste, adjust. Plate immediately with a twist of the tongs.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Emulsion or puddle',
          instructions: 'Cook one batch of spaghetti aglio e olio finishing it in the pan with starchy water, and a second batch where you simply drain the pasta and pour the same oil over it in the bowl. Photograph both plates and taste side by side. The first clings and glosses; the second slides and pools. Name what the water did — in your own words, one sentence.',
          repeatPractice: 'Finish every pasta for the rest of the course — and your life — in the pan. Re-drill deliberately in Module 13 where the emulsion logic extends to butter sauces and glazes.',
        },
      ],
      recipeIds: ['r-m08-03', 'r-m08-04'],
      techniqueIds: ['t-pasta-emulsion', 't-seasoning-salt', 't-tomato-sauce', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Sauce slides off the pasta and pools on the plate',
          cause: 'Pasta drained bone-dry and sauced in a bowl — no starch, no agitation, no emulsion.',
          fix: 'Keep a cup of cooking water, finish pasta and sauce together in the pan over heat, and toss until glossy before plating.',
        },
        {
          problem: 'Finished dish is too salty',
          cause: 'Heavily reduced pasta water concentrated its salt in the pan, on top of a fully seasoned sauce and salty cheese.',
          fix: 'Season the sauce short when a long pan-finish is coming, and remember pecorino and parmesan are seasoning too. Taste after the toss, before any final salt.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Rolling dough that has not rested',
      cause: 'Impatience — the dough looks ready the moment kneading ends.',
      fix: 'It is elastic, not extensible. Thirty minutes wrapped at room temperature minimum; use the time to make the sauce and set the station.',
    },
    {
      problem: 'Under-salting the pasta water',
      cause: 'A pinch into 4 litres feels generous but measures nearly nothing.',
      fix: 'Weigh it once — 10 g per litre — and taste the water. After a week of weighing, your hand will know the throw.',
    },
    {
      problem: 'Draining pasta through a colander and discarding every drop of water',
      cause: 'Habit, and the sink is right there.',
      fix: 'Ladle out a cup of water first, and lift the pasta into the sauce with tongs or a spider instead. The colander is for salad leaves.',
    },
    {
      problem: 'Drowning good pasta in too much sauce',
      cause: 'Generosity confused with quality — the sauce reads as the point of the dish.',
      fix: 'Coat, not drown: the pasta is the dish and the sauce is its seasoning. If a puddle remains when the bowl is finished, there was too much.',
    },
  ],
  assessment: {
    id: 'as-m08',
    moduleId: 'm08',
    title: 'The Pasta Bench',
    brief:
      'In one 2.5-hour session, working from 300 g of flour and 3 eggs: (1) make, knead and rest a fresh egg dough; (2) roll sheets and hand-cut tagliatelle, served with burnt butter and sage; (3) fill and seal at least 10 ravioli, cooking all of them; (4) separately, cook dried spaghetti aglio e olio finished in the pan with the starchy-water emulsion. Each dish is tasted as it is finished — the session tests dough craft and saucing craft as one continuous service.',
    rubric: [
      { criterion: 'Dough quality', maxScore: 8, guidance: '7–8: smooth, springy, correctly hydrated, fully rested. 4–6: workable with flaws. Below 4: tearing or sticky at the rollers.' },
      { criterion: 'Sheet & ribbon work', maxScore: 8, guidance: 'Even, translucent-thin sheets; laminated edges; ribbons of uniform width that cook evenly.' },
      { criterion: 'Filled pasta integrity', maxScore: 8, guidance: '8: every raviolo intact after cooking, well-sealed, no air pockets, filling seasoned and shape-holding. Deduct 1 per burst piece.' },
      { criterion: 'The emulsion finish', maxScore: 10, guidance: '9–10: dried pasta pulled early, finished in the pan, sauce glossy and clinging with no pooling; correctly seasoned. Deduct for pooled oil or naked strands.' },
      { criterion: 'Timing & station discipline', maxScore: 6, guidance: 'Sauces ready before pasta hits water; dishes served at once at temperature; station reset between dishes.' },
    ],
    passScore: 28,
    evidence: 'Four photos: the rested dough ball cut to show the crumb, a sheet held up to the light, the sealed ravioli before cooking, and the finished aglio e olio showing the glossy cling.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'The rest proof, twelve-survivors and emulsion-or-puddle exercises done with notes and photos kept',
    'All four module recipes cooked, including one full ravioli batch',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module08Recipes: Recipe[] = [
  {
    id: 'r-m08-01',
    title: 'Hand-Cut Tagliatelle, Burnt Butter & Sage',
    moduleId: 'm08',
    description:
      'The purest test of fresh pasta: your own tagliatelle in a nutty burnt-butter sauce built in the time the pasta takes to cook, married with a splash of the cooking water. Nowhere for the dough to hide.',
    difficulty: 3,
    serves: 4,
    timeMins: 90,
    techniqueIds: ['t-pasta-dough', 't-rolling-laminating', 't-pasta-emulsion', 't-seasoning-salt'],
    ingredients: [
      { item: 'Plain flour', qty: 400, unit: 'g' },
      { item: 'Eggs', qty: 4, unit: 'each' },
      { item: 'Fine salt (dough)', qty: 2, unit: 'g' },
      { item: 'Unsalted butter', qty: 120, unit: 'g' },
      { item: 'Sage leaves', qty: 16, unit: 'each' },
      { item: 'Parmesan', qty: 60, unit: 'g', prep: 'finely grated' },
      { item: 'Lemon', qty: 0.5, unit: 'each', prep: 'juice only' },
      { item: 'Fine salt (pasta water)', qty: 10, unit: 'g', prep: 'per litre' },
    ],
    method: [
      'Make the dough: 400 g flour, well in the centre, 4 eggs and the salt beaten in, drawn together and kneaded 8–10 minutes to a smooth, springy ball. Wrap and rest 45 minutes.',
      'Quarter the dough. Working one piece at a time (rest covered), laminate on the widest setting with 3–4 letter-folds, then thin one setting at a time to the second-thinnest.',
      'Flour each sheet lightly, fold loosely, and cut 6–8 mm ribbons. Shake out immediately and nest on a floured tray under a tea towel.',
      'Bring 4 L of water to the boil with 40 g salt. Warm four bowls.',
      'Start the sauce: melt the butter in a wide pan over medium heat with the sage. Cook, swirling, until the milk solids turn hazelnut and the sage crisps — about 3 minutes. Pull the pan off the heat.',
      'Drop the tagliatelle into the boiling water and stir once. Fresh pasta cooks in 2–3 minutes — taste a strand at 2.',
      'Lift the pasta into the butter with tongs, add a small ladle of cooking water, and toss hard over medium heat until the sauce turns glossy and coats every ribbon.',
      'Off the heat: parmesan, a squeeze of lemon, a final toss. Taste, adjust the salt, and serve immediately in the warm bowls.',
    ],
    chefNotes: [
      'Burnt butter keeps cooking in the pan — pulling it at hazelnut and finishing with the pasta water arrests it exactly where you want it. Black flecks mean start again; bitterness does not toss out.',
      'Ribbons that cook unevenly are telling on your sheets, not the pot. Roll the whole batch to the same setting and cut against a consistent fold width.',
    ],
    reinforces: ['Salting pasta water by weight', 'Mise en place — sauce ready before the pasta cooks', 'Tasting for doneness by the strand'],
  },
  {
    id: 'r-m08-02',
    title: 'Ricotta & Spinach Ravioli, Sage Butter',
    moduleId: 'm08',
    description:
      'The classic filled pasta: drained ricotta, wrung spinach, parmesan and nutmeg sealed into thin sheets with no air inside, poached gently and glossed with sage butter. Your survivor count is the score.',
    difficulty: 3,
    serves: 4,
    timeMins: 120,
    techniqueIds: ['t-filled-pasta', 't-pasta-dough', 't-rolling-laminating', 't-tasting'],
    ingredients: [
      { item: 'Plain flour', qty: 300, unit: 'g' },
      { item: 'Eggs', qty: 3, unit: 'each' },
      { item: 'Fresh ricotta', qty: 400, unit: 'g', prep: 'drained in a cloth-lined sieve 1 hour minimum' },
      { item: 'Baby spinach', qty: 200, unit: 'g' },
      { item: 'Parmesan', qty: 70, unit: 'g', prep: 'finely grated, plus extra to serve' },
      { item: 'Nutmeg', qty: null, unit: 'to taste', prep: 'freshly grated' },
      { item: 'Egg yolk', qty: 1, unit: 'each', prep: 'for the filling' },
      { item: 'Unsalted butter', qty: 100, unit: 'g' },
      { item: 'Sage leaves', qty: 12, unit: 'each' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Semolina', qty: 30, unit: 'g', prep: 'for dusting the tray' },
    ],
    method: [
      'Make and rest the dough as always: flour, eggs, knead 8–10 minutes, wrap, 45 minutes. The rest window is your filling window.',
      'Wilt the spinach in a dry pan over high heat 1–2 minutes, cool, then wring it in a clean tea towel until it stops giving water. Chop fine.',
      'Beat the drained ricotta with the spinach, parmesan, yolk, a firm pinch of salt and a rasp of nutmeg. Taste it — it should be assertively seasoned, since pasta mutes everything. It must hold its shape on a sideways spoon.',
      'Roll sheets one setting thinner than ribbon thickness — hand-shadow translucent. Work two sheets at a time, the rest covered.',
      'Pipe or spoon walnut-sized mounds 4 cm apart on one sheet. Brush the exposed pasta lightly with water, lay the second sheet over loosely, and press from each mound outward, driving air to the edges before sealing.',
      'Cut with a fluted wheel leaving a 1 cm border; pinch-check every edge. Rest on the semolina-dusted tray.',
      'Cook in well-salted water at a gentle boil, 3–4 minutes, until the sealed edges taste tender. Meanwhile melt the butter with the sage to hazelnut in a wide pan.',
      'Lift the ravioli into the butter with a spider, add a spoonful of pasta water, and swirl gently until glossy — no vigorous tossing; these are parcels, not ribbons.',
      'Plate six per person, spoon over the butter and crisp sage, finish with parmesan. Taste one first — always.',
    ],
    chefNotes: [
      'Every failure teaches: a burst seam is air or a wet seal, a dissolved patch is a hole in the sheet, a bland bite is a timid filling. Autopsy, note, improve.',
      'Freeze spares flat on the semolina tray, then bag once solid. Cook from frozen, adding about a minute — a personal stash of restaurant dinners for the price of ricotta.',
    ],
    reinforces: ['Seasoning and tasting a filling before committing', 'Sheet consistency under time pressure', 'Gentle-heat control from the egg work of Module 3'],
  },
  {
    id: 'r-m08-03',
    title: 'Spaghetti Aglio e Olio',
    moduleId: 'm08',
    description:
      'Garlic, oil, chilli, parsley and starchy water — the definitive lesson in the pasta emulsion, because the sauce is nothing but the emulsion. Four ingredients, ten minutes, and absolutely no hiding place.',
    difficulty: 2,
    serves: 4,
    timeMins: 20,
    techniqueIds: ['t-pasta-emulsion', 't-seasoning-salt', 't-mince', 't-tasting'],
    ingredients: [
      { item: 'Dried spaghetti', qty: 400, unit: 'g' },
      { item: 'Olive oil', qty: 80, unit: 'ml' },
      { item: 'Garlic', qty: 6, unit: 'each', prep: 'sliced thin and even' },
      { item: 'Dried chilli flakes', qty: 2, unit: 'g' },
      { item: 'Flat-leaf parsley', qty: 20, unit: 'g', prep: 'finely chopped' },
      { item: 'Fine salt (pasta water)', qty: 10, unit: 'g', prep: 'per litre' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Boil 4 L of water with 40 g salt. Mise complete before the pasta goes in: garlic sliced, parsley chopped, wide pan out — this dish outruns any mid-flight prep.',
      'Drop the spaghetti and stir for the first 30 seconds. Note the packet time; you will pull the pasta 2 minutes before it.',
      'Meanwhile, warm the oil and garlic together in the wide pan over medium-low, starting from cold. Cook gently until the garlic is pale gold at the edges — 3–4 minutes. Add the chilli flakes and pull the pan off the heat; garlic goes from gold to bitter in seconds.',
      'Ladle out 300 ml of cooking water just before pulling the pasta.',
      'Transfer the spaghetti to the pan with tongs, dripping wet, over medium-high heat.',
      'Add 100 ml of the starchy water and toss hard — big lifting motions — for a full 1–2 minutes. Watch the transformation: loose oil and water tightening into a pale, glossy sauce that clings to every strand. Add more water in splashes if it tightens too far.',
      'Off the heat: parsley, a final toss, taste. Adjust salt and serve immediately in warm bowls — the emulsion holds for minutes, not hours.',
    ],
    chefNotes: [
      'Starting garlic in cold oil gives you a wide window; dropping it into hot oil gives you seconds. Even slices matter — thin edges burn while thick centres stay raw, so this is a knife drill wearing a dinner costume.',
      'No cheese in the classic — the emulsion is the richness. If the sauce ever breaks back into oil, a splash of water and hard tossing off the heat brings it home.',
    ],
    reinforces: ['Fine, even slicing at speed', 'Mise en place for fast dishes', 'Reading an emulsion — the same eyes as Module 5 sauces'],
  },
  {
    id: 'r-m08-04',
    title: 'Rigatoni with 20-Minute Sugo',
    moduleId: 'm08',
    description:
      'A bright tomato sugo from tinned tomatoes, and ridged tubes finished in it the proper way — undercooked, transferred, and tossed with starchy water until sauce fills every ridge and hollow. Shape-to-sauce matching, demonstrated on a plate.',
    difficulty: 2,
    serves: 4,
    timeMins: 35,
    techniqueIds: ['t-tomato-sauce', 't-pasta-emulsion', 't-seasoning-salt', 't-tasting'],
    ingredients: [
      { item: 'Dried rigatoni', qty: 400, unit: 'g' },
      { item: 'Tinned whole tomatoes', qty: 800, unit: 'g', prep: 'crushed by hand' },
      { item: 'Garlic', qty: 4, unit: 'each', prep: 'sliced thin' },
      { item: 'Olive oil', qty: 60, unit: 'ml' },
      { item: 'Basil', qty: 15, unit: 'g', prep: 'leaves picked, stems reserved' },
      { item: 'Parmesan or pecorino', qty: 60, unit: 'g', prep: 'finely grated' },
      { item: 'Fine salt (pasta water)', qty: 10, unit: 'g', prep: 'per litre' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Caster sugar', qty: null, unit: 'to taste', prep: 'only if the tomatoes are genuinely sharp' },
    ],
    method: [
      'Start the sugo: warm the oil and garlic in a wide pan over medium heat until fragrant and just turning gold, about 2 minutes.',
      'Add the hand-crushed tomatoes, the basil stems, and a firm pinch of salt — stand back, it spits. Simmer briskly 15–20 minutes, stirring occasionally, until it thickens enough that a spoon dragged through leaves a briefly clear trail.',
      'Meanwhile boil 4 L of water with 40 g salt and cook the rigatoni, pulling it 2 minutes before the packet time. Ladle out 250 ml of cooking water first.',
      'Fish the basil stems from the sauce. Taste: salt first, and only if it is genuinely sharp, a small pinch of sugar. Most decent tinned tomatoes need none.',
      'Transfer the rigatoni into the sauce with a spider, add a splash of the starchy water, and toss over medium-high heat for 1–2 minutes until each tube is coated inside and out and the sauce clings glossily.',
      'Off the heat: torn basil leaves, half the cheese, a final toss. The pan bottom should be lightly glazed, not puddled.',
      'Taste, adjust, and serve in warm bowls with the remaining cheese over the top.',
    ],
    chefNotes: [
      'Ridged tubes exist to trap exactly this weight of sauce — try the same sugo on spaghetti once and notice how much stays behind in the pan. Shape-matching is the cheapest upgrade in pasta cookery.',
      'The sugo scales and freezes beautifully: triple it, freeze flat in bags, and Tuesday dinner becomes a ten-minute assembly with a better sauce than any jar at the shops.',
    ],
    reinforces: ['Tomato sauce fundamentals from Module 5', 'Layered salting with a final adjustment', 'The transfer-and-toss finish as default habit'],
  },
]
