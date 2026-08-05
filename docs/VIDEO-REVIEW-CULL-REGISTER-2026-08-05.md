# SIZZLE video review / cull register — 2026-08-05

## Coverage snapshot

- 78/78 canonical technique IDs now have at least one video candidate in `src/data/videos.ts`.
- 94 total candidates: the 24 pre-existing Module 1 candidates plus 70 added in this rollout.
- 0 are marked `verified`; the candidate label is intentional and visible in the product.
- 0 gaps are being hidden. A clip should be removed and replaced with a self-shot reference if it fails the checks below.

## Evidence recorded

Every one of the 70 new IDs was obtained from a live YouTube search on 2026-08-05, then resolved through `youtube.com/oembed` (HTTP 200). This records a real, live ID together with its exact title and channel. It does **not** establish duration, Australia availability, age restriction, YouTube Data API `status.embeddable`, or a watched/content-method match. Accordingly all new entries carry the same `oEmbed-only` limitation in their visible candidate note.

## First cull queue

Watch and either promote, replace, or remove these first. They are live candidates, not endorsements:

| Technique | Candidate | Reason to cull first |
| --- | --- | --- |
| `t-white-stock` | `V23HlsUdbaM` | Weak channel attribution returned by oEmbed. |
| `t-brown-stock` | `bWhpw1KpcsM` | Short-form; unlikely to teach the complete stock method. |
| `t-clarification` | `KCnBWczbD08` | Short-form; may not show a complete egg-white raft. |
| `t-emulsification` | `wU5QzY9puKc` | Short-form; may not explain the principle sufficiently. |
| `t-potato-puree` | `ZottzAaSi2U` | Short-form. |
| `t-vinaigrette` | `Tg_YIHKQq6M` | Need to check ratio, salt dissolution, and tasting. |
| `t-resting` | `pYA8H8KaLNg` | May challenge the course's existing resting framing. |
| `t-sauce-work`, `t-garnish` | `CIVYlrzqZD8` | Shared plating clip may be too broad for either specific technique. |
| `t-menu-engineering` | `pT3_wgEas3g` | Need to check it teaches the course's economics model, not only menu design. |

## Promotion checklist

For each candidate retained: use YouTube Data API for public/embeddable/region-AU/duration checks, watch the relevant technique segment, then set `status: 'verified'`, add `verifiedAt`, and replace the provisional note with observed method details. When no candidate demonstrates the course's actual method cleanly, remove it and film the SIZZLE method rather than retaining a merely related clip.
