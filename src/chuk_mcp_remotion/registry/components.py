"""
Component registry for Remotion video components.

LLM-friendly registry with detailed schemas, variants, and examples.
Inspired by shadcn/ui component approach.
"""

COMPONENT_REGISTRY = {
    "TitleScene": {
        "description": "Full-screen animated title card for video openings",
        "category": "scene",
        "variants": {
            "minimal": "Clean, simple text on solid background",
            "standard": "Text with gradient background",
            "bold": "Large text with animated gradient and effects",
            "kinetic": "Dynamic text with motion typography"
        },
        "animations": {
            "fade_zoom": "Fade in with subtle zoom",
            "slide_up": "Slide up from bottom with blur",
            "typewriter": "Character-by-character reveal",
            "blur_in": "Blur to sharp focus",
            "split": "Text splits from center"
        },
        "schema": {
            "text": {
                "type": "string",
                "required": True,
                "description": "Main title text"
            },
            "subtitle": {
                "type": "string",
                "required": False,
                "description": "Optional subtitle text"
            },
            "variant": {
                "type": "enum",
                "default": "standard",
                "values": ["minimal", "standard", "bold", "kinetic"],
                "description": "Visual style variant"
            },
            "animation": {
                "type": "enum",
                "default": "fade_zoom",
                "values": ["fade_zoom", "slide_up", "typewriter", "blur_in", "split"],
                "description": "Animation style"
            },
            "duration_seconds": {
                "type": "float",
                "default": 3.0,
                "description": "Duration in seconds"
            }
        },
        "example": {
            "text": "The Future of AI",
            "subtitle": "Transforming Technology",
            "variant": "bold",
            "animation": "fade_zoom",
            "duration_seconds": 3.0
        }
    },

    "LowerThird": {
        "description": "Name plate overlay with title and subtitle (like TV graphics)",
        "category": "overlay",
        "variants": {
            "minimal": "Simple text on subtle background",
            "standard": "Text with clean bar background",
            "glass": "Glassmorphism effect with blur",
            "bold": "High contrast with accent colors",
            "animated": "Dynamic sliding animation"
        },
        "positions": {
            "bottom_left": "Bottom left corner (standard TV position)",
            "bottom_center": "Bottom center",
            "bottom_right": "Bottom right corner",
            "top_left": "Top left corner",
            "top_center": "Top center"
        },
        "schema": {
            "name": {
                "type": "string",
                "required": True,
                "description": "Main name/text (larger)"
            },
            "title": {
                "type": "string",
                "required": False,
                "description": "Subtitle/title (smaller, below name)"
            },
            "variant": {
                "type": "enum",
                "default": "glass",
                "values": ["minimal", "standard", "glass", "bold", "animated"],
                "description": "Visual style"
            },
            "position": {
                "type": "enum",
                "default": "bottom_left",
                "values": ["bottom_left", "bottom_center", "bottom_right", "top_left", "top_center"],
                "description": "Screen position"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 5.0,
                "description": "How long to show (seconds)"
            }
        },
        "example": {
            "name": "Dr. Sarah Chen",
            "title": "AI Researcher, Stanford",
            "variant": "glass",
            "position": "bottom_left",
            "start_time": 2.0,
            "duration": 5.0
        }
    },

    "TextOverlay": {
        "description": "Animated text overlay for emphasis and captions",
        "category": "overlay",
        "styles": {
            "emphasis": "Large text for key points",
            "caption": "Subtitle-style text at bottom",
            "callout": "Attention-grabbing highlight",
            "subtitle": "Standard subtitle formatting",
            "quote": "Quotation styling with attribution"
        },
        "animations": {
            "blur_in": "Blur to focus",
            "slide_up": "Slide from bottom",
            "fade": "Simple fade in/out",
            "typewriter": "Character reveal",
            "scale_in": "Scale from center"
        },
        "schema": {
            "text": {
                "type": "string",
                "required": True,
                "description": "Text content"
            },
            "style": {
                "type": "enum",
                "default": "emphasis",
                "values": ["emphasis", "caption", "callout", "subtitle", "quote"],
                "description": "Text style"
            },
            "animation": {
                "type": "enum",
                "default": "blur_in",
                "values": ["blur_in", "slide_up", "fade", "typewriter", "scale_in"],
                "description": "Animation style"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 3.0,
                "description": "How long to show (seconds)"
            },
            "position": {
                "type": "string",
                "default": "center",
                "description": "Position (center, top, bottom, custom)"
            }
        },
        "example": {
            "text": "Mind. Blown. 🤯",
            "style": "emphasis",
            "animation": "scale_in",
            "start_time": 5.0,
            "duration": 2.0,
            "position": "center"
        }
    },

    "SubscribeButton": {
        "description": "Animated subscribe button overlay (YouTube-specific)",
        "category": "overlay",
        "animations": {
            "bounce": "Bouncy spring animation",
            "glow": "Pulsing glow effect",
            "pulse": "Scale pulse",
            "slide": "Slide in from side",
            "wiggle": "Attention-grabbing wiggle"
        },
        "positions": {
            "bottom_right": "Bottom right (standard)",
            "bottom_center": "Bottom center",
            "center": "Center of screen",
            "top_right": "Top right"
        },
        "schema": {
            "variant": {
                "type": "enum",
                "default": "standard",
                "values": ["minimal", "standard", "animated", "3d"],
                "description": "Button style"
            },
            "animation": {
                "type": "enum",
                "default": "bounce",
                "values": ["bounce", "glow", "pulse", "slide", "wiggle"],
                "description": "Animation style"
            },
            "position": {
                "type": "enum",
                "default": "bottom_right",
                "values": ["bottom_right", "bottom_center", "center", "top_right"],
                "description": "Screen position"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 3.0,
                "description": "How long to show (seconds)"
            },
            "custom_text": {
                "type": "string",
                "default": "SUBSCRIBE",
                "description": "Custom button text"
            }
        },
        "example": {
            "variant": "animated",
            "animation": "bounce",
            "position": "bottom_right",
            "start_time": 10.0,
            "duration": 3.0,
            "custom_text": "SUBSCRIBE"
        }
    },

    "LineChart": {
        "description": "Animated line chart for data visualization",
        "category": "chart",
        "animations": {
            "draw": "Line draws from left to right",
            "fade_in": "Chart fades in",
            "scale_in": "Chart scales from center",
            "points_sequence": "Points appear sequentially"
        },
        "schema": {
            "data": {
                "type": "array",
                "required": True,
                "description": "Array of data points [x, y] or {x, y, label}"
            },
            "title": {
                "type": "string",
                "default": "",
                "description": "Chart title"
            },
            "xlabel": {
                "type": "string",
                "default": "",
                "description": "X-axis label"
            },
            "ylabel": {
                "type": "string",
                "default": "",
                "description": "Y-axis label"
            },
            "animate_draw": {
                "type": "boolean",
                "default": True,
                "description": "Animate line drawing"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 4.0,
                "description": "How long to animate (seconds)"
            }
        },
        "example": {
            "data": [[0, 10], [1, 25], [2, 45], [3, 70], [4, 90]],
            "title": "User Growth",
            "xlabel": "Month",
            "ylabel": "Users (thousands)",
            "animate_draw": True,
            "start_time": 8.0,
            "duration": 4.0
        }
    },

    "Counter": {
        "description": "Animated number counter for statistics and metrics",
        "category": "animation",
        "animations": {
            "count_up": "Count from start to end value",
            "flip": "Digit flip animation",
            "slot_machine": "Slot machine roll effect",
            "digital": "Digital display style"
        },
        "schema": {
            "start_value": {
                "type": "number",
                "default": 0,
                "description": "Starting number"
            },
            "end_value": {
                "type": "number",
                "required": True,
                "description": "Ending number"
            },
            "prefix": {
                "type": "string",
                "default": "",
                "description": "Text before number (e.g., '$')"
            },
            "suffix": {
                "type": "string",
                "default": "",
                "description": "Text after number (e.g., 'M', '%')"
            },
            "decimals": {
                "type": "integer",
                "default": 0,
                "description": "Number of decimal places"
            },
            "animation": {
                "type": "enum",
                "default": "count_up",
                "values": ["count_up", "flip", "slot_machine", "digital"],
                "description": "Animation style"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to start (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 2.0,
                "description": "Animation duration (seconds)"
            }
        },
        "example": {
            "start_value": 0,
            "end_value": 1000000,
            "prefix": "",
            "suffix": "+ users",
            "decimals": 0,
            "animation": "count_up",
            "start_time": 5.0,
            "duration": 2.0
        }
    },

    "EndScreen": {
        "description": "YouTube end screen with CTAs and video suggestions",
        "category": "scene",
        "variants": {
            "standard": "Simple layout with video thumbnail and subscribe",
            "split": "Split screen with multiple CTAs",
            "carousel": "Sliding carousel of videos",
            "minimal": "Clean single CTA"
        },
        "schema": {
            "cta_text": {
                "type": "string",
                "required": True,
                "description": "Call-to-action text"
            },
            "thumbnail_url": {
                "type": "string",
                "default": None,
                "description": "Video thumbnail URL"
            },
            "variant": {
                "type": "enum",
                "default": "standard",
                "values": ["standard", "split", "carousel", "minimal"],
                "description": "Layout variant"
            },
            "duration_seconds": {
                "type": "float",
                "default": 10.0,
                "description": "Duration (seconds)"
            }
        },
        "example": {
            "cta_text": "Watch Next",
            "thumbnail_url": "https://example.com/thumb.jpg",
            "variant": "split",
            "duration_seconds": 10.0
        }
    },

    "CodeBlock": {
        "description": "Syntax-highlighted code display with animated entrance",
        "category": "code",
        "variants": {
            "minimal": "Clean code with subtle background",
            "terminal": "Terminal/console styling",
            "editor": "IDE/editor styling with line numbers",
            "glass": "Glassmorphism effect"
        },
        "animations": {
            "fade_in": "Simple fade in",
            "slide_up": "Slide from bottom",
            "scale_in": "Scale from center",
            "blur_in": "Blur to focus"
        },
        "schema": {
            "code": {
                "type": "string",
                "required": True,
                "description": "Code content to display"
            },
            "language": {
                "type": "string",
                "default": "javascript",
                "description": "Programming language (for syntax highlighting)"
            },
            "title": {
                "type": "string",
                "default": "",
                "description": "Optional title/filename"
            },
            "variant": {
                "type": "enum",
                "default": "editor",
                "values": ["minimal", "terminal", "editor", "glass"],
                "description": "Visual style"
            },
            "animation": {
                "type": "enum",
                "default": "fade_in",
                "values": ["fade_in", "slide_up", "scale_in", "blur_in"],
                "description": "Entrance animation"
            },
            "show_line_numbers": {
                "type": "boolean",
                "default": True,
                "description": "Show line numbers"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 5.0,
                "description": "How long to show (seconds)"
            }
        },
        "example": {
            "code": "const greeting = 'Hello, World!';\nconsole.log(greeting);",
            "language": "javascript",
            "title": "hello.js",
            "variant": "editor",
            "animation": "slide_up",
            "show_line_numbers": True,
            "start_time": 3.0,
            "duration": 5.0
        }
    },

    "TypingCode": {
        "description": "Animated typing code effect with cursor",
        "category": "code",
        "variants": {
            "minimal": "Clean typing effect",
            "terminal": "Terminal-style with cursor",
            "editor": "IDE-style typing",
            "hacker": "Matrix/hacker style"
        },
        "cursor_styles": {
            "block": "Solid block cursor",
            "line": "Vertical line cursor",
            "underline": "Underscore cursor",
            "none": "No cursor"
        },
        "schema": {
            "code": {
                "type": "string",
                "required": True,
                "description": "Code to type out"
            },
            "language": {
                "type": "string",
                "default": "javascript",
                "description": "Programming language"
            },
            "title": {
                "type": "string",
                "default": "",
                "description": "Optional title/filename"
            },
            "variant": {
                "type": "enum",
                "default": "editor",
                "values": ["minimal", "terminal", "editor", "hacker"],
                "description": "Visual style"
            },
            "cursor_style": {
                "type": "enum",
                "default": "line",
                "values": ["block", "line", "underline", "none"],
                "description": "Cursor appearance"
            },
            "typing_speed": {
                "type": "enum",
                "default": "normal",
                "values": ["slow", "normal", "fast", "instant"],
                "description": "Typing animation speed"
            },
            "show_line_numbers": {
                "type": "boolean",
                "default": True,
                "description": "Show line numbers"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to start (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 10.0,
                "description": "How long to type (seconds)"
            }
        },
        "example": {
            "code": "function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n-1) + fibonacci(n-2);\n}",
            "language": "javascript",
            "title": "fibonacci.js",
            "variant": "editor",
            "cursor_style": "line",
            "typing_speed": "normal",
            "show_line_numbers": True,
            "start_time": 2.0,
            "duration": 8.0
        }
    },

    "SplitScreen": {
        "description": "Layout component for side-by-side content",
        "category": "layout",
        "layouts": {
            "50-50": "Equal split",
            "60-40": "Larger left side",
            "40-60": "Larger right side",
            "70-30": "Emphasis on left",
            "30-70": "Emphasis on right"
        },
        "orientations": {
            "horizontal": "Left and right panels",
            "vertical": "Top and bottom panels"
        },
        "schema": {
            "orientation": {
                "type": "enum",
                "default": "horizontal",
                "values": ["horizontal", "vertical"],
                "description": "Split direction"
            },
            "layout": {
                "type": "enum",
                "default": "50-50",
                "values": ["50-50", "60-40", "40-60", "70-30", "30-70"],
                "description": "Size ratio"
            },
            "gap": {
                "type": "number",
                "default": 20,
                "description": "Gap between panels (pixels)"
            },
            "left_content": {
                "type": "component",
                "required": True,
                "description": "Component for left/top panel"
            },
            "right_content": {
                "type": "component",
                "required": True,
                "description": "Component for right/bottom panel"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 5.0,
                "description": "How long to show (seconds)"
            }
        },
        "example": {
            "orientation": "horizontal",
            "layout": "50-50",
            "gap": 20,
            "left_content": {"type": "CodeBlock", "code": "..."},
            "right_content": {"type": "Terminal", "output": "..."},
            "start_time": 0.0,
            "duration": 10.0
        }
    },

    "Grid": {
        "description": "Grid layout for multiple items",
        "category": "layout",
        "layouts": {
            "1x2": "1 column, 2 rows (simple stack)",
            "2x1": "2 columns, 1 row (side-by-side)",
            "2x2": "2 columns, 2 rows (4 items)",
            "3x2": "3 columns, 2 rows (6 items)",
            "2x3": "2 columns, 3 rows (6 items)",
            "3x3": "3 columns, 3 rows (9 items) - Instagram style",
            "4x2": "4 columns, 2 rows (8 items)",
            "2x4": "2 columns, 4 rows (8 items)"
        },
        "schema": {
            "layout": {
                "type": "enum",
                "default": "3x3",
                "values": ["1x2", "2x1", "2x2", "3x2", "2x3", "3x3", "4x2", "2x4"],
                "description": "Grid dimensions"
            },
            "gap": {
                "type": "number",
                "default": 20,
                "description": "Gap between items (pixels)"
            },
            "padding": {
                "type": "number",
                "default": 40,
                "description": "Padding around grid (pixels)"
            },
            "items": {
                "type": "array",
                "required": True,
                "description": "Array of components to display"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 5.0,
                "description": "How long to show (seconds)"
            }
        },
        "example": {
            "layout": "3x3",
            "gap": 20,
            "padding": 40,
            "items": [
                {"type": "CodeBlock", "code": "Python"},
                {"type": "CodeBlock", "code": "JavaScript"},
                {"type": "CodeBlock", "code": "Rust"},
                {"type": "CodeBlock", "code": "Go"},
                {"type": "CodeBlock", "code": "TypeScript"},
                {"type": "CodeBlock", "code": "Swift"},
                {"type": "CodeBlock", "code": "Kotlin"},
                {"type": "CodeBlock", "code": "Ruby"},
                {"type": "CodeBlock", "code": "C++"}
            ],
            "start_time": 0.0,
            "duration": 10.0,
            "use_cases": [
                "Portfolio showcase (9 projects)",
                "Language comparison",
                "Before/after transformations",
                "Feature grid",
                "Social media style display"
            ]
        }
    },

    "Container": {
        "description": "Flexible positioning container for components",
        "category": "layout",
        "positions": {
            "center": "Center of screen",
            "top-left": "Top left corner",
            "top-center": "Top center",
            "top-right": "Top right corner",
            "middle-left": "Middle left",
            "middle-right": "Middle right",
            "bottom-left": "Bottom left corner",
            "bottom-center": "Bottom center",
            "bottom-right": "Bottom right corner"
        },
        "schema": {
            "position": {
                "type": "enum",
                "default": "center",
                "values": ["center", "top-left", "top-center", "top-right",
                          "middle-left", "middle-right", "bottom-left",
                          "bottom-center", "bottom-right"],
                "description": "Position on screen"
            },
            "width": {
                "type": "string",
                "default": "auto",
                "description": "Width (px, %, or auto)"
            },
            "height": {
                "type": "string",
                "default": "auto",
                "description": "Height (px, %, or auto)"
            },
            "padding": {
                "type": "number",
                "default": 40,
                "description": "Internal padding (pixels)"
            },
            "content": {
                "type": "component",
                "required": True,
                "description": "Component to position"
            },
            "start_time": {
                "type": "float",
                "required": True,
                "description": "When to show (seconds)"
            },
            "duration": {
                "type": "float",
                "default": 5.0,
                "description": "How long to show (seconds)"
            }
        },
        "example": {
            "position": "top-right",
            "width": "400px",
            "height": "auto",
            "padding": 20,
            "content": {"type": "CodeBlock", "code": "..."},
            "start_time": 0.0,
            "duration": 5.0
        }
    }
}
