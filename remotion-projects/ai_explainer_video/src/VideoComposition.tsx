import React from 'react';
import { AbsoluteFill } from 'remotion';
import { LowerThird } from './components/LowerThird';
import { TitleScene } from './components/TitleScene';

interface VideoCompositionProps {
  theme: string;
}

export const VideoComposition: React.FC<VideoCompositionProps> = ({ theme }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <TitleScene
        startFrame={0}
        durationInFrames={90}
        text="The Future of AI"
        subtitle="How AI is transforming technology"
        variant="bold"
        animation="fade_zoom"
      />
      <LowerThird
        startFrame={15}
        durationInFrames={120}
        name="Dr. Sarah Chen"
        title="AI Researcher, Stanford University"
        variant="glass"
        position="bottom_left"
      />
      <LowerThird
        startFrame={150}
        durationInFrames={90}
        name="Machine Learning"
        title="Transforming Industries"
        variant="bold"
        position="bottom_center"
      />
    </AbsoluteFill>
  );
};
