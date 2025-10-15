"""
Pytest configuration and shared fixtures.
"""

import pytest
import json
from pathlib import Path
from unittest.mock import Mock, AsyncMock

from chuk_virtual_fs import AsyncVirtualFileSystem
from chuk_mcp_remotion.themes.theme_manager import ThemeManager, Theme
from chuk_mcp_remotion.tokens.token_manager import TokenManager
from chuk_mcp_remotion.utils.project_manager import ProjectManager


@pytest.fixture
async def vfs(tmp_path):
    """Create a virtual filesystem instance for testing."""
    # Use file provider with tmp_path as base
    async with AsyncVirtualFileSystem(provider="memory") as fs:
        yield fs


@pytest.fixture
async def theme_manager(vfs):
    """Create a fresh ThemeManager instance for testing."""
    return ThemeManager(vfs)


@pytest.fixture
async def token_manager(vfs):
    """Create a fresh TokenManager instance for testing."""
    return TokenManager(vfs)


@pytest.fixture
def sample_theme_data():
    """Sample theme data for testing."""
    return {
        "name": "Test Theme",
        "description": "A test theme",
        "colors": {
            "primary": ["#FF0000", "#CC0000", "#990000"],
            "accent": ["#00FF00", "#00CC00", "#009900"],
            "gradient": "linear-gradient(135deg, #FF0000 0%, #00FF00 100%)",
            "background": {
                "dark": "#000000",
                "light": "#FFFFFF",
                "glass": "rgba(0, 0, 0, 0.8)"
            },
            "text": {
                "on_dark": "#FFFFFF",
                "on_light": "#000000",
                "muted": "#808080"
            },
            "semantic": {
                "success": "#00FF00",
                "warning": "#FFFF00",
                "error": "#FF0000",
                "info": "#0000FF"
            }
        },
        "typography": {
            "primary_font": {
                "name": "Display",
                "fonts": ["Inter", "sans-serif"]
            },
            "body_font": {
                "name": "Body",
                "fonts": ["Inter", "sans-serif"]
            },
            "default_resolution": "video_1080p"
        },
        "motion": {
            "default_spring": {
                "name": "Smooth",
                "config": {"damping": 200, "mass": 0.5, "stiffness": 200}
            },
            "default_easing": {
                "name": "Ease Out",
                "curve": [0.0, 0.0, 0.58, 1.0]
            },
            "default_duration": {
                "frames": 20,
                "seconds": 0.667
            }
        },
        "use_cases": ["Testing", "Unit tests"]
    }


@pytest.fixture
def sample_theme(sample_theme_data):
    """Create a sample Theme instance."""
    return Theme.from_dict(sample_theme_data)


@pytest.fixture
def project_manager():
    """Create a mock ProjectManager instance."""
    manager = Mock(spec=ProjectManager)
    manager.current_project = None
    manager.current_composition = None
    return manager


@pytest.fixture
def mock_mcp_server():
    """Create a mock MCP server for testing tools."""
    class MockMCP:
        def __init__(self):
            self.tools = {}

        def tool(self, func):
            """Decorator to register tools."""
            self.tools[func.__name__] = func
            return func

    return MockMCP()


@pytest.fixture
def temp_theme_file(tmp_path, sample_theme_data):
    """Create a temporary theme JSON file."""
    theme_file = tmp_path / "test_theme.json"
    with theme_file.open('w') as f:
        json.dump(sample_theme_data, f)
    return theme_file


@pytest.fixture
def invalid_theme_data():
    """Invalid theme data missing required fields."""
    return {
        "name": "Invalid Theme",
        "description": "Missing required fields"
        # Missing colors, typography, motion
    }


# Color token fixtures
@pytest.fixture
def sample_color_scale():
    """Sample 3-step color scale."""
    return ["#0066FF", "#0052CC", "#003D99"]


@pytest.fixture
def sample_semantic_colors():
    """Sample semantic colors."""
    return {
        "success": "#00C853",
        "warning": "#FFB300",
        "error": "#FF3D00",
        "info": "#00B8D4"
    }


# Typography token fixtures
@pytest.fixture
def sample_font_family():
    """Sample font family definition."""
    return {
        "name": "Display",
        "fonts": ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        "description": "Large headings and titles",
        "usage": "Video titles, main headings"
    }


@pytest.fixture
def sample_font_sizes():
    """Sample font sizes for 1080p."""
    return {
        "xs": "24px",
        "sm": "32px",
        "base": "40px",
        "lg": "48px",
        "xl": "64px",
        "2xl": "80px",
        "3xl": "96px",
        "4xl": "120px"
    }


# Motion token fixtures
@pytest.fixture
def sample_spring_config():
    """Sample spring configuration."""
    return {
        "name": "Bouncy",
        "description": "Playful spring with overshoot",
        "config": {
            "damping": 15,
            "mass": 1.0,
            "stiffness": 300,
            "overshootClamping": False
        },
        "usage": "Attention-grabbing elements"
    }


@pytest.fixture
def sample_easing_curve():
    """Sample easing curve."""
    return {
        "name": "Ease Out",
        "curve": [0.0, 0.0, 0.58, 1.0],
        "css": "ease-out",
        "description": "Starts fast, decelerates",
        "usage": "Entrances, appearing elements"
    }


@pytest.fixture
def sample_duration():
    """Sample duration preset."""
    return {
        "frames": 20,
        "seconds": 0.667,
        "description": "Normal",
        "usage": "Standard animations"
    }


@pytest.fixture
def sample_animation_preset():
    """Sample animation preset."""
    return {
        "name": "Fade In",
        "properties": ["opacity"],
        "from": {"opacity": 0},
        "to": {"opacity": 1},
        "easing": "ease_out",
        "duration": "normal"
    }


# Token export/import fixtures
@pytest.fixture
def sample_typography_tokens():
    """Sample typography tokens for export/import."""
    return {
        "font_families": {
            "display": {
                "name": "Display",
                "fonts": ["Inter", "sans-serif"]
            }
        },
        "text_styles": {
            "title": {
                "fontSize": "3xl",
                "fontWeight": "bold"
            }
        }
    }


@pytest.fixture
def sample_color_tokens():
    """Sample color tokens for export/import."""
    return {
        "custom_theme": {
            "primary": ["#FF0000", "#CC0000", "#990000"],
            "accent": ["#00FF00", "#00CC00", "#009900"],
            "background": {"dark": "#000000", "light": "#FFFFFF"},
            "text": {"on_dark": "#FFFFFF", "on_light": "#000000"},
            "semantic": {"success": "#00FF00", "error": "#FF0000"}
        }
    }


@pytest.fixture
def sample_motion_tokens():
    """Sample motion tokens for export/import."""
    return {
        "spring_configs": {
            "custom": {
                "name": "Custom",
                "config": {"damping": 100, "mass": 1, "stiffness": 200}
            }
        }
    }
