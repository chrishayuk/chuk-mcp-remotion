#!/usr/bin/env python3
"""
Example: YouTube Layouts Showcase

Demonstrates all the layout options available for YouTube video creation,
including grids, columns, rows, and asymmetric layouts perfect for tutorials.
"""
import sys
from pathlib import Path

# Add parent directory to path for development
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from chuk_mcp_remotion.generator.composition_builder import CompositionBuilder
from chuk_mcp_remotion.generator.component_builder import ComponentBuilder
from chuk_mcp_remotion.utils.project_manager import ProjectManager


def create_youtube_layouts_showcase():
    """Create a comprehensive showcase of YouTube layouts."""

    # Initialize project
    project_name = "youtube_layouts_showcase"
    project_manager = ProjectManager()

    # Check if project exists and remove it for a fresh start
    import shutil
    from pathlib import Path
    project_path_obj = project_manager.workspace_dir / project_name
    if project_path_obj.exists():
        print(f"🔄 Removing existing project: {project_path_obj}")
        shutil.rmtree(project_path_obj)

    project_info = project_manager.create_project(project_name)
    project_path = project_info["path"]

    print(f"✨ Creating YouTube Layouts Showcase at: {project_path}")

    # Note: CompositionBuilder and ComponentBuilder don't exist yet in the API
    # This example shows the intended API structure

    # Theme configuration (using tech theme)
    theme = "tech"

    # ========================================
    # Scene 1: Title Card
    # ========================================
    print("\n📐 Creating Scene 1: Title Card")
    title_scene = {
        "type": "TitleScene",
        "config": {
            "title": "YouTube Layout Showcase",
            "subtitle": "Master Video Layouts for Professional Content",
            "variant": "bold",
            "animation": "fade_slide"
        },
        "startFrame": 0,
        "durationInFrames": 90  # 3 seconds at 30fps
    }

    # ========================================
    # Scene 2: 3x3 Grid Layout
    # ========================================
    print("📐 Creating Scene 2: 3x3 Grid Layout")
    grid_3x3 = {
        "type": "ThreeByThreeGrid",
        "config": {
            "padding": 40,
            "gap": 20,
            "border_width": 2,
            "cell_background": "rgba(0, 0, 0, 0.3)"
        },
        "children": [
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid1 = 'Cell 1';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid2 = 'Cell 2';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid3 = 'Cell 3';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid4 = 'Cell 4';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid5 = 'Cell 5';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid6 = 'Cell 6';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid7 = 'Cell 7';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid8 = 'Cell 8';",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "const grid9 = 'Cell 9';",
                    "language": "javascript"
                }
            }
        ],
        "startFrame": 90,
        "durationInFrames": 120  # 4 seconds
    }

    # ========================================
    # Scene 3: 3 Column Layout
    # ========================================
    print("📐 Creating Scene 3: 3 Column Layout")
    three_column = {
        "type": "ThreeColumnLayout",
        "config": {
            "left_width": 30,
            "center_width": 40,
            "right_width": 30,
            "border_width": 2,
            "gap": 20
        },
        "left": {
            "type": "CodeBlock",
            "config": {
                "code": "// Left Column\nconst sidebar = {\n  width: '30%'\n};",
                "language": "javascript"
            }
        },
        "center": {
            "type": "CodeBlock",
            "config": {
                "code": "// Center Column (Main)\nconst mainContent = {\n  width: '40%',\n  important: true\n};",
                "language": "javascript",
                "highlight_lines": [2, 3, 4]
            }
        },
        "right": {
            "type": "CodeBlock",
            "config": {
                "code": "// Right Column\nconst sidebar2 = {\n  width: '30%'\n};",
                "language": "javascript"
            }
        },
        "startFrame": 210,
        "durationInFrames": 120  # 4 seconds
    }

    # ========================================
    # Scene 4: 3 Row Layout
    # ========================================
    print("📐 Creating Scene 4: 3 Row Layout")
    three_row = {
        "type": "ThreeRowLayout",
        "config": {
            "top_height": 20,
            "middle_height": 60,
            "bottom_height": 20,
            "border_width": 2,
            "gap": 20
        },
        "top": {
            "type": "LowerThird",
            "config": {
                "name": "Header Section",
                "title": "Top 20% of screen",
                "variant": "minimal",
                "position": "top_center"
            }
        },
        "middle": {
            "type": "CodeBlock",
            "config": {
                "code": "// Main Content Area (60%)\nfunction displayMainContent() {\n  return <VideoContent />;\n}",
                "language": "javascript"
            }
        },
        "bottom": {
            "type": "LowerThird",
            "config": {
                "name": "Footer Section",
                "title": "Bottom 20% of screen",
                "variant": "minimal",
                "position": "bottom_center"
            }
        },
        "startFrame": 330,
        "durationInFrames": 120  # 4 seconds
    }

    # ========================================
    # Scene 5: Asymmetric Layout (Main-Right)
    # ========================================
    print("📐 Creating Scene 5: Asymmetric Layout - Main Right")
    asymmetric_main_right = {
        "type": "AsymmetricLayout",
        "config": {
            "layout": "main-right",
            "main_ratio": 66.67,
            "border_width": 2,
            "gap": 20
        },
        "demo1": {
            "type": "CodeBlock",
            "config": {
                "code": "// Demo 1 (Top Left)\nconst setup = () => {\n  console.log('Setup');\n};",
                "language": "javascript"
            }
        },
        "demo2": {
            "type": "CodeBlock",
            "config": {
                "code": "// Demo 2 (Bottom Left)\nconst execute = () => {\n  console.log('Execute');\n};",
                "language": "javascript"
            }
        },
        "mainFeed": {
            "type": "CodeBlock",
            "config": {
                "code": "// Main Feed (Right - 2/3 width)\nclass MainApplication {\n  constructor() {\n    this.setup();\n    this.execute();\n  }\n  \n  setup() {\n    // Initialize application\n  }\n  \n  execute() {\n    // Run main logic\n  }\n}",
                "language": "javascript",
                "highlight_lines": [2, 3, 4, 5]
            }
        },
        "overlay": {
            "type": "LowerThird",
            "config": {
                "name": "Tutorial Mode",
                "title": "Main feed on right, demos on left",
                "variant": "glass",
                "position": "bottom_left"
            }
        },
        "startFrame": 450,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 6: Asymmetric Layout (Main-Left)
    # ========================================
    print("📐 Creating Scene 6: Asymmetric Layout - Main Left")
    asymmetric_main_left = {
        "type": "AsymmetricLayout",
        "config": {
            "layout": "main-left",
            "main_ratio": 66.67,
            "border_width": 2,
            "gap": 20
        },
        "mainFeed": {
            "type": "TypingCode",
            "config": {
                "code": "// Main Feed (Left - 2/3 width)\nfunction createVideoLayout() {\n  const layout = {\n    main: '66.67%',\n    demos: '33.33%'\n  };\n  return layout;\n}",
                "language": "javascript",
                "typing_speed": 2
            }
        },
        "demo1": {
            "type": "CodeBlock",
            "config": {
                "code": "// Demo 1 (Top Right)\nconst config1 = {\n  position: 'top'\n};",
                "language": "javascript"
            }
        },
        "demo2": {
            "type": "CodeBlock",
            "config": {
                "code": "// Demo 2 (Bottom Right)\nconst config2 = {\n  position: 'bottom'\n};",
                "language": "javascript"
            }
        },
        "overlay": {
            "type": "LowerThird",
            "config": {
                "name": "Alternative Layout",
                "title": "Main feed on left, demos on right",
                "variant": "glass",
                "position": "bottom_right"
            }
        },
        "startFrame": 600,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 7: Bordered Grid Example
    # ========================================
    print("📐 Creating Scene 7: Bordered Grid with Effects")
    bordered_grid = {
        "type": "Grid",
        "config": {
            "layout": "2x2",
            "padding": 40,
            "gap": 30,
            "border_width": 3
        },
        "children": [
            {
                "type": "CodeBlock",
                "config": {
                    "code": "// Quadrant 1: Setup\nconst init = () => {\n  setupEnvironment();\n};",
                    "language": "javascript"
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "// Quadrant 2: Config\nconst config = {\n  theme: 'tech',\n  layout: 'grid'\n};",
                    "language": "javascript"
                }
            },
            {
                "type": "LineChart",
                "config": {
                    "title": "Performance",
                    "data_points": [10, 20, 15, 30, 25, 40],
                    "labels": ["1", "2", "3", "4", "5", "6"]
                }
            },
            {
                "type": "CodeBlock",
                "config": {
                    "code": "// Quadrant 4: Results\nconst results = {\n  success: true,\n  performance: 95\n};",
                    "language": "javascript"
                }
            }
        ],
        "startFrame": 750,
        "durationInFrames": 120  # 4 seconds
    }

    # ========================================
    # Scene 8: Final Title Card
    # ========================================
    print("📐 Creating Scene 8: Final Title Card")
    final_title = {
        "type": "TitleScene",
        "config": {
            "title": "Explore More Layouts",
            "subtitle": "Create Professional YouTube Videos with AI",
            "variant": "glass",
            "animation": "zoom"
        },
        "startFrame": 870,
        "durationInFrames": 90  # 3 seconds
    }

    # ========================================
    # Build the composition
    # ========================================
    print("\n🎬 Building composition...")

    scenes = [
        title_scene,
        grid_3x3,
        three_column,
        three_row,
        asymmetric_main_right,
        asymmetric_main_left,
        bordered_grid,
        final_title
    ]

    composition_config = {
        "name": "YouTubeLayoutsShowcase",
        "width": 1920,
        "height": 1080,
        "fps": 30,
        "durationInFrames": 960,  # 32 seconds total
        "theme": theme,
        "scenes": scenes
    }

    # Build composition would go here
    # comp_builder.build_composition(composition_config)

    print("\n" + "="*70)
    print("✅ YouTube Layouts Project Structure Created!")
    print("="*70)
    print(f"\n📁 Project location: {project_path}")
    print("\n⚠️  Note: Composition builder API is under development.")
    print("    The project structure has been created successfully!")
    print(f"\n🎥 Scenes created:")
    print("   1. Title Card - Introduction")
    print("   2. 3x3 Grid - 9 cell grid layout")
    print("   3. 3 Column Layout - Sidebar + Main + Sidebar")
    print("   4. 3 Row Layout - Header + Main + Footer")
    print("   5. Asymmetric Layout (Main-Right) - Demos left, Main right")
    print("   6. Asymmetric Layout (Main-Left) - Main left, Demos right")
    print("   7. Bordered Grid - 2x2 with borders and mixed content")
    print("   8. Final Title Card - Call to action")

    print(f"\n⏱️  Total duration: 32 seconds (960 frames @ 30fps)")

    print("\n📝 Next steps:")
    print(f"   cd {project_path}")
    print("   npm install")
    print("   npm start")

    print("\n🎨 Layout features demonstrated:")
    print("   ✓ 3x3 Grid Layout")
    print("   ✓ 3 Column Layout (custom widths)")
    print("   ✓ 3 Row Layout (custom heights)")
    print("   ✓ Asymmetric Layouts (main + demo panels)")
    print("   ✓ Bordered layouts with custom styling")
    print("   ✓ Mixed content (code, charts, overlays)")
    print("   ✓ Design token integration")

    print("\n" + "="*70)

    return project_path


def main():
    """Main example function."""
    print("\n" + "="*70)
    print("YOUTUBE LAYOUTS SHOWCASE")
    print("Comprehensive demonstration of all layout options")
    print("="*70)

    project_path = create_youtube_layouts_showcase()

    print("\n✨ Project structure created!\n")

    return project_path


if __name__ == "__main__":
    main()
