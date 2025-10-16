import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TitleSceneProps {
  title: string;
  subtitle?: string;
  startFrame: number;
  durationInFrames: number;
  variant?: string;
  animation?: string;
}

export const TitleScene: React.FC<TitleSceneProps> = ({
  title,
  subtitle,
  startFrame,
  durationInFrames,
  variant = 'bold',
  animation = 'fade'
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  // Animation logic
  let opacity = 1;
  let transform = 'none';
  let filter = 'none';
  let displayText = title;

  if (animation === 'fade_zoom') {
    // Fade + Zoom animation
    const progress = spring({
      frame: relativeFrame,
      fps,
      config: {
        damping: 200,
        mass: 0.5,
        stiffness: 200
      }
    });
    opacity = interpolate(progress, [0, 1], [0, 1]);
    const scale = interpolate(progress, [0, 1], [0.8, 1]);
    transform = `scale(${scale})`;
  } else if (animation === 'slide_up') {
    // Slide up animation
    const progress = spring({
      frame: relativeFrame,
      fps,
      config: {
        damping: 200,
        mass: 0.5,
        stiffness: 200
      }
    });
    opacity = interpolate(progress, [0, 1], [0, 1]);
    const translateY = interpolate(progress, [0, 1], [100, 0]);
    transform = `translateY(${translateY}px)`;
  } else if (animation === 'typewriter') {
    // Typewriter animation
    const charsToShow = Math.floor(interpolate(relativeFrame, [0, 60], [0, title.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }));
    displayText = title.slice(0, charsToShow);
    opacity = 1;
  } else if (animation === 'blur_in') {
    // Blur to focus animation
    const progress = spring({
      frame: relativeFrame,
      fps,
      config: { damping: 150, mass: 0.5, stiffness: 150 }
    });
    opacity = interpolate(progress, [0, 1], [0, 1]);
    const blur = interpolate(progress, [0, 1], [20, 0]);
    filter = `blur(${blur}px)`;
  } else if (animation === 'fade_slide') {
    // Fade + Slide animation
    const progress = spring({
      frame: relativeFrame,
      fps,
      config: {
        damping: 200,
        mass: 0.5,
        stiffness: 200
      }
    });
    opacity = interpolate(progress, [0, 1], [0, 1]);
    const translateX = interpolate(progress, [0, 1], [-50, 0]);
    transform = `translateX(${translateX}px)`;
  } else if (animation === 'zoom') {
    // Zoom animation
    const progress = spring({
      frame: relativeFrame,
      fps,
      config: {
        damping: 200,
        mass: 0.5,
        stiffness: 200
      }
    });
    opacity = interpolate(progress, [0, 1], [0, 1]);
    const scale = interpolate(progress, [0, 1], [1.2, 1]);
    transform = `scale(${scale})`;
  } else {
    // Default: fade in
    opacity = interpolate(relativeFrame, [0, 20], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    });
  }

  // Fade out at the end
  const fadeOutStart = durationInFrames - 20;
  const fadeOut = interpolate(
    relativeFrame,
    [fadeOutStart, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
  );

  const finalOpacity = opacity * fadeOut;

  // Variant styles using theme tokens
  const variants: Record<string, any> = {
    minimal: {
      background: '#F5F7FA',
      textColor: '#1A1A1A',
      accentColor: '#0066FF'
    },
    standard: {
      background: '',
      textColor: '#FFFFFF',
      accentColor: '#00D9FF'
    },
    bold: {
      background: '',
      textColor: '#FFFFFF',
      accentColor: '#FFFFFF'
    },
    kinetic: {
      background: '#0A0E1A',
      textColor: '#FFFFFF',
      accentColor: '#00D9FF'
    },
    glass: {
      background: 'rgba(10, 14, 26, 0.85)',
      textColor: '#FFFFFF',
      accentColor: '#00D9FF'
    }
  };

  const variantStyle = variants[variant] || variants.bold;

  return (
    <AbsoluteFill
      style={{
        background: variantStyle.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'",
        padding: 80
      }}
    >
      <div
        style={{
          opacity: finalOpacity,
          transform,
          filter,
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontSize: variant === 'bold' ? 120 : 96,
            fontWeight: variant === 'kinetic' ? 900 : 700,
            color: variantStyle.textColor,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textTransform: variant === 'kinetic' ? 'uppercase' : 'none',
            maxWidth: 1200
          }}
        >
          {displayText}
        </h1>
        {subtitle && (
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
            {subtitle}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};