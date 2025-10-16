# Grid

## Overview

Grid is a flexible grid layout component that arranges children in configurable rows and columns. Perfect for creating multi-panel layouts, comparison views, and organized content displays.

**Category:** Layout
**Template:** `layouts/Grid.tsx.j2`
**Test:** `tests/templates/layouts/test_grid.py`

## Use Cases

- Multi-panel tutorial layouts
- Before/after comparisons
- Product showcases (2x2, 3x3, etc.)
- Feature comparison grids
- Image galleries
- Dashboard layouts
- Multi-camera views

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode[]` | Array of child components to arrange |
| `startFrame` | `number` | Frame when layout becomes visible |
| `durationInFrames` | `number` | How long layout is visible |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `string` | `'3x3'` | Grid configuration (rows x columns) |
| `padding` | `number` | `40` | Outer padding from screen edges |
| `gap` | `number` | `20` | Space between grid cells |
| `border_width` | `number?` | `undefined` | Border width for cells |
| `border_color` | `string` | `'rgba(255,255,255,0.2)'` | Border color |
| `border_radius` | `number` | `8` | Border radius for cells |
| `cell_background` | `string?` | `undefined` | Background color for cells |

## Layout Configurations

| Layout | Grid | Total Cells | Best For |
|--------|------|-------------|----------|
| `1x2` | 1 row, 2 cols | 2 | Side-by-side comparison |
| `2x1` | 2 rows, 1 col | 2 | Vertical stack |
| `2x2` | 2 rows, 2 cols | 4 | Four-panel view |
| `3x2` | 3 rows, 2 cols | 6 | Six-panel grid |
| `2x3` | 2 rows, 3 cols | 6 | Horizontal emphasis |
| `3x3` | 3 rows, 3 cols | 9 | Nine-panel grid (default) |
| `4x2` | 4 rows, 2 cols | 8 | Eight-panel vertical |
| `2x4` | 2 rows, 4 cols | 8 | Eight-panel horizontal |

## Usage Example

```typescript
import { Grid } from './layouts/Grid';
import { CodeBlock } from './content/CodeBlock';

// 2x2 comparison grid
<Grid
  layout="2x2"
  padding={40}
  gap={30}
  border_width={3}
  startFrame={0}
  durationInFrames={300}
>
  {[
    <CodeBlock code={code1} language="javascript" />,
    <CodeBlock code={code2} language="javascript" />,
    <CodeBlock code={code3} language="javascript" />,
    <CodeBlock code={code4} language="javascript" />
  ]}
</Grid>

// 3x3 dashboard
<Grid
  layout="3x3"
  gap={20}
  border_width={2}
  cell_background="rgba(0, 0, 0, 0.3)"
  startFrame={120}
  durationInFrames={480}
>
  {dashboardPanels}
</Grid>

// Side-by-side comparison
<Grid
  layout="1x2"
  gap={40}
  border_width={3}
  startFrame={300}
  durationInFrames={360}
>
  {[<BeforePanel />, <AfterPanel />]}
</Grid>
```

## Scene Configuration

```python
{
    "type": "Grid",
    "config": {
        "layout": "2x2",
        "padding": 40,
        "gap": 30,
        "border_width": 3,
        "border_color": "rgba(255, 255, 255, 0.2)",
        "cell_background": "rgba(0, 0, 0, 0.2)"
    },
    "start_frame": 0,
    "duration_in_frames": 300,
    "children": [
        # Child component configs...
    ]
}
```

## Layout Behavior

### Cell Sizing
- All cells equal size within their row/column
- Cells automatically adjust to fill available space
- Respects padding and gap configuration

### Children Handling
- Accepts array of React nodes
- Maximum children: determined by layout (e.g., 9 for 3x3)
- Extra children beyond grid capacity are ignored
- Fewer children than capacity: empty cells remain

### Responsive Sizing
```
Cell width = (Screen width - 2*padding - (cols-1)*gap) / cols
Cell height = (Screen height - 2*padding - (rows-1)*gap) / rows
```

## Styling Details

### Grid Structure
```css
display: 'grid'
gridTemplateColumns: Based on layout (e.g., '1fr 1fr 1fr' for 3 columns)
gridTemplateRows: Based on layout (e.g., '1fr 1fr' for 2 rows)
gap: Configurable spacing
```

### Cell Styling
- Each cell wrapped in styled div
- Optional borders (configurable width/color/radius)
- Optional background color
- Overflow: hidden (prevents content spillover)
- Centered content (flexbox)

## Design Tokens Used

### Colors
- `border_color` - Default rgba(255, 255, 255, 0.2)
- `cell_background` - Optional, from config

### Spacing
- `padding` - Outer spacing (default: 40px)
- `gap` - Inter-cell spacing (default: 20px)

## Best Practices

### DO ✅
- Use 2x2 for four-way comparisons
- Use 3x3 for dashboard-style layouts
- Use 1x2 or 2x1 for simple comparisons
- Provide consistent children (same component type)
- Match gap/padding to content density
- Use borders to separate similar content

### DON'T ❌
- Don't use very high grid counts (6x6+) - too small
- Don't mix dramatically different content types
- Don't forget to account for padding/gap in sizing
- Don't use cell_background that obscures content
- Don't overfill with content (leave breathing room)

## Common Patterns

### Before/After Comparison
```typescript
<Grid layout="1x2" gap={40} border_width={3}>
  {[
    <VideoPanel title="Before" />,
    <VideoPanel title="After" />
  ]}
</Grid>
```

### Code Examples Grid
```typescript
<Grid layout="2x2" gap={20} border_width={2}>
  {[
    <CodeBlock title="JavaScript" />,
    <CodeBlock title="Python" />,
    <CodeBlock title="Ruby" />,
    <CodeBlock title="Go" />
  ]}
</Grid>
```

### Dashboard Layout
```typescript
<Grid
  layout="3x3"
  gap={15}
  cell_background="rgba(0, 0, 0, 0.3)"
  border_width={1}
>
  {dashboardWidgets}
</Grid>
```

## Performance

- Efficient CSS Grid layout
- No JavaScript calculations for positioning
- Minimal re-renders
- Scales well with child count

## Accessibility

- Semantic grid structure
- Clear visual separation with gaps
- Sufficient cell size for content

## Related Components

- **ThreeByThreeGrid** - Specialized 3x3 with more features
- **Container** - Single-child wrapper
- **AsymmetricLayout** - Non-uniform layouts

## Testing

See `tests/templates/layouts/test_grid.py`:
- 17 tests covering all layout variants
- Grid structure validation
- Children handling tests
- Props configuration tests

## Layout Examples

### 2x2 Tutorial Panels
```
┌─────────┬─────────┐
│  Code   │  Output │
├─────────┼─────────┤
│ Diagram │  Steps  │
└─────────┴─────────┘
```

### 1x2 Split Screen
```
┌─────────┬─────────┐
│  Left   │  Right  │
└─────────┴─────────┘
```

### 3x3 Dashboard
```
┌────┬────┬────┐
│ 1  │ 2  │ 3  │
├────┼────┼────┤
│ 4  │ 5  │ 6  │
├────┼────┼────┤
│ 7  │ 8  │ 9  │
└────┴────┴────┘
```
