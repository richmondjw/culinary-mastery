import type { CourseModule, Recipe } from '../../types/content'

export const module05: CourseModule = {
  id: 'm05',
  number: 5,
  stage: 1,
  title: 'Sauces',
  subtitle: 'Where stock, eggs and seasoning become cuisine',
  description:
    'Sauce is the discipline that separates cooking from assembling. This module gives you the classical map — roux and the mother sauces — and the modern workhorses: pan sauces built in four minutes, beurre blanc, vinaigrettes, and the emulsion theory that connects them all. Everything you built in Modules 2–4 converges here: your palate seasons the sauce, your eggs emulsify it, your stock is its soul.',
  objectives: [
    'Cook white, blond and brown roux and use each at the right ratio for the target thickness',
    'Produce béchamel, velouté and tomato sauce to classical standard, and explain espagnole and its place',
    'Build a pan sauce from fond in under five minutes, finished with mounted butter',
    'Make and hold hollandaise and beurre blanc without splitting — and rescue them when they split anyway',
    'Emulsify stable and split vinaigrettes on purpose, and season them against what they will dress',
    'Diagnose any broken sauce by its failure mode: starch, egg or emulsion',
  ],
  difficulty: 3,
  estimatedHours: 12,
  prerequisites: ['m04'],
  skillsUnlocked: [
    'Roux & the mother sauce method',
    'Pan sauce in four minutes',
    'Warm butter emulsions',
    'Emulsion rescue',
    'Sauce consistency judgement (nappe)',
  ],
  equipment: [
    'Small and medium heavy-based saucepans',
    'Stainless (not non-stick) frying pan for fond and pan sauces',
    'Balloon whisk and a small whisk',
    'Fine sieve (chinois if possible)',
    'Heatproof bowl for bain-marie work',
    'Probe thermometer',
    'Digital scales',
    'Ladle and tasting spoons',
  ],
  ingredients: [
    'Unsalted butter (1 kg — this is the butter module)',
    'Plain flour, full-cream milk',
    'Your frozen white and brown stock and glace cubes from Module 4',
    'Tinned whole tomatoes, tomato paste, garlic, basil',
    'Eggs (a dozen), Dijon mustard',
    'Dry white wine, white wine vinegar, sherry vinegar, lemons',
    'Shallots (500 g)',
    'Chicken thighs or breasts, asparagus or broccolini, cauliflower (for the carrier dishes)',
  ],
  lessons: [
    {
      id: 'm05-l01',
      title: 'Roux and béchamel',
      summary: 'The starch thickener that anchors classical saucemaking, and the first mother sauce built on it.',
      theory: [
        {
          heading: 'Roux: flour taught manners',
          body: 'A roux is equal weights of butter and flour cooked together — cooking does two jobs: it drives off the raw-flour taste and coats each starch granule in fat so it disperses through liquid without lumping. Colour is a decision. White roux (2 minutes, no colour) thickens hardest and stays neutral: béchamel. Blond roux (4–5 minutes, pale straw, smells of pastry) suits velouté. Brown roux (10+ minutes, nut-brown) brings real flavour but half the thickening power — the gumbo and espagnole end of the family.\n\nThe working ratio: 60 g each of butter and flour thickens 1 litre of liquid to a coating sauce; 40 g each gives a soup-weight sauce; 80–100 g approaches soufflé-base territory. And the lump-proof rule is thermal shock: cold liquid into hot roux, or hot liquid into cold roux, whisking as you go. Same-temperature meetings are where lumps come from.',
        },
        {
          heading: 'Béchamel: milk with structure',
          body: 'Béchamel is milk thickened with white roux, and it is judged on three counts: flavour (the milk should be infused — onion, clove, bay, 15 minutes off the heat — or the sauce tastes of library paste), texture (nappe: coats a spoon, a drawn finger-line holds), and finish (simmered at least 10 minutes after thickening, because starch that has merely thickened has not yet cooked, and undercooked béchamel tastes distinctly of flour).\n\nSeason it at the end with salt, white pepper and a suspicion of nutmeg. From this one sauce: mornay (gruyère and parmesan melted in off the heat), the binding layer of lasagne and moussaka, croque-monsieur, gratins, and soufflé bases. It holds a skin unless you press film on its surface or float a film of melted butter — a detail that marks a cook who has plated béchamel an hour after making it.',
        },
      ],
      demonstrations: [
        {
          title: 'One litre of béchamel, by the numbers',
          steps: [
            'Infuse 1 litre of milk: bring to a bare simmer with half an onion studded with 2 cloves and a bay leaf, then rest 15 minutes and strain.',
            'Melt 60 g of butter in a heavy pan over medium; whisk in 60 g of flour.',
            'Cook the roux 2 minutes, whisking — foaming and smelling biscuity, but showing no colour.',
            'Off the heat, add the warm milk in three additions, whisking each fully smooth before the next.',
            'Return to medium-low and whisk until it thickens as it comes to a simmer.',
            'Simmer gently 10–12 minutes, stirring and scraping the corners with a spatula.',
            'Season with salt, white pepper and a grating of nutmeg; check nappe on the back of a spoon. Press film on the surface if holding.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The three-roux flight',
          instructions: 'Make three small roux — white, blond, brown — from 20 g butter and 20 g flour each. Whisk each into 250 ml of warm milk or stock, simmer 10 minutes, and compare side by side: colour, flavour, and how much each actually thickened. Write down the trade you observed between flavour and power.',
          repeatPractice: 'Roux returns in soufflé bases, croquettes and gumbo later in the course. Before each, state which roux the dish needs and why — the flight you did here is the reference.',
        },
      ],
      recipeIds: ['r-m05-01'],
      techniqueIds: ['t-roux', 't-bechamel', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Lumpy béchamel',
          cause: 'Liquid and roux met at similar temperatures, or arrived all at once without whisking.',
          fix: 'Whisk hard now and simmer on — most lumps surrender; strain for the rest. Next time: three additions, whisked smooth each time, hot-meets-cold.',
        },
        {
          problem: 'Sauce tastes floury even though it is thick',
          cause: 'Thickening and cooking are different events — the starch gelatinised but never cooked out.',
          fix: 'Simmer a full 10 minutes after it thickens, stirring the corners. Thickness happens in one minute; flavour takes ten.',
        },
      ],
    },
    {
      id: 'm05-l02',
      title: 'Velouté, tomato and the mother sauce map',
      summary: 'Stock-based and vegetable-based mothers, the derivative logic that multiplies them, and where espagnole fits.',
      theory: [
        {
          heading: 'Velouté and the derivative game',
          body: 'Velouté is your Module 4 white stock thickened with blond roux — same numbers as béchamel, 60 g/60 g per litre — then simmered and skimmed for 20–30 minutes, because the skin that keeps forming carries impurities out of the sauce. It lives or dies on the stock: velouté made from a stock cube is seasoned wallpaper paste, which is why this module could not come before Module 4.\n\nThe classical system multiplies each mother through derivatives, and the logic matters more than the names: finish a chicken velouté with cream and you have suprême; with egg yolk and cream, allemande; a fish velouté with white wine, vin blanc. One method, memorised once, yields a dozen sauces. Espagnole — brown stock thickened with brown roux, simmered long with tomato and mirepoix, classically halved with more stock into demi-glace — you should understand rather than routinely make: your Module 4 glace delivers 80% of demi-glace’s effect with none of the flour, which is how most modern kitchens now play it.',
        },
        {
          heading: 'Tomato: the self-saucing mother',
          body: 'Tomato sauce needs no roux — the fruit’s own flesh and pectin thicken it through reduction, which makes it the mother sauce that teaches reduction-as-thickening. The twenty-minute sugo: sweat sliced garlic in a generous 60 ml of olive oil without colour, add hand-crushed tinned whole tomatoes (buy whole; crushed and diced tins hide inferior fruit), a pinch of salt, and simmer briskly until the oil separates and rides on top — the visual signal that the water has gone and the sauce has arrived.\n\nBalance it the Module 2 way: salt first, tasted in steps; then judge acidity honestly. A pinch of sugar is a correction for genuinely sharp tomatoes, not a routine; a knob of butter rounds harshness more gracefully. Basil goes in torn, off the heat, at the end. Cooked longer and deeper with onion and browned paste, the same sauce becomes a braising medium and pizza’s foundation — one mother, many houses.',
        },
      ],
      demonstrations: [
        {
          title: 'Chicken velouté to suprême',
          steps: [
            'Make a blond roux from 30 g butter and 30 g flour — 4–5 minutes to pale straw.',
            'Whisk in 500 ml of warm white chicken stock (r-m04-01) in three additions.',
            'Simmer gently 20 minutes at the pot’s edge, skimming the skin as it forms — this is the flavour-clarifying step most home cooks skip.',
            'Check nappe; the sauce should be glossy, ivory, and taste cleanly of chicken.',
            'Finish 250 ml of it off the heat with 60 ml of cream and a few drops of lemon: suprême.',
            'Taste velouté and suprême side by side and note what cream and lemon each changed.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Derivative improvisation',
          instructions: 'From one batch of velouté, produce three finished sauces of your own design — vary the finisher (cream, herbs, mustard, lemon, a glace cube, reduced wine). Name each, and note which you would serve with poached chicken, which with fish, which with vegetables. The skill is seeing sauces as base-plus-decision.',
          repeatPractice: 'Every protein you cook from Module 7 onward needs a sauce decision. Default to this drill: base on hand, plus one deliberate finisher — not a new recipe every night.',
        },
      ],
      recipeIds: ['r-m05-02'],
      techniqueIds: ['t-veloute', 't-tomato-sauce', 't-roux', 't-reduction'],
      troubleshooting: [
        {
          problem: 'Velouté tastes dull and gluey rather than clean',
          cause: 'Weak stock, or the simmer-and-skim stage was skipped so impurities stayed in.',
          fix: 'Reinforce with a glace cube and simmer-skim 15 minutes at the pot edge. If the stock was the problem, no finisher will hide it — better stock next time.',
        },
        {
          problem: 'Tomato sauce is sour and thin after 20 minutes',
          cause: 'Watery or unripe tinned tomatoes, or the heat was too low to reduce properly.',
          fix: 'Simmer harder until the oil separates, then salt fully before judging acidity — under-salted tomato always reads as sour. Only then consider the sugar pinch or butter.',
        },
      ],
    },
    {
      id: 'm05-l03',
      title: 'Emulsion theory and vinaigrettes',
      summary: 'What every creamy sauce has in common, drilled cold and safe with the vinaigrette family before heat raises the stakes.',
      theory: [
        {
          heading: 'One theory, every creamy sauce',
          body: 'An emulsion is fat and water persuaded to coexist: one phase broken into microscopic droplets and dispersed through the other, each droplet wrapped by an emulsifier so they cannot find each other and re-merge. Mayonnaise, hollandaise, beurre blanc, a mounted pan sauce, even the starchy water binding a pasta sauce — mechanically, they are the same object. Three levers control them all: an emulsifier (lecithin in yolk, mustard’s mucilage, casein in butter), agitation to shear the fat into droplets, and rate — the dispersed phase added slowly, especially at the start, while the emulsion establishes.\n\nEvery break is one of three failures: too fast (fat outran the emulsifier), too hot (the emulsifier denatured — each warm emulsion has a working band), or too cold (the fat solidified and tore the structure). Diagnose which, and the rescue chooses itself. This lesson drills the theory where nothing can scald: vinaigrettes.',
        },
        {
          heading: 'Vinaigrette: a seasoning system',
          body: 'The canonical ratio is 3 parts oil to 1 part acid — start there and adjust to the acid’s sharpness and the salad’s richness. The non-negotiable detail: salt dissolves in vinegar but not in oil, so it goes into the acid first, with the mustard and any aromatics, before a drop of oil arrives. Whisk the oil in gradually and mustard holds it emulsified for an hour; shaken in a jar it holds for minutes; and a deliberately split vinaigrette — beads of oil and vinegar separate on the plate — is a legitimate choice for dressing roasted vegetables and fish, hitting the tongue as alternating flashes rather than a blend.\n\nTaste it the honest way: on a leaf of what it will dress, never on a spoon. A dressing that tastes correct on steel is under-seasoned on lettuce — the leaf dilutes and the fat coats. Macerate sliced shallot in the vinegar for 10 minutes first and you have the house vinaigrette of half the good restaurants you have eaten in.',
        },
      ],
      demonstrations: [
        {
          title: 'Stable, temporary and split — one set of ingredients, three sauces',
          steps: [
            'In a bowl: 15 ml red wine vinegar, 2 g salt, 5 g Dijon, a teaspoon of minced shallot. Dissolve the salt, then whisk in 45 ml olive oil in a thin stream: a stable emulsion. Note its creamy opacity.',
            'In a jar: same quantities minus the mustard. Shake hard ten seconds: a temporary emulsion. Watch it separate over five minutes.',
            'In a cup: same quantities, oil stirred in with two lazy turns of a spoon: a split dressing, glossy beads of oil in vinegar.',
            'Dip a leaf of cos in each and taste them in sequence — same ingredients, three different sensations.',
            'Dress three spoonfuls of warm roasted vegetables with the split version and see why it is a chef’s favourite for the job.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Ratio calibration',
          instructions: 'Make three vinaigrettes at 2:1, 3:1 and 4:1 oil to vinegar, identically salted. Taste each on a plain leaf. Pick your house ratio, write it down, and note which vinegar you tested — sherry at 3:1 behaves like red wine at 2.5:1. Re-test with lemon juice and note how citrus shifts the ratio.',
          repeatPractice: 'You will dress something at nearly every meal for the rest of the course. Make the week’s vinaigrette every Sunday in a jar — the repetition target is making your house ratio without measuring by Module 8.',
        },
      ],
      recipeIds: ['r-m05-03'],
      techniqueIds: ['t-vinaigrette', 't-emulsification', 't-mince', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Vinaigrette tastes harsh on the salad but fine in the bowl',
          cause: 'Tasted on a spoon, not a leaf — and probably under-salted for the volume of leaves.',
          fix: 'Always taste on the destination leaf. If harsh, first add salt, then a few drops of water or a pinch of sugar; more oil is the last resort, not the first.',
        },
      ],
    },
    {
      id: 'm05-l04',
      title: 'Warm emulsions: hollandaise and beurre blanc',
      summary: 'The two great butter sauces — one yolk-stabilised, one pure technique — and the temperature bands that keep them alive.',
      theory: [
        {
          heading: 'Hollandaise: sabayon first',
          body: 'Hollandaise is Module 3’s mayonnaise logic at 60°C: yolks emulsifying butter instead of oil, warm instead of cold. The structure is built in the sabayon stage — yolks whisked with a spoonful of water (or a peppercorn-vinegar reduction for classical depth) over a bain-marie until tripled in volume, pale, and ribboning off the whisk. That foam is the scaffold; butter mounts into it, drizzled slowly, on and off the heat.\n\nThe sauce lives in a band: below about 50°C the butter begins to set and the sauce stiffens toward splitting; much above 65°C the yolks scramble. Whisk in warm melted butter gradually, season with lemon, salt and cayenne, and hold the finished sauce over warm (not simmering) water for up to an hour. Split hollandaise announces itself as glistening oil at the edges: whisk a teaspoon of hot water in a fresh bowl and rebuild the sauce into it gradually — the Module 3 mayonnaise rescue, wearing a warmer coat.',
        },
        {
          heading: 'Beurre blanc: butter held by almost nothing',
          body: 'Beurre blanc has no yolk. Its emulsifiers are the traces of casein and lecithin in butter itself, helped by the body of a hard reduction — white wine, white wine vinegar and minced shallot cooked down to two syrupy tablespoons. Into that, over low heat, cold butter cubes are whisked a few at a time, each melting into droplets before the next goes in. The sauce that results is pale, glossy, sharp-then-rich, and startlingly good on fish, asparagus and anything poached.\n\nIt is also the least forgiving emulsion in the module: above about 58°C it breaks to oily butter, and if it cools it sets solid. Hold it warm — pan at the stove’s edge, or over barely warm water — and serve within the hour. A tablespoon of cream whisked into the reduction before mounting makes it noticeably more stable at a small cost in purity; professionals disagree about this, which tells you both versions work. The rescue for a split beurre blanc: a splash of cold water or cream in a fresh pan, whisked hard, the broken sauce beaten back in gradually.',
        },
      ],
      demonstrations: [
        {
          title: 'Hollandaise over the bain-marie',
          steps: [
            'Melt 200 g of butter and keep it warm; set a heatproof bowl over a pan of barely simmering water — the bowl must not touch the water.',
            'In the bowl, whisk 3 yolks with 15 ml of water until the sabayon triples, turns pale, and ribbons — 2–3 minutes of committed whisking.',
            'Off the heat, add the warm butter in a thin stream, whisking constantly; return the bowl over the water in bursts if the sauce cools and tightens.',
            'Leave the milky whey at the bottom of the butter jug behind, or add it at the end to thin.',
            'Season: lemon juice in drops, salt, a breath of cayenne. Check the temperature — the sauce should sit near 60°C.',
            'Hold over warm water, whisking occasionally, and serve within the hour.',
          ],
        },
        {
          title: 'Beurre blanc, and a deliberate split-and-rescue',
          steps: [
            'Reduce 100 ml white wine, 30 ml white wine vinegar and 30 g minced shallot to 2 tablespoons of syrup.',
            'Over low heat, whisk in 200 g of cold butter, 3–4 cubes at a time, keeping the sauce at a bare steam — never a simmer.',
            'Season with salt and a squeeze of lemon; strain out the shallot for a formal sauce or keep it for a house one.',
            'Take a third of the sauce and deliberately overheat it until it breaks to oil. Observe exactly what breaking looks like.',
            'Rescue: put 15 ml of cold water in a clean pan, whisk hard, and beat the broken sauce back in gradually until it re-emulsifies.',
            'Compare rescued against original — then never fear this sauce again.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The temperature-band drill',
          instructions: 'Make a half batch of hollandaise with the probe beside you. Deliberately take it to 50°C and observe the tightening; warm it back. Note the texture at 55, 60 and 65°C. You are building a hand-feel for the band so the probe becomes optional.',
          repeatPractice: 'Warm emulsions reappear with poached fish and vegetables through Stages 2 and 3. First remake each month, verify your feel against the probe once — drift creeps in quietly.',
        },
      ],
      recipeIds: ['r-m05-03'],
      techniqueIds: ['t-hollandaise', 't-beurre-blanc', 't-emulsification', 't-custard'],
      troubleshooting: [
        {
          problem: 'Hollandaise scrambled into sweet-omelette flecks',
          cause: 'The bowl ran past 65–70°C — usually the water underneath was boiling, not simmering.',
          fix: 'Strain out the worst, rebuild onto a fresh sabayon. Next time: lazy bubbles under the bowl, and lift the bowl off in bursts — the whisk hand controls heat as much as the flame does.',
        },
        {
          problem: 'Beurre blanc split during holding',
          cause: 'It sat above 58°C at the back of the stove, or cooled and set, and was reheated too fast.',
          fix: 'Cold-water rescue in a clean pan. Hold it at the stove’s edge with a probe check the first few times — "warm, never hot" is a number: 45–55°C.',
        },
      ],
    },
    {
      id: 'm05-l05',
      title: 'Pan sauces: the four-minute payoff',
      summary: 'Fond, deglaze, reduce, mount — the improvised sauce that turns any seared protein into a finished dish.',
      theory: [
        {
          heading: 'Fond is prepaid flavour',
          body: 'When protein sears in a stainless pan, the browned residue welded to the metal — the fond — is concentrated Maillard flavour that a non-stick pan never builds and a dishwasher destroys unused. The pan-sauce sequence spends it, in four moves that never change. One: protein out to rest, excess fat poured off, fond kept. Two: aromatics — a minced shallot, 30 seconds in what remains. Three: deglaze — 100–150 ml of wine or stock, scraping the fond loose as it bubbles, then reduce hard until syrupy; add a Module 4 glace cube here and the sauce gains a spine. Four: mount — off the heat, swirl in 30–50 g of cold butter until glossy, then season, add acid in drops, and stir in the resting juices from the board.\n\nMonter au beurre, the mounting step, is a warm emulsion improvised at speed: the reduction’s gelatine and the butter’s casein hold the fat in suspension. Too much heat splits it — the pan should be off the flame — and once mounted, the sauce is served, not reboiled.',
        },
        {
          heading: 'Reduction judgement and the sauce ladder',
          body: 'The pan sauce is where your Module 4 reduction ladder becomes a reflex. Deglazing liquid must reduce until "syrupy" — bubbles going glossy and lazy, a spatula line holding briefly across the pan floor — before butter arrives. Mount into thin liquid and you get buttered jus that slides off the meat; reduce past syrup and the finished sauce is sticky and salty. The window is about thirty seconds wide and the pan is telling you throughout: listen for the sizzle dying as water departs.\n\nSalt discipline is the second judgement: fond, stock and glace all concentrate as they reduce, so season only after mounting, tasting on a piece of the resting protein — Module 2’s "taste on the vehicle" rule at its most consequential. A pan sauce needs no recipe once the sequence is motor memory: any protein, any deglazing liquid, any finishing aromatics. That freedom is the whole point of this module.',
        },
      ],
      demonstrations: [
        {
          title: 'Pan sauce in real time',
          steps: [
            'Sear seasoned chicken thighs in a stainless pan until deeply golden and cooked through; rest them on a board.',
            'Pour off all but a teaspoon of fat. Assess the fond: mahogany is money, black is bitter — if scorched, wipe and accept a lighter sauce.',
            'Sweat 30 g of minced shallot in the pan over medium, 30–45 seconds.',
            'Deglaze with 100 ml of dry white wine, scraping the fond loose; reduce by three-quarters.',
            'Add 150 ml of brown stock plus one glace cube; reduce to syrupy — spatula line holds on the pan floor.',
            'Off the heat, swirl in 40 g of cold butter cubes until the sauce is glossy and coats a spoon.',
            'Add the resting juices, a few drops of lemon, salt to taste — tasted on a piece of the chicken — and serve immediately over it.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Five nights, five pan sauces',
          instructions: 'For five consecutive dinners, cook any pan-seared protein and improvise the sauce from what is on hand — vary the deglazing liquid (wine, stock, vermouth), the aromatic (shallot, garlic, ginger) and the finisher (mustard, herbs, cream, capers). No recipes allowed after night one; log each sauce in a sentence.',
          repeatPractice: 'This is the course’s most-repeated drill: every seared protein in Modules 7–10 expects a pan sauce, unprompted. The skill is fully owned when the sauce happens inside the protein’s resting time.',
        },
      ],
      recipeIds: ['r-m05-04'],
      techniqueIds: ['t-pan-sauce', 't-reduction', 't-searing', 't-resting', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Pan sauce is thin and pale with no depth',
          cause: 'Weak fond (crowded pan, or non-stick), or the reduction stopped early.',
          fix: 'Sear in stainless with space between pieces, and reduce until genuinely syrupy before mounting. A glace cube is the honest patch for a thin night.',
        },
        {
          problem: 'Sauce broke into oily butter at the end',
          cause: 'Butter mounted over direct heat, or the sauce was reboiled after mounting.',
          fix: 'Mount off the flame, swirling, and serve straight away. If it breaks: a splash of cold water or stock, whisk hard off the heat — it usually pulls back together.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Undercooking the roux and serving floury sauce',
      cause: 'Stopping when the sauce thickens instead of when the starch has cooked out.',
      fix: 'Thickening takes a minute; flavour takes ten. Simmer every roux-based sauce at least 10 minutes after it thickens, stirring the corners.',
    },
    {
      problem: 'Building fine sauces on weak stock',
      cause: 'Treating stock as generic liquid rather than the sauce’s actual flavour.',
      fix: 'Velouté, pan sauces and jus are amplifiers: they concentrate whatever the stock was. Use your Module 4 stock, reinforced with glace — or make the tomato sauce tonight instead.',
    },
    {
      problem: 'Adding fat fast into every emulsion',
      cause: 'Impatience, and not believing the first 50 ml is different from the rest.',
      fix: 'Every emulsion establishes at the start: drops, then a thread, then a stream. Once it visibly tightens you can triple the pace — not before.',
    },
    {
      problem: 'Boiling a finished butter sauce',
      cause: 'Holding hollandaise, beurre blanc or a mounted pan sauce over active heat "to keep it warm".',
      fix: 'Mounted butter sauces live at 45–60°C and die at a simmer. Hold at the stove’s edge or over warm water, and reheat gently, whisking — or plate immediately.',
    },
  ],
  assessment: {
    id: 'as-m05',
    moduleId: 'm05',
    title: 'The Five-Sauce Service',
    brief:
      'In one 2.5-hour session, produce and present five sauces with their carriers: (1) mornay over blanched cauliflower or leeks; (2) a suprême finished from your own velouté, over poached or pan-roasted chicken; (3) hollandaise over asparagus or broccolini; (4) a pan sauce built inside the resting time of a seared protein; (5) a stable shallot vinaigrette on dressed leaves. Sauces must be at correct consistency and temperature at the moment of serving — plan the timeline as multi-pot service, Module 4 style. One split-and-rescue is permitted and must be declared.',
    rubric: [
      { criterion: 'Roux sauces (mornay & suprême)', maxScore: 10, guidance: '9–10: both at nappe, glossy, no floury taste, correctly seasoned. 6–8: one slightly thick/thin or under-simmered. Below 6: lumps or raw flour.' },
      { criterion: 'Hollandaise', maxScore: 8, guidance: 'Airy, warm, holds a soft peak on the vegetable, balanced lemon; no scramble flecks. A declared rescue caps this at 6.' },
      { criterion: 'Pan sauce', maxScore: 8, guidance: 'Built inside the protein’s rest; syrupy reduction before mounting; glossy, deep, seasoned on the vehicle.' },
      { criterion: 'Vinaigrette & seasoning judgement', maxScore: 6, guidance: 'Stable emulsion, house ratio stated, tasted on the leaf; overall session seasoning deliberate and logged.' },
      { criterion: 'Timeline & station discipline', maxScore: 8, guidance: 'All five land within the window at serving temperature; written timeline prepared beforehand; station reset between sauces.' },
    ],
    passScore: 28,
    evidence: 'Six photos: each of the five plated sauce-and-carrier dishes, plus your written service timeline showing planned versus actual timings.',
  },
  completionCriteria: [
    'All five lessons marked complete',
    'Every mother-sauce family made at least once: béchamel, velouté, tomato, hollandaise — plus beurre blanc and five logged pan sauces',
    'All four module recipes cooked, including one deliberate split-and-rescue on a warm emulsion',
    'Assessment passed (28/40 or better) with photo and timeline evidence',
  ],
}

export const module05Recipes: Recipe[] = [
  {
    id: 'r-m05-01',
    title: 'Cauliflower Gratin, Proper Mornay',
    moduleId: 'm05',
    description:
      'Blanched cauliflower under a true mornay — infused-milk béchamel with gruyère and parmesan — baked until blistered and bronze. The dish that proves your roux, your seasoning and your grill judgement in one tray.',
    difficulty: 2,
    serves: 6,
    timeMins: 70,
    techniqueIds: ['t-roux', 't-bechamel', 't-blanching', 't-tasting'],
    ingredients: [
      { item: 'Cauliflower', qty: 1.2, unit: 'kg', prep: 'cut in even large florets' },
      { item: 'Fine salt', qty: 30, unit: 'g', prep: 'for the blanching water' },
      { item: 'Full-cream milk', qty: 700, unit: 'ml' },
      { item: 'Brown onion', qty: 0.5, unit: 'each', prep: 'studded with 2 cloves' },
      { item: 'Bay leaf', qty: 1, unit: 'each' },
      { item: 'Unsalted butter', qty: 45, unit: 'g' },
      { item: 'Plain flour', qty: 45, unit: 'g' },
      { item: 'Gruyère', qty: 120, unit: 'g', prep: 'coarsely grated, 30 g reserved for the top' },
      { item: 'Parmesan', qty: 40, unit: 'g', prep: 'finely grated' },
      { item: 'Dijon mustard', qty: 10, unit: 'g' },
      { item: 'Nutmeg', qty: null, unit: 'to taste', prep: 'freshly grated' },
      { item: 'White pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'Infuse the milk with the clove-studded onion and bay: bring to a bare simmer, then rest off the heat 15 minutes and strain. Start this first; it works while you prep.',
      'Blanch the cauliflower in 3 litres of water with the 30 g of salt, 3–4 minutes — tender at a knife tip but holding its shape; it cooks again in the oven. Drain hard and leave to steam dry in the colander: wet florets water down the sauce beneath them.',
      'Make the béchamel: cook the butter and flour to a white roux, 2 minutes; add the warm infused milk in three whisked additions; simmer 10 minutes, stirring the corners.',
      'Off the heat, stir in 90 g of gruyère, the parmesan and the mustard until melted — cheese added over the flame turns grainy and ropes. Season with nutmeg, white pepper and salt, tasting deliberately: the cheese carries salt of its own.',
      'Heat the oven grill, or the oven to 220°C. Arrange the dry florets in a buttered gratin dish in one snug layer.',
      'Coat with the mornay — every floret napped, sauce pooling to two-thirds of their height, not drowning them.',
      'Scatter the reserved gruyère and grill or bake 10–15 minutes until blistered bronze in patches. Rest 5 minutes; molten mornay holds heat like lava.',
      'Serve from the dish, spooning the bubbling edges — the best part — over each portion.',
    ],
    chefNotes: [
      'The gratin is a moisture-management exam: salted blanching water seasons the cauliflower from inside, and drying the florets protects the sauce. Watery gratin is almost never the béchamel’s fault.',
      'Same template, other tenants: leeks, silverbeet stems, sliced par-boiled potatoes, or pasta — at which point you have made macaroni cheese from first principles, and shop-bought sauce is over for you.',
    ],
    reinforces: ['Blanch and refresh', 'Roux ratio and cook-out', 'Seasoning against salty ingredients'],
  },
  {
    id: 'r-m05-02',
    title: 'Twenty-Minute Sugo with Marriage-Ready Pasta',
    moduleId: 'm05',
    description:
      'The bright, fast tomato mother sauce — garlic, olive oil, hand-crushed tomatoes, basil — finished the professional way: pasta married to sauce in the pan with starchy water until it clings. Reduction-as-thickening and emulsion practice hiding in a weeknight dinner.',
    difficulty: 2,
    serves: 4,
    timeMins: 40,
    techniqueIds: ['t-tomato-sauce', 't-pasta-emulsion', 't-tasting', 't-acid-balance'],
    ingredients: [
      { item: 'Extra-virgin olive oil', qty: 60, unit: 'ml', prep: 'plus extra to finish' },
      { item: 'Garlic', qty: 4, unit: 'each', prep: 'thinly sliced' },
      { item: 'Tinned whole peeled tomatoes', qty: 800, unit: 'g', prep: 'crushed by hand, juice reserved' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Caster sugar', qty: null, unit: 'to taste', prep: 'only if genuinely needed' },
      { item: 'Unsalted butter', qty: 20, unit: 'g', prep: 'optional rounding' },
      { item: 'Basil', qty: 15, unit: 'g', prep: 'leaves torn at the end' },
      { item: 'Dried spaghetti or rigatoni', qty: 400, unit: 'g' },
      { item: 'Parmesan', qty: 40, unit: 'g', prep: 'finely grated, plus more at the table' },
    ],
    method: [
      'Warm the oil and garlic together from cold over medium heat — starting cold lets the garlic flavour the oil before it colours. Cook to fragrant and barely golden, about 2 minutes; brown garlic is bitter garlic.',
      'Add the hand-crushed tomatoes and their juice with 3 g of salt — carefully, it spits. Simmer briskly, stirring now and then, 15–20 minutes.',
      'Watch for the doneness signal: the sauce thickens, darkens a shade, and the oil separates and rides on top. That split oil is reduction telling you the water has left.',
      'Meanwhile boil the pasta in 4 litres of water with 40 g of salt. Cook 2 minutes short of the packet time; reserve a full mug of the starchy water before draining.',
      'Balance the sauce Module 2 style: salt in steps first; taste; only if still genuinely sharp, a small pinch of sugar or the butter. Tear in the basil off the heat.',
      'Marry: tip the drained pasta into the sauce over medium heat with a splash of the starchy water. Toss and stir hard for 1–2 minutes — starch, oil and tomato emulsify into a sauce that grips every strand.',
      'Off the heat, toss through the parmesan and a thread of raw olive oil. The sauce should coat, not pool: loosen with pasta water or tighten with heat until it does.',
      'Serve immediately in warmed bowls. Wipe the rims — Module 1 discipline reaches the table.',
    ],
    chefNotes: [
      'Buy whole peeled tomatoes and crush them yourself: the whole-fruit grade is consistently better, and your hands control the texture. Squeeze them under the surface unless you want a red ceiling.',
      'The marriage step is the same emulsion theory as every sauce this module — starchy water is the water phase, oil and butter the fat, agitation the shear. Once you see it, you will never again pour naked sauce on naked pasta.',
    ],
    reinforces: ['Reduction judgement by sight', 'Salting pasta water properly', 'Emulsifying under time pressure'],
  },
  {
    id: 'r-m05-03',
    title: 'Asparagus Two Sauces: Hollandaise & Split Shallot Vinaigrette',
    moduleId: 'm05',
    description:
      'One bunch of blanched asparagus served two ways on one plate — warm hollandaise on half, a sharp split shallot vinaigrette on the other. Cold emulsion against warm emulsion, side by side, so your palate learns what each does to the same vegetable.',
    difficulty: 3,
    serves: 4,
    timeMins: 50,
    techniqueIds: ['t-hollandaise', 't-vinaigrette', 't-emulsification', 't-blanching', 't-tasting'],
    ingredients: [
      { item: 'Asparagus', qty: 2, unit: 'each', prep: 'bunches (about 500 g), woody ends snapped off' },
      { item: 'Fine salt', qty: 30, unit: 'g', prep: 'for the blanching water' },
      { item: 'Egg yolks', qty: 3, unit: 'each' },
      { item: 'Unsalted butter', qty: 200, unit: 'g', prep: 'melted and kept warm' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'juiced' },
      { item: 'Cayenne pepper', qty: null, unit: 'to taste' },
      { item: 'Shallot', qty: 1, unit: 'each', prep: 'finely minced (about 30 g)' },
      { item: 'Sherry vinegar', qty: 20, unit: 'ml' },
      { item: 'Extra-virgin olive oil', qty: 60, unit: 'ml' },
      { item: 'Flaky salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Start the vinaigrette first — it improves while everything else happens: macerate the minced shallot in the vinegar with 2 g of fine salt for at least 10 minutes, then stir in the olive oil with just a few turns of a spoon. Split on purpose: glossy oil beads in sharp vinegar.',
      'Blanch the asparagus in 3 litres of hard-boiling water with the 30 g of salt, 2–3 minutes until bright green and tender with bite. Half into iced water (for the vinaigrette side, served cool); the other half onto a warm plate under a cloth.',
      'Hollandaise: whisk the yolks with 15 ml of water in a bowl over barely simmering water until tripled, pale and ribboning — the sabayon is the sauce’s skeleton, so finish it properly before any butter arrives.',
      'Off the heat, whisk in the warm butter in a thin stream, returning the bowl over the water briefly whenever the sauce cools and tightens. Leave the milky whey behind, or use it at the end to thin.',
      'Season the hollandaise: lemon in drops, salt, the faintest cayenne. It should hold a soft shape and sit near 60°C. Park it over warm water.',
      'Dry both sets of asparagus thoroughly — sauce slides off wet spears.',
      'Plate per person: warm spears napped generously with hollandaise on one side; cool spears spooned with the split vinaigrette and flaky salt on the other.',
      'Taste one spear of each, back to back, and name what changed: temperature, fat weight, acid attack. That comparison is the lesson this plate exists for.',
    ],
    chefNotes: [
      'If the hollandaise splits, rescue it in front of witnesses: teaspoon of hot water in a clean bowl, broken sauce whisked back in gradually. Rescued hollandaise is indistinguishable — fear of this sauce is fear of a fixable event.',
      'The split vinaigrette is deliberate — mounted with mustard it becomes a stable dressing for soft leaves; left split it flashes bright-then-rich on firm vegetables. Same three ingredients, two different tools.',
    ],
    reinforces: ['Blanch and refresh', 'Warm emulsion temperature control', 'Tasting comparatively'],
  },
  {
    id: 'r-m05-04',
    title: 'Pan-Roasted Chicken, Shallot & Thyme Pan Sauce',
    moduleId: 'm05',
    description:
      'Crisp-skinned chicken thighs finished in the oven while their fond becomes the sauce: shallot, white wine, brown stock, a glace cube, cold butter. The four-minute sauce built inside the resting time — the single most reusable skill in the module.',
    difficulty: 3,
    serves: 4,
    timeMins: 50,
    techniqueIds: ['t-pan-sauce', 't-searing', 't-reduction', 't-resting', 't-tasting'],
    ingredients: [
      { item: 'Chicken thighs, skin-on, bone-in', qty: 8, unit: 'each', prep: 'dried well, salted 1 hour ahead (1% of weight)' },
      { item: 'Neutral oil', qty: 15, unit: 'ml' },
      { item: 'Shallots', qty: 2, unit: 'each', prep: 'finely minced (about 60 g)' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'Brown chicken stock (r-m04-02)', qty: 200, unit: 'ml' },
      { item: 'Glace cube (r-m04-02)', qty: 1, unit: 'each' },
      { item: 'Thyme sprigs', qty: 4, unit: 'each' },
      { item: 'Cold unsalted butter', qty: 40, unit: 'g', prep: 'cubed' },
      { item: 'Lemon juice', qty: null, unit: 'to taste' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 200°C. Dry the salted thighs again — surface moisture is the enemy of both crisp skin and fond.',
      'Film a stainless, oven-proof pan with the oil over medium-high. Lay the thighs in skin-down and leave them alone 6–8 minutes until the skin is deep gold and releases without a fight. Moving them early tears skin and forfeits fond.',
      'Turn the thighs and transfer the pan to the oven, 15–18 minutes, until the thickest thigh probes 70°C at the bone.',
      'Thighs out to a rack, skin up, to rest. Start the clock: the sauce happens entirely inside this rest.',
      'Pour off all but a teaspoon of fat, keeping every scrap of fond. Sweat the shallots in the pan over medium, 45 seconds.',
      'Deglaze with the wine, scraping the fond loose; reduce by three-quarters. Add the stock, glace cube and thyme; reduce at a hard simmer until syrupy — a spatula line holds briefly on the pan floor.',
      'Off the heat: fish out the thyme, swirl in the cold butter until the sauce is glossy and coats a spoon, then add the resting juices from the rack tray.',
      'Season last — salt in pinches and lemon in drops, tasted on a piece of chicken, not the spoon. Plate the thighs skin-up with the sauce pooled beside (never over) the skin, so the crisp survives to the table.',
    ],
    chefNotes: [
      'The whole dish is a timeline exercise: skin renders while you mince shallots, sauce reduces while the meat rests. Written out once, it fits on an index card — then throw the card away and cook it from the sequence.',
      'Swap the parts and the sauce survives: pork chops with cider and sage, steak with red wine and peppercorns, mushrooms with marsala for a meatless pan. The sequence — fat off, aromatics, deglaze, reduce, mount, season — is the recipe.',
    ],
    reinforces: ['Searing without fiddling', 'Reduction to syrup by eye', 'Resting meat and capturing its juices', 'Seasoning on the vehicle'],
  },
]
