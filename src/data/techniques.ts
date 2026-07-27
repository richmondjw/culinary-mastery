import type { Technique } from '../types/content'

// The canonical technique library. IDs are referenced by lessons and recipes —
// treat them as stable identifiers.

export const techniques: Technique[] = [
  // ---- Knife & prep ----
  {
    id: 't-knife-grip',
    name: 'Knife grip & guiding hand',
    category: 'Knife & prep',
    summary: 'Pinch grip on the blade, claw on the guiding hand — control and safety come from the same posture.',
    keyPoints: [
      'Pinch the blade between thumb and forefinger; the handle rests in the remaining fingers.',
      'Guiding hand curls into a claw; knuckles ride the flat of the blade.',
      'The knife rocks or slices forward — it never lifts higher than the knuckles beside it.',
    ],
  },
  {
    id: 't-julienne',
    name: 'Julienne',
    category: 'Knife & prep',
    summary: 'Matchsticks, classically 2 mm × 2 mm × 5 cm. The gateway cut — brunoise is julienne turned sideways.',
    keyPoints: [
      'Square the vegetable first; flat faces make stable, even slices.',
      'Slice into 2 mm planks, stack no more than three, cut into 2 mm sticks.',
      'Consistency beats speed — even cuts cook evenly.',
    ],
  },
  {
    id: 't-brunoise',
    name: 'Brunoise',
    category: 'Knife & prep',
    summary: '2 mm dice cut from julienne. The test cut of professional kitchens.',
    keyPoints: [
      'Gather julienne sticks parallel, cut crosswise at the same 2 mm interval.',
      'Keep the tip of the knife on the board; use a forward slice, not a chop.',
      'Fine brunoise (1 mm) is the same motion with more patience.',
    ],
  },
  {
    id: 't-chiffonade',
    name: 'Chiffonade',
    category: 'Knife & prep',
    summary: 'Ribbon-cut leaves — stack, roll, slice thin. For basil, mint, silverbeet and anything leafy.',
    keyPoints: [
      'Stack leaves largest to smallest, roll into a tight cigar.',
      'Slice across the roll with a single forward stroke per cut.',
      'Cut just before use; bruised herbs blacken fast.',
    ],
  },
  {
    id: 't-dice',
    name: 'Dice (small, medium, large)',
    category: 'Knife & prep',
    summary: 'Uniform cubes: 6 mm (small), 12 mm (medium), 20 mm (large). The workhorse cuts of prep.',
    keyPoints: [
      'Planks → sticks → cubes, holding the same dimension at each pass.',
      'Match dice size to cooking time: small for quick sautés, large for braises.',
      'Onion dice is its own method: radial + horizontal cuts, root end intact.',
    ],
  },
  {
    id: 't-mince',
    name: 'Mincing garlic, herbs & aromatics',
    category: 'Knife & prep',
    summary: 'Fine, even mincing without bruising — rock the blade, gather, repeat.',
    keyPoints: [
      'Crush garlic first to loosen the skin, then rock-mince with fingertips on the spine.',
      'Salt acts as an abrasive for garlic paste under the flat of the blade.',
      'Herbs: dry leaves and a sharp blade, or you make wet green mush.',
    ],
  },
  {
    id: 't-sharpening',
    name: 'Sharpening & honing',
    category: 'Knife & prep',
    summary: 'A whetstone reshapes the edge; a honing steel realigns it. Sharp is safe.',
    keyPoints: [
      'Hone before each session: 15–20°, light strokes, alternating sides.',
      'Stone monthly: 1000 grit to raise a burr along the full edge, 3000+ to polish.',
      'Test on paper or a tomato — a sharp knife bites without pressure.',
    ],
  },
  {
    id: 't-mise-en-place',
    name: 'Mise en place',
    category: 'Knife & prep',
    summary: 'Everything prepped, measured and positioned before heat. The discipline that makes cooking calm.',
    keyPoints: [
      'Read the recipe twice, prep every ingredient into containers before the pan goes on.',
      'Arrange in order of use, left to right; bin and towel within reach.',
      'Clean as you go — a reset board between tasks is part of the method.',
    ],
  },

  // ---- Seasoning & palate ----
  {
    id: 't-seasoning-salt',
    name: 'Salting: when and how much',
    category: 'Seasoning & palate',
    summary: 'Salt in layers throughout cooking, not in one rescue at the end. Salt early penetrates; salt late seasons the surface.',
    keyPoints: [
      'Season at every transformation: raw protein, sweating aromatics, simmering liquid, final adjust.',
      'Pasta/blanching water: ~1% salt (10 g per litre). Meat: ~1% of weight, ahead of time.',
      'Finishing salt is texture as much as taste — flaky crystals on top, not stirred in.',
    ],
  },
  {
    id: 't-acid-balance',
    name: 'Balancing with acid',
    category: 'Seasoning & palate',
    summary: 'When a dish tastes flat but salty enough, it wants acid. Vinegar, citrus, wine, pickles — brightness is a seasoning.',
    keyPoints: [
      'Add acid at the end; heat drives off volatile brightness.',
      'Match the acid to the dish: lemon for butter, vinegar for fat, lime for chilli.',
      'A few drops at a time — the jump from flat to vivid is sudden.',
    ],
  },
  {
    id: 't-tasting',
    name: 'Structured tasting',
    category: 'Seasoning & palate',
    summary: 'Taste with a question: salt? acid? fat? sweet? bitter? texture? Taste at every stage, on a clean spoon.',
    keyPoints: [
      'Ask one dimension at a time — "does this need salt" is answerable; "is this good" is not.',
      'Taste components separately and combined; the sauce must be right on the meat, not on the spoon.',
      'Cool a spoonful first — heat masks both salt and sweetness.',
    ],
  },
  {
    id: 't-umami-layering',
    name: 'Umami layering',
    category: 'Seasoning & palate',
    summary: 'Stack glutamate sources — tomato, parmesan, mushrooms, fish sauce, miso — for depth that salt alone cannot give.',
    keyPoints: [
      'Umami compounds multiply, not add: pair glutamates (tomato) with nucleotides (dried mushroom, fish).',
      'A teaspoon of fish sauce or soy deepens a braise without announcing itself.',
      'Browning creates umami — fond is flavour capital.',
    ],
  },

  // ---- Eggs ----
  {
    id: 't-poaching-eggs',
    name: 'Poaching eggs',
    category: 'Eggs',
    summary: 'Fresh eggs, barely-moving water, no tornado required. The white sets around the yolk in 3 minutes.',
    keyPoints: [
      'Freshest possible eggs; strain away loose white in a slotted spoon.',
      'Water at a shiver (90–95°C) with a splash of vinegar; slide eggs in from a cup.',
      '3 minutes for a set white and liquid yolk; hold in iced water and reheat 30 seconds to serve.',
    ],
  },
  {
    id: 't-french-omelette',
    name: 'French omelette',
    category: 'Eggs',
    summary: 'Pale, tender, baveuse centre, rolled seam-down. The classic examination of pan control.',
    keyPoints: [
      'Non-stick pan, medium heat, butter foaming not browning.',
      'Stir constantly with a fork or spatula until small curds form, then stop and let the base set.',
      'Roll from the far edge; the residual heat finishes the centre.',
    ],
  },
  {
    id: 't-custard',
    name: 'Custards & crème anglaise',
    category: 'Eggs',
    summary: 'Eggs thicken dairy between 75–84°C. Above that they scramble. Everything else is detail.',
    keyPoints: [
      'Temper: whisk hot dairy into yolks gradually before returning to heat.',
      'Cook to 82–84°C, stirring — nappe stage coats the back of a spoon.',
      'Strain immediately into a cold container to stop carryover.',
    ],
  },
  {
    id: 't-mayonnaise',
    name: 'Mayonnaise (first emulsion)',
    category: 'Eggs',
    summary: 'Yolk, acid, mustard, then oil in a thread. One yolk holds 250 ml of oil if you are patient.',
    keyPoints: [
      'Everything at room temperature; whisk yolk + mustard + acid first.',
      'Oil drop by drop until it thickens, then a thin stream.',
      'Split? Start a fresh yolk and whisk the broken sauce into it.',
    ],
  },

  // ---- Stocks & soups ----
  {
    id: 't-white-stock',
    name: 'White chicken stock',
    category: 'Stocks & soups',
    summary: 'Raw bones, cold water, gentle simmer, skim. Clean flavour and body from collagen, not from boiling.',
    keyPoints: [
      'Start bones in cold water; bring up slowly and skim the raft of protein scum.',
      'Never boil — agitation emulsifies fat and clouds the stock.',
      '4–6 hours for chicken; add mirepoix and aromatics for the final hour only.',
    ],
  },
  {
    id: 't-brown-stock',
    name: 'Brown stock & roasted bones',
    category: 'Stocks & soups',
    summary: 'Roast bones and mirepoix deeply, deglaze the tray, then simmer. Colour and caramel depth come from the oven.',
    keyPoints: [
      'Roast bones at 210°C until deep mahogany; roast or pincé the mirepoix and tomato paste.',
      'Deglaze the roasting tray — that fond is the point.',
      '6–8 hours, skimming; strain, then reduce to concentrate.',
    ],
  },
  {
    id: 't-reduction',
    name: 'Reduction',
    category: 'Stocks & soups',
    summary: 'Evaporating water concentrates flavour and body. Season after reducing, never before.',
    keyPoints: [
      'Wide pan, hard simmer, skim as it reduces.',
      'A sauce reduced by half doubles its salt — season at the end.',
      'Glace: stock reduced 8–10× to a syrup that sets solid when cold.',
    ],
  },
  {
    id: 't-clarification',
    name: 'Clarification & consommé',
    category: 'Stocks & soups',
    summary: 'An egg-white raft traps particulate as it rises, leaving crystal-clear, intensified broth.',
    keyPoints: [
      'Whisk egg whites, minced lean meat and aromatics into cold stock.',
      'Heat gently without stirring once the raft forms; ladle through it at the end.',
      'The raft also strips flavour — the meat in the raft pays it back.',
    ],
  },

  // ---- Sauces ----
  {
    id: 't-roux',
    name: 'Roux',
    category: 'Sauces',
    summary: 'Equal parts flour and butter, cooked to white, blond or brown. The starch thickener of the mother sauces.',
    keyPoints: [
      'Cook at least 2 minutes to lose the raw-flour taste.',
      'Darker roux = more flavour, less thickening power.',
      'Cold liquid into hot roux (or vice versa) prevents lumps; whisk as you combine.',
    ],
  },
  {
    id: 't-bechamel',
    name: 'Béchamel',
    category: 'Sauces',
    summary: 'Milk thickened with white roux — the base of mornay, gratins and lasagne.',
    keyPoints: [
      'Infuse the milk (onion, clove, bay) for a béchamel worth eating.',
      'Simmer 10+ minutes after thickening; undercooked béchamel tastes of flour.',
      'Nappe consistency: coats a spoon, line holds when you draw a finger through.',
    ],
  },
  {
    id: 't-veloute',
    name: 'Velouté & derivative sauces',
    category: 'Sauces',
    summary: 'White stock thickened with blond roux; finish with cream, lemon or reduction for the classic derivatives.',
    keyPoints: [
      'The velouté is only as good as the stock underneath it.',
      'Simmer and skim — the skin that forms carries impurities.',
      'Finish off the heat: cream, butter, lemon, herbs.',
    ],
  },
  {
    id: 't-tomato-sauce',
    name: 'Tomato sauce',
    category: 'Sauces',
    summary: 'From 20-minute fresh sugo to long-cooked ragù base — sweetness from slow-cooked aromatics, acidity managed not masked.',
    keyPoints: [
      'Sweat onion/garlic without colour for a bright sauce; brown them for depth.',
      'Tinned whole tomatoes, crushed by hand, beat most fresh ones.',
      'Balance at the end: salt first, then a pinch of sugar only if genuinely sharp.',
    ],
  },
  {
    id: 't-hollandaise',
    name: 'Hollandaise & warm emulsions',
    category: 'Sauces',
    summary: 'Yolks whisked to sabayon over gentle heat, then butter mounted in. Rich, unstable and worth mastering.',
    keyPoints: [
      'Sabayon first: yolks + water/reduction whisked to ribbon over a bain-marie.',
      'Butter in slowly, off and on the heat — the sauce should never exceed ~65°C.',
      'Split? Whisk the broken sauce into a fresh sabayon or a spoon of hot water.',
    ],
  },
  {
    id: 't-pan-sauce',
    name: 'Pan sauces & deglazing',
    category: 'Sauces',
    summary: 'Fond + liquid + reduction + butter. A sauce built in the pan the protein just left, in four minutes.',
    keyPoints: [
      'Pour off excess fat, keep the fond; sweat a minced shallot in what remains.',
      'Deglaze with wine or stock, scraping; reduce until syrupy.',
      'Mount cold butter off the heat, swirling; season and add resting juices.',
    ],
  },
  {
    id: 't-beurre-blanc',
    name: 'Beurre blanc',
    category: 'Sauces',
    summary: 'A butter emulsion held in a wine-shallot reduction — no yolks, all technique.',
    keyPoints: [
      'Reduce wine + vinegar + shallots to 2 tablespoons of syrup.',
      'Whisk in cold butter cubes over low heat, a few at a time.',
      'Hold warm, never hot; it splits above ~58°C and solidifies cold.',
    ],
  },
  {
    id: 't-vinaigrette',
    name: 'Vinaigrettes & cold emulsions',
    category: 'Sauces',
    summary: '3:1 oil to acid, emulsified with mustard or shallot. A seasoning system, not just a salad dressing.',
    keyPoints: [
      'Dissolve salt in the acid first — it will not dissolve in oil.',
      'Whisk oil into the acid (with mustard) for a stable emulsion; or shake in a jar.',
      'Taste on a leaf of what it will dress, not on a spoon.',
    ],
  },
  {
    id: 't-emulsification',
    name: 'Emulsification principles',
    category: 'Sauces',
    summary: 'Fat and water made to hold hands: droplets, an emulsifier, and agitation. Every creamy sauce is one of these.',
    keyPoints: [
      'Emulsifiers (lecithin in yolk, mustard, casein in butter) coat fat droplets.',
      'Add the dispersed phase slowly at the start — most emulsions break from impatience.',
      'Temperature discipline: each emulsion has a working band; know it.',
    ],
  },

  // ---- Vegetables ----
  {
    id: 't-blanching',
    name: 'Blanch & refresh',
    category: 'Vegetables',
    summary: 'Heavily salted rolling water, brief cook, iced water. Colour, texture and seasoning locked in.',
    keyPoints: [
      'Water like the sea (2–3% salt), at a hard boil, in a big pot.',
      'Cook until just tender — taste a piece; the ice bath stops it exactly there.',
      'Drain hard and dry before storage or reheating in butter.',
    ],
  },
  {
    id: 't-roasting-veg',
    name: 'Roasting vegetables',
    category: 'Vegetables',
    summary: 'High heat, space on the tray, enough fat. Browning is flavour; steam is the enemy.',
    keyPoints: [
      '200–220°C; preheat the tray for cut-side-down caramelisation.',
      'One layer, gaps between pieces; crowding steams.',
      'Salt before, acid and herbs after.',
    ],
  },
  {
    id: 't-sauteing',
    name: 'Sautéing & pan control',
    category: 'Vegetables',
    summary: 'Hot pan, small batches, movement. The technique that teaches heat management.',
    keyPoints: [
      'Pan hot before fat, fat hot before food.',
      'Batch size: the pan must recover heat within seconds of loading.',
      'Listen — a healthy sizzle is your thermometer.',
    ],
  },
  {
    id: 't-braising-veg',
    name: 'Braising & glazing vegetables',
    category: 'Vegetables',
    summary: 'Cooked slowly in a measured amount of liquid and fat until tender, the liquid reduced to a glaze.',
    keyPoints: [
      'Liquid one-third up the vegetable, butter, salt, paper cartouche.',
      'By the time the vegetable is tender the liquid should be a glaze — that is the measure.',
      'Glacé à blanc (no colour) or à brun (light caramel) — choose deliberately.',
    ],
  },
  {
    id: 't-puree',
    name: 'Purées',
    category: 'Vegetables',
    summary: 'Silk-smooth vegetable purées: cook soft, blend hot, enrich, pass through a sieve.',
    keyPoints: [
      'Cook the vegetable fully — a blender cannot fix undercooked.',
      'Blend hot with just enough liquid to move; add butter/cream at the end.',
      'Pass through a fine sieve (tamis) for restaurant texture.',
    ],
  },
  {
    id: 't-pickling',
    name: 'Quick pickling',
    category: 'Vegetables',
    summary: 'Hot brine (vinegar, water, sugar, salt) over crisp vegetables. Acidity and crunch on demand.',
    keyPoints: [
      'Baseline brine 3:2:1 — vinegar : water : sugar, plus 1 tbsp salt per 500 ml.',
      'Pour hot over thin-cut vegetables for same-day pickles.',
      'A pickled element lifts rich plates — plan one into fatty dishes.',
    ],
  },

  // ---- Grains, rice & potatoes ----
  {
    id: 't-absorption',
    name: 'Absorption method',
    category: 'Grains & potatoes',
    summary: 'Measured liquid, tight lid, low heat, rest. Rice and grains cooked by ratio, not luck.',
    keyPoints: [
      'Rinse rice until the water runs clear; ratio ~1:1.5 rice:water for long grain.',
      'Bring to a boil, lid on, lowest heat 12 min, rest 10 off the heat.',
      'Never stir mid-cook — you release starch and crush the steam channels.',
    ],
  },
  {
    id: 't-pilaf',
    name: 'Pilaf method',
    category: 'Grains & potatoes',
    summary: 'Grains toasted in fat with aromatics, then cooked in measured stock. Separate, savoury grains.',
    keyPoints: [
      'Sweat onion in butter, toast the rice until translucent at the edges.',
      'Hot stock, one boil, then lid — stovetop low or 180°C oven 15 min.',
      'Fork, never stir, after cooking.',
    ],
  },
  {
    id: 't-risotto',
    name: 'Risotto method',
    category: 'Grains & potatoes',
    summary: 'Starch agitation: hot stock in stages, constant movement, mantecatura of butter and parmesan.',
    keyPoints: [
      'Toast the rice; deglaze with wine; add hot stock a ladle at a time.',
      '18 minutes of movement releases the starch that makes it creamy — cream is cheating.',
      "All'onda: it should flow like lava when the plate is tilted; finish with cold butter + parmesan off heat.",
    ],
  },
  {
    id: 't-potato-puree',
    name: 'Potato purée / mash',
    category: 'Grains & potatoes',
    summary: 'Floury potatoes, ricer, hot milk, cold butter, and the discipline to never use a blender.',
    keyPoints: [
      'Start in cold salted water; simmer gently until a knife slides through.',
      'Rice while hot; dry the purée over low heat before enriching.',
      'Beat in butter first, then hot milk — up to 25% butter for pommes purée.',
    ],
  },
  {
    id: 't-polenta',
    name: 'Polenta & cooked grains',
    category: 'Grains & potatoes',
    summary: 'Coarse cornmeal whisked into simmering liquid, cooked long and slow, finished rich.',
    keyPoints: [
      'Rain the polenta into the liquid, whisking — 5:1 liquid:polenta.',
      '45+ minutes for coarse polenta; taste for graininess, not time.',
      'Finish with butter and cheese; leftovers set for grilling.',
    ],
  },

  // ---- Pasta ----
  {
    id: 't-pasta-dough',
    name: 'Fresh egg pasta dough',
    category: 'Pasta',
    summary: '100 g flour to 1 egg. Knead to silk, rest fully, then it does what you want.',
    keyPoints: [
      'Knead 8–10 minutes until smooth and springy; it should bounce back from a thumb press.',
      'Rest 30+ minutes wrapped, at room temperature — gluten relaxation is not optional.',
      'Adjust by feel: tacky means more flour, crumbly means a wet hand.',
    ],
  },
  {
    id: 't-rolling-laminating',
    name: 'Rolling & laminating pasta',
    category: 'Pasta',
    summary: 'Progressive rolling through the widest to thinnest settings, folding early passes for strength.',
    keyPoints: [
      'Laminate: roll, fold in thirds, repeat 3–4 times on the widest setting.',
      'Then thin one setting at a time — jumping settings tears the sheet.',
      'Flour lightly, keep sheets covered; they dry fast.',
    ],
  },
  {
    id: 't-filled-pasta',
    name: 'Filled pasta',
    category: 'Pasta',
    summary: 'Thin sheets, firm filling, no air pockets, sealed edges. Ravioli, tortellini and their relatives.',
    keyPoints: [
      'Filling should hold shape on a spoon — drain ricotta, reduce purées.',
      'Press air out from the filling outwards before sealing; air pockets burst in the pot.',
      'Cook in water at a gentle boil — a hard boil batters them open.',
    ],
  },
  {
    id: 't-pasta-emulsion',
    name: 'Marrying pasta & sauce',
    category: 'Pasta',
    summary: 'Finish pasta in the sauce with starchy cooking water — the emulsion that makes it cling.',
    keyPoints: [
      'Undercook pasta by 1–2 minutes; it finishes in the sauce.',
      'Starchy water + fat, tossed hard, emulsifies into a coating sauce.',
      'Sauce quantity: coat, not drown — the pasta is the dish.',
    ],
  },

  // ---- Fish & shellfish ----
  {
    id: 't-filleting-round',
    name: 'Filleting round fish',
    category: 'Fish & shellfish',
    summary: 'Head-to-tail cuts along the backbone, riding the frame. Two fillets, a frame for fumet, no waste.',
    keyPoints: [
      'Sharp flexible knife; cut behind the head, then long strokes along the spine.',
      'Let the bones guide the blade — you should hear the tick of the rib cage.',
      'Pin-bone with tweezers against the grain; keep the frame for stock.',
    ],
  },
  {
    id: 't-filleting-flat',
    name: 'Filleting flat fish',
    category: 'Fish & shellfish',
    summary: 'Four fillets off the frame, working from the centre line outward.',
    keyPoints: [
      'Cut down the lateral line to the bone, then sweep outward with the blade flat on the frame.',
      'Flat fish skin pulls off in one motion with a firm grip and a dry towel.',
      'The frames make the cleanest, sweetest fumet.',
    ],
  },
  {
    id: 't-skin-searing',
    name: 'Crisp-skin fish cookery',
    category: 'Fish & shellfish',
    summary: 'Dry skin, moderate-hot pan, pressure at the start, patience until the skin releases. 80% skin-side.',
    keyPoints: [
      'Dry the skin thoroughly — moisture is the enemy of crisp.',
      'Press gently for the first 30 seconds so the fillet cannot cup.',
      'Cook 80% on the skin, flip for seconds, rest. Skin should crackle audibly.',
    ],
  },
  {
    id: 't-poaching-fish',
    name: 'Poaching & gentle fish cookery',
    category: 'Fish & shellfish',
    summary: 'Fish held in barely-trembling liquid (or butter) until just set. Silk texture that searing cannot give.',
    keyPoints: [
      'Court-bouillon or seasoned oil/butter at 55–65°C.',
      'Fish is done at 45–50°C core — translucent turning opaque.',
      'Carryover is real: pull it just before done.',
    ],
  },
  {
    id: 't-curing',
    name: 'Curing & gravlax',
    category: 'Fish & shellfish',
    summary: 'Salt and sugar draw moisture and firm the flesh — flavour and preservation without heat.',
    keyPoints: [
      'Equal salt:sugar cure, ~24–48 hours for a side of salmon, weighted.',
      'Rinse, dry, rest uncovered — the pellicle improves texture.',
      'Slice thin on the bias, blade nearly flat.',
    ],
  },
  {
    id: 't-shellfish',
    name: 'Shellfish cookery',
    category: 'Fish & shellfish',
    summary: 'Mussels, prawns, squid: seconds matter. High heat fast or long braise slow — nothing between.',
    keyPoints: [
      'Mussels: hot pan, wine, lid — done as they open; discard any that stay shut.',
      'Prawns: 1–2 minutes; opaque and just curled. C-shape good, O-shape overcooked.',
      'Squid: 45 seconds hard heat, or 45 minutes braised. The middle is rubber.',
    ],
  },

  // ---- Poultry ----
  {
    id: 't-bird-breakdown',
    name: 'Whole bird breakdown',
    category: 'Poultry',
    summary: 'Eight pieces plus a carcass for stock, in under five minutes with practice.',
    keyPoints: [
      'Let the joints show you where to cut — pop the hip and shoulder joints first.',
      'Keep the blade against the carcass; the frame keeps the meat.',
      'Practice is cheap: a whole bird costs less per kg than any of its parts.',
    ],
  },
  {
    id: 't-roasting-bird',
    name: 'Roasting poultry',
    category: 'Poultry',
    summary: 'Dry skin, seasoned ahead, high-then-moderate heat, rested properly. Juicy breast and done legs together.',
    keyPoints: [
      'Salt 12–24 hours ahead, uncovered in the fridge — dry brining is the single biggest upgrade.',
      'Breast is done at 60–63°C, legs at 70°C+; shield or position accordingly.',
      'Rest 15–20 minutes; the juices redistribute or they end up on the board.',
    ],
  },
  {
    id: 't-pan-roasting',
    name: 'Pan-roasting',
    category: 'Poultry',
    summary: 'Sear on the stove, finish in the oven, baste with foaming butter. The restaurant method for portions.',
    keyPoints: [
      'Sear presentation side first in an oven-proof pan.',
      'Finish at 180–200°C to target temperature; baste with butter, garlic, thyme.',
      'Rest on a rack, sauce from the fond while it rests.',
    ],
  },
  {
    id: 't-brining',
    name: 'Brining & dry-brining',
    category: 'Poultry',
    summary: 'Salt ahead of time — wet or dry — for seasoning depth and moisture retention.',
    keyPoints: [
      'Dry brine: 1% salt by weight, 12–24 h uncovered in the fridge.',
      'Wet brine (5–6% salt) for lean cuts prone to drying; rinse and dry well.',
      'Never brine pre-salted (kosher/injected) products twice.',
    ],
  },
  {
    id: 't-confit',
    name: 'Confit',
    category: 'Poultry',
    summary: 'Salted, then cooked slowly submerged in fat. Preservation turned luxury texture.',
    keyPoints: [
      'Cure with salt and aromatics 12–24 h; rinse and dry.',
      'Cook submerged in fat at 85–95°C until spoon-tender (2–3 h for duck legs).',
      'Crisp skin-side in a pan to serve; the fat re-uses for potatoes.',
    ],
  },

  // ---- Meat ----
  {
    id: 't-searing',
    name: 'Searing & the Maillard reaction',
    category: 'Meat',
    summary: 'Dry surface + high heat + time = crust. Browning is flavour chemistry, not "sealing in juices".',
    keyPoints: [
      'Dry the surface; moisture must boil off before browning begins (Maillard starts ~140°C).',
      'Heavy pan, thin high-smoke-point oil, do not move the meat until it releases.',
      'Sear hard, cook gentle: crust first, then bring the core to temperature.',
    ],
  },
  {
    id: 't-reverse-sear',
    name: 'Reverse sear & low-heat roasting',
    category: 'Meat',
    summary: 'Cook the core gently to just-under, then blast the crust. Edge-to-edge doneness for thick cuts.',
    keyPoints: [
      'Low oven (100–120°C) to 8–10°C under target core temperature.',
      'Rest briefly, then sear in a screaming pan or hottest oven for the crust.',
      'Best for anything over 4 cm thick; thin steaks just sear hard once.',
    ],
  },
  {
    id: 't-braising-meat',
    name: 'Braising meat',
    category: 'Meat',
    summary: 'Tough, collagen-rich cuts seared then cooked low and slow in liquid until spoon-tender.',
    keyPoints: [
      'Brown the meat and the mirepoix hard — the braise inherits that flavour.',
      'Liquid halfway up, lid or cartouche, 150–160°C oven, 2.5–4 hours.',
      'Done when a fork twists in freely; better the next day; always rest in the liquid.',
    ],
  },
  {
    id: 't-grilling',
    name: 'Grilling & fire management',
    category: 'Meat',
    summary: 'Two zones, clean grates, and the confidence to move things. Char is seasoning; fire is a hazard to manage.',
    keyPoints: [
      'Build a hot zone and a safe zone; cook between them.',
      'Oil the food, not the grate; move at flare-ups.',
      'Rest off the grill; slice across the grain.',
    ],
  },
  {
    id: 't-resting',
    name: 'Resting meat',
    category: 'Meat',
    summary: 'Rest half the cooking time (steaks) or 15–30 min (roasts). Carryover cooking is part of the recipe.',
    keyPoints: [
      'Core temperature rises 3–8°C during rest — pull early.',
      'Rest on a rack, loosely covered; a sealed wrap steams the crust away.',
      'Resting juices belong in the sauce.',
    ],
  },
  {
    id: 't-doneness',
    name: 'Judging doneness',
    category: 'Meat',
    summary: 'A probe thermometer is the professional standard; touch and visual cues are the backup skills.',
    keyPoints: [
      'Beef/lamb: 50–52°C rare, 55–57 medium-rare, 60–63 medium (before carryover).',
      'Probe the centre of the thickest part, away from bone.',
      'Learn the touch test alongside the probe, one cut at a time.',
    ],
  },

  // ---- Pastry ----
  {
    id: 't-shortcrust',
    name: 'Shortcrust & sweet paste',
    category: 'Pastry',
    summary: 'Fat cut into flour, minimal water, minimal handling, full chilling. Tenderness is the absence of gluten.',
    keyPoints: [
      'Cold butter, cold hands, food processor or fingertips — stop at breadcrumb stage.',
      'Rest 30+ min before rolling, and chill again before baking.',
      'Blind-bake until the base is genuinely coloured; pale pastry is raw pastry.',
    ],
  },
  {
    id: 't-choux',
    name: 'Choux paste',
    category: 'Pastry',
    summary: 'A cooked flour panade enriched with eggs — steam-puffed shells for éclairs, profiteroles and gougères.',
    keyPoints: [
      'Cook the panade until it films the pan bottom and smells nutty.',
      'Beat in eggs gradually to a dropping consistency — a "V" falls from the spatula.',
      'Bake hot then moderate; never open the oven before they are set.',
    ],
  },
  {
    id: 't-lamination',
    name: 'Lamination basics (rough puff)',
    category: 'Pastry',
    summary: 'Alternating layers of dough and butter that steam apart in the oven. Rough puff gives 80% of the result for 20% of the effort.',
    keyPoints: [
      'Everything cold, always — rest in the fridge between folds.',
      'Rough puff: cubes of butter left visible, 4 letter-folds.',
      'Visible butter streaks in the raw dough = layers in the bake.',
    ],
  },
  {
    id: 't-sponge',
    name: 'Sponges & cake batters',
    category: 'Pastry',
    summary: 'Aeration methods — whisked, creamed, melted — and why baking is weighing, not improvising.',
    keyPoints: [
      'Weigh everything; baking ratios are chemistry.',
      'Genoise: whole eggs + sugar to ribbon stage; fold flour without deflating.',
      'Done when the sponge springs back and edges pull from the tin.',
    ],
  },
  {
    id: 't-pastry-cream',
    name: 'Pastry cream & dessert bases',
    category: 'Pastry',
    summary: 'Crème pâtissière: a starch-stabilised custard boiled to thickness — the filling that anchors classic pastry.',
    keyPoints: [
      'Unlike anglaise, pastry cream must boil — the starch needs it, and it protects the yolks.',
      'Whisk constantly; it thickens suddenly and burns quickly.',
      'Press film on the surface and chill fast; beat smooth before using.',
    ],
  },
  {
    id: 't-caramel',
    name: 'Caramel & sugar work',
    category: 'Pastry',
    summary: 'Dry or wet caramel from pale gold to deep amber — controlled burning, safely handled.',
    keyPoints: [
      'Wet caramel: no stirring after the boil, swirl only; brush down crystals.',
      'Colour is flavour: pale = sweet, amber = complex, dark = bitter. Pull early — it keeps cooking.',
      'Add cream/butter off the heat, in stages; it spits violently.',
    ],
  },

  // ---- The craft ----
  {
    id: 't-flavour-pairing',
    name: 'Flavour pairing & affinities',
    category: 'The craft',
    summary: 'Building combinations from classic affinities, shared aroma compounds and structural balance.',
    keyPoints: [
      'Start from proven affinities (tomato-basil, lamb-anchovy, pork-apple) and vary one element.',
      'Every dish needs: richness, acid, salt, texture contrast and something fresh.',
      'Two stars per plate maximum — everything else supports.',
    ],
  },
  {
    id: 't-recipe-writing',
    name: 'Standardised recipe writing',
    category: 'The craft',
    summary: 'A recipe another cook can execute without you: weights, temperatures, times, critical points, plating spec.',
    keyPoints: [
      'Weights in grams, temperatures in °C, pan sizes stated.',
      'Flag critical control points: what fails if rushed, what can wait.',
      'Version and date every iteration; note what changed and why.',
    ],
  },
  {
    id: 't-plating',
    name: 'Plating & composition',
    category: 'The craft',
    summary: 'Focal point, negative space, height, odd numbers, sauce placed with intent. The plate frames the food.',
    keyPoints: [
      'Choose the focal point first; build around it, off-centre.',
      'Leave 30%+ of the plate empty; crowding reads as chaos.',
      'Height and overlap create depth; flat plates read as cafeteria.',
    ],
  },
  {
    id: 't-sauce-work',
    name: 'Sauce work on the plate',
    category: 'The craft',
    summary: 'Pools, swipes, dots and broken sauces — applied deliberately, never drizzled at random.',
    keyPoints: [
      'Sauce under the protein keeps crusts crisp.',
      'One confident swipe beats ten hesitant dots.',
      'Wipe the rim. Always.',
    ],
  },
  {
    id: 't-garnish',
    name: 'Garnish logic',
    category: 'The craft',
    summary: 'Everything on the plate must be edible and must earn its place — flavour first, beauty second.',
    keyPoints: [
      'A garnish must add flavour, texture or temperature contrast — not just colour.',
      'Dress leaves and herbs; naked garnish tastes like decoration.',
      'If it does not make the dish taste better, leave it off.',
    ],
  },

  // ---- Business ----
  {
    id: 't-haccp',
    name: 'HACCP & food-safety controls',
    category: 'Business',
    summary: 'Hazard analysis and critical control points: identify where food can become unsafe, control it, verify it.',
    keyPoints: [
      'Danger zone 5–60°C: minimise time in it, log anything held in it.',
      'Separate raw and ready-to-eat at every step: boards, storage shelves, cloths.',
      'Cool cooked food fast (60→21°C in 2 h, 21→5°C in 4 h); label and date everything.',
    ],
  },
  {
    id: 't-yield-testing',
    name: 'Yield testing (AP vs EP)',
    category: 'Business',
    summary: 'As-purchased weight vs edible-portion weight. Yield % is the truth behind every ingredient cost.',
    keyPoints: [
      'Yield % = EP weight ÷ AP weight × 100. Weigh it yourself; do not trust tables blindly.',
      'True cost per kg = AP price ÷ yield %. A $30/kg fish at 45% yield costs $66/kg on the plate.',
      'Track where the loss goes — trim used elsewhere is not waste.',
    ],
  },
  {
    id: 't-recipe-costing',
    name: 'Recipe costing',
    category: 'Business',
    summary: 'Every ingredient priced from supplier packs, yield-adjusted, summed, Q-factored and divided by portions.',
    keyPoints: [
      'Cost at EP: pack price → unit cost → used quantity → ÷ yield %.',
      'Q-factor 3–5% covers oil, salt, garnish and everything you never weigh.',
      'Re-cost quarterly or when any key ingredient moves 10%+.',
    ],
  },
  {
    id: 't-portion-control',
    name: 'Portion control',
    category: 'Business',
    summary: 'Standard portions, weighed and specified, are where food cost is won or lost daily.',
    keyPoints: [
      'Specify portions in grams on the recipe card; use scales, scoops and ladles by number.',
      'A 10% over-portion on protein can erase the entire net margin of a dish.',
      'Audit by weighing five plated portions unannounced.',
    ],
  },
  {
    id: 't-menu-engineering',
    name: 'Menu engineering',
    category: 'Business',
    summary: 'Classify dishes by GP dollars and popularity — stars, plowhorses, puzzles, dogs — and act on each.',
    keyPoints: [
      'Analyse GP dollars per dish, not GP % — you bank dollars, not percentages.',
      'Stars: protect and feature. Plowhorses: raise price or cut cost. Puzzles: reposition. Dogs: remove.',
      'Menu position matters: eyes go first to the top-right and boxed items.',
    ],
  },
  {
    id: 't-fifo',
    name: 'FIFO, storage & inventory',
    category: 'Business',
    summary: 'First in, first out; labelled, dated, par-levelled stock. Inventory discipline is invisible profit.',
    keyPoints: [
      'New stock goes behind old, everywhere, every time.',
      'Par levels per ingredient: enough to service, little enough to stay fresh.',
      'Weekly stocktake at consistent time; usage = opening + purchases − closing.',
    ],
  },
]

export const techniqueIds = techniques.map((t) => t.id)
