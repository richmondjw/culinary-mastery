import type { CourseModule, Recipe } from '../../types/content'

export const module10: CourseModule = {
  id: 'm10',
  number: 10,
  stage: 2,
  title: 'Poultry',
  subtitle: 'One bird, the whole craft',
  description:
    'Poultry is the most forgiving serious protein and the best value in the shop — which makes it the perfect place to build butchery, brining, roasting and pan-craft into reflexes. This module works from the whole bird outward: break it down, dry-brine it, roast it, pan-roast its portions, confit its legs, and turn every carcass into stock. By the end, a whole chicken is five meals and a litre of stock, not one dinner.',
  objectives: [
    'Break a whole bird into 8 tidy pieces plus a carcass in under ten minutes',
    'Dry-brine poultry at 1% salt by weight, 12–24 hours ahead, as a default habit',
    'Roast a whole bird to a juicy breast (60–63°C) and properly done legs (70°C+) in the same oven',
    'Pan-roast portions with butter basting and build a pan sauce from the fond',
    'Confit legs in fat at 85–95°C and turn every carcass into white stock',
  ],
  difficulty: 3,
  estimatedHours: 10,
  prerequisites: ['m05', 'm07'],
  skillsUnlocked: [
    'Whole bird breakdown',
    'Dry brining',
    'Whole-bird roasting by temperature',
    'Butter-basted pan-roasting',
    'Confit',
  ],
  equipment: [
    'Boning knife (13–15 cm)',
    'Digital probe thermometer',
    'Heavy oven-proof pan (26–28 cm)',
    'Roasting tray with rack',
    'Digital scales (for 1% salt calculations)',
    'Kitchen twine and poultry shears',
    'Deep baking dish or heavy pot for confit',
    'Stockpot (6 L+)',
  ],
  ingredients: [
    '3 whole chickens (1.6–1.8 kg each, best quality you can afford)',
    '4 duck legs (or chicken legs for a budget confit)',
    'Duck fat or olive oil for confit (700 g / 700 ml)',
    'Fine salt and flaky salt',
    'Unsalted butter, garlic, thyme, bay leaves',
    'Lemons and dry white wine',
    'Onions, carrots, celery for mirepoix and stock',
    'Waxy potatoes (confit fat’s second life)',
  ],
  lessons: [
    {
      id: 'm10-l01',
      title: 'The whole bird: breakdown and the carcass dividend',
      summary: 'Eight pieces plus a stock carcass in minutes — the butchery drill that pays for itself every week.',
      theory: [
        {
          heading: 'Why whole birds',
          body: 'A whole chicken costs less per kilogram than any of its parts, and the difference is pure skill margin: ten minutes of knife work turns one bird into two breasts, two thighs, two drumsticks, two wings and a carcass worth a litre of stock. Buy whole, break down, and the same money buys better birds.\n\nThe anatomy does the work for you. Joints are gaps between bones, and a knife through a gap needs almost no force — if you are sawing, you are on bone, and you should move the blade a few millimetres and try again. Bend the leg and wing joints to pop them before cutting, keep the blade against the carcass so the frame keeps the bones and you keep the meat, and save the oysters — the two coins of meat in the hollows of the backbone — with the thighs, where they belong.',
        },
        {
          heading: 'Carcass to stock, every time',
          body: 'The carcass is not a by-product; it is half the reason to buy whole. One raw chicken frame plus wing tips, covered in cold water and simmered gently for 4 hours with mirepoix added for the final hour, gives about a litre of clean white stock — exactly the Module 4 method, now on a weekly rhythm. Never boil, always skim, salt nothing until the stock is used.\n\nBuild the habit as a loop: every breakdown ends with the carcass either in the stockpot or in a labelled freezer bag. Three frames in the freezer is a stockpot run. Roasted carcasses from whole-roast night make a darker, deeper stock — same method, browner result — and the pan drippings go in too.',
        },
      ],
      demonstrations: [
        {
          title: 'Eight pieces in order',
          steps: [
            'Dry the bird, breast up, legs toward you. Pull a leg away from the body, slit the skin, and bend the leg down until the hip joint pops.',
            'Cut through the popped joint, curving the blade around the oyster so it stays with the thigh. Repeat on the other side.',
            'Separate thigh from drumstick by cutting through the white fat line over the knee joint — the line marks the gap.',
            'Pull a wing out, pop the shoulder joint, and cut through it; take the wing tip off for the stock bag. Repeat.',
            'Stand the carcass on its neck end and cut down through the rib cage on each side to free the whole crown, then run the blade down each side of the breastbone, riding the bone, to lift two skin-on breasts.',
            'Trim and tidy: eight pieces on the tray, carcass, wing tips and trim in the stock bag. Weigh your pieces against the whole bird — 70%+ on the tray is the target.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Three-bird ladder',
          instructions: 'Break down three chickens across the module — one slow and perfect with the anatomy diagram beside you, one from memory, one against the clock. Time each, weigh your yield, and photograph the third tray of pieces. Under ten minutes with clean joints and both oysters saved is the standard.',
          repeatPractice: 'Break down a whole bird at least fortnightly from here on — Stage 3 menu work assumes portioning is free and instant. The same joint-finding logic transfers to rabbit and to jointing a duck.',
        },
      ],
      recipeIds: ['r-m10-04'],
      techniqueIds: ['t-bird-breakdown', 't-white-stock', 't-mise-en-place'],
      troubleshooting: [
        {
          problem: 'Cutting through the joints takes force and splinters bone',
          cause: 'The blade is on bone, not in the gap — the joint was never popped or the angle is wrong.',
          fix: 'Stop sawing. Bend the joint until you hear the pop, look for the white cartilage line, and let the knife fall through the gap. If you feel grinding, move the edge and try a few millimetres over.',
        },
        {
          problem: 'Breasts come off ragged with meat left on the breastbone',
          cause: 'Short strokes wandering off the bone instead of long strokes riding it.',
          fix: 'Keep the blade tip against the breastbone and use long, sweeping cuts, peeling the breast away with the other hand so you can see the seam you are cutting.',
        },
      ],
    },
    {
      id: 'm10-l02',
      title: 'Dry brining & roasting the whole bird',
      summary: 'Salt ahead, dry skin, two target temperatures — the method that makes roast chicken repeatable instead of lucky.',
      theory: [
        {
          heading: 'The 1% rule, applied early',
          body: 'Dry brining is the single biggest upgrade in poultry cookery: salt the bird at 1% of its weight (16 g for a 1.6 kg chicken), inside and out, and leave it uncovered on a rack in the fridge for 12–24 hours. The salt first draws moisture out, then dissolves and travels back in, seasoning the meat in depth and loosening proteins so they hold water through the roast.\n\nThe uncovered part matters as much as the salt: fridge air dries the skin to a papery finish that crisps instead of steaming. A wet-brined bird (5–6% salt solution) gains more moisture but dilutes flavour and ruins the skin unless dried hard afterwards — reserve wet brines for lean, dry-prone birds like turkey breast. Never brine a bird labelled “basted” or pre-salted; you will double-salt it.',
        },
        {
          heading: 'Two meats, one oven',
          body: 'A chicken is two different meats sharing a skeleton. Breast is lean fast-twitch muscle, done and best at 60–63°C — beyond that it dries by the degree. Legs are hard-working muscle full of collagen and connective tissue that need 70°C+ (and are nicer at 75–80°C) to turn tender. The whole craft of roasting is closing that gap.\n\nWork the gap from both ends: start the bird legs-to-the-back of the oven where it runs hotter; rest the bird breast-down for the first half of resting so juices settle into the breast; and roast at 200°C for the first 20 minutes for skin colour, then 180°C until the numbers arrive. Probe the deepest breast (not touching bone) and the thigh joint separately. Pull when the breast reads 58–60°C — carryover adds 3–5°C during a 15–20 minute rest — and verify the thigh is past 70°C. If the thigh lags, return legs-only heat: tent the breast with foil and give it ten more minutes.',
        },
      ],
      demonstrations: [
        {
          title: 'The dry-brined roast, end to end',
          steps: [
            'The day before: weigh the bird, calculate 1% salt, and season it everywhere — inside the cavity, over and under the skin of the breast where you can loosen it.',
            'Rest it uncovered on a rack in the fridge, 12–24 hours. Do not rinse before roasting — just pat any damp spots.',
            'Roast day: bring the bird toward room temperature for 45 minutes, tie the legs loosely, and slide half a lemon and a thyme sprig into the cavity.',
            'Roast at 200°C for 20 minutes on a rack in a tray, legs toward the oven’s back wall, then drop to 180°C.',
            'From 45 minutes total, probe the deep breast and thigh joint every 10 minutes. Pull at breast 58–60°C with thigh past 70°C.',
            'Rest 15–20 minutes on a warm plate, breast-down for the first 10, loosely covered. Carve on a board with a moat — the juices go into the pan sauce, never down the sink.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Brined versus not',
          instructions: 'Roast two small chickens in the same oven on the same day: one dry-brined 24 hours, one salted just before roasting. Probe both, rest both, then taste breast against breast and skin against skin, blind if you can rope in a second palate. Write down the difference in three lines — this is the experiment that makes the habit stick.',
          repeatPractice: 'Dry-brine every bird and every thick cut you cook from now on; Module 11 applies the identical 1% logic to beef, lamb and pork. Salting ahead should become as automatic as preheating.',
        },
      ],
      recipeIds: ['r-m10-01'],
      techniqueIds: ['t-brining', 't-roasting-bird', 't-resting', 't-doneness'],
      troubleshooting: [
        {
          problem: 'Breast is dry even though the skin looked perfect',
          cause: 'The bird was cooked to a clock or to leg-doneness, dragging the breast far past 63°C.',
          fix: 'Cook to the probe, not the timer. Pull at breast 58–60°C and let carryover finish it; solve lagging legs with position and foil, never with more whole-bird time.',
        },
        {
          problem: 'Skin is pale and flabby despite a hot oven',
          cause: 'Wet skin — the bird was covered in the fridge, rinsed, or roasted straight from the wrapper.',
          fix: 'Uncovered on a rack overnight is the fix; even 2 hours of fridge air helps. Pat dry, never rinse, and make sure the bird is not crowded by tray sides that trap steam.',
        },
      ],
    },
    {
      id: 'm10-l03',
      title: 'Pan-roasting portions & the four-minute pan sauce',
      summary: 'Sear, oven, butter-baste, rest — and a sauce built from the fond while the meat rests. The restaurant method for weeknights.',
      theory: [
        {
          heading: 'Stove starts it, oven finishes it',
          body: 'Pan-roasting splits the job between two heats: a hard sear on the stove for skin and crust, then a 180–200°C oven to bring the centre to temperature gently and evenly. The pan does what the oven cannot (contact browning) and the oven does what the pan cannot (surround the meat without scorching the fond). Skin-on portions go presentation-side down first, into a pan just filmed with oil, and stay there untouched until the skin is deeply golden and releases on its own — 5–7 minutes for a chicken breast, the crisp-skin patience of Module 9 again.\n\nButter basting bridges the two stages: a knob of butter, crushed garlic and thyme go in as the pan comes out of the oven (or in the final minutes on the stove), and you tilt the pan and spoon the foaming butter over the meat repeatedly. It is flavour, glossy colour, and a few degrees of gentle top-down heat all at once. Baste with foaming butter, not browned-out butter — if it smells nutty and looks dark, start a fresh knob.',
        },
        {
          heading: 'The fond is the sauce',
          body: 'The brown film welded to the pan after searing is concentrated flavour waiting for liquid. While the meat rests, pour off excess fat, sweat a minced shallot in what remains, deglaze with wine or stock, scrape the fond loose, and reduce to a syrup. Mount in cold butter off the heat, swirling, then season and — the professional touch — add every drop of the resting juices back in.\n\nThe whole sauce takes four minutes, which is conveniently the front half of the meat’s rest. This is the rhythm to internalise: protein out, rest started, sauce built, both land together. A pan sauce made this way needs no recipe, only the sequence — fat off, aromatic, deglaze, reduce, mount, juices, taste.',
        },
      ],
      demonstrations: [
        {
          title: 'Pan-roasted chicken breast with butter baste',
          steps: [
            'Dry-brined skin-on breast, patted dry, at room temperature. Oven at 190°C. Oil filmed in an oven-proof pan over medium-high.',
            'Lay the breast in skin-side down and press gently for the first 30 seconds. Leave it 5–7 minutes until deep gold and self-releasing.',
            'Flip, then transfer the pan to the oven for 6–10 minutes, until a probe reads 60°C in the thickest part.',
            'Back on the stove: add 30 g butter, a crushed garlic clove and a thyme sprig. Tilt and baste the foaming butter over the skin for 60 seconds.',
            'Rest the breast on a rack, skin up, 5–8 minutes. Pour off excess fat and build the pan sauce in the fond while it waits.',
            'Slice across the grain, season the cut faces with flaky salt, and sauce under the meat so the skin stays loud.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Sauce without a recipe',
          instructions: 'Pan-roast portions on three separate nights and build a different pan sauce each time from the sequence alone — wine and mustard; stock and lemon; wine, cream and tarragon. No recipe allowed, only fat-off, aromatic, deglaze, reduce, mount, juices, taste. Note which reduction level made the best sauce.',
          repeatPractice: 'The identical sequence returns on steak in Module 11 and stays with you for life — pan sauces are the highest-return four minutes in cooking. Drill it until it needs no thought.',
        },
      ],
      recipeIds: ['r-m10-02'],
      techniqueIds: ['t-pan-roasting', 't-pan-sauce', 't-searing', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Skin was crisp in the pan but soggy on the plate',
          cause: 'The portion rested skin-down, was sauced over the top, or sat under foil trapping steam.',
          fix: 'Rest skin-up on a rack, never a plate; keep any cover loose; and always plate sauce under the meat, not over the skin.',
        },
        {
          problem: 'Butter blackens and the fond burns during basting',
          cause: 'The pan came out of the oven ferociously hot, and the baste ran too long over high heat.',
          fix: 'Baste off the heat or over low — the pan holds plenty. If the fond has gone black-bitter, do not deglaze it; sacrifice the sauce rather than serve burnt.',
        },
      ],
    },
    {
      id: 'm10-l04',
      title: 'Confit: low, slow and submerged',
      summary: 'Salt cure, gentle fat, spoon-tender legs with re-crisped skin — preservation technique turned luxury texture.',
      theory: [
        {
          heading: 'Cure first, then fat at a whisper',
          body: 'Confit is a two-step transformation. First a cure: salt (about 1.5% of the meat’s weight), crushed garlic, thyme and a crumbled bay leaf, rubbed over the legs and left 12–24 hours in the fridge. This seasons in depth and firms the flesh exactly as the gravlax cure did in Module 9 — same chemistry, different destination. Rinse briefly and dry well before cooking; leftover surface cure makes the fat salty, and the fat has a future.\n\nThen the cook: submerged in fat at 85–95°C — the surface should barely shudder, never bubble — for 2 to 3 hours for duck legs, until the meat is spoon-tender and pulling from the drumstick bone. The fat is not frying medium but a gentle, air-free heat bath: collagen melts to gelatine while the fat blocks oxygen and moisture loss. An 90°C oven with the legs in a snug dish under fat is the easiest way to hold the temperature honestly.',
        },
        {
          heading: 'The fat ledger',
          body: 'Confit was preservation before it was luxury: cooled under a full seal of fat, cured meat kept for months in a cellar. In your fridge, legs left submerged in their fat keep for weeks and — like a braise — genuinely improve after a few days as seasoning equalises.\n\nTo serve, lift a leg from the fat, scrape it clean, and crisp it skin-down in a dry pan over medium heat or under a 220°C oven until the skin shatters. And keep the fat: strained, it re-uses for the next confit several times over, and it is the best roast-potato medium in existence. Duck fat at around $15 a jar is not an expense; it is a rotating asset. Log it like stock — labelled, dated, strained after each use.',
        },
      ],
      demonstrations: [
        {
          title: 'Duck leg confit, cure to crisp',
          steps: [
            'Weigh the legs, calculate 1.5% salt, and rub it on with crushed garlic, thyme leaves and crumbled bay. Cure 12–24 hours covered in the fridge.',
            'Rinse the cure off quickly, dry the legs thoroughly, and lay them snug in a single layer in a deep dish.',
            'Melt the fat and pour it over until the legs are fully submerged. Add the garlic from the cure.',
            'Cook at 90°C in the oven for 2.5–3 hours. Check with a probe in the fat: 85–95°C is the band. The meat is done when a skewer slides in with no resistance and the flesh pulls from the bone end.',
            'Cool the legs in the fat. Refrigerate submerged — this is the storage state, and it improves for days.',
            'To serve: scrape a leg clean and crisp it skin-down in a dry cold-start pan over medium heat, 6–8 minutes without moving, until the skin is glass. Strain and keep every drop of fat.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Confit two ways',
          instructions: 'Confit four legs. Serve two on the day they finish and two after five days submerged in the fridge, crisped identically. Taste side by side and note what the rest in fat changed — seasoning depth, texture, how the skin crisps. Then roast potatoes in the strained fat and understand why nothing else compares.',
          repeatPractice: 'Keep a confit rotation running through Stage 2 and 3 — it is the make-ahead protein for entertaining, and Module 14’s menu planning leans on exactly this kind of hold-and-finish cookery.',
        },
      ],
      recipeIds: ['r-m10-03'],
      techniqueIds: ['t-confit', 't-brining', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'Confit meat is tight and chewy after the full time',
          cause: 'The fat ran too cool to convert collagen, or the legs simply needed longer — birds vary.',
          fix: 'Verify 85–95°C with a probe in the fat, not the oven dial, and cook to the skewer test, not the clock. Another 30–45 minutes fixes what a timer cannot.',
        },
        {
          problem: 'The finished confit is harshly salty',
          cause: 'Cure left on too long for small legs, or never rinsed off before cooking.',
          fix: 'Hold the cure at 1.5%, cap chicken legs at 12–18 hours, and always rinse and dry before the fat. Oversalted legs still shine shredded through lentils or a salad.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Buying breast fillets by default',
      cause: 'Convenience habit — and unfamiliarity with the knife work that makes whole birds cheap.',
      fix: 'Buy whole, break down on shopping day, and portion the freezer. Same money, better birds, free stock, and your butchery compounds weekly.',
    },
    {
      problem: 'Cooking the whole bird until the breast juices "run clear"',
      cause: 'Folk doneness tests that overshoot by 10–15°C to feel safe.',
      fix: 'Own a probe and trust it: breast 60–63°C after rest, thigh 70°C+. Clear juices happen far beyond both numbers, and the breast pays for it.',
    },
    {
      problem: 'Skipping the rest and carving at the oven door',
      cause: 'Impatience plus the fear of serving anything less than piping hot.',
      fix: 'Rest 15–20 minutes loosely covered; a roast bird holds heat far longer than you fear. Carve early and the juices end up on the board instead of in the meat — the sauce can be hot instead.',
    },
    {
      problem: 'Binning the carcass, the fond and the fat',
      cause: 'Seeing them as waste rather than as the paid-for second half of the ingredient.',
      fix: 'Carcass to the stockpot or freezer bag, fond to a pan sauce, confit fat strained and re-used. This module’s economics only work if the loop closes.',
    },
  ],
  assessment: {
    id: 'as-m10',
    moduleId: 'm10',
    title: 'One Bird, Five Outcomes',
    brief:
      'Across one weekend, from a single whole chicken (dry-brined the day before) plus two extra legs: (1) break the bird into 8 pieces plus carcass, photographed on one tray; (2) roast the crown or a second whole bird, probing breast and thigh to their separate targets; (3) pan-roast a breast portion with butter basting and serve it with a pan sauce built during the rest; (4) start a white stock from the carcass; (5) have the extra legs mid-confit or finished. Record every pull temperature.',
    rubric: [
      { criterion: 'Breakdown quality & yield', maxScore: 10, guidance: '9–10: eight clean pieces, oysters saved, tidy carcass, under 10 minutes. 6–8: clean but slow or an oyster lost. Below 6: ragged cuts, splintered joints.' },
      { criterion: 'Roast doneness & seasoning', maxScore: 10, guidance: 'Breast 60–63°C and moist after rest, thigh 70°C+, skin golden and seasoned in depth from the dry brine; temperatures recorded, not guessed.' },
      { criterion: 'Pan-roast & pan sauce', maxScore: 8, guidance: 'Skin crisp and self-released, butter baste foaming not burnt; sauce glossy, balanced, mounted properly, resting juices returned.' },
      { criterion: 'Stock & confit discipline', maxScore: 6, guidance: 'Stock skimmed and never boiled; confit cured at ratio, held 85–95°C, meat spoon-tender; fat strained and kept.' },
      { criterion: 'Rest, carve & plate', maxScore: 6, guidance: 'Full rest honoured, carving across the grain on a moat board, juices captured into the sauce, clean confident plating.' },
    ],
    passScore: 28,
    evidence: 'Four photos: the 8-piece tray with carcass, the probe reading in the roasted breast, the plated pan-roast with sauce, and the confit in its fat. List your recorded temperatures alongside.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'Three whole birds broken down with times and yields recorded',
    'All four module recipes cooked, including a carcass stock and a finished confit',
    'Assessment passed (28/40 or better) with photo evidence and recorded temperatures',
  ],
}

export const module10Recipes: Recipe[] = [
  {
    id: 'r-m10-01',
    title: 'Dry-Brined Roast Chicken with Pan Gravy',
    moduleId: 'm10',
    description:
      'The definitive roast chicken: salted a day ahead, air-dried, roasted to two separate temperatures, rested properly, and finished with a gravy built on the tray’s own fond. Master this and you own Sunday.',
    difficulty: 3,
    serves: 4,
    timeMins: 110,
    techniqueIds: ['t-brining', 't-roasting-bird', 't-resting', 't-pan-sauce'],
    ingredients: [
      { item: 'Whole chicken', qty: 1.6, unit: 'kg' },
      { item: 'Fine salt', qty: 16, unit: 'g', prep: '1% of bird weight — recalculate for your bird' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
      { item: 'Thyme', qty: 4, unit: 'sprigs' },
      { item: 'Butter', qty: 30, unit: 'g', prep: 'softened' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'Chicken stock', qty: 300, unit: 'ml', prep: 'ideally your own from r-m10-04' },
      { item: 'Plain flour', qty: 15, unit: 'g' },
      { item: 'Black pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'The day before: weigh the bird and salt it at 1% — inside the cavity, all over the skin, and under the breast skin where you can loosen it with a finger. Rest uncovered on a rack in the fridge overnight.',
      'Roast day: bring the bird out 45 minutes ahead. Heat the oven to 200°C. Pat any damp spots, rub the skin with the soft butter, and put the lemon and two thyme sprigs in the cavity. Tie the legs loosely.',
      'Roast on a rack in a tray, legs toward the back of the oven, 20 minutes at 200°C, then drop to 180°C.',
      'From 45 minutes total, probe every 10 minutes: deep breast (not touching bone) and thigh joint. Pull when the breast reads 58–60°C and the thigh is past 70°C — typically 65–80 minutes all up.',
      'Rest the bird on a warm plate, breast-down for the first 10 minutes, loosely covered, 20 minutes total.',
      'Gravy in the tray: pour off all but a tablespoon of fat, set the tray over medium heat, and whisk in the flour for a minute. Deglaze with wine, scraping every scrap of fond, then whisk in the stock and remaining thyme and reduce to a light nappe.',
      'Add every drop of resting juice to the gravy, season with pepper and taste — the brine has already salted the bird, so the gravy carries the adjustment. Carve across the grain and serve with the gravy under and beside, never drowning the skin.',
    ],
    chefNotes: [
      'Recalculate the salt for your actual bird weight every time — the 1% rule is the recipe. A 1.9 kg bird wants 19 g, and guessing is how brining gets a bad name.',
      'The carcass, the tie, the lemon and the tray scraps all go to the stock bag — this recipe funds r-m10-04.',
    ],
    reinforces: ['Salting by percentage', 'Probe-led doneness', 'Roux and pan-deglazing from Module 5'],
  },
  {
    id: 'r-m10-02',
    title: 'Butter-Basted Chicken Breast, Mustard-Tarragon Pan Sauce',
    moduleId: 'm10',
    description:
      'The restaurant method on a weeknight clock: skin-on breast seared, oven-finished, basted in foaming thyme butter and sauced from its own fond in the four minutes it rests. Silky, precise and endlessly repeatable.',
    difficulty: 3,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-pan-roasting', 't-pan-sauce', 't-doneness', 't-tasting'],
    ingredients: [
      { item: 'Chicken breasts, skin on', qty: 4, unit: 'each', prep: '180–200 g each, dry-brined 12 h if possible' },
      { item: 'Neutral oil', qty: 20, unit: 'ml' },
      { item: 'Butter, cold', qty: 70, unit: 'g', prep: '30 g for basting, 40 g cubed for the sauce' },
      { item: 'Garlic', qty: 2, unit: 'cloves', prep: 'crushed, skin on' },
      { item: 'Thyme', qty: 3, unit: 'sprigs' },
      { item: 'Shallot', qty: 1, unit: 'each', prep: 'fine dice' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'Chicken stock', qty: 150, unit: 'ml' },
      { item: 'Dijon mustard', qty: 15, unit: 'g' },
      { item: 'Tarragon', qty: 5, unit: 'g', prep: 'leaves picked, chopped' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Oven to 190°C. Breasts patted dry and at room temperature; if not brined ahead, salt them now on both sides. Full mise — the cook is 20 minutes with no gaps for chopping.',
      'Film an oven-proof pan with the oil over medium-high. Lay the breasts in skin-down, press each flat for 30 seconds, and leave them 5–7 minutes until the skin is deep gold and releases on its own.',
      'Flip, then straight into the oven for 6–10 minutes, until a probe reads 60°C in the thickest part.',
      'Pan back to the stove over low: add the basting butter, garlic and thyme, tilt the pan, and spoon foaming butter over the skin for a minute.',
      'Rest the breasts skin-up on a rack. Pour off all but a teaspoon of fat, keeping the fond and the garlic.',
      'Sweat the shallot 60 seconds, deglaze with the wine and scrape the fond loose, reduce to a syrup, then add the stock and reduce again by half.',
      'Off the heat: whisk in the mustard, mount the cold butter cubes in a swirl, and add the tarragon and every drop of resting juice. Taste on a cooled spoon and adjust.',
      'Slice each breast across the grain, plate over the sauce with the skin clear of it, and finish the cut faces with flaky salt.',
    ],
    chefNotes: [
      'The rest and the sauce are the same four minutes — that overlap is the technique. If your sauce ever finishes before the rest does, you rushed the reduction.',
      'Mustard is an emulsifier as well as a flavour: it helps the butter hold. Add it off the heat or it turns grainy and sharp.',
    ],
    reinforces: ['Pan-sauce sequence from Module 5', 'Crisp-skin patience from Module 9', 'Mise en place for a gap-free cook'],
  },
  {
    id: 'r-m10-03',
    title: 'Duck Leg Confit with Duck-Fat Potatoes & Bitter Leaves',
    moduleId: 'm10',
    description:
      'Legs cured overnight, cooked to collapse in gentle fat, crisped to glass and served over potatoes roasted in the same fat, with sharp dressed leaves to cut it all. Make-ahead luxury — the confit waits happily for a week.',
    difficulty: 3,
    serves: 4,
    timeMins: 240,
    techniqueIds: ['t-confit', 't-roasting-veg', 't-vinaigrette', 't-acid-balance'],
    ingredients: [
      { item: 'Duck legs', qty: 4, unit: 'each', prep: 'about 250 g each' },
      { item: 'Fine salt', qty: 15, unit: 'g', prep: '1.5% of leg weight — recalculate' },
      { item: 'Garlic', qty: 4, unit: 'cloves', prep: 'crushed' },
      { item: 'Thyme', qty: 6, unit: 'sprigs' },
      { item: 'Bay leaves', qty: 2, unit: 'each', prep: 'crumbled' },
      { item: 'Duck fat', qty: 700, unit: 'g', prep: 'enough to submerge — top up with olive oil if short' },
      { item: 'Waxy potatoes', qty: 800, unit: 'g', prep: 'peeled, cut into 3 cm chunks' },
      { item: 'Radicchio or frisée', qty: 1, unit: 'head', prep: 'washed, torn' },
      { item: 'Red wine vinegar', qty: 20, unit: 'ml' },
      { item: 'Dijon mustard', qty: 5, unit: 'g' },
      { item: 'Olive oil', qty: 60, unit: 'ml' },
    ],
    method: [
      'Cure day: rub the legs with the salt, garlic, thyme and bay. Cover and refrigerate 12–24 hours.',
      'Cook day: rinse the cure off quickly, dry the legs well, and lay them snug in a deep dish with the cure’s garlic. Cover completely with melted fat.',
      'Into a 90°C oven for 2.5–3 hours — the fat’s surface should shudder, never bubble. Done when a skewer slides into the thigh with no resistance. Cool in the fat; refrigerate submerged if serving later.',
      'Serve day: oven to 200°C. Parboil the potatoes in 1% salted water for 8 minutes, drain hard, and shake the pot to rough up the edges.',
      'Roast the potatoes in 3 tablespoons of strained confit fat on a preheated tray, one layer with gaps, 40–45 minutes, turning once, until deep gold and shattering.',
      'Crisp the legs: scrape clean and lay skin-down in a dry, cold pan over medium heat, 6–8 minutes without moving, until the skin is glass; a minute flesh-side to heat through.',
      'Whisk the vinegar, mustard and a pinch of salt, then the olive oil in a stream. Dress the leaves just before serving — the salad’s acid is the dish’s balance, so make it sharper than you would alone.',
      'Plate potatoes, leg on top, leaves to the side. Strain the fat back into its jar, label and date it.',
    ],
    chefNotes: [
      'Cold-pan crisping is the trick for confit skin: starting cold renders the last fat gently before the surface crisps, so the skin turns glass instead of scorching over stubborn fat.',
      'The fat re-uses three or four times for confit and indefinitely for potatoes — it picks up flavour each round. Budget note: duck fat costs about $15/700 g and this dish amortises it across months.',
    ],
    reinforces: ['Curing chemistry from Module 9', 'High-heat roasting from Module 6', 'Vinaigrette balance against rich food'],
  },
  {
    id: 'r-m10-04',
    title: 'Carcass Stock & Chicken-Velouté Soup with Pilaf Rice',
    moduleId: 'm10',
    description:
      'The breakdown’s dividend collected: a white stock from your own carcasses, half banked for the freezer, half turned into a velvety velouté-based soup with shredded meat and pilaf rice. Modules 4, 5 and 7 in one pot.',
    difficulty: 2,
    serves: 6,
    timeMins: 300,
    techniqueIds: ['t-white-stock', 't-veloute', 't-pilaf', 't-seasoning-salt'],
    ingredients: [
      { item: 'Raw chicken carcasses + wing tips', qty: 2, unit: 'each', prep: 'from your breakdowns, chopped to fit the pot' },
      { item: 'Cold water', qty: 4, unit: 'L' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'halved' },
      { item: 'Carrot', qty: 1, unit: 'each', prep: 'thick rounds' },
      { item: 'Celery', qty: 2, unit: 'stalks', prep: 'chopped' },
      { item: 'Bay leaf + parsley stalks + peppercorns', qty: 1, unit: 'bundle' },
      { item: 'Butter', qty: 60, unit: 'g' },
      { item: 'Plain flour', qty: 40, unit: 'g' },
      { item: 'Long-grain rice', qty: 200, unit: 'g', prep: 'rinsed until clear' },
      { item: 'Cooked chicken meat', qty: 300, unit: 'g', prep: 'shredded — roast leftovers are ideal' },
      { item: 'Cream', qty: 100, unit: 'ml' },
      { item: 'Lemon juice', qty: null, unit: 'to taste' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Stock: cover the carcasses with the cold water and bring up slowly over 30–40 minutes. Skim the grey raft as it forms and never let the pot boil.',
      'Simmer at a bare shiver 4 hours, skimming occasionally. Add the onion, carrot, celery and aromatic bundle for the final hour only.',
      'Strain without pressing, then measure: bank 1 litre in labelled containers for the freezer and keep about 1.2 litres for the soup. Salt none of it yet.',
      'Pilaf: melt 20 g butter in a small pot, toast the rice until translucent at the edges, add 300 ml hot stock and a pinch of salt, lid on, lowest heat 12 minutes, rest 10. Fork, never stir.',
      'Velouté: melt the remaining butter in a soup pot, whisk in the flour, and cook the blond roux 2–3 minutes until it smells biscuity. Whisk in the remaining hot stock gradually and simmer 10 minutes, skimming the skin that forms.',
      'Add the shredded chicken and cream, warm through without boiling, and season in stages — the stock was unsalted, so this soup teaches you how much salt a litre really needs. Taste on a cooled spoon each round.',
      'Brighten with lemon juice a few drops at a time, then serve ladled over a spoonful of pilaf in each warmed bowl.',
    ],
    chefNotes: [
      'Freezer stock is the compounding asset of this whole stage: label with date and “unsalted”, freeze flat in bags for fast thawing, and run FIFO. Three carcasses in the freezer is your trigger to make the next batch.',
      'The skin that forms on a simmering velouté carries impurities — skim it off rather than whisking it back in, exactly as you did in Module 5.',
    ],
    reinforces: ['White stock discipline from Module 4', 'Roux and velouté from Module 5', 'Pilaf ratio work from Module 7'],
  },
]
