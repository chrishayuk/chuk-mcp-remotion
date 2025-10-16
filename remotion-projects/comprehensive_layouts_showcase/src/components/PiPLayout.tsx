import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface PiPLayoutProps {
  mainContent?: React.ReactNode;
  pipContent?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * PiPLayout - Picture-in-Picture Layout
 *
 * Perfect for commentary videos, tutorials, and reaction content.
 * Main content (90%) with small inset overlay (10%)
 *
 * Positions available via config.pip_position:
 * - "bottom-right" (default)
 * - "bottom-left"
 * - "top-right"
 * - "top-left"
 */
export const PiPLayout: React.FC<PiPLayoutProps> = ({
  mainContent,
  pipContent,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const pipPosition = 'bottom-right';
  const pipSize = 15; // Percentage of screen
  const pipPadding = 40; // Padding from edges

  // Position configurations
  const positions = {
    'bottom-right': {
      bottom: pipPadding,
      right: pipPadding
    },
    'bottom-left': {
      bottom: pipPadding,
      left: pipPadding
    },
    'top-right': {
      top: pipPadding,
      right: pipPadding
    },
    'top-left': {
      top: pipPadding,
      left: pipPadding
    }
  };

  const position = positions[pipPosition] || positions['bottom-right'];

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* Main Content (full screen) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {mainContent}
      </div>

      {/* PiP Overlay (small inset) */}
      <div
        style={{
          position: 'absolute',
          ...position,
          width: `${pipSize}%`,
          aspectRatio: '16 / 9',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          zIndex: 100
        }}
      >
        {pipContent}
      </div>
    </AbsoluteFill>
  );
};