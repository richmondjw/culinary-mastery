export interface CapstoneStepDef {
  id: string
  number: number
  title: string
  summary: string
  /** What must exist for this step to be considered done. */
  deliverable: string
  /** In-app tool that supports the step, as a route, if any. */
  toolRoute?: string
  guidance: string[]
}

export const capstoneSteps: CapstoneStepDef[] = [
  {
    id: 'cap-1',
    number: 1,
    title: 'Menu concept & design',
    summary: 'Design a three-course menu (2–3 options per course) with a coherent concept.',
    deliverable: 'A saved menu in the menu designer with every dish named and priced.',
    toolRoute: '/menu-designer',
    guidance: [
      'Pick a concept you can defend in one sentence — a cuisine, a season, a neighbourhood bistro.',
      'Cross-utilise: every protein trim, stock and sauce should appear in more than one dish.',
      'Balance richness, acidity, texture and colour across the menu, and cover one vegetarian path.',
      'Check station load: no more than two à-la-minute dishes should land on the same station.',
    ],
  },
  {
    id: 'cap-2',
    number: 2,
    title: 'Standardised recipes with yields',
    summary: 'Write a standardised recipe card for every dish, with AP→EP yields.',
    deliverable: 'One note per dish (linked to the menu) using the standardised recipe format from Module 13, including yield percentages for trimmed ingredients.',
    toolRoute: '/notes',
    guidance: [
      'Use the format: name, yield/portions, ingredients with AP quantity + yield% + EP quantity, method in numbered steps, critical points, plating spec.',
      'Weigh trim during testing — real yield numbers, not textbook ones.',
      'State portion sizes in grams, not "1 piece".',
    ],
  },
  {
    id: 'cap-3',
    number: 3,
    title: 'Supplier cost sheet & shopping list',
    summary: 'Price every ingredient from real suppliers and build the consolidated shopping list.',
    deliverable: 'Shopping list populated for the full menu; supplier pack prices entered into costing sheets.',
    toolRoute: '/lists',
    guidance: [
      'Use real prices: supermarket shelf prices, butcher/fishmonger quotes, greengrocer specials.',
      'Record pack sizes as sold (e.g. $12.50 / 1 kg), not per-portion guesses.',
      'Note seasonal alternatives for anything volatile.',
    ],
  },
  {
    id: 'cap-4',
    number: 4,
    title: 'Recipe costing & pricing',
    summary: 'Cost every dish, apply Q-factor, set selling prices and check margins.',
    deliverable: 'A costing sheet per dish; menu blended GP ≥ 65% with every dish priced.',
    toolRoute: '/costing',
    guidance: [
      'Cost from the EP side: AP cost ÷ yield% gives the true cost of what lands on the plate.',
      'Add a 3–5% Q-factor for oil, salt, garnish and butter you never weigh.',
      'Price with psychology in mind, then verify food-cost % — not the other way round.',
      'Interrogate outliers: a 45% food-cost dish needs a reason to exist.',
    ],
  },
  {
    id: 'cap-5',
    number: 5,
    title: 'Prep plan',
    summary: 'Build a multi-day prep schedule with hold times and food-safety controls.',
    deliverable: 'A prep plan in the planner covering at least two days, every task with a station and duration, hold notes on anything perishable.',
    toolRoute: '/planner',
    guidance: [
      'Work backwards from service time. Stocks and braises go earliest; garnishes and emulsions last.',
      'Attach a hold note (container, temperature, use-by) to every prepared item.',
      'Nothing time-critical on service day that could have been done the day before.',
    ],
  },
  {
    id: 'cap-6',
    number: 6,
    title: 'Service timing plan',
    summary: 'Write the course-by-course execution timeline for a 4–8 cover dinner.',
    deliverable: 'A service timeline in the planner from guests-seated to petit fours, with station calls.',
    toolRoute: '/planner',
    guidance: [
      'Give each course a fire time and a landing time; leave 20–30 minutes between courses.',
      'Mark the two minutes before each pass — what is in the pan, what is plating, what is resting.',
      'Plan the failure path: which course can stretch if you fall behind.',
    ],
  },
  {
    id: 'cap-7',
    number: 7,
    title: 'Waste controls',
    summary: 'Plan trim utilisation and set up a waste log before you shop.',
    deliverable: 'A trim-utilisation plan (every significant trim mapped to a use) and an empty waste log ready for execution, kept as capstone notes.',
    guidance: [
      'Map every trim before buying: bones → stock, fish frames → fumet, herb stems → oil, bread → crumbs.',
      'Log waste in grams with a reason (trim, spoilage, over-prep, plate waste).',
      'Target < 5% purchased weight to bin.',
    ],
  },
  {
    id: 'cap-8',
    number: 8,
    title: 'Execution — cook the menu',
    summary: 'Run the service for real guests. Photograph every dish as it leaves the pass.',
    deliverable: 'Every menu dish marked cooked, with a photo per dish attached to notes or the assessment.',
    toolRoute: '/notes',
    guidance: [
      'Mise en place complete one hour before guests arrive — then stop prepping.',
      'Follow the timeline; note every deviation in the moment (one word is enough).',
      'Plate the photo before the meal moves on. The pass photo is your portfolio.',
    ],
  },
  {
    id: 'cap-9',
    number: 9,
    title: 'Post-service review',
    summary: 'Compare actuals to plan: cost, timing, waste, guest feedback, lessons.',
    deliverable: 'Completed review form: planned vs actual cost, timing variances, waste log totals, guest feedback and three lessons.',
    guidance: [
      'Re-cost with actual purchase receipts and actual portions served.',
      'Be specific about timing: which course was late, by how long, and which prep decision caused it.',
      'Write three lessons you would apply to a second service — that is the difference between an event and a system.',
    ],
  },
]
