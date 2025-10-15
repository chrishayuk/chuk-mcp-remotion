# Token Management System

The token system in `chuk-mcp-remotion` provides the foundational design primitives for video generation. It's inspired by design token systems used in web design (like those in [Tailwind CSS](https://tailwindcss.com) and [Chakra UI](https://chakra-ui.com)), but optimized specifically for video content.

## Overview

Design tokens are the atomic building blocks of the design system:

```
Tokens → Themes → Components → Compositions → Videos
```

The token system consists of three primary categories:

1. **Color Tokens**: Color palettes for 7 themes
2. **Typography Tokens**: Font system optimized for video
3. **Motion Tokens**: Animation and timing system

## Architecture

### Token Philosophy

Design tokens provide several benefits:

- **Consistency**: Single source of truth for design decisions
- **Reusability**: Tokens can be combined and reused across components
- **Maintainability**: Update tokens once, changes propagate everywhere
- **Scalability**: Easy to add new themes and variants
- **LLM-Friendly**: Structured, discoverable design options

### Token Hierarchy

```
Base Tokens (primitives)
    ↓
Semantic Tokens (meaningful names)
    ↓
Component Tokens (component-specific)
    ↓
Theme Tokens (complete system)
```

---

## Color Tokens

Color tokens define the visual palette for each theme. All colors are tested for readability and visual impact on screen.

### Structure

Each color theme includes:

- **Primary Colors**: Main brand colors (3-scale progression)
- **Accent Colors**: Secondary colors for emphasis (3-scale)
- **Gradient**: Linear gradient combining primary and accent
- **Background Colors**: Dark, light, and glass variants
- **Text Colors**: Optimized for readability on backgrounds
- **Semantic Colors**: Success, warning, error, and info states

### Color Token Format

```python
{
    "theme_name": {
        "name": "Display Name",
        "description": "Theme description",
        "primary": ["#HEX1", "#HEX2", "#HEX3"],      # 3-scale
        "accent": ["#HEX1", "#HEX2", "#HEX3"],       # 3-scale
        "gradient": "linear-gradient(...)",
        "background": {
            "dark": "#HEX",
            "light": "#HEX",
            "glass": "rgba(...)"
        },
        "text": {
            "on_dark": "#HEX",
            "on_light": "#HEX",
            "muted": "#HEX"
        },
        "semantic": {
            "success": "#HEX",
            "warning": "#HEX",
            "error": "#HEX",
            "info": "#HEX"
        }
    }
}
```

### Using Color Tokens

```python
from chuk_mcp_remotion.tokens.colors import COLOR_TOKENS

# Access specific color
tech_primary = COLOR_TOKENS["tech"]["primary"][0]  # #0066FF

# Get gradient
tech_gradient = COLOR_TOKENS["tech"]["gradient"]

# Text colors for contrast
text_on_dark = COLOR_TOKENS["tech"]["text"]["on_dark"]  # #FFFFFF

# Semantic colors
success_color = COLOR_TOKENS["tech"]["semantic"]["success"]
```

### Color Scale

Each primary and accent color has a 3-step scale:

1. **Base (index 0)**: Default color, most commonly used
2. **Dark (index 1)**: Darker variant for hover states or depth
3. **Darker (index 2)**: Darkest variant for active states

```python
# Example: Tech theme blue scale
primary_base = COLOR_TOKENS["tech"]["primary"][0]    # #0066FF
primary_dark = COLOR_TOKENS["tech"]["primary"][1]    # #0052CC
primary_darker = COLOR_TOKENS["tech"]["primary"][2]  # #003D99
```

### Background Variants

Three background types for different contexts:

```python
background = COLOR_TOKENS["tech"]["background"]

# Solid backgrounds
dark_bg = background["dark"]    # For dark mode content
light_bg = background["light"]  # For light mode content

# Glassmorphism effect
glass_bg = background["glass"]  # Semi-transparent with blur
```

### Semantic Colors

Standard semantic colors across all themes:

- **Success**: Green tones for positive states
- **Warning**: Yellow/orange for caution
- **Error**: Red tones for errors
- **Info**: Blue tones for information

