import type { CourseModule, Recipe } from '../../types/content'

export const module04: CourseModule = {
  id: 'm04',
  number: 4,
  stage: 1,
  title: 'Stocks, Broths & Soups',
  subtitle: 'Flavour from bones, trim and time',
  description:
    'Stock is the quiet infrastructure of serious cooking — the difference between a sauce that tastes of something and one that tastes of stock cube. This module builds the full repertoire: white and brown stocks, vegetable stock, fish fumet, reduction to glace, the logic of clarification and consommé, and the two great soup families — puréed and brothy. It also pays off the trim-and-stock-bag habit you started in Module 1: from here on, your freezer feeds your stockpot.',
  objectives: [
    'Produce a clear, gelatinous white chicken stock from raw bones and cold water',
    'Roast bones and mirepoix for a deep brown stock, deglazing every trace of fond',
    'Make a balanced vegetable stock and a delicate fish fumet, each in under an hour',
    'Reduce stock to glace and use it to reinforce sauces and soups',
    'Explain how an egg-white raft clarifies a consommé, and why it costs flavour',
    'Build puréed soups to a silk finish and brothy soups with distinct, just-cooked elements',
  ],
  difficulty: 2,
  estimatedHours: 10,
  prerequisites: ['m02'],
  skillsUnlocked: [
    'White & brown stock method',
    'Fumet & vegetable stock',
    'Reduction & glace',
    'Skimming and stock hygiene',
    'Soup architecture (purée vs broth)',
  ],
  equipment: [
    'Stockpot, 8 L or larger',
    'Wide heavy pan or second pot for reductions',
    'Fine-mesh sieve (chinois if possible) and muslin/cheesecloth',
    'Ladle and a shallow spoon for skimming',
    'Large roasting tray',
    'Stick blender or jug blender',
    'Probe thermometer',
    'Freezer containers and ice-cube trays for glace',
  ],
  ingredients: [
    '2–3 kg raw chicken bones, carcasses and wings (butcher or your own breakdown trim)',
    'Mirepoix vegetables in volume: onions, carrots, celery (3 kg mixed)',
    'Tomato paste, bay leaves, thyme, parsley stalks, black peppercorns',
    'White fish frames and heads (ask the fishmonger — often free)',
    'Dried mushrooms and leek tops for the vegetable stock',
    'Roasting pumpkin, ginger, coconut milk (purée soup)',
    'Small pasta or noodles, seasonal greens (brothy soup)',
    'Dry white wine',
  ],
  lessons: [
    {
      id: 'm04-l01',
      title: 'White stock and the stock-bag economy',
      summary: 'The cold-start, never-boil method that turns bones and trim into clear, gelatinous stock — and the freezer habit that supplies it.',
      theory: [
        {
          heading: 'What stock actually is',
          body: 'Stock is water that has been persuaded to carry flavour and body. The flavour comes from soluble proteins, amino acids and aromatics; the body comes from collagen in bones, skin and connective tissue breaking down into gelatine over hours of gentle heat. A proper chicken stock sets to a soft jelly in the fridge — that wobble is the point, because gelatine is what gives sauces and soups their mouth-filling weight.\n\nThe method is a short list of non-negotiables. Start bones in cold water and bring up slowly, so soluble proteins coagulate gradually into a skimmable scum instead of dispersing. Never let it boil: a rolling boil emulsifies fat and particulate into the liquid and no amount of straining will un-cloud it. Skim early and often. Salt not at all — stock is an ingredient, and it may later be reduced tenfold; season the dish, never the stock.',
        },
        {
          heading: 'The stock bag pays out',
          body: 'Since Module 1 you have been triaging trim into freezer bags: onion ends and skins in moderation, carrot peels, celery leaves, leek tops, parsley stalks, mushroom stems, and — separately — chicken bones and carcasses. This is the raw material economy of the stockpot. A household that roasts a chicken a fortnight and keeps its trim never needs to buy stock again; at current Australian prices that is roughly $6–8 a litre you are not spending.\n\nKeep the bags disciplined. Vegetable bag: no brassicas (cabbage, broccoli — they turn sulphurous), no beetroot (it dyes), no starchy potato peel (it clouds), nothing rotten — the stockpot is not a bin. Bone bag: raw and cooked bones in separate bags, because they make different stocks. Label with dates, use within three months, and empty the bags in Module 4 week one — which is now.',
        },
      ],
      demonstrations: [
        {
          title: 'White chicken stock, start to strain',
          steps: [
            'Rinse 2 kg of raw chicken bones and place in the stockpot with 4 litres of cold water — bones covered by 5 cm.',
            'Bring up over medium heat, uncovered, watching for the grey-brown scum raft as it approaches a simmer. Skim it off with a shallow spoon.',
            'Settle the pot at a bare shiver — 90–95°C, one or two bubbles breaking the surface. Never a boil.',
            'Simmer 4 hours, skimming every 30–40 minutes and topping up with cold water if bones surface.',
            'For the final hour, add 300 g of roughly cut mirepoix, a bay leaf, thyme, parsley stalks and 6 peppercorns — aromatics late, so they perfume rather than stew out.',
            'Strain through a fine sieve without pressing the solids, then cool fast: pot in a sink of iced water, stirring, then fridge.',
            'Next day, lift the fat cap and check the set: a soft jelly means you extracted well.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The jelly benchmark',
          instructions: 'Make the white stock (r-m04-01) and photograph a chilled cupful tipped sideways. No wobble means low collagen: next batch, add 4–6 chicken wings or feet, which are nearly pure connective tissue, and compare the set.',
          repeatPractice: 'Every stock you make in this course gets the tipped-cup photo. By Module 9 you should be able to predict the set from the bones you used before the pot is even chilled.',
        },
        {
          title: 'Stock-bag audit',
          instructions: 'Empty your freezer bags onto the bench and sort: stock-worthy, compost, mislabelled. Write your own one-page house rules for what goes in each bag, taped inside the freezer door. If your bags are empty, your Module 1 habit lapsed — restart it today.',
        },
      ],
      recipeIds: ['r-m04-01'],
      techniqueIds: ['t-white-stock', 't-mise-en-place'],
      troubleshooting: [
        {
          problem: 'Stock is cloudy and tastes muddy',
          cause: 'It boiled — fat and particulate emulsified in — or the scum was never skimmed.',
          fix: 'Hold 90–95°C on the probe next time and skim in the first half hour especially. Cloudy stock is still usable in braises and family soups; it is only wrong where clarity matters.',
        },
        {
          problem: 'Stock smells sour after two days in the fridge',
          cause: 'It cooled too slowly through the danger zone (60–5°C), or sat out overnight.',
          fix: 'Discard it — no rescue exists. Always cool the pot in an iced sink within two hours, refrigerate shallow, and freeze whatever you will not use within four days.',
        },
      ],
    },
    {
      id: 'm04-l02',
      title: 'Brown stock, reduction and glace',
      summary: 'The oven does the flavour work: deeply roasted bones and mirepoix, a deglazed tray, and the long reduction to syrup.',
      theory: [
        {
          heading: 'Brown means browned first',
          body: 'A brown stock is a white stock with a Maillard prologue. Bones roast at 210°C until deep mahogany — 45 minutes to an hour, turned once — and the mirepoix roasts alongside, with tomato paste smeared on for the final 15 minutes so it caramelises without burning (the classical pincé). Every browned surface is flavour, and the most concentrated of it is welded to the roasting tray as fond, which is why deglazing the tray with water or wine and scraping it clean is not optional. Leaving the fond behind throws away the best part.\n\nFrom there the method is the white-stock discipline with more time: cold water, slow rise, no boiling, 6–8 hours for chicken and veal-style depth, skimming throughout. The result is darker, rounder and more savoury — the backbone of jus, gravies, braises and the espagnole family you will meet in Module 5.',
        },
        {
          heading: 'Reduction: concentration with consequences',
          body: 'Reduction is evaporation used as a flavour dial. Simmer stock hard in a wide pan — surface area is speed — skimming as it drops, and everything dissolved in it concentrates: flavour, body, and any salt you were foolish enough to add early. Halve the volume and you double the seasoning; this is why stock is salted never, and sauces are seasoned at the end.\n\nThe far end of the dial is glace: stock reduced by 8–10 times to a dark syrup that coats a spoon hot and sets to a firm, sliceable jelly cold. A litre of brown stock yields barely 100–125 ml of glace, and that spoonful is a flavour bank: frozen in ice-cube trays, one cube deepens a pan sauce, glazes vegetables, or rescues a thin braise in thirty seconds. Making glace once teaches you more about what stock is than any paragraph can.',
        },
      ],
      demonstrations: [
        {
          title: 'From strained brown stock to glace cubes',
          steps: [
            'Strain 2 litres of finished brown stock through muslin into a wide, heavy pan.',
            'Boil it hard, skimming the foam and fat that ride to the edges.',
            'When reduced by half, pour into a smaller pan — a wide pan speeds early reduction, a small pan protects the final stage.',
            'Continue at a brisk simmer, skimming, until it is syrupy and coats the back of a spoon: 200–250 ml total, glossy and mahogany.',
            'Pour into an ice-cube tray, cool, then freeze; bag the cubes and label with the date.',
            'Dissolve one cube in a mug of hot water and taste — that is the concentration you built.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Reduction tasting ladder',
          instructions: 'Reduce 1 litre of brown stock, pulling 50 ml samples at full strength, half, quarter, and glace. Cool each and taste in order, noting flavour, body and how the finish lengthens. Keep notes — this ladder is your internal reference for "how reduced" every future sauce should be.',
          repeatPractice: 'In Module 5, every pan sauce ends with a reduction judgement made by eye and spoon. Re-run this ladder whenever your sauces come out thin or over-intense — it recalibrates the eye.',
        },
      ],
      recipeIds: ['r-m04-02'],
      techniqueIds: ['t-brown-stock', 't-reduction', 't-roasting-veg'],
      troubleshooting: [
        {
          problem: 'Brown stock tastes bitter and acrid',
          cause: 'Bones or tomato paste blackened in the oven — burnt is not browned, and it steeps for hours.',
          fix: 'Roast to deep mahogany, not black; add the tomato paste only for the last 15 minutes; and leave any scorched tray corners undeglazed rather than dissolving them into the pot.',
        },
        {
          problem: 'Glace tastes harsh and salty though no salt was added',
          cause: 'Reduced past 10× — even natural sodium and minerals concentrate into harshness.',
          fix: 'Stop at spoon-coating syrup. If overshot, dilute back with water or weak stock; glace is a dial that turns both ways.',
        },
      ],
    },
    {
      id: 'm04-l03',
      title: 'Vegetable stock and fish fumet',
      summary: 'The quick stocks: forty-five minutes each, opposite personalities — one sweet and clean, one delicate and briny.',
      theory: [
        {
          heading: 'Vegetable stock: short and deliberate',
          body: 'Vegetable stock has no collagen to extract, so time works against you: after about 45 minutes everything worth having is in the water, and longer simmering only turns it murky and cabbage-adjacent. Sweat a base of onion, carrot, celery and leek tops in a little oil first — 10 minutes without colour — to open their flavours, then cover with cold water and simmer 30–40 minutes with bay, thyme, parsley stalks and peppercorns.\n\nBuild it for its destination. A universal stock stays neutral: no capsicum, no fennel unless wanted, and go gently with celery, which dominates. For depth approaching meatiness, add a handful of dried mushrooms and a strip of kombu or a spoon of tomato — umami layering straight from Module 2. Strain without pressing, and use within four days or freeze. It is the fastest route from stock-bag to soup, and the base for risotto and vegetable braises later in the course.',
        },
        {
          heading: 'Fumet: the twenty-minute extraction',
          body: 'Fish fumet is the sprinter of the stock family. Fish collagen dissolves at low temperatures and the delicate flavours degrade fast, so the whole affair takes about 30 minutes cooking: sweat sliced onion or leek and the well-rinsed frames of white fish in butter for 5 minutes, add a glass of dry white wine, cover with cold water, and simmer — barely — for 20 minutes, skimming. Strain and stop. Past 30 minutes, fumet turns bitter and gluey, and bones from oily fish (salmon, mackerel, sardines) make it muddy from the start; use only white-fish frames, gills removed, soaked clean of blood.\n\nThe result is pale, briny and faintly sweet — the base of chowders, seafood soups, and the velouté and beurre blanc work coming in Module 5. Fishmongers often give frames away; one polite question buys the cheapest luxury ingredient in the shop.',
        },
      ],
      demonstrations: [
        {
          title: 'Fish fumet in half an hour',
          steps: [
            'Rinse 1 kg of white-fish frames and heads under cold water until the water runs clear; snip out any gills — they are pure bitterness.',
            'Sweat a sliced onion and the white of a leek in 30 g of butter over medium-low, 5 minutes, no colour.',
            'Add the frames and stir gently 2–3 minutes until the flesh scraps turn opaque.',
            'Pour in 150 ml of dry white wine, then cold water to just cover.',
            'Bring to the barest simmer, skim once well, add parsley stalks and 4 peppercorns, and cook 20 minutes — clock it.',
            'Strain through muslin without pressing. Cool fast; use within two days or freeze.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Two stocks, one afternoon',
          instructions: 'Make the vegetable stock (r-m04-03 uses it) and a fumet in a single session, staggered so both pots need attention at different moments — this is multi-pot station management practice as much as stock practice. Taste both hot, seasoned with a few grains of salt in the tasting cup only, and write three words for each.',
          repeatPractice: 'Multi-pot timing returns in every service-style session for the rest of the course. When Module 5 asks for a sauce alongside a protein, run it exactly like this afternoon: two timelines, one cook.',
        },
      ],
      recipeIds: ['r-m04-03'],
      techniqueIds: ['t-white-stock', 't-sauteing', 't-umami-layering'],
      troubleshooting: [
        {
          problem: 'Vegetable stock tastes like boiled cabbage water',
          cause: 'Brassica trim in the stock bag, or the pot simmered well past the 45-minute mark.',
          fix: 'Audit the bag — no cabbage, broccoli or cauliflower trim, ever — and set a timer. Vegetable stock is done when it is done, and more time is worse.',
        },
      ],
    },
    {
      id: 'm04-l04',
      title: 'Clarity and the two soup families',
      summary: 'How an egg-white raft makes consommé, and the architecture of puréed versus brothy soups.',
      theory: [
        {
          heading: 'Clarification and consommé',
          body: 'A consommé is stock made theatrical: perfectly clear, deeply flavoured, achieved by clarification. Whisk egg whites (about 3 per litre) with minced lean meat, mirepoix and a little tomato into cold, fat-free stock, then heat it gently without stirring. As the whites coagulate they rise as a raft, and convection drags every particle in the stock up into it — the raft is a filter that builds itself. Once formed, open a small chimney hole, simmer 45–60 minutes barely moving, then ladle the liquid out through the chimney and pass it through muslin. Crystal.\n\nThe catch: the raft strips aromatics and body along with the cloud, which is why the classical clarification includes meat and vegetables — they repay the flavour tax as it cooks. You will clarify once in this module’s exercises to own the concept; in practice, a carefully skimmed, never-boiled stock is nearly as clear at a fraction of the cost, which is itself the deeper lesson.',
        },
        {
          heading: 'Purée or broth: choose the architecture',
          body: 'Almost every soup belongs to one of two families, and they are built on opposite principles. A puréed soup is about unity: vegetables cooked fully soft in stock, blended hot with just enough liquid to move, enriched with butter or cream at the end, and — for restaurant texture — passed through a fine sieve. Its seasoning logic is Module 2 throughout: salt in stages, acid at the end, garnish for contrast (something crunchy, something fresh, a thread of good oil).\n\nA brothy soup is about distinctness: a clear, flavourful liquid in which every element — vegetables, noodles, greens, protein — is cooked to its own doneness and still identifiable. The cardinal rule is staggered additions: dense roots first, quick greens last, noodles often cooked separately so their starch does not cloud the broth. The broth must be worth drinking alone before anything goes in; nothing added later will fix a weak one.',
        },
      ],
      demonstrations: [
        {
          title: 'A one-litre consommé trial',
          steps: [
            'Chill 1 litre of your white chicken stock and lift off every trace of fat.',
            'Whisk 3 egg whites with 150 g of minced chicken breast, 100 g of fine mirepoix and 1 teaspoon of tomato paste.',
            'Whisk this into the cold stock in a tall narrow pot, then heat over medium, stirring gently until it reaches about 50°C — then never stir again.',
            'Watch the raft form as it approaches a simmer; open a small chimney at the edge with a spoon handle.',
            'Hold at a bare simmer 45 minutes, basting the raft occasionally through the chimney.',
            'Ladle the consommé out through the chimney and strain through wet muslin. Compare a cup of it with a cup of the original stock, side by side against a light.',
          ],
        },
      ],
      exercises: [
        {
          title: 'One base, two soups',
          instructions: 'From a single stock, produce a small puréed soup and a small brothy soup in one session — the pumpkin purée (r-m04-04) and the brothy chicken and greens soup (r-m04-01’s stock, built per lesson principles). Serve both to someone and ask which they preferred and why; the answer is always about texture, which is the point.',
          repeatPractice: 'Soup is the course’s standing seasoning gym: from now until Stage 3, make one soup a week from stock-bag stock, alternating families, running the full Module 2 tasting protocol on each.',
        },
      ],
      recipeIds: ['r-m04-04', 'r-m04-01'],
      techniqueIds: ['t-clarification', 't-puree', 't-tasting', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'The raft broke up and the consommé stayed cloudy',
          cause: 'The pot was stirred or boiled after the whites began to set, tearing the raft apart.',
          fix: 'After 50°C, hands off entirely — heat control only. If it breaks, cool the pot and repeat the clarification with fresh whites; the stock is not lost.',
        },
        {
          problem: 'Puréed soup is gluey or gritty instead of silky',
          cause: 'Undercooked vegetables (grit) or over-blended starchy ones like potato (glue).',
          fix: 'Cook vegetables until completely tender before blending, blend hot, and pulse potato-heavy soups briefly instead of running the blender flat out. Pass through a sieve to finish.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Boiling the stockpot to "speed it up"',
      cause: 'Impatience, and the reasonable-sounding idea that hotter extracts faster.',
      fix: 'A boil emulsifies fat and shreds particulate into permanent cloud. 90–95°C extracts everything a boil does, cleanly. Put the probe in the pot and trust it.',
    },
    {
      problem: 'Salting the stock',
      cause: 'The tasting habit from Module 2 applied one layer too early.',
      fix: 'Stock is an ingredient that may be reduced 10×. Season the dish it becomes, never the stock itself. Taste stock in a cup with a few grains of salt added to the cup.',
    },
    {
      problem: 'Treating the stock bag as a compost bin',
      cause: '"It all boils down anyway."',
      fix: 'It does — including the cabbage sulphur, the beetroot dye and the rot. Only trim you would happily sweat in butter earns the bag.',
    },
    {
      problem: 'Cooling the pot on the bench overnight',
      cause: 'A full stockpot takes hours to chill and nobody wants to deal with it at 10 pm.',
      fix: 'Sink of iced water, stir the pot, into shallow containers, into the fridge — under an hour of the danger zone. Sour stock at 6 am teaches this lesson exactly once.',
    },
  ],
  assessment: {
    id: 'as-m04',
    moduleId: 'm04',
    title: 'The Stock Ledger',
    brief:
      'Across one week, then presented in a single session: (1) make a white chicken stock and a brown stock, photographing each chilled and tipped to show the set; (2) reduce 500 ml of the brown stock to glace cubes; (3) in the presentation session, cook two soups from your stocks — the pumpkin purée (r-m04-04) and a brothy soup with at least three staggered elements — and serve both. Keep a written ledger for the week: trim used from stock bags, litres produced, and cost versus bought stock at ~$7/L.',
    rubric: [
      { criterion: 'White stock quality', maxScore: 8, guidance: '7–8: clear, clean-tasting, soft jelly set when chilled. 4–6: sound but weak-bodied or slightly cloudy. Below 4: murky or sour.' },
      { criterion: 'Brown stock & glace', maxScore: 8, guidance: 'Deep colour without bitterness, fond fully deglazed; glace glossy and spoon-coating, not scorched or harsh.' },
      { criterion: 'Puréed soup', maxScore: 8, guidance: 'Completely smooth (sieved), correctly seasoned in stages with a deliberate acid finish and a contrast garnish.' },
      { criterion: 'Brothy soup', maxScore: 8, guidance: 'Broth worth drinking alone; every element distinct and at its own correct doneness; staggered additions evident.' },
      { criterion: 'Ledger & stock-bag habit', maxScore: 8, guidance: 'Week’s ledger complete: trim sources, yields, costings honest; bags correctly maintained and labelled.' },
    ],
    passScore: 28,
    evidence: 'Five photos: both chilled stocks tipped in a cup, the glace cubes, and each finished soup — plus a photo or scan of the week’s ledger page.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'All four stocks made at least once: white, brown, vegetable, fumet',
    'All four module recipes cooked, plus one consommé clarification trial',
    'Assessment passed (28/40 or better) with photo and ledger evidence',
  ],
}

export const module04Recipes: Recipe[] = [
  {
    id: 'r-m04-01',
    title: 'White Chicken Stock',
    moduleId: 'm04',
    description:
      'The foundation liquid of the entire course: raw bones, cold water, four patient hours and a disciplined spoon. Makes about 3 litres — the base for this module’s soups and Module 5’s velouté. Serves 6 as the base of a week’s cooking.',
    difficulty: 2,
    serves: 6,
    timeMins: 300,
    techniqueIds: ['t-white-stock', 't-mise-en-place', 't-dice'],
    ingredients: [
      { item: 'Raw chicken bones, carcasses and wings', qty: 2, unit: 'kg', prep: 'rinsed in cold water' },
      { item: 'Cold water', qty: 4, unit: 'L' },
      { item: 'Brown onion', qty: 150, unit: 'g', prep: 'peeled, quartered' },
      { item: 'Carrot', qty: 100, unit: 'g', prep: 'peeled, in chunks' },
      { item: 'Celery', qty: 50, unit: 'g', prep: 'in chunks' },
      { item: 'Bay leaf', qty: 1, unit: 'each' },
      { item: 'Thyme sprigs', qty: 3, unit: 'each' },
      { item: 'Parsley stalks', qty: 10, unit: 'g', prep: 'from the stock bag' },
      { item: 'Black peppercorns', qty: 6, unit: 'each' },
    ],
    method: [
      'Put the rinsed bones in the stockpot and cover with the cold water by 5 cm. Cold-start is the rule: proteins that warm slowly clump into skimmable scum instead of dissolving into cloud.',
      'Bring up over medium heat, uncovered. As it approaches a simmer a grey raft of scum forms — skim it patiently with a shallow spoon, chasing it to the pot edge.',
      'Settle the pot at 90–95°C: the surface should shiver, with an occasional lazy bubble. Verify with the probe, then check it whenever you pass the stove.',
      'Simmer 4 hours, skimming every 30–40 minutes. Top up with cold water if the bones break the surface — exposed bones extract nothing.',
      'Add the vegetables, bay, thyme, parsley stalks and peppercorns for the final hour only. Aromatics stewed for four hours go dull; one hour keeps them fresh in the cup.',
      'Strain through a fine sieve into a clean container without pressing the solids — pressing pushes cloud through. Let the solids drain by gravity, then discard them; they have given everything.',
      'Cool fast: container in a sink of iced water, stirred, then into the fridge in shallow batches. Next day, lift off the fat cap (keep it — chicken fat fries excellent potatoes) and check for the soft jelly set.',
      'Portion: 1 litre for this week’s brothy soup, the rest frozen flat in labelled bags or containers, dated.',
    ],
    chefNotes: [
      'Yield check: you should finish with about 3 litres. Much less means it simmered too hard; much more means under-extraction — note it in your ledger either way.',
      'This recipe scales linearly. Once the method is automatic, never run the pot half-empty: the same four hours makes six litres as easily as three.',
    ],
    reinforces: ['Cold-start and skimming discipline', 'Temperature control by probe', 'Label-date-freeze storage'],
  },
  {
    id: 'r-m04-02',
    title: 'Brown Chicken Stock & Glace Cubes',
    moduleId: 'm04',
    description:
      'Bones and mirepoix roasted to mahogany, the tray deglazed to the last speck, then six hours of patience — finished by reducing a third of the yield to glace cubes for the freezer. The flavour bank that powers Module 5’s pan sauces.',
    difficulty: 2,
    serves: 6,
    timeMins: 420,
    techniqueIds: ['t-brown-stock', 't-reduction', 't-roasting-veg'],
    ingredients: [
      { item: 'Raw chicken bones, carcasses, wings and necks', qty: 2, unit: 'kg' },
      { item: 'Neutral oil', qty: 30, unit: 'ml' },
      { item: 'Brown onions', qty: 300, unit: 'g', prep: 'peeled, quartered' },
      { item: 'Carrots', qty: 200, unit: 'g', prep: 'in large chunks' },
      { item: 'Celery', qty: 100, unit: 'g', prep: 'in large chunks' },
      { item: 'Tomato paste', qty: 40, unit: 'g' },
      { item: 'Cold water', qty: 4, unit: 'L', prep: 'plus 250 ml for deglazing' },
      { item: 'Bay leaves', qty: 2, unit: 'each' },
      { item: 'Thyme sprigs', qty: 4, unit: 'each' },
      { item: 'Black peppercorns', qty: 8, unit: 'each' },
    ],
    method: [
      'Heat the oven to 210°C. Toss the bones in the oil, spread on a large tray in one layer, and roast 45–60 minutes, turning once, until deep mahogany all over — browned, never blackened.',
      'Add the onions, carrots and celery to the tray for the final 25 minutes. Smear the tomato paste over bones and vegetables for the last 15 — it should darken to brick red and smell sweet, not scorch.',
      'Transfer everything to the stockpot. Pour off any fat from the tray, set the tray over two burners with 250 ml of water, and scrape every trace of fond loose as it bubbles. Pour this into the pot — it is the most concentrated flavour in the recipe.',
      'Cover with the cold water, bring up slowly, skim, and settle at 90–95°C exactly as for white stock.',
      'Simmer 6 hours, skimming periodically. Add the bay, thyme and peppercorns for the final hour.',
      'Strain through a fine sieve, then again through muslin. Cool fast in an iced sink; refrigerate. Next day, remove the fat cap.',
      'Take 500 ml of the finished stock and reduce it in a wide pan at a hard simmer, skimming, transferring to a small pan as it shrinks, until it coats the back of a spoon — about 60–70 ml of glossy glace.',
      'Freeze the glace in an ice-cube tray, then bag, label and date. Freeze the remaining stock in 500 ml portions.',
    ],
    chefNotes: [
      'The colour of the finished stock is decided in the oven, not the pot — pale roasting makes pale stock no matter how long it simmers. Be brave to mahogany.',
      'A glace cube whisked into anything — pan sauce, gravy, braising liquid, even the brothy soup — is the closest thing home cooking has to a legal performance enhancer. Spend them deliberately.',
    ],
    reinforces: ['Deep roasting and fond capture', 'Skimming and simmer control', 'Reduction judgement by eye and spoon'],
  },
  {
    id: 'r-m04-03',
    title: 'Everyday Vegetable Stock',
    moduleId: 'm04',
    description:
      'Forty-five minutes from stock-bag to two litres of clean, sweet, golden stock — the fastest payoff of the trim habit. Deliberately neutral so it can go anywhere: soups, risotto, braises, and Module 5’s lighter sauces.',
    difficulty: 1,
    serves: 6,
    timeMins: 55,
    techniqueIds: ['t-white-stock', 't-sauteing', 't-umami-layering', 't-dice'],
    ingredients: [
      { item: 'Olive oil', qty: 30, unit: 'ml' },
      { item: 'Brown onions', qty: 300, unit: 'g', prep: 'skin on if clean, quartered' },
      { item: 'Carrots', qty: 200, unit: 'g', prep: 'scrubbed, in chunks' },
      { item: 'Celery', qty: 100, unit: 'g', prep: 'in chunks, leaves included' },
      { item: 'Leek tops', qty: 150, unit: 'g', prep: 'from the stock bag, well washed' },
      { item: 'Mushroom stems or 3 dried shiitake', qty: 20, unit: 'g' },
      { item: 'Garlic', qty: 3, unit: 'each', prep: 'crushed, skin on' },
      { item: 'Cold water', qty: 2.5, unit: 'L' },
      { item: 'Bay leaf', qty: 1, unit: 'each' },
      { item: 'Parsley stalks', qty: 10, unit: 'g' },
      { item: 'Black peppercorns', qty: 6, unit: 'each' },
    ],
    method: [
      'Sweat the onions, carrots, celery, leek tops and garlic in the oil over medium heat, 10 minutes, stirring — softening and opening, not browning. (Brown them if you want a darker, sweeter stock; that is a legitimate variation, decided on purpose.)',
      'Add the mushrooms, water, bay, parsley stalks and peppercorns. Bring to a simmer.',
      'Simmer gently, uncovered, 35 minutes. Set a timer — vegetable stock overcooks into murk, and the timer is the technique.',
      'Taste at 30 minutes: it should be lightly sweet, savoury from the mushroom, with no single vegetable shouting. Celery dominance means less celery next batch — note it.',
      'Strain through a fine sieve without pressing. Cool fast, refrigerate up to four days or freeze in labelled 500 ml portions.',
    ],
    chefNotes: [
      'Onion skins lend a beautiful amber colour — keep them in if they are clean and papery, out if you need a very pale stock for a delicate soup.',
      'This is the stock to make weekly on autopilot: bag goes in, timer goes on, freezer gets fed. Total hands-on time is under fifteen minutes.',
    ],
    reinforces: ['Stock-bag economy', 'Sweating without colour', 'Timing discipline and tasting notes'],
  },
  {
    id: 'r-m04-04',
    title: 'Roast Pumpkin & Ginger Soup, Coconut and Lime',
    moduleId: 'm04',
    description:
      'The puréed-soup template executed in full: vegetables roasted for depth, blended hot with your own stock, enriched, sieved to silk, and finished with acid and a contrast garnish. Sweet, warm, bright — and a masterclass in stages of seasoning.',
    difficulty: 2,
    serves: 6,
    timeMins: 75,
    techniqueIds: ['t-puree', 't-roasting-veg', 't-tasting', 't-acid-balance', 't-seasoning-salt'],
    ingredients: [
      { item: 'Kent or butternut pumpkin', qty: 1.2, unit: 'kg', prep: 'peeled, seeded, in 4 cm chunks' },
      { item: 'Olive oil', qty: 45, unit: 'ml' },
      { item: 'Fine salt', qty: null, unit: 'to taste', prep: 'in stages, weighed if you are logging' },
      { item: 'Brown onion', qty: 200, unit: 'g', prep: 'small dice' },
      { item: 'Fresh ginger', qty: 30, unit: 'g', prep: 'peeled, finely grated' },
      { item: 'Garlic', qty: 2, unit: 'each', prep: 'minced' },
      { item: 'Vegetable stock (r-m04-03)', qty: 1, unit: 'L', prep: 'hot' },
      { item: 'Coconut milk', qty: 270, unit: 'ml', prep: '3 tbsp reserved for garnish' },
      { item: 'Lime', qty: 2, unit: 'each', prep: 'juice of one, wedges from the other' },
      { item: 'Pepitas', qty: 40, unit: 'g', prep: 'toasted in a dry pan until they pop' },
      { item: 'Coriander leaves', qty: 10, unit: 'g', prep: 'picked' },
    ],
    method: [
      'Heat the oven to 210°C. Toss the pumpkin with 30 ml of oil and 3 g of salt, spread on a hot tray with gaps, and roast 30–35 minutes until deeply golden at the edges and completely tender. The browning is a flavour layer a boiled-pumpkin soup never gets.',
      'Meanwhile sweat the onion in the remaining oil with a pinch of salt over medium-low, 8 minutes, no colour. Add the ginger and garlic for the final 2 minutes.',
      'Add the roasted pumpkin and the hot stock. Simmer 10 minutes so the flavours marry — a purée soup is still a soup before it is a purée.',
      'Blend hot, in batches if using a jug blender (never above half full with hot liquid, lid cracked, towel on top). Use only enough extra stock to keep it moving — thick blends smoother.',
      'Blend in the coconut milk, then pass the whole soup through a fine sieve back into the rinsed pot, pushing with a ladle. This step is the difference between good and silk; do not skip it.',
      'Reheat gently. Now the Module 2 protocol: salt in 1 g steps until the pumpkin blooms; then the lime juice in two additions, tasting between — the soup should brighten, not taste of lime.',
      'Check body: it should coat a spoon and slump lazily from it. Thin with hot stock or tighten with a few minutes’ simmer as needed.',
      'Serve with a swirl of reserved coconut milk, a scatter of pepitas and coriander, and lime wedges. Every bowl should land with contrast: silk, crunch, cream, acid, leaf.',
    ],
    chefNotes: [
      'The sieve catches ginger fibre and pumpkin strings the blender cannot defeat — taste the debris in the sieve once and you will never argue with this step again.',
      'Template thinking: swap pumpkin for cauliflower, parsnip or carrot; swap coconut/lime/ginger for cream/lemon/thyme. Roast, sweat, simmer, blend, sieve, season, garnish — the skeleton never changes.',
    ],
    reinforces: ['Roasting for flavour depth', 'Staged salting with tasting', 'Acid finishing', 'Garnish as texture contrast'],
  },
]
