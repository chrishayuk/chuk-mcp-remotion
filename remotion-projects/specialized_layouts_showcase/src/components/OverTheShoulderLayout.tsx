import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface OverTheShoulderLayoutProps {
  hostView?: React.ReactNode;
  screenContent?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * OverTheShoulderLayout - Host + Screen Content Side-by-Side
 *
 * Perfect for:
 * - Tutorials and coding walkthroughs
 * - Editing demos and creative processes
 * - Screen share with presenter context
 * - Educational content showing both instructor and material
 *
 * Config options:
 * - host_position: "left" | "right" (default: "left")
 * - host_size: Host view width percentage (default: 35)
 * - gap: Space between panels (default: 20)
 * - border_width, border_color: Styling options
 */
export const OverTheShoulderLayout: React.FC<OverTheShoulderLayoutProps> = ({
  hostView,
  screenContent,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const hostPosition = 'left';
  const hostSize = 35;
  const screenSize = 100 - hostSize;
  const gap = 20;

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          display: 'flex',
          flexDirection: hostPosition === 'left' ? 'row' : 'row-reverse',
          gap,
        }}
      >
        {/* Host view (smaller, side angle) */}
        <div
          style={{
            flex: `0 0 ${hostSize}%`,
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {hostView}
        </div>

        {/* Screen/Content view (larger, main focus) */}
        <div
          style={{
            flex: `0 0 ${screenSize}%`,
            borderRadius: 8,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {screenContent}
        </div>
      </div>
    </AbsoluteFill>
  );
};