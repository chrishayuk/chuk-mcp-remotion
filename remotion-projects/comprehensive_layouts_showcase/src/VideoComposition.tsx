import React from 'react';
import { AbsoluteFill } from 'remotion';
import { AsymmetricLayout } from './components/AsymmetricLayout';
import { Container } from './components/Container';
import { DemoBox } from './components/DemoBox';
import { DialogueFrameLayout } from './components/DialogueFrameLayout';
import { FocusStripLayout } from './components/FocusStripLayout';
import { Grid } from './components/Grid';
import { HUDStyleLayout } from './components/HUDStyleLayout';
import { MosaicLayout } from './components/MosaicLayout';
import { OverTheShoulderLayout } from './components/OverTheShoulderLayout';
import { PerformanceMultiCamLayout } from './components/PerformanceMultiCamLayout';
import { PiPLayout } from './components/PiPLayout';
import { SplitScreen } from './components/SplitScreen';
import { StackedReactionLayout } from './components/StackedReactionLayout';
import { ThreeByThreeGrid } from './components/ThreeByThreeGrid';
import { ThreeColumnLayout } from './components/ThreeColumnLayout';
import { ThreeRowLayout } from './components/ThreeRowLayout';
import { TimelineLayout } from './components/TimelineLayout';
import { TitleScene } from './components/TitleScene';
import { VerticalLayout } from './components/VerticalLayout';

interface VideoCompositionProps {
  theme: string;
}

