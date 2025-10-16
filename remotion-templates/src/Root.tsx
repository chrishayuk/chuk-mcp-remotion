import React from 'react';
import { Composition } from 'remotion';
import { VideoComposition } from './VideoComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="[[ composition_id ]]"
        component={VideoComposition}
        durationInFrames={[[ duration_in_frames ]]}
        fps={[[ fps ]]}
        width={[[ width ]]}
        height={[[ height ]]}
        defaultProps={{
          theme: '[[ theme ]]'
        }}
      />
    </>
  );
};
