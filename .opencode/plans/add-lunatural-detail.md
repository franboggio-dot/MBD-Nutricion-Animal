# Add LunaturalDetail Component

## Goal

Add the `LunaturalDetail` component (3-product grid) and update the render tree to include both `LunaturalBrand` and `LunaturalDetail`.

## Changes

### 1. Insert `LunaturalDetail` component (between LunaturalBrand and CTA)

**File:** `src/pages/PresetD.jsx`
**Location:** After line 694 (closing `}` of LunaturalBrand), before line 695 (`// ── CTA`)

The component renders a `#lunatural-productos` section with:
- Section heading "Conocé nuestra línea natural"
- Grid of 3 product cards (repeat(3, 1fr)):
  - **Pipeta Natural** ($25) — Antiparasitario — Unsplash: perro
  - **Bálsamo Corporal** ($35) — Cuidado de Piel — Unsplash: aceites
  - **Crema Botánica** ($30) — Calmante — Unsplash: crema
- Each card: image (aspect-ratio 1/1, badge overlay top-left), name, price, tagline, benefits list (with Sparkles icon), WhatsApp CTA (FlaskConical icon)
- Hover: translateY(-6px) + box-shadow
- Responsive: 3→2 cols at 900px, 2→1 col at 600px
- Uses: `Sparkles`, `FlaskConical` from lucide-react (already imported)

### 2. Update render tree

**Location:** Lines 782-784

Change:
```
      <Plans />
      <CTA />
```
To:
```
      <Plans />
      <LunaturalBrand />
      <LunaturalDetail />
      <CTA />
```

### 3. Verify imports

`Sparkles` and `FlaskConical` are already imported at line 8. No changes needed.