```python
semantic = COLOR_TOKENS["tech"]["semantic"]
show_success_message(color=semantic["success"])
```

### Available Color Themes

| Theme | Primary | Accent | Description |
|-------|---------|--------|-------------|
| Tech | Blue | Cyan | Modern tech aesthetic |
| Finance | Green | Gold | Professional finance |
| Education | Purple | Orange | Friendly education |
| Lifestyle | Pink | Coral | Warm lifestyle |
| Gaming | Neon Green | Neon Purple | High-energy gaming |
| Minimal | Gray | Light | Clean monochrome |
| Business | Navy | Teal | Professional business |

---

## Typography Tokens

Typography tokens define the text system optimized for video content at various resolutions.

### Font Families

Four font categories for different content types:

```python
from chuk_mcp_remotion.tokens.typography import TYPOGRAPHY_TOKENS

font_families = TYPOGRAPHY_TOKENS["font_families"]
```

#### Display Fonts
- **Fonts**: Inter, SF Pro Display, system-ui, sans-serif
- **Usage**: Large headings and titles
- **Characteristics**: Bold, attention-grabbing

#### Body Fonts
- **Fonts**: Inter, SF Pro Text, system-ui, sans-serif
- **Usage**: Body text, captions, descriptions
- **Characteristics**: Readable, clean

#### Monospace Fonts
- **Fonts**: JetBrains Mono, Fira Code, Monaco, monospace
- **Usage**: Code blocks, technical content
- **Characteristics**: Fixed-width, developer-friendly

#### Decorative Fonts
- **Fonts**: Poppins, Montserrat, Raleway, sans-serif
- **Usage**: Special emphasis, stylized text
- **Characteristics**: Unique, expressive

### Font Sizes

Font sizes optimized for three video resolutions:

```python
# 1080p (Full HD) - Most common
sizes_1080p = TYPOGRAPHY_TOKENS["font_sizes"]["video_1080p"]
# xs: 24px, sm: 32px, base: 40px, lg: 48px
# xl: 64px, 2xl: 80px, 3xl: 96px, 4xl: 120px

# 4K (Ultra HD)
sizes_4k = TYPOGRAPHY_TOKENS["font_sizes"]["video_4k"]
# xs: 48px, sm: 64px, base: 80px, lg: 96px
# xl: 128px, 2xl: 160px, 3xl: 192px, 4xl: 240px

# 720p (HD)
sizes_720p = TYPOGRAPHY_TOKENS["font_sizes"]["video_720p"]
# xs: 18px, sm: 24px, base: 30px, lg: 36px
# xl: 48px, 2xl: 60px, 3xl: 72px, 4xl: 90px
```

### Font Size Scale

| Size | 1080p | 4K | 720p | Usage |
|------|-------|-----|------|-------|
| xs | 24px | 48px | 18px | Small captions |
| sm | 32px | 64px | 24px | Regular captions |
| base | 40px | 80px | 30px | Body text |
| lg | 48px | 96px | 36px | Subheadings |
| xl | 64px | 128px | 48px | Headings |
| 2xl | 80px | 160px | 60px | Large headings |
| 3xl | 96px | 192px | 72px | Title cards |
| 4xl | 120px | 240px | 90px | Hero titles |

### Font Weights

Standard font weight scale:

```python
weights = TYPOGRAPHY_TOKENS["font_weights"]
# thin: 100, extralight: 200, light: 300
# regular: 400, medium: 500, semibold: 600
# bold: 700, extrabold: 800, black: 900
```

### Line Heights

Optimized for readability:

```python
line_heights = TYPOGRAPHY_TOKENS["line_heights"]
# tight: 1.1    - Large headings
# snug: 1.25    - Headings
# normal: 1.5   - Body text
# relaxed: 1.75 - Captions
# loose: 2.0    - Special cases
```

### Letter Spacing

Tracking adjustments for different styles:

```python
spacing = TYPOGRAPHY_TOKENS["letter_spacing"]
# tighter: -0.05em, tight: -0.025em, normal: 0
# wide: 0.025em, wider: 0.05em, widest: 0.1em
```

### Text Styles

Pre-configured text styles combining multiple properties:

