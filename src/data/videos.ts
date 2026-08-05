// Video catalogue — deliberately decoupled from curriculum content so clips can be
// swapped, re-ranked or removed without touching a single module file.
//
// PROVENANCE RULE: every youtubeId below was taken verbatim from a web-search result.
// None were written from memory. Do not add an id you have not seen in a search result —
// a fabricated id looks perfectly plausible and is completely worthless.
//
// STATUS MEANING:
//   'candidate' — the id is real and the title matches the technique, but nobody has
//                 watched it. Not confirmed live, embeddable, or pedagogically correct.
//   'verified'  — a human watched it and confirmed it teaches our method.
//   'rejected'  — watched and found wanting (keep the row, record why).
//   'dead'      — link rot; no longer available.
//
// Everything ships as 'candidate' until James (or an API-enabled verification pass)
// promotes it. See VIDEO-RESEARCH-BRIEF.md for the verification workflow.

export type VideoStatus = 'candidate' | 'verified' | 'rejected' | 'dead'

export interface VideoRef {
  id: string
  youtubeId: string
  title: string
  channel?: string
  /** Deep-link into the exact moment the technique starts. */
  startSec?: number
  /** What this clip is supposed to show, in our terms — the thing to check when verifying. */
  whatItShows: string
  status: VideoStatus
  addedAt: string
  verifiedAt?: string
  /** Known divergences from our method, or anything a viewer should discount. */
  notes?: string
}

const ADDED = '2026-07-28'
const ROLLOUT_ADDED = '2026-08-05'
const OEMBED_CANDIDATE_NOTE =
  'oEmbed-only check passed on 2026-08-05: live title and channel retrieved. Content, duration, Data API embeddability and AU availability remain unverified; review before relying on it.'

