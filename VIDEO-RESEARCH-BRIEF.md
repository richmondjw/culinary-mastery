# Video Research Brief — Culinary Mastery

**Purpose:** commission a tight, verified list of YouTube videos to attach to a 19-module cooking course.
**Audience:** a researcher or AI agent with live YouTube access (ideally the YouTube Data API).
**Deliverable:** a ranked, verified video per technique, in the JSON schema at the end of this document.

---

## 1. What the app is

**Culinary Mastery** is a self-paced course that takes a serious home cook from fundamentals to designing, costing and executing a profitable restaurant menu. It is a local-first React web app — no accounts, no server; progress lives in the browser.

| | |
|---|---|
| Modules | 19, across 4 stages |
| Lessons | 77 |
| Recipes | 73 |
| **Techniques** | **78 — these are the video slots** |
| Demonstration blocks | 88 (phase 2 slots) |
| Audience | One serious home cook, working toward professional-level competence |
| Locale | **Australian English, metric, °C, AUD, GST 10%** |

**Stage 1 — Foundations:** knife skills · seasoning · eggs · stocks · sauces · vegetables · grains & potatoes · pasta
**Stage 2 — Proteins & Pastry:** fish & shellfish · poultry · meat · pastry
**Stage 3 — The Craft:** flavour development · plating · menu design
**Stage 4 — Business of Food:** food safety · sourcing & yield · costing & profitability · capstone

### Teaching philosophy — this matters for video selection

1. **Technique over recipes.** The course teaches *why* and *how*, not "follow along". Prefer videos that explain mechanism, not recipe vlogs.
2. **Precision.** The curriculum states real numbers — 2 mm julienne, 82–84 °C for nappe, 80% skin-side for fish, 1% salt for dry brining. A video that contradicts our numbers is worse than no video.
3. **Deliberate repetition.** Foundations are re-drilled across modules.
4. **Calm, professional, non-theatrical.** No shouting, no "you won't BELIEVE", no 3-minute sponsor reads.

---

## 2. Where the videos go

| Placement | Need |
|---|---|
| **Technique library** (primary) | One canonical clip per technique — the reference layer |
| **Lesson "Watch first" block** | Same clip, shown above the written steps: watch → read → do |
| **Recipe cook mode** | Occasional step-level clip; must be short |
| **Assessment exemplar** | "This is what a pass looks like" — calibration for self-scoring |

The app embeds via `youtube-nocookie.com` and displays the channel name as attribution. **Embed only — nothing is downloaded or re-hosted.** Therefore any video that blocks embedding is unusable, however good it is.

---

## 3. Selection criteria

**Required**
- Clearly demonstrates the *specific* technique named — not a general "knife skills" montage where it appears for 4 seconds
- Camera angle actually shows the hands/pan/blade at the moment that matters
- Method consistent with the technique spec in §5 (flag divergences rather than silently accepting)
- **Embeddable** (`status.embeddable = true` via API) and **public**
- **Viewable in Australia** (check `contentDetails.regionRestriction`)
- Audio/visual quality good enough to learn from

**Strongly preferred**
- 2–12 minutes. Under 60 seconds rarely teaches; over 20 minutes loses people
- Credible source: culinary school, professional chef, established technique channel, or a rigorous food-science source
- Stable channel with a long back-catalogue — less likely to vanish
- Minimal sponsorship/intro padding; if unavoidable, supply a `startSec` that skips it

**Reject**
- Contradicts the curriculum's stated method or numbers
- Recipe vlog where technique is incidental
- Shorts/TikTok reposts for anything requiring detail (acceptable only for a quick visual cue)
- Auto-generated/AI-narrated slideshow content
- Videos whose top comments dispute the technique's correctness

---

## 4. Verification requirements — read this twice

**The single biggest failure mode is a fabricated video ID.** A hallucinated 11-character ID looks completely plausible and is worthless. Therefore:

> **Never output a video ID you have not actually retrieved from a live search or API call.**

For every video returned, confirm and record:

| Check | Method |
|---|---|
| Video exists and is public | `GET /youtube/v3/videos?id=…&part=status,snippet,contentDetails` |
| **Embeddable** | `status.embeddable === true` |
| Not age-restricted | `contentDetails.contentRating` |
| Available in AU | `contentDetails.regionRestriction` absent, or includes AU |
| Duration | `contentDetails.duration` (ISO 8601) |
| Channel + title | `snippet.channelTitle`, `snippet.title` |
| **Content actually matches** | Watch it, or read the transcript. State in one line what you saw. |

If the API is unavailable, `https://www.youtube.com/oembed?url=…&format=json` confirms existence + title + channel (200 = live, 404 = gone, 401 = embedding blocked) — but does **not** confirm content correctness. Say so explicitly if you used only oEmbed.

**Mark confidence honestly.** A candidate found by title match but unwatched must be labelled as such. We would far rather have 40 verified videos and 38 gaps than 78 unverified guesses.

---

## 5. The 78 technique specs

Each entry gives the technique `id` (use verbatim — it is the app's key), the name, our one-line definition, and the key points the video must actually show.

### Knife & prep

**`t-knife-grip` — Knife grip & guiding hand**  
Pinch grip on the blade, claw on the guiding hand — control and safety come from the same posture.  
Must show: Pinch the blade between thumb and forefinger; the handle rests in the remaining fingers. / Guiding hand curls into a claw; knuckles ride the flat of the blade. / The knife rocks or slices forward — it never lifts higher than the knuckles beside it.

**`t-julienne` — Julienne**  
Matchsticks, classically 2 mm × 2 mm × 5 cm. The gateway cut — brunoise is julienne turned sideways.  
Must show: Square the vegetable first; flat faces make stable, even slices. / Slice into 2 mm planks, stack no more than three, cut into 2 mm sticks. / Consistency beats speed — even cuts cook evenly.

**`t-brunoise` — Brunoise**  
2 mm dice cut from julienne. The test cut of professional kitchens.  
Must show: Gather julienne sticks parallel, cut crosswise at the same 2 mm interval. / Keep the tip of the knife on the board; use a forward slice, not a chop. / Fine brunoise (1 mm) is the same motion with more patience.

**`t-chiffonade` — Chiffonade**  
Ribbon-cut leaves — stack, roll, slice thin. For basil, mint, silverbeet and anything leafy.  
Must show: Stack leaves largest to smallest, roll into a tight cigar. / Slice across the roll with a single forward stroke per cut. / Cut just before use; bruised herbs blacken fast.

**`t-dice` — Dice (small, medium, large)**  
Uniform cubes: 6 mm (small), 12 mm (medium), 20 mm (large). The workhorse cuts of prep.  
Must show: Planks → sticks → cubes, holding the same dimension at each pass. / Match dice size to cooking time: small for quick sautés, large for braises. / Onion dice is its own method: radial + horizontal cuts, root end intact.

**`t-mince` — Mincing garlic, herbs & aromatics**  
Fine, even mincing without bruising — rock the blade, gather, repeat.  
Must show: Crush garlic first to loosen the skin, then rock-mince with fingertips on the spine. / Salt acts as an abrasive for garlic paste under the flat of the blade. / Herbs: dry leaves and a sharp blade, or you make wet green mush.

**`t-sharpening` — Sharpening & honing**  
A whetstone reshapes the edge; a honing steel realigns it. Sharp is safe.  
Must show: Hone before each session: 15–20°, light strokes, alternating sides. / Stone monthly: 1000 grit to raise a burr along the full edge, 3000+ to polish. / Test on paper or a tomato — a sharp knife bites without pressure.

**`t-mise-en-place` — Mise en place**  
Everything prepped, measured and positioned before heat. The discipline that makes cooking calm.  
Must show: Read the recipe twice, prep every ingredient into containers before the pan goes on. / Arrange in order of use, left to right; bin and towel within reach. / Clean as you go — a reset board between tasks is part of the method.

### Seasoning & palate

**`t-seasoning-salt` — Salting: when and how much**  
Salt in layers throughout cooking, not in one rescue at the end. Salt early penetrates; salt late seasons the surface.  
Must show: Season at every transformation: raw protein, sweating aromatics, simmering liquid, final adjust. / Pasta/blanching water: ~1% salt (10 g per litre). Meat: ~1% of weight, ahead of time. / Finishing salt is texture as much as taste — flaky crystals on top, not stirred in.

**`t-acid-balance` — Balancing with acid**  
When a dish tastes flat but salty enough, it wants acid. Vinegar, citrus, wine, pickles — brightness is a seasoning.  
Must show: Add acid at the end; heat drives off volatile brightness. / Match the acid to the dish: lemon for butter, vinegar for fat, lime for chilli. / A few drops at a time — the jump from flat to vivid is sudden.

**`t-tasting` — Structured tasting**  
Taste with a question: salt? acid? fat? sweet? bitter? texture? Taste at every stage, on a clean spoon.  
Must show: Ask one dimension at a time — "does this need salt" is answerable; "is this good" is not. / Taste components separately and combined; the sauce must be right on the meat, not on the spoon. / Cool a spoonful first — heat masks both salt and sweetness.

**`t-umami-layering` — Umami layering**  
Stack glutamate sources — tomato, parmesan, mushrooms, fish sauce, miso — for depth that salt alone cannot give.  
Must show: Umami compounds multiply, not add: pair glutamates (tomato) with nucleotides (dried mushroom, fish). / A teaspoon of fish sauce or soy deepens a braise without announcing itself. / Browning creates umami — fond is flavour capital.

### Eggs

**`t-poaching-eggs` — Poaching eggs**  
Fresh eggs, barely-moving water, no tornado required. The white sets around the yolk in 3 minutes.  
Must show: Freshest possible eggs; strain away loose white in a slotted spoon. / Water at a shiver (90–95°C) with a splash of vinegar; slide eggs in from a cup. / 3 minutes for a set white and liquid yolk; hold in iced water and reheat 30 seconds to serve.

**`t-french-omelette` — French omelette**  
Pale, tender, baveuse centre, rolled seam-down. The classic examination of pan control.  
Must show: Non-stick pan, medium heat, butter foaming not browning. / Stir constantly with a fork or spatula until small curds form, then stop and let the base set. / Roll from the far edge; the residual heat finishes the centre.

**`t-custard` — Custards & crème anglaise**  
Eggs thicken dairy between 75–84°C. Above that they scramble. Everything else is detail.  
Must show: Temper: whisk hot dairy into yolks gradually before returning to heat. / Cook to 82–84°C, stirring — nappe stage coats the back of a spoon. / Strain immediately into a cold container to stop carryover.

**`t-mayonnaise` — Mayonnaise (first emulsion)**  
Yolk, acid, mustard, then oil in a thread. One yolk holds 250 ml of oil if you are patient.  
Must show: Everything at room temperature; whisk yolk + mustard + acid first. / Oil drop by drop until it thickens, then a thin stream. / Split? Start a fresh yolk and whisk the broken sauce into it.

### Stocks & soups

**`t-white-stock` — White chicken stock**  
Raw bones, cold water, gentle simmer, skim. Clean flavour and body from collagen, not from boiling.  
Must show: Start bones in cold water; bring up slowly and skim the raft of protein scum. / Never boil — agitation emulsifies fat and clouds the stock. / 4–6 hours for chicken; add mirepoix and aromatics for the final hour only.

**`t-brown-stock` — Brown stock & roasted bones**  
Roast bones and mirepoix deeply, deglaze the tray, then simmer. Colour and caramel depth come from the oven.  
Must show: Roast bones at 210°C until deep mahogany; roast or pincé the mirepoix and tomato paste. / Deglaze the roasting tray — that fond is the point. / 6–8 hours, skimming; strain, then reduce to concentrate.

**`t-reduction` — Reduction**  
Evaporating water concentrates flavour and body. Season after reducing, never before.  
Must show: Wide pan, hard simmer, skim as it reduces. / A sauce reduced by half doubles its salt — season at the end. / Glace: stock reduced 8–10× to a syrup that sets solid when cold.

**`t-clarification` — Clarification & consommé**  
An egg-white raft traps particulate as it rises, leaving crystal-clear, intensified broth.  
Must show: Whisk egg whites, minced lean meat and aromatics into cold stock. / Heat gently without stirring once the raft forms; ladle through it at the end. / The raft also strips flavour — the meat in the raft pays it back.

### Sauces

**`t-roux` — Roux**  
Equal parts flour and butter, cooked to white, blond or brown. The starch thickener of the mother sauces.  
Must show: Cook at least 2 minutes to lose the raw-flour taste. / Darker roux = more flavour, less thickening power. / Cold liquid into hot roux (or vice versa) prevents lumps; whisk as you combine.

**`t-bechamel` — Béchamel**  
Milk thickened with white roux — the base of mornay, gratins and lasagne.  
Must show: Infuse the milk (onion, clove, bay) for a béchamel worth eating. / Simmer 10+ minutes after thickening; undercooked béchamel tastes of flour. / Nappe consistency: coats a spoon, line holds when you draw a finger through.

**`t-veloute` — Velouté & derivative sauces**  
White stock thickened with blond roux; finish with cream, lemon or reduction for the classic derivatives.  
Must show: The velouté is only as good as the stock underneath it. / Simmer and skim — the skin that forms carries impurities. / Finish off the heat: cream, butter, lemon, herbs.

**`t-tomato-sauce` — Tomato sauce**  
From 20-minute fresh sugo to long-cooked ragù base — sweetness from slow-cooked aromatics, acidity managed not masked.  
Must show: Sweat onion/garlic without colour for a bright sauce; brown them for depth. / Tinned whole tomatoes, crushed by hand, beat most fresh ones. / Balance at the end: salt first, then a pinch of sugar only if genuinely sharp.

**`t-hollandaise` — Hollandaise & warm emulsions**  
Yolks whisked to sabayon over gentle heat, then butter mounted in. Rich, unstable and worth mastering.  
Must show: Sabayon first: yolks + water/reduction whisked to ribbon over a bain-marie. / Butter in slowly, off and on the heat — the sauce should never exceed ~65°C. / Split? Whisk the broken sauce into a fresh sabayon or a spoon of hot water.

**`t-pan-sauce` — Pan sauces & deglazing**  
Fond + liquid + reduction + butter. A sauce built in the pan the protein just left, in four minutes.  
Must show: Pour off excess fat, keep the fond; sweat a minced shallot in what remains. / Deglaze with wine or stock, scraping; reduce until syrupy. / Mount cold butter off the heat, swirling; season and add resting juices.

**`t-beurre-blanc` — Beurre blanc**  
A butter emulsion held in a wine-shallot reduction — no yolks, all technique.  
Must show: Reduce wine + vinegar + shallots to 2 tablespoons of syrup. / Whisk in cold butter cubes over low heat, a few at a time. / Hold warm, never hot; it splits above ~58°C and solidifies cold.

**`t-vinaigrette` — Vinaigrettes & cold emulsions**  
3:1 oil to acid, emulsified with mustard or shallot. A seasoning system, not just a salad dressing.  
Must show: Dissolve salt in the acid first — it will not dissolve in oil. / Whisk oil into the acid (with mustard) for a stable emulsion; or shake in a jar. / Taste on a leaf of what it will dress, not on a spoon.

**`t-emulsification` — Emulsification principles**  
Fat and water made to hold hands: droplets, an emulsifier, and agitation. Every creamy sauce is one of these.  
Must show: Emulsifiers (lecithin in yolk, mustard, casein in butter) coat fat droplets. / Add the dispersed phase slowly at the start — most emulsions break from impatience. / Temperature discipline: each emulsion has a working band; know it.

### Vegetables

**`t-blanching` — Blanch & refresh**  
Heavily salted rolling water, brief cook, iced water. Colour, texture and seasoning locked in.  
Must show: Water like the sea (2–3% salt), at a hard boil, in a big pot. / Cook until just tender — taste a piece; the ice bath stops it exactly there. / Drain hard and dry before storage or reheating in butter.

**`t-roasting-veg` — Roasting vegetables**  
High heat, space on the tray, enough fat. Browning is flavour; steam is the enemy.  
Must show: 200–220°C; preheat the tray for cut-side-down caramelisation. / One layer, gaps between pieces; crowding steams. / Salt before, acid and herbs after.

**`t-sauteing` — Sautéing & pan control**  
Hot pan, small batches, movement. The technique that teaches heat management.  
Must show: Pan hot before fat, fat hot before food. / Batch size: the pan must recover heat within seconds of loading. / Listen — a healthy sizzle is your thermometer.

**`t-braising-veg` — Braising & glazing vegetables**  
Cooked slowly in a measured amount of liquid and fat until tender, the liquid reduced to a glaze.  
Must show: Liquid one-third up the vegetable, butter, salt, paper cartouche. / By the time the vegetable is tender the liquid should be a glaze — that is the measure. / Glacé à blanc (no colour) or à brun (light caramel) — choose deliberately.

**`t-puree` — Purées**  
Silk-smooth vegetable purées: cook soft, blend hot, enrich, pass through a sieve.  
Must show: Cook the vegetable fully — a blender cannot fix undercooked. / Blend hot with just enough liquid to move; add butter/cream at the end. / Pass through a fine sieve (tamis) for restaurant texture.

**`t-pickling` — Quick pickling**  
Hot brine (vinegar, water, sugar, salt) over crisp vegetables. Acidity and crunch on demand.  
Must show: Baseline brine 3:2:1 — vinegar : water : sugar, plus 1 tbsp salt per 500 ml. / Pour hot over thin-cut vegetables for same-day pickles. / A pickled element lifts rich plates — plan one into fatty dishes.

### Grains & potatoes

**`t-absorption` — Absorption method**  
Measured liquid, tight lid, low heat, rest. Rice and grains cooked by ratio, not luck.  
Must show: Rinse rice until the water runs clear; ratio ~1:1.5 rice:water for long grain. / Bring to a boil, lid on, lowest heat 12 min, rest 10 off the heat. / Never stir mid-cook — you release starch and crush the steam channels.

**`t-pilaf` — Pilaf method**  
Grains toasted in fat with aromatics, then cooked in measured stock. Separate, savoury grains.  
Must show: Sweat onion in butter, toast the rice until translucent at the edges. / Hot stock, one boil, then lid — stovetop low or 180°C oven 15 min. / Fork, never stir, after cooking.

**`t-risotto` — Risotto method**  
Starch agitation: hot stock in stages, constant movement, mantecatura of butter and parmesan.  
Must show: Toast the rice; deglaze with wine; add hot stock a ladle at a time. / 18 minutes of movement releases the starch that makes it creamy — cream is cheating.

**`t-potato-puree` — Potato purée / mash**  
Floury potatoes, ricer, hot milk, cold butter, and the discipline to never use a blender.  
Must show: Start in cold salted water; simmer gently until a knife slides through. / Rice while hot; dry the purée over low heat before enriching. / Beat in butter first, then hot milk — up to 25% butter for pommes purée.

**`t-polenta` — Polenta & cooked grains**  
Coarse cornmeal whisked into simmering liquid, cooked long and slow, finished rich.  
Must show: Rain the polenta into the liquid, whisking — 5:1 liquid:polenta. / 45+ minutes for coarse polenta; taste for graininess, not time. / Finish with butter and cheese; leftovers set for grilling.

### Pasta

**`t-pasta-dough` — Fresh egg pasta dough**  
100 g flour to 1 egg. Knead to silk, rest fully, then it does what you want.  
Must show: Knead 8–10 minutes until smooth and springy; it should bounce back from a thumb press. / Rest 30+ minutes wrapped, at room temperature — gluten relaxation is not optional. / Adjust by feel: tacky means more flour, crumbly means a wet hand.

**`t-rolling-laminating` — Rolling & laminating pasta**  
Progressive rolling through the widest to thinnest settings, folding early passes for strength.  
Must show: Laminate: roll, fold in thirds, repeat 3–4 times on the widest setting. / Then thin one setting at a time — jumping settings tears the sheet. / Flour lightly, keep sheets covered; they dry fast.

**`t-filled-pasta` — Filled pasta**  
Thin sheets, firm filling, no air pockets, sealed edges. Ravioli, tortellini and their relatives.  
Must show: Filling should hold shape on a spoon — drain ricotta, reduce purées. / Press air out from the filling outwards before sealing; air pockets burst in the pot. / Cook in water at a gentle boil — a hard boil batters them open.

**`t-pasta-emulsion` — Marrying pasta & sauce**  
Finish pasta in the sauce with starchy cooking water — the emulsion that makes it cling.  
Must show: Undercook pasta by 1–2 minutes; it finishes in the sauce. / Starchy water + fat, tossed hard, emulsifies into a coating sauce. / Sauce quantity: coat, not drown — the pasta is the dish.

### Fish & shellfish

**`t-filleting-round` — Filleting round fish**  
Head-to-tail cuts along the backbone, riding the frame. Two fillets, a frame for fumet, no waste.  
Must show: Sharp flexible knife; cut behind the head, then long strokes along the spine. / Let the bones guide the blade — you should hear the tick of the rib cage. / Pin-bone with tweezers against the grain; keep the frame for stock.

**`t-filleting-flat` — Filleting flat fish**  
Four fillets off the frame, working from the centre line outward.  
Must show: Cut down the lateral line to the bone, then sweep outward with the blade flat on the frame. / Flat fish skin pulls off in one motion with a firm grip and a dry towel. / The frames make the cleanest, sweetest fumet.

**`t-skin-searing` — Crisp-skin fish cookery**  
Dry skin, moderate-hot pan, pressure at the start, patience until the skin releases. 80% skin-side.  
Must show: Dry the skin thoroughly — moisture is the enemy of crisp. / Press gently for the first 30 seconds so the fillet cannot cup. / Cook 80% on the skin, flip for seconds, rest. Skin should crackle audibly.

**`t-poaching-fish` — Poaching & gentle fish cookery**  
Fish held in barely-trembling liquid (or butter) until just set. Silk texture that searing cannot give.  
Must show: Court-bouillon or seasoned oil/butter at 55–65°C. / Fish is done at 45–50°C core — translucent turning opaque. / Carryover is real: pull it just before done.

**`t-curing` — Curing & gravlax**  
Salt and sugar draw moisture and firm the flesh — flavour and preservation without heat.  
Must show: Equal salt:sugar cure, ~24–48 hours for a side of salmon, weighted. / Rinse, dry, rest uncovered — the pellicle improves texture. / Slice thin on the bias, blade nearly flat.

**`t-shellfish` — Shellfish cookery**  
Mussels, prawns, squid: seconds matter. High heat fast or long braise slow — nothing between.  
Must show: Mussels: hot pan, wine, lid — done as they open; discard any that stay shut. / Prawns: 1–2 minutes; opaque and just curled. C-shape good, O-shape overcooked. / Squid: 45 seconds hard heat, or 45 minutes braised. The middle is rubber.

### Poultry

**`t-bird-breakdown` — Whole bird breakdown**  
Eight pieces plus a carcass for stock, in under five minutes with practice.  
Must show: Let the joints show you where to cut — pop the hip and shoulder joints first. / Keep the blade against the carcass; the frame keeps the meat. / Practice is cheap: a whole bird costs less per kg than any of its parts.

**`t-roasting-bird` — Roasting poultry**  
Dry skin, seasoned ahead, high-then-moderate heat, rested properly. Juicy breast and done legs together.  
Must show: Salt 12–24 hours ahead, uncovered in the fridge — dry brining is the single biggest upgrade. / Breast is done at 60–63°C, legs at 70°C+; shield or position accordingly. / Rest 15–20 minutes; the juices redistribute or they end up on the board.

**`t-pan-roasting` — Pan-roasting**  
Sear on the stove, finish in the oven, baste with foaming butter. The restaurant method for portions.  
Must show: Sear presentation side first in an oven-proof pan. / Finish at 180–200°C to target temperature; baste with butter, garlic, thyme. / Rest on a rack, sauce from the fond while it rests.

**`t-brining` — Brining & dry-brining**  
Salt ahead of time — wet or dry — for seasoning depth and moisture retention.  
Must show: Dry brine: 1% salt by weight, 12–24 h uncovered in the fridge. / Wet brine (5–6% salt) for lean cuts prone to drying; rinse and dry well. / Never brine pre-salted (kosher/injected) products twice.

**`t-confit` — Confit**  
Salted, then cooked slowly submerged in fat. Preservation turned luxury texture.  
Must show: Cure with salt and aromatics 12–24 h; rinse and dry. / Cook submerged in fat at 85–95°C until spoon-tender (2–3 h for duck legs). / Crisp skin-side in a pan to serve; the fat re-uses for potatoes.

### Meat

**`t-searing` — Searing & the Maillard reaction**  
Dry surface + high heat + time = crust. Browning is flavour chemistry, not "sealing in juices".  
Must show: Dry the surface; moisture must boil off before browning begins (Maillard starts ~140°C). / Heavy pan, thin high-smoke-point oil, do not move the meat until it releases. / Sear hard, cook gentle: crust first, then bring the core to temperature.

**`t-reverse-sear` — Reverse sear & low-heat roasting**  
Cook the core gently to just-under, then blast the crust. Edge-to-edge doneness for thick cuts.  
Must show: Low oven (100–120°C) to 8–10°C under target core temperature. / Rest briefly, then sear in a screaming pan or hottest oven for the crust. / Best for anything over 4 cm thick; thin steaks just sear hard once.

**`t-braising-meat` — Braising meat**  
Tough, collagen-rich cuts seared then cooked low and slow in liquid until spoon-tender.  
Must show: Brown the meat and the mirepoix hard — the braise inherits that flavour. / Liquid halfway up, lid or cartouche, 150–160°C oven, 2.5–4 hours. / Done when a fork twists in freely; better the next day; always rest in the liquid.

**`t-grilling` — Grilling & fire management**  
Two zones, clean grates, and the confidence to move things. Char is seasoning; fire is a hazard to manage.  
Must show: Build a hot zone and a safe zone; cook between them. / Oil the food, not the grate; move at flare-ups. / Rest off the grill; slice across the grain.

**`t-resting` — Resting meat**  
Rest half the cooking time (steaks) or 15–30 min (roasts). Carryover cooking is part of the recipe.  
Must show: Core temperature rises 3–8°C during rest — pull early. / Rest on a rack, loosely covered; a sealed wrap steams the crust away. / Resting juices belong in the sauce.

**`t-doneness` — Judging doneness**  
A probe thermometer is the professional standard; touch and visual cues are the backup skills.  
Must show: Beef/lamb: 50–52°C rare, 55–57 medium-rare, 60–63 medium (before carryover). / Probe the centre of the thickest part, away from bone. / Learn the touch test alongside the probe, one cut at a time.

### Pastry

**`t-shortcrust` — Shortcrust & sweet paste**  
Fat cut into flour, minimal water, minimal handling, full chilling. Tenderness is the absence of gluten.  
Must show: Cold butter, cold hands, food processor or fingertips — stop at breadcrumb stage. / Rest 30+ min before rolling, and chill again before baking. / Blind-bake until the base is genuinely coloured; pale pastry is raw pastry.

**`t-choux` — Choux paste**  
A cooked flour panade enriched with eggs — steam-puffed shells for éclairs, profiteroles and gougères.  
Must show: Cook the panade until it films the pan bottom and smells nutty. / Beat in eggs gradually to a dropping consistency — a "V" falls from the spatula. / Bake hot then moderate; never open the oven before they are set.

**`t-lamination` — Lamination basics (rough puff)**  
Alternating layers of dough and butter that steam apart in the oven. Rough puff gives 80% of the result for 20% of the effort.  
Must show: Everything cold, always — rest in the fridge between folds. / Rough puff: cubes of butter left visible, 4 letter-folds. / Visible butter streaks in the raw dough = layers in the bake.

**`t-sponge` — Sponges & cake batters**  
Aeration methods — whisked, creamed, melted — and why baking is weighing, not improvising.  
Must show: Weigh everything; baking ratios are chemistry. / Genoise: whole eggs + sugar to ribbon stage; fold flour without deflating. / Done when the sponge springs back and edges pull from the tin.

**`t-pastry-cream` — Pastry cream & dessert bases**  
Crème pâtissière: a starch-stabilised custard boiled to thickness — the filling that anchors classic pastry.  
Must show: Unlike anglaise, pastry cream must boil — the starch needs it, and it protects the yolks. / Whisk constantly; it thickens suddenly and burns quickly. / Press film on the surface and chill fast; beat smooth before using.

**`t-caramel` — Caramel & sugar work**  
Dry or wet caramel from pale gold to deep amber — controlled burning, safely handled.  
Must show: Wet caramel: no stirring after the boil, swirl only; brush down crystals. / Colour is flavour: pale = sweet, amber = complex, dark = bitter. Pull early — it keeps cooking. / Add cream/butter off the heat, in stages; it spits violently.

### The craft

**`t-flavour-pairing` — Flavour pairing & affinities**  
Building combinations from classic affinities, shared aroma compounds and structural balance.  
Must show: Start from proven affinities (tomato-basil, lamb-anchovy, pork-apple) and vary one element. / Every dish needs: richness, acid, salt, texture contrast and something fresh. / Two stars per plate maximum — everything else supports.

**`t-recipe-writing` — Standardised recipe writing**  
A recipe another cook can execute without you: weights, temperatures, times, critical points, plating spec.  
Must show: Weights in grams, temperatures in °C, pan sizes stated. / Flag critical control points: what fails if rushed, what can wait. / Version and date every iteration; note what changed and why.

**`t-plating` — Plating & composition**  
Focal point, negative space, height, odd numbers, sauce placed with intent. The plate frames the food.  
Must show: Choose the focal point first; build around it, off-centre. / Leave 30%+ of the plate empty; crowding reads as chaos. / Height and overlap create depth; flat plates read as cafeteria.

**`t-sauce-work` — Sauce work on the plate**  
Pools, swipes, dots and broken sauces — applied deliberately, never drizzled at random.  
Must show: Sauce under the protein keeps crusts crisp. / One confident swipe beats ten hesitant dots. / Wipe the rim. Always.

**`t-garnish` — Garnish logic**  
Everything on the plate must be edible and must earn its place — flavour first, beauty second.  
Must show: A garnish must add flavour, texture or temperature contrast — not just colour. / Dress leaves and herbs; naked garnish tastes like decoration. / If it does not make the dish taste better, leave it off.

### Business

**`t-haccp` — HACCP & food-safety controls**  
Hazard analysis and critical control points: identify where food can become unsafe, control it, verify it.  
Must show: Danger zone 5–60°C: minimise time in it, log anything held in it. / Separate raw and ready-to-eat at every step: boards, storage shelves, cloths. / Cool cooked food fast (60→21°C in 2 h, 21→5°C in 4 h); label and date everything.

**`t-yield-testing` — Yield testing (AP vs EP)**  
As-purchased weight vs edible-portion weight. Yield % is the truth behind every ingredient cost.  
Must show: Yield % = EP weight ÷ AP weight × 100. Weigh it yourself; do not trust tables blindly. / True cost per kg = AP price ÷ yield %. A $30/kg fish at 45% yield costs $66/kg on the plate. / Track where the loss goes — trim used elsewhere is not waste.

**`t-recipe-costing` — Recipe costing**  
Every ingredient priced from supplier packs, yield-adjusted, summed, Q-factored and divided by portions.  
Must show: Cost at EP: pack price → unit cost → used quantity → ÷ yield %. / Q-factor 3–5% covers oil, salt, garnish and everything you never weigh. / Re-cost quarterly or when any key ingredient moves 10%+.

**`t-portion-control` — Portion control**  
Standard portions, weighed and specified, are where food cost is won or lost daily.  
Must show: Specify portions in grams on the recipe card; use scales, scoops and ladles by number. / A 10% over-portion on protein can erase the entire net margin of a dish. / Audit by weighing five plated portions unannounced.

**`t-menu-engineering` — Menu engineering**  
Classify dishes by GP dollars and popularity — stars, plowhorses, puzzles, dogs — and act on each.  
Must show: Analyse GP dollars per dish, not GP % — you bank dollars, not percentages. / Stars: protect and feature. Plowhorses: raise price or cut cost. Puzzles: reposition. Dogs: remove. / Menu position matters: eyes go first to the top-right and boxed items.

**`t-fifo` — FIFO, storage & inventory**  
First in, first out; labelled, dated, par-levelled stock. Inventory discipline is invisible profit.  
Must show: New stock goes behind old, everywhere, every time. / Par levels per ingredient: enough to service, little enough to stay fresh. / Weekly stocktake at consistent time; usage = opening + purchases − closing.

---

## 6. Required output format

Return **JSON**, one object per technique, 2–3 ranked candidates each (rank 1 = best). Use our `id` verbatim as the key.

```json
{
  "t-julienne": [
    {
      "rank": 1,
      "youtubeId": "gf_CQsogRQo",
      "url": "https://www.youtube.com/watch?v=gf_CQsogRQo",
      "title": "How to Julienne Carrots — Epicurious Essentials",
      "channel": "Epicurious",
      "durationSec": 143,
      "publishedAt": "2015-03-11",
      "startSec": 0,
      "whatItShows": "Squares the carrot, cuts 2mm planks, stacks, then even matchsticks. Overhead angle throughout.",
      "verified": {
        "method": "youtube-data-api + watched",
        "exists": true,
        "embeddable": true,
        "regionAU": true,
        "checkedAt": "2026-07-28"
      },
      "matchesOurMethod": true,
      "notes": "States 1/8 inch rather than our 2mm — equivalent in practice, worth a caption note."
    }
  ]
}
```

**Field rules**
- `youtubeId` — 11 chars, from a real API/search response, never invented
- `whatItShows` — what you *observed*, in our vocabulary. Not a rephrased title.
- `matchesOurMethod` — `false` is a useful answer; explain in `notes`
- `verified.method` — one of `youtube-data-api + watched`, `youtube-data-api only`, `oembed only`, `search only (UNVERIFIED)`
- Omit a technique entirely rather than padding it with a weak match. **Gaps are acceptable; wrong videos are not.**

---

## 7. Priority order

1. **Module 1 — Knife & prep (8 techniques).** Highest value: pure visual skill, and the pilot the app already ships.
2. **Stage 1 remainder** — eggs, stocks, sauces, vegetables, grains, pasta (32)
3. **Stage 2** — fish, poultry, meat, pastry (23)
4. **Stage 3–4** — craft and business (17). Expect thinner pickings; institutional/hospitality-training sources work better here than chef channels.

A shortlist of unverified candidates already exists in `src/data/videos.ts` for the 8 knife techniques, every ID traced to a search result but **none watched**. Treat these as a starting point to verify, correct or replace — not as answers.

---

## 8. Also useful

- Where **no good third-party video exists**, say so plainly and recommend "film your own". A self-shot clip of the actual learner's technique is often more useful than a mediocre stock one.
- Note any technique where the best available content sits **behind a paywall** (MasterClass, Rouxbe, ChefSteps) — worth knowing even if unusable.
- Flag any video that is excellent but **not embeddable** — we can still link out to it.
