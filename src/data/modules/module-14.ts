import type { CourseModule, Recipe } from '../../types/content'

export const module14: CourseModule = {
  id: 'm14',
  number: 14,
  stage: 3,
  title: 'Plating & Presentation',
  subtitle: 'Cook for the mouth, plate for the eye',
  description:
    'The same food, plated well, tastes better — diners are not wrong about this, and neither is the research. This module turns plating from decoration into composition: focal points, negative space, height, sauce applied with intent, garnish that earns its place, and the plate itself as a frame. It closes with the skill that makes your work shareable — photographing a dish honestly with nothing but a phone and window light.',
  objectives: [
    'Compose a plate around a focal point with deliberate negative space, odd numbers and height',
    'Apply sauce as pools, swipes and dots — choosing the form to suit the sauce and the dish',
    'Select and dress garnish that adds flavour, texture or temperature — never mere colour',
    'Choose the right plate (size, shape, colour, temperature) for a given dish',
    'Plate the same dish three distinct ways and articulate why each works',
    'Photograph a finished plate with a phone and window light to a standard worth keeping',
  ],
  difficulty: 3,
  estimatedHours: 6,
  prerequisites: ['m13'],
  skillsUnlocked: [
    'Plate composition',
    'Sauce application',
    'Garnish discipline',
    'Plate selection',
    'Phone food photography',
  ],
  equipment: [
    'White dinner plates, 28–30 cm, plus one wide shallow bowl per diner',
    'One contrast plate (dark or coloured) for comparison work',
    'Large plating spoons and a squeeze bottle',
    'Small offset palette knife',
    'Clean microfibre or lint-free cloths for rim-wiping',
    'Fine tweezers (optional but useful for leaf placement)',
    'A phone with a decent camera and a window with daylight',
  ],
  ingredients: [
    'Chicken breasts, skin on (4)',
    'Floury potatoes, green beans, beetroot (2 kg mixed)',
    'Salmon fillets, skin on (4 × 160 g), and a cauliflower',
    'Goat’s cheese, walnuts, salad leaves, shallots',
    'Cream, butter, eggs, caster sugar, vanilla, plain flour',
    'Firm pears and a lemon',
    'White wine and white wine vinegar for beurre blanc and pickles',
  ],
  lessons: [
    {
      id: 'm14-l01',
      title: 'Composition: the plate as a frame',
      summary: 'Focal point, negative space, odd numbers and height — the four rules that make a plate read as intentional.',
      theory: [
        {
          heading: 'Focal point and negative space',
          body: 'Every composed plate has one focal point — usually the protein or the hero vegetable — and everything else is arranged in relation to it. Choose the focal point first and place it off-centre: dead-centre plating reads as institutional, while a focal point at roughly the four o’clock or eight o’clock position gives the eye a place to land and a direction to travel. Components then lean toward or radiate from it, so the plate reads as one dish rather than three items sharing a taxi.\n\nNegative space is the discipline that makes this legible. Keep at least a third of the plate empty — the rim always, and real space inside it. Crowding reads as chaos and makes even refined food look like leftovers. If the portions will not fit with space to spare, the plate is too small or the portion too large; never solve it by filling the frame.',
        },
        {
          heading: 'Odd numbers, height and movement',
          body: 'Odd numbers of elements — three scallops, five dots, one cutlet — read as natural and dynamic; even numbers read as static pairs the eye wants to straighten. It is a guideline rather than a law, but when a plate looks inexplicably dull, count the elements first.\n\nHeight is the second energiser. Flat plating reads as cafeteria; leaning the sliced protein against the purée, stacking beans in a loose raft, or letting leaves stand rather than lie gives the plate a third dimension and makes portions look generous without being larger. Build stable height — food that topples between pass and table is theatre, not cooking. Finally, give the plate movement: a swipe’s direction, the line of a leaning component, a diagonal of dots. The eye should travel across the plate, not bounce between disconnected islands.',
        },
      ],
      demonstrations: [
        {
          title: 'Building one plate three ways',
          steps: [
            'Cook the chicken, purée, beans and pan sauce from r-m14-01; hold everything hot and ready as if on a pass.',
            'Plate one — classic: purée at eight o’clock spread with the spoon’s back, sliced chicken leaning on it, beans rafted alongside, sauce over the meat. Note the empty third of the plate.',
            'Plate two — linear: a single confident swipe of purée across a large plate, components arranged in a loose line along it, sauce in three pools breaking the line.',
            'Plate three — bowl: purée as the base pool in a wide shallow bowl, chicken centred on top, beans standing upright against it, sauce flooded around. Height concentrated in the middle.',
            'Photograph all three from the same angle, side by side.',
            'Write two lines per plate: what the focal point is, and where the eye travels. If you cannot answer, the composition failed.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The three-composition drill',
          instructions: 'Using r-m14-01 (or any three-component dish you can hold hot), plate the same food classic, linear and bowl-style in one sitting. Score each against four checks: one clear focal point, one-third negative space, odd element counts, stable height. Keep the photos — they are your baseline.',
          repeatPractice: 'Re-run this drill on one dish in every remaining module of the course. The Module 20 capstone requires a plating spec per dish; these drills are where those specs come from.',
        },
      ],
      recipeIds: ['r-m14-01'],
      techniqueIds: ['t-plating'],
      troubleshooting: [
        {
          problem: 'The plate looks crowded no matter how I arrange it',
          cause: 'Portion sized for the appetite, plate sized for the cupboard.',
          fix: 'Go up a plate size or plate a smaller portion and serve the rest at the table. Negative space is bought with real estate, not arrangement.',
        },
        {
          problem: 'Everything is technically placed but the plate looks lifeless',
          cause: 'Even counts, dead-centre placement, no height — a static composition.',
          fix: 'Move the focal point off-centre, break one pair into a trio, and stand one component up. Two minutes of asymmetry beats twenty of tweaking.',
        },
      ],
    },
    {
      id: 'm14-l02',
      title: 'Sauce on the plate',
      summary: 'Pools, swipes and dots — matching application to sauce body, and the discipline of the wiped rim.',
      theory: [
        {
          heading: 'Choose the form to fit the sauce',
          body: 'Sauce application is a decision, not a flourish. Pools suit looser sauces with body — beurre blanc, jus, veloutés: ladle under or around the food so crusts and crisp skin stay crisp, never over them. Swipes need a thick, smooth sauce or purée: one loaded spoon or palette knife, one confident stroke, done. A hesitant swipe re-dragged twice announces itself instantly. Dots suit thick purées and emulsions from a squeeze bottle — in odd counts, in a line or arc that supports the composition, never scattered like rain.\n\nViscosity decides for you: if it flows, pool it; if it holds a peak, swipe or dot it. A sauce too thin to hold any form belongs in a jug at the table — pouring it over the plate anyway drowns the composition you just built.',
        },
        {
          heading: 'Placement logic and the rim',
          body: 'Sauce placement follows the eating, not just the look. Sauce goes under seared proteins so the crust survives to the mouth; over soft braises and pasta where coating is the point; and beside anything crumbed or pastry-based, where contact means sog. Think about what the fork will actually assemble — a dot the diner cannot reach with the food it belongs to is decoration.\n\nRestraint and finish carry the professional signature. One sauce applied one way per plate is the default; two is the maximum, and only when they genuinely eat together. And the rim is the frame: it stays clean. Wipe it with a barely-damp cloth as the final act of every plate, every time. A perfect composition with a splashed rim reads as an accident; a modest one with a clean rim reads as intent.',
        },
      ],
      demonstrations: [
        {
          title: 'The sauce sampler board',
          steps: [
            'Make 200 ml of a thick purée (cauliflower from r-m14-03 works) and 150 ml of a loose sauce (beurre blanc or jus). Load a squeeze bottle with the purée.',
            'On a spare plate, practise pools: ladle 30 ml of the loose sauce and tilt the plate in one smooth circle to set a neat round pool.',
            'Practise the swipe: one spoonful of purée at the plate’s edge, press the spoon’s back into it, draw through in a single stroke at even speed. Repeat five times; keep only the best.',
            'Practise dots: three descending sizes in an arc from the bottle, then a five-dot line. Pull a skewer through one dot to make a teardrop.',
            'Combine on one plate: swipe first, pool beside it, three dots bridging them. Wipe the rim.',
            'Photograph the board, then scrape, wash and repeat once. The second board is always better — that is the lesson.',
          ],
        },
      ],
      exercises: [
        {
          title: 'One sauce, three forms',
          instructions: 'Take a single batch of thick sauce or purée and plate it as a pool, a swipe and a dotted line on three plates. Photograph each next to the same protein portion and decide which serves the dish best — then write one line defending the choice.',
          repeatPractice: 'Before plating any saucy dish for the rest of the course, spend sixty seconds on a spare plate rehearsing the application you plan. Sauce confidence is a warm-up, not a talent.',
        },
      ],
      recipeIds: ['r-m14-03'],
      techniqueIds: ['t-sauce-work', 't-plating'],
      troubleshooting: [
        {
          problem: 'Swipes come out ragged, thin or broken',
          cause: 'Sauce too loose, spoon underloaded, or a hesitant stroke that slowed mid-swipe.',
          fix: 'Thicken the purée until it holds a peak, load the spoon generously, and swipe in one committed motion — speed even, pressure easing off at the tail.',
        },
        {
          problem: 'Crisp skin and crusts arrive soggy at the table',
          cause: 'Sauce ladled over the top in the final flourish.',
          fix: 'Sauce under, protein on top, crust to the sky. If the diner wants more sauce, that is what the jug is for.',
        },
      ],
    },
    {
      id: 'm14-l03',
      title: 'Garnish logic and plate selection',
      summary: 'Garnish that earns its place, a standing garnish bank, and choosing the plate that flatters the food.',
      theory: [
        {
          heading: 'Everything edible, everything earning',
          body: 'The garnish test has two questions: can you eat it, and does it make the dish taste better? Anything failing either question comes off the plate — the sprig of raw curly parsley, the inedible flower, the dusting of paprika on the rim. A legitimate garnish adds one of three things: flavour (chopped soft herbs, citrus zest, shaved cheese), texture (toasted nuts, crumbs, crisped skin) or temperature-and-brightness contrast (pickled shallot, cold crème fraîche, dressed leaves).\n\nAnd garnish gets cooked for, not scavenged. Dress herb leaves and micro-leaves with a drop of oil and a grain of salt before they land — naked garnish tastes like decoration. Toast the nuts. Season the crumb. The garnish is the last thing the diner sees and often the first thing they taste; treat it with main-component seriousness at one-tenth the quantity.',
        },
        {
          heading: 'The plate is a decision',
          body: 'Plate selection happens before plating starts, not after. Size first: the plate should let the finished portion keep a third of the surface empty. Colour second: white is the default frame and flatters almost everything; dark plates make pale food (scallops, purées, cream desserts) luminous but deaden brown braises; coloured and patterned plates must be chosen against the food’s palette or they compete with it. Shape third: wide shallow bowls hold anything with a sauce that flows; flat plates suit constructed, upright compositions; deep bowls are for soups and hide everything else.\n\nTemperature is part of the choice: hot food on warmed plates, cold desserts on chilled ones — a beautiful plate that cools the food it carries has failed at its actual job. Build a small, deliberate set of plates you know well rather than a cupboard of orphans.',
        },
      ],
      demonstrations: [
        {
          title: 'The garnish audit',
          steps: [
            'Plate the composed salad (r-m14-02) as you normally would, then list every element on the plate.',
            'For each element, answer the two questions aloud: edible? earning? Remove anything that fails.',
            'For each remaining garnish, name its contribution: flavour, texture or contrast. If two garnishes do the same job, cut one.',
            'Dress the naked ones: oil and salt on the leaves, a squeeze of lemon on the shallots.',
            'Re-plate the audited version next to a photo of the original and compare — fewer elements, more intent.',
          ],
        },
        {
          title: 'Same dessert, three plates',
          steps: [
            'Portion the plated dessert (r-m14-04) three times identically.',
            'Plate one on a white flat plate, one on your darkest plate, one in a wide shallow bowl.',
            'Photograph all three in the same light, same angle.',
            'Rank them and write one line on why the winner frames the food best — colour contrast, sauce containment, or negative space.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Build a garnish bank',
          instructions: 'In one 45-minute session, produce four garnishes that hold for a week: quick-pickled shallots, toasted seasoned crumbs, toasted crushed nuts, and a jar of picked herb leaves stored on damp paper. Label and date all four, then deploy at least two on this module’s recipes.',
          repeatPractice: 'Refresh the bank weekly for the rest of the course. From Module 15 onward, every menu you design must name its garnishes — a stocked bank is what makes that a habit rather than a scramble.',
        },
      ],
      recipeIds: ['r-m14-02', 'r-m14-04'],
      techniqueIds: ['t-garnish', 't-pickling', 't-plating'],
      troubleshooting: [
        {
          problem: 'Garnish looks pretty for a minute, then wilts or weeps on the plate',
          cause: 'Delicate leaves dressed too early, or wet elements (pickles) not drained before landing.',
          fix: 'Garnish is the last ten seconds of plating, not the first. Dress at the pass, drain pickles on paper, and send the plate immediately.',
        },
      ],
    },
    {
      id: 'm14-l04',
      title: 'Photographing the plate: phone and window light',
      summary: 'Light, angle and honest editing — making a phone photo do justice to the food you cooked.',
      theory: [
        {
          heading: 'Light is ninety per cent',
          body: 'Every food photo problem is a light problem first. The kitchen downlight is the enemy: overhead artificial light casts yellow murk and hard shadows that make sauces look greasy. The fix costs nothing — a table beside a window, out of direct sun, with the light raking across the plate from the side or from slightly behind (about ten o’clock to the camera). Side light gives food dimension; backlight makes sauces and glazes shine; front light — flash worst of all — flattens everything into cafeteria signage.\n\nControl the shadows, not just the light. If the window side is bright and the far side is a black hole, bounce light back with anything white — a sheet of paper, a foam board, a tea towel propped against a jug. Shoot within minutes of plating: steam fades, purées skin, leaves collapse. The photo is part of the pass, not an afterthought.',
        },
        {
          heading: 'Angle, background and honest editing',
          body: 'Three angles cover nearly everything. Forty-five degrees — the diner’s view — is the default and flatters most plates. Directly overhead suits flat, graphic compositions: bowls, spreads, anything where the arrangement is the story. Straight-on at plate level is for height: stacked, leaning or layered dishes. Pick the angle the composition was built for; a tall dish shot from above collapses into a puddle.\n\nBackgrounds stay quiet: a timber table, a neutral cloth, dark stone. Clear the clutter from frame edges, tap the phone screen to focus on the focal point and drag exposure down slightly — food shot a touch darker keeps its colour saturated. Edit with restraint: straighten the horizon, nudge brightness and warmth, stop. Heavy filters read as distrust of your own cooking, and your photo log only works as feedback if the camera is telling the truth.',
        },
      ],
      demonstrations: [
        {
          title: 'A ten-minute window-light shoot',
          steps: [
            'Set a small table side-on to a window with soft daylight; lay a neutral cloth or board.',
            'Plate the dish (r-m14-01 or r-m14-04) and carry it straight to the set — under two minutes from pass to lens.',
            'Prop a white board opposite the window to soften the shadow side.',
            'Shoot at 45° first: focus tapped on the focal point, exposure pulled down a fraction, six frames with small position changes.',
            'Shoot overhead, then plate-level, four frames each.',
            'Choose the best three frames, apply minimal edits (straighten, brightness, warmth), and file them against the dish’s recipe card.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The angle triptych',
          instructions: 'Shoot one plated dish from all three angles in one session — 45°, overhead, plate-level — with identical light and background. Pick the winner and write one line on why that angle suits that composition. Then reshoot the same dish under your kitchen downlights and put the two winners side by side. You will never use the downlights again.',
          repeatPractice: 'Every assessment from here to Module 20 requires photo evidence. Shoot every assessment plate with this window-light routine — the course photo log doubles as your plating progress bar.',
        },
      ],
      recipeIds: ['r-m14-01', 'r-m14-04'],
      techniqueIds: ['t-plating', 't-garnish'],
      troubleshooting: [
        {
          problem: 'Photos look yellow and flat despite careful plating',
          cause: 'Shot under overhead artificial light, probably with the phone casting its own shadow.',
          fix: 'Move to the window, kill the room lights, and shoot with daylight raking from the side. One light source, and never the flash.',
        },
        {
          problem: 'The dish looks worse in the photo than on the table',
          cause: 'Wrong angle for the composition, or the shot was taken after the food died — steam gone, surfaces skinned.',
          fix: 'Match angle to structure (height gets plate-level, flat gets overhead) and shoot within two minutes of plating. Cook, plate, shoot, eat — in that order, quickly.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Filling every centimetre of the plate',
      cause: 'Generosity instincts — empty space feels like short-changing the diner.',
      fix: 'Keep a third of the plate empty and put the extra food on a platter at the table. Negative space is what makes the food look considered.',
    },
    {
      problem: 'Sauce drizzled at random over everything',
      cause: 'Applying sauce as a flourish instead of a decision.',
      fix: 'Choose pool, swipe or dots to suit the sauce’s body and the dish’s crust. Under seared things, over braised things, and wipe the rim.',
    },
    {
      problem: 'Garnish that is decoration, not food',
      cause: 'Adding colour instead of flavour — the reflex parsley sprig.',
      fix: 'Two questions before anything lands: edible? does it make the dish taste better? Dress what passes; bin what fails.',
    },
    {
      problem: 'Beautiful plate, terrible photo',
      cause: 'Shooting under downlights, from the wrong angle, minutes too late.',
      fix: 'Window light from the side, angle matched to the composition, shot within two minutes of plating. The photo is the last step of the recipe.',
    },
  ],
  assessment: {
    id: 'as-m14',
    moduleId: 'm14',
    title: 'One Dish, Three Plates',
    brief:
      'In a single session: cook one complete dish with a protein, a purée or starch, a vegetable element, a sauce and at least one prepared garnish (r-m14-01 or r-m14-03 both qualify, or your Module 13 original). Plate it three genuinely different ways — different composition logic, different sauce application, at least two different plates or bowls. Photograph each plate with the window-light routine within two minutes of plating, from the angle that suits its composition. All three plates must be built from the same batch of hot components, as on a working pass.',
    rubric: [
      { criterion: 'Composition', maxScore: 10, guidance: '9–10: clear focal point, real negative space, height and movement on every plate. 6–8: sound but one plate static. Below 6: crowded or centred throughout.' },
      { criterion: 'Sauce application', maxScore: 8, guidance: 'Form matched to sauce body; placed for the eating (under crusts); executed cleanly; rims wiped on all three.' },
      { criterion: 'Garnish & plate choice', maxScore: 8, guidance: 'Every garnish edible, dressed and earning its place; plate size, colour, shape and temperature chosen deliberately per version.' },
      { criterion: 'Distinctness of the three plates', maxScore: 8, guidance: 'Three different composition logics — not one layout repeated with the swipe moved. Each defensible in one sentence.' },
      { criterion: 'Photography', maxScore: 6, guidance: 'Window light, deliberate angle per plate, focused, honestly edited, shot before the food died.' },
    ],
    passScore: 28,
    evidence: 'Three photos, one per plated version, each captioned with its composition logic, sauce form and plate choice — plus one photo of your mise at the pass before plating began.',
  },
  completionCriteria: [
    'All four lessons marked complete',
    'All four module recipes cooked and plated',
    'The three-composition drill and the angle triptych each completed at least once with photos filed',
    'Assessment passed (28/40 or better) with all four evidence photos',
  ],
}

export const module14Recipes: Recipe[] = [
  {
    id: 'r-m14-01',
    title: 'The Plating Canvas: Chicken, Pommes Purée, Beans & Pan Sauce',
    moduleId: 'm14',
    description:
      'A four-component dish built from banked techniques — pan-roasted chicken, silk purée, blanched beans, four-minute pan sauce — designed explicitly to be plated three different ways from one hot pass. The cooking is revision; the plating is the module.',
    difficulty: 3,
    serves: 4,
    timeMins: 90,
    techniqueIds: ['t-pan-roasting', 't-potato-puree', 't-blanching', 't-pan-sauce', 't-plating'],
    ingredients: [
      { item: 'Chicken breasts, skin on', qty: 4, unit: 'each', prep: 'about 200 g each, dry-brined 1% salt, 12 hours ahead if possible' },
      { item: 'Floury potatoes', qty: 800, unit: 'g', prep: 'peeled, even chunks' },
      { item: 'Butter', qty: 180, unit: 'g', prep: '120 g for the purée, 30 g for basting, 30 g cold for the sauce' },
      { item: 'Milk', qty: 150, unit: 'ml', prep: 'hot' },
      { item: 'Green beans', qty: 300, unit: 'g', prep: 'topped' },
      { item: 'Shallot', qty: 1, unit: 'each', prep: 'fine mince' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'White chicken stock', qty: 200, unit: 'ml' },
      { item: 'Thyme sprigs', qty: 3, unit: 'each' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 190°C. Simmer the potatoes in cold-start salted water until a knife slides through; rice while hot, dry over low heat, then beat in the butter and hot milk. Season, press film on the surface, hold warm.',
      'Blanch the beans in heavily salted boiling water until just tender, refresh in iced water, drain hard. They reheat in butter at the pass.',
      'Dry the chicken skin thoroughly. Sear skin-side down in an ovenproof pan over medium-high until deeply golden, about 6 minutes; flip, add 30 g butter and the thyme, baste, and finish in the oven to 63°C core, about 8–10 minutes.',
      'Rest the chicken on a rack. Pour off excess fat, sweat the shallot in the pan, deglaze with wine and reduce to a syrup; add stock and reduce by two-thirds.',
      'Mount the cold butter into the sauce off the heat, add resting juices and a squeeze of lemon, season, and strain into a warm jug.',
      'Reheat the beans in foaming butter with a pinch of salt; loosen the purée with a splash of hot milk if it has tightened.',
      'Set the pass: warmed plates, all components hot, sauce in the jug, cloth for rims. Slice each breast on the bias just before plating.',
      'Plate per the lesson demonstration — classic, linear, then bowl — photographing each within two minutes. Serve the fourth portion however the session’s best plate dictates.',
    ],
    chefNotes: [
      'Everything here holds: purée and beans happily wait 30 minutes, chicken rests 10. That forgiveness is deliberate — your attention belongs to the plates, not the pans.',
      'Warm plates are non-negotiable for this dish; purée on a cold plate is dead in ninety seconds. Ten minutes in a 60°C oven does it.',
    ],
    reinforces: ['Pan-roasting and resting', 'Potato purée', 'Pan sauce in four minutes'],
  },
  {
    id: 'r-m14-02',
    title: 'Composed Salad of Roast Beetroot, Goat’s Cheese & Walnut',
    moduleId: 'm14',
    description:
      'A composed — not tossed — salad: every element placed with intent. Sweet roast beetroot, lactic goat’s cheese, toasted walnuts, pickled shallot and dressed leaves, built as a study in colour, contrast and garnish discipline.',
    difficulty: 2,
    serves: 4,
    timeMins: 75,
    techniqueIds: ['t-roasting-veg', 't-vinaigrette', 't-pickling', 't-garnish', 't-plating'],
    ingredients: [
      { item: 'Beetroot, mixed colours if possible', qty: 800, unit: 'g', prep: 'scrubbed, tops trimmed' },
      { item: 'Olive oil', qty: 60, unit: 'ml', prep: '20 ml for roasting, 40 ml for the dressing' },
      { item: 'Red wine vinegar', qty: 25, unit: 'ml', prep: '15 ml for the dressing, 10 ml for the beets' },
      { item: 'Dijon mustard', qty: 5, unit: 'g' },
      { item: 'Honey', qty: 10, unit: 'g' },
      { item: 'Shallots', qty: 2, unit: 'each', prep: 'shaved into rings, quick-pickled' },
      { item: 'Soft goat’s cheese', qty: 150, unit: 'g' },
      { item: 'Walnuts', qty: 60, unit: 'g', prep: 'toasted at 160°C for 8 minutes, roughly broken' },
      { item: 'Small bitter and soft leaves (witlof, rocket, soft herbs)', qty: 80, unit: 'g', prep: 'washed and dried completely' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Heat the oven to 200°C. Wrap the beetroot in foil with a splash of water and salt; roast until a knife slides in easily, 45–60 minutes depending on size. Peel while warm (gloves help), cut into irregular wedges and dress immediately with 10 ml vinegar, a little oil and salt — warm beets drink dressing.',
      'Quick-pickle the shallot rings while the beets roast: hot brine over, 20 minutes minimum, then drain on paper.',
      'Whisk the dressing: mustard, honey, 15 ml vinegar and salt first, then the oil in a stream to a light emulsion. Taste on a leaf, not a spoon.',
      'Just before plating, dress the leaves gently with half the dressing and a pinch of flaky salt.',
      'Compose each plate: beetroot wedges first in a loose off-centre arc — odd counts, mixed colours alternating. Spoon torn nuggets of goat’s cheese into the gaps.',
      'Place dressed leaves standing among the beets for height, scatter walnuts and drained pickled shallots, and spoon the remaining dressing in dots along the arc.',
      'Wipe the rims, check each plate against the garnish audit — everything edible, everything earning — and serve at room temperature.',
    ],
    chefNotes: [
      'Composed salads are plating with training wheels off: no protein to hide behind, so colour placement and negative space do all the work. If your plate reads as “pile”, rebuild it element by element.',
      'Room temperature is the correct serving temperature — beets and goat’s cheese straight from the fridge taste of nothing. Contrast here is textural, not thermal.',
    ],
    reinforces: ['Vinaigrette balance', 'Quick pickling', 'Garnish discipline'],
  },
  {
    id: 'r-m14-03',
    title: 'Crisp-Skin Salmon, Cauliflower Purée, Beurre Blanc',
    moduleId: 'm14',
    description:
      'A restaurant-style plated main assembled entirely from earlier-module components: crisp-skin fish cookery, a silk vegetable purée, and the wine-butter emulsion — brought together with deliberate sauce work on a warm plate.',
    difficulty: 4,
    serves: 4,
    timeMins: 75,
    techniqueIds: ['t-skin-searing', 't-puree', 't-beurre-blanc', 't-sauce-work', 't-plating'],
    ingredients: [
      { item: 'Salmon fillets, skin on, pin-boned', qty: 4, unit: 'each', prep: '160 g each, skin dried thoroughly' },
      { item: 'Cauliflower', qty: 600, unit: 'g', prep: 'cut into even florets' },
      { item: 'Milk', qty: 250, unit: 'ml' },
      { item: 'Butter', qty: 230, unit: 'g', prep: '30 g for the purée, 200 g cold and cubed for the beurre blanc' },
      { item: 'Dry white wine', qty: 100, unit: 'ml' },
      { item: 'White wine vinegar', qty: 30, unit: 'ml' },
      { item: 'Shallots', qty: 2, unit: 'each', prep: 'fine mince' },
      { item: 'Olive oil', qty: 20, unit: 'ml' },
      { item: 'Chives', qty: 10, unit: 'g', prep: 'finely cut' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
      { item: 'Salt', qty: null, unit: 'to taste' },
    ],
    method: [
      'Simmer the cauliflower in the milk with a pinch of salt until completely tender, about 15 minutes. Blend hot with just enough of the cooking milk to move, add 30 g butter, and pass through a fine sieve. It must hold a peak for the swipe — keep it thick. Hold warm.',
      'Start the beurre blanc: reduce wine, vinegar and shallots to about two tablespoons of syrup.',
      'Over low heat, whisk in the cold butter a few cubes at a time until the sauce is glossy and holds together. Season, add a few drops of lemon, and hold warm — never hot; it splits above about 58°C.',
      'Season the salmon. Heat the oil in a heavy pan over medium-high; lay the fillets in skin-side down, pressing gently for the first 30 seconds so they cannot cup.',
      'Cook 80% of the way on the skin, 5–6 minutes, until crisp and released; flip for 30–60 seconds, then rest briefly on a rack, skin up.',
      'Plate on warm plates: one confident swipe of cauliflower purée, the salmon set skin-side up alongside — never on top of — a pool of beurre blanc spooned beside it.',
      'Finish with chives over the sauce only, a grain of flaky salt on the skin, and wipe the rim. Serve immediately, skin still audible.',
    ],
    chefNotes: [
      'The whole plate is an argument about sauce placement: pool beside the fish and the skin crackles at the table; pool it over and ninety seconds of careful searing dissolves. Let one plate fail this way once, on purpose, and you will never do it again.',
      'The beurre blanc holds 20–30 minutes in a warm spot or over barely-warm water. Make it before the fish touches the pan — the fish waits for no sauce.',
    ],
    reinforces: ['Crisp-skin fish cookery', 'Silk purées', 'Warm butter emulsions'],
  },
  {
    id: 'r-m14-04',
    title: 'Plated Dessert: Vanilla Crème, Caramel, Shortbread Crumb & Pear',
    moduleId: 'm14',
    description:
      'A restaurant-style plated dessert assembled from Stage 2 pastry components — crème pâtissière, wet caramel, a baked shortcrust crumb and butter-glazed pear — composed with the same focal-point, sauce and garnish discipline as a savoury plate.',
    difficulty: 3,
    serves: 6,
    timeMins: 100,
    techniqueIds: ['t-pastry-cream', 't-caramel', 't-shortcrust', 't-sauce-work', 't-plating'],
    ingredients: [
      { item: 'Milk', qty: 500, unit: 'ml' },
      { item: 'Vanilla bean or paste', qty: 1, unit: 'each', prep: 'split and scraped, or 5 g paste' },
      { item: 'Egg yolks', qty: 5, unit: 'each' },
      { item: 'Caster sugar', qty: 240, unit: 'g', prep: '100 g for the crème, 140 g for the caramel' },
      { item: 'Cornflour', qty: 40, unit: 'g' },
      { item: 'Butter', qty: 155, unit: 'g', prep: '25 g for the crème, 100 g cold for the shortbread, 30 g for the pears' },
      { item: 'Plain flour', qty: 150, unit: 'g' },
      { item: 'Fine salt', qty: 2, unit: 'g' },
      { item: 'Cream', qty: 120, unit: 'ml' },
      { item: 'Firm pears', qty: 3, unit: 'each', prep: 'peeled, quartered, cored' },
      { item: 'Lemon', qty: 0.5, unit: 'each' },
    ],
    method: [
      'Make the crème pâtissière: infuse the milk with vanilla; whisk yolks, 100 g sugar and cornflour; temper with the hot milk, return to the pan and boil for a full minute, whisking hard. Beat in 25 g butter, press film on the surface and chill fast.',
      'Make the crumb: rub the cold butter into the flour, salt and 40 g of the caramel’s sugar allocation set aside — stop at coarse breadcrumb stage, spread on a tray and bake at 170°C until golden, 15–18 minutes, stirring once. Cool completely; it crisps as it cools.',
      'Make the caramel sauce: cook the remaining 100 g sugar with a splash of water to deep amber — swirl, never stir. Off the heat, add the cream in stages (it spits), then a pinch of salt. Cool to a thick pouring consistency.',
      'Glaze the pears: cook the quarters in foaming butter over medium heat, turning, until golden and just tender, 6–8 minutes; finish with a squeeze of lemon.',
      'Beat the chilled crème smooth and load it into a squeeze bottle or piping bag.',
      'Compose each plate: a spoonful of crumb pressed into an off-centre line as the anchor; three dots of crème in descending sizes along it; two pear quarters leaning against the crumb for height.',
      'Sauce last: caramel in a single drawn line or three small pools — decide per the lesson, and keep it off the crumb where it would soften it.',
      'Wipe the rim and serve within ten minutes, while the pears are warm against the cold crème — the dessert’s temperature contrast is part of the design.',
    ],
    chefNotes: [
      'Every component holds for days except the assembled plate: crème 3 days, crumb a week airtight, caramel a fortnight. This is your first true à la minute dessert pass — mise ready, plates built to order.',
      'Dark plates earn their keep here: pale crème and golden pear glow against them in photos. Shoot this one at plate level; the leaning pears are the height story.',
    ],
    reinforces: ['Pastry cream', 'Caramel and sugar work', 'Temperature-contrast plating'],
  },
]