/** Ranked candidates per technique id. First entry is the preferred clip. */
export const videosByTechnique: Record<string, VideoRef[]> = {
  't-knife-grip': [
    {
      id: 'v-knife-grip-1',
      youtubeId: 'lrNNEq45a-8',
      title: 'Basic Knife Skills — How to "Pinch" and "Claw"',
      whatItShows: 'Both halves of the Module 1 grip lesson in one clip: pinch grip on the blade, claw on the guiding hand',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-knife-grip-2',
      youtubeId: '8OPmGzBAMPo',
      title: "How To Pinch Grip a Chef's Knife",
      whatItShows: 'Pinch grip in isolation — hand position over the balance point',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-knife-grip-3',
      youtubeId: 'W9J46vEGm7c',
      title: 'Using a Knife — The Claw Grip',
      whatItShows: 'Guiding-hand claw: knuckles vertical, blade riding against them',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  't-julienne': [
    {
      id: 'v-julienne-1',
      youtubeId: 'gf_CQsogRQo',
      title: 'How to Julienne Carrots — Epicurious Essentials',
      channel: 'Epicurious',
      whatItShows: 'Squaring the carrot, planks, then even matchsticks — our plank→stick progression',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique. Stated dimensions checked against our 2 mm × 2 mm × 5 cm spec; US sources often quote 1/8 inch.',
    },
    {
      id: 'v-julienne-2',
      youtubeId: 'S6D2FbNymF8',
      title: 'How to Julienne Vegetables — Knife Skills 101',
      channel: 'ZWILLING',
      whatItShows: 'Julienne across carrot, pepper and zucchini — useful for the salad recipe',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-julienne-3',
      youtubeId: '4EH6zQKmZTM',
      title: 'The Trick to a Quick Julienne — Kitchen Conundrums',
      whatItShows: 'Stacking planks efficiently without losing evenness',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  't-brunoise': [
    {
      id: 'v-brunoise-1',
      youtubeId: 'CVMQe8VwxNY',
      title: 'Basic Knife Skills: Carrot Julienne and Brunoise',
      whatItShows: 'Exactly our pairing — brunoise cut directly from julienne, same vegetable',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-brunoise-2',
      youtubeId: 'QuyhxE1As6U',
      title: 'Classic French Knife Cuts',
      whatItShows: 'The full dimensional family: fine julienne, julienne, batonnet, brunoisette, brunoise, small/medium/large dice',
      status: 'candidate',
      addedAt: ADDED,
      notes: 'Good reference for the whole cut card, not just brunoise.',
    },
    {
      id: 'v-brunoise-3',
      youtubeId: 'D9MyYBfAGj8',
      title: 'How to Practice Knife Cuts — Batonnet, Small Dice, Julienne, Brunoise',
      whatItShows: 'Framed as deliberate practice, which matches our repetition drills',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  't-chiffonade': [
    {
      id: 'v-chiffonade-1',
      youtubeId: 'ShbcEabd17E',
      title: 'How to Chiffonade or Cut Basil — Epicurious Essentials',
      channel: 'Epicurious',
      whatItShows: 'Stack largest-to-smallest, roll into a cigar, single-stroke slicing',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-chiffonade-2',
      youtubeId: 'lk7MF_hHbvE',
      title: 'How to Chiffonade Cut Herbs',
      channel: 'Food Network',
      whatItShows: 'Chiffonade generalised beyond basil to other leafy herbs',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-chiffonade-3',
      youtubeId: 'BWeemSuIW6g',
      title: 'How To Chiffonade Fresh Herbs',
      whatItShows: 'Alternative angle on the roll-and-slice motion',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  't-dice': [
    {
      id: 'v-dice-1',
      youtubeId: 'BuebC0CfD8E',
      title: 'Knife Skills: How to Slice and Dice an Onion',
      whatItShows: 'Onion geometry from our lesson: radial cuts toward an intact root end, then crosswise',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-dice-2',
      youtubeId: 'CwRttSfnfcc',
      title: 'Dicing an Onion',
      channel: 'Chef Jean-Pierre',
      whatItShows: 'Slower, more explanatory take on the same onion method',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-dice-3',
      youtubeId: 'ML5flgorZYc',
      title: 'How To Dice, Julienne, Brunoise & Batonnet',
      whatItShows: 'The small/medium/large dice size family in one reference',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  't-mince': [
    {
      id: 'v-mince-1',
      youtubeId: 'HSPrHYkaMMo',
      title: 'Knife Skills — How to Mince Garlic',
      whatItShows: 'Crush to loosen skin, then rock-mince with fingertips on the spine',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-mince-2',
      youtubeId: 'eOyjFc0Utw8',
      title: 'Knife Skills — How to Make Garlic Paste',
      whatItShows: 'Salt as an abrasive under the flat of the blade — our specific key point',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-mince-3',
      youtubeId: 'hGYPMbtNXfA',
      title: 'How to Mince Garlic — Epicurious Essentials',
      channel: 'Epicurious',
      whatItShows: 'Two mincing approaches compared',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  't-sharpening': [
    {
      id: 'v-sharpening-1',
      youtubeId: 'ixCnCvDUKQ8',
      title: 'How to Sharpen a Knife with a Whetstone',
      channel: "Kenji López-Alt",
      whatItShows: 'Whetstone sharpening from a technically rigorous source — angle, burr, progression',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-sharpening-2',
      youtubeId: 'Xm2QVP7m7iY',
      title: 'How to use the Norton 1000/3000 grit whetstone',
      whatItShows: 'Our exact grit pairing — coarse side to raise the burr, fine side to polish',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-sharpening-3',
      youtubeId: 'TkzG4giI8To',
      title: "Beginner's Guide to Whetstone Sharpening",
      whatItShows: 'Gentler entry point if the others assume too much',
      status: 'candidate',
      addedAt: ADDED,
      notes: 'Honing (steel) is a separate skill — we may want a dedicated honing clip too.',
    },
  ],

  't-mise-en-place': [
    {
      id: 'v-mise-1',
      youtubeId: 'bDfByjnR-ac',
      title: 'Basic Mise En Place & Station Setup',
      whatItShows: 'Board anchored, containers in order of use, waste bowl within reach',
      status: 'verified',
      addedAt: ADDED,
      verifiedAt: '2026-08-05',
      notes: 'James-reviewed 2026-08-05: watched and confirmed as the primary clip for this Module 1 technique.',
    },
    {
      id: 'v-mise-2',
      youtubeId: 'FOfT21hAgrA',
      title: 'Mise en Place: Setting up your work station for flow',
      whatItShows: 'The flow argument — why prep and cooking are separated',
      status: 'candidate',
      addedAt: ADDED,
    },
    {
      id: 'v-mise-3',
      youtubeId: 'C_jPz54xOWU',
      title: 'How to Set Up a Prep Station Like a Pro Cook',
      whatItShows: 'Professional station discipline, adaptable to a home bench',
      status: 'candidate',
      addedAt: ADDED,
    },
  ],

  // Full-course rollout (2026-08-05). Each ID below was retrieved from a live
  // YouTube search and then resolved through oEmbed. They deliberately remain
  // candidates: this pass did not watch the clips or use the YouTube Data API.
  't-seasoning-salt': [{ id: 'v-seasoning-salt-1', youtubeId: 'WSA6gu5cfK0', title: 'Learn how to add salt for perfect seasoning every time | Chef2K', channel: 'Chef2k', whatItShows: 'Candidate for seasoning deliberately with salt through cooking.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-acid-balance': [{ id: 'v-acid-balance-1', youtubeId: 'Vp1RAzKyVrc', title: 'The Ultimate Guide on how to Balance Flavours', channel: 'The Lagom Chef', whatItShows: 'Candidate for diagnosing and balancing acidity in a dish.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-tasting': [{ id: 'v-tasting-1', youtubeId: 'akWA8-6s6us', title: 'What I Learned in Restaurants That Made My Home Cooking Better', channel: 'Andy Cooks', whatItShows: 'Candidate for a professional tasting-and-adjusting workflow.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-umami-layering': [{ id: 'v-umami-layering-1', youtubeId: 'akWA8-6s6us', title: 'What I Learned in Restaurants That Made My Home Cooking Better', channel: 'Andy Cooks', whatItShows: 'Candidate for building savoury depth; cull if umami layering is not taught specifically.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-poaching-eggs': [{ id: 'v-poaching-eggs-1', youtubeId: '66btvAWmp7g', title: 'The Food Lab: How To Poach Eggs', channel: 'Serious Eats', whatItShows: 'Candidate for gentle poaching, water management and egg handling.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-french-omelette': [{ id: 'v-french-omelette-1', youtubeId: 'bF4bp-lRbDg', title: 'How to Make a Classic French Omelette, According to a Michelin-Starred Chef', channel: 'Robb Report', whatItShows: 'Candidate for curd control and rolling a pale French omelette.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-custard': [{ id: 'v-custard-1', youtubeId: 'G1QE586pLtg', title: 'How to make the BEST custard | creme anglaise', channel: 'Chef Jack Ovens', whatItShows: 'Candidate for tempering and cooking crème anglaise to nappe.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-mayonnaise': [{ id: 'v-mayonnaise-1', youtubeId: 'qSHXG-5ShFk', title: 'How to Make Mayonnaise | Gordon Ramsay', channel: 'Gordon Ramsay', whatItShows: 'Candidate for building a yolk-and-oil emulsion by hand.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-white-stock': [{ id: 'v-white-stock-1', youtubeId: 'V23HlsUdbaM', title: 'How to make fresh chicken stock   Gordon Ramsay   YouTube', channel: 'none none', whatItShows: 'Candidate for making a clear white chicken stock; channel attribution needs a human cull.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-brown-stock': [{ id: 'v-brown-stock-1', youtubeId: 'bWhpw1KpcsM', title: 'How to Make a Beef Stock CHEF SKILLS #chef #shorts', channel: 'Fallow', whatItShows: 'Candidate for roasting bones and building brown stock; short-form, so review early.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-reduction': [{ id: 'v-reduction-1', youtubeId: 'R_lKuIL1wJo', title: 'Dr. Ben Explains Sauce Reduction', channel: "Dr. Ben's Kitchen", whatItShows: 'Candidate for reducing liquid to concentrate a sauce.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-clarification': [{ id: 'v-clarification-1', youtubeId: 'KCnBWczbD08', title: 'How to Make a Consommé CHEF SKILLS #shorts #chef', channel: 'Fallow', whatItShows: 'Candidate for consommé clarification; short-form, so review early for raft detail.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-roux': [{ id: 'v-roux-1', youtubeId: 'eTf0n1HoC1w', title: 'How to Make a Roux Like a Pro | Food Network', channel: 'Food Network', whatItShows: 'Candidate for making and cooking a roux.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-bechamel': [{ id: 'v-bechamel-1', youtubeId: 'h8axacg4Sww', title: 'Chef Guide to Bechamel Sauce', channel: 'Fallow', whatItShows: 'Candidate for a white-roux béchamel and its consistency.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-veloute': [{ id: 'v-veloute-1', youtubeId: 'ERK4NhO4Zug', title: 'Every Sauce You Can Make With The Most Versatile Mother Sauce', channel: 'Fallow', whatItShows: 'Candidate for velouté and its derivative sauces.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-tomato-sauce': [{ id: 'v-tomato-sauce-1', youtubeId: 'OqxaVT-zOCo', title: 'Tomato Sauce - Rich, Deep Flavour -  Mother Sauces', channel: 'Chef Basics with Baz', whatItShows: 'Candidate for building and balancing tomato sauce.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-hollandaise': [{ id: 'v-hollandaise-1', youtubeId: 'V9FHswUxVoU', title: 'Chef Tips For Perfect Hollandaise', channel: 'Fallow', whatItShows: 'Candidate for a warm yolk-and-butter emulsion.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pan-sauce': [{ id: 'v-pan-sauce-1', youtubeId: 'qsUm-dVjFYg', title: 'Make your chicken pan sauces like this', channel: 'Eat Like an Adult', whatItShows: 'Candidate for deglazing fond and mounting a quick pan sauce.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-beurre-blanc': [{ id: 'v-beurre-blanc-1', youtubeId: 'P8WTgKk88As', title: 'How to make Beurre Blanc | Rick Stein', channel: 'Rick Stein Restaurants', whatItShows: 'Candidate for reducing shallot liquid and mounting cold butter.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-vinaigrette': [{ id: 'v-vinaigrette-1', youtubeId: 'Tg_YIHKQq6M', title: 'Michelin-star vinaigrette recipe ⭐️', channel: 'Plating Art Media', whatItShows: 'Candidate for an emulsified vinaigrette; review whether it teaches the full ratio and tasting method.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-emulsification': [{ id: 'v-emulsification-1', youtubeId: 'wU5QzY9puKc', title: 'Food Formulas | Emulsification #cooking #food', channel: 'Fork the People', whatItShows: 'Candidate for emulsion principles; short-form, so review early for adequate explanation.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-blanching': [{ id: 'v-blanching-1', youtubeId: 'fRhsYmyOtS8', title: 'How to blanch and refresh green beans', channel: 'cookeryskills', whatItShows: 'Candidate for blanching vegetables and stopping carryover in ice water.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-roasting-veg': [{ id: 'v-roasting-veg-1', youtubeId: 'TomGub3ir2M', title: '4 cooking tips to make Perfect Roasted Vegetables', channel: 'Ethan Chlebowski', whatItShows: 'Candidate for high-heat roasting and avoiding tray crowding.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-sauteing': [{ id: 'v-sauteing-1', youtubeId: 'WWj9ByH8MU8', title: 'The Basics of Sautéing Correctly!', channel: 'Rick Bayless', whatItShows: 'Candidate for heat, batch size and movement in sautéing.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-braising-veg': [{ id: 'v-braising-veg-1', youtubeId: 'usogvbAT_FI', title: 'Can You Braise Vegetables With This Simple Technique? - The Skillful Chef', channel: 'The Skillful Chef', whatItShows: 'Candidate for braising vegetables until their liquid becomes a glaze.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-puree': [{ id: 'v-puree-1', youtubeId: 'GwPnpaURNOY', title: '4 Purees Every Chef Needs To Learn', channel: 'Fallow', whatItShows: 'Candidate for producing and finishing smooth vegetable purées.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pickling': [{ id: 'v-pickling-1', youtubeId: '3PvMdbmf55Q', title: 'How to Quick-Pickle Veggies – It\'s Easy AF!', channel: 'Chef Amanda Freitag', whatItShows: 'Candidate for a quick-pickle brine and crisp vegetable treatment.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-absorption': [{ id: 'v-absorption-1', youtubeId: 'AADo7Vmv2i4', title: 'How to cook rice: absorption method', channel: 'Coles', whatItShows: 'Candidate for measured-ratio rice cooked covered and rested.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pilaf': [{ id: 'v-pilaf-1', youtubeId: 'aqesOe7gB3Y', title: 'How to Cook Perfect Rice with the Pilaf Method | Get Cookin\' | Allrecipes.com', channel: 'Allrecipes', whatItShows: 'Candidate for the pilaf method, including toasting and absorption.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-risotto': [{ id: 'v-risotto-1', youtubeId: 'NKtR3KpS83w', title: 'How To Cook A Perfect Risotto', channel: 'Tasty', whatItShows: 'Candidate for stock addition, agitation and final risotto texture.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-potato-puree': [{ id: 'v-potato-puree-1', youtubeId: 'ZottzAaSi2U', title: 'Michelin Star Mash from Trinity #chef  #michelin #mashpotato', channel: 'Adam Byatt', whatItShows: 'Candidate for a rich, smooth potato purée; short-form, so review early.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-polenta': [{ id: 'v-polenta-1', youtubeId: 'fBPD1NscVyU', title: 'How to Make Perfect Polenta | Serious Eats', channel: 'Serious Eats', whatItShows: 'Candidate for cooking and finishing creamy polenta.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pasta-dough': [{ id: 'v-pasta-dough-1', youtubeId: 'EnXb1u9UoBU', title: 'The Best Way To Make Pasta From Scratch | Epicurious 101', channel: 'Epicurious', whatItShows: 'Candidate for mixing, kneading and resting fresh egg pasta dough.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-rolling-laminating': [{ id: 'v-rolling-laminating-1', youtubeId: 'q-evePx8BXk', title: 'Rolling pasta dough', channel: 'Chef Paul Magro', whatItShows: 'Candidate for rolling pasta through progressive thicknesses.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-filled-pasta': [{ id: 'v-filled-pasta-1', youtubeId: 'AtCKboN9JHg', title: 'How To Make Fresh Ravioli! 🇮🇹', channel: 'Exploring Italy', whatItShows: 'Candidate for filling, sealing and cutting ravioli.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pasta-emulsion': [{ id: 'v-pasta-emulsion-1', youtubeId: 'HBpbWhfsBxw', title: 'You\'re Doing It All Wrong - How to Sauce Pasta', channel: 'Chowhound', whatItShows: 'Candidate for finishing pasta in sauce and forming an emulsion.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-filleting-round': [{ id: 'v-filleting-round-1', youtubeId: 'OKsl4qCHVMc', title: 'How to Fillet a Round Fish', channel: 'Auguste Escoffier School of Culinary Arts', whatItShows: 'Candidate for filleting a round fish from collar to tail.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-filleting-flat': [{ id: 'v-filleting-flat-1', youtubeId: 'bLaRQbRHmYg', title: "How to Fillet a Flat Fish | Stein's Seafood School | Rick Stein", channel: 'Rick Stein Restaurants', whatItShows: 'Candidate for locating the central bone and lifting flat-fish fillets.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-skin-searing': [{ id: 'v-skin-searing-1', youtubeId: 'lAdQvnnP_xc', title: 'Crispy Skin Salmon', channel: 'Chef Nick', whatItShows: 'Candidate for rendering fish skin until crisp without overcooking flesh.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-poaching-fish': [{ id: 'v-poaching-fish-1', youtubeId: '3Vvx0cQf718', title: 'How to Poach and Flavour Salmon | Gordon Ramsay', channel: 'Gordon Ramsay', whatItShows: 'Candidate for gentle fish poaching and flavouring liquid.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-curing': [{ id: 'v-curing-1', youtubeId: 'yyKHhUj0A6w', title: 'Salmon Gravlax - only 4 ingredients', channel: 'Andy Cooks', whatItShows: 'Candidate for curing salmon as gravlax.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-shellfish': [{ id: 'v-shellfish-1', youtubeId: '0CpMh5uFL_g', title: "Gordon Ramsay's Guide To Shellfish", channel: 'Gordon Ramsay', whatItShows: 'Candidate for selecting and cooking shellfish; review for the specific species taught.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-bird-breakdown': [{ id: 'v-bird-breakdown-1', youtubeId: 'nDIK8loUT1k', title: 'Super Quick Video Tips: How to Break Down a Chicken for Parts', channel: "America's Test Kitchen", whatItShows: 'Candidate for joint-by-joint whole-chicken breakdown.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-roasting-bird': [{ id: 'v-roasting-bird-1', youtubeId: 'LYoCKGUHVkU', title: 'How Chefs Roast Chicken (Perfect Every Time)', channel: 'Chef Billy Parisi', whatItShows: 'Candidate for roasting poultry and judging doneness.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pan-roasting': [{ id: 'v-pan-roasting-1', youtubeId: 'NTBRThwL-2c', title: "The Best Chicken Breast You'll Ever Make (Restaurant-Quality) | Epicurious 101", channel: 'Epicurious', whatItShows: 'Candidate for stovetop-to-oven pan-roasting.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-brining': [{ id: 'v-brining-1', youtubeId: 'jUnWB2Wguwg', title: 'How to Dry Brine Your Steak Like a Pro! Expert Tips from Tommy the Butcher', channel: 'Wise Guys BBQ', whatItShows: 'Candidate for dry-brining and its timing.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-confit': [{ id: 'v-confit-1', youtubeId: '2VldokYASaQ', title: 'Chicken Confit', channel: 'Chef Nick', whatItShows: 'Candidate for low-temperature fat cookery and confit handling.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-searing': [{ id: 'v-searing-1', youtubeId: 'Sm2Lrc4HEmc', title: 'How To Master The Maillard Reaction & Sear Meat Perfectly | Epicurious 101', channel: 'Epicurious', whatItShows: 'Candidate for dry surface, hot pan and Maillard browning.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-reverse-sear': [{ id: 'v-reverse-sear-1', youtubeId: 'xDhHIptokb4', title: 'The Ultimate Steak Hack | How to Nail the Reverse Sear', channel: 'ThatDudeCanCook', whatItShows: 'Candidate for low-heat cooking followed by a final hard sear.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-braising-meat': [{ id: 'v-braising-meat-1', youtubeId: 'rocRSfC-FVo', title: 'How to Braise Meat Like a Pro | Food Network', channel: 'Food Network', whatItShows: 'Candidate for searing, moist cooking and tender braised meat.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-grilling': [{ id: 'v-grilling-1', youtubeId: 'flUm_-Euy84', title: 'The Serious Eats Guide to Charcoal Grilling', channel: 'Serious Eats', whatItShows: 'Candidate for charcoal zones, heat management and grilling control.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-resting': [{ id: 'v-resting-1', youtubeId: 'pYA8H8KaLNg', title: "Proof Resting Doesn't Keep Meat Juicy", channel: 'Chris Young', whatItShows: 'Candidate for a scientific review of resting meat; cull if it conflicts with the course framing.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-doneness': [{ id: 'v-doneness-1', youtubeId: 'ntXthqtOFi0', title: 'MSVRG - FINGER TEST FOR CHECKING THE DONENESS OF STEAK', channel: 'Kimberly Sheldon', whatItShows: 'Candidate for using a finger test to judge steak doneness.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-shortcrust': [{ id: 'v-shortcrust-1', youtubeId: '1siW_wm9TnA', title: 'Gordon Ramsay - How to make shortcrust pastry', channel: 'drgnxNL', whatItShows: 'Candidate for rubbing/cutting fat into flour and resting shortcrust.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-choux': [{ id: 'v-choux-1', youtubeId: 'iCNhlUSNjVE', title: 'Mastering Choux Pastry | Michelin-Starred Adam Byatt', channel: 'Adam Byatt', whatItShows: 'Candidate for panade, egg incorporation and drying choux paste.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-lamination': [{ id: 'v-lamination-1', youtubeId: 'X28aJgQnfEc', title: 'Perfect Rough Puff Pastry Recipe', channel: 'Cravings Journal', whatItShows: 'Candidate for folding and rolling rough puff layers.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-sponge': [{ id: 'v-sponge-1', youtubeId: 'ghXNV_xjmt4', title: 'Fold Batter Like A Michelin Chef: The Secret To Fluffy Desserts 🍰', channel: 'Jess Wang Pastry', whatItShows: 'Candidate for folding aerated batter without losing volume.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-pastry-cream': [{ id: 'v-pastry-cream-1', youtubeId: 'PcOa_ZAx2nI', title: 'Pastry Cream Is So Delicious and Easy to Make! | Chef Jean-Pierre', channel: 'Chef Jean-Pierre', whatItShows: 'Candidate for tempering and cooking pastry cream.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-caramel': [{ id: 'v-caramel-1', youtubeId: 'vh9coP13zLM', title: '🍮 How to make Dry Caramel - The Right Way! 🔥', channel: 'ICCA - Dubai & Abu Dhabi', whatItShows: 'Candidate for dry caramel stages and safe handling.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-flavour-pairing': [{ id: 'v-flavour-pairing-1', youtubeId: 'VCuZzjF0Spw', title: 'Master the Art of Flavor Pairing: Tips from The Flavor Guy', channel: "Nature's Flavors", whatItShows: 'Candidate for thinking through flavour affinities.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-recipe-writing': [{ id: 'v-recipe-writing-1', youtubeId: 'm91FYdA7IuU', title: 'How to Write A Standardized Recipe', channel: 'MSDE TV', whatItShows: 'Candidate for the components and consistency of a standardised recipe.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-plating': [{ id: 'v-plating-1', youtubeId: 'T2leakA9Uo8', title: 'The 6 Rules of Plating Used in Restaurants | Epicurious 101', channel: 'Epicurious', whatItShows: 'Candidate for composition, balance and negative space on the plate.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-sauce-work': [{ id: 'v-sauce-work-1', youtubeId: 'CIVYlrzqZD8', title: '10 Ways to Plate Like a Chef', channel: 'Fallow', whatItShows: 'Candidate for placing sauce deliberately as part of plating; cull if too broad.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-garnish': [{ id: 'v-garnish-1', youtubeId: 'CIVYlrzqZD8', title: '10 Ways to Plate Like a Chef', channel: 'Fallow', whatItShows: 'Candidate for garnish choices in a plating workflow; cull if garnish logic is not explicit.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-haccp': [{ id: 'v-haccp-1', youtubeId: 'RUeVNCEDbCo', title: 'Four Golden Rules of food safety', channel: 'NSWFoodAuthority', whatItShows: 'Candidate for foundational food-safety controls; review against the course HACCP detail.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-yield-testing': [{ id: 'v-yield-testing-1', youtubeId: 'Af1YBj2-PwQ', title: 'Yield Percent In Food - Why Should You Care?', channel: 'Chef Tom Atkinson', whatItShows: 'Candidate for calculating and using food yield percentage.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-recipe-costing': [{ id: 'v-recipe-costing-1', youtubeId: 'QYT8asMeiyE', title: 'HOW TO CALCULATE RECIPE COSTING', channel: 'Cooking Techniques by Chef Francis', whatItShows: 'Candidate for calculating recipe cost from ingredients and quantities.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-portion-control': [{ id: 'v-portion-control-1', youtubeId: 'TdrFcHNqNKY', title: 'Restaurant Portion Control: Consistent Food Serving Sizes Explained', channel: 'Restaurant Association', whatItShows: 'Candidate for consistent restaurant serving sizes and portion control.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-menu-engineering': [{ id: 'v-menu-engineering-1', youtubeId: 'pT3_wgEas3g', title: 'How Chefs Create a Restaurant Menu That Works', channel: 'Fallow', whatItShows: 'Candidate for menu design; cull if it does not teach the course engineering model.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
  't-fifo': [{ id: 'v-fifo-1', youtubeId: '_tJ5lJhoCtE', title: 'Tuesday Tip: FIFO', channel: 'Chef Brenda, RDN', whatItShows: 'Candidate for first-in-first-out stock rotation.', status: 'candidate', addedAt: ROLLOUT_ADDED, notes: OEMBED_CANDIDATE_NOTE }],
}

export function videosFor(techniqueId: string): VideoRef[] {
  return (videosByTechnique[techniqueId] ?? []).filter((v) => v.status !== 'rejected' && v.status !== 'dead')
}

export function primaryVideo(techniqueId: string): VideoRef | undefined {
  return videosFor(techniqueId)[0]
}

/** Techniques that still have no clip — drives the research backlog. */
export function techniquesWithoutVideo(allTechniqueIds: string[]): string[] {
  return allTechniqueIds.filter((id) => videosFor(id).length === 0)
}

export const videoCoverage = {
  techniquesCovered: Object.keys(videosByTechnique).length,
  totalCandidates: Object.values(videosByTechnique).reduce((n, v) => n + v.length, 0),
}
