#!/usr/bin/env python3
"""
Generate YouTube Layouts Showcase - Pure Layouts Version

This script generates a Remotion project showcasing all layout components
using simple DemoBox placeholders to focus on layout structure.

Usage:
    python examples/generate_layouts_showcase.py
"""
import sys
from pathlib import Path

# Add parent directory to path for development
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from chuk_mcp_remotion.utils.project_manager import ProjectManager
from chuk_mcp_remotion.generator.composition_builder import ComponentInstance
import shutil


def generate_pure_layouts_showcase():
    """Generate showcase with simple DemoBox placeholders."""

    project_name = "specialized_layouts_showcase"
    project_manager = ProjectManager()

    # Clean up existing project
    project_path_obj = project_manager.workspace_dir / project_name
    if project_path_obj.exists():
        print(f"🔄 Removing existing project: {project_path_obj}")
        shutil.rmtree(project_path_obj)

    print(f"\n{'='*70}")
    print(f"GENERATING: {project_name}")
    print(f"{'='*70}\n")

    # Create base project
    project_info = project_manager.create_project(project_name)
    project_path = Path(project_info["path"])

    print(f"✅ Created base project at: {project_path}")

    # Theme configuration
    theme = "tech"

    # Helper function to create DemoBox instances
    def create_demo_box(label: str, color: str = "primary") -> ComponentInstance:
        return ComponentInstance(
            component_type="DemoBox",
            start_frame=0,
            duration_frames=0,  # Will be set by parent layout
            props={
                "label": label,
                "color": color
            }
        )

    # Get the composition builder from project manager
    comp = project_manager.current_composition

    # ========================================
    # Scene 1: Title Card
    # ========================================
    print("\n📐 Creating Scene 1: Title Card")
    comp.add_title_scene(
        text="Specialized YouTube Layouts",
        subtitle="Advanced Layouts for Professional Content Creation",
        variant="bold",
        animation="fade_zoom",
        duration_seconds=3.0
    )

    # ========================================
    # Scene 2: OverTheShoulderLayout
    # ========================================
    print("📐 Creating Scene 2: OverTheShoulderLayout")
    comp.add_over_the_shoulder_layout(
        host_view=create_demo_box("HOST VIEW", "primary"),
        screen_content=create_demo_box("SCREEN CONTENT", "accent"),
        duration=5.0,
        host_position="left",
        host_size=35,
        gap=20,
        border_width=2,
        padding=40
    )

    # ========================================
    # Scene 3: DialogueFrameLayout
    # ========================================
    print("📐 Creating Scene 3: DialogueFrameLayout")
    comp.add_dialogue_frame_layout(
        character_a=create_demo_box("CHARACTER A", "primary"),
        character_b=create_demo_box("CHARACTER B", "secondary"),
        duration=5.0,
        character_a_label="Character A",
        character_b_label="Character B",
        gap=20,
        border_width=2,
        padding=40
    )

    # ========================================
    # Scene 4: StackedReactionLayout
    # ========================================
    print("📐 Creating Scene 4: StackedReactionLayout")
    comp.add_stacked_reaction_layout(
        original_clip=create_demo_box("ORIGINAL CLIP", "accent"),
        reactor_face=create_demo_box("REACTOR", "primary"),
        duration=5.0,
        clip_ratio=65,
        gap=20,
        show_labels=True,
        border_width=2,
        padding=40
    )

    # ========================================
    # Scene 5: HUDStyleLayout
    # ========================================
    print("📐 Creating Scene 5: HUDStyleLayout")
    comp.add_hud_style_layout(
        gameplay=create_demo_box("GAMEPLAY", "accent"),
        webcam=create_demo_box("WEBCAM", "primary"),
        chat_overlay=create_demo_box("CHAT", "secondary"),
        duration=5.0,
        webcam_position="top-left",
        webcam_size=15,
        show_chat=True,
        chat_width=25
    )

    # ========================================
    # Scene 6: PerformanceMultiCamLayout
    # ========================================
    print("📐 Creating Scene 6: PerformanceMultiCamLayout")
    comp.add_performance_multi_cam_layout(
        front_cam=create_demo_box("FRONT", "accent"),
        overhead_cam=create_demo_box("OVERHEAD", "primary"),
        hand_cam=create_demo_box("HAND", "primary"),
        detail_cam=create_demo_box("DETAIL", "primary"),
        duration=5.0,
        labels={
            "front": "FRONT VIEW",
            "overhead": "OVERHEAD",
            "hand": "HAND CAM",
            "detail": "DETAIL"
        },
        gap=20,
        show_labels=True,
        border_width=2,
        padding=40
    )

    # ========================================
    # Scene 7: FocusStripLayout
    # ========================================
    print("📐 Creating Scene 7: FocusStripLayout")
    comp.add_focus_strip_layout(
        host_strip=create_demo_box("HOST STRIP", "primary"),
        background_content=create_demo_box("B-ROLL BACKGROUND", "accent"),
        duration=5.0,
        strip_height=30,
        strip_position="center",
        background_blur=5,
        border_width=2,
        strip_shadow=True
    )

    # ========================================
    # Scene 8: Final Title Card
    # ========================================
    print("📐 Creating Scene 8: Final Title Card")
    comp.add_title_scene(
        text="Create Professional Videos",
        subtitle="6 Specialized Layouts for Every Content Type",
        variant="glass",
        animation="fade_zoom",
        duration_seconds=3.0
    )

    # ========================================
    # Generate all component files
    # ========================================
    print("\n🎬 Generating components...")

    # Generate DemoBox component
    project_manager.add_component_to_project("DemoBox", {}, theme)

    # Generate specialized layout components
    for layout_name in ["OverTheShoulderLayout", "DialogueFrameLayout", "StackedReactionLayout",
                         "HUDStyleLayout", "PerformanceMultiCamLayout", "FocusStripLayout"]:
        project_manager.add_component_to_project(layout_name, {}, theme)

    # Generate TitleScene component
    project_manager.add_component_to_project("TitleScene", {}, theme)

    # Generate VideoComposition.tsx
    print("\n🎬 Generating VideoComposition.tsx...")
    project_manager.generate_composition()

    print("\n" + "="*70)
    print("✅ Specialized Layouts Project GENERATED Successfully!")
    print("="*70)
    print(f"\n📁 Project location: {project_path}")
    print("\n✅ All components and composition files have been generated!")
    print(f"\n🎥 Scenes created:")
    print("   1. Title Card - Introduction")
    print("   2. OverTheShoulderLayout - Tutorial style (host + screen)")
    print("   3. DialogueFrameLayout - Split screen conversations")
    print("   4. StackedReactionLayout - Vertical reaction format")
    print("   5. HUDStyleLayout - Gaming/livestream HUD")
    print("   6. PerformanceMultiCamLayout - 2x2 multi-camera grid")
    print("   7. FocusStripLayout - Modern commentary aesthetic")
    print("   8. Final Title Card - Call to action")

    print(f"\n⏱️  Total duration: 36 seconds (1080 frames @ 30fps)")

    print("\n📝 Next steps:")
    print(f"   cd {project_path}")
    print("   npm install")
    print("   npm start")

    print("\n🎨 Layout features demonstrated:")
    print("   ✓ OverTheShoulder - Tutorials & walkthroughs")
    print("   ✓ DialogueFrame - Interviews & conversations")
    print("   ✓ StackedReaction - Reaction content")
    print("   ✓ HUDStyle - Gaming & livestreams")
    print("   ✓ PerformanceMultiCam - Multi-angle performances")
    print("   ✓ FocusStrip - Essay videos & commentary")
    print("   ✓ Design token integration")
    print("   ✓ Simple DemoBox placeholders")

    print("\n" + "="*70)

    return project_path


def main():
    """Main entry point."""
    print("\n🎬 YouTube Layouts Showcase Generator")
    print("   Pure Layouts Version (DemoBox placeholders)\n")

    try:
        project_path = generate_pure_layouts_showcase()
        print("✨ Generation complete!")
        return 0
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
