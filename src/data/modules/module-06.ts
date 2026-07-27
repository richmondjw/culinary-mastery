import type { CourseModule, Recipe } from '../../types/content'

export const module06: CourseModule = {
  id: 'm06',
  number: 6,
  stage: 1,
  title: 'Vegetables & Legumes',
  subtitle: 'Where cooks are actually judged',
  description:
    'Anyone can cook a steak; vegetables expose you. This module covers the full toolkit — blanch and refresh, roasting, sautéing, braising and glazing, silky purées, quick pickles and legumes cooked properly from dried. You will also start buying like a cook: by season, by firmness, by smell, not by the shopping list.',
  objectives: [
    'Blanch and refresh green vegetables to locked-in colour and exact tenderness',
    'Roast and sauté vegetables to deep, even browning without steaming or burning',
    'Braise and glaze vegetables so the liquid finishes as a coating glaze, not a puddle',
    'Produce a silk-smooth vegetable purée passed through a sieve',
    'Cook legumes from dried to creamy centres with intact skins, seasoned through',
    'Build a quick-pickle brine from the 3:2:1 ratio and deploy it against rich food',
  ],
  difficulty: 2,
  estimatedHours: 8,
  prerequisites: ['m02'],
  skillsUnlocked: [
    'Blanch & refresh',
    'Vegetable roasting & pan control',
    'Glazing & vegetable braising',
    'Restaurant purées',
    'Legume cookery from dried',
  ],
  equipment: [
    'Large stockpot (6 L+) for blanching',
    'Heavy roasting tray',
    "Wide sauté pan or frying pan (26–30 cm)",
    'Saucepan with tight lid',
    'Blender or stick blender',
    'Fine sieve (chinois or tamis)',
    'Digital scales and probe thermometer',
    'Baking paper for cartouches',
  ],
  ingredients: [
    'Green beans, broccoli, broccolini (1 kg mixed)',
    'Carrots, parsnips, beetroot, pumpkin (2 kg mixed roots)',
    'Cauliflower (1 large head)',
    'Dried Puy-style or French green lentils (500 g)',
    'Dried cannellini or borlotti beans (500 g)',
    'White wine vinegar and apple cider vinegar',
    'Unsalted butter (500 g) and olive oil',
    'Brown onions, garlic, thyme, bay leaves',
  ],
  lessons: [
    {
      id: 'm06-l01',
      title: 'Blanch & refresh: locking in green',
      summary: 'Sea-salty water, a hard boil, an ice bath — the professional method for vegetables that stay vivid and arrive exactly tender.',
      theory: [
        {
          heading: 'Why the water is salted like the sea',
          body: 'Blanching water should taste like the ocean — 2–3% salt, which is 20–30 g per litre. That concentration seasons the vegetable to its centre in the brief time it cooks, something surface salting afterwards can never do. It also raises the ionic strength of the water, which slows the leaching of flavour compounds out of the vegetable.\n\nVolume matters as much as salt. Use at least 4 litres at a rolling boil for 500 g of vegetables, so the water barely loses temperature when the food goes in. A pot that stops boiling stews the vegetables instead of blanching them: colours dull, textures slacken, and the timing cues you are learning stop being reliable.',
        },
        {
          heading: 'The refresh, and when to skip it',
          body: 'Green vegetables owe their colour to chlorophyll, which degrades to drab olive with prolonged heat and acid. The ice bath — the refresh — stops cooking within seconds, fixing colour and texture exactly where you chose to stop them. Cook until just tender when you bite a piece, usually 2–4 minutes for beans and broccoli, then straight into iced water, then drain hard and dry.\n\nRefreshing is for holding: vegetables blanched ahead can be reheated in foaming butter to order, which is how restaurants serve perfect greens at speed. If you are eating immediately, skip the bath — drain, season, butter, done. The refresh is a service tool, not a ritual.',
        },
      ],
      demonstrations: [
        {
          title: 'Blanching green beans for service',
          steps: [
            'Bring 4 L of water with 100 g salt (2.5%) to a hard rolling boil; set a bowl of iced water beside the stove.',
            'Top and tail 500 g green beans; keep them whole so they cook evenly.',
            'Drop the beans in all at once and start a timer. The water should return to the boil within 30 seconds.',
            'At 2 minutes 30, taste a bean: it should be tender with the faintest resistance, and vividly green.',
            'Lift straight into the iced water with a spider; leave 2 minutes until fully cold.',
            'Drain hard, roll in a clean tea towel to dry, and refrigerate — ready to reheat in butter within 60 seconds, any time in the next two days.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The tenderness ladder',
          instructions: 'Blanch broccoli florets in five batches, pulling one batch every 30 seconds from 1 minute 30 to 3 minutes 30. Refresh all five, line them up, and taste in order. Write down which stage you would serve, and which stage each of the other four would suit (salads, purées, stir-fries). You are calibrating your definition of "just tender".',
          repeatPractice: 'Every blanched vegetable in Modules 7–14 is a rerun of this calibration. Taste a piece before you refresh, every single time — the pot timer is a suggestion; your teeth are the instrument.',
        },
      ],
      recipeIds: ['r-m06-01'],
      techniqueIds: ['t-blanching', 't-seasoning-salt', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Greens turn olive-drab within minutes of cooking',
          cause: 'Overcooked, under-salted water, or acid contact — chlorophyll collapses with prolonged heat and low pH.',
          fix: 'Bigger pot, harder boil, 2–3% salt, shorter time, and dress with acid (lemon, vinaigrette) only at the moment of serving.',
        },
        {
          problem: 'Refreshed vegetables taste waterlogged and bland',
          cause: 'Left in the ice bath long after they were cold, then stored wet.',
          fix: 'The bath stops cooking — two minutes does it. Drain hard, dry in a towel, and re-season when you reheat in butter.',
        },
      ],
    },
    {
      id: 'm06-l02',
      title: 'Dry heat: roasting and sautéing',
      summary: 'Browning is flavour. This lesson is about creating it deliberately — hot trays, space between pieces, and a pan that never stops sizzling.',
      theory: [
        {
          heading: 'Steam is the enemy of brown',
          body: 'Caramelisation and the Maillard reaction — the chemistry of browning — only begin above roughly 140°C, and water cannot exceed 100°C while it is present. Every design decision in vegetable roasting exists to get rid of surface moisture fast: a 200–220°C oven, a preheated tray, enough fat to conduct heat into the cut faces, and space between pieces so steam escapes instead of pooling.\n\nCrowding is the classic failure. Two trays with gaps beat one tray packed edge to edge, every time. Cut-side-down contact on hot metal is where colour comes from, so cut roots into flat-faced pieces — halves and thick batons brown better than rounds.',
        },
        {
          heading: 'The sauté pan as thermometer',
          body: 'Sautéing teaches heat management faster than any other technique. The sequence is fixed: pan hot before fat, fat hot before food, and batches small enough that the pan recovers its temperature within seconds of loading. Your ears do the monitoring — a steady, energetic sizzle means water is being driven off and browning is underway; silence means the pan has lost its heat and the food is now steaming in its own juices.\n\nSalt timing differs by goal. Salting early draws moisture, which helps soft results like sweated onions; salting at the end keeps surfaces dry for hard browning, as with mushrooms or zucchini. Decide which result you want before the pan goes on.',
        },
      ],
      demonstrations: [
        {
          title: 'Roasting a tray of mixed roots',
          steps: [
            'Heat the oven to 210°C with the empty roasting tray inside.',
            'Cut carrots and parsnips into batons of even thickness (about 2 cm), pumpkin into 3 cm wedges — flat faces everywhere.',
            'Toss with olive oil (about 15 ml per 500 g) and fine salt in a bowl, not on the tray, so every face is coated.',
            'Lay the vegetables cut-side down on the hot tray — listen for the sizzle — with a finger-width gap between pieces.',
            'Roast 20 minutes without touching them, then check the undersides: deep golden means turn, pale means wait.',
            'Roast 10–15 minutes more until tender to a knife tip, then finish off the heat with a splash of vinegar or a scatter of thyme.',
          ],
        },
        {
          title: 'Sautéing mushrooms to a hard sear',
          steps: [
            'Quarter 400 g mushrooms; heat a wide pan over high heat until a drop of water skates and evaporates.',
            'Add 20 ml oil, then half the mushrooms in a single layer. Do not salt yet.',
            'Leave them alone 2 minutes — moving them resets the browning clock.',
            'Toss, cook 2–3 minutes more until deeply browned, then salt, add a knob of butter and a minced garlic clove for 30 seconds.',
            'Tip out and repeat with the second batch. Two good batches beat one grey one.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Crowding experiment',
          instructions: 'Roast 600 g of pumpkin two ways in the same oven: 300 g spread with gaps on one tray, 300 g packed tight on another. Same oil, same salt, same 210°C, same time. Photograph both trays and taste side by side. The difference is the whole lesson.',
          repeatPractice: 'Recheck yourself whenever a roast comes out pale in later modules — including the roast potatoes of Module 7 and the tray bakes of Stage 2. Pale tray? Count the gaps first, blame the oven second.',
        },
      ],
      recipeIds: ['r-m06-02'],
      techniqueIds: ['t-roasting-veg', 't-sauteing', 't-seasoning-salt'],
      troubleshooting: [
        {
          problem: 'Roast vegetables come out pale and soft instead of caramelised',
          cause: 'Crowded tray, cold tray, or oven below 200°C — the surface moisture never cleared.',
          fix: 'Preheat the tray with the oven, leave gaps between pieces, and resist opening the door for the first 20 minutes.',
        },
      ],
    },
    {
      id: 'm06-l03',
      title: 'Wet heat: braising, glazing and silky purées',
      summary: 'Cooking vegetables in measured liquid — until the liquid becomes the sauce — and blending them into purées with restaurant polish.',
      theory: [
        {
          heading: 'The glaze is the measure',
          body: 'To glaze a vegetable, you cook it in a precise economy: liquid one-third of the way up the pieces, a generous knob of butter, a pinch each of salt and sugar, and a paper cartouche resting on top. The cartouche slows evaporation just enough that, by the time the vegetable is tender, the liquid has reduced to a glossy syrup that coats every piece. Tender vegetable and finished glaze arriving together — that is the entire test.\n\nIf the liquid is gone but the vegetable is firm, add a splash of water and keep going. If the vegetable is tender but the pan is still wet, lift the vegetable out, reduce hard, and return it to roll in the glaze. Glacé à blanc keeps everything pale; à brun pushes a few minutes further into light caramel.',
        },
        {
          heading: 'Purées: cook fully, blend hot, pass',
          body: 'A blender cannot rescue an undercooked vegetable — fibrous lumps stay fibrous at any speed. Cook the vegetable completely soft first, usually simmered in just enough seasoned liquid (water, milk or stock) to cover. Then blend while hot: heat keeps starches and fibres loose, and the purée comes together with less added liquid, which means more flavour per spoonful.\n\nBlend with the minimum liquid that lets the blades move, then enrich at the end — cold butter, a little cream — and season. The final, non-negotiable step for restaurant texture is passing the purée through a fine sieve. It takes three minutes and removes every fibre the blender missed. Aim for a purée that holds a soft peak but flows when spread with a spoon.',
        },
      ],
      demonstrations: [
        {
          title: 'Glazed carrots (glacé à blanc)',
          steps: [
            'Cut 500 g carrots into even 4 cm barrels or thick batons — uniformity is the timing.',
            'Lay them one layer deep in a wide pan; add water one-third of the way up, 40 g butter, 5 g salt, 5 g sugar.',
            'Cut a baking-paper cartouche to fit the pan, snip a small hole in the centre, and rest it on the carrots.',
            'Simmer steadily 12–15 minutes. Check: a knife should just slide in as the liquid turns syrupy.',
            'Remove the cartouche, raise the heat, and roll the carrots in the reducing glaze until every piece is coated and glossy.',
            'Taste — it should be seasoned through, sweet and buttery — and serve immediately; a glaze does not hold.',
          ],
        },
      ],
      exercises: [
        {
          title: 'One vegetable, two finishes',
          instructions: 'Split 1 kg of carrots: glaze half à blanc, and simmer the other half soft in salted water with a splash of milk, then blend with 50 g butter and pass through a sieve into a purée. Plate a spoonful of each side by side and taste. Same vegetable, two completely different jobs on a plate — note when you would reach for each.',
          repeatPractice: 'Purées return under the fish of Module 9 and the braises of Module 10 as the sauce-anchor on the plate. Re-drill the sieve pass every time — the day you skip it is the day the texture shows.',
        },
      ],
      recipeIds: ['r-m06-03'],
      techniqueIds: ['t-braising-veg', 't-puree', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Purée is gluey or gummy',
          cause: 'Over-blending a starchy vegetable (especially potato) ruptures starch cells into paste, or too much liquid went in early.',
          fix: 'Blend starchy vegetables in short pulses and stop the moment it is smooth. Cauliflower, carrot and pumpkin forgive; potato does not — it gets the ricer, never the blender.',
        },
        {
          problem: 'Glaze breaks into oily butter at the bottom of the pan',
          cause: 'The liquid reduced past syrup while the vegetables were still cooking, and the emulsion split.',
          fix: 'Add a tablespoon of water and swirl the pan off the heat — the glaze re-emulsifies. Next time, keep the cartouche on longer and the simmer gentler.',
        },
      ],
    },
    {
      id: 'm06-l04',
      title: 'Legumes from dried, quick pickles and buying by season',
      summary: 'Dried beans and lentils cooked to creamy perfection, a pickle brine you know by heart, and the instincts of a market shopper.',
      theory: [
        {
          heading: 'Dried legumes, done properly',
          body: 'Dried beans are a different — and better — ingredient than tinned, at a quarter of the price. Soak large beans (cannellini, borlotti, chickpeas) 8–12 hours in plenty of cold water; lentils need no soak at all. Cook at a bare simmer, never a boil: agitation tears skins and turns the pot to sludge. A bean is done when five out of five taste creamy to the centre with skins intact — one firm bean means keep going.\n\nSalt is not the enemy it was rumoured to be. Salting the cooking water at about 1% seasons the beans through and actually helps skins soften. What genuinely toughens legumes is acid, so tomatoes, vinegar and wine join only after the beans are tender. Aromatics — halved onion, garlic, bay, a parmesan rind — go in from the start, and the cooking liquid is a broth worth keeping.',
        },
        {
          heading: 'The 3:2:1 brine, and buying with your hands',
          body: 'The quick-pickle brine to memorise is 3:2:1 — three parts vinegar, two parts water, one part sugar, plus a tablespoon of salt per 500 ml of brine. Bring it to a boil, pour it hot over thin-cut vegetables, and you have bright, crunchy pickles the same day. Plan a pickled element into any rich plate; acidity and crunch are what keep fat interesting past the third bite.\n\nSeasonal buying is a set of physical checks, not a calendar on the wall. Buy what is cheap and abundant — that is what is in season. Roots should be heavy and hard, never bendy. Leaves squeak and snap. Tomatoes and stone fruit should smell like themselves at the stem. Out-of-season produce costs double and tastes of the truck it arrived on; build the week’s cooking around the market, not the recipe.',
        },
      ],
      demonstrations: [
        {
          title: 'A pot of beans from dried',
          steps: [
            'Soak 300 g dried cannellini beans overnight in 1.5 L cold water; drain and rinse.',
            'Cover with 1.5 L fresh water in a heavy pot; add a halved onion, 2 crushed garlic cloves, a bay leaf and 10 g salt.',
            'Bring just to a simmer, skim any foam, and hold at a bare tremble — a bubble every second or two.',
            'From 45 minutes, taste five beans at a time. Done means all five are creamy with skins intact — often 60–90 minutes depending on age.',
            'Cool the beans in their liquid so the skins stay taut, then store in the liquid for up to four days.',
            'Keep the broth: it is the base of the soup, the braise, or Monday’s risotto.',
          ],
        },
        {
          title: 'Same-day pickled red onion',
          steps: [
            'Shave a red onion into thin half-moons and pack into a clean jar.',
            'Boil 150 ml white wine vinegar, 100 ml water, 50 g sugar and 8 g salt until dissolved.',
            'Pour the hot brine over the onion to cover completely.',
            'Cool uncovered 30 minutes — the onion turns vivid pink — then lid and refrigerate. Ready in an hour, better tomorrow, good for three weeks.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Market walk',
          instructions: 'Do one shop this week with no list. Walk the produce section or market first, pick the three items that are cheapest, heaviest and most fragrant, and build two dinners around them using this module’s techniques. Write down what you chose, what it cost, and which technique you matched to each item.',
          repeatPractice: 'Repeat the no-list shop monthly for the rest of the course. By Stage 3 the menu-planning modules assume you can look at a market table and see three dishes in it.',
        },
        {
          title: 'Tinned versus dried',
          instructions: 'Cook 300 g of dried cannellini from scratch and warm a 400 g tin of the same bean in its liquid. Taste side by side — texture, seasoning depth, broth quality — and cost both per cooked kilogram in AUD. Keep the note; it settles the argument permanently.',
        },
      ],
      recipeIds: ['r-m06-04'],
      techniqueIds: ['t-pickling', 't-acid-balance', 't-seasoning-salt', 't-tasting'],
      troubleshooting: [
        {
          problem: 'Beans still firm after two hours of simmering',
          cause: 'Old stock (dried beans over a year or two old cook forever), hard water, or acid added too early.',
          fix: 'Buy dried legumes from shops with high turnover, keep tomatoes and vinegar out until tender, and add a pinch of bicarb (1 g per litre) only as a last resort for stubborn batches.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Boiling vegetables in timid, under-salted water',
      cause: 'Fear of salt, small pot, and treating the timer as the authority instead of tasting.',
      fix: '2–3% salt, 4 L at a rolling boil, taste a piece from 2 minutes. The water should taste like the sea; the vegetable decides when it is done.',
    },
    {
      problem: 'One overcrowded roasting tray instead of two open ones',
      cause: 'Saving washing-up. Steam pools between packed pieces and browning never starts.',
      fix: 'Gaps between every piece, cut faces down on a preheated tray. Two trays with space beat one tray without, every time.',
    },
    {
      problem: 'Stirring a pot of simmering beans like a risotto',
      cause: 'Habit, and impatience to check doneness.',
      fix: 'A bare simmer and a gentle hand — taste by lifting beans out with a spoon. Agitation tears skins and clouds the pot.',
    },
    {
      problem: 'Skipping the sieve on a purée',
      cause: 'The blender jug looks smooth, so the pass feels redundant.',
      fix: 'It is not. The sieve catches the fibres the blades missed and is the difference between home-smooth and restaurant-smooth. Three minutes, every time.',
    },
  ],
  assessment: {
    id: 'as-m06',
    moduleId: 'm06',
    title: 'The Vegetable Plate',
    brief:
      'In a single 90-minute session, produce one composed vegetarian plate for four containing: (1) a blanched-and-refreshed green vegetable reheated in butter; (2) a roasted vegetable with genuine caramelisation; (3) a glazed vegetable with the liquid finished to a coating glaze; (4) a sieved purée; and (5) braised lentils or beans cooked from dried (the legumes may be cooked the day before). Add one quick-pickled element for acidity. Season and plate as one coherent dish.',
    rubric: [
      { criterion: 'Blanch & refresh execution', maxScore: 8, guidance: '7–8: vivid colour, seasoned through, precisely tender. 4–6: slightly over or under. Below 4: drab, waterlogged or raw.' },
      { criterion: 'Browning quality (roast/sauté)', maxScore: 8, guidance: 'Deep, even caramelisation on cut faces; tender centres; no steamed pallor and no scorched corners.' },
      { criterion: 'Glaze & purée technique', maxScore: 10, guidance: '9–10: glaze coats glossily with no split butter; purée is sieved-smooth and holds softly. Deduct for wet glaze, gluey or fibrous purée.' },
      { criterion: 'Legume cookery', maxScore: 8, guidance: 'Creamy centres, intact skins, seasoned to the centre; broth kept and used or stored.' },
      { criterion: 'Seasoning, balance & plating', maxScore: 6, guidance: 'The plate eats as one dish: salt correct on every element, the pickle lifting the rich components, deliberate composition.' },
    ],
    passScore: 28,
    evidence: 'Three photos: the mise en place before cooking, the tray/pans mid-cook showing browning and glaze, and the finished plate. Plus a one-line tasting note per element.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'The tenderness ladder and crowding experiment both done with photos kept',
    'All four module recipes cooked, including one pot of legumes from dried',
    'Assessment passed (28/40 or better) with photo evidence',
  ],
}

export const module06Recipes: Recipe[] = [
  {
    id: 'r-m06-01',
    title: 'Green Beans, Brown Butter & Almonds',
    moduleId: 'm06',
    description:
      'The classic amandine treatment: beans blanched to exact tenderness, refreshed, then rolled through nutty brown butter with toasted almonds and lemon. A two-stage dish that teaches the restaurant hold-and-reheat rhythm.',
    difficulty: 2,
    serves: 4,
    timeMins: 25,
    techniqueIds: ['t-blanching', 't-sauteing', 't-acid-balance', 't-seasoning-salt'],
    ingredients: [
      { item: 'Green beans', qty: 500, unit: 'g', prep: 'topped and tailed' },
      { item: 'Fine salt (for blanching water)', qty: 100, unit: 'g' },
      { item: 'Unsalted butter', qty: 60, unit: 'g' },
      { item: 'Flaked almonds', qty: 40, unit: 'g' },
      { item: 'Lemon', qty: 1, unit: 'each', prep: 'juice only' },
      { item: 'Flat-leaf parsley', qty: 10, unit: 'g', prep: 'chopped' },
      { item: 'Flaky salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Bring 4 L of water to a hard rolling boil with the 100 g salt — taste it: sea water. Set an ice bath beside the stove.',
      'Blanch the beans 2 minutes 30, tasting one at 2 minutes. Pull them at tender-with-a-whisper-of-bite.',
      'Refresh in the ice bath 2 minutes, drain hard and dry in a tea towel. Up to here can be done a day ahead.',
      'Toast the almonds in a dry wide pan over medium heat until pale gold, shaking constantly — they burn in seconds. Tip out.',
      'Melt the butter in the same pan and cook, swirling, until the milk solids turn hazelnut-brown and smell nutty, about 2 minutes.',
      'Immediately add the beans and toss 60–90 seconds until hot through and glossed with butter.',
      'Off the heat: almonds, a squeeze of lemon, parsley, flaky salt. Taste — the lemon should brighten, not dominate — and serve at once.',
    ],
    chefNotes: [
      'Brown butter goes from nutty to burnt in about 20 seconds. The beans going in actually arrests the cooking — have them beside the pan, dried and ready.',
      'This exact hold-and-reheat pattern serves any green vegetable: broccolini, asparagus, snow peas. Learn it once, apply it forever.',
    ],
    reinforces: ['Salting water properly', 'Tasting for doneness', 'Mise en place before heat'],
  },
  {
    id: 'r-m06-02',
    title: 'Roasted Roots, Whipped Feta & Pickled Onion',
    moduleId: 'm06',
    description:
      'A tray of hard-caramelised carrots, parsnips and beetroot over whipped feta, sharpened with same-day pickled red onion. Rich, sweet, salty and sour on one plate — a complete lesson in balance.',
    difficulty: 2,
    serves: 4,
    timeMins: 60,
    techniqueIds: ['t-roasting-veg', 't-pickling', 't-acid-balance', 't-dice'],
    ingredients: [
      { item: 'Carrots', qty: 400, unit: 'g', prep: 'halved lengthwise' },
      { item: 'Parsnips', qty: 400, unit: 'g', prep: 'quartered lengthwise, cores trimmed' },
      { item: 'Beetroot', qty: 300, unit: 'g', prep: 'peeled, cut into 3 cm wedges' },
      { item: 'Olive oil', qty: 45, unit: 'ml' },
      { item: 'Fine salt', qty: 6, unit: 'g' },
      { item: 'Red onion', qty: 1, unit: 'each', prep: 'shaved into thin half-moons' },
      { item: 'White wine vinegar', qty: 150, unit: 'ml' },
      { item: 'Caster sugar', qty: 50, unit: 'g' },
      { item: 'Feta', qty: 200, unit: 'g' },
      { item: 'Greek yoghurt', qty: 100, unit: 'g' },
      { item: 'Honey', qty: 15, unit: 'g' },
      { item: 'Thyme leaves', qty: 5, unit: 'g' },
    ],
    method: [
      'Pickle first: boil the vinegar with 100 ml water, the sugar and 8 g salt; pour hot over the onion in a jar. Set aside — it will be ready before the tray is.',
      'Heat the oven to 210°C with a heavy tray inside. Full mise: every vegetable cut with flat faces, oiled and salted in a bowl.',
      'Lay the vegetables cut-side down on the hot tray with gaps between pieces — keep the beetroot to one corner so it does not stain everything.',
      'Roast 25 minutes untouched. Check the undersides: deep golden means turn them; pale means give them five more.',
      'Roast a further 10–15 minutes until a knife slides in easily and the edges are properly caramelised.',
      'Meanwhile blitz the feta, yoghurt and honey until completely smooth — about a minute, scraping down once.',
      'Swipe the whipped feta across a platter, pile the hot vegetables over, scatter drained pickled onion and thyme.',
      'Taste a full forkful — root, feta, pickle together. Adjust with flaky salt or a few drops of the pickle brine if the plate needs more lift.',
    ],
    chefNotes: [
      'The pickle brine is a seasoning in its own right — a teaspoon over the finished plate does what plain vinegar cannot, because it carries sugar and salt with the acid.',
      'Parsnip cores turn woody in large specimens; trim them out and into the stock bag. Small parsnips can stay whole.',
    ],
    reinforces: ['Knife cuts for even cooking', 'Tasting the whole bite, not the component', 'Mise en place before heat'],
  },
  {
    id: 'r-m06-03',
    title: 'Cauliflower Purée & Glazed Carrots',
    moduleId: 'm06',
    description:
      'Two wet-heat techniques on one plate: a sieved, silk-smooth cauliflower purée and carrots glazed à blanc until the liquid becomes their sauce. This is the vegetable plumbing under half the plated dishes in Stages 2 and 3.',
    difficulty: 2,
    serves: 4,
    timeMins: 45,
    techniqueIds: ['t-puree', 't-braising-veg', 't-seasoning-salt', 't-tasting'],
    ingredients: [
      { item: 'Cauliflower', qty: 600, unit: 'g', prep: 'cut into even florets' },
      { item: 'Full-cream milk', qty: 300, unit: 'ml' },
      { item: 'Water', qty: 200, unit: 'ml' },
      { item: 'Unsalted butter', qty: 90, unit: 'g', prep: 'cold, cubed' },
      { item: 'Carrots', qty: 500, unit: 'g', prep: 'even 4 cm batons' },
      { item: 'Caster sugar', qty: 5, unit: 'g' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'White pepper', qty: null, unit: 'to taste' },
    ],
    method: [
      'Simmer the cauliflower in the milk and water with 5 g salt, lid ajar, 12–15 minutes until completely soft — a spoon should crush a floret against the pot wall.',
      'Meanwhile start the carrots: one layer in a wide pan, water one-third up, 40 g of the butter, the sugar and 3 g salt. Cartouche on top, steady simmer.',
      'Drain the cauliflower, reserving the cooking liquid. Blend hot with 50 ml of the liquid until it turns; add liquid a spoonful at a time only if the blades stall.',
      'With the motor running, add 50 g cold butter. Season with salt and white pepper.',
      'Pass the purée through a fine sieve with the back of a ladle. Taste: it should be seasoned, rich and utterly smooth. Keep warm.',
      'Check the carrots at 12–15 minutes: knife-tender as the liquid turns syrupy. Remove the cartouche and roll them in the reducing glaze until glossy.',
      'Plate a generous swipe of purée, arrange the glazed carrots over, and spoon any remaining glaze across. Taste the two together before it leaves the bench.',
    ],
    chefNotes: [
      'Reserved cauliflower cooking liquid is your thinning tool at service — the purée tightens as it sits. Never thin with cold milk straight from the fridge; it dulls both temperature and seasoning.',
      'Cauliflower is the forgiving purée to learn on: low starch means the blender cannot make it gluey. Graduate to potato in Module 7, where the rules change completely.',
    ],
    reinforces: ['Tasting at every stage', 'Even knife cuts driving even cooking', 'Running two preparations in parallel'],
  },
  {
    id: 'r-m06-04',
    title: 'Braised French Lentils with Roasted Pumpkin',
    moduleId: 'm06',
    description:
      'Puy-style lentils cooked from dried in an aromatic braise, finished with vinegar and butter, under sweet roasted pumpkin. Cheap, deeply savoury, and the template for every legume braise that follows.',
    difficulty: 2,
    serves: 6,
    timeMins: 70,
    techniqueIds: ['t-braising-veg', 't-roasting-veg', 't-acid-balance', 't-umami-layering', 't-dice'],
    ingredients: [
      { item: 'Dried Puy-style green lentils', qty: 350, unit: 'g', prep: 'rinsed' },
      { item: 'Brown onion', qty: 1, unit: 'each', prep: 'small dice (6 mm)' },
      { item: 'Carrot', qty: 1, unit: 'each', prep: 'small dice' },
      { item: 'Celery stick', qty: 1, unit: 'each', prep: 'small dice' },
      { item: 'Garlic', qty: 3, unit: 'each', prep: 'minced' },
      { item: 'Olive oil', qty: 45, unit: 'ml' },
      { item: 'Tomato paste', qty: 20, unit: 'g' },
      { item: 'Chicken or vegetable stock', qty: 900, unit: 'ml' },
      { item: 'Bay leaf', qty: 1, unit: 'each' },
      { item: 'Thyme sprigs', qty: 3, unit: 'each' },
      { item: 'Pumpkin', qty: 600, unit: 'g', prep: 'peeled, 3 cm wedges' },
      { item: 'Red wine vinegar', qty: 20, unit: 'ml' },
      { item: 'Unsalted butter', qty: 30, unit: 'g' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 210°C. Toss the pumpkin with 20 ml oil and a good pinch of salt; roast cut-side down on a hot tray 30–35 minutes until caramelised and tender.',
      'Sweat the onion, carrot and celery in the remaining oil over medium heat with a pinch of salt, 6–8 minutes until soft — your soffritto drill from Module 1, from memory now.',
      'Add the garlic and tomato paste; cook 2 minutes until the paste darkens a shade and smells sweet. That toasted paste is an umami layer, not a garnish.',
      'Add the lentils, stock, bay and thyme. Bring just to a simmer and hold at a bare tremble, uncovered, 25–35 minutes.',
      'From 25 minutes, taste five lentils at a time: done means creamy centres with every skin intact. Top up with hot water if they surface before they are ready.',
      'Season with salt only in the final 10 minutes, then finish off the heat with the vinegar and butter, swirled through until the braise turns glossy.',
      'Taste and adjust — salt first, then ask whether it wants a few more drops of vinegar. Serve the lentils in shallow bowls with the roasted pumpkin on top.',
    ],
    chefNotes: [
      'Lentils drink the seasoning as they sit — leftovers usually want a small splash of vinegar and a pinch of salt on reheating, not more cooking.',
      'The same braise takes a poached egg (Module 3) for lunch, or sits under crisp-skinned fish in Module 9. One pot, three dishes across the course.',
    ],
    reinforces: ['Small dice at speed', 'Layered salting and final acid adjustment', 'Tasting for doneness, not the clock'],
  },
]
