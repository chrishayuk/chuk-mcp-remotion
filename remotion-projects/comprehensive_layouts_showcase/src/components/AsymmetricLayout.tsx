import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface AsymmetricLayoutProps {
  mainFeed?: React.ReactNode;
  demo1?: React.ReactNode;
  demo2?: React.ReactNode;
  overlay?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
  layout?: string;
  main_ratio?: number;
  padding?: number;
  gap?: number;
  border_width?: number;
  border_color?: string;
  border_radius?: number;
  main_background?: string;
  demo_background?: string;
}

/**
 * AsymmetricLayout - Perfect for YouTube tutorials
 *
 * Layouts available via layout prop:
 * - "main-right" (default): Demo panels on left (stacked), main feed on right (2/3 width)
 * - "main-left": Main feed on left (2/3 width), demo panels on right (stacked)
 * - "main-bottom": Demo panels on top (side by side), main feed on bottom (2/3 height)
 * - "main-top": Main feed on top (2/3 height), demo panels on bottom (side by side)
 */
export const AsymmetricLayout: React.FC<AsymmetricLayoutProps> = ({
  mainFeed,
  demo1,
  demo2,
  overlay,
  startFrame,
  durationInFrames,
  layout = 'main-right',
  main_ratio = 66.67,
  padding = 40,
  gap = 20,
  border_width,
  border_color = 'rgba(255, 255, 255, 0.2)',
  border_radius = 8,
  main_background,
  demo_background
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const demoRatio = 100 - main_ratio;

  const renderMainRight = () => (
    <div
      style={{
        position: 'absolute',
        top: padding,
        left: padding,
        right: padding,
        bottom: padding,
        display: 'flex',
        flexDirection: 'row',
        gap: gap,
      }}
    >
      {/* Demo panels (left side, stacked) */}
      <div
        style={{
          flex: `0 0 calc(${demoRatio}% - ${gap / 2}px)`,
          display: 'flex',
          flexDirection: 'column',
          gap: gap,
        }}
      >
        <div
          style={{
            flex: '1 1 50%',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(demo_background && { background: demo_background }),
          }}
        >
          {demo1}
        </div>
        <div
          style={{
            flex: '1 1 50%',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(demo_background && { background: demo_background }),
          }}
        >
          {demo2}
        </div>
      </div>

      {/* Main feed (right side) */}
      <div
        style={{
          flex: `0 0 calc(${main_ratio}% - ${gap / 2}px)`,
          ...(border_width && {
            border: `${border_width}px solid ${border_color}`,
            borderRadius: border_radius
          }),
          overflow: 'hidden',
          position: 'relative',
          ...(main_background && { background: main_background }),
        }}
      >
        {mainFeed}
      </div>
    </div>
  );

  const renderMainLeft = () => (
    <div
      style={{
        position: 'absolute',
        top: padding,
        left: padding,
        right: padding,
        bottom: padding,
        display: 'flex',
        flexDirection: 'row',
        gap: gap,
      }}
    >
      {/* Main feed (left side) */}
      <div
        style={{
          flex: `0 0 calc(${main_ratio}% - ${gap / 2}px)`,
          ...(border_width && {
            border: `${border_width}px solid ${border_color}`,
            borderRadius: border_radius
          }),
          overflow: 'hidden',
          position: 'relative',
          ...(main_background && { background: main_background }),
        }}
      >
        {mainFeed}
      </div>

      {/* Demo panels (right side, stacked) */}
      <div
        style={{
          flex: `0 0 calc(${demoRatio}% - ${gap / 2}px)`,
          display: 'flex',
          flexDirection: 'column',
          gap: gap,
        }}
      >
        <div
          style={{
            flex: '1 1 50%',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(demo_background && { background: demo_background }),
          }}
        >
          {demo1}
        </div>
        <div
          style={{
            flex: '1 1 50%',
            ...(border_width && {
              border: `${border_width}px solid ${border_color}`,
              borderRadius: border_radius
            }),
            overflow: 'hidden',
            position: 'relative',
            ...(demo_background && { background: demo_background }),
          }}
        >
          {demo2}
        </div>
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {layout === 'main-left' ? renderMainLeft() : renderMainRight()}

      {/* Optional overlay (like lower third) */}
      {overlay && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          {overlay}
        </div>
      )}
    </AbsoluteFill>
  );
};