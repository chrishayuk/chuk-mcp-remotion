import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface PerformanceMultiCamLayoutProps {
  frontCam?: React.ReactNode;
  overheadCam?: React.ReactNode;
  handCam?: React.ReactNode;
  detailCam?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * PerformanceMultiCamLayout - 2x2 multi-camera grid
 *
 * Perfect for:
 * - Music performances and instrumental covers
 * - Cooking shows and recipe tutorials
 * - Art creation and drawing timelapses
 * - DIY and craft content
 * - Sports technique analysis
 *
 * Config options:
 * - labels: { front, overhead, hand, detail } - Custom labels for each cam
 * - gap: Space between camera views
 * - border_width, border_color: Styling
 * - show_labels: Display camera labels (default: true)
 */
export const PerformanceMultiCamLayout: React.FC<PerformanceMultiCamLayoutProps> = ({
  frontCam,
  overheadCam,
  handCam,
  detailCam,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const gap = 20;
  const showLabels = true;

  const labels = {
    front: 'FRONT VIEW',
    overhead: 'OVERHEAD',
    hand: 'HAND CAM',
    detail: 'DETAIL',
  };

  const CamPanel = ({ content, label, color }: { content: React.ReactNode; label: string; color: string }) => (
    <div
      style={{
        flex: 1,
        border: '2px solid ' + color,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {content}
      {showLabels && label && (
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: 'rgba(10, 14, 26, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '4px 12px',
            borderRadius: 4,
            border: `1px solid ${color}4D`,
            fontSize: 12,
            fontWeight: 700,
            color,
            fontFamily: 'system-ui, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );

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
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap,
        }}
      >
        <CamPanel content={frontCam} label={labels.front} color="#00D9FF" />
        <CamPanel content={overheadCam} label={labels.overhead} color="#0066FF" />
        <CamPanel content={handCam} label={labels.hand} color="#0066FF" />
        <CamPanel content={detailCam} label={labels.detail} color="#0066FF" />
      </div>
    </AbsoluteFill>
  );
};