# CodeBlock

## Overview

CodeBlock displays syntax-highlighted code with optional line numbers, title bar, and line highlighting. Perfect for coding tutorials, documentation videos, and technical content.

**Category:** Content
**Template:** `content/CodeBlock.tsx.j2`
**Test:** `tests/templates/content/test_codeblock.py`

## Use Cases

- Coding tutorials and walkthroughs
- Code review videos
- Technical documentation
- Programming courses
- Live coding sessions (static displays)
- Algorithm explanations
- API documentation

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `code` | `string` | Source code to display |
| `startFrame` | `number` | Frame when component becomes visible |
| `durationInFrames` | `number` | How long component is visible |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `language` | `string` | `'javascript'` | Programming language for syntax highlighting |
| `title` | `string?` | `undefined` | Optional title/filename |
| `variant` | `string` | `'editor'` | Visual style variant |
| `animation` | `string` | `'fade_in'` | Entry animation |
| `show_line_numbers` | `boolean` | `true` | Show/hide line numbers |
| `highlight_lines` | `number[]` | `[]` | Line numbers to highlight |

## Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| `minimal` | Clean code display, minimal chrome | Focused code snippets |
| `terminal` | Dark terminal aesthetic | CLI commands, shell scripts |
| `editor` | Full editor UI with title bar | Complete file displays |
| `glass` | Glassmorphism with blur | Overlay on video backgrounds |

## Supported Languages

CodeBlock uses `prism-react-renderer` for syntax highlighting. Supported languages include:

- JavaScript/TypeScript (`javascript`, `typescript`, `jsx`, `tsx`)
- Python (`python`)
- HTML/CSS (`html`, `css`, `scss`)
- Shell (`bash`, `shell`)
- JSON/YAML (`json`, `yaml`)
- Markdown (`markdown`)
- And many more...

## Animations

| Animation | Description | Duration | Effect |
|-----------|-------------|----------|--------|
| `fade_in` | Simple fade entrance | ~20 frames | Smooth, professional |
| `slide_up` | Slide from bottom with fade | ~25 frames | Dynamic entrance |
| `scale_in` | Scale from 90% to 100% | ~20 frames | Subtle zoom effect |
| `blur_in` | Blur to focus | ~20 frames | Cinematic feel |

## Usage Example

```typescript
import { CodeBlock } from './content/CodeBlock';

// Basic code display
<CodeBlock
  code={`function hello() {
  console.log("Hello World");
}`}
  language="javascript"
  startFrame={0}
  durationInFrames={240}
/>

// Editor style with filename
<CodeBlock
  code={sourceCode}
  language="typescript"
  title="App.tsx"
  variant="editor"
  show_line_numbers={true}
  startFrame={120}
  durationInFrames={300}
/>

// Highlighted specific lines
<CodeBlock
  code={complexCode}
  language="python"
  title="algorithm.py"
  highlight_lines={[5, 6, 7]}
  animation="slide_up"
  startFrame={300}
  durationInFrames={360}
/>
```

## Scene Configuration

```python
{
    "type": "CodeBlock",
    "config": {
        "code": "const x = 42;\\nconsole.log(x);",
        "language": "javascript",
        "title": "example.js",
        "variant": "editor",
        "animation": "fade_in",
        "show_line_numbers": True,
        "highlight_lines": [1]
    },
    "start_frame": 120,
    "duration_in_frames": 240
}
```

## Styling Details

### Editor Variant Features
- macOS-style window controls (red, yellow, green dots)
- Title bar with filename
- Line numbers in muted color
- Syntax-highlighted code
- Scrollable content area

### Line Highlighting
- Highlighted lines have subtle background
- Maintains syntax highlighting
- Non-intrusive visual indicator

### Typography
- Monospace font stack: 'Fira Code', 'Monaco', 'Consolas', 'monospace'
- Font size: 18px
- Line height: 1.6-1.8
- Proper code spacing and indentation

## Design Tokens Used

### Colors
- Background colors vary by variant
- Syntax colors from prism theme (vsDark)
- Line number color: `rgba(255, 255, 255, 0.3)`
- Highlight background: `rgba(255, 255, 255, 0.1)`

### Typography
- Monospace fonts for code readability
- System fonts for title bar

### Motion
- Spring animations with damping: 200, stiffness: 200
- Smooth entrance and exit transitions

## Animation Behavior

### Entrance
- Animation starts at `startFrame`
- Duration: 20-25 frames
- Spring-based for natural motion
- Includes opacity, transform, and optional blur

### Exit
- Begins 20 frames before end
- Smooth fade out
- No jarring transitions

## Best Practices

### DO ✅
- Use appropriate language for syntax highlighting
- Keep code snippets focused and relevant
- Use `highlight_lines` to draw attention
- Include filename/title for context
- Allow sufficient duration for reading (10+ frames per line)
- Use `terminal` variant for shell commands
- Use `editor` variant for file contents

### DON'T ❌
- Don't show overly long code (breaks readability)
- Don't use tiny font sizes
- Don't skip syntax highlighting language
- Don't highlight too many lines (loses focus)
- Don't make duration too short
- Don't use glass variant on busy backgrounds

## Accessibility

- High contrast code colors
- Clear, readable monospace fonts
- Line numbers aid in reference
- Sufficient size (18px) for readability

## Performance

- Efficient syntax highlighting via prism
- Minimal re-renders
- CSS-only animations where possible
- No runtime parsing (pre-highlighted)

## Related Components

- **TypingCode** - Animated typing effect for code
- **Container** - Wrap code in layout
- **Grid** - Show multiple code blocks side-by-side

## Common Patterns

### Function Definition
```typescript
<CodeBlock
  code={`function calculateSum(a, b) {
  return a + b;
}`}
  language="javascript"
  title="utils.js"
  variant="editor"
  highlight_lines={[2]}
  startFrame={0}
  durationInFrames={240}
/>
```

### Terminal Command
```typescript
<CodeBlock
  code={`npm install remotion
npm start`}
  language="bash"
  variant="terminal"
  show_line_numbers={false}
  startFrame={120}
  durationInFrames={180}
/>
```

### API Response
```typescript
<CodeBlock
  code={`{
  "status": 200,
  "data": {
    "user": "john"
  }
}`}
  language="json"
  title="response.json"
  variant="minimal"
  startFrame={300}
  durationInFrames={300}
/>
```

## Testing

See `tests/templates/content/test_codeblock.py`:
- 22 tests covering all variants and animations
- Syntax highlighting validation
- Line numbering tests
- Line highlighting tests
- Title bar rendering tests
