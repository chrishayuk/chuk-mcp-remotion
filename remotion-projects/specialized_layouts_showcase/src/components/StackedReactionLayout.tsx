import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface StackedReactionLayoutProps {
  originalClip?: React.ReactNode;
  reactorFace?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * StackedReactionLayout - Vertical stack for reaction videos
 *
 * Perfect for:
 * - Music/video reactions
 * - Commentary content
 * - YouTube Shorts and TikTok reactions
 * - Reacting to clips and memes
 *
 * Config options:
 * - clip_ratio: Height percentage for original clip (default: 65)
 * - gap: Space between panels
 * - show_labels: Show "ORIGINAL" and "REACTION" badges (default: true)
 * - border_width, border_color: Styling
 */
export const StackedReactionLayout: React.FC<StackedReactionLayoutProps> = ({
  originalClip,
  reactorFace,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const clipRatio = 65;
  const reactorRatio = 100 - clipRatio;
  const gap = 20;
  const showLabels = true;

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
          flexDirection: 'column',
          gap,
        }}
      >
        {/* Original clip being reacted to */}
        <div
          style={{
            flex: `0 0 ${clipRatio}%`,
            borderRadius: 8,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {originalClip}
          {showLabels && (
            <div
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(10, 14, 26, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #00D9FF4D',
                fontSize: 12,
                fontWeight: 600,
                color: '#00D9FF',
                fontFamily: 'system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              ORIGINAL
            </div>
          )}
        </div>

        {/* Reactor's face */}
        <div
          style={{
            flex: `0 0 ${reactorRatio}%`,
            border: '2px solid #0066FF',
            borderRadius: 8,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {reactorFace}
          {showLabels && (
            <div
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(10, 14, 26, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '4px 12px',
                borderRadius: 4,
                border: '1px solid #0066FF4D',
                fontSize: 12,
                fontWeight: 600,
                color: '#0066FF',
                fontFamily: 'system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              REACTION
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};