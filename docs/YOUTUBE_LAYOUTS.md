# YouTube Video Layouts Guide

Comprehensive guide to the layout components available for creating professional YouTube videos.

## Template Organization

Templates are now organized into logical categories:

```
templates/
├── layouts/         # Layout components (grids, columns, rows, asymmetric)
├── overlays/        # Overlay components (lower thirds, titles)
├── effects/         # Visual effects and transitions
└── content/         # Content components (code blocks, charts, etc.)
```

## Available Layouts

### 1. ThreeColumnLayout

Perfect for sidebar + main + sidebar arrangements.

**Use Cases:**
- Side-by-side code comparisons
- Main content with supporting panels
- Documentation with examples

**Configuration:**
```python
{
    "type": "ThreeColumnLayout",
    "config": {
        "left_width": 30,      # Left column width (%)
        "center_width": 40,    # Center column width (%)
        "right_width": 30,     # Right column width (%)
        "border_width": 2,     # Optional border
        "gap": 20,             # Gap between columns
        "padding": 40          # Padding from edges
    },
    "left": {/* component */},
    "center": {/* component */},
    "right": {/* component */}
}
```

**Example:**
```python
three_column = {
    "type": "ThreeColumnLayout",
    "config": {
        "left_width": 25,
        "center_width": 50,
        "right_width": 25,
        "border_width": 2
    },
    "left": {"type": "CodeBlock", "config": {...}},
    "center": {"type": "CodeBlock", "config": {...}},
    "right": {"type": "LineChart", "config": {...}}
}
```

---

### 2. ThreeRowLayout

Ideal for header + main + footer arrangements.

**Use Cases:**
- Introduction + content + conclusion
- Title + demo + call-to-action
- Stacked content progression

**Configuration:**
```python
{
    "type": "ThreeRowLayout",
    "config": {
        "top_height": 20,      # Top row height (%)
        "middle_height": 60,   # Middle row height (%)
        "bottom_height": 20,   # Bottom row height (%)
        "border_width": 2,     # Optional border
        "gap": 20,             # Gap between rows
        "padding": 40          # Padding from edges
    },
    "top": {/* component */},
    "middle": {/* component */},
    "bottom": {/* component */}
}
```

**Example:**
```python
three_row = {
    "type": "ThreeRowLayout",
    "config": {
        "top_height": 15,
        "middle_height": 70,
        "bottom_height": 15
    },
    "top": {"type": "TitleScene", "config": {...}},
    "middle": {"type": "CodeBlock", "config": {...}},
    "bottom": {"type": "LowerThird", "config": {...}}
}
```

---

### 3. ThreeByThreeGrid

Perfect for showcasing 9 equal-sized items.

**Use Cases:**
- Code snippet collections
- Feature showcases
- Portfolio displays
- Comparison matrices

**Configuration:**
```python
{
    "type": "ThreeByThreeGrid",
    "config": {
        "padding": 40,            # Padding from edges
        "gap": 20,                # Gap between cells
        "border_width": 2,        # Optional cell borders
        "cell_background": "...", # Optional cell background
        "background": "..."       # Optional grid background
    },
    "children": [
        {/* component 1 */},
        {/* component 2 */},
        // ... up to 9 components
    ]
}
```

**Example:**
```python
grid_3x3 = {
    "type": "ThreeByThreeGrid",
    "config": {
        "gap": 15,
        "border_width": 2,
        "cell_background": "rgba(0, 0, 0, 0.3)"
    },
    "children": [
        {"type": "CodeBlock", "config": {"code": "cell 1"}},
        {"type": "CodeBlock", "config": {"code": "cell 2"}},
        # ... 7 more children
    ]
}
```

---

### 4. AsymmetricLayout

**The ultimate layout for tutorials!** Main content area with demo panels.

**Use Cases:**
- Live coding tutorials with reference code
- Main feed with auxiliary information
- Tutorial with step-by-step panels
- Demo with comparison views

**Layouts Available:**
- `main-right`: Demo panels on left (stacked), main feed on right (2/3 width) - **DEFAULT**
- `main-left`: Main feed on left (2/3 width), demo panels on right (stacked)
- `main-bottom`: Demo panels on top (side by side), main feed on bottom (2/3 height)
- `main-top`: Main feed on top (2/3 height), demo panels on bottom (side by side)

**Configuration:**
```python
{
    "type": "AsymmetricLayout",
    "config": {
        "layout": "main-right",    # Layout variant
        "main_ratio": 66.67,       # Main feed size (%)
        "border_width": 2,         # Optional borders
        "gap": 20,                 # Gap between panels
        "padding": 40,             # Padding from edges
        "main_background": "...",  # Optional main background
        "demo_background": "..."   # Optional demo background
    },
    "mainFeed": {/* main component */},
    "demo1": {/* first demo component */},
    "demo2": {/* second demo component */},
    "overlay": {/* optional overlay like lower third */}
}
```

**Example - Coding Tutorial:**
```python
tutorial_layout = {
    "type": "AsymmetricLayout",
    "config": {
        "layout": "main-right",
        "main_ratio": 66.67,
        "border_width": 2
    },
    "demo1": {
        "type": "CodeBlock",
        "config": {
            "code": "// Setup code\nconst config = {...};",
            "language": "javascript"
        }
    },
    "demo2": {
        "type": "CodeBlock",
        "config": {
            "code": "// Helper functions\nfunction helper() {...}",
            "language": "javascript"
        }
    },
    "mainFeed": {
        "type": "TypingCode",
        "config": {
            "code": "// Main implementation\nclass Application {...}",
            "language": "javascript",
            "typing_speed": 2
        }
    },
    "overlay": {
        "type": "LowerThird",
        "config": {
            "name": "Tutorial Mode",
            "title": "Building the main application",
            "variant": "glass"
        }
    }
}
```

---

## Grid Layout (Flexible)

The existing Grid component supports various layouts:

**Supported Grid Patterns:**
- `1x2` - Single column, 2 rows
- `2x1` - 2 columns, single row
- `2x2` - 2x2 grid (4 cells)
- `3x2` - 3 columns, 2 rows (6 cells)
- `2x3` - 2 columns, 3 rows (6 cells)
- `3x3` - 3x3 grid (9 cells)
- `4x2` - 4 columns, 2 rows (8 cells)
- `2x4` - 2 columns, 4 rows (8 cells)

**Example:**
```python
flexible_grid = {
    "type": "Grid",
    "config": {
        "layout": "2x3",
        "gap": 20,
        "padding": 40
    },
    "children": [
        {/* component 1 */},
        {/* component 2 */},
        # ... up to 6 components for 2x3
    ]
}
```

---

## Design Token Integration

All layouts use the design token system for consistent styling:

**Colors:**
```python
# Border colors automatically use theme colors
"border_color": colors.text.muted
"background": colors.background.dark
```

**Spacing:**
```python
"gap": 20          # Gap between panels/cells
"padding": 40      # Padding from screen edges
```

**Borders:**
```python
"border_width": 2                    # Border thickness
"border_radius": 8                   # Corner radius
"border_color": colors.text.muted    # Uses theme colors
```

---

## Common Layout Patterns for YouTube

### Pattern 1: Tutorial with Code Reference

```python
# Main code on right, reference panels on left
{
    "type": "AsymmetricLayout",
    "config": {"layout": "main-right"},
    "mainFeed": {/* TypingCode or CodeBlock */},
    "demo1": {/* Reference code */},
    "demo2": {/* Helper code */}
}
```

### Pattern 2: Before & After Comparison

```python
# Two equal panels side by side
{
    "type": "SplitScreen",
    "config": {
        "direction": "horizontal",
        "ratio": 0.5
    },
    "left": {/* Before state */},
    "right": {/* After state */}
}
```

### Pattern 3: Feature Showcase

```python
# 3x3 grid of features
{
    "type": "ThreeByThreeGrid",
    "config": {"gap": 20, "border_width": 2},
    "children": [/* 9 feature items */]
}
```

### Pattern 4: Dashboard View

```python
# Main content with sidebar metrics
{
    "type": "ThreeColumnLayout",
    "config": {
        "left_width": 20,
        "center_width": 60,
        "right_width": 20
    },
    "left": {/* Metrics */},
    "center": {/* Main chart/demo */},
    "right": {/* Additional info */}
}
```

### Pattern 5: Layered Information

```python
# Stacked content with different heights
{
    "type": "ThreeRowLayout",
    "config": {
        "top_height": 25,
        "middle_height": 50,
        "bottom_height": 25
    },
    "top": {/* Context/title */},
    "middle": {/* Main content */},
    "bottom": {/* Summary/CTA */}
}
```

---

## Best Practices

### 1. **Consistent Spacing**
Use standard gap values (10, 15, 20, 30) for visual harmony.

### 2. **Responsive Ratios**
For asymmetric layouts, 2/3-1/3 (66.67/33.33) is ideal for YouTube.

### 3. **Border Usage**
Borders help separate content but use sparingly. Consider:
- `border_width: 1-2` for subtle separation
- `border_width: 3-4` for strong emphasis

### 4. **Background Colors**
Use semi-transparent backgrounds for depth:
```python
"cell_background": "rgba(0, 0, 0, 0.3)"  # Subtle
"cell_background": "rgba(0, 0, 0, 0.6)"  # Strong
```

### 5. **Padding Guidelines**
- **Desktop (1080p)**: 40px padding
- **Mobile-friendly**: 20-30px padding
- **Tight layouts**: 10-15px padding

---

## Example: Complete Tutorial Scene

Here's a complete example combining multiple layouts:

```python
tutorial_scene = {
    "scenes": [
        # Scene 1: Title
        {
            "type": "TitleScene",
            "config": {
                "title": "Building a React Component",
                "subtitle": "Step-by-step tutorial"
            },
            "startFrame": 0,
            "durationInFrames": 90
        },

        # Scene 2: Main tutorial with reference
        {
            "type": "AsymmetricLayout",
            "config": {
                "layout": "main-right",
                "border_width": 2
            },
            "demo1": {
                "type": "CodeBlock",
                "config": {
                    "code": "// imports\\nimport React from 'react';",
                    "language": "javascript"
                }
            },
            "demo2": {
                "type": "CodeBlock",
                "config": {
                    "code": "// types\\ninterface Props {...}",
                    "language": "typescript"
                }
            },
            "mainFeed": {
                "type": "TypingCode",
                "config": {
                    "code": "// Component\\nfunction MyComponent(props: Props) {...}",
                    "language": "typescript"
                }
            },
            "overlay": {
                "type": "LowerThird",
                "config": {
                    "name": "Live Coding",
                    "variant": "glass"
                }
            },
            "startFrame": 90,
            "durationInFrames": 300
        },

        # Scene 3: Feature grid showcase
        {
            "type": "ThreeByThreeGrid",
            "config": {
                "gap": 20,
                "border_width": 2
            },
            "children": [
                # ... 9 feature highlights
            ],
            "startFrame": 390,
            "durationInFrames": 120
        }
    ]
}
```

---

## Running the Example

To see all layouts in action:

```bash
cd examples
python youtube_layouts.py
```

This creates a complete showcase project demonstrating:
- ✓ 3x3 Grid Layout
- ✓ 3 Column Layout
- ✓ 3 Row Layout
- ✓ Asymmetric Layouts (both orientations)
- ✓ Bordered layouts
- ✓ Mixed content types
- ✓ Design token integration

---

## Troubleshooting

### Layout Not Rendering

**Issue:** Component doesn't appear
**Solution:** Check that `startFrame` and `durationInFrames` are set correctly

### Children Not Displaying

**Issue:** Nested components don't show
**Solution:** Ensure children are properly formatted as ComponentInstance objects or dictionaries

### Border/Spacing Issues

**Issue:** Borders overlap or spacing is wrong
**Solution:** Adjust `gap` and check that width/height percentages add up correctly

---

## What's Next?

- Explore animation variants for layout transitions
- Combine layouts for complex scenes
- Experiment with custom ratios and configurations
- Try different themes (tech, finance, gaming, etc.)

Happy creating! 🎥✨
