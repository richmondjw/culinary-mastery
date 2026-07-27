import type { CourseModule, Recipe } from '../../types/content'

export const module11: CourseModule = {
  id: 'm11',
  number: 11,
  stage: 2,
  title: 'Meat: Beef, Lamb & Pork',
  subtitle: 'Muscle, heat and patience',
  description:
    'Meat cookery is applied anatomy: every cut is a muscle with a work history, and that history dictates the method. This module teaches you to read cuts, sear for genuine Maillard crust, reverse-sear thick cuts edge to edge, braise the tough cuts to silk, manage a live fire, and judge doneness with a probe first and your thumb second. Rest and carryover stop being afterthoughts and become part of the recipe.',
  objectives: [
    'Match any cut of beef, lamb or pork to the right method by reading how hard the muscle worked',
    'Sear to a true Maillard crust — dry surface, hard heat, no fiddling',
    'Reverse-sear cuts over 4 cm for edge-to-edge doneness',
    'Braise collagen-rich cuts to fork-tender and build the sauce from the braising liquid',
    'Run a two-zone fire, and call doneness by probe and by touch on the same cut',
  ],
  difficulty: 4,
  estimatedHours: 12,
  prerequisites: ['m05'],
  skillsUnlocked: [
    'Cut selection & muscle reading',
    'Hard searing & Maillard control',
    'Reverse sear',
    'Braising',
    'Fire management & grilling',
  ],
  equipment: [
    'Heavy cast-iron or carbon-steel pan (26–30 cm)',
    'Digital probe thermometer (fast-read)',
    'Enamelled cast-iron casserole with lid (4–6 L)',
    'Wire rack over a tray',
    'Charcoal barbecue or heavy grill pan',
    'Long tongs and a chimney starter (if charcoal)',
    'Butcher’s twine',
    'Carving board with a moat',
  ],
  ingredients: [
    '2 thick beef steaks (scotch fillet or sirloin, 3 cm, about 350 g each)',
    '1 thick-cut beef rump cap or sirloin roast (1–1.2 kg, 5 cm+)',
    '1.5 kg beef chuck or lamb shoulder, bone-in where possible',
    '4 pork loin cutlets or 1 butterflied lamb leg for the grill',
    'Beef or brown chicken stock (ideally your own, 1 L)',
    'Full-bodied red wine (one bottle, drinkable — cooking wine is a myth)',
    'Onions, carrots, celery, garlic for mirepoix',
    'Fine salt, flaky salt, black peppercorns, rosemary, thyme',
  ],
  lessons: [
    {
      id: 'm11-l01',
      title: 'Reading the animal: cuts, muscle science and buying',
      summary: 'Working muscles versus idle ones — the single idea that tells you how to cook every cut in the shop.',
      theory: [
        {
          heading: 'Work history decides the method',
          body: 'Every cut answers one question: how hard did this muscle work? Muscles that worked for a living — shoulder (chuck), shin, cheek, brisket, leg — are laced with collagen and connective tissue. Cooked fast they are shoe leather; cooked long and moist, that collagen melts into gelatine and they become the richest eating on the animal. Muscles that mostly stood by — the loin along the back (sirloin, fillet, rib eye, pork loin, lamb loin) — are tender already and want fast, hot, brief cooking, then to be left alone.\n\nThe rule compresses to this: hard-working cuts, low and slow with liquid; idle cuts, hot and fast with rest. Price follows tenderness, not flavour — chuck at a third the price of fillet has three times its flavour, if you give it the hours. Learning to buy is learning to see the work history in the meat: colour, grain coarseness, fat seams and connective silver all tell the story.',
        },
        {
          heading: 'Fat, grain and the butcher',
          body: 'Fat carries flavour and insurance: intramuscular fat (marbling) bastes the meat from inside as it renders, so marbled cuts forgive an extra minute. Surface fat renders and crisps; hard seam fat between muscles mostly does not, and gets trimmed or slow-cooked. Grain — the direction the muscle fibres run — matters at the board: slicing across the grain shortens every fibre to a few millimetres and multiplies tenderness for free. Find the grain before you cook, because a crust hides it after.\n\nUse a real butcher and use plain words: what the cut is, how you plan to cook it, how many you feed. Ask them to trim, roll, butterfly or bone out — it is free skill on your side of the counter. Buy thickness, not weight: two people eat better sharing one 4 cm steak than eating two thin ones, because thin steaks cannot have both crust and a pink centre.',
        },
      ],
      demonstrations: [
        {
          title: 'Reading a cut before you cook it',
          steps: [
            'Lay the cut on the board and name the muscle group: back (idle) or shoulder/leg/shin (working). This alone chooses fast or slow.',
            'Find the grain direction and note where you will slice across it later — mark it mentally before any crust forms.',
            'Assess the fat: marbling stays, surface fat gets scored or trimmed to 5 mm, hard seam fat and silverskin come off.',
            'Press the raw meat with a finger and register the softness — this is the raw end of the touch scale you are about to build.',
            'Weigh it, calculate 1% salt, and season now if cooking is more than 40 minutes away — the Module 10 brining logic applies to every animal.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The butcher’s interview',
          instructions: 'Visit a butcher and buy for this module’s four recipes in one conversation: a braising cut, a thick roasting cut, steaks and a grilling cut. For each, ask one question you cannot answer yourself (where the cut sits on the animal, what they would cook it like). Write down the price per kilogram of the cheapest and dearest cuts you bought and what the difference buys you.',
          repeatPractice: 'Repeat the interview whenever a new animal or cut enters your cooking — and in Module 13 you will cost these same cuts per portion, so keep the receipts.',
        },
      ],
      recipeIds: [],
      techniqueIds: ['t-doneness', 't-seasoning-salt', 't-mise-en-place'],
      troubleshooting: [
        {
          problem: 'An expensive cut turned out tough',
          cause: 'Method mismatched to muscle — usually a working cut cooked fast, or an idle cut sliced with the grain.',
          fix: 'Name the muscle before choosing the method, and mark the grain before searing. Tough-after-fast means it needed hours; chewy-in-strings means it was sliced the wrong way.',
        },
        {
          problem: 'Steaks look grey and weep liquid in the pan',
          cause: 'Supermarket-wet surface, a crowded pan, or meat straight from the fridge dropping the pan temperature.',
          fix: 'Dry the surface aggressively, cook one or two pieces at a time in a properly heated pan, and let thick cuts lose their fridge chill for 30–45 minutes first.',
        },
      ],
    },
    {
      id: 'm11-l02',
      title: 'The sear and the reverse sear',
      summary: 'Maillard chemistry done honestly, and the low-then-blast method that gives thick cuts edge-to-edge blush.',
      theory: [
        {
          heading: 'Maillard needs dry, hot and still',
          body: 'Browning is chemistry with preconditions. The Maillard reaction — the cascade that builds hundreds of roasted, savoury flavour compounds — only gets going around 140°C, and a wet surface is capped at 100°C until the water boils off. So the sequence is fixed: dry the meat until paper drags on it, salt it, film a heavy pan with a high-smoke-point oil, and get the pan genuinely hot before the meat touches it. Then leave it alone. Meat releases when the crust is built; prying early tears the crust you came for.\n\n“Sealing in the juices” is folklore — a crust is flavour, not a waterproof membrane. What actually protects juiciness is total heat exposure, which is why the professional pattern is sear hard, cook gentle: get the crust fast, then bring the core to temperature with lower heat, basting butter, an oven, or the reverse of that order.',
        },
        {
          heading: 'Reverse sear: solve the gradient',
          body: 'A thick cut cooked hot from the start develops a doneness gradient — grey band, beige band, and finally the pink you wanted, in the middle. The reverse sear deletes the gradient by splitting the job: first a 100–120°C oven brings the whole cut slowly and evenly to 8–10°C under target core temperature (for medium-rare beef, pull from the oven at 46–48°C); then a short rest; then a violent sear — screaming pan or hottest oven — for the crust, a minute or two a side. The slow phase also dries the surface, so the final sear browns faster than a raw sear ever could.\n\nUse it for anything over 4 cm: thick steaks, rump caps, racks, small roasts. Under 4 cm there is not enough interior to protect — thin steaks just get one hard fast sear and an early pull. Either way carryover is part of the recipe: core temperature climbs 3–8°C during the rest, more for bigger cuts, so pull early and let physics finish the cooking.',
        },
      ],
      demonstrations: [
        {
          title: 'Classic hard sear, 3 cm steak',
          steps: [
            'Steak dried hard, salted, at room temperature 30–45 minutes. Fast-read probe on the bench. Windows open — this makes smoke.',
            'Heat a heavy pan until a drop of water skates and vanishes; add 15 ml of neutral oil and swirl.',
            'Lay the steak in away from you and do not touch it for 2 minutes. Check the crust: mahogany, not tan — give it another minute if pale.',
            'Flip and repeat. Then stand it on its fat edge with tongs for 30–60 seconds to render and crisp the rim.',
            'From here, flip every 30 seconds, probing between flips, until the core reads 50–52°C for medium-rare after carryover.',
            'Rest on a rack 5–6 minutes — half the cooking time — then slice across the grain and finish with flaky salt.',
          ],
        },
        {
          title: 'Reverse sear, 5 cm rump cap',
          steps: [
            'Salt the meat at 1% the day before if possible; rest it uncovered on a rack in the fridge — brine and dry surface in one move.',
            'Oven at 110°C, meat on a rack over a tray, probe in the centre. Cook to 46–48°C core — roughly 45–75 minutes depending on the cut.',
            'Rest 10 minutes uncovered while a heavy pan gets brutally hot.',
            'Sear 60–90 seconds a side, pressing gently for full contact, plus the fat cap until it crackles.',
            'Rest 5 minutes, slice across the grain, and check the cut face: an even rose edge to edge is the pass mark.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Gradient autopsy',
          instructions: 'Cook two steaks from the same cut, same thickness: one hard-seared start to finish, one reverse-seared. Slice both through the middle, photograph the cut faces side by side, and compare the width of the grey band. Taste for crust depth as well — note which method browned better and why (hint: surface dryness).',
          repeatPractice: 'Re-run the comparison on a pork loin or lamb rack later in the stage. Choosing sear-first or reverse by thickness should become automatic, and Module 14’s roasts assume it.',
        },
        {
          title: 'Touch calibration',
          instructions: 'Every time you probe a steak in this module, press it with a finger first and guess the temperature before reading the probe. Log guess versus reading for ten cooks. You are building the touch test on top of the probe, not instead of it.',
        },
      ],
      recipeIds: ['r-m11-01', 'r-m11-02'],
      techniqueIds: ['t-searing', 't-reverse-sear', 't-resting', 't-doneness', 't-pan-sauce'],
      troubleshooting: [
        {
          problem: 'Crust is pale grey and the pan is full of liquid',
          cause: 'Wet meat, cold pan or a crowded pan — the meat is boiling in its own juices.',
          fix: 'Dry harder, heat longer, cook fewer pieces. The pan must recover its temperature within seconds of the meat landing; if it hisses weakly, it was never hot enough.',
        },
        {
          problem: 'Perfect crust, overshot centre',
          cause: 'Doneness judged at pull time without allowing for carryover.',
          fix: 'Pull 3–8°C under target — small steaks at the low end of that band, roasts at the high end — and respect the rest. The probe reading you serve at is the one after resting, not before.',
        },
      ],
    },
    {
      id: 'm11-l03',
      title: 'The braise: collagen into silk',
      summary: 'Sear, mirepoix, liquid halfway, low oven, patience — and a finished sauce from the braising liquid itself.',
      theory: [
        {
          heading: 'The transformation and its price',
          body: 'Braising converts collagen into gelatine, and the exchange rate is time at temperature: the conversion runs meaningfully from about 70°C and needs hours, not minutes. The method is a fixed sequence — brown the meat hard in a heavy pot, brown the mirepoix in the same fat, add tomato paste and cook it out, deglaze with wine and reduce, return the meat with liquid halfway up its sides, and slide the covered pot into a 150–160°C oven for 2.5–4 hours. The braise inherits every bit of flavour you build before the lid goes on, which is why pale meat makes a pale braise.\n\nDone is a texture, not a time: a fork should twist in the meat with no resistance. There is a stall in the middle of every braise where the meat seizes tight and seems ruined — push through it; tough-at-two-hours usually means tender-at-three. And braised meat left to cool in its liquid reabsorbs moisture and seasoning, which is why every braise is genuinely better the next day.',
        },
        {
          heading: 'The liquid is the sauce',
          body: 'A braise makes its own sauce, but only if you finish it. Once the meat is tender, lift it out and strain the liquid, pressing the mirepoix gently before discarding it — it has given everything it has. Skim the fat properly: ladle it off hot, or better, refrigerate overnight and lift the set cap off cold. Then reduce the skimmed liquid hard in a wide pan until it coats a spoon and tastes concentrated — this is Module 5’s reduction discipline with gelatine doing the thickening, no roux needed.\n\nSeason only after reducing: a liquid that reduces by half doubles its salt, and stock plus wine plus meat juices carry more sodium than they admit. Taste on a cooled spoon, adjust with salt and then brightness — a few drops of vinegar wake up a braise that tastes heavy — and return the meat to the sauce to reheat gently for service.',
        },
      ],
      demonstrations: [
        {
          title: 'The braise sequence',
          steps: [
            'Cut chuck into 5 cm pieces — big; they shrink — dry them hard, salt, and brown in batches in a filmed casserole until every face is mahogany. Out to a tray.',
            'Brown a medium-diced mirepoix in the same fat, 8–10 minutes, then stir in 30 g of tomato paste and cook until it darkens a shade.',
            'Deglaze with 300 ml of red wine, scraping the fond, and reduce by half.',
            'Return the meat and its juices; add hot stock to halfway up the meat, a thyme-and-bay bundle, and bring to a bare simmer.',
            'Lid on (or a cartouche for a more reduced result) and into a 150°C oven, 2.5–4 hours, checking at 2.5 with the fork-twist test.',
            'Strain, skim, reduce the liquid to a spoon-coating sauce, season, then reunite meat and sauce.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The next-day braise',
          instructions: 'Cook r-m11-03 a full day ahead. Refrigerate the meat in its liquid overnight, lift the fat cap off cold, and finish the sauce on day two. Taste a piece on day one (cook’s privilege) and again on day two and write down exactly what changed — texture, seasoning depth, how the sauce feels on the palate.',
          repeatPractice: 'Cook-ahead braising is the backbone of stress-free entertaining, and Module 14 schedules it deliberately. From now on, default every braise to the day before it is needed.',
        },
      ],
      recipeIds: ['r-m11-03'],
      techniqueIds: ['t-braising-meat', 't-reduction', 't-umami-layering', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Meat is dry and stringy even though it cooked in liquid',
          cause: 'Wrong cut (too lean — liquid does not protect an idle muscle) or the pot boiled instead of barely simmering.',
          fix: 'Braise working cuts with visible collagen — chuck, shin, shoulder, cheek — and keep the oven at 150–160°C so the liquid shivers. If the lid rattles, it is boiling.',
        },
        {
          problem: 'The sauce is thin and flat despite hours of cooking',
          cause: 'Under-browned meat at the start and an unreduced, unseasoned liquid at the end.',
          fix: 'Brown harder in batches next time; this time, strain and reduce the liquid by half or more before seasoning, and finish with a few drops of vinegar to lift it.',
        },
      ],
    },
    {
      id: 'm11-l04',
      title: 'Fire: grilling and the two-zone method',
      summary: 'Building and reading a live fire, cooking between zones, and treating char as a seasoning with a dosage.',
      theory: [
        {
          heading: 'Two zones or no control',
          body: 'A grill with one temperature is a trap. Bank your coals to one side — or run one burner high and one low — and you have a hot zone for crust and a safe zone for everything else: gentle cooking, holding, and escaping flare-ups. The cooking happens in the movement between them. Test the hot zone with your palm at grate height: 2–3 seconds of tolerance is searing heat, 5–6 is moderate. Charcoal is ready when the flames are gone and the coals wear grey ash — flames taste of lighter and soot; glowing coals taste of the grill.\n\nClean, hot, oiled — in that order: scrub the hot grate, then oil the food, not the bars (oil on hot bars burns to varnish). Flare-ups are dripping fat igniting; the answer is movement to the safe zone, never a water bottle, which throws ash across everything.',
        },
        {
          heading: 'Char is a seasoning — dose it',
          body: 'Grill flavour is Maillard plus smoke plus a measured amount of genuine char, and the dose makes the poison: a little blistered edge is bitter-sweet complexity, a blackened surface is just bitter. Thick cuts run the two-zone pattern like an outdoor reverse sear — gentle zone with the lid down until the core approaches target, then over the coals for the crust. Thin cuts and chops go hot and fast with a single flip and an early pull. Fat-edged cuts like lamb leg and pork cutlets need the safe zone on standby, because rendering fat will torch.\n\nEverything from the pan rules still applies at the fire: salt ahead, dry surfaces, probe doneness (the outdoors does not change the numbers — beef medium-rare is still pulled at 50–52°C), and a proper rest off the grill, where the smoke smell settles into the meat instead of evaporating off it.',
        },
      ],
      demonstrations: [
        {
          title: 'Two-zone setup and a fat-edged cut',
          steps: [
            'Light a full chimney of charcoal; when the top coals wear grey ash (20–25 minutes), bank them over half the grill and set the grate to heat.',
            'Scrub the hot grate clean with a brush, then wipe it with an oiled cloth held in tongs.',
            'Palm-test both zones at grate height and say the count out loud: the hot side should chase your hand at 2–3 seconds.',
            'Start the meat — oiled, salted, dry — on the hot side, moving it to the safe zone the moment rendering fat flares.',
            'Work between zones, lid down on the safe side for thick cuts, probing as you would in the kitchen.',
            'Rest off the grill on a rack, 5–10 minutes by thickness, then slice across the grain and judge your char dose on the cut edge.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Fire hours',
          instructions: 'Run three fires across the module before the assessment. Fire one: vegetables only (zucchini, capsicum, corn — cheap calibration). Fire two: chops or cutlets, one flip, probe-verified. Fire three: a thick cut run as a two-zone reverse sear. Log coal quantity, palm-test counts and total fire-to-table time for each.',
          repeatPractice: 'Fire management is rep-limited — you cannot cram it. One deliberate fire a fortnight through the rest of the course keeps the reading skills alive for Module 14’s outdoor menu.',
        },
      ],
      recipeIds: ['r-m11-04'],
      techniqueIds: ['t-grilling', 't-doneness', 't-resting', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'Outside blackened before the centre was anywhere near done',
          cause: 'One fierce zone, no escape route, and probably flames rather than ashed-over coals.',
          fix: 'Wait for grey ash, bank two zones, and cook thick cuts mostly on the quiet side with the lid down, visiting the hot side only for crust at the end.',
        },
        {
          problem: 'Everything sticks and tears on the grate',
          cause: 'Dirty or cold grate, wet food, or flipping before release.',
          fix: 'Hot grate scrubbed clean and wiped with oil, dry oiled food, and patience — grilled meat, like seared, releases itself when the crust is set.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'One method for every cut',
      cause: 'Cooking the meat you bought the way you cook the meat you know.',
      fix: 'Ask the work-history question at the counter, not the stove. Working muscle: low, slow, moist. Idle muscle: hot, fast, rested. The cut chooses; you just cooperate.',
    },
    {
      problem: 'Fear of real heat',
      cause: 'Smoke alarms and the instinct that dark brown means burnt.',
      fix: 'Mahogany is the target, tan is timidity. Dry meat, a heavy pan, proper preheat, ventilation, and the nerve to leave the meat alone until it releases.',
    },
    {
      problem: 'Serving straight from the pan',
      cause: 'Hot-plate anxiety — resting feels like letting the food die.',
      fix: 'Rest half the cooking time for steaks, 15–30 minutes for roasts, on a rack. Carryover finishes the cooking and the juices stay in the slice. Warm plates fix the temperature worry.',
    },
    {
      problem: 'Slicing with the grain',
      cause: 'The grain was never located before the crust hid it.',
      fix: 'Find and remember the fibre direction raw. Across the grain, every fibre is short; with it, every slice is a chew. This one free move outranks a grade of marbling.',
    },
  ],
  assessment: {
    id: 'as-m11',
    moduleId: 'm11',
    title: 'Three Heats, One Animal',
    brief:
      'Over two days: (1) day one, start the braise (r-m11-03) and hold it overnight in its liquid; (2) day two, reverse-sear a thick cut (4 cm+) to a stated target doneness, recording oven-pull, post-sear and post-rest temperatures; (3) same session, hard-sear a 3 cm steak with a pan sauce from the fond; (4) finish the braise — fat lifted, liquid reduced to a coating sauce. Serve the seared cuts sliced across the grain. Every doneness call must be probe-verified and written down, with your touch-test guess logged beside each reading.',
    rubric: [
      { criterion: 'Doneness accuracy', maxScore: 10, guidance: '9–10: both seared cuts within 2°C of stated target after rest, edge-to-edge evenness on the reverse sear. 6–8: within 5°C. Below 6: missed doneness or a visible wide grey band.' },
      { criterion: 'Crust quality', maxScore: 8, guidance: 'Mahogany, even, aromatic Maillard crust on both cuts; fat edges rendered; no grey, no soot-black bitterness.' },
      { criterion: 'Braise texture & sauce', maxScore: 10, guidance: 'Fork-twist tender, meat holding shape but yielding; sauce skimmed, reduced to coat a spoon, seasoned after reduction, bright not heavy.' },
      { criterion: 'Rest, carve & grain', maxScore: 6, guidance: 'Full rests honoured on a rack; every slice across the grain; resting juices captured into sauce, not lost to the board.' },
      { criterion: 'Process & records', maxScore: 6, guidance: 'Temperatures logged at every stage, touch-guesses recorded, station calm, meat dried and salted correctly ahead.' },
    ],
    passScore: 28,
    evidence: 'Five photos: the raw thick cut with your grain mark, both seared cut-faces showing the doneness band, the fork-twist test in the braise, and the three finished plates. Include your full temperature log.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Gradient autopsy and touch-calibration logs completed across at least ten probe readings',
    'All four module recipes cooked, including one braise finished the following day',
    'Assessment passed (28/40 or better) with photo evidence and the temperature log',
  ],
}

export const module11Recipes: Recipe[] = [
  {
    id: 'r-m11-01',
    title: 'Pan-Seared Scotch Fillet, Red Wine Pan Sauce',
    moduleId: 'm11',
    description:
      'The benchmark steak: dried, salted ahead, seared to mahogany, flipped often, pulled by the probe and rested honestly — with a four-minute red wine pan sauce built in the fond while it rests. Steakhouse results from one pan and nerve.',
    difficulty: 3,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-searing', 't-doneness', 't-resting', 't-pan-sauce'],
    ingredients: [
      { item: 'Scotch fillet steaks, 3 cm thick', qty: 2, unit: 'each', prep: 'about 350 g each — share them; thickness beats quantity' },
      { item: 'Fine salt', qty: 7, unit: 'g', prep: '1% of steak weight, applied 45 min to 24 h ahead' },
      { item: 'Neutral high-smoke-point oil', qty: 20, unit: 'ml' },
      { item: 'Butter, cold', qty: 50, unit: 'g', prep: '20 g for basting, 30 g cubed for the sauce' },
      { item: 'Garlic', qty: 2, unit: 'cloves', prep: 'crushed, skin on' },
      { item: 'Thyme', qty: 3, unit: 'sprigs' },
      { item: 'Shallot', qty: 1, unit: 'each', prep: 'fine dice' },
      { item: 'Full-bodied red wine', qty: 150, unit: 'ml' },
      { item: 'Beef or brown chicken stock', qty: 150, unit: 'ml' },
      { item: 'Flaky salt & black pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'Salt the steaks at 1% up to a day ahead (uncovered in the fridge) or at least 45 minutes before cooking. Bring them toward room temperature and dry the surfaces until paper drags.',
      'Heat a heavy pan until a water drop skates and vanishes. Add the oil, swirl, and lay the steaks in away from you. Do not touch them for 2 minutes.',
      'Check the first face: mahogany, not tan. Flip, sear the second face 2 minutes, then hold each steak on its fat edge with tongs until the rim crackles.',
      'Now flip every 30 seconds, probing between flips. Add the basting butter, garlic and thyme for the last minute and spoon the foam over. Pull at 50–52°C core for medium-rare after carryover.',
      'Rest on a rack, 5–6 minutes — half the cook time. Start the sauce immediately in the same pan.',
      'Pour off all but a teaspoon of fat, keeping the fond and garlic. Sweat the shallot 60 seconds, deglaze with the wine, scrape, and reduce to a syrup. Add the stock and reduce by half again.',
      'Off the heat, mount the cold butter in a swirl, grind in pepper, and add every drop of resting juice. Taste on a cooled spoon — reduce further or brighten before you ever reach for salt.',
      'Slice across the grain, sauce under the meat, flaky salt on the cut faces. Serve on warm plates — the rest has spent your thermal margin.',
    ],
    chefNotes: [
      'The frequent-flip finish cooks the steak more evenly than one flip per side — each face cools between visits to the heat, so the gradient stays narrow. Use it after the crust is established, not before.',
      'Two big steaks shared beat four thin ones served whole: better crust-to-centre ratio, easier doneness, and carving across the grain happens in the kitchen where it belongs.',
    ],
    reinforces: ['Pan-sauce sequence from Module 5', 'Salting by percentage', 'Probe-plus-touch doneness'],
  },
  {
    id: 'r-m11-02',
    title: 'Reverse-Seared Rump Cap with Chimichurri',
    moduleId: 'm11',
    description:
      'A whole rump cap (picanha) taken low and slow to a uniform blush, then blasted for its crust — the thick-cut method at its most convincing — with a sharp herb sauce that needs no pan at all. Edge-to-edge rose, and the photo to prove it.',
    difficulty: 4,
    serves: 6,
    timeMins: 120,
    techniqueIds: ['t-reverse-sear', 't-resting', 't-doneness', 't-mince'],
    ingredients: [
      { item: 'Beef rump cap, fat on', qty: 1.2, unit: 'kg', prep: 'fat scored in a 1 cm diamond pattern, not through to the meat' },
      { item: 'Fine salt', qty: 12, unit: 'g', prep: '1% of weight, ideally the day before' },
      { item: 'Neutral oil', qty: 15, unit: 'ml' },
      { item: 'Flat-leaf parsley', qty: 40, unit: 'g', prep: 'finely chopped' },
      { item: 'Dried oregano', qty: 3, unit: 'g' },
      { item: 'Garlic', qty: 3, unit: 'cloves', prep: 'minced to a paste with a pinch of salt' },
      { item: 'Red wine vinegar', qty: 40, unit: 'ml' },
      { item: 'Olive oil', qty: 120, unit: 'ml' },
      { item: 'Chilli flakes', qty: 2, unit: 'g' },
      { item: 'Flaky salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'The day before: score the fat cap, salt the meat at 1% all over, and rest it uncovered on a rack in the fridge — seasoning and a dry surface in one move.',
      'Chimichurri first, so it can mellow: stir the parsley, oregano, garlic paste, vinegar, olive oil and chilli flakes together. Do not blend — chimichurri is a chopped sauce. Rest it at room temperature.',
      'Oven at 110°C. Meat on a rack over a tray, probe in the thickest point. Cook to 46–48°C core, about 60–90 minutes.',
      'Rest the meat 10 minutes uncovered while a heavy pan (or the barbecue’s hot zone) gets brutally hot.',
      'Sear fat-cap down first, rendering into the scores, 2–3 minutes until deeply crisped, then 60–90 seconds on each remaining face. The dry, warm surface browns startlingly fast — stay with it.',
      'Rest 8–10 minutes on a rack. Core should settle at 54–56°C: medium-rare, edge to edge.',
      'Slice across the grain — on a rump cap the grain runs roughly parallel to the fat, so slice in the same direction as the cap’s long edge, checking the fibres as you go.',
      'Fan the slices, flaky salt on the cut faces, chimichurri spooned across the meat and passed at the table. Taste a slice plain first — that is your doneness exam.',
    ],
    chefNotes: [
      'The low oven dries the surface so thoroughly that the final sear takes half the time you expect — have tongs in hand and do not walk away, because the line between mahogany and burnt is about 20 seconds.',
      'Chimichurri’s vinegar does for rich beef what lemon did for fish in Module 9: same acid logic, different plate. Make it at least 30 minutes ahead; the flavours need to marry.',
    ],
    reinforces: ['Fine mincing and knife work from Module 1', 'Acid balancing rich food', 'Carryover planning and honest rests'],
  },
  {
    id: 'r-m11-03',
    title: 'Red Wine Braised Beef Chuck with Potato Purée',
    moduleId: 'm11',
    description:
      'The complete braise: chuck browned hard, a wine-and-stock braise at 150°C until fork-twist tender, held overnight, and finished with a properly skimmed, reduced sauce over a silk potato purée. Cook it the day before you need it — that is the recipe, not a suggestion.',
    difficulty: 3,
    serves: 6,
    timeMins: 270,
    techniqueIds: ['t-braising-meat', 't-reduction', 't-potato-puree', 't-umami-layering'],
    ingredients: [
      { item: 'Beef chuck', qty: 1.5, unit: 'kg', prep: 'cut into 5 cm pieces, silverskin trimmed' },
      { item: 'Fine salt', qty: 15, unit: 'g', prep: '1% of meat weight, 1–24 h ahead' },
      { item: 'Neutral oil', qty: 30, unit: 'ml' },
      { item: 'Brown onions', qty: 2, unit: 'each', prep: 'medium dice (12 mm)' },
      { item: 'Carrots', qty: 2, unit: 'each', prep: 'medium dice' },
      { item: 'Celery', qty: 2, unit: 'stalks', prep: 'medium dice' },
      { item: 'Tomato paste', qty: 30, unit: 'g' },
      { item: 'Full-bodied red wine', qty: 300, unit: 'ml' },
      { item: 'Beef or brown chicken stock, hot', qty: 700, unit: 'ml' },
      { item: 'Thyme + bay', qty: 1, unit: 'bundle' },
      { item: 'Floury potatoes (e.g. sebago)', qty: 1, unit: 'kg', prep: 'peeled, even chunks' },
      { item: 'Butter, cold', qty: 200, unit: 'g', prep: 'cubed' },
      { item: 'Milk, hot', qty: 150, unit: 'ml' },
      { item: 'Red wine vinegar', qty: null, unit: 'to taste' },
    ],
    method: [
      'Day one: dry the salted chuck hard and brown it in batches in the oiled casserole — every face mahogany, no crowding, 10–12 minutes a batch. Out to a tray with its juices.',
      'Brown the mirepoix in the same fat, 8–10 minutes, then stir in the tomato paste and cook until it darkens a shade — this pincé step is borrowed straight from Module 4’s brown stock.',
      'Deglaze with the wine, scraping the fond loose, and reduce by half. Return the meat and juices, add hot stock to halfway up the meat and tuck in the herb bundle.',
      'Bring to a bare simmer, lid on, and into a 150°C oven for 2.5–3.5 hours. Test at 2.5 with the fork-twist; if it resists, give it another 30–45 minutes. Cool the meat in its liquid and refrigerate overnight.',
      'Day two: lift the set fat cap off cold and discard. Warm gently, remove the meat, and strain the liquid, pressing the vegetables softly before discarding them.',
      'Reduce the liquid in a wide pan at a hard simmer, skimming, until it coats a spoon — expect to lose a third to a half. Only now season, tasting on a cooled spoon, and finish with a few drops of vinegar to lift it.',
      'Purée while the sauce reduces: simmer the potatoes from cold 1% salted water until a knife slides through, drain, rice while hot, and dry the purée over low heat for a minute. Beat in the cold butter first, then the hot milk. Season and keep warm.',
      'Return the meat to the sauce and reheat gently, glazing the pieces. Serve over the purée in shallow bowls, sauce spooned generously — this plate is the argument for cheap cuts done properly.',
    ],
    chefNotes: [
      'The overnight hold is doing real work: the meat reabsorbs liquid and seasoning as it cools, and the fat lifts off cold in one clean disc instead of twenty hot ladle passes. Day-two braise is not leftovers; it is the finished dish.',
      'If the meat is tender but the flavour thin, the fault is almost always day one — timid browning. The braise can only concentrate what the sear deposited.',
    ],
    reinforces: ['Medium dice and mirepoix from Module 1', 'Reduction and seasoning-after from Module 5', 'Potato purée discipline from Module 7'],
  },
  {
    id: 'r-m11-04',
    title: 'Two-Zone Grilled Lamb Leg with Charred Lemon & Rosemary',
    moduleId: 'm11',
    description:
      'A butterflied lamb leg over live fire: uneven thickness turned into an advantage (every doneness on one cut), fat flare-ups managed between two zones, and lemons charred on the grill for a dressing with smoke in it. Fire management graduation.',
    difficulty: 4,
    serves: 6,
    timeMins: 90,
    techniqueIds: ['t-grilling', 't-doneness', 't-resting', 't-acid-balance'],
    ingredients: [
      { item: 'Butterflied lamb leg', qty: 1.5, unit: 'kg', prep: 'ask the butcher to butterfly it; trim any hard seam fat' },
      { item: 'Fine salt', qty: 15, unit: 'g', prep: '1% of weight, 2–24 h ahead' },
      { item: 'Olive oil', qty: 60, unit: 'ml', prep: '20 ml for the meat, 40 ml for the dressing' },
      { item: 'Rosemary', qty: 3, unit: 'sprigs', prep: 'leaves chopped' },
      { item: 'Garlic', qty: 3, unit: 'cloves', prep: 'minced' },
      { item: 'Lemons', qty: 3, unit: 'each', prep: 'halved' },
      { item: 'Honey', qty: 10, unit: 'g' },
      { item: 'Chilli flakes', qty: 2, unit: 'g' },
      { item: 'Flaky salt & black pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'Salt the lamb at 1% up to a day ahead. An hour before cooking, rub it with 20 ml oil, the rosemary and garlic, and bring it toward room temperature while the fire builds.',
      'Light a full chimney; when the coals wear grey ash, bank them over half the grill. Heat, scrub and oil-wipe the grate. Palm-test: 2–3 seconds hot side, 5–6 safe side.',
      'Lay the lamb over the hot zone, cut-side down first. Sear 4–5 minutes a side, moving it to the safe zone whenever rendering fat flares — chase crust, not flames.',
      'Move to the safe zone, thickest section toward the coals, lid down. Cook 15–25 minutes, probing the thick end every 5: pull at 52°C there for medium-rare, and note the thin end will read well past 60°C — that spread feeds every preference at the table.',
      'While it cooks, char the lemon halves cut-side down over the hot zone until deeply caramelised, 3–4 minutes. Do not turn them.',
      'Rest the lamb on a rack 10–15 minutes, loosely covered, off the grill.',
      'Dressing: squeeze four charred halves through a sieve, whisk in the honey, chilli flakes, a pinch of salt and then 40 ml olive oil in a stream. Taste — smoke, sour, sweet, heat, in that order.',
      'Slice across the grain (it changes direction between the leg’s muscles — follow each seam), fan on a warm platter, spoon the dressing over and finish with flaky salt and pepper. Remaining charred lemons on the platter for squeezers.',
    ],
    chefNotes: [
      'A butterflied leg is several muscles with several grains — carve each muscle section separately rather than sawing straight across the whole roast, and you will feel the difference slice by slice.',
      'Charring tames a lemon: the juice comes off the grill sweeter, smokier and less aggressive, so the dressing needs the honey only as a rounding note. Taste before adding all of it.',
    ],
    reinforces: ['Two-zone fire discipline', 'Probe-led doneness across variable thickness', 'Acid balancing from Module 2'],
  },
]
