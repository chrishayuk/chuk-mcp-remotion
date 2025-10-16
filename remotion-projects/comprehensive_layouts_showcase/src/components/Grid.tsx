import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface GridProps {
  children: React.ReactNode[];
  startFrame: number;
  durationInFrames: number;
  layout?: string;
  padding?: number;
  gap?: number;
  border_width?: number;
  border_color?: string;
  border_radius?: number;
  cell_background?: string;
  align_items?: string;
  justify_items?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  startFrame,
  durationInFrames,
  layout = '3x3',
  padding = 40,
  gap = 20,
  border_width,
  border_color = 'rgba(255, 255, 255, 0.2)',
  border_radius = 8,
  cell_background,
  align_items,
  justify_items
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  // Grid layout configurations
  const layouts: Record<string, { gridTemplateColumns: string; gridTemplateRows: string }> = {
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

  const layoutStyle = layouts[layout] || layouts['3x3'];

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: padding,
          left: padding,
          right: padding,
          bottom: padding,
          display: 'grid',
          ...layoutStyle,
          gap: gap,
          width: `calc(100% - ${padding * 2}px)`,
          height: `calc(100% - ${padding * 2}px)`,
          ...(align_items && { alignItems: align_items }),
          ...(justify_items && { justifyItems: justify_items }),
        }}
      >
        {Array.isArray(children) ? children.map((child, idx) => (
          <div key={idx} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            ...(cell_background && { background: cell_background }),
          }}>
            {child}
          </div>
        )) : children}
      </div>
    </AbsoluteFill>
  );
};