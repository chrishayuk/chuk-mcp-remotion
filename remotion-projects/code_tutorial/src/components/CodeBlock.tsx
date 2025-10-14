import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  startFrame: number;
  durationInFrames: number;
  variant?: string;
  animation?: string;
  show_line_numbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  title,
  startFrame,
  durationInFrames,
  variant = 'editor',
  animation = 'slide_up',
  show_line_numbers = true
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

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
  const opacity = progress;
  const scale = 1;
  const translateY = interpolate(progress, [0, 1], [50, 0]);
  const blur = 0;


  // Exit animation
  const exitDuration = 20;
  const exitProgress = interpolate(
    relativeFrame,
    [durationInFrames - exitDuration, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
  );

  const finalOpacity = opacity * exitProgress;

  // Variant styles
  const variants = {
    minimal: {
      background: 'rgba(30, 35, 50, 0.95)',
      borderRadius: 12,
      border: 'none',
      padding: 20,
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'hidden'
    },
    terminal: {
      background: 'rgba(20, 20, 20, 0.98)',
      borderRadius: 8,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: 30,
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
    },
    editor: {
      background: 'rgba(26, 31, 46, 0.98)',
      borderRadius: 12,
      border: '1px solid rgba(255, 255, 255, 0.05)',
      padding: 0,
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
    },
    glass: {
      background: 'rgba(10, 14, 26, 0.85)',
      backdropFilter: 'blur(20px)',
      borderRadius: 16,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: 30,
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
    }
  };

  const variantStyle = variants[variant as keyof typeof variants] || variants.editor;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${scale}) translateY(${translateY}px)`,
        opacity: finalOpacity,
        filter: `blur(${blur}px)`,
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'",
        overflow: 'hidden'
      }}
    >
      <Highlight
        theme={themes.vsDark}
        code={code}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={variantStyle}>
            {/* Editor title bar */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '12px 20px',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              {/* Window buttons */}
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }} />
              </div>
              <div
                style={{
                  fontSize: '24px',
                  color: '#8B92A4',
                  marginLeft: 12,
                  fontFamily: "'Inter', 'SF Pro Text', 'system-ui', 'sans-serif'"
                }}
              >
                fibonacci.js
              </div>
            </div>
            <div style={{ padding: 30 }}>
              {/* Code content with syntax highlighting */}
              <div style={{ display: 'flex', gap: 20 }}>
                {show_line_numbers && (
                  <div
                    style={{
                      color: 'rgba(255, 255, 255, 0.3)',
                      fontSize: '32px',
                      lineHeight: 1.8,
                      textAlign: 'right',
                      userSelect: 'none',
                      minWidth: 50
                    }}
                  >
                    {tokens.map((_, idx) => (
                      <div key={idx}>{idx + 1}</div>
                    ))}
                  </div>
                )}

                {/* Code with syntax highlighting */}
                <div
                  style={{
                    flex: 1,
                    fontSize: '32px',
                    lineHeight: 1.6,
                    overflow: 'auto',
                    maxHeight: '100%',
                    whiteSpace: 'pre'
                  }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Highlight>
    </div>
  );
};