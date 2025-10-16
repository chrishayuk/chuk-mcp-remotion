# LowerThird

## Overview

LowerThird is a name/title overlay component that appears at the bottom (or top) of the screen. Commonly used for speaker identification, location tags, or persistent information display.

**Category:** Overlay
**Template:** `overlays/LowerThird.tsx.j2`
**Test:** `tests/templates/overlays/test_lowerthird.py`

## Use Cases

- Speaker/guest identification
- Location/venue labels
- Social media handles
- Job titles and credentials
- Podcast guest introductions
- Interview subjects
- Product/feature labels

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Primary text (name, handle, or label) |
| `startFrame` | `number` | Frame when component becomes visible |
| `durationInFrames` | `number` | How long component is visible |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string?` | `undefined` | Secondary text (job title, location, etc.) |
| `variant` | `string` | `'glass'` | Visual style variant |
| `position` | `string` | `'bottom_left'` | Screen position |

## Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| `minimal` | Simple text with subtle background | Clean, professional look |
| `standard` | Balanced design with borders | General purpose |
| `glass` | Glassmorphism with backdrop blur | Modern, premium aesthetic |
| `bold` | High contrast with strong borders | High visibility, energetic content |
| `animated` | Pulsing border effect | Extra attention, live broadcasts |

## Positions

| Position | Location | Use Case |
|----------|----------|----------|
| `bottom_left` | Bottom left corner | Standard speaker ID |
| `bottom_center` | Bottom center | Centered captions/info |
| `bottom_right` | Bottom right corner | Alternative placement |
| `top_left` | Top left corner | Venue/location labels |
| `top_center` | Top center | Breaking news style |
| `top_right` | Top right corner | Social media handles |

## Usage Example

```typescript
import { LowerThird } from './overlays/LowerThird';

// Basic speaker identification
<LowerThird
  name="Jane Smith"
  title="CEO, Acme Corp"
  position="bottom_left"
  startFrame={120}
  durationInFrames={180}
/>

// Social media handle
<LowerThird
  name="@username"
  variant="bold"
  position="bottom_right"
  startFrame={0}
  durationInFrames={300}
/>

// Location tag
<LowerThird
  name="San Francisco, CA"
  variant="glass"
  position="top_left"
  startFrame={60}
  durationInFrames={240}
/>
```

## Scene Configuration

```python
{
    "type": "LowerThird",
    "config": {
        "name": "Jane Smith",
        "title": "Product Designer",
        "variant": "glass",
        "position": "bottom_left"
    },
    "start_frame": 120,
    "duration_in_frames": 180
}
```

## Design Tokens Used

### Colors
- `colors.background.dark` - Background fill
- `colors.background.glass` - Glass variant background
- `colors.primary[0]` - Primary accent color
- `colors.text.primary` - Name text color
- `colors.text.muted` - Title text color

### Typography
- `typography.body_font.fonts` - Font family
- Name: 24-28px, weight 600-700
- Title: 16-20px, weight 500

### Motion
- `motion.default_spring.config.damping` - Slide animation damping
- `motion.default_spring.config.stiffness` - Slide animation stiffness

## Animation Behavior

### Entrance (Slide In)
- Slides in from the edge of the screen
- Duration: ~25 frames
- Spring-based for natural deceleration
- Includes fade in

### Exit (Fade Out)
- Begins 20 frames before duration ends
- Smooth opacity transition
- No position animation on exit

### Position Mapping
```typescript
{
  bottom_left: { bottom: 80, left: 80 },
  bottom_center: { bottom: 80, left: '50%', transform: 'translateX(-50%)' },
  bottom_right: { bottom: 80, right: 80 },
  top_left: { top: 80, left: 80 },
  top_center: { top: 80, left: '50%', transform: 'translateX(-50%)' },
  top_right: { top: 80, right: 80 }
}
```

## Styling Details

### Layout
- Absolute positioning
- Flexbox column for name/title stack
- Auto width based on content
- Fixed distance from screen edges (80px default)

### Spacing
- Padding: 16-24px horizontal, 12-16px vertical
- Gap between name and title: 4px
- Border radius: 8-12px

### Visual Effects
- Box shadow for depth
- Backdrop filter blur for glass variant
- Border highlights for bold/animated variants
- Subtle pulsing animation for animated variant

## Best Practices

### DO ✅
- Use bottom_left for standard speaker IDs
- Keep name concise (< 25 characters)
- Use title for context (job, location, handle)
- Match variant to video aesthetic
- Allow sufficient duration (120+ frames for readability)
- Use glass variant for video overlays

### DON'T ❌
- Don't use center positions excessively (obscures content)
- Don't make text too long (breaks layout)
- Don't use animated variant for every lower third
- Don't skip the title when context is important
- Don't make duration too short (< 90 frames hard to read)

## Accessibility

- High contrast text
- Sufficient size for readability (24px+ name)
- Clear background separation
- Adequate duration for reading (3+ seconds)

## Performance

- Single DOM element
- CSS-only animations (no JS recalc)
- Efficient spring calculations
- No state or effects

## Theme Compatibility

Works with all themes. Glass variant particularly effective with:
- tech (blue glass)
- lifestyle (pink/purple glass)
- gaming (multi-color glass)

## Related Components

- **TitleScene** - For full-screen titles
- **Container** - For wrapping with persistent lower third
- **DialogueFrameLayout** - For conversation labels

## Common Patterns

### Interview Subject
```typescript
<LowerThird
  name="Dr. Sarah Johnson"
  title="Climate Scientist, MIT"
  variant="glass"
  position="bottom_left"
  startFrame={300}
  durationInFrames={180}
/>
```

### Social Media CTA
```typescript
<LowerThird
  name="@mychannel"
  title="Subscribe for more!"
  variant="bold"
  position="bottom_center"
  startFrame={7000}
  durationInFrames={240}
/>
```

### Location Tag
```typescript
<LowerThird
  name="Brooklyn, New York"
  variant="minimal"
  position="top_left"
  startFrame={0}
  durationInFrames={600}
/>
```

## Testing

See `tests/templates/overlays/test_lowerthird.py` for coverage:
- 18 tests covering all positions and variants
- Slide animation validation
- Design token injection
- Theme compatibility
