# Velicia — Asset Redesign Checklist

Use this list to review any existing or incoming character asset against
[`CHARACTER_DESIGN.md`](CHARACTER_DESIGN.md).

## Current inventory (as of this spec update)

No Velicia models, concept art, rigs or animations exist in this repository
yet. Nothing in the repo currently needs redesigning. If assets exist
elsewhere (local drives, a Godot project on a device, image generators,
cloud storage), review them with the flags below before importing them.

## Redesign flags — any asset matching these must be redone

| People | Redesign if… |
|---|---|
| Amir | Has a wolf muzzle, canine snout or wolf head; no tail or short tail; bulky/heavy-armoured build; main weapon is not a spear |
| Burrok | Has a bear muzzle or bear head; noticeably under ~9 ft relative to humans; slim build; light armour |
| Gouran | Looks goblin-like (big pointed ears, spindly limbs, impish face, green skin, hunched); attractive/smooth faces; fights with physical strength |
| Gyria soldier | Bulky or heavily muscular; broad shoulders; ornate/elaborate armour; portrayed as inherently evil |
| Gyria boss | Same size as soldiers; loses Gyria features; only differs by health bar; reuses soldier moveset |
| Any | Too similar a silhouette to another people; exceeds the mobile budgets; resembles a protected character from another franchise |

## Review template

```
Asset:          <file / name>
People:         Amir | Burrok | Gouran | Gyria soldier | Gyria boss
Face human?     yes / no
Proportions OK? yes / no  (notes)
Silhouette OK?  yes / no
Budget OK?      tris __ / bones __ / materials __ / texture __
Verdict:        keep | adjust | redesign
```
