"""
chuk-mcp-remotion - AI-powered video generation with Remotion

A design-system-first approach to creating professional YouTube videos.
"""

__version__ = "0.1.0"

# Export main server
from .server import mcp, main

# Export design tokens
from .tokens.colors import COLOR_TOKENS
from .tokens.typography import TYPOGRAPHY_TOKENS
from .tokens.motion import MOTION_TOKENS

# Export registries and themes
from .registry.components import COMPONENT_REGISTRY
from .themes.youtube_themes import YOUTUBE_THEMES

__all__ = [
    "mcp",
    "main",
    "COLOR_TOKENS",
    "TYPOGRAPHY_TOKENS",
    "MOTION_TOKENS",
    "COMPONENT_REGISTRY",
    "YOUTUBE_THEMES",
]
