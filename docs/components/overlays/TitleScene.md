# TitleScene

## Overview

TitleScene is a full-screen title card component with animated text, supporting multiple animation and style variants. Perfect for video intros, chapter markers, and section breaks.

**Category:** Overlay
**Template:** `overlays/TitleScene.tsx.j2`
**Test:** `tests/templates/overlays/test_titlescene.py`

## Use Cases

- Video intros and outros
- Chapter title cards
- Section transitions
- Episode titles
- Podcast episode cards
- Course module headers

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Main title text (large, prominent) |
| `startFrame` | `number` | Frame when component becomes visible |
| `durationInFrames` | `number` | How long component is visible |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `subtitle` | `string?` | `undefined` | Secondary text (smaller, below title) |
| `variant` | `string` | `'bold'` | Visual style variant |
| `animation` | `string` | `'fade_zoom'` | Entry animation type |

## Variants

### Style Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| `minimal` | Clean, simple design | Professional content, minimal aesthetic |
| `standard` | Balanced design with moderate styling | General purpose videos |
| `bold` | Large, impactful typography | High-energy content, attention-grabbing |
| `kinetic` | Dynamic, modern styling | Tech content, modern aesthetic |
| `glass` | Glassmorphism effect with blur | Premium feel, overlay on video |

### Animation Variants

| Animation | Description | Duration | Effect |
|-----------|-------------|----------|--------|
| `fade_zoom` | Fade in with subtle zoom | ~20 frames | Smooth, professional |
| `slide_up` | Slide up from bottom with fade | ~25 frames | Energetic entrance |
| `typewriter` | Characters appear one by one | Variable | Retro, playful |
| `blur_in` | Blur to focus transition | ~20 frames | Cinematic, dramatic |
| `fade_slide` | Diagonal slide with fade | ~25 frames | Modern, sleek |
| `zoom` | Zoom in from small to full size | ~30 frames | Bold, impactful |

## Usage Example

```typescript
import { TitleScene } from './overlays/TitleScene';

// Basic usage
<TitleScene
  title="Welcome to My Channel"
  subtitle="Let's get started"
  startFrame={0}
  durationInFrames={120}
/>

// With custom variant and animation
<TitleScene
  title="Chapter 1: Introduction"
  subtitle="The Beginning of Our Journey"
  variant="kinetic"
  animation="slide_up"
  startFrame={300}
  durationInFrames={90}
/>

// Minimal title card
<TitleScene
  title="Thank You For Watching"
  variant="minimal"
  animation="fade_zoom"
  startFrame={7200}
  durationInFrames={150}
/>
```

## Scene Configuration

When using the generator system, configure via scene config:

```python
{
    "type": "TitleScene",
    "config": {
        "title": "My Video Title",
        "subtitle": "Subtitle text here",
        "variant": "bold",
        "animation": "fade_zoom"
    },
    "start_frame": 0,
    "duration_in_frames": 120
}
```

## Design Tokens Used

TitleScene uses the following design tokens from the theme:

### Colors
- `colors.gradient.bold` - Title gradient colors
- `colors.accent[0]` - Accent highlights
- `colors.text.primary` - Main text color
- `colors.text.on_dark` - Subtitle text color

### Typography
- `typography.primary_font.fonts` - Font family
- Font sizes: 80-120px (title), 28-36px (subtitle)
- Font weights: 700-900 (title), 500-600 (subtitle)

### Motion
- `motion.default_spring.config.damping` - Spring animation damping (default: 200)
- `motion.default_spring.config.stiffness` - Spring animation stiffness (default: 200)
- `motion.default_spring.config.mass` - Spring mass (default: 0.5)

## Animation Behavior

### Entrance Animation
- Starts at `startFrame`
- Animation duration: 20-30 frames depending on animation type
- Uses spring physics for smooth, natural motion

### Exit Animation
- Begins 20 frames before `startFrame + durationInFrames`
- Fades out smoothly
- Final opacity interpolates from 1 to 0

### Timeline Example
```
Frame:  0     20    40    60    80   100   120
        |-----|-----|-----|-----|-----|-----|
        [Entrance ][  Fully Visible  ][Exit]
```

## Styling Details

### Layout
- Full-screen `AbsoluteFill`
- Centered content (vertical and horizontal)
- Flexbox column layout for title/subtitle stack

### Responsive Sizing
- Title: 80px (minimal) to 120px (bold)
- Subtitle: 28px (minimal) to 36px (bold)
- Letter spacing: -0.02em to -0.04em for titles

### Visual Effects
- Text shadow for readability on any background
- Gradient text for bold and kinetic variants
- Optional backdrop blur for glass variant

## Theme Compatibility

TitleScene works with all included themes:
- `tech` - Blue/cyan colors, modern
- `finance` - Green/gold, professional
- `education` - Blue/purple, trustworthy
- `lifestyle` - Pink/purple, energetic
- `gaming` - Multi-color, vibrant
- `minimal` - Black/white, clean
- `business` - Navy/gray, corporate

## Best Practices

### DO ✅
- Keep titles concise (1-3 words for main title)
- Use subtitle for additional context
- Match animation energy to content type
- Test with your chosen theme
- Allow sufficient duration (90-150 frames typical)

### DON'T ❌
- Don't use excessively long titles (breaks layout)
- Don't use typewriter for every title (gets repetitive)
- Don't make duration too short (< 60 frames hard to read)
- Don't skip subtitle if context needed
- Don't mix incompatible variants (e.g., minimal with kinetic animations)

## Accessibility

- High contrast text for readability
- Sufficient duration for reading (recommended: 3-5 seconds minimum)
- Clear, legible fonts
- Avoid rapid animations for accessibility

## Performance

- Minimal re-renders (pure frame calculations)
- No state or effects
- Efficient spring calculations
- Lightweight DOM structure

## Related Components

- **LowerThird** - For persistent name/title overlays
- **Container** - For wrapping content with title overlay
- **TimelineLayout** - For sequential chapter titles

## Example Variations

### Podcast Episode Card
```typescript
<TitleScene
  title="Episode 42: Design Systems"
  subtitle="with Jane Smith"
  variant="bold"
  animation="fade_zoom"
  startFrame={0}
  durationInFrames={120}
/>
```

### Course Module Header
```typescript
<TitleScene
  title="Module 3"
  subtitle="Advanced React Patterns"
  variant="kinetic"
  animation="slide_up"
  startFrame={0}
  durationInFrames={90}
/>
```

### Minimalist Outro
```typescript
<TitleScene
  title="Thank You"
  variant="minimal"
  animation="fade_zoom"
  startFrame={7200}
  durationInFrames={150}
/>
```

## Testing

See `tests/templates/overlays/test_titlescene.py` for comprehensive test coverage:
- 19 tests covering all variants and animations
- Design token injection validation
- TypeScript validity checks
- Theme compatibility tests
