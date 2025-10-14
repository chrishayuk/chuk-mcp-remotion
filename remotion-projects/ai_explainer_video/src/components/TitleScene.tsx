import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TitleSceneProps {
  text: string;
  subtitle?: string;
}

export const TitleScene: React.FC<TitleSceneProps> = ({ text, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animation based on variant
  // Fade + Zoom animation
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200,
      mass: 0.5,
      stiffness: 200
    }
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const scale = interpolate(progress, [0, 1], [0.8, 1]);
  const transform = `scale(${scale})`;


  // Variant styles
  const variants = {
    minimal: {
      background: '#F5F7FA',
      textColor: '#1A1A1A',
      accentColor: '#0066FF'
    },
    standard: {
      background: `linear-gradient(135deg, #0A0E1A 0%, #003D99 100%)`,
      textColor: '#FFFFFF',
      accentColor: '#00D9FF'
    },
    bold: {
      background: `linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)`,
      textColor: '#FFFFFF',
      accentColor: '#FFFFFF'
    },
    kinetic: {
      background: '#0A0E1A',
      textColor: '#FFFFFF',
      accentColor: '#00D9FF'
    }
  };

  const variantStyle = variants['bold'] || variants.bold;

  return (
    <AbsoluteFill
      style={{
        background: variantStyle.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Inter', sans-serif",
        padding: 80
      }}
    >
      <div
        style={{
          opacity,
          transform,
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: variantStyle.textColor,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 1200
          }}
        >
          The Future of AI
        </h1>
        <p
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: variantStyle.accentColor,
            margin: '32px 0 0 0',
            lineHeight: 1.3,
            maxWidth: 900
          }}
        >
          How AI is transforming technology
        </p>
      </div>
    </AbsoluteFill>
  );
};