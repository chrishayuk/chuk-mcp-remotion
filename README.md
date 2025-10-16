# chuk-mcp-remotion

> AI-powered video generation with Remotion - A design-system-first approach to creating professional YouTube videos

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![MCP](https://img.shields.io/badge/MCP-compatible-green.svg)](https://github.com/anthropics/mcp)

## Overview

`chuk-mcp-remotion` is an MCP (Model Context Protocol) server that brings the power of [Remotion](https://www.remotion.dev) video generation to AI assistants like Claude. It provides a **design-system-first approach** inspired by [shadcn/ui](https://ui.shadcn.com) and [chuk-mcp-pptx](https://github.com/chrishayuk/chuk-mcp-pptx), making it easy for LLMs to create professional, animated videos optimized for YouTube.

### Key Features

- **🎨 Design System Approach**: Pre-built themes, components, and tokens optimized for video
- **🎬 YouTube-Optimized**: Components designed for hooks, retention, and engagement
- **🤖 LLM-Friendly**: Discoverable components with detailed schemas and examples
- **⚡ Powered by Remotion**: Generate React-based videos programmatically
- **🎯 Component Library**: 20+ ready-to-use video components (titles, overlays, charts, animations)
- **🎨 7 Built-in Themes**: Tech, Finance, Education, Lifestyle, Gaming, Minimal, Business
- **📊 Data Visualization**: Animated charts and counters for engaging data presentation

## Architecture

### Design System Structure

```
Design Tokens → Components → Variants → Themes
```

1. **Design Tokens**: Core design primitives
   - **Colors**: 7 theme palettes (tech, finance, education, etc.)
   - **Typography**: Font scales optimized for 720p/1080p/4K
   - **Motion**: Spring configs, easings, duration presets

2. **Component Registry**: 20+ video components
   - **Scenes**: TitleScene, EndScreen
   - **Layouts**: AsymmetricLayout, ThreeColumnLayout, ThreeRowLayout, ThreeByThreeGrid, Grid, SplitScreen
   - **Overlays**: LowerThird, TextOverlay, SubscribeButton
   - **Charts**: LineChart, Counter
   - **Code**: CodeBlock, TypingCode
   - **Animations**: Pre-built animation presets

3. **Themes**: Complete design systems
   - Tech, Finance, Education, Lifestyle, Gaming, Minimal, Business
   - Each theme combines colors, typography, and motion

4. **Variants**: Multiple styles per component (inspired by cva)
   - Example: LowerThird variants: minimal, standard, glass, bold, animated

## Installation

### Prerequisites

- Python 3.11+
- Node.js 18+ (for Remotion)
- npm or yarn

### Install Python Package

```bash
# Clone the repository
git clone https://github.com/chrishayuk/chuk-mcp-remotion.git
cd chuk-mcp-remotion

# Install dependencies
pip install -e .

# Or with uv (faster)
uv pip install -e .
```

### Install Remotion (Node.js)

The server generates Remotion projects, so you'll need Remotion installed:

```bash
# Remotion will be installed per-project
# The MCP server handles this automatically
```

## Examples

### YouTube Layouts Showcase

See all available layouts in action:

```bash
python examples/youtube_layouts.py
```

This creates a 32-second showcase demonstrating:
- 3x3 Grid Layout
- 3 Column Layout (custom widths)
- 3 Row Layout (custom heights)
- Asymmetric Layouts (main + demo panels)
- Bordered layouts with mixed content

[**Full YouTube Layouts Guide →**](docs/YOUTUBE_LAYOUTS.md)

### More Examples

```bash
# Explore design system
python examples/explore_design_system.py

# Data visualization
python examples/data_visualization_overlay.py

# Code display
python examples/code_display.py
```

## Quick Start

### 1. Start the Server

**HTTP Mode** (for testing/development):
```bash
python -m chuk_mcp_remotion.server http --port 8000
```

**STDIO Mode** (for Claude Desktop):
```bash
python -m chuk_mcp_remotion.server stdio
```

### 2. Explore Available Components

Use the discovery tools to explore what's available:

```python
# List all components
remotion_list_components()

# Search for specific components
remotion_search_components(query="text")

# Get component schema
remotion_get_component_schema(component_name="LowerThird")

# List themes
remotion_list_themes()
```

### 3. Explore Design Tokens

```python
# Color palettes
remotion_list_color_tokens()

# Typography system
remotion_list_typography_tokens()

# Motion design
remotion_list_motion_tokens()
```

## Component Catalog

### Scenes

#### TitleScene
Full-screen animated title card
- **Variants**: minimal, standard, bold, kinetic
- **Animations**: fade_zoom, slide_up, typewriter, blur_in, split

```python
{
    "text": "The Future of AI",
    "subtitle": "Transforming Technology",
    "variant": "bold",
    "animation": "fade_zoom",
    "duration_seconds": 3.0
}
```

#### EndScreen
YouTube end screen with CTAs
- **Variants**: standard, split, carousel, minimal

### Overlays

#### LowerThird
Name plate overlay (TV-style graphics)
- **Variants**: minimal, standard, glass, bold, animated
- **Positions**: bottom_left, bottom_center, bottom_right, top_left, top_center

```python
{
    "name": "Dr. Sarah Chen",
    "title": "AI Researcher, Stanford",
    "variant": "glass",
    "position": "bottom_left",
    "start_time": 2.0,
    "duration": 5.0
}
```

#### TextOverlay
Animated text for emphasis
- **Styles**: emphasis, caption, callout, subtitle, quote
- **Animations**: blur_in, slide_up, fade, typewriter, scale_in

#### SubscribeButton
Animated subscribe button
- **Animations**: bounce, glow, pulse, slide, wiggle

### Layouts

**NEW!** Complete coverage of all 10 common YouTube layout patterns! Perfect for tutorials, showcases, reactions, and more.

#### AsymmetricLayout
Perfect for tutorials! Main feed + demo panels.
- **Variants**: main-right (default), main-left, main-bottom, main-top
- **Features**:
  - Main content (2/3 screen)
  - Two demo panels (1/3 screen, stacked)
  - Optional overlay support
  - Border and styling controls

```python
{
    "type": "AsymmetricLayout",
    "config": {
        "layout": "main-right",
        "border_width": 2
    },
    "mainFeed": {"type": "TypingCode", ...},
    "demo1": {"type": "CodeBlock", ...},
    "demo2": {"type": "CodeBlock", ...},
    "overlay": {"type": "LowerThird", ...}
}
```

#### ThreeColumnLayout
Sidebar + Main + Sidebar arrangements
- **Configurable widths** (e.g., 25-50-25, 30-40-30)
- **Use cases**: Side-by-side comparisons, dashboards

#### ThreeRowLayout
Header + Main + Footer arrangements
- **Configurable heights** (e.g., 20-60-20, 15-70-15)
- **Use cases**: Intro + content + CTA

#### ThreeByThreeGrid
Perfect 3x3 grid (9 cells)
- **Use cases**: Feature showcases, comparison matrices

#### Grid (Flexible)
Multi-layout grid system
- **Layouts**: 1x2, 2x1, 2x2, 3x2, 2x3, 3x3, 4x2, 2x4

#### PiPLayout ⭐ NEW
Picture-in-picture with webcam overlay
- **Positions**: bottom-right, bottom-left, top-right, top-left
- **Use cases**: Commentary videos, reaction streams

#### VerticalLayout ⭐ NEW
Optimized for 9:16 Shorts/TikTok/Reels
- **Layouts**: top-bottom, caption-content, content-caption, split-vertical
- **Use cases**: YouTube Shorts, TikTok, Instagram Reels

#### MosaicLayout ⭐ NEW
Irregular collage with layered clips
- **Styles**: hero-corners, stacked, spotlight
- **Use cases**: Montages, highlight reels, creative intros

#### TimelineLayout ⭐ NEW
Progress/timeline overlay with milestones
- **Features**: Progress bar, milestone markers, position indicators
- **Use cases**: Educational explainers, progression videos

**📚 All 10 YouTube Layout Patterns:** See [Complete Layouts Guide](docs/ALL_YOUTUBE_LAYOUTS.md) for the full coverage matrix.

### Charts & Data

#### LineChart
Animated line chart
- **Animations**: draw, fade_in, scale_in, points_sequence

#### Counter
Animated number counter for stats
- **Animations**: count_up, flip, slot_machine, digital

## Themes

### Tech Theme
Modern tech aesthetic with blue/cyan palette
- **Use Cases**: Tech reviews, coding tutorials, software demos
- **Colors**: Primary blue (#0066FF), Accent cyan (#00D9FF)
- **Motion**: Smooth spring, ease-out curves

### Finance Theme
Professional finance with green/gold
- **Use Cases**: Stock analysis, investing advice, business news
- **Colors**: Primary green (#00C853), Accent gold (#FFD600)
- **Motion**: Snappy, precise animations

### Education Theme
Friendly education with purple/orange
- **Use Cases**: Educational content, explainers, courses
- **Colors**: Primary purple (#7C4DFF), Accent orange (#FF6E40)
- **Motion**: Bouncy, playful animations

### Gaming Theme
High-energy gaming with neon accents
- **Use Cases**: Gaming videos, esports, stream overlays
- **Colors**: Neon green (#00E676), Neon purple (#E040FB)
- **Motion**: Elastic, energetic animations

### Minimal Theme
Clean monochrome aesthetic
- **Use Cases**: Professional content, documentaries, interviews
- **Colors**: Grayscale with accent colors
- **Motion**: Smooth, subtle animations

### Lifestyle Theme
Warm lifestyle with coral/pink
- **Use Cases**: Vlogs, lifestyle, wellness, travel
- **Colors**: Pink (#FF6B9D), Coral (#FFB74D)
- **Motion**: Gentle, smooth animations

### Business Theme
Professional business with navy/teal
- **Use Cases**: Corporate videos, presentations, B2B
- **Colors**: Navy (#1565C0), Teal (#00ACC1)
- **Motion**: Snappy, professional animations

## MCP Tools

### Discovery Tools
- `remotion_list_components(category?)` - List available components
- `remotion_search_components(query)` - Search components
- `remotion_get_component_schema(name)` - Get component details
- `remotion_list_themes()` - List available themes
- `remotion_get_theme_info(name)` - Get theme details

### Token Tools
- `remotion_list_color_tokens()` - Color palettes
- `remotion_list_typography_tokens()` - Typography system
- `remotion_list_motion_tokens()` - Motion design

### Info Tools
- `remotion_get_info()` - Server information and statistics

## Configuration for Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "remotion": {
      "command": "python",
      "args": ["-m", "chuk_mcp_remotion.server", "stdio"],
      "env": {
        "MCP_STDIO": "1"
      }
    }
  }
}
```

## Development

### Project Structure

```
chuk-mcp-remotion/
├── src/chuk_mcp_remotion/
│   ├── server.py              # Main MCP server
│   ├── tokens/                # Design tokens
│   │   ├── colors.py         # Color palettes
│   │   ├── typography.py     # Typography system
│   │   └── motion.py         # Motion design
│   ├── registry/             # Component registry
│   │   └── components.py     # Component definitions
│   ├── themes/               # Theme system
│   │   └── youtube_themes.py # YouTube-optimized themes
│   ├── generator/            # TSX generation
│   │   ├── templates/        # Organized template library
│   │   │   ├── layouts/     # Layout components
│   │   │   ├── overlays/    # Overlay components
│   │   │   ├── effects/     # Effects
│   │   │   └── content/     # Content components
│   │   ├── component_builder.py
│   │   └── composition_builder.py
│   ├── renderer/             # Remotion rendering
│   └── utils/                # Utilities
├── docs/                     # Documentation
│   └── YOUTUBE_LAYOUTS.md   # Layout guide
├── examples/                 # Example videos
│   └── youtube_layouts.py   # Layout showcase
├── tests/                    # Tests
└── remotion-projects/        # Generated projects
```

### Running Tests

```bash
pytest
```

### Code Quality

```bash
# Format code
ruff format .

# Lint
ruff check .

# Type check
mypy src
```

## Roadmap

### Phase 1: Foundation ✅
- ✅ Design token system (colors, typography, motion)
- ✅ Component registry with 20+ core components
- ✅ 7 YouTube-optimized themes
- ✅ Discovery tools for LLMs
- ✅ Professional layout system (grids, columns, asymmetric)
- ✅ Organized template structure

### Phase 2: Generation ⚡ (Current)
- ✅ TSX component generation
- ✅ Remotion project scaffolding
- ✅ Composition builder
- 🔲 Asset management
- 🔲 Advanced animations

### Phase 3: Rendering
- 🔲 Remotion render integration
- 🔲 Export to MP4/WebM
- 🔲 Thumbnail generation
- 🔲 Preview generation

### Phase 4: Advanced Features
- 🔲 Custom theme builder
- 🔲 Animation timeline editor
- 🔲 Audio sync
- 🔲 B-roll suggestions
- 🔲 Auto-captioning

## Inspiration

This project is inspired by:

- **[Remotion](https://www.remotion.dev)**: Programmatic video generation with React
- **[shadcn/ui](https://ui.shadcn.com)**: Design system and component approach
- **[chuk-mcp-pptx](https://github.com/chrishayuk/chuk-mcp-pptx)**: Design-system-first MCP server
- **[chuk-mcp-server](https://github.com/chrishayuk/chuk-mcp-server)**: Zero-config MCP framework

## Contributing

Contributions welcome! Please check out our [contributing guidelines](CONTRIBUTING.md).

## License

MIT License - see [LICENSE](LICENSE) for details.

## Links

- **GitHub**: https://github.com/chrishayuk/chuk-mcp-remotion
- **Documentation**: https://github.com/chrishayuk/chuk-mcp-remotion/docs
- **Related Projects**:
  - [chuk-mcp-server](https://github.com/chrishayuk/chuk-mcp-server)
  - [chuk-mcp-pptx](https://github.com/chrishayuk/chuk-mcp-pptx)
  - [Remotion](https://www.remotion.dev)

## Author

**Chris Hay** - [@chrishayuk](https://github.com/chrishayuk)

---

Built with ❤️ using [chuk-mcp-server](https://github.com/chrishayuk/chuk-mcp-server) and [Remotion](https://www.remotion.dev)