export const VideoComposition: React.FC<VideoCompositionProps> = ({ theme }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <TitleScene
        startFrame={0}
        durationInFrames={120}
        text="Complete Layout System"
        subtitle="17 Professional Layouts for YouTube"
        variant="bold"
        animation="fade_zoom"
      />
      <Grid
        startFrame={120}
        durationInFrames={120}
        layout="2x2"
        padding={40}
        gap={20}
        border_width={2}
      >
        {[
          <DemoBox
            startFrame={120}
            durationInFrames={120}
            label="CELL 1"
            color="primary"
          />,
          <DemoBox
            startFrame={120}
            durationInFrames={120}
            label="CELL 2"
            color="accent"
          />,
          <DemoBox
            startFrame={120}
            durationInFrames={120}
            label="CELL 3"
            color="secondary"
          />,
          <DemoBox
            startFrame={120}
            durationInFrames={120}
            label="CELL 4"
            color="primary"
          />
        ]}
      </Grid>
      <ThreeByThreeGrid
        startFrame={240}
        durationInFrames={120}
        padding={40}
        gap={15}
        border_width={2}
        children={[
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 1"
            color="primary"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 2"
            color="accent"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 3"
            color="primary"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 4"
            color="accent"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 5"
            color="primary"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 6"
            color="accent"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 7"
            color="primary"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 8"
            color="accent"
          />,
          <DemoBox
            startFrame={240}
            durationInFrames={120}
            label="CELL 9"
            color="primary"
          />
        ]}
      />
      <ThreeColumnLayout
        startFrame={360}
        durationInFrames={120}
        left_width={30}
        center_width={40}
        right_width={30}
        gap={20}
        border_width={2}
        left={
          <DemoBox
            startFrame={360}
            durationInFrames={120}
            label="LEFT\n30%"
            color="primary"
          />
        }
        center={
          <DemoBox
            startFrame={360}
            durationInFrames={120}
            label="CENTER\n40%"
            color="accent"
          />
        }
        right={
          <DemoBox
            startFrame={360}
            durationInFrames={120}
            label="RIGHT\n30%"
            color="primary"
          />
        }
      />
      <ThreeRowLayout
        startFrame={480}
        durationInFrames={120}
        top_height={20}
        middle_height={60}
        bottom_height={20}
        gap={20}
        border_width={2}
        top={
          <DemoBox
            startFrame={480}
            durationInFrames={120}
            label="TOP 20%"
            color="accent"
          />
        }
        middle={
          <DemoBox
            startFrame={480}
            durationInFrames={120}
            label="MIDDLE 60%"
            color="primary"
          />
        }
        bottom={
          <DemoBox
            startFrame={480}
            durationInFrames={120}
            label="BOTTOM 20%"
            color="accent"
          />
        }
      />
      <AsymmetricLayout
        startFrame={600}
        durationInFrames={120}
        layout="main-right"
        main_ratio={67}
        gap={20}
        border_width={2}
        mainFeed={
          <DemoBox
            startFrame={600}
            durationInFrames={120}
            label="MAIN\n67%"
            color="accent"
          />
        }
        demo1={
          <DemoBox
            startFrame={600}
            durationInFrames={120}
            label="DEMO 1"
            color="primary"
          />
        }
        demo2={
          <DemoBox
            startFrame={600}
            durationInFrames={120}
            label="DEMO 2"
            color="primary"
          />
        }
      />
      <SplitScreen
        startFrame={720}
        durationInFrames={120}
        orientation="horizontal"
        gap={20}
        divider_width={3}
        left={
          <DemoBox
            startFrame={720}
            durationInFrames={120}
            label="LEFT 50%"
            color="primary"
          />
        }
        right={
          <DemoBox
            startFrame={720}
            durationInFrames={120}
            label="RIGHT 50%"
            color="accent"
          />
        }
      />
      <Container
        startFrame={840}
        durationInFrames={120}
        padding={80}
        border_width={3}
        border_radius={12}
      >
          <DemoBox
            startFrame={840}
            durationInFrames={120}
            label="CENTERED\nCONTENT"
            color="accent"
          />
      </Container>
      <OverTheShoulderLayout
        startFrame={960}
        durationInFrames={120}
        host_position="left"
        host_size={35}
        gap={20}
        border_width={2}
        hostView={
          <DemoBox
            startFrame={960}
            durationInFrames={120}
            label="HOST\n35%"
            color="primary"
          />
        }
        screenContent={
          <DemoBox
            startFrame={960}
            durationInFrames={120}
            label="SCREEN\n65%"
            color="accent"
          />
        }
      />
      <DialogueFrameLayout
        startFrame={1080}
        durationInFrames={120}
        character_a_label="Person A"
        character_b_label="Person B"
        gap={20}
        border_width={2}
        characterA={
          <DemoBox
            startFrame={1080}
            durationInFrames={120}
            label="PERSON A"
            color="primary"
          />
        }
        characterB={
          <DemoBox
            startFrame={1080}
            durationInFrames={120}
            label="PERSON B"
            color="secondary"
          />
        }
      />
      <StackedReactionLayout
        startFrame={1200}
        durationInFrames={120}
        clip_ratio={65}
        gap={20}
        show_labels={true}
        border_width={2}
        originalClip={
          <DemoBox
            startFrame={1200}
            durationInFrames={120}
            label="ORIGINAL\n65%"
            color="accent"
          />
        }
        reactorFace={
          <DemoBox
            startFrame={1200}
            durationInFrames={120}
            label="REACTOR\n35%"
            color="primary"
          />
        }
      />
      <HUDStyleLayout
        startFrame={1320}
        durationInFrames={120}
        webcam_position="top-left"
        webcam_size={15}
        show_chat={true}
        chat_width={25}
        gameplay={
          <DemoBox
            startFrame={1320}
            durationInFrames={120}
            label="GAMEPLAY"
            color="accent"
          />
        }
        webcam={
          <DemoBox
            startFrame={1320}
            durationInFrames={120}
            label="CAM"
            color="primary"
          />
        }
        chatOverlay={
          <DemoBox
            startFrame={1320}
            durationInFrames={120}
            label="CHAT"
            color="secondary"
          />
        }
      />
      <PerformanceMultiCamLayout
        startFrame={1440}
        durationInFrames={120}
        labels={{"front": "FRONT", "overhead": "OVERHEAD", "hand": "HAND", "detail": "DETAIL"}}
        gap={20}
        show_labels={true}
        border_width={2}
        frontCam={
          <DemoBox
            startFrame={1440}
            durationInFrames={120}
            label="FRONT"
            color="accent"
          />
        }
        overheadCam={
          <DemoBox
            startFrame={1440}
            durationInFrames={120}
            label="OVERHEAD"
            color="primary"
          />
        }
        handCam={
          <DemoBox
            startFrame={1440}
            durationInFrames={120}
            label="HAND"
            color="primary"
          />
        }
        detailCam={
          <DemoBox
            startFrame={1440}
            durationInFrames={120}
            label="DETAIL"
            color="primary"
          />
        }
      />
      <FocusStripLayout
        startFrame={1560}
        durationInFrames={120}
        strip_height={30}
        strip_position="center"
        background_blur={5}
        border_width={2}
        hostStrip={
          <DemoBox
            startFrame={1560}
            durationInFrames={120}
            label="HOST\nSTRIP 30%"
            color="primary"
          />
        }
        backgroundContent={
          <DemoBox
            startFrame={1560}
            durationInFrames={120}
            label="B-ROLL\nBACKGROUND"
            color="accent"
          />
        }
      />
      <PiPLayout
        startFrame={1680}
        durationInFrames={120}
        pip_position="bottom-right"
        pip_size={20}
        pip_border_width={2}
        mainContent={
          <DemoBox
            startFrame={1680}
            durationInFrames={120}
            label="MAIN\nCONTENT"
            color="accent"
          />
        }
        pipContent={
          <DemoBox
            startFrame={1680}
            durationInFrames={120}
            label="PiP\n20%"
            color="primary"
          />
        }
      />
      <VerticalLayout
        startFrame={1800}
        durationInFrames={120}
        layout="top-bottom"
        content_ratio={60}
        gap={10}
        topContent={
          <DemoBox
            startFrame={1800}
            durationInFrames={120}
            label="TOP\n60%"
            color="accent"
          />
        }
        bottomContent={
          <DemoBox
            startFrame={1800}
            durationInFrames={120}
            label="BOTTOM\n30%"
            color="primary"
          />
        }
        captionBar={
          <DemoBox
            startFrame={1800}
            durationInFrames={120}
            label="CAPTIONS\n10%"
            color="secondary"
          />
        }
      />
      <TimelineLayout
        startFrame={1920}
        durationInFrames={120}
        timeline_height={15}
        timeline_position="bottom"
        show_progress={true}
        mainContent={
          <DemoBox
            startFrame={1920}
            durationInFrames={120}
            label="MAIN\nCONTENT"
            color="accent"
          />
        }
      />
      <MosaicLayout
        startFrame={2040}
        durationInFrames={120}
        style="hero-corners"
        gap={15}
        border_width={2}
        children={[
          <DemoBox
            startFrame={2040}
            durationInFrames={120}
            label="CLIP 1"
            color="accent"
          />,
          <DemoBox
            startFrame={2040}
            durationInFrames={120}
            label="CLIP 2"
            color="primary"
          />,
          <DemoBox
            startFrame={2040}
            durationInFrames={120}
            label="CLIP 3"
            color="secondary"
          />,
          <DemoBox
            startFrame={2040}
            durationInFrames={120}
            label="CLIP 4"
            color="primary"
          />
        ]}
      />
      <TitleScene
        startFrame={2160}
        durationInFrames={120}
        text="17 Professional Layouts"
        subtitle="Build Any YouTube Video"
        variant="glass"
        animation="zoom"
      />
    </AbsoluteFill>
  );
};
