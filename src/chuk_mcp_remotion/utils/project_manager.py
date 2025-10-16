"""
Project Manager - Creates and manages Remotion projects.

Handles project scaffolding, file generation, and project state.
"""
import json
import shutil
from pathlib import Path
from typing import Dict, Optional
from jinja2 import Template

from ..generator.component_builder import ComponentBuilder
from ..generator.composition_builder import CompositionBuilder


class ProjectManager:
    """Manages Remotion video projects."""

    def __init__(self, workspace_dir: Optional[Path] = None):
        """
        Initialize project manager.

        Args:
            workspace_dir: Directory for projects (default: ./remotion-projects)
        """
        if workspace_dir is None:
            workspace_dir = Path.cwd() / "remotion-projects"

        self.workspace_dir = Path(workspace_dir)
        self.workspace_dir.mkdir(exist_ok=True, parents=True)

        self.component_builder = ComponentBuilder()
        self.current_project: Optional[str] = None
        self.current_composition: Optional[CompositionBuilder] = None

    def create_project(
        self,
        name: str,
        theme: str = "tech",
        fps: int = 30,
        width: int = 1920,
        height: int = 1080
    ) -> Dict[str, str]:
        """
        Create a new Remotion project.

        Args:
            name: Project name
            theme: Theme to use
            fps: Frames per second
            width: Video width
            height: Video height

        Returns:
            Dictionary with project info
        """
        project_dir = self.workspace_dir / name

        if project_dir.exists():
            raise ValueError(f"Project '{name}' already exists")

        # Create project structure
        project_dir.mkdir(parents=True)
        (project_dir / "src").mkdir()
        (project_dir / "src" / "components").mkdir()

        # Copy template files
        template_dir = Path(__file__).parent.parent.parent.parent / "remotion-templates"

        # Copy package.json
        self._copy_template(
            template_dir / "package.json",
            project_dir / "package.json",
            {"project_name": name}
        )

        # Copy config files
        shutil.copy(template_dir / "remotion.config.ts", project_dir / "remotion.config.ts")
        shutil.copy(template_dir / "tsconfig.json", project_dir / "tsconfig.json")
        shutil.copy(template_dir / ".gitignore", project_dir / ".gitignore")

        # Copy source files
        # Remotion composition IDs can only contain a-z, A-Z, 0-9, and hyphens
        composition_id = name.replace('_', '-')

        self._copy_template(
            template_dir / "src" / "Root.tsx",
            project_dir / "src" / "Root.tsx",
            {
                "composition_id": composition_id,
                "duration_in_frames": 300,  # 10 seconds at 30fps
                "fps": fps,
                "width": width,
                "height": height,
                "theme": theme
            }
        )

        shutil.copy(
            template_dir / "src" / "index.ts",
            project_dir / "src" / "index.ts"
        )

        # Create initial composition
        self.current_project = name
        self.current_composition = CompositionBuilder(fps=fps, width=width, height=height)
        self.current_composition.theme = theme

        return {
            "name": name,
            "path": str(project_dir),
            "theme": theme,
            "fps": str(fps),
            "resolution": f"{width}x{height}"
        }

    def _copy_template(self, src: Path, dest: Path, variables: Dict[str, any]):
        """Copy a template file and replace variables."""
        if not src.exists():
            # Create empty file if template doesn't exist
            dest.write_text("")
            return

        content = src.read_text()
        # Use custom delimiters [[ ]] to avoid JSX {} conflicts
        template = Template(
            content,
            variable_start_string='[[',
            variable_end_string=']]',
            block_start_string='[%',
            block_end_string='%]'
        )
        rendered = template.render(**variables)
        dest.write_text(rendered)

    def add_component_to_project(
        self,
        component_type: str,
        config: Dict,
        theme: str = "tech"
    ) -> str:
        """
        Generate and add a component to the current project.

        Args:
            component_type: Type of component (TitleScene, LowerThird, etc.)
            config: Component configuration
            theme: Theme to use

        Returns:
            Path to generated component file
        """
        if not self.current_project:
            raise ValueError("No active project. Create a project first.")

        project_dir = self.workspace_dir / self.current_project
        components_dir = project_dir / "src" / "components"

        # Generate component code
        tsx_code = self.component_builder.build_component(component_type, config, theme)

        # Write component file
        component_file = components_dir / f"{component_type}.tsx"
        component_file.write_text(tsx_code)

        return str(component_file)

    def generate_composition(self) -> str:
        """
        Generate the complete video composition from the composition builder.

        Returns:
            Path to generated VideoComposition.tsx file
        """
        if not self.current_project:
            raise ValueError("No active project")

        if not self.current_composition:
            raise ValueError("No composition created")

        project_dir = self.workspace_dir / self.current_project

        # Generate composition TSX
        composition_tsx = self.current_composition.generate_composition_tsx()

        # Write composition file
        composition_file = project_dir / "src" / "VideoComposition.tsx"
        composition_file.write_text(composition_tsx)

        # Update Root.tsx with correct duration
        duration_frames = self.current_composition.get_total_duration_frames()
        root_file = project_dir / "src" / "Root.tsx"

        # Remotion composition IDs can only contain a-z, A-Z, 0-9, and hyphens
        composition_id = self.current_project.replace('_', '-')

        self._copy_template(
            Path(__file__).parent.parent.parent.parent / "remotion-templates" / "src" / "Root.tsx",
            root_file,
            {
                "composition_id": composition_id,
                "duration_in_frames": duration_frames,
                "fps": self.current_composition.fps,
                "width": self.current_composition.width,
                "height": self.current_composition.height,
                "theme": self.current_composition.theme
            }
        )

        return str(composition_file)

    def get_project_info(self) -> Dict:
        """Get information about the current project."""
        if not self.current_project or not self.current_composition:
            return {"error": "No active project"}

        return {
            "name": self.current_project,
            "path": str(self.workspace_dir / self.current_project),
            "composition": self.current_composition.to_dict()
        }

    def list_projects(self) -> list:
        """List all projects in the workspace."""
        if not self.workspace_dir.exists():
            return []

        projects = []
        for project_dir in self.workspace_dir.iterdir():
            if project_dir.is_dir() and (project_dir / "package.json").exists():
                projects.append({
                    "name": project_dir.name,
                    "path": str(project_dir)
                })

        return projects

    def build_composition_from_scenes(
        self,
        scenes: list,
        theme: str = "tech"
    ) -> Dict[str, str]:
        """
        Build a complete composition from scene configurations.

        This method takes a list of scene dictionaries and:
        1. Converts them to ComponentInstance objects
        2. Generates TSX files for each component type
        3. Builds the final VideoComposition.tsx

        Args:
            scenes: List of scene dictionaries with type, config, startFrame, durationInFrames
            theme: Theme to use for generation

        Returns:
            Dictionary with paths to generated files

        Example scene format:
            {
                "type": "TitleScene",
                "config": {"title": "Hello", "subtitle": "World"},
                "startFrame": 0,
                "durationInFrames": 90
            }
        """
        if not self.current_project or not self.current_composition:
            raise ValueError("No active project. Create a project first.")

        from ..generator.composition_builder import ComponentInstance

        project_dir = self.workspace_dir / self.current_project
        components_dir = project_dir / "src" / "components"

        # Track unique component types that need TSX files
        component_types_needed = set()
        generated_files = []

        # Process each scene
        for scene in scenes:
            scene_type = scene.get("type")
            scene_config = scene.get("config", {})
            start_frame = scene.get("startFrame", 0)
            duration_frames = scene.get("durationInFrames", 90)

            # Track this component type
            component_types_needed.add(scene_type)

            # Create ComponentInstance and add to composition
            component_instance = ComponentInstance(
                component_type=scene_type,
                start_frame=start_frame,
                duration_frames=duration_frames,
                props=scene_config,
                layer=0  # Main content layer
            )

            # Handle nested children recursively
            self._process_nested_children(scene, component_instance, component_types_needed)

            self.current_composition.components.append(component_instance)

        # Generate TSX files for all unique component types
        for component_type in component_types_needed:
            try:
                # Generate component code
                tsx_code = self.component_builder.build_component(
                    component_type,
                    {},  # Empty config - templates handle props from VideoComposition
                    theme
                )

                # Write component file
                component_file = components_dir / f"{component_type}.tsx"
                component_file.write_text(tsx_code)
                generated_files.append(str(component_file))

            except Exception as e:
                print(f"⚠️  Warning: Could not generate {component_type}: {e}")

        # Generate the main VideoComposition.tsx
        composition_file = self.generate_composition()
        generated_files.append(composition_file)

        return {
            "project": self.current_project,
            "composition_file": composition_file,
            "component_files": generated_files,
            "component_types": list(component_types_needed),
            "total_frames": self.current_composition.get_total_duration_frames()
        }

    def _process_nested_children(
        self,
        scene: Dict,
        component_instance: 'ComponentInstance',
        component_types_needed: set
    ):
        """
        Process nested children in layout components.

        Args:
            scene: Scene dictionary that may contain nested children
            component_instance: ComponentInstance to update with child components
            component_types_needed: Set to track component types for TSX generation
        """
        from ..generator.composition_builder import ComponentInstance

        # Handle different types of nested structures

        # Grid and Container children (array or single)
        if "children" in scene:
            children = scene["children"]
            if isinstance(children, list):
                child_instances = []
                for child in children:
                    if isinstance(child, dict) and "type" in child:
                        component_types_needed.add(child["type"])
                        child_instance = ComponentInstance(
                            component_type=child["type"],
                            start_frame=scene.get("startFrame", 0),
                            duration_frames=scene.get("durationInFrames", 90),
                            props=child.get("config", {}),
                            layer=5
                        )
                        child_instances.append(child_instance)
                        # Recursively process nested children
                        self._process_nested_children(child, child_instance, component_types_needed)
                component_instance.props["children"] = child_instances
            elif isinstance(children, dict) and "type" in children:
                component_types_needed.add(children["type"])
                child_instance = ComponentInstance(
                    component_type=children["type"],
                    start_frame=scene.get("startFrame", 0),
                    duration_frames=scene.get("durationInFrames", 90),
                    props=children.get("config", {}),
                    layer=5
                )
                component_instance.props["children"] = child_instance
                self._process_nested_children(children, child_instance, component_types_needed)

        # SplitScreen left/right/top/bottom
        for key in ["left", "right", "top", "bottom"]:
            if key in scene:
                child = scene[key]
                if isinstance(child, dict) and "type" in child:
                    component_types_needed.add(child["type"])
                    child_instance = ComponentInstance(
                        component_type=child["type"],
                        start_frame=scene.get("startFrame", 0),
                        duration_frames=scene.get("durationInFrames", 90),
                        props=child.get("config", {}),
                        layer=5
                    )
                    component_instance.props[key] = child_instance
                    self._process_nested_children(child, child_instance, component_types_needed)

        # Specialized layout components
        specialized_keys = [
            "mainFeed", "demo1", "demo2", "overlay",  # AsymmetricLayout
            "center",  # ThreeColumnLayout
            "middle",  # ThreeRowLayout
            "hostView", "screenContent",  # OverTheShoulderLayout
            "characterA", "characterB",  # DialogueFrameLayout
            "originalClip", "reactorFace",  # StackedReactionLayout
            "gameplay", "webcam", "chatOverlay",  # HUDStyleLayout
            "frontCam", "overheadCam", "handCam", "detailCam",  # PerformanceMultiCamLayout
            "hostStrip", "backgroundContent",  # FocusStripLayout
            "mainContent", "pipContent",  # PiPLayout
            "topContent", "bottomContent", "captionBar",  # VerticalLayout
            "milestones", "clips",  # TimelineLayout, MosaicLayout
            "content",  # Container
            "leftPanel", "rightPanel", "topPanel", "bottomPanel"  # SplitScreen
        ]

        for key in specialized_keys:
            if key in scene:
                child = scene[key]
                if isinstance(child, dict) and "type" in child:
                    component_types_needed.add(child["type"])
                    child_instance = ComponentInstance(
                        component_type=child["type"],
                        start_frame=scene.get("startFrame", 0),
                        duration_frames=scene.get("durationInFrames", 90),
                        props=child.get("config", {}),
                        layer=10 if key == "overlay" else 5
                    )
                    component_instance.props[key] = child_instance
                    self._process_nested_children(child, child_instance, component_types_needed)
