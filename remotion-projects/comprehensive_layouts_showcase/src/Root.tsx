import React from 'react';
import { Composition } from 'remotion';
import { VideoComposition } from './VideoComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="comprehensive-layouts-showcase"
        component={VideoComposition}
        durationInFrames={2280}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          theme: 'tech'
        }}
      />
    </>
  );
};