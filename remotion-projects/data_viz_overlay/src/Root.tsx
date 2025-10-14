import { Composition } from 'remotion';
import { VideoComposition } from './VideoComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="data-viz-overlay"
        component={VideoComposition}
        durationInFrames={420}
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