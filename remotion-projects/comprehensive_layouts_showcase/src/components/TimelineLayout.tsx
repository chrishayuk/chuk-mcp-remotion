import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

interface TimelineLayoutProps {
  mainContent?: React.ReactNode;
  milestones?: Array<{label: string; frame: number}>;
  startFrame: number;
  durationInFrames: number;
}

/**
 * TimelineLayout - Progress/Timeline overlay with main content
 *
 * Perfect for:
 * - Educational explainers ("Step 1 → Step 2 → Step 3")
 * - Progression videos ("Day 1 → Day 30")
 * - Tutorial chapters
 * - Before/After timelines
 *
 * Features:
 * - Horizontal progress bar
 * - Milestone markers
 * - Current position indicator
 * - Customizable position (top/bottom)
 */
export const TimelineLayout: React.FC<TimelineLayoutProps> = ({
  mainContent,
  milestones,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const position = 'bottom'; // "top" or "bottom"
  const timelineHeight = 80; // pixels
  const timelineMargin = 20; // margin from edges

  // Calculate progress (0 to 1)
  const progress = interpolate(
    relativeFrame,
    [0, durationInFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
  );

  const milestoneArray = milestones || [];

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* Main Content */}
      <div
        style={{
          position: 'absolute',
          top: position === 'top' ? timelineHeight + timelineMargin * 2 : 0,
          left: 0,
          right: 0,
          bottom: position === 'bottom' ? timelineHeight + timelineMargin * 2 : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {mainContent}
      </div>

      {/* Timeline Bar */}
      <div
        style={{
          position: 'absolute',
          [position === 'top' ? 'top' : 'bottom']: timelineMargin,
          left: timelineMargin,
          right: timelineMargin,
          height: timelineHeight,
          background: 'rgba(10, 14, 26, 0.85)',
          borderRadius: 12,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Progress Bar Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 8,
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            overflow: 'hidden'
          }}
        >
          {/* Progress Fill */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${progress * 100}%`,
              background: '#0066FF',
              borderRadius: 4,
              transition: 'width 0.2s ease-out'
            }}
          />

          {/* Milestones */}
          {milestoneArray.map((milestone, idx) => {
            const milestoneProgress = (milestone.frame - startFrame) / durationInFrames;
            const isPassed = progress >= milestoneProgress;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${milestoneProgress * 100}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: isPassed
                    ? '#00D9FF'
                    : 'rgba(255, 255, 255, 0.4)',
                  border: `2px solid ${isPassed ? '#00D9FF' : '#8B92A4'}`,
                  zIndex: 10,
                  boxShadow: isPassed ? '0 0 8px #00D9FF' : 'none'
                }}
              >
                {/* Milestone Label */}
                <div
                  style={{
                    position: 'absolute',
                    top: position === 'top' ? '100%' : 'auto',
                    bottom: position === 'bottom' ? '100%' : 'auto',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: position === 'top' ? 8 : 0,
                    marginBottom: position === 'bottom' ? 8 : 0,
                    fontSize: 14,
                    fontWeight: 600,
                    color: isPassed ? '#FFFFFF' : '#8B92A4',
                    whiteSpace: 'nowrap',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {milestone.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};