# Velicia — Character Design Specification

**Status:** Authoritative. These rules apply to all concept art, 3D models,
character descriptions, rigs and animations for Velicia. Where any older note,
prompt or asset conflicts with this document, this document wins.

**Art direction:** Stylised 3D fantasy, built for an Android open-world RPG.
All designs are original to Velicia and must not copy protected characters or
distinctive designs from existing franchises.

Machine-readable version: [`../data/peoples.json`](../data/peoples.json).
Asset review checklist: [`ASSET_REDESIGN_CHECKLIST.md`](ASSET_REDESIGN_CHECKLIST.md).

---

## Silhouette summary

Each people must be recognisable from a distance by silhouette alone.

| People | Height (approx.) | Build | Silhouette read | Signature weapon |
|---|---|---|---|---|
| Humans (reference) | 1.75 m / 5'9" | Average | Baseline | Varied |
| Amir | ~1.80 m / 5'11" | Lean, athletic | Slim upright figure + long trailing tail + spear line | Spear |
| Burrok | ~2.75 m / 9' | Massive, broad | Huge wedge/block, heavy shoulders, oversized axe or fists | Bare hands, great axe |
| Gouran | ~1.30 m / 4'3" | Short, stocky | Compact square block, layered robes, staff/pouches | Elemental magic |
| Gyria (soldier) | ~1.85 m / 6'1" | Skinny, wiry | Tall narrow figure, long limbs, angular head | Human-comparable arms |
| Gyria (boss) | 2.3–2.6 m / 7'6"–8'6" | Imposing, strong | Clearly larger Gyria, distinctive gear | Unique per boss |

---

## 1. Amir — human-faced wolf people

### Mandatory
- **Clearly human faces**: human nose, mouth, jaw and facial proportions.
- **No wolf muzzle, no canine snout, no fully wolf-like head.** Ever.
- Hairy arms (fur from roughly the elbow/upper arm to the backs of the hands).
- Long, wolf-like tails.
- Lean, athletic, agile bodies.

### Combat
- Primary weapon: **spears**.
- Style: speed, evasiveness, rapid attacks — dashes, sidesteps, quick thrust
  combos, sweeping reach attacks, retreat-and-strike.

### Clothing and armour
- Supports mobility: light leather, wraps, fitted layers, minimal plate.
- Leave room for the tail (tail opening or tail-friendly belts/skirts).
- Avoid bulky pauldrons or anything that blurs the slim silhouette.

### Animation notes
- Tail is a secondary-motion chain that reinforces speed and direction.
- Fast, light footwork; low crouches before bursts of movement.

---

## 2. Burrok — human-faced bear people

### Mandatory
- **Clearly human faces**: human nose, mouth, jaw and facial proportions.
- **No bear muzzle, no fully bear-like head.** Ever.
- Approximately **nine feet (≈2.75 m)** tall.
- Heavily muscular and broad-built; appearance suggests immense strength
  **without** replacing human facial features. Strength is shown through body
  mass, hands, neck and shoulders — not by animalising the face.

### Combat
- Bare hands or large axes.
- Style: heavy attacks, powerful grapples, breaking enemy defences (guard
  breaks, shield breaks), absorbing damage (high poise, slow but unstoppable).

### Armour
- Substantial and scaled to their enormous size: thick plates, heavy leather,
  large rivets, broad belts.
- Keep the face uncovered or easily readable in standard designs.

### Animation notes
- Weighty wind-ups and follow-through; grapples need paired animations.
- Hit reactions are reduced (they absorb hits) to communicate toughness.

---

## 3. Gouran — dwarf-like elemental wizards

### Mandatory
- Look much more like **traditional fantasy dwarves than goblins**.
- Short, stocky and solidly built: relatively broad shoulders, thick limbs,
  compact proportions.
- Distinctive, unattractive, weathered faces: heavy brows, deep-set eyes, broad
  noses, unusual features.
- Beards are **optional**; use where appropriate.
- **Must not** resemble small goblins: no large pointed ears, no spindly limbs,
  no green-skinned impish look, no hunched sneaky posture.
- Must stay a distinctive, original people of Velicia — not generic dwarves
  copied from another franchise. Avoid miner/brewer/Norse-hammer clichés as the
  defining identity; their identity is elemental scholarship and cunning.

### Clothing
- Rugged wizard robes, layered garments, belts, pouches and practical
  equipment (focus stones, scroll cases, instruments, staffs).

### Combat
- Elemental magic, intelligence and cunning rather than physical strength:
  traps, terrain manipulation, ranged elemental casts, summoned barriers.

### Animation notes
- Grounded, deliberate casting stances; gestures carry the power, not muscle.

---

## 4. Gyria — skinny orc-like warriors

### Standard soldiers — mandatory
- **Skinny, wiry and lean** — not bulky, not heavily muscular.
- Narrow shoulders, relatively long limbs, angular faces.
- Tough, battle-worn appearance (scars, worn gear).
- Armour is practical, worn and suited to warfare — not excessively elaborate.

### Combat
- Weapons and tactics comparable to Velicia's human warriors: swords, spears,
  shields, bows, formations, flanking.

### Culture and morality
- Gyria are **not inherently evil**. Appearance must not determine morality.
- They are a civilisation with their own motivations, culture and internal
  differences. Writing and character descriptions must reflect this (allies,
  neutrals and antagonists can all be Gyria).

### Gyria bosses
- Visibly **larger and taller** than standard soldiers (target ≥1.25× soldier
  height), with a clear size difference so players immediately recognise a
  more dangerous opponent.
- Retain recognisable Gyria features and ancestry (angular face, long-limbed
  proportions scaled up), but with an imposing presence, stronger proportions
  and more distinctive equipment.
- **Unique combat patterns, attacks and animations** for each boss — not just
  more health.
- Bulky/imposing proportions are **reserved for bosses only**.

---

## 5. Visual consistency and implementation rules

### Anatomy guardrails (check every asset)
- [ ] Amir: human face, no muzzle/snout; hairy arms; long tail; lean build.
- [ ] Burrok: human face, no muzzle; ~9 ft; massive build; substantial armour.
- [ ] Gouran: dwarf-like, stocky, weathered face; not goblin-like.
- [ ] Gyria soldier: skinny and wiry; not bulky.
- [ ] Gyria boss: clearly larger than soldiers; unique moveset.
- [ ] Silhouettes are distinct from one another at distance.
- [ ] Design is original; no copying of existing franchise characters.

### Mobile performance budgets (Android)
Guidance targets for mid-range devices; adjust after profiling.

| Asset | LOD0 triangles | Bones | Materials | Textures |
|---|---|---|---|---|
| Amir / Gouran / Gyria soldier | 8k–15k | ≤ 60 (+ tail chain for Amir) | 1–2 | 1024² atlas |
| Burrok | 12k–18k | ≤ 65 | 1–2 | 1024²–2048² atlas |
| Gyria boss / hero NPCs | 15k–25k | ≤ 75 | ≤ 3 | 2048² atlas |
| Background crowd NPCs | 3k–6k | ≤ 40 | 1 | 512² |

- Provide at least 2 LODs (≈50% and ≈20%) for every character.
- Prefer a shared humanoid base skeleton for all peoples, with per-people
  proportion scaling plus extras (Amir tail chain, Burrok scale).
- Fur on Amir arms/tails: use texture + alpha cards or shell-free stylised
  geometry, not strand-based hair.
- Stylised shading (simple PBR or toon ramp); avoid expensive per-character
  shaders.

### Faces
- All four peoples have human-structured faces (nose, mouth, jaw) — this is a
  core identity of Velicia. Use one shared facial rig/blendshape set where
  possible to keep animation cost down.
