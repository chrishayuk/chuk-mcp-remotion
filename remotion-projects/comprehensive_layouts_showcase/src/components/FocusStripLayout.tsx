import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface FocusStripLayoutProps {
  hostStrip?: React.ReactNode;
  backgroundContent?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * FocusStripLayout - Centered host bar over B-roll background
 *
 * Perfect for:
 * - Modern commentary aesthetic (Vox, Nebula style)
 * - Documentary-style narration
 * - Essay videos with visual background
 * - News/analysis content
 *
 * Config options:
 * - strip_height: Height percentage of host strip (default: 30)
 * - strip_position: "center" | "top" | "bottom" (default: "center")
 * - background_blur: Blur amount for background (default: 5)
 * - border_width, border_color: Strip styling
 */
export const FocusStripLayout: React.FC<FocusStripLayoutProps> = ({
  hostStrip,
  backgroundContent,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const stripHeight = 30;
  const stripPosition = 'center';
  const backgroundBlur = 5;

  const getStripPosition = () => {
    if (stripPosition === 'top') return { top: '5%' };
    if (stripPosition === 'bottom') return { bottom: '5%' };
    return { top: '50%', transform: 'translateY(-50%)' };
  };

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* B-roll background (blurred) */}
      <div
        style={{
          width: '100%',
          height: '100%',
          filter: `blur(${backgroundBlur}px)`,
          overflow: 'hidden',
        }}
      >
        {backgroundContent}
      </div>

      {/* Focused host strip (centered bar) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: `${stripHeight}%`,
          ...getStripPosition(),
          background: '#0A0E1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {hostStrip}
      </div>
    </AbsoluteFill>
  );
};