import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface GridProps {
  children: React.ReactNode[];
  startFrame: number;
  durationInFrames: number;
}

export const Grid: React.FC<GridProps> = ({
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

  // Grid layout configurations
  const layouts = {
    '1x2': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr'
    },
    '2x1': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr'
    },
    '2x2': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr'
    },
    '3x2': {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr'
    },
    '2x3': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr'
    },
    '3x3': {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr'
    },
    '4x2': {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr'
    },
    '2x4': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr'
    }
  };

  const layoutStyle = layouts['3x3'] || layouts['3x3'];

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          display: 'grid',
          ...layoutStyle,
          gap: 20,
        }}
      >
        {Array.isArray(children) ? children.map((child, idx) => (
          <div key={idx} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {child}
          </div>
        )) : children}
      </div>
    </AbsoluteFill>
  );
};