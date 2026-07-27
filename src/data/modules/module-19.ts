import type { CourseModule, Recipe } from '../../types/content'

export const module19: CourseModule = {
  id: 'm19',
  number: 19,
  stage: 4,
  title: 'Capstone: The Profitable Menu',
  subtitle: 'Design it, cost it, cook it, account for it',
  description:
    'Everything converges here. You will design a three-course menu, standardise and cost every dish, price it to a blended GP of 65% or better, plan the prep and the service, cook it for real guests, and then review the numbers with an owner’s honesty. This module is the guided wrapper around the nine capstone deliverables — track each one on the Capstone screen as you go. A complete worked example menu is provided; adapt it or replace it entirely with your own.',
  objectives: [
    'Design a coherent, cross-utilised three-course menu and defend its concept in one sentence',
    'Produce standardised recipe cards with measured AP→EP yields for every dish',
    'Cost and price the full menu from real supplier prices to a blended GP of 65% or better',
    'Plan and execute a multi-day prep schedule and a timed service for 4–8 covers',
    'Close the loop: actual costs, timing variances, waste totals and honest lessons in a post-service review',
  ],
  difficulty: 5,
  estimatedHours: 25,
  prerequisites: ['m14', 'm18'],
  skillsUnlocked: [
    'Menu design & cross-utilisation',
    'Full-menu costing & margin management',
    'Multi-day prep planning',
    'Service execution under time pressure',
    'Post-service analysis',
  ],
  equipment: [
    'Everything from Stages 1–4 — this is the full-kit module',
    'Probe thermometer and timers (two timers minimum for service)',
    'Scales at the plating bench',
    'Shallow trays and labelled containers for cook-chill holds',
    'Printed prep plan, service timeline and waste log within reach of the stove',
    'Serving plates for three courses × up to 8 covers',
  ],
  ingredients: [
    'Driven by your menu — built from the supplier cost sheet, not the other way round',
    'For the worked example: 1 whole chicken (1.7 kg), leeks, floury potatoes, carrots',
    'Eggs, milk, cream, caster sugar, vanilla, oranges',
    'Butter, olive oil, white wine, thyme, chives',
    'Pantry at par per your Module 17 sheet',
  ],
  lessons: [
    {
      id: 'm19-l01',
      title: 'Concept, menu design & standardised recipes',
      summary: 'Capstone deliverables 1 and 2: a menu with a defensible concept and cross-utilised ingredients, and a standardised recipe card with real yields for every dish.',
      theory: [
        {
          heading: 'A menu is an argument',
          body: 'Start with the "Menu concept & design" deliverable: a three-course menu (2–3 options per course) whose concept you can defend in one sentence — a season, a cuisine, a neighbourhood bistro on a Tuesday. Coherence is commercial: a focused menu shares ingredients, prep and station load, which is how one cook serves eight people without drowning.\n\nCross-utilisation is the design test. In the worked example menu, one 1.7 kg chicken feeds all the way down: breasts to the main, carcass to the stock that becomes both the velouté base and the jus, and the custard’s spare egg whites are banked for another day. Every protein trim, stock and sauce should appear in more than one dish; every dish should pull from at most two stations at once. Save the menu in the menu designer and mark deliverable 1 done on the Capstone screen.',
        },
        {
          heading: 'Standardised recipes with yields',
          body: 'Deliverable 2 — "Standardised recipes with yields" — is one card per dish in the Module 13 format: name, yield and portions, ingredients with AP quantity, yield % and EP quantity, numbered method, critical points, plating spec. The yield numbers must be weighed during testing, not copied: your chicken at 63%, your leeks at about 75% once the tops go to the stock bag, your potatoes at about 85% peeled.\n\nPortions are stated in grams — "160 g chicken, 140 g purée, 60 ml jus" — because Module 18 taught you that an unweighed portion is an uncosted portion. Test-cook each dish once this week, card open, scales on, pen in hand. When all cards exist and link to the menu, tick deliverable 2 on the Capstone screen before touching a price.',
        },
      ],
      demonstrations: [
        {
          title: 'Designing the example menu (and how to replace it)',
          steps: [
            'State the concept: "a Saturday-night neighbourhood bistro menu from one chicken and one market basket." One sentence, defensible.',
            'Map the cross-utilisation before choosing dishes: whole chicken → breasts (main), carcass → stock → velouté (entrée) and jus (main); egg yolks → custard (dessert), whites → frozen and labelled; potato trim → the soup pot.',
            'Place the courses: leek and potato velouté (entrée, fully prep-ahead), pan-roasted chicken with pommes purée and glazed carrots (main, the only à-la-minute dish), crème caramel (dessert, made the day before, unmoulded to order).',
            'Check station load: one oven dish, one stovetop dish and two cold-holds — a one-cook service, by design.',
            'Test-cook each dish with the scales on, writing the standardised card and weighing every AP→EP yield as you go.',
            'To make it yours: swap any dish, but re-run steps 2–4 — the cross-utilisation map and station check are the design, not the decoration.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Menu concept sprint',
          instructions: 'Write three candidate concepts in one sentence each, then draft a three-course menu for the strongest with 2–3 options per course. Annotate every cross-utilisation arrow (trim → use, stock → dishes) and every station assignment. Save the winner in the menu designer and mark deliverable 1 on the Capstone screen; then build the standardised cards for deliverable 2.',
          repeatPractice: 'Redo the cross-utilisation map after every test cook — real trim weights always redraw an arrow or two, and the map must match the cards you submit.',
        },
      ],
      recipeIds: ['r-m19-01', 'r-m19-02', 'r-m19-03'],
      techniqueIds: ['t-flavour-pairing', 't-recipe-writing', 't-yield-testing', 't-bird-breakdown'],
      troubleshooting: [
        {
          problem: 'The menu keeps growing — six proteins, four techniques per course',
          cause: 'Designing to impress instead of to execute; every favourite dish wants a seat.',
          fix: 'Return to the concept sentence and cut anything it does not cover. One cook, three courses, eight covers: two à-la-minute dishes maximum, everything else prep-ahead.',
        },
        {
          problem: 'Cards written but yields are textbook numbers',
          cause: 'Test cooks happened without the scales, so the AP→EP columns got filled from memory.',
          fix: 'Re-run one test cook per dish with the scales on the bench. Deliverable 2 explicitly requires weighed yields — the examiner (you, in Module 19’s rubric) can tell.',
        },
      ],
    },
    {
      id: 'm19-l02',
      title: 'Sourcing, costing, pricing & margin targets',
      summary: 'Capstone deliverables 3 and 4: real supplier prices into a consolidated shopping list, then full costing sheets and menu prices that clear a blended GP of 65%.',
      theory: [
        {
          heading: 'The supplier cost sheet & shopping list',
          body: 'Deliverable 3 — "Supplier cost sheet & shopping list" — turns your standardised cards into a purchasing document. Consolidate every ingredient across all dishes into one list, then price each line from real suppliers at pack sizes as sold: $12.50/kg from the butcher, $4.90 a bunch, $1.60 a tin. No per-portion guesses — Module 17 receiving and spec discipline applies, and volatile lines (fish, out-of-season vegetables) get a noted seasonal alternative.\n\nPopulate the shopping list in the app for the full menu and enter the pack prices into your costing sheets. This is also where budget reality bites: an 8-cover dinner from the example menu shops for roughly $85–100 all-in. If the list shocks you, the menu — not the arithmetic — is what needs editing. Tick deliverable 3 on the Capstone screen when every line has a price and a source.',
        },
        {
          heading: 'Costing to a 65% blended GP',
          body: 'Deliverable 4 — "Recipe costing & pricing" — is Module 18 at menu scale: one costing sheet per dish, costed from the EP side (AP cost ÷ yield %), with a 3–5% Q-factor line, then prices set with the GST step shown (menu price ÷ 1.1) and food-cost % verified. The capstone bar is blended GP ≥ 65% across the menu — weighted by expected sales mix, not a simple average.\n\nWorked check on the example: velouté costs about $1.90 a serve and prices at $16 (86.9% GP ex-GST); the chicken main about $6.10 at $34 (80.3%); crème caramel about $1.65 at $14 (87.0%). Blended GP at an even mix: roughly 83% — comfortable headroom, which is what cross-utilisation buys. Interrogate any dish above 35% food cost: it needs a reason to exist, a new price, or a cheaper build. Tick deliverable 4 when every dish is priced and the blend clears 65%.',
        },
      ],
      demonstrations: [
        {
          title: 'From cards to a priced menu in six moves',
          steps: [
            'Consolidate: merge every ingredient from all standardised cards into one shopping list, summing quantities and rounding up to real pack sizes.',
            'Price the list at your actual suppliers — shelf, counter quote or receipt — recording $/pack and pack size for every line, with a seasonal alternative noted for anything volatile.',
            'Build one costing sheet per dish: EP-adjusted line costs, Q-factor at 3–5%, batch total, portion cost.',
            'Price each dish: factor-price the floor at your target food cost, adjust for menu psychology and neighbours, then verify ex-GST food-cost % (price ÷ 1.1 first).',
            'Compute the blended GP weighted by expected sales mix; if it is under 65%, adjust the dish with the worst GP dollars — not necessarily the worst percentage.',
            'Enter everything in the costing tool, mark deliverables 3 and 4 on the Capstone screen, and freeze prices — service-week repricing is how panic tastes.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Margin stress test',
          instructions: 'Take your completed costing and simulate two shocks: your most expensive protein up 20%, and one guest added at no extra charge. Recompute the blended GP for both. Write the pre-decided response to each (substitute, reprice, absorb) — capstone services meet surprises, and deliverable 9 will ask whether you predicted them.',
          repeatPractice: 'Re-run the stress test after the real shop with actual receipt prices. The gap between quoted and paid is itself a sourcing lesson to log.',
        },
      ],
      recipeIds: ['r-m19-01', 'r-m19-02', 'r-m19-03'],
      techniqueIds: ['t-recipe-costing', 't-yield-testing', 't-menu-engineering', 't-portion-control'],
      troubleshooting: [
        {
          problem: 'Blended GP stubbornly sits below 65%',
          cause: 'The menu is protein-heavy in the wrong places, or portion specs crept upward during testing.',
          fix: 'Work the GP-dollar levers in order: shrink the costliest portion to its card spec, move one garnish from bought to trim-based, and re-check the sales-mix weighting — a strong dessert mix lifts the blend fast.',
        },
      ],
    },
    {
      id: 'm19-l03',
      title: 'Prep planning, service timing & waste controls',
      summary: 'Capstone deliverables 5, 6 and 7: a two-day prep plan with hold notes, a course-by-course service timeline, and waste controls set up before the shopping is done.',
      theory: [
        {
          heading: 'The prep plan and the service timeline',
          body: 'Deliverable 5 — "Prep plan" — is your Module 16 prep list at full scale: at least two days, every task with a station and a duration, worked backwards from service. Stocks and braises earliest; custards day-before; garnishes and emulsions last. Every perishable carries a hold note — container, temperature, use-by — because a capstone fridge is a cook-chill operation and the 2-hour/4-hour cooling windows still apply. Nothing lands on service day that yesterday could have owned.\n\nDeliverable 6 — "Service timing plan" — scripts the dinner itself: guests-seated to petit fours, a fire time and a landing time per course, 20–30 minutes between courses, station calls written out ("18:55 — pan on for breasts; purée reheating; plates warming"). Mark the failure path: the course that can stretch if you fall behind (in the example menu, the velouté holds; the chicken does not). Build both in the planner and tick deliverables 5 and 6 on the Capstone screen.',
        },
        {
          heading: 'Waste controls are planned, not hoped for',
          body: 'Deliverable 7 — "Waste controls" — must exist before you shop, because trim utilisation is a purchasing decision. Map every significant trim to a use in writing: chicken carcass → stock; leek tops → stock bag; potato peel and trim → soup pot or crisps; orange zest → caramel; egg whites → labelled freezer. Then rule up the waste log — grams and a reason (trim, spoilage, over-prep, plate waste) — and put the scales beside the bin for service week.\n\nThe target is the professional one from Module 17: under 5% of purchased weight to the bin. On a $95 shop of roughly 9 kg of food, that is a budget of about 450 g — a number you can actually picture. Keep both documents as capstone notes and tick deliverable 7. During execution the log runs live; a reconstructed log reads exactly like what it is.',
        },
      ],
      demonstrations: [
        {
          title: 'Backwards-planning the example service (8 covers, 19:00 seating)',
          steps: [
            'Fix the anchors: entrée lands 19:15, main 19:50, dessert 20:25 — 35-minute spacing for a relaxed table.',
            'Day −1 morning: break down the chicken (weigh for the yield cards), start the stock, cool it on the clock, and label everything.',
            'Day −1 afternoon: crème caramels baked and chilled; velouté made to the pre-cream stage and cook-chilled; carrots peeled and portioned; jus base reduced.',
            'Service day, 16:00–18:00: purée made and held warm in a bain; velouté finished with cream; chives cut; plates counted and stacked by course; table set.',
            'Write the service script with fire and landing times: 18:55 pans on; 19:10 velouté hot, crouton check, plate; 19:25 breasts in; 19:42 rest and jus; 19:50 mains land; 20:15 unmould desserts; 20:25 dessert lands.',
            'Mark the stretch course (velouté holds at 80°C; dessert is already made) and the no-stretch course (the chicken), then enter the whole plan in the planner.',
          ],
        },
      ],
      exercises: [
        {
          title: 'The dry run',
          instructions: 'One week before service, run a half-scale rehearsal: two covers, full menu, real timeline, waste log live. Time every landing against the script and weigh the bin at the end. Fix the three biggest gaps in the prep plan and timeline while it is cheap to do so.',
          repeatPractice: 'Carry every timing correction straight into the planner documents for deliverables 5 and 6 — the rehearsal is only worth what the paperwork inherits from it.',
        },
      ],
      recipeIds: ['r-m19-01', 'r-m19-03'],
      techniqueIds: ['t-haccp', 't-fifo', 't-mise-en-place', 't-white-stock'],
      troubleshooting: [
        {
          problem: 'The prep plan says "make everything day before" and service day is still chaos',
          cause: 'Tasks were assigned to days but not to hours and stations, so service day inherited all the unscheduled truth.',
          fix: 'Give every task a duration and a start time, then sum each block — if service day holds more than 3 hours of tasks before guests arrive, push more into day −1 or simplify a dish.',
        },
        {
          problem: 'Waste log forgotten in the heat of service',
          cause: 'Logging was planned as a during-service task, and service has no spare hands.',
          fix: 'Log at the three natural pauses instead: end of prep, after mains land, and at close. A bowl for peelings on the bench lets you weigh once instead of writing ten times.',
        },
      ],
    },
    {
      id: 'm19-l04',
      title: 'Execution & the post-service review',
      summary: 'Capstone deliverables 8 and 9: cook the menu for real guests with photos at the pass, then close the loop with actual costs, timing variances, waste totals and three honest lessons.',
      theory: [
        {
          heading: 'Execution: cook the menu',
          body: 'Deliverable 8 — "Execution — cook the menu" — is service itself: 4–8 covers, real guests, your timeline on the wall. The professional standard for the night is simple: mise complete one hour before guests arrive, then stop prepping — the last hour is for plates, temperature checks and breathing. Follow the script, and note every deviation in the moment with one word on the timeline ("late", "split", "re-fired"); memory will lie by morning.\n\nPhotograph every dish as it leaves the pass — the photo is the deliverable’s evidence and your portfolio. Plate, shoot, serve, move: ten seconds, no styling. Mark each dish cooked in the app as courses land, and tick deliverable 8 when the last plate leaves. Guests talking over empty plates is the pass mark no rubric can give you.',
        },
        {
          heading: 'The review is the graduation',
          body: 'Deliverable 9 — "Post-service review" — is where a dinner becomes a system. Re-cost the menu from actual receipts and actual portions served, and compare against plan: on the example menu, plan said $6.10 for the main; if the bird ran small and you paid $2.10 more at the butcher, the real GP moved and you should know by exactly how much. Total the waste log against the sub-5% target, with reasons. Write the timing variances specifically: "mains landed 19:58, eight minutes late, because the purée bain lost temperature at 19:30".\n\nCollect guest feedback while it is warm, then write three lessons you would apply to a second service — concrete enough to act on, honest enough to sting slightly. That is the difference between an event and an operation. Complete the review form, tick deliverable 9, and the Capstone screen should now show all nine deliverables done: that screen, full, is the course.',
        },
      ],
      demonstrations: [
        {
          title: 'Closing the books on the example menu',
          steps: [
            'Gather the receipts and total the actual spend (say $97.40 against a planned $92.00 — record the variance and its cause: chicken price and an extra cream).',
            'Re-cost each dish with actual prices and actual portions plated; recompute each GP% and the blended GP, weighted by what was actually served.',
            'Total the waste log: e.g. 380 g binned on 9.2 kg purchased = 4.1% — under target; note the biggest single entry and its reason.',
            'Write the timing table: planned vs actual landing per course, variance in minutes, and the causal prep decision for any gap over five minutes.',
            'Summarise guest feedback verbatim — three quotes minimum, including the lukewarm one you are tempted to omit.',
            'Write the three lessons as instructions to your future self ("brine the breasts the night before — service-day brining cost 20 minutes"), then submit the review and tick deliverable 9.',
          ],
        },
      ],
      exercises: [
        {
          title: 'Planned vs actual ledger',
          instructions: 'Build a one-page ledger with three columns — planned, actual, variance — covering: total cost, per-dish portion cost, blended GP%, per-course landing times, and waste %. Fill the planned column before service; fill the rest within 24 hours after. Attach it to the review form.',
          repeatPractice: 'This ledger format is how you should close every significant cook from now on — the course ends, the planned-vs-actual habit does not.',
        },
      ],
      recipeIds: ['r-m19-02'],
      techniqueIds: ['t-plating', 't-sauce-work', 't-tasting', 't-portion-control'],
      troubleshooting: [
        {
          problem: 'Service went well but the review keeps stalling',
          cause: 'The adrenaline is gone and the paperwork feels like an anticlimax — this is the most commonly abandoned deliverable.',
          fix: 'Book the review as a 90-minute appointment within 48 hours of service, receipts and waste log on the table. Deliverable 9 is a rubric line worth real marks; an unclosed loop caps your score and, worse, your learning.',
        },
      ],
    },
  ],
  commonMistakes: [
    {
      problem: 'Designing a menu you cannot execute alone',
      cause: 'Ambition prices in your skills but not your station count — three à-la-minute dishes and one pair of hands.',
      fix: 'The example menu’s shape is the lesson: one à-la-minute main, everything else prep-ahead or hold-safe. Impress with execution, not with headcount-per-dish.',
    },
    {
      problem: 'Treating the paperwork deliverables as admin to backfill after the dinner',
      cause: 'Cooking feels like the real work; sheets feel like homework about the work.',
      fix: 'The costing, prep plan and waste map change what you shop for and cook — done afterwards they are fiction. Sequence matters: deliverables 1–7 before the shop, 8–9 around the service.',
    },
    {
      problem: 'Silently changing dishes during service week',
      cause: 'Nerves — a test cook wobbles and the whole course gets swapped, invalidating cards, costing and the timeline.',
      fix: 'After prices freeze, fix technique, not the menu. If a dish must change, re-run its card, costing and timeline lines the same day — the system, not just the stove, has to serve dinner.',
    },
    {
      problem: 'Reviewing the night as a story instead of as numbers',
      cause: '"It went great" is memory doing PR.',
      fix: 'The review form asks for variances in dollars, minutes and grams. Fill those first; the story is whatever the numbers leave unexplained.',
    },
  ],
  assessment: {
    id: 'as-m19',
    moduleId: 'm19',
    title: 'The Capstone: A Profitable Menu, Served',
    brief:
      'Complete all nine capstone deliverables on the Capstone screen — Menu concept & design; Standardised recipes with yields; Supplier cost sheet & shopping list; Recipe costing & pricing; Prep plan; Service timing plan; Waste controls; Execution — cook the menu; Post-service review — culminating in a three-course dinner for 4–8 covers, costed to a blended GP of 65% or better, executed to your timeline and reviewed against actuals. The worked example menu (r-m19-01 to r-m19-03) may be adapted or fully replaced. Score yourself on this rubric only after deliverable 9 is submitted.',
    rubric: [
      { criterion: 'Menu design & recipe standardisation', maxScore: 6, guidance: '5–6: coherent concept, genuine cross-utilisation, complete cards with weighed AP→EP yields and gram portions. Below 4: decorative menu, textbook yields.' },
      { criterion: 'Costing accuracy', maxScore: 6, guidance: 'Real pack prices, EP-side costing, explicit Q-factor, GST step shown, arithmetic clean to the cent across every sheet.' },
      { criterion: 'Margin achievement', maxScore: 6, guidance: '5–6: blended GP ≥ 65% verified against actual receipts and portions, outlier dishes interrogated. 3–4: planned ≥ 65% but actuals drifted, with causes identified. Below 3: target missed unexamined.' },
      { criterion: 'Execution quality', maxScore: 10, guidance: 'Dishes at temperature and to spec, portions consistent across covers, seasoning and plating at Stage 4 standard, pass photos for every dish.' },
      { criterion: 'Timing & service flow', maxScore: 6, guidance: 'Courses landed within 10 minutes of plan with deviations noted live; mise frozen an hour out; the failure path used deliberately if needed.' },
      { criterion: 'Waste control & review honesty', maxScore: 6, guidance: 'Live waste log under 5% of purchased weight (or an honest miss with causes), planned-vs-actual ledger complete, three lessons concrete enough to act on.' },
    ],
    passScore: 30,
    evidence:
      'The full capstone file: menu, standardised cards, costing sheets and receipts, prep plan and service timeline with live annotations, waste log and trim map, a pass photo of every dish served, guest feedback, and the completed post-service review with the planned-vs-actual ledger.',
  },
  completionCriteria: [
    'All four lessons marked complete and all nine capstone deliverables — Menu concept & design through Post-service review — completed on the Capstone screen',
    'The three-course menu served to 4–8 real covers with a pass photo of every dish',
    'Blended GP of 65% or better verified in the post-service re-costing (or the miss fully diagnosed in the review)',
    'Assessment passed (30/40 or better) with the complete capstone file as evidence',
  ],
}

export const module19Recipes: Recipe[] = [
  {
    id: 'r-m19-01',
    title: 'Example Capstone Entrée: Leek & Potato Velouté, Chive Oil',
    moduleId: 'm19',
    description:
      'A silk-textured velouté built on the capstone chicken’s own stock, using the main course’s potato trim — the entrée of the worked example menu. Fully prep-ahead, holds at 80°C through service, and costs about $1.90 a serve. A reference dish: adapt it or replace it with your own entrée, keeping the cross-utilisation logic.',
    difficulty: 3,
    serves: 8,
    timeMins: 75,
    techniqueIds: ['t-puree', 't-white-stock', 't-plating', 't-haccp'],
    ingredients: [
      { item: 'Leeks', qty: 600, unit: 'g', prep: 'white and pale green sliced and washed; dark tops to the stock bag' },
      { item: 'Floury potatoes', qty: 400, unit: 'g', prep: 'peeled and sliced — include the trimmed offcuts from the main’s purée batch' },
      { item: 'Butter', qty: 60, unit: 'g' },
      { item: 'Chicken stock (from the capstone bird’s carcass)', qty: 1.2, unit: 'L', prep: 'made day −1, cook-chilled and labelled' },
      { item: 'Pouring cream', qty: 150, unit: 'ml' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Lemon juice', qty: 10, unit: 'ml' },
      { item: 'Chives', qty: 20, unit: 'g', prep: 'half finely cut, half for the oil' },
      { item: 'Neutral oil', qty: 80, unit: 'ml', prep: 'for the chive oil' },
    ],
    method: [
      'Day −1: sweat the leeks in butter with a pinch of salt over low heat, 10–12 minutes, no colour — colour changes the dish from ivory to beige and this menu plates it pale on purpose.',
      'Add potatoes and stock; simmer gently 18–20 minutes until the potato crushes against the pot wall.',
      'Blend hot, in batches, until completely smooth, then pass through a fine sieve — the pass is what separates a soup from a velouté.',
      'Cool on the clock (60→21°C in 2 h, 21→5°C in 4 h), label "velouté base / day −1 / use by +2", and refrigerate.',
      'Chive oil, day −1: blanch half the chives 10 seconds, refresh, dry hard, and blend with the oil for 1 minute; strain through a coffee filter or fine cloth. Refrigerate in a squeeze bottle.',
      'Service day: reheat the base gently, stir in the cream, and re-season with salt and the lemon juice — cream mutes seasoning, so taste after adding it, not before.',
      'Hold at 80°C in a covered pot at the back of the stove; this is the menu’s designated stretch course and holds happily for 45 minutes.',
      'To serve: 150 ml per bowl (ladle by number), a ring of chive oil, a pinch of cut chives. Wipe the rims. Photograph the first bowl at the pass.',
    ],
    chefNotes: [
      'This is a reference dish for the worked example menu — adapt it or replace it entirely with your own entrée. Whatever you serve, keep its jobs: prep-ahead, hold-safe, built from the menu’s own stock and trim.',
      'The costing lesson hiding in the bowl: the stock and half the potato weight are already paid for by the main course, which is why this dish runs near 87% GP at a $16 menu price.',
    ],
    reinforces: ['Purée and pass discipline', 'Cook-chill cooling windows', 'Holding and re-seasoning for service'],
  },
  {
    id: 'r-m19-02',
    title: 'Example Capstone Main: Pan-Roasted Chicken, Carcass Jus, Pommes Purée & Glazed Carrots',
    moduleId: 'm19',
    description:
      'The centrepiece of the worked example menu and its only à-la-minute dish: breasts from the yield-tested capstone bird, a jus from its own carcass stock, silk purée and butter-glazed carrots. Portion cost about $6.10; menu price $34; the dish the whole timeline is built around. A reference recipe to adapt or replace.',
    difficulty: 4,
    serves: 8,
    timeMins: 150,
    techniqueIds: ['t-pan-roasting', 't-pan-sauce', 't-potato-puree', 't-braising-veg', 't-portion-control', 't-doneness'],
    ingredients: [
      { item: 'Chicken breasts, skin on', qty: 8, unit: 'each', prep: 'from two capstone birds (or bought to spec at 180–200 g each); dry-brined 1% salt overnight' },
      { item: 'Chicken stock (carcass stock, day −1)', qty: 600, unit: 'ml', prep: 'for the jus' },
      { item: 'White wine', qty: 100, unit: 'ml' },
      { item: 'Shallots', qty: 2, unit: 'each', prep: 'minced' },
      { item: 'Cold butter', qty: 200, unit: 'g', prep: '60 g jus, 100 g purée, 40 g carrots' },
      { item: 'Floury potatoes', qty: 1.2, unit: 'kg', prep: 'peeled — trim and peel weights to the entrée pot and yield card' },
      { item: 'Hot milk', qty: 150, unit: 'ml' },
      { item: 'Carrots', qty: 600, unit: 'g', prep: 'peeled, cut to even 4 cm barrels' },
      { item: 'Caster sugar', qty: 8, unit: 'g', prep: 'for the glaze' },
      { item: 'Thyme sprigs', qty: 6, unit: 'each' },
      { item: 'Fine salt', qty: null, unit: 'to taste' },
      { item: 'Olive oil', qty: 30, unit: 'ml' },
    ],
    method: [
      'Day −1: reduce 600 ml of carcass stock with the wine and shallots by two-thirds to a jus base; cool, label, refrigerate. Brine the breasts (1% salt) overnight, uncovered on a rack.',
      'Service day, 16:30: make the purée — potatoes from cold salted water, riced hot, dried over low heat, then 100 g butter and the hot milk beaten in. Hold covered in a bain at 60°C or above (danger-zone discipline applies to holding, not just cooling).',
      'Glaze the carrots: barrels in a single layer with 40 g butter, the sugar, a pinch of salt and water one-third up; cartouche on, simmer until tender as the liquid becomes a glaze, about 15 minutes. Hold; they re-glaze in 2 minutes at service.',
      '18:55, pans on: pat the breasts dry, oil, and lay skin-down in two heavy pans over medium heat. Render 8–10 minutes to deep gold without moving them — service-day patience is the difference between good and photographed-proudly.',
      'Flip, add thyme, and finish in a 190°C oven to 62–65°C core; probe every breast, not just one — eight covers means eight verdicts. Rest on a rack, 8 minutes.',
      'Finish the jus in a resting pan: reheat the base, reduce to coating consistency, mount the 60 g cold butter off the heat, add the resting juices, season last.',
      'Plate to the card spec, scales at the bench for the first two plates: 160–180 g sliced breast, 140 g purée (scoop), 70 g carrots, 60 ml jus (ladle) — jus under and around, never over the skin.',
      'Land all eight mains within 4 minutes of each other, note the actual landing time on the timeline, and photograph the first plate at the pass before it leaves.',
    ],
    chefNotes: [
      'A reference main for the example menu — replace it with your own if you wish, but keep its structural role: the single à-la-minute dish, fed by the menu’s stock, with every side hold-tolerant so only the protein is on the clock.',
      'The bird bought whole at $9.50/kg with your m17 yield of ~63% makes this breast cost about $2.70 — and donates the stock for two courses. That arithmetic, not the plating, is why the dish clears 80% GP at $34.',
    ],
    reinforces: ['Pan-roasting and probe-verified doneness', 'Jus and butter-mounting', 'Plating to a weighed spec under time pressure'],
  },
  {
    id: 'r-m19-03',
    title: 'Example Capstone Dessert: Crème Caramel, Burnt Orange',
    moduleId: 'm19',
    description:
      'The example menu’s closer: the Module 18 crème caramel promoted to capstone service, with an orange-sharpened caramel and zest-candied garnish from the same fruit. Made entirely the day before, unmoulded to order — the dessert equivalent of a well-run pass. Around $1.65 a serve at $14. A reference dish to adapt or replace.',
    difficulty: 3,
    serves: 8,
    timeMins: 100,
    techniqueIds: ['t-custard', 't-caramel', 't-portion-control', 't-plating'],
    ingredients: [
      { item: 'Caster sugar', qty: 200, unit: 'g', prep: 'for the caramel' },
      { item: 'Oranges', qty: 2, unit: 'each', prep: 'zest in wide strips, then juiced — one fruit, three jobs' },
      { item: 'Eggs', qty: 4, unit: 'each' },
      { item: 'Egg yolks', qty: 3, unit: 'each', prep: 'whites frozen, labelled, banked — the capstone waste map in action' },
      { item: 'Caster sugar', qty: 110, unit: 'g', prep: 'for the custard' },
      { item: 'Full-cream milk', qty: 550, unit: 'ml' },
      { item: 'Pouring cream', qty: 250, unit: 'ml' },
      { item: 'Vanilla bean or paste', qty: 1.5, unit: 'tsp' },
      { item: 'Fine salt', qty: 1, unit: 'g' },
    ],
    method: [
      'Day −1: make a dry caramel with the 200 g sugar to deep amber (about 180°C), then — off the heat, at arm’s length, it spits — add 60 ml of the orange juice to sharpen it. Return briefly to dissolve, then divide between eight 150 ml ramekins.',
      'Simmer the remaining orange juice with half the zest strips and 2 tablespoons of water for 5 minutes to candy the zest; drain and reserve for garnish. Chill the syrup for tomorrow’s plates.',
      'Heat milk, cream, vanilla, salt and the remaining zest to a bare simmer; stand 10 minutes to infuse, then remove the zest.',
      'Whisk eggs, yolks and the 110 g sugar just to combine; temper in the hot dairy gradually, then strain everything through a fine sieve into a jug.',
      'Fill the ramekins, set in a deep tray, and pour boiling water two-thirds up their sides. Bake at 150°C for 30–35 minutes: set edges, definite tremble at the centre, 80–82°C on the probe.',
      'Chill overnight, labelled. This dish is why the dessert course needs zero service-day cooking — design decision, not luck.',
      'Service, 20:15: run a thin knife around each edge, invert onto rimmed plates with one decisive shake, and let the orange caramel flood. Finish with candied zest and a thread of the reserved syrup.',
      'Weigh the first plate against the card (about 150 g), land all eight within 3 minutes, note the time on the timeline, and take the pass photo before the first spoon breaks the surface.',
    ],
    chefNotes: [
      'A reference dessert for the example menu — swap in your own closer if you like, but keep its service profile: fully made ahead, unmoulded to order, garnish from an ingredient the dish already bought.',
      'At 87% GP this plate does the menu’s financial heavy lifting; in the post-service review, check whether dessert uptake matched the sales mix you assumed in your blended-GP calculation — it is the number most first menus get wrong.',
    ],
    reinforces: ['Custard temperature control', 'Caramel confidence', 'Make-ahead service design'],
  },
]
