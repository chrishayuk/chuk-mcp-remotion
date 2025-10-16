import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface DialogueFrameLayoutProps {
  characterA?: React.ReactNode;
  characterB?: React.ReactNode;
  startFrame: number;
  durationInFrames: number;
}

/**
 * DialogueFrameLayout - Split screen for conversations
 *
 * Perfect for:
 * - Skits and comedy sketches
 * - Storytime with character roles
 * - AI conversations and debates
 * - Role-play content
 * - Interview formats
 *
 * Config options:
 * - character_a_label: Label for left character
 * - character_b_label: Label for right character
 * - gap: Space between panels
 * - border_width, border_color: Styling
 */
export const DialogueFrameLayout: React.FC<DialogueFrameLayoutProps> = ({
  characterA,
  characterB,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  const gap = 20;
  const characterALabel = '';
  const characterBLabel = '';

  const CharacterPanel = ({ content, label }: { content: React.ReactNode; label: string }) => (
    <div
      style={{
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {content}
      {label && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(10, 14, 26, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '8px 20px',
            borderRadius: 8,
            border: '1px solid #0066FF4D',
            fontSize: 18,
            fontWeight: 600,
            color: '',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          display: 'flex',
          gap,
        }}
      >
        <CharacterPanel content={characterA} label={characterALabel} />
        <CharacterPanel content={characterB} label={characterBLabel} />
      </div>
    </AbsoluteFill>
  );
};