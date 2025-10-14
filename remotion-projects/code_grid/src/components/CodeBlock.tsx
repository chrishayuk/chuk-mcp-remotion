import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  startFrame: number;
  durationInFrames: number;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  title,
  startFrame,
  durationInFrames
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  // Default: fade in
  const opacity = interpolate(relativeFrame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });
  const scale = 1;
  const translateY = 0;
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

  const variantStyle = variants[''] || variants.editor;

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
        theme={themes.nightOwl}
        code={code}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={variantStyle}>
            <div>
              {/* Code content with syntax highlighting */}
              <div style={{ display: 'flex', gap: 20 }}>

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