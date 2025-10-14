import React from 'react';
import { AbsoluteFill } from 'remotion';
import { LineChart } from './components/LineChart';
import { LowerThird } from './components/LowerThird';

interface VideoCompositionProps {
  theme: string;
}

export const VideoComposition: React.FC<VideoCompositionProps> = ({ theme }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
      <LineChart
        startFrame={15}
        durationInFrames={120}
        data={[[1, 10000], [2, 15000], [3, 18000], [4, 25000], [5, 35000], [6, 42000], [7, 55000], [8, 68000]]}
        title="Monthly Revenue Growth"
        xlabel="Month"
        ylabel="Revenue ($)"
      />
      <LineChart
        startFrame={150}
        durationInFrames={120}
        data={[[1, 45], [2, 52], [3, 48], [4, 65], [5, 72], [6, 78], [7, 85], [8, 92]]}
        title="User Engagement Score"
        xlabel="Week"
        ylabel="Score"
      />
      <LineChart
        startFrame={300}
        durationInFrames={120}
        data={[[0, 120], [1, 115], [2, 95], [3, 85], [4, 75], [5, 65], [6, 58], [7, 52]]}
        title="Page Load Time Improvement"
        xlabel="Sprint"
        ylabel="Load Time (ms)"
      />
      <LowerThird
        startFrame={30}
        durationInFrames={90}
        name="Q4 2024 Performance"
        title="Data-Driven Insights"
        variant="glass"
        position="bottom_left"
      />
    </AbsoluteFill>
  );
};
