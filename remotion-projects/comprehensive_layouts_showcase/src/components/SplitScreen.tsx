import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface SplitScreenProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
  dividerWidth?: number;
  dividerColor?: string;
  gap?: number;
  orientation?: 'horizontal' | 'vertical';
}

export const SplitScreen: React.FC<SplitScreenProps> = ({
  left,
  right,
  top,
  bottom,
  startFrame,
  durationInFrames,
  dividerWidth = 2,
  dividerColor = '#00D9FF',
  gap = 20,
  orientation = 'horizontal',
}) => {
  const frame = useCurrentFrame();

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const isHorizontal = orientation === 'horizontal';

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        gap,
        padding: 40,
        backgroundColor: '#0A0E1A',
      }}
    >
      <div style={{ flex: 1 }}>
        {isHorizontal ? left : top}
      </div>

      <div
        style={{
          width: isHorizontal ? dividerWidth : '100%',
          height: isHorizontal ? '100%' : dividerWidth,
          background: dividerColor,
        }}
      />

      <div style={{ flex: 1 }}>
        {isHorizontal ? right : bottom}
      </div>
    </AbsoluteFill>
  );
};