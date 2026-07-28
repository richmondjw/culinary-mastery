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

/** Ranked candidates per technique id. First entry is the preferred clip. */
export const videosByTechnique: Record<string, VideoRef[]> = {
  't-knife-grip': [
    {
      id: 'v-knife-grip-1',
      youtubeId: 'lrNNEq45a-8',
      title: 'Basic Knife Skills — How to "Pinch" and "Claw"',
      whatItShows: 'Both halves of the Module 1 grip lesson in one clip: pinch grip on the blade, claw on the guiding hand',
      status: 'candidate',
      addedAt: ADDED,
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
      status: 'candidate',
      addedAt: ADDED,
      notes: 'Check the stated dimensions against our 2 mm × 2 mm × 5 cm spec; US sources often quote 1/8 inch.',
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
      status: 'candidate',
      addedAt: ADDED,
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
      status: 'candidate',
      addedAt: ADDED,
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
      status: 'candidate',
      addedAt: ADDED,
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
      status: 'candidate',
      addedAt: ADDED,
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
      status: 'candidate',
      addedAt: ADDED,
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
      status: 'candidate',
      addedAt: ADDED,
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
