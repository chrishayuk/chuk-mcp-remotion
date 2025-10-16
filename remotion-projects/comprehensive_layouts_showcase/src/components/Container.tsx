import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface ContainerProps {
  children: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

export const Container: React.FC<ContainerProps> = ({
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

  // Position mappings
  const positions = {
    'center': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    'top-left': {
      top: 40,
      left: 40
    },
    'top-center': {
      top: 40,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    'top-right': {
      top: 40,
      right: 40
    },
    'middle-left': {
      top: '50%',
      left: 40,
      transform: 'translateY(-50%)'
    },
    'middle-right': {
      top: '50%',
      right: 40,
      transform: 'translateY(-50%)'
    },
    'bottom-left': {
      bottom: 40,
      left: 40
    },
    'bottom-center': {
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    'bottom-right': {
      bottom: 40,
      right: 40
    }
  };

  const positionStyle = positions['center'] || positions.center;

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          ...positionStyle,
          width: 'auto',
          height: 'auto',
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};