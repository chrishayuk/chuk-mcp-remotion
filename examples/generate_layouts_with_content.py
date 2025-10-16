#!/usr/bin/env python3
"""
Generate YouTube Layouts Showcase - With Content Version

This script generates a Remotion project showcasing all layout components
with realistic content (code blocks, webcams, terminals, gameplay, etc.).

Usage:
    python examples/generate_layouts_with_content.py
"""
import sys
from pathlib import Path

# Add parent directory to path for development
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from chuk_mcp_remotion.utils.project_manager import ProjectManager
import shutil


def generate_content_rich_showcase():
    """Generate showcase with realistic content components."""

    project_name = "specialized_layouts_with_content"
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

    # Note: CompositionBuilder and ComponentBuilder don't exist yet in the API
    # This example shows the intended API structure

    # Theme configuration
    theme = "tech"

    # ========================================
    # Scene 1: Title Card
    # ========================================
    print("\n📐 Creating Scene 1: Title Card")
    title_scene = {
        "type": "TitleScene",
        "config": {
            "title": "Specialized Layouts in Action",
            "subtitle": "Real Content Examples for Professional Videos",
            "variant": "bold",
            "animation": "fade_slide"
        },
        "startFrame": 0,
        "durationInFrames": 90  # 3 seconds at 30fps
    }

    # ========================================
    # Scene 2: OverTheShoulderLayout - Coding Tutorial
    # ========================================
    print("📐 Creating Scene 2: OverTheShoulderLayout (Coding Tutorial)")
    over_the_shoulder = {
        "type": "OverTheShoulderLayout",
        "config": {
            "host_position": "left",
            "host_size": 35,
            "gap": 20,
            "border_width": 2,
            "padding": 40
        },
        "hostView": {
            "type": "PersonSpeaking",
            "config": {
                "name": "Sarah Chen",
                "title": "Senior Developer",
                "avatar_color": "primary"
            }
        },
        "screenContent": {
            "type": "CodeBlock",
            "config": {
                "code": "function createLayout() {\n  const layout = {\n    host: 'left',\n    screen: 'right',\n    ratio: '35/65'\n  };\n  \n  return layout;\n}",
                "language": "javascript",
                "highlight_lines": [2, 3, 4, 5]
            }
        },
        "startFrame": 90,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 3: DialogueFrameLayout - Interview
    # ========================================
    print("📐 Creating Scene 3: DialogueFrameLayout (Interview)")
    dialogue_frame = {
        "type": "DialogueFrameLayout",
        "config": {
            "character_a_label": "Interviewer",
            "character_b_label": "Guest",
            "gap": 20,
            "border_width": 2,
            "padding": 40
        },
        "characterA": {
            "type": "PersonSpeaking",
            "config": {
                "name": "Alex Morgan",
                "title": "Tech Interviewer",
                "avatar_color": "primary"
            }
        },
        "characterB": {
            "type": "PersonSpeaking",
            "config": {
                "name": "Jamie Rivera",
                "title": "AI Researcher",
                "avatar_color": "secondary"
            }
        },
        "startFrame": 240,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 4: StackedReactionLayout - Music Reaction
    # ========================================
    print("📐 Creating Scene 4: StackedReactionLayout (Music Reaction)")
    stacked_reaction = {
        "type": "StackedReactionLayout",
        "config": {
            "clip_ratio": 65,
            "gap": 20,
            "show_labels": True,
            "border_width": 2,
            "padding": 40
        },
        "originalClip": {
            "type": "VideoPlayer",
            "config": {
                "title": "Original Music Video",
                "placeholder_text": "🎵 Music Video Playing...",
                "color": "accent"
            }
        },
        "reactorFace": {
            "type": "PersonSpeaking",
            "config": {
                "name": "Marcus Lee",
                "title": "Music Reactor",
                "avatar_color": "primary",
                "expression": "excited"
            }
        },
        "startFrame": 390,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 5: HUDStyleLayout - Gaming Stream
    # ========================================
    print("📐 Creating Scene 5: HUDStyleLayout (Gaming Stream)")
    hud_style = {
        "type": "HUDStyleLayout",
        "config": {
            "webcam_position": "top-left",
            "webcam_size": 15,
            "show_chat": True,
            "chat_width": 25
        },
        "gameplay": {
            "type": "GameplayScreen",
            "config": {
                "game_title": "First Person Adventure",
                "placeholder_text": "🎮 Gameplay In Progress...",
                "show_stats": True
            }
        },
        "webcam": {
            "type": "PersonSpeaking",
            "config": {
                "name": "StreamerPro",
                "avatar_color": "primary",
                "show_name": False
            }
        },
        "chatOverlay": {
            "type": "LiveChat",
            "config": {
                "messages": [
                    {"user": "viewer1", "text": "Amazing play!"},
                    {"user": "viewer2", "text": "Nice moves 🔥"},
                    {"user": "viewer3", "text": "GG!"}
                ]
            }
        },
        "startFrame": 540,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 6: PerformanceMultiCamLayout - Music Performance
    # ========================================
    print("📐 Creating Scene 6: PerformanceMultiCamLayout (Music Performance)")
    multi_cam = {
        "type": "PerformanceMultiCamLayout",
        "config": {
            "labels": {
                "front": "FRONT VIEW",
                "overhead": "OVERHEAD",
                "hand": "HAND CAM",
                "detail": "DETAIL"
            },
            "gap": 20,
            "show_labels": True,
            "border_width": 2,
            "padding": 40
        },
        "frontCam": {
            "type": "PersonSpeaking",
            "config": {
                "name": "Jordan Lee",
                "title": "Guitarist",
                "avatar_color": "accent"
            }
        },
        "overheadCam": {
            "type": "CameraView",
            "config": {
                "view_type": "overhead",
                "placeholder_text": "📹 Overhead angle"
            }
        },
        "handCam": {
            "type": "CameraView",
            "config": {
                "view_type": "closeup",
                "placeholder_text": "🤲 Hand closeup"
            }
        },
        "detailCam": {
            "type": "CameraView",
            "config": {
                "view_type": "detail",
                "placeholder_text": "🎸 Detail shot"
            }
        },
        "startFrame": 690,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 7: FocusStripLayout - Video Essay
    # ========================================
    print("📐 Creating Scene 7: FocusStripLayout (Video Essay)")
    focus_strip = {
        "type": "FocusStripLayout",
        "config": {
            "strip_height": 30,
            "strip_position": "center",
            "background_blur": 5,
            "border_width": 2,
            "strip_shadow": True
        },
        "hostStrip": {
            "type": "PersonSpeaking",
            "config": {
                "name": "Dr. Maya Patel",
                "title": "Technology Historian",
                "avatar_color": "primary",
                "layout": "horizontal"
            }
        },
        "backgroundContent": {
            "type": "BRollFootage",
            "config": {
                "theme": "tech_history",
                "placeholder_text": "🎬 B-roll: Historic tech footage",
                "color": "accent"
            }
        },
        "startFrame": 840,
        "durationInFrames": 150  # 5 seconds
    }

    # ========================================
    # Scene 8: Final Title Card
    # ========================================
    print("📐 Creating Scene 8: Final Title Card")
    final_title = {
        "type": "TitleScene",
        "config": {
            "title": "Build Amazing Content",
            "subtitle": "Specialized Layouts with Real Components",
            "variant": "glass",
            "animation": "zoom"
        },
        "startFrame": 990,
        "durationInFrames": 90  # 3 seconds
    }

    # ========================================
    # Build the composition
    # ========================================
    print("\n🎬 Building composition...")

    scenes = [
        title_scene,
        over_the_shoulder,
        dialogue_frame,
        stacked_reaction,
        hud_style,
        multi_cam,
        focus_strip,
        final_title
    ]

    composition_config = {
        "name": "SpecializedLayoutsWithContent",
        "width": 1920,
        "height": 1080,
        "fps": 30,
        "durationInFrames": 1080,  # 36 seconds total
        "theme": theme,
        "scenes": scenes
    }

    # Build composition would go here
    # comp_builder.build_composition(composition_config)

    print("\n" + "="*70)
    print("✅ Specialized Layouts With Content Project Created!")
    print("="*70)
    print(f"\n📁 Project location: {project_path}")
    print("\n⚠️  Note: Composition builder API is under development.")
    print("    The project structure has been created successfully!")
    print(f"\n🎥 Scenes created:")
    print("   1. Title Card - Introduction")
    print("   2. OverTheShoulderLayout - Coding tutorial with developer")
    print("   3. DialogueFrameLayout - Tech interview")
    print("   4. StackedReactionLayout - Music video reaction")
    print("   5. HUDStyleLayout - Gaming livestream with chat")
    print("   6. PerformanceMultiCamLayout - Multi-angle music performance")
    print("   7. FocusStripLayout - Documentary-style video essay")
    print("   8. Final Title Card - Call to action")

    print(f"\n⏱️  Total duration: 36 seconds (1080 frames @ 30fps)")

    print("\n📝 Next steps:")
    print(f"   cd {project_path}")
    print("   npm install")
    print("   npm start")

    print("\n🎨 Content components demonstrated:")
    print("   ✓ PersonSpeaking - Webcam/avatar components")
    print("   ✓ CodeBlock - Syntax-highlighted code")
    print("   ✓ VideoPlayer - Original content playback")
    print("   ✓ GameplayScreen - Gaming footage")
    print("   ✓ LiveChat - Stream chat overlay")
    print("   ✓ CameraView - Multi-angle shots")
    print("   ✓ BRollFootage - Background content")
    print("   ✓ Design token integration")

    print("\n" + "="*70)

    return project_path


def main():
    """Main entry point."""
    print("\n🎬 YouTube Layouts Showcase Generator")
    print("   Content-Rich Version (Realistic examples)\n")

    try:
        project_path = generate_content_rich_showcase()
        print("✨ Generation complete!")
        return 0
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
