import React from 'react';
import { AbsoluteFill } from 'remotion';
import { DemoBox } from './components/DemoBox';
import { DialogueFrameLayout } from './components/DialogueFrameLayout';
import { FocusStripLayout } from './components/FocusStripLayout';
import { HUDStyleLayout } from './components/HUDStyleLayout';
import { OverTheShoulderLayout } from './components/OverTheShoulderLayout';
import { PerformanceMultiCamLayout } from './components/PerformanceMultiCamLayout';
import { StackedReactionLayout } from './components/StackedReactionLayout';
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
        text="Specialized YouTube Layouts"
        subtitle="Advanced Layouts for Professional Content Creation"
        variant="bold"
        animation="fade_zoom"
      />
      <TitleScene
        startFrame={90}
        durationInFrames={90}
        text="Create Professional Videos"
        subtitle="6 Specialized Layouts for Every Content Type"
        variant="glass"
        animation="fade_zoom"
      />
      <OverTheShoulderLayout
        startFrame={0}
        durationInFrames={150}
        host_position="left"
        host_size={35}
        gap={20}
        border_width={2}
        padding={40}
        hostView={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="HOST VIEW"
            color="primary"
          />
        }
        screenContent={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="SCREEN CONTENT"
            color="accent"
          />
        }
      />
      <DialogueFrameLayout
        startFrame={0}
        durationInFrames={150}
        character_a_label="Character A"
        character_b_label="Character B"
        gap={20}
        border_width={2}
        padding={40}
        characterA={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="CHARACTER A"
            color="primary"
          />
        }
        characterB={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="CHARACTER B"
            color="secondary"
          />
        }
      />
      <StackedReactionLayout
        startFrame={0}
        durationInFrames={150}
        clip_ratio={65}
        gap={20}
        show_labels={true}
        border_width={2}
        padding={40}
        originalClip={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="ORIGINAL CLIP"
            color="accent"
          />
        }
        reactorFace={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="REACTOR"
            color="primary"
          />
        }
      />
      <HUDStyleLayout
        startFrame={0}
        durationInFrames={150}
        webcam_position="top-left"
        webcam_size={15}
        show_chat={true}
        chat_width={25}
        gameplay={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="GAMEPLAY"
            color="accent"
          />
        }
        webcam={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="WEBCAM"
            color="primary"
          />
        }
        chatOverlay={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="CHAT"
            color="secondary"
          />
        }
      />
      <PerformanceMultiCamLayout
        startFrame={0}
        durationInFrames={150}
        labels={{"front": "FRONT VIEW", "overhead": "OVERHEAD", "hand": "HAND CAM", "detail": "DETAIL"}}
        gap={20}
        show_labels={true}
        border_width={2}
        padding={40}
        frontCam={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="FRONT"
            color="accent"
          />
        }
        overheadCam={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="OVERHEAD"
            color="primary"
          />
        }
        handCam={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="HAND"
            color="primary"
          />
        }
        detailCam={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="DETAIL"
            color="primary"
          />
        }
      />
      <FocusStripLayout
        startFrame={0}
        durationInFrames={150}
        strip_height={30}
        strip_position="center"
        background_blur={5}
        border_width={2}
        strip_shadow={true}
        hostStrip={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="HOST STRIP"
            color="primary"
          />
        }
        backgroundContent={
          <DemoBox
            startFrame={0}
            durationInFrames={0}
            label="B-ROLL BACKGROUND"
            color="accent"
          />
        }
      />
    </AbsoluteFill>
  );
};