```python
text_styles = TYPOGRAPHY_TOKENS["text_styles"]

# Hero Title - Largest, boldest text
hero_title = text_styles["hero_title"]
# fontSize: 4xl, fontWeight: black, lineHeight: tight

# Title - Large section titles
title = text_styles["title"]
# fontSize: 3xl, fontWeight: bold, lineHeight: tight

# Heading - Standard headings
heading = text_styles["heading"]
# fontSize: 2xl, fontWeight: semibold, lineHeight: snug

# Body - Regular content
body = text_styles["body"]
# fontSize: base, fontWeight: regular, lineHeight: normal

# Caption - Small descriptive text
caption = text_styles["caption"]
# fontSize: sm, fontWeight: medium, lineHeight: relaxed
```

---

## Motion Tokens

Motion tokens define the animation and timing system for smooth, professional video animations.

### Spring Configurations

Physics-based spring animations (used with Remotion's spring() function):

```python
from chuk_mcp_remotion.tokens.motion import MOTION_TOKENS

springs = MOTION_TOKENS["spring_configs"]
```

#### Available Springs

| Spring | Damping | Mass | Stiffness | Feel | Usage |
|--------|---------|------|-----------|------|-------|
| gentle | 100 | 1.0 | 100 | Soft, slow | Subtle entrances |
| smooth | 200 | 0.5 | 200 | Balanced | General purpose |
| bouncy | 15 | 1.0 | 300 | Playful overshoot | Attention-grabbing |
| snappy | 300 | 0.3 | 400 | Quick, responsive | UI interactions |
| elastic | 8 | 1.5 | 200 | Strong overshoot | Call-to-action |

#### Using Springs

```python
# Get spring config
smooth_spring = MOTION_TOKENS["spring_configs"]["smooth"]

# Access properties
damping = smooth_spring["config"]["damping"]      # 200
mass = smooth_spring["config"]["mass"]            # 0.5
stiffness = smooth_spring["config"]["stiffness"]  # 200
```

### Easing Curves

Cubic bezier easing functions for CSS/JS animations:

```python
easings = MOTION_TOKENS["easing_curves"]
```

#### Available Easings

| Easing | Curve | Description | Usage |
|--------|-------|-------------|-------|
| linear | [0.0, 0.0, 1.0, 1.0] | Constant speed | Progress bars |
| ease_in | [0.42, 0.0, 1.0, 1.0] | Accelerates | Exits |
| ease_out | [0.0, 0.0, 0.58, 1.0] | Decelerates | Entrances |
| ease_in_out | [0.42, 0.0, 0.58, 1.0] | Smooth both ends | Transitions |
| ease_in_back | [0.6, -0.28, 0.735, 0.045] | Pulls back first | Dramatic exits |
| ease_out_back | [0.175, 0.885, 0.32, 1.275] | Overshoots | Attention entrances |
| ease_out_expo | [0.16, 1.0, 0.3, 1.0] | Sharp decel | Impactful |

#### Using Easings

```python
# Get easing
ease_out = MOTION_TOKENS["easing_curves"]["ease_out"]

# Access curve
curve = ease_out["curve"]        # [0.0, 0.0, 0.58, 1.0]
css = ease_out["css"]            # "ease-out"
description = ease_out["description"]
```

### Duration Presets

Standardized timing for consistent animations:

```python
durations = MOTION_TOKENS["durations"]
```

#### Duration Scale

| Duration | Frames (30fps) | Seconds | Usage |
|----------|---------------|---------|-------|
| instant | 1 | 0.033s | Cuts, instant changes |
| ultra_fast | 5 | 0.167s | Micro-interactions |
| fast | 10 | 0.333s | Quick transitions |
| normal | 20 | 0.667s | Standard animations |
| moderate | 30 | 1.0s | Scene elements |
| slow | 45 | 1.5s | Emphasis |
| very_slow | 60 | 2.0s | Hero animations |
| dramatic | 90 | 3.0s | Title reveals |

#### Using Durations

```python
# Get duration
normal_duration = MOTION_TOKENS["durations"]["normal"]

frames = normal_duration["frames"]      # 20
seconds = normal_duration["seconds"]    # 0.667
usage = normal_duration["usage"]        # "Standard animations"
```

### Animation Presets

Pre-configured animation combinations:

```python
presets = MOTION_TOKENS["animation_presets"]
```

#### Available Presets

**Fade Animations**:
- `fade_in`: Opacity 0 → 1, ease_out, normal duration
- `fade_out`: Opacity 1 → 0, ease_in, normal duration

**Slide Animations**:
- `slide_up`: TranslateY 100px → 0, ease_out_back
- `slide_down`: TranslateY -100px → 0, ease_out_back
- `slide_left`: TranslateX 100px → 0, ease_out
- `slide_right`: TranslateX -100px → 0, ease_out

**Scale Animations**:
- `scale_in`: Scale 0 → 1, ease_out_back
- `scale_out`: Scale 1 → 0, ease_in, fast duration

**Spring Animations**:
- `bounce_in`: Scale 0 → 1, bouncy spring, moderate duration

#### Using Presets

```python
# Get preset
fade_in = MOTION_TOKENS["animation_presets"]["fade_in"]

properties = fade_in["properties"]     # ["opacity"]
from_state = fade_in["from"]          # {"opacity": 0}
to_state = fade_in["to"]              # {"opacity": 1}
easing = fade_in["easing"]            # "ease_out"
duration = fade_in["duration"]        # "normal"
```

### YouTube Optimizations

Special timing considerations for YouTube content:

```python
youtube_opts = MOTION_TOKENS["youtube_optimizations"]
```

#### Hook Timing
**First 3 seconds** - Must grab attention:
- Max frames: 90 (3 seconds at 30fps)
- Recommended: bounce_in, slide_up, fade_in
- Tips: Fast animations, high contrast, immediate interest

#### Pattern Interrupt
**Every 3-5 seconds** - Maintain attention:
- Interval: 90-150 frames
- Recommended: slide_left, slide_right, scale_in
- Tips: Vary direction, use color changes, add elements regularly

#### Retention Timing
**Scene duration** - Keep viewers engaged:
- Minimum: 90 frames (3 seconds)
- Maximum: 300 frames (10 seconds)
- Optimal: 150 frames (5 seconds)

---

## Token Discovery

### Programmatic Access

```python
from chuk_mcp_remotion.tokens.colors import COLOR_TOKENS
from chuk_mcp_remotion.tokens.typography import TYPOGRAPHY_TOKENS
from chuk_mcp_remotion.tokens.motion import MOTION_TOKENS

# List all themes
color_themes = list(COLOR_TOKENS.keys())

# Get all font families
font_families = TYPOGRAPHY_TOKENS["font_families"]

# Get all spring configs
springs = MOTION_TOKENS["spring_configs"]
```

---

## MCP Tools for Tokens

The following MCP tools provide granular access to design tokens through Claude or other MCP clients:

### Color Token Tools

#### `remotion_list_color_tokens()`
List all color tokens for all themes.

```json
{
  "tech": {
    "primary": ["#0066FF", "#0052CC", "#003D99"],
    "accent": ["#00D9FF", "#00B8D4", "#0097A7"],
    ...
  },
  ...
}
```

#### `remotion_get_theme_colors(theme_name: str)`
Get colors for a specific theme.

```python
# Example: Get tech theme colors
remotion_get_theme_colors(theme_name="tech")

# Returns tech colors only
{
  "theme": "tech",
  "colors": {
    "primary": ["#0066FF", ...],
    "accent": ["#00D9FF", ...],
    "gradient": "linear-gradient(...)",
    "background": {...},
    "text": {...},
    "semantic": {...}
  }
}
```

#### `remotion_get_color_value(theme_name: str, color_type: str, index: int)`
Get a specific color value.

```python
# Example: Get tech primary color
remotion_get_color_value(
    theme_name="tech",
    color_type="primary",
    index=0
)

# Returns: {"value": "#0066FF"}
```

### Typography Token Tools

#### `remotion_list_typography_tokens()`
List all typography tokens (fonts, sizes, weights, styles).

```json
{
  "font_families": {...},
  "font_sizes": {...},
  "font_weights": {...},
  "line_heights": {...},
  "letter_spacing": {...},
  "text_styles": {...}
}
```

#### `remotion_get_font_families()`
Get available font family definitions.

```json
{
  "font_families": {
    "display": {
      "name": "Display",
      "fonts": ["Inter", "SF Pro Display", ...],
      ...
    },
    ...
  }
}
```

#### `remotion_get_font_sizes(resolution: str)`
Get font sizes for a specific resolution.

```python
# Example: Get 1080p font sizes
remotion_get_font_sizes(resolution="video_1080p")

# Returns sizes optimized for 1080p
{
  "resolution": "video_1080p",
  "font_sizes": {
    "xs": "24px",
    "sm": "32px",
    "base": "40px",
    ...
  }
}
```

#### `remotion_get_text_style(style_name: str)`
Get a specific text style preset.

```python
# Example: Get hero title style
remotion_get_text_style(style_name="hero_title")

# Returns complete style config
{
  "style_name": "hero_title",
  "style": {
    "fontSize": "4xl",
    "fontWeight": "black",
    "lineHeight": "tight",
    "letterSpacing": "tight",
    "fontFamily": "display"
  }
}
```

### Motion Token Tools

#### `remotion_list_motion_tokens()`
List all motion design tokens.

```json
{
  "spring_configs": {...},
  "easing_curves": {...},
  "durations": {...},
  "animation_presets": {...},
  "youtube_optimizations": {...}
}
```

#### `remotion_get_spring_configs()`
Get all spring animation configurations.

```json
{
  "spring_configs": {
    "gentle": {...},
    "smooth": {...},
    "bouncy": {...},
    ...
  }
}
```

#### `remotion_get_spring_config(spring_name: str)`
Get a specific spring configuration.

```python
# Example: Get bouncy spring
remotion_get_spring_config(spring_name="bouncy")

# Returns spring details
{
  "spring_name": "bouncy",
  "config": {
    "name": "Bouncy",
    "description": "Playful spring with overshoot",
    "config": {
      "damping": 15,
      "mass": 1.0,
      "stiffness": 300,
      "overshootClamping": false
    },
    "usage": "Attention-grabbing elements, playful UI"
  }
}
```

#### `remotion_get_easing_curves()`
Get all easing curve definitions.

#### `remotion_get_easing_curve(easing_name: str)`
Get a specific easing curve.

```python
# Example: Get ease-out-back easing
remotion_get_easing_curve(easing_name="ease_out_back")

# Returns easing details
{
  "easing_name": "ease_out_back",
  "curve": {
    "name": "Ease Out Back",
    "curve": [0.175, 0.885, 0.32, 1.275],
    "css": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    "description": "Overshoots then settles",
    "usage": "Attention-grabbing entrances"
  }
}
```

#### `remotion_get_durations()`
Get all duration presets.

#### `remotion_get_duration(duration_name: str)`
Get a specific duration preset.

```python
# Example: Get normal duration
remotion_get_duration(duration_name="normal")

# Returns duration values
{
  "duration_name": "normal",
  "duration": {
    "frames": 20,
    "seconds": 0.667,
    "description": "Normal",
    "usage": "Standard animations"
  }
}
```

#### `remotion_get_animation_presets()`
Get all animation presets.

#### `remotion_get_animation_preset(preset_name: str)`
Get a specific animation preset.

```python
# Example: Get fade-in preset
remotion_get_animation_preset(preset_name="fade_in")

# Returns preset configuration
{
  "preset_name": "fade_in",
  "preset": {
    "name": "Fade In",
    "properties": ["opacity"],
    "from": {"opacity": 0},
    "to": {"opacity": 1},
    "easing": "ease_out",
    "duration": "normal"
  }
}
```

#### `remotion_get_youtube_optimizations()`
Get YouTube optimization guidelines.

```json
{
  "youtube_optimizations": {
    "hook_timing": {
      "description": "First 3 seconds - must grab attention",
      "max_frames": 90,
      ...
    },
    "pattern_interrupt": {...},
    "retention_timing": {...}
  }
}
```

### Tool Usage Examples

#### Building a Component with Tokens

```python
# 1. Choose theme colors
colors = remotion_get_theme_colors(theme_name="tech")
primary = remotion_get_color_value(
    theme_name="tech",
    color_type="primary",
    index=0
)

# 2. Select typography
title_style = remotion_get_text_style(style_name="hero_title")
sizes_1080p = remotion_get_font_sizes(resolution="video_1080p")

# 3. Choose animation
spring = remotion_get_spring_config(spring_name="bouncy")
fade_in = remotion_get_animation_preset(preset_name="fade_in")
duration = remotion_get_duration(duration_name="normal")

# 4. Build component with these tokens
```

#### Exploring YouTube Optimizations

```python
# Get YouTube recommendations
youtube_opts = remotion_get_youtube_optimizations()

# Choose fast animation for hook
hook_animations = youtube_opts["hook_timing"]["recommended_animations"]

# Select appropriate duration
fast_duration = remotion_get_duration(duration_name="fast")
```

---

## Best Practices

### 1. Use Semantic Names
Always use token names rather than hardcoded values:

```python
# Good
color = COLOR_TOKENS["tech"]["primary"][0]

# Bad
color = "#0066FF"
```

### 2. Resolution-Aware Typography
Choose font sizes based on video resolution:

```python
# For 1080p videos
font_size = TYPOGRAPHY_TOKENS["font_sizes"]["video_1080p"]["xl"]

# For 4K videos
font_size = TYPOGRAPHY_TOKENS["font_sizes"]["video_4k"]["xl"]
```

### 3. Consistent Motion
Use motion tokens for consistent animation feel:

```python
# Use duration tokens
duration = MOTION_TOKENS["durations"]["normal"]["seconds"]

# Use spring configs
spring = MOTION_TOKENS["spring_configs"]["smooth"]
```

### 4. Accessibility
Ensure text contrast using semantic text colors:

```python
# Text on dark background
text_color = COLOR_TOKENS["tech"]["text"]["on_dark"]  # White

# Text on light background
text_color = COLOR_TOKENS["tech"]["text"]["on_light"]  # Dark
```

### 5. Theme Consistency
Stick to one theme's tokens throughout a video:

```python
theme = "tech"
primary_color = COLOR_TOKENS[theme]["primary"][0]
body_font = TYPOGRAPHY_TOKENS["font_families"]["body"]
smooth_spring = MOTION_TOKENS["spring_configs"]["smooth"]
```

---

## Extending the Token System

### Adding Custom Colors

```python
from chuk_mcp_remotion.tokens.colors import COLOR_TOKENS

# Add custom theme
COLOR_TOKENS["custom"] = {
    "name": "Custom",
    "description": "My custom theme",
    "primary": ["#FF0000", "#CC0000", "#990000"],
    "accent": ["#00FF00", "#00CC00", "#009900"],
    # ... rest of structure
}
```

### Adding Custom Fonts

```python
from chuk_mcp_remotion.tokens.typography import TYPOGRAPHY_TOKENS

# Add custom font family
TYPOGRAPHY_TOKENS["font_families"]["custom"] = {
    "name": "Custom Font",
    "fonts": ["CustomFont", "fallback", "sans-serif"],
    "description": "Custom brand font",
    "usage": "Brand content"
}
```

### Adding Custom Animations

```python
from chuk_mcp_remotion.tokens.motion import MOTION_TOKENS

# Add custom spring config
MOTION_TOKENS["spring_configs"]["custom"] = {
    "name": "Custom Spring",
    "description": "My custom motion",
    "config": {
        "damping": 150,
        "mass": 0.8,
        "stiffness": 250,
        "overshootClamping": False
    },
    "usage": "Custom animations"
}
```

---

## Related Documentation

- [Themes](./themes.md) - Using tokens in complete themes
- [Components](../README.md#component-catalog) - Applying tokens to components
- [README](../README.md) - Project overview

## Source Files

- Color tokens: `src/chuk_mcp_remotion/tokens/colors.py`
- Typography tokens: `src/chuk_mcp_remotion/tokens/typography.py`
- Motion tokens: `src/chuk_mcp_remotion/tokens/motion.py`
