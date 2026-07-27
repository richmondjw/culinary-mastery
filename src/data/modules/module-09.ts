import type { CourseModule, Recipe } from '../../types/content'

export const module09: CourseModule = {
  id: 'm09',
  number: 9,
  stage: 2,
  title: 'Fish & Shellfish',
  subtitle: 'Precision at the water’s edge',
  description:
    'Fish rewards precision and punishes hesitation more than any other protein. This module takes you from the fishmonger’s counter to the plate: judging freshness, filleting round and flat fish, crisp-skin searing, gentle poaching, curing, and the split-second timing of shellfish. Every frame you produce feeds a fumet — the stock discipline of Module 4 comes straight back to work.',
  objectives: [
    'Select genuinely fresh fish by eye, gill, smell and touch — and refuse anything less',
    'Fillet a round fish into two clean fillets and a flat fish into four, pin-boned and trimmed',
    'Sear fish 80% on the skin side to an audibly crisp skin and a just-set centre',
    'Poach and cure fish for the silk textures that dry heat cannot give',
    'Cook mussels, prawns and squid inside their narrow windows, and turn every frame into fumet',
  ],
  difficulty: 4,
  estimatedHours: 10,
  prerequisites: ['m05', 'm06'],
  skillsUnlocked: [
    'Round & flat fish filleting',
    'Crisp-skin fish cookery',
    'Curing & gravlax',
    'Shellfish timing',
    'Fumet from frames',
  ],
  equipment: [
    'Flexible filleting knife (15–18 cm)',
    'Fish tweezers / pin-boning pliers',
    'Heavy non-stick or well-seasoned pan (26–28 cm)',
    'Fish slice / thin flexible spatula',
    'Digital probe thermometer',
    'Fine chinois or sieve + muslin',
    'Lidded wide pot for mussels',
    'Non-reactive tray for curing',
  ],
  ingredients: [
    '2 whole round fish (snapper, salmon or barramundi, 1–1.5 kg each)',
    '1 whole flat fish (flounder or sole)',
    '1 side of salmon, skin on, pin bones in (about 800 g)',
    '1 kg live mussels',
    '500 g raw prawns, shell on',
    'Dry white wine, white wine vinegar, lemons',
    'Rock salt, caster sugar, dill',
    'Unsalted butter, shallots, cream',
  ],
  lessons: [
    {
      id: 'm09-l01',
      title: 'Buying fish & filleting the round fish',
      summary: 'Freshness cues you can trust, and the head-to-tail filleting method that leaves nothing on the frame.',
      theory: [
        {
          heading: 'Freshness is non-negotiable',
          body: 'Fresh fish is judged before money changes hands: eyes clear and convex, not sunken or cloudy; gills bright red, not brown; flesh that springs back from a fingertip; skin glossy with intact scales; and a smell of clean seawater — never “fishy”. Ammonia notes mean the fish is breaking down, and no technique in this module rescues it.\n\nBuy whole fish where you can. A whole fish cannot hide its age the way a fillet under cling film can, it costs less per usable kilogram once you fillet it yourself, and the frame is the raw material for fumet. Cook fish the day you buy it, or within 24 hours stored on ice in the coldest part of the fridge, in a drained container so it never sits in its own meltwater.',
        },
        {
          heading: 'Riding the frame',
          body: 'Round-fish filleting is one idea: keep the blade flat against the bones and let the skeleton steer. Cut behind the head down to the spine, then run long, shallow strokes from head to tail along the backbone, lifting the fillet as you go. You should hear a soft tick-tick as the blade rides the rib cage — that sound means you are leaving flesh on the fillet, not on the frame.\n\nAfterwards comes pin-boning: run a fingertip along the centre line of each fillet to find the row of pin bones, then pull each one out with tweezers, drawing toward the head end — with the grain of the bone, against the lie of the flesh — so you do not tear the fillet. Weigh your fillets against the whole fish: 45–50% yield is professional; below 40% means the frame is wearing your dinner.',
        },
      ],
      demonstrations: [
        {
          title: 'Filleting a round fish, two fillets and a frame',
          steps: [
            'Scale the fish if the skin will be eaten; rinse and dry it completely — a wet fish is a slippery fish.',
            'Cut diagonally behind the head and pectoral fin down to the spine, angling the blade toward the head to save flesh.',
            'Turn the blade flat toward the tail and cut along the top of the backbone in long strokes, opening the fish like a book.',
            'Work the blade over the rib cage, listening for the tick of bone under the edge, until the fillet comes free at the tail.',
            'Flip and repeat for the second fillet — the second side is harder because the frame now flexes; press it flat with your guiding hand.',
            'Trim the belly flap and fin lines, pin-bone both fillets, and put the frame — gills removed, rinsed — straight into a bag for fumet.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Two-fish yield drill',
          instructions: 'Fillet two whole round fish in one session. Weigh each whole fish, then its fillets, and calculate your yield percentage for both. Photograph the frames — a good frame looks almost polished, with no ragged chunks of flesh left behind. Note where your second fish improved on your first.',
          repeatPractice: 'Fillet a whole fish at least once a fortnight through Stages 2 and 3. Yield percentage is your progress bar, and Module 13 will ask you to cost a fish dish using your own real yield numbers.',
        },
      ],
      recipeIds: ['r-m09-01'],
      techniqueIds: ['t-filleting-round', 't-filleting-flat', 't-mise-en-place'],
      troubleshooting: [
        {
          problem: 'Fillets come away ragged with flesh left all over the frame',
          cause: 'Short, sawing strokes and a blade angled away from the bone — the knife is wandering through the flesh instead of riding the skeleton.',
          fix: 'Slow down and lengthen the stroke: fewer, longer, shallower passes with the blade flexed slightly down onto the bone. Sharpen the knife first; a dull filleting knife tears.',
        },
        {
          problem: 'Pin bones snap off inside the fillet',
          cause: 'Pulling straight up or toward the tail, against the angle the bone sits at.',
          fix: 'Grip the bone tip firmly with tweezers and draw it out toward the head end, following its own angle. Support the flesh around it with two fingers of the other hand.',
        },
      ],
    },
    {
      id: 'm09-l02',
      title: 'Crisp-skin searing & the fish pan sauce',
      summary: 'The 80% skin-side method for crackling skin and a moist centre, finished with a beurre blanc.',
      theory: [
        {
          heading: 'Why 80% on the skin',
          body: 'Crisp skin needs three things: a bone-dry surface, steady moderate-high heat, and time. Moisture must evaporate before the skin can crisp, so dry the skin thoroughly — press it between paper towels, then leave the fillet skin-up and uncovered in the fridge for an hour if you can. Salt it just before the pan; salt applied early draws water back to the surface.\n\nThe fillet cooks 80% of the way skin-side down. The skin insulates the flesh, so heat creeps up gently while the skin renders and crisps; you can watch the opaque line climb the side of the fillet. When it reaches two-thirds of the way up, flip for 30–60 seconds to kiss the flesh side, then rest. A 2.5 cm fillet takes roughly 4–5 minutes skin-side on medium-high. Press gently for the first 30 seconds after it lands so the fillet cannot cup away from the pan — cupped skin steams in its own shadow.',
        },
        {
          heading: 'Doneness and the sauce that suits it',
          body: 'Fish is done far earlier than instinct suggests: 45–50°C in the centre for salmon and most white fish, translucent turning opaque, flakes just parting under a fingertip. Carryover adds several degrees during the rest, so pull it while a probe still reads shy of target. Overcooked fish weeps white albumin — that curd on the surface is your signal you went past.\n\nBeurre blanc is the classic partner: a reduction of white wine, vinegar and shallot mounted with cold butter, sharp enough to cut the richness of crisp skin. It holds between 50 and 58°C — hotter and it splits to oil, colder and it sets. Make it before the fish goes in the pan and hold it at the back of the stove; the fish’s timing is too tight to build a sauce mid-sear.',
        },
      ],
      demonstrations: [
        {
          title: 'Crisp-skin fillet, start to plate',
          steps: [
            'Dry the skin aggressively with paper towel; check the fillet for stray scales and pin bones.',
            'Film a heavy pan with 15 ml of neutral oil and bring it to medium-high — the oil should shimmer, not smoke.',
            'Salt the skin, lay the fillet in away from you, and press it flat with a spatula for the first 30 seconds.',
            'Cook without moving it, watching the opaque line climb the side of the fillet — about 4 minutes for 2.5 cm.',
            'When the line is two-thirds up, flip; add a knob of butter and cook 30–60 seconds on the flesh side.',
            'Rest skin-up on a rack for 2 minutes — never skin-down, or steam undoes your work. Tap the skin: it should sound dry.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The skin ladder',
          instructions: 'Cook three fillets in one session at three heat levels: one on medium, one on medium-high, one just below smoking. Compare skin colour, crispness and flesh doneness. Find the setting on your stove and pan where skin crisps deeply in the time the flesh takes to cook — write it down as your number.',
          repeatPractice: 'Recook the winning setting once a week through Stage 2. This calibration transfers directly to poultry skin in Module 10 and to searing meat in Module 11 — same physics, different protein.',
        },
        {
          title: 'Beurre blanc under pressure',
          instructions: 'Make a beurre blanc, hold it 20 minutes at the back of the stove, and use it across two servings of fish cooked back to back. If it splits, rescue it with a spoonful of cold water and fresh whisking — and note what temperature it split at.',
        },
      ],
      recipeIds: ['r-m09-02'],
      techniqueIds: ['t-skin-searing', 't-beurre-blanc', 't-pan-sauce', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'Skin sticks and tears when you try to move the fillet',
          cause: 'The pan was too cool, the skin was wet, or you moved it before the skin released.',
          fix: 'A properly crisped skin releases itself. If it resists, give it another 30–60 seconds. Next time: drier skin, hotter pan, and a thin film of oil across the whole surface.',
        },
        {
          problem: 'White curds weeping from the flesh',
          cause: 'Albumin pushed out by overcooking or heat that was too aggressive for the thickness.',
          fix: 'Pull fish at 45–48°C core and let carryover finish it. For thick fillets, drop the heat one notch after the first two minutes.',
        },
      ],
    },
    {
      id: 'm09-l03',
      title: 'Gentle heat and no heat: poaching & curing',
      summary: 'Silk textures from barely-trembling liquid, and gravlax — flavour and preservation from salt and sugar alone.',
      theory: [
        {
          heading: 'Poaching: cooking at a whisper',
          body: 'Poaching holds fish in liquid at 55–65°C — well below a simmer, a shiver at most — until the flesh just sets at 45–50°C in the centre. At these temperatures the muscle proteins set without squeezing out moisture, giving a texture searing can never reach: dense, silky, clean.\n\nThe liquid is a seasoning decision. A court-bouillon — water, white wine, a splash of vinegar, sliced onion, carrot, bay and peppercorns, simmered 20 minutes then cooled to temperature — seasons the fish as it cooks. Butter or olive oil poaching wraps lean fish in fat. Either way the rule is the same: bring the liquid to temperature first, hold it there with a thermometer in the pot, and slide the fish in off the boil. Bubbles mean you are already too hot.',
        },
        {
          heading: 'Curing: cooking without heat',
          body: 'A cure of equal parts salt and sugar draws water out of the flesh by osmosis and seasons it deeply as it goes. As moisture leaves, the proteins firm and the flavour concentrates — the fish is transformed without ever seeing heat. For a side of salmon: coat with the cure, add crushed pepper and a forest of chopped dill, wrap, weight it with a tray and cans, and refrigerate 24–48 hours, turning once. 24 hours gives a tender, lightly-set cure; 48 gives a firmer, saltier, more sliceable one.\n\nAfterwards, rinse the cure off quickly, dry the fish well, and rest it uncovered in the fridge for a few hours — the surface dries to a slightly tacky pellicle that improves both texture and slicing. Slice on the long bias with the blade nearly flat, thin enough to read a knife through.',
        },
      ],
      demonstrations: [
        {
          title: 'Court-bouillon poached fish',
          steps: [
            'Simmer 1 L water with 200 ml white wine, 30 ml vinegar, sliced onion, carrot, bay, parsley stalks and 12 g salt for 20 minutes.',
            'Cool the liquid to 60–65°C, checking with a probe — this is the working band.',
            'Slide in portioned fillets and hold the temperature steady, adjusting the flame down as needed.',
            'Poach 6–8 minutes for 2.5 cm portions, until a probe in the centre reads 45–48°C.',
            'Lift out with a slotted spatula onto a warm plate; season with flaky salt and a thread of good olive oil — poached fish is naked, so seasoning shows.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Same fish, three textures',
          instructions: 'Take three equal portions from one fillet. Sear one crisp-skin, poach one, and cure one for 24 hours (a small-batch cure works: 50 g salt, 50 g sugar per 300 g fish). Taste all three side by side — ideally on the same day — and write five lines on how texture, seasoning depth and flavour differ. This tasting is the point of the whole module.',
          repeatPractice: 'Repeat the three-texture comparison with a different species in Stage 3 menu work — choosing the right cooking method for the fish in front of you is a menu-writing skill, not a one-off exercise.',
        },
      ],
      recipeIds: ['r-m09-03'],
      techniqueIds: ['t-poaching-fish', 't-curing', 't-tasting', 't-acid-balance'],
      troubleshooting: [
        {
          problem: 'Poached fish is stringy and dry despite all that liquid',
          cause: 'The liquid was simmering, not shivering — fish overcooks at 80°C just as surely as in a pan.',
          fix: 'Use the thermometer, not your eye. 60–65°C liquid, fish out at 45–48°C core. Surrounding a fish with water does not protect it from heat.',
        },
        {
          problem: 'Gravlax is unpleasantly salty right through',
          cause: 'Cured too long for the thickness, or the cure ratio drifted salt-heavy.',
          fix: 'Stick to equal salt and sugar by weight and pull a tail-end piece at 24 hours to taste. Thin pieces cure faster than thick — tuck the tail under to even the thickness.',
        },
      ],
    },
    {
      id: 'm09-l04',
      title: 'Shellfish: seconds matter — and frames become fumet',
      summary: 'Mussels, prawns and squid on their unforgiving clocks, plus the 30-minute stock that repays every frame you save.',
      theory: [
        {
          heading: 'The narrow windows',
          body: 'Shellfish cook in moments and toughen in moments more. Mussels are done as they open — start checking at 3 minutes, pull the opened ones, and discard any still shut after 6. Prawns need 1–2 minutes: opaque, just curled into a loose C. A tight O-shape is the universal sign of an overcooked prawn. Squid obeys a two-regime rule: 45 seconds over hard heat, or 45 minutes in a braise — anything between is rubber, because its collagen tightens fast and only long cooking dissolves it again.\n\nBuy shellfish alive or impeccably fresh: mussels closed (or closing when tapped), smelling of the sea; prawns firm with no blackening at the head joints; squid bright-eyed with pearly, undamaged flesh. Store on ice, cook the same day.',
        },
        {
          heading: 'Fumet: Module 4, revisited at the fish counter',
          body: 'A fumet is a fish stock with the white-stock discipline you built in Module 4, compressed: frames from lean white fish (avoid oily fish — salmon and mackerel frames turn a stock muddy), gills out, soaked briefly in cold water to draw blood, then sweated gently with sliced onion, fennel and celery, covered with cold water and a glass of white wine, and simmered — never boiled — for just 30 minutes. Fish bones give up their goodness fast, and past 40 minutes they start giving up bitterness and glue instead.\n\nSkim like you mean it, strain through muslin, and reduce if you want intensity. A good fumet is pale, clear and smells of the sea and fennel — it is the base for soups, poaching liquors, and the shellfish pan liquor you will build in this lesson’s recipes.',
        },
      ],
      demonstrations: [
        {
          title: 'Mussels in the pot',
          steps: [
            'Scrub the mussels and pull the beards toward the hinge; discard any that stay open when tapped firmly.',
            'Sweat sliced shallot and garlic in butter in a wide lidded pot over high heat, 1 minute.',
            'Add 150 ml white wine, bring to a hard boil, then add the mussels and clamp the lid on.',
            'Shake the pot once; steam 3–4 minutes, lifting the lid at 3 to pull opened mussels into a bowl.',
            'Discard any still closed at 6 minutes. Taste the liquor before seasoning — mussels bring their own salt.',
            'Strain the liquor through muslin if gritty, finish with cream or butter and herbs, and pour back over the mussels.',
          ],
        },
        {
          title: 'A 30-minute fumet',
          steps: [
            'Remove gills from the frames, chop the frames into fist-sized pieces, and soak 20 minutes in cold water.',
            'Sweat sliced onion, fennel and celery in butter without colour, 5 minutes.',
            'Add the drained frames and sweat 2 minutes more, then add 150 ml white wine and reduce by half.',
            'Cover with cold water, bring to a bare simmer, and skim the grey foam as it rises.',
            'Simmer 30 minutes — no longer — then rest 10 minutes off the heat and strain through muslin without pressing.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The prawn clock',
          instructions: 'Cook six prawns in a hot pan, removing one every 30 seconds from 60 seconds to 3 minutes 30. Line them up in order, photograph, and taste from both ends toward the middle. Mark the exact moment texture turns from juicy snap to dry bounce — that is your window, and it is shorter than you think.',
          repeatPractice: 'Rerun a timing ladder whenever you meet a new quick-cooking protein — scallops, calamari, chicken livers. Building a personal doneness clock per ingredient is a career-long habit that Module 11 formalises with the probe.',
        },
      ],
      recipeIds: ['r-m09-01', 'r-m09-04'],
      techniqueIds: ['t-shellfish', 't-white-stock', 't-reduction', 't-sauteing'],
      troubleshooting: [
        {
          problem: 'Fumet is cloudy and tastes bitter',
          cause: 'Gills left in, a rolling boil, or the frames simmered far past 40 minutes.',
          fix: 'Gills out always; keep the surface at a bare shiver; set a 30-minute timer. Strain gently through muslin — pressing the solids pushes cloudiness through.',
        },
        {
          problem: 'Squid turned to rubber in the pan',
          cause: 'It sat in the middle zone — more than a minute of heat, less than a braise.',
          fix: 'Choose a lane before you start: screaming-hot pan for 45–60 seconds total, or into a 45-minute braise. Cut scores into thicker pieces so hard heat penetrates instantly.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Buying fillets on autopilot and cooking them two days later',
      cause: 'Treating fish like meat, which forgives a longer fridge life.',
      fix: 'Buy whole where possible, judge freshness at the counter, and cook within 24 hours on ice. The dish is decided at the fishmonger, not at the stove.',
    },
    {
      problem: 'Flipping fish early and often',
      cause: 'Sear anxiety — the fear that still means burning.',
      fix: 'One flip. 80% of the cook happens skin-side down, and the skin tells you when by releasing on its own. Watch the opaque line climb the fillet instead of poking at it.',
    },
    {
      problem: 'Throwing frames, shells and heads in the bin',
      cause: 'Not connecting this module back to the stock discipline of Module 4.',
      fix: 'Frames become fumet within 24 hours or go straight to the freezer, labelled. Prawn shells roast into the soup base in r-m09-04. You paid for the whole animal — use it.',
    },
    {
      problem: 'Seasoning delicate fish like a steak',
      cause: 'Carrying the heavy salting of red meat across to a protein with far less mass and fat.',
      fix: 'Season just before cooking, taste sauces separately, and finish with flaky salt and acid at the plate. Fish carries seasoning on its surface — a little reads as a lot.',
    },
  ],
  assessment: {
    id: 'as-m09',
    moduleId: 'm09',
    title: 'Whole Fish, Whole Craft',
    brief:
      'In one 2.5-hour session, starting from one whole round fish and 500 g of mussels: (1) fillet the fish, weigh for yield, and pin-bone both fillets; (2) start a fumet from the frame within 20 minutes of filleting; (3) crisp-skin sear one fillet and serve it with a beurre blanc; (4) cook the mussels in white wine, finishing the liquor as a sauce. Serve the fish and mussels as two small plates. Probe temperatures must be checked and recorded for the seared fish.',
    rubric: [
      { criterion: 'Filleting & yield', maxScore: 10, guidance: '9–10: clean fillets, polished frame, 45%+ yield, all pin bones out. 6–8: minor raggedness or a missed bone. Below 6: flesh visibly wasted on the frame.' },
      { criterion: 'Crisp skin & doneness', maxScore: 10, guidance: 'Skin crackles when tapped and stays crisp on the plate; centre 48–52°C after rest, moist and just opaque, no albumin weep.' },
      { criterion: 'Fumet quality', maxScore: 8, guidance: 'Pale, clear, clean-tasting; gills removed, simmered not boiled, 30-minute discipline held, strained through muslin.' },
      { criterion: 'Shellfish timing & sauce', maxScore: 6, guidance: 'Mussels plump and just-set, none overcooked to pellets; liquor tasted before seasoning and finished into a balanced sauce.' },
      { criterion: 'Station & food safety', maxScore: 6, guidance: 'Fish on ice until use, raw/ready separation, boards reset, frames and shells triaged not binned; calm sequencing across the session.' },
    ],
    passScore: 28,
    evidence: 'Four photos: the filleted frame and fillets side by side, the strained fumet in a clear container, the plated crisp-skin fish, and the finished mussels. Note your yield percentage and the fish’s pull temperature.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'At least two whole fish filleted with yield percentages recorded',
    'All four module recipes cooked, with the three-texture tasting exercise written up',
    'Assessment passed (28/40 or better) with photo evidence and recorded temperatures',
  ],
}

export const module09Recipes: Recipe[] = [
  {
    id: 'r-m09-01',
    title: 'Fumet & Saffron Fish Soup',
    moduleId: 'm09',
    description:
      'A clean 30-minute fumet from your own frames, turned into a saffron-scented soup with poached pieces of the fish it came from. The whole-animal loop closed in one pot — and Module 4’s stock discipline re-drilled at speed.',
    difficulty: 3,
    serves: 6,
    timeMins: 90,
    techniqueIds: ['t-white-stock', 't-reduction', 't-poaching-fish', 't-seasoning-salt'],
    ingredients: [
      { item: 'White fish frames (snapper, flathead)', qty: 1.2, unit: 'kg', prep: 'gills removed, chopped, soaked 20 min' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'sliced' },
      { item: 'Fennel bulb', qty: 1, unit: 'each', prep: 'sliced, fronds reserved' },
      { item: 'Celery', qty: 2, unit: 'stalks', prep: 'sliced' },
      { item: 'Butter', qty: 40, unit: 'g' },
      { item: 'Dry white wine', qty: 200, unit: 'ml' },
      { item: 'Saffron threads', qty: 0.5, unit: 'g' },
      { item: 'Tinned whole tomatoes', qty: 200, unit: 'g', prep: 'crushed by hand' },
      { item: 'Waxy potatoes', qty: 300, unit: 'g', prep: 'medium dice (12 mm)' },
      { item: 'White fish fillet', qty: 400, unit: 'g', prep: 'cut into 3 cm pieces' },
      { item: 'Cream', qty: 100, unit: 'ml' },
      { item: 'Lemon juice', qty: null, unit: 'to taste' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Full mise first — this recipe runs in two phases, and the second is fast. Sweat the onion, fennel and celery in butter over low heat, 5 minutes, no colour.',
      'Add the drained frames, sweat 2 minutes, then pour in the wine and reduce by half.',
      'Cover with 1.5 L cold water, bring to a bare shiver, and skim the grey foam. Simmer exactly 30 minutes, then rest 10 and strain through muslin without pressing.',
      'Return the fumet to a clean pot. Add saffron, tomatoes and potatoes; simmer until the potato is just tender, about 12 minutes, then reduce gently until the flavour reads full — taste it now, before the cream.',
      'Stir in the cream and season with salt in stages, tasting after each addition on a cooled spoon.',
      'Drop the heat until the surface barely trembles — 60–65°C — and slide in the fish pieces. Poach 3–4 minutes until just opaque.',
      'Finish with lemon juice a few drops at a time until the soup brightens, and scatter the fennel fronds. Serve immediately — poached fish does not hold.',
    ],
    chefNotes: [
      'Only lean white frames here: oily fish (salmon, mackerel) make a muddy, heavy fumet. Freeze salmon frames for the cure-trim chowder you will improvise later instead.',
      'The 30-minute timer is a rule, not a suggestion — fish bones give bitterness and glue past 40 minutes. Set the timer when the pot first shivers.',
    ],
    reinforces: ['Stock-making discipline from Module 4', 'Layered salting and structured tasting', 'Medium dice under time pressure'],
  },
  {
    id: 'r-m09-02',
    title: 'Crisp-Skin Barramundi, Beurre Blanc & Wilted Spinach',
    moduleId: 'm09',
    description:
      'The module’s signature plate: skin that crackles audibly, flesh at silk, and a classic butter emulsion sharp enough to carry it. Sequencing is the hidden test — the sauce holds while the fish takes all your attention.',
    difficulty: 4,
    serves: 4,
    timeMins: 50,
    techniqueIds: ['t-skin-searing', 't-beurre-blanc', 't-sauteing', 't-tasting'],
    ingredients: [
      { item: 'Barramundi fillets, skin on, pin-boned', qty: 4, unit: 'each', prep: '160–180 g portions, skin dried' },
      { item: 'Neutral oil', qty: 30, unit: 'ml' },
      { item: 'Unsalted butter, cold', qty: 200, unit: 'g', prep: '150 g cubed for the sauce, 50 g for pan and spinach' },
      { item: 'Shallots', qty: 2, unit: 'each', prep: 'fine dice' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'White wine vinegar', qty: 50, unit: 'ml' },
      { item: 'Baby spinach', qty: 300, unit: 'g', prep: 'washed and dried' },
      { item: 'Lemon', qty: 1, unit: 'each' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Dry the fish skin between paper towels, then rest the fillets skin-up and uncovered in the fridge while you build the sauce.',
      'Beurre blanc: reduce the wine, vinegar and shallots in a small pan to about 2 tablespoons of syrup. Over the lowest heat, whisk in the cold butter cubes a few at a time, keeping the sauce moving and never letting it steam hard. Season, add a squeeze of lemon, and hold it warm — not hot — at the back of the stove.',
      'Heat the oil in a heavy pan over medium-high until it shimmers. Salt the fish skin, lay the fillets in away from you, and press each flat with a spatula for 30 seconds.',
      'Cook 4–5 minutes without moving them, watching the opaque line climb two-thirds of the way up each fillet.',
      'Flip, add 25 g butter, and cook 30–60 seconds more — a probe should read 45–48°C at the centre. Rest the fillets skin-up on a rack.',
      'In the same pan, melt the remaining butter and wilt the spinach with a pinch of salt, 60 seconds; drain it briefly so it does not flood the plate.',
      'Sauce on the plate first, spinach beside it, fish skin-up on top — never sauce over the skin. Finish with flaky salt and serve while the skin still talks.',
    ],
    chefNotes: [
      'The order is the lesson: sauce first, held warm; vegetables ready; fish last. Fish waits for nothing and no one.',
      'If the beurre blanc thickens as it holds, whisk in a teaspoon of warm water. If it turns oily, it went above ~58°C — start a fresh tablespoon of reduction and whisk the split sauce back into it.',
    ],
    reinforces: ['Sequencing and mise en place under pressure', 'Emulsion temperature discipline', 'Resting protein before plating'],
  },
  {
    id: 'r-m09-03',
    title: 'Dill & Pepper Gravlax with Mustard Sauce',
    moduleId: 'm09',
    description:
      'A side of salmon transformed by salt, sugar and 48 patient hours — no heat anywhere. The classic hovmästarsås mustard sauce and thin-bias slicing complete a dish that outperforms anything you can buy, at half the price per kilogram.',
    difficulty: 3,
    serves: 6,
    timeMins: 45,
    techniqueIds: ['t-curing', 't-vinaigrette', 't-acid-balance', 't-mise-en-place'],
    ingredients: [
      { item: 'Salmon side, skin on, pin-boned', qty: 800, unit: 'g', prep: 'trimmed, tail tucked to even thickness' },
      { item: 'Rock salt', qty: 100, unit: 'g' },
      { item: 'Caster sugar', qty: 100, unit: 'g' },
      { item: 'Black peppercorns', qty: 10, unit: 'g', prep: 'coarsely crushed' },
      { item: 'Dill', qty: 100, unit: 'g', prep: 'roughly chopped, stalks and all' },
      { item: 'Dijon mustard', qty: 40, unit: 'g' },
      { item: 'Honey', qty: 20, unit: 'g' },
      { item: 'White wine vinegar', qty: 20, unit: 'ml' },
      { item: 'Neutral oil', qty: 100, unit: 'ml' },
      { item: 'Rye bread, to serve', qty: 1, unit: 'loaf', prep: 'thinly sliced' },
    ],
    method: [
      'Run your fingers over the salmon and pull any remaining pin bones — one missed bone ruins a slice. Mix the salt, sugar and crushed pepper.',
      'Lay half the dill on a double layer of cling film, then half the cure. Set the salmon on top skin-down, pack the remaining cure over the flesh, and bury it under the rest of the dill.',
      'Wrap tightly, sit it in a tray to catch brine, weight it with a second tray and a couple of tins, and refrigerate 48 hours, flipping the parcel once at 24.',
      'Unwrap, rinse the cure off quickly under cold water, and dry the fish thoroughly. Rest it uncovered in the fridge 2–4 hours to form the pellicle.',
      'Mustard sauce: whisk mustard, honey and vinegar, then add the oil in a thin stream as for a mayonnaise until thick and glossy. Fold in a tablespoon of chopped dill and taste — it should be sharp first, sweet second.',
      'Slice the gravlax on a long bias with the blade nearly flat, starting at the tail end, in slices thin enough to see the knife through. Leave the skin behind.',
      'Serve the slices slightly overlapping with the sauce alongside and rye bread — and taste a slice plain first, to judge your cure before the sauce dresses it.',
    ],
    chefNotes: [
      'The 48-hour cure gives a firm, deeply-seasoned classic; pull at 24 hours if you prefer it tender and mild. Taste a sliver from the tail at 24 and decide — it is your palate being trained, not the clock.',
      'Gravlax keeps a week wrapped in the fridge and freezes well in portions — label and date, first in, first out.',
    ],
    reinforces: ['Cold emulsion technique from Module 5', 'Thin-blade slicing control', 'Label-and-date storage discipline'],
  },
  {
    id: 'r-m09-04',
    title: 'Mussels, Prawns & Charred Squid with Roasted-Shell Broth',
    moduleId: 'm09',
    description:
      'Three shellfish, three clocks, one pan of deeply savoury broth built from roasted prawn shells. A dish that only works if your timing does — which is exactly why it is here.',
    difficulty: 4,
    serves: 4,
    timeMins: 70,
    techniqueIds: ['t-shellfish', 't-reduction', 't-umami-layering', 't-sauteing'],
    ingredients: [
      { item: 'Live mussels', qty: 1, unit: 'kg', prep: 'scrubbed, debearded' },
      { item: 'Raw prawns, shell on', qty: 500, unit: 'g', prep: 'peeled, shells and heads reserved' },
      { item: 'Squid tubes', qty: 300, unit: 'g', prep: 'opened flat, inside scored in a crosshatch, cut into 4 cm pieces' },
      { item: 'Olive oil', qty: 45, unit: 'ml' },
      { item: 'Garlic', qty: 4, unit: 'cloves', prep: 'sliced' },
      { item: 'Shallots', qty: 2, unit: 'each', prep: 'fine dice' },
      { item: 'Tomato paste', qty: 20, unit: 'g' },
      { item: 'Dry white wine', qty: 250, unit: 'ml' },
      { item: 'Butter', qty: 40, unit: 'g' },
      { item: 'Flat-leaf parsley', qty: 15, unit: 'g', prep: 'chopped' },
      { item: 'Lemon', qty: 1, unit: 'each' },
      { item: 'Crusty bread, to serve', qty: 1, unit: 'loaf' },
    ],
    method: [
      'Roast the prawn shells and heads in 15 ml oil in a hot wide pot until deep pink and toasty, 4–5 minutes, crushing the heads with a spoon. Add half the shallots, the tomato paste, and cook 2 minutes more.',
      'Deglaze with 150 ml wine, add 400 ml water, and simmer 15 minutes. Strain, pressing the shells hard this time — this broth wants every drop of flavour — and reserve.',
      'Mise for the fast phase: all shellfish prepped and dry, garlic sliced, butter cubed, parsley chopped, bowls warmed. From here the dish takes six minutes.',
      'Sear the squid first: 15 ml oil in a screaming-hot pan, squid in a single layer, 45–60 seconds total until the scores curl it into pinecones. Out onto a warm plate — done means done.',
      'Same pan, medium-high: remaining oil, shallots and garlic for 30 seconds, then the remaining wine at a hard boil. Add the mussels, lid on, 3–4 minutes, pulling the opened ones into warm bowls as they go.',
      'Add the reserved shell broth to the pot liquor and reduce hard for 2 minutes. Drop in the prawns and cook 60–90 seconds until just C-shaped and opaque.',
      'Off the heat, swirl in the butter, add parsley and lemon juice, and taste — the mussel liquor is salty, so season last if at all. Return the squid, pour everything over the mussels, and serve with bread for the broth.',
    ],
    chefNotes: [
      'Three clocks, one rule: cook the longest-holding item first (squid holds a minute; prawns hold seconds; mussels go straight to the bowl). Never try to land all three simultaneously in one pan.',
      'The roasted-shell broth is the umami engine — shells you would have binned become the deepest flavour in the dish. The same move works with crab and lobster shells.',
    ],
    reinforces: ['Mise en place for a fast-fire dish', 'Umami layering from Module 2', 'Tasting before seasoning'],
  },
]
