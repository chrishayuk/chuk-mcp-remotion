import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface MosaicLayoutProps {
  children: React.ReactNode[];
  startFrame: number;
  durationInFrames: number;
}

/**
 * MosaicLayout - Irregular collage with layered clips
 *
 * Perfect for:
 * - Montage videos
 * - Highlight reels
 * - Creative intros
 * - Recap sequences
 *
 * Preset styles via config.style:
 * - "hero-corners" (default): Large center, small corners
 * - "stacked": Cascading layered effect
 * - "spotlight": Main center with floating accents
 * - "custom": Use config.positions array for full control
 */
export const MosaicLayout: React.FC<MosaicLayoutProps> = ({
  children,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const style = 'hero-corners';
  const childrenArray = Array.isArray(children) ? children : [children];

  // Preset position configurations
  const presets = {
    'hero-corners': [
      // Main (center, large)
      { width: 50, height: 50, top: 25, left: 25, zIndex: 10 },
      // Corner accents
      { width: 25, height: 25, top: 5, left: 5, zIndex: 5 },
      { width: 25, height: 25, top: 5, right: 5, zIndex: 5 },
      { width: 25, height: 25, bottom: 5, left: 5, zIndex: 5 },
      { width: 25, height: 25, bottom: 5, right: 5, zIndex: 5 }
    ],
    'stacked': [
      { width: 60, height: 60, top: 5, left: 5, zIndex: 1 },
      { width: 60, height: 60, top: 12, left: 12, zIndex: 2 },
      { width: 60, height: 60, top: 19, left: 19, zIndex: 3 },
      { width: 60, height: 60, top: 26, left: 26, zIndex: 4 },
      { width: 60, height: 60, top: 33, left: 33, zIndex: 5 }
    ],
    'spotlight': [
      // Main spotlight (center)
      { width: 55, height: 55, top: 22.5, left: 22.5, zIndex: 10 },
      // Floating accents
      { width: 20, height: 20, top: 10, left: 60, zIndex: 5 },
      { width: 20, height: 20, top: 70, left: 15, zIndex: 5 },
      { width: 20, height: 20, top: 60, right: 10, zIndex: 5 }
    ]
  };

  // Get positions (preset or custom)
  const positions = presets[style] || presets['hero-corners'];

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {childrenArray.map((child, idx) => {
        const pos = positions[idx % positions.length];

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              width: `${pos.width}%`,
              height: `${pos.height}%`,
              top: pos.top !== undefined ? `${pos.top}%` : undefined,
              bottom: pos.bottom !== undefined ? `${pos.bottom}%` : undefined,
              left: pos.left !== undefined ? `${pos.left}%` : undefined,
              right: pos.right !== undefined ? `${pos.right}%` : undefined,
              zIndex: pos.zIndex,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: 12,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            {child}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};