# AsymmetricLayout

## Overview

AsymmetricLayout creates a main feed area with stacked demo/preview panels - perfect for YouTube tutorials where you need to show a primary workspace alongside reference materials or demonstrations.

**Category:** Layout
**Template:** `layouts/AsymmetricLayout.tsx.j2`
**Test:** `tests/templates/layouts/test_asymmetriclayout.py`

## Use Cases

- Coding tutorials (editor + terminal + output)
- Tutorial videos (main demo + reference panels)
- Software walkthroughs (app + documentation)
- Design tutorials (canvas + tools + layers)
- Gaming content (gameplay + map + stats)
- Educational content (lecture + slides + notes)

## Props

### Named Props (No Generic Children)

| Prop | Type | Description |
|------|------|-------------|
| `mainFeed` | `React.ReactNode?` | Primary content (2/3 of screen) |
| `demo1` | `React.ReactNode?` | First demo panel |
| `demo2` | `React.ReactNode?` | Second demo panel |
| `overlay` | `React.ReactNode?` | Optional overlay (like lower third) |
| `startFrame` | `number` | Frame when layout becomes visible |
| `durationInFrames` | `number` | How long layout is visible |

### Configuration Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `string` | `'main-right'` | Layout orientation |
| `main_ratio` | `number` | `66.67` | Main feed width/height percentage |
| `padding` | `number` | `40` | Outer padding |
| `gap` | `number` | `20` | Space between panels |
| `border_width` | `number?` | `undefined` | Border width |
| `border_color` | `string` | `'rgba(255,255,255,0.2)'` | Border color |
| `main_background` | `string?` | `undefined` | Main feed background |
| `demo_background` | `string?` | `undefined` | Demo panel background |

## Layout Variants

| Layout | Description | Main Feed | Demo Panels |
|--------|-------------|-----------|-------------|
| `main-right` | Demos on left, main on right | Right side (67%) | Left stacked (33%) |
| `main-left` | Main on left, demos on right | Left side (67%) | Right stacked (33%) |

**Note:** `main-top` and `main-bottom` variants are documented but not yet implemented in current template.

## Usage Example

```typescript
import { AsymmetricLayout } from './layouts/AsymmetricLayout';

// Coding tutorial layout
<AsymmetricLayout
  mainFeed={<CodeEditor />}
  demo1={<TerminalPanel />}
  demo2={<OutputPanel />}
  layout="main-right"
  main_ratio={70}
  padding={40}
  gap={20}
  startFrame={0}
  durationInFrames={600}
/>

// Design tutorial with tools
<AsymmetricLayout
  mainFeed={<DesignCanvas />}
  demo1={<ToolPalette />}
  demo2={<LayerPanel />}
  overlay={<LowerThird name="Design Tips" />}
  layout="main-left"
  startFrame={120}
  durationInFrames={480}
/>

// Documentation walkthrough
<AsymmetricLayout
  mainFeed={<ApplicationDemo />}
  demo1={<DocumentationPanel />}
  demo2={<CodeSnippet />}
  border_width={2}
  startFrame={240}
  durationInFrames={720}
/>
```

## Scene Configuration

```python
{
    "type": "AsymmetricLayout",
    "config": {
        "layout": "main-right",
        "main_ratio": 70,
        "padding": 40,
        "gap": 20,
        "border_width": 2
    },
    "start_frame": 0,
    "duration_in_frames": 600,
    "children": {
        "mainFeed": {
            # Main content config
        },
        "demo1": {
            # First demo panel config
        },
        "demo2": {
            # Second demo panel config
        }
    }
}
```

## Layout Behavior

### Main Feed
- Takes majority of screen (default: 67%)
- Flexible sizing via `main_ratio` prop
- Primary focus area
- Full-height panel

### Demo Panels
- Stack vertically in remaining space
- Equal height split (50/50)
- Secondary reference materials
- Can show terminal, output, diagrams, etc.

### Ratio Calculations
```
Main feed width: main_ratio% (e.g., 70%)
Demo panels width: (100 - main_ratio)% (e.g., 30%)
Each demo height: 50% of screen height
```

## Visual Layout

### main-right (Default)
```
┌─────────┬──────────────────┐
│  Demo1  │                  │
│         │                  │
│ (33%)   │   Main Feed      │
├─────────┤                  │
│  Demo2  │   (67%)          │
│         │                  │
└─────────┴──────────────────┘
```

### main-left
```
┌──────────────────┬─────────┐
│                  │  Demo1  │
│                  │         │
│   Main Feed      │ (33%)   │
│                  ├─────────┤
│   (67%)          │  Demo2  │
│                  │         │
└──────────────────┴─────────┘
```

## Design Tokens Used

### Colors
- `border_color` - Default rgba(255, 255, 255, 0.2)
- `main_background` - Optional background for main feed
- `demo_background` - Optional background for demo panels

### Spacing
- `padding` - Outer spacing (default: 40px)
- `gap` - Between panels (default: 20px)

## Best Practices

### DO ✅
- Use main-right for standard tutorials (matches reading direction)
- Use 70/30 ratio for balanced layouts
- Use 60/40 for equal emphasis
- Put primary content in mainFeed
- Use demo1/demo2 for supporting materials
- Add borders for visual separation
- Use overlay for persistent info (like lower thirds)

### DON'T ❌
- Don't use extreme ratios (< 50% or > 85% for main)
- Don't overcrowd demo panels
- Don't forget gap between panels
- Don't mix unrelated content types
- Don't ignore visual hierarchy (main should dominate)

## Common Patterns

### Coding Tutorial
```typescript
<AsymmetricLayout
  mainFeed={<VSCodeEditor />}
  demo1={<TerminalOutput />}
  demo2={<BrowserPreview />}
  layout="main-right"
  main_ratio={65}
/>
```

### Design Workflow
```typescript
<AsymmetricLayout
  mainFeed={<FigmaCanvas />}
  demo1={<ComponentLibrary />}
  demo2={<ColorPalette />}
  layout="main-left"
  main_ratio={70}
/>
```

### Documentation Walkthrough
```typescript
<AsymmetricLayout
  mainFeed={<AppScreencast />}
  demo1={<APIDocumentation />}
  demo2={<CodeExample />}
  overlay={<LowerThird name="API Tutorial" />}
  layout="main-right"
/>
```

## Performance

- Efficient flexbox layout
- No complex calculations
- Minimal re-renders
- Scales well with content

## Accessibility

- Clear visual hierarchy (main is larger)
- Sufficient spacing between panels
- Semantic named props

## Related Components

- **Grid** - Uniform grid layouts
- **ThreeColumnLayout** - Three equal columns
- **SplitScreen** - 50/50 split layouts
- **Container** - Single-child wrapper

## Testing

See `tests/templates/layouts/test_asymmetriclayout.py`:
- 9 tests covering layout variants
- Flexbox structure validation
- Named props tests
- Ratio calculations

## Why Named Props?

This layout uses **named props** (mainFeed, demo1, demo2) instead of a generic children array because:

1. **Semantic Clarity** - Each child has specific meaning and purpose
2. **Different Styling** - Main feed vs demo panels need different sizes
3. **Specific Positioning** - Each panel has predetermined location
4. **Configuration** - Main feed gets different treatment than demos

This follows the Component Design principle of using named props when children have specific, semantic roles.
