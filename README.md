# Quantity Selector

React Native (Expo) component for adjusting inventory quantities. Users can change stock via quick buttons, a delta input, or a resulting quantity field — all kept in sync.

## Setup

```bash
npm install
npm start
```

Then press `i` for iOS simulator or `a` for Android emulator.

## Scripts

```bash
npm test              # run unit tests
npx tsc --noEmit      # type check
```

## Project structure

```
src/
  components/
    features/QuantitySelector/   # main component + tests
    shared/Button, Input/          # reusable UI
  constants/                     # colors, typography
  hooks/useAppFonts.ts           # Lato font loading
  screens/HomeScreen.tsx         # demo screen
```

## Usage

```tsx
<QuantitySelector
  initialQuantity={55}
  onChange={(resultQuantity, delta) => {
    // e.g. save updated stock to API
  }}
/>
```

## Key decisions

- **Single state (`delta` as string)** — keeps TextInput editing smooth while partial values like `"-"` or `""` are being typed.
- **7-column grid (`3 + 1 + 3`)** — aligns current/result inputs with the center delta field and quick-action buttons.
- **Clearing result input** — sets resulting quantity to `0` (delta becomes `-initialQuantity`).
- **Lato font** — loaded via `@expo-google-fonts/lato` in `App.tsx`.

## Tests

`QuantitySelector.test.tsx` covers delta input, result input, quick actions, formatting, and clearing the delta field.
