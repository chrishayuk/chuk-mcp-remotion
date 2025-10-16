import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface HUDStyleLayoutProps {
  gameplay?: React.ReactNode;
  webcam?: React.ReactNode;
  chatOverlay?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * HUDStyleLayout - Gaming/Livestream HUD with overlays
 *
 * Perfect for:
 * - Livestreams and gaming content
 * - Let's Plays and speedruns
 * - Tutorial streams with chat interaction
 * - Esports and competitive gaming
 *
 * Config options:
 * - webcam_position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
 * - webcam_size: Webcam width percentage (default: 15)
 * - show_chat: Display chat overlay (default: true)
 * - chat_width: Chat panel width percentage (default: 25)
 */
export const HUDStyleLayout: React.FC<HUDStyleLayoutProps> = ({
  gameplay,
  webcam,
  chatOverlay,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const webcamPosition = 'top-left';
  const webcamSize = 15;
  const showChat = true;
  const chatWidth = 25;

  const webcamPositions = {
    'top-left': { top: 20, left: 20 },
    'top-right': { top: 20, right: 20 },
    'bottom-left': { bottom: 20, left: 20 },
    'bottom-right': { bottom: 20, right: 20 },
  };

  const webcamPos = webcamPositions[webcamPosition] || webcamPositions['top-left'];

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* Main gameplay (full screen) */}
      <div style={{ width: '100%', height: '100%' }}>
        {gameplay}
      </div>

      {/* Webcam overlay */}
      {webcam && (
        <div
          style={{
            position: 'absolute',
            ...webcamPos,
            width: `${webcamSize}%`,
            aspectRatio: '16 / 9',
            border: '3px solid #0066FF',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            zIndex: 10,
          }}
        >
          {webcam}
        </div>
      )}

      {/* Chat overlay (right side) */}
      {showChat && chatOverlay && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            bottom: 20,
            width: `${chatWidth}%`,
            background: 'rgba(10, 14, 26, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #8B92A433',
            borderRadius: 12,
            padding: 12,
            overflow: 'auto',
            zIndex: 5,
          }}
        >
          {/* Chat header */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: '1px solid #8B92A433',
            }}
          >
            LIVE CHAT
          </div>
          {chatOverlay}
        </div>
      )}
    </AbsoluteFill>
  );
};