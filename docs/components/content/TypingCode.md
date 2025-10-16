# TypingCode

## Overview

TypingCode displays code with an animated typing effect, simulating live coding. Characters appear sequentially with a blinking cursor. Perfect for creating engaging coding tutorials and demonstrations.

**Category:** Content
**Template:** `content/TypingCode.tsx.j2`
**Test:** `tests/templates/content/test_typingcode.py`

## Use Cases

- Live coding demonstrations
- Algorithm visualizations
- Coding tutorial intros
- "Watch me code" segments
- Retro/hacker aesthetics
- Progressive code reveals
- Interactive coding stories

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `code` | `string` | Source code to type out |
| `startFrame` | `number` | Frame when typing starts |
| `durationInFrames` | `number` | How long component is visible |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `language` | `string` | `'javascript'` | Programming language for syntax highlighting |
| `title` | `string?` | `undefined` | Optional title/filename |
| `variant` | `string` | `'editor'` | Visual style variant |
| `cursor_style` | `string` | `'line'` | Cursor appearance |
| `typing_speed` | `number` | `1.5` | Characters per frame |
| `show_line_numbers` | `boolean` | `true` | Show/hide line numbers |

## Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| `minimal` | Clean, simple design | Focused demonstrations |
| `terminal` | Dark terminal aesthetic | Command-line simulations |
| `editor` | Full editor UI | Complete coding environments |
| `hacker` | Cyan glow, matrix-style | Cyberpunk, hacker themes |

## Cursor Styles

| Style | Appearance | Use Case |
|-------|------------|----------|
| `line` | Thin vertical line | Modern editors (VS Code style) |
| `block` | Solid block | Classic terminal/vim style |
| `underline` | Line under character | Retro terminal style |
| `none` | No cursor | When cursor distracts |

## Typing Speed

The `typing_speed` prop controls characters revealed per frame:

- `0.5` - Very slow (2 frames per character) - dramatic reveals
- `1.0` - Slow (1 character per frame) - careful tutorials
- `1.5` - Normal (default) - comfortable pace
- `2.0` - Fast - energetic demonstrations
- `3.0+` - Very fast - rapid reveals

**Duration Calculation:**
```
frames_needed = (character_count / typing_speed) + startDelay + buffer
```

For a 100-character code snippet at speed 1.5:
```
frames = (100 / 1.5) + 10 + 30 ≈ 107 frames (≈3.6 seconds at 30fps)
```

## Usage Example

```typescript
import { TypingCode } from './content/TypingCode';

// Basic typing effect
<TypingCode
  code={`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`}
  language="javascript"
  startFrame={0}
  durationInFrames={300}
/>

// Fast typing with hacker theme
<TypingCode
  code="npm install express"
  language="bash"
  variant="hacker"
  cursor_style="block"
  typing_speed={2.0}
  show_line_numbers={false}
  startFrame={120}
  durationInFrames={180}
/>

// Slow, dramatic reveal
<TypingCode
  code={algorithmCode}
  language="python"
  title="algorithm.py"
  typing_speed={0.5}
  cursor_style="line"
  startFrame={240}
  durationInFrames={600}
/>
```

## Scene Configuration

```python
{
    "type": "TypingCode",
    "config": {
        "code": "console.log('Hello');",
        "language": "javascript",
        "title": "app.js",
        "variant": "editor",
        "cursor_style": "line",
        "typing_speed": 1.5,
        "show_line_numbers": True
    },
    "start_frame": 0,
    "duration_in_frames": 240
}
```

## Animation Behavior

### Typing Animation
1. **Start Delay** - 10 frames before typing begins
2. **Character Reveal** - Progressive reveal based on `typing_speed`
3. **Cursor Blink** - Cursor blinks every 30 frames while typing
4. **Completion** - Cursor stops blinking when typing finishes

### Timeline Example
```
Frame:  0   10   30   50   70   90  110
        |---|----|----|----|----|----|----|
        [Delay][  Typing Progress  ][Done]

Cursor: off  on   off  on   off  on  (done)
```

### Cursor Behavior
- Appears at end of currently typed text
- Blinks on/off cycle (15 frames on, 15 frames off)
- Stops blinking when typing complete
- Only visible on last line

## Styling Details

### Editor Variant
- macOS window controls (when title present)
- Title bar with filename
- Syntax-highlighted as typing progresses
- Smooth, frame-by-frame reveals

### Hacker Variant
- Cyan (#00D9FF) glow effect
- Dark background
- Cyan border with glow
- Perfect for cyberpunk/tech aesthetics

### Typography
- Monospace: 'Fira Code', 'Monaco', 'Consolas'
- Font size: 18px
- Line height: 1.8 (slightly looser for readability)

## Design Tokens Used

### Colors
- `colors.accent[0]` - Cursor color (hacker theme)
- Background colors vary by variant
- Syntax colors from prism theme

### Typography
- Monospace font stack for code
- System fonts for title bar

## Best Practices

### DO ✅
- Calculate duration based on code length and typing speed
- Use faster speeds for short snippets
- Use slower speeds for complex algorithm reveals
- Match cursor style to variant (block with terminal, line with editor)
- Use hacker variant sparingly for impact
- Test timing with actual code length

### DON'T ❌
- Don't use excessively slow speeds (< 0.5) unless dramatic
- Don't type out very long code (boring to watch)
- Don't skip the start delay (gives context)
- Don't use cursor_style none unless necessary
- Don't make duration too short (cuts off typing)
- Don't type out boilerplate (skip to interesting parts)

## Performance

- Efficient slicing operation per frame
- Syntax highlighting updates only on visible code
- Minimal DOM updates
- No state or effects

## Accessibility

- Allow sufficient duration for typing to complete
- Don't type too fast (hard to follow)
- High contrast for readability
- Clear monospace fonts

## Related Components

- **CodeBlock** - Static code display (no typing)
- **Container** - Wrap typed code in layout
- **Grid** - Multiple typing code blocks

## Common Patterns

### Algorithm Reveal
```typescript
<TypingCode
  code={`def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`}
  language="python"
  title="quicksort.py"
  typing_speed={1.0}
  startFrame={0}
  durationInFrames={480}
/>
```

### Terminal Command Sequence
```typescript
<TypingCode
  code={`git add .
git commit -m "feat: add new feature"
git push origin main`}
  language="bash"
  variant="terminal"
  cursor_style="block"
  show_line_numbers={false}
  typing_speed={2.0}
  startFrame={120}
  durationInFrames={200}
/>
```

### Hacker Theme Intro
```typescript
<TypingCode
  code="ACCESS GRANTED\nInitializing system...\n> _"
  language="text"
  variant="hacker"
  cursor_style="block"
  typing_speed={3.0}
  show_line_numbers={false}
  startFrame={0}
  durationInFrames={180}
/>
```

## Testing

See `tests/templates/content/test_typingcode.py`:
- 22 tests covering all variants and cursor styles
- Typing speed validation
- Cursor blinking tests
- Character reveal progression tests
