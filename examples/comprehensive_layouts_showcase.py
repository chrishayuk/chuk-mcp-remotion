#!/usr/bin/env python3
"""
Comprehensive YouTube Layouts Showcase

THE definitive showcase demonstrating ALL 17 layout types.
Uses the dictionary-based scene API (like youtube_layouts.py).

Usage:
    python examples/comprehensive_layouts_showcase.py
"""
import sys
from pathlib import Path

# Add parent directory to path for development
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from chuk_mcp_remotion.utils.project_manager import ProjectManager
import shutil


def create_demo_box_config(label: str, color: str = "primary"):
    """Helper to create DemoBox config dict."""
    return {
        "type": "DemoBox",
        "config": {
            "label": label,
            "color": color
        }
    }


def generate_comprehensive_layouts_showcase():
    """Generate THE comprehensive showcase with all 17 layouts."""

    project_name = "comprehensive_layouts_showcase"
    project_manager = ProjectManager()

    # Clean up existing project
    project_path_obj = project_manager.workspace_dir / project_name
    if project_path_obj.exists():
        print(f"🔄 Removing existing project: {project_path_obj}")
        shutil.rmtree(project_path_obj)

    print(f"\n{'='*70}")
    print(f"COMPREHENSIVE LAYOUTS SHOWCASE")
    print(f"ALL 17 Layout Types")
    print(f"{'='*70}\n")

    # Create base project
    project_info = project_manager.create_project(project_name)
    project_path = Path(project_info["path"])

    print(f"✅ Created base project at: {project_path}")

    theme = "tech"
    scenes = []
    start_frame = 0
    scene_duration = 120  # 4 seconds per scene at 30fps

    # Helper to add scene and increment start_frame
    def add_scene(scene_dict, duration=scene_duration):
        nonlocal start_frame
        scene_dict["startFrame"] = start_frame
        scene_dict["durationInFrames"] = duration
        scenes.append(scene_dict)
        start_frame += duration

    # ========================================
    # INTRODUCTION
    # ========================================
    print("\n📐 Creating Introduction")
    add_scene({
        "type": "TitleScene",
        "config": {
            "text": "Complete Layout System",
            "subtitle": "17 Professional Layouts for YouTube",
            "variant": "bold",
            "animation": "fade_zoom"
        }
    })

    # ========================================
    # CORE LAYOUTS (with DemoBox placeholders)
    # ========================================

    # 1. Grid (2x2)
    print("\n📐 1. Grid Layout (2x2)")
    add_scene({
        "type": "Grid",
        "config": {
            "layout": "2x2",
            "padding": 40,
            "gap": 20,
            "border_width": 2
        },
        "children": [
            create_demo_box_config("CELL 1", "primary"),
            create_demo_box_config("CELL 2", "accent"),
            create_demo_box_config("CELL 3", "secondary"),
            create_demo_box_config("CELL 4", "primary")
        ]
    })

    # 2. ThreeByThreeGrid
    print("📐 2. ThreeByThreeGrid")
    add_scene({
        "type": "ThreeByThreeGrid",
        "config": {
            "padding": 40,
            "gap": 15,
            "border_width": 2
        },
        "children": [create_demo_box_config(f"CELL {i+1}", "primary" if i % 2 == 0 else "accent") for i in range(9)]
    })

    # 3. ThreeColumnLayout
    print("📐 3. ThreeColumnLayout")
    add_scene({
        "type": "ThreeColumnLayout",
        "config": {
            "left_width": 30,
            "center_width": 40,
            "right_width": 30,
            "gap": 20,
            "border_width": 2
        },
        "left": create_demo_box_config("LEFT\\n30%", "primary"),
        "center": create_demo_box_config("CENTER\\n40%", "accent"),
        "right": create_demo_box_config("RIGHT\\n30%", "primary")
    })

    # 4. ThreeRowLayout
    print("📐 4. ThreeRowLayout")
    add_scene({
        "type": "ThreeRowLayout",
        "config": {
            "top_height": 20,
            "middle_height": 60,
            "bottom_height": 20,
            "gap": 20,
            "border_width": 2
        },
        "top": create_demo_box_config("TOP 20%", "accent"),
        "middle": create_demo_box_config("MIDDLE 60%", "primary"),
        "bottom": create_demo_box_config("BOTTOM 20%", "accent")
    })

    # 5. AsymmetricLayout
    print("📐 5. AsymmetricLayout")
    add_scene({
        "type": "AsymmetricLayout",
        "config": {
            "layout": "main-right",
            "main_ratio": 67,
            "gap": 20,
            "border_width": 2
        },
        "mainFeed": create_demo_box_config("MAIN\\n67%", "accent"),
        "demo1": create_demo_box_config("DEMO 1", "primary"),
        "demo2": create_demo_box_config("DEMO 2", "primary")
    })

    # 6. SplitScreen
    print("📐 6. SplitScreen")
    add_scene({
        "type": "SplitScreen",
        "config": {
            "orientation": "horizontal",
            "gap": 20,
            "divider_width": 3
        },
        "left": create_demo_box_config("LEFT 50%", "primary"),
        "right": create_demo_box_config("RIGHT 50%", "accent")
    })

    # 7. Container
    print("📐 7. Container")
    add_scene({
        "type": "Container",
        "config": {
            "padding": 80,
            "border_width": 3,
            "border_radius": 12
        },
        "children": create_demo_box_config("CENTERED\\nCONTENT", "accent")
    })

    # ========================================
    # SPECIALIZED LAYOUTS
    # ========================================

    # 8. OverTheShoulderLayout
    print("📐 8. OverTheShoulderLayout")
    add_scene({
        "type": "OverTheShoulderLayout",
        "config": {
            "host_position": "left",
            "host_size": 35,
            "gap": 20,
            "border_width": 2
        },
        "hostView": create_demo_box_config("HOST\\n35%", "primary"),
        "screenContent": create_demo_box_config("SCREEN\\n65%", "accent")
    })

    # 9. DialogueFrameLayout
    print("📐 9. DialogueFrameLayout")
    add_scene({
        "type": "DialogueFrameLayout",
        "config": {
            "character_a_label": "Person A",
            "character_b_label": "Person B",
            "gap": 20,
            "border_width": 2
        },
        "characterA": create_demo_box_config("PERSON A", "primary"),
        "characterB": create_demo_box_config("PERSON B", "secondary")
    })

    # 10. StackedReactionLayout
    print("📐 10. StackedReactionLayout")
    add_scene({
        "type": "StackedReactionLayout",
        "config": {
            "clip_ratio": 65,
            "gap": 20,
            "show_labels": True,
            "border_width": 2
        },
        "originalClip": create_demo_box_config("ORIGINAL\\n65%", "accent"),
        "reactorFace": create_demo_box_config("REACTOR\\n35%", "primary")
    })

    # 11. HUDStyleLayout
    print("📐 11. HUDStyleLayout")
    add_scene({
        "type": "HUDStyleLayout",
        "config": {
            "webcam_position": "top-left",
            "webcam_size": 15,
            "show_chat": True,
            "chat_width": 25
        },
        "gameplay": create_demo_box_config("GAMEPLAY", "accent"),
        "webcam": create_demo_box_config("CAM", "primary"),
        "chatOverlay": create_demo_box_config("CHAT", "secondary")
    })

    # 12. PerformanceMultiCamLayout
    print("📐 12. PerformanceMultiCamLayout")
    add_scene({
        "type": "PerformanceMultiCamLayout",
        "config": {
            "labels": {
                "front": "FRONT",
                "overhead": "OVERHEAD",
                "hand": "HAND",
                "detail": "DETAIL"
            },
            "gap": 20,
            "show_labels": True,
            "border_width": 2
        },
        "frontCam": create_demo_box_config("FRONT", "accent"),
        "overheadCam": create_demo_box_config("OVERHEAD", "primary"),
        "handCam": create_demo_box_config("HAND", "primary"),
        "detailCam": create_demo_box_config("DETAIL", "primary")
    })

    # 13. FocusStripLayout
    print("📐 13. FocusStripLayout")
    add_scene({
        "type": "FocusStripLayout",
        "config": {
            "strip_height": 30,
            "strip_position": "center",
            "background_blur": 5,
            "border_width": 2
        },
        "hostStrip": create_demo_box_config("HOST\\nSTRIP 30%", "primary"),
        "backgroundContent": create_demo_box_config("B-ROLL\\nBACKGROUND", "accent")
    })

    # 14. PiPLayout
    print("📐 14. PiPLayout")
    add_scene({
        "type": "PiPLayout",
        "config": {
            "pip_position": "bottom-right",
            "pip_size": 20,
            "pip_border_width": 2
        },
        "mainContent": create_demo_box_config("MAIN\\nCONTENT", "accent"),
        "pipContent": create_demo_box_config("PiP\\n20%", "primary")
    })

    # 15. VerticalLayout (9:16 for Shorts)
    print("📐 15. VerticalLayout")
    add_scene({
        "type": "VerticalLayout",
        "config": {
            "layout": "top-bottom",
            "content_ratio": 60,
            "gap": 10
        },
        "topContent": create_demo_box_config("TOP\\n60%", "accent"),
        "bottomContent": create_demo_box_config("BOTTOM\\n30%", "primary"),
        "captionBar": create_demo_box_config("CAPTIONS\\n10%", "secondary")
    })

    # 16. TimelineLayout
    print("📐 16. TimelineLayout")
    add_scene({
        "type": "TimelineLayout",
        "config": {
            "timeline_height": 15,
            "timeline_position": "bottom",
            "show_progress": True
        },
        "mainContent": create_demo_box_config("MAIN\\nCONTENT", "accent"),
        "milestones": [
            create_demo_box_config("M1", "primary"),
            create_demo_box_config("M2", "primary"),
            create_demo_box_config("M3", "primary")
        ]
    })

    # 17. MosaicLayout
    print("📐 17. MosaicLayout")
    add_scene({
        "type": "MosaicLayout",
        "config": {
            "style": "hero-corners",
            "gap": 15,
            "border_width": 2
        },
        "children": [
            create_demo_box_config("CLIP 1", "accent"),
            create_demo_box_config("CLIP 2", "primary"),
            create_demo_box_config("CLIP 3", "secondary"),
            create_demo_box_config("CLIP 4", "primary")
        ]
    })

    # ========================================
    # FINAL TITLE
    # ========================================
    print("\n📐 Creating Final Title")
    add_scene({
        "type": "TitleScene",
        "config": {
            "text": "17 Professional Layouts",
            "subtitle": "Build Any YouTube Video",
            "variant": "glass",
            "animation": "zoom"
        }
    })

    # ========================================
    # Build the composition
    # ========================================
    print("\n🎬 Building composition...")

    result = project_manager.build_composition_from_scenes(scenes, theme=theme)

    print("\n" + "="*70)
    print("✅ COMPREHENSIVE LAYOUTS SHOWCASE GENERATED!")
    print("="*70)
    print(f"\n📁 Project location: {project_path}")

    # Calculate stats
    total_frames = result['total_frames']
    total_duration = total_frames / 30.0

    print(f"\n⏱️  Total duration: {total_duration:.1f} seconds ({total_frames} frames @ 30fps)")
    print(f"\n📊 Showcase structure:")
    print(f"   • Introduction: 1 scene")
    print(f"   • Core Layouts (7): Grid, 3x3Grid, 3Column, 3Row, Asymmetric, SplitScreen, Container")
    print(f"   • Specialized Layouts (10): OverShoulder, Dialogue, Reaction, HUD, MultiCam, FocusStrip, PiP, Vertical, Timeline, Mosaic")
    print(f"   • Final Title: 1 scene")
    print(f"   • TOTAL: {len(scenes)} scenes")

    print(f"\n🎨 All 17 Layout Types Demonstrated:")
    print("   Core Layouts (7):")
    print("   ✓ Grid (flexible)")
    print("   ✓ ThreeByThreeGrid")
    print("   ✓ ThreeColumnLayout")
    print("   ✓ ThreeRowLayout")
    print("   ✓ AsymmetricLayout")
    print("   ✓ SplitScreen")
    print("   ✓ Container")
    print("\n   Specialized Layouts (10):")
    print("   ✓ OverTheShoulderLayout")
    print("   ✓ DialogueFrameLayout")
    print("   ✓ StackedReactionLayout")
    print("   ✓ HUDStyleLayout")
    print("   ✓ PerformanceMultiCamLayout")
    print("   ✓ FocusStripLayout")
    print("   ✓ PiPLayout")
    print("   ✓ VerticalLayout")
    print("   ✓ TimelineLayout")
    print("   ✓ MosaicLayout")

    print(f"\n📦 Generated {len(result['component_types'])} component types:")
    for comp_type in sorted(result['component_types']):
        print(f"   • {comp_type}")

    print(f"\n✨ Generated {len(result['component_files'])} TSX files")

    print("\n📝 Next steps:")
    print(f"   cd {project_path}")
    print("   npm install")
    print("   npm start")

    print("\n💡 This showcase demonstrates:")
    print("   ✓ ALL 17 layout types with DemoBox placeholders")
    print("   ✓ Clean structure-focused visualization")
    print("   ✓ Design token integration")
    print("   ✓ Flexible configuration options")

    print("\n" + "="*70)

    return project_path


def main():
    """Main entry point."""
    print("\n🎬 Comprehensive YouTube Layouts Showcase Generator")
    print("   THE definitive showcase of all 17 layout types\n")

    try:
        project_path = generate_comprehensive_layouts_showcase()
        print("✨ Generation complete!")
        return 0
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
