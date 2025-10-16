import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface ThreeRowLayoutProps {
  top?: React.ReactNode;
  middle?: React.ReactNode;
  bottom?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
  top_height?: number;
  middle_height?: number;
  bottom_height?: number;
  padding?: number;
  gap?: number;
  border_width?: number;
  border_color?: string;
  border_radius?: number;
  background?: string;
}

export const ThreeRowLayout: React.FC<ThreeRowLayoutProps> = ({
  top,
  middle,
  bottom,
  startFrame,
  durationInFrames,
  top_height = 33.33,
  middle_height = 33.33,
  bottom_height = 33.33,
  padding = 40,
  gap = 20,
  border_width,
  border_color = 'rgba(255, 255, 255, 0.2)',
  border_radius = 8,
  background
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: padding,
          left: padding,
          right: padding,
          bottom: padding,
          display: 'flex',
          flexDirection: 'column',
          gap: gap,
          width: `calc(100% - ${padding * 2}px)`,
          height: `calc(100% - ${padding * 2}px)`,
        }}
      >
        {/* Top Row */}
        <div
          style={{
            flex: `0 0 calc(${top_height}% - ${gap * 2 / 3}px)`,
            display: 'flex',
            flexDirection: 'row',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(background && { background }),
          }}
        >
          {top}
        </div>

        {/* Middle Row */}
        <div
          style={{
            flex: `0 0 calc(${middle_height}% - ${gap * 2 / 3}px)`,
            display: 'flex',
            flexDirection: 'row',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(background && { background }),
          }}
        >
          {middle}
        </div>

        {/* Bottom Row */}
        <div
          style={{
            flex: `0 0 calc(${bottom_height}% - ${gap * 2 / 3}px)`,
            display: 'flex',
            flexDirection: 'row',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(background && { background }),
          }}
        >
          {bottom}
        </div>
      </div>
    </AbsoluteFill>
  );
};