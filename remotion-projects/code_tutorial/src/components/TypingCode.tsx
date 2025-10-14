import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { Highlight, themes } from 'prism-react-renderer';

interface TypingCodeProps {
  code: string;
  language?: string;
  title?: string;
  startFrame: number;
  durationInFrames: number;
  variant?: string;
  cursor_style?: string;
  typing_speed?: string;
  show_line_numbers?: boolean;
}

export const TypingCode: React.FC<TypingCodeProps> = ({
  code,
  language = 'javascript',
  title,
  startFrame,
  durationInFrames,
  variant = 'editor',
  cursor_style = 'line',
  typing_speed = 'normal',
  show_line_numbers = true
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const relativeFrame = frame - startFrame;

  // Don't render if outside the time range
  if (frame < startFrame || frame >= startFrame + durationInFrames) {
    return null;
  }

  // Typing speed configuration
  const typingSpeeds = {
    slow: 0.5,      // 0.5 chars per frame
    normal: 1.5,    // 1.5 chars per frame
    fast: 3,        // 3 chars per frame
    instant: 999    // All at once
  };

  const charsPerFrame = typingSpeeds[typing_speed as keyof typeof typingSpeeds] || typingSpeeds.normal;
  const totalChars = code.length;
  const typingDuration = durationInFrames - 20;  // Leave time for entrance

  // Calculate how many characters to show
  const startDelay = 10;  // Small delay before typing
  const charsToShow = Math.min(
    totalChars,
    Math.floor(Math.max(0, relativeFrame - startDelay) * charsPerFrame)
  );

  // Get the displayed code
  const displayedCode = code.slice(0, charsToShow);
  const lines = displayedCode.split('\n');
  const isTypingComplete = charsToShow >= totalChars;

  // Cursor blinking
  const cursorBlinkSpeed = 30;  // Blink every 30 frames (1 second at 30fps)
  const showCursor = !isTypingComplete && Math.floor(relativeFrame / (cursorBlinkSpeed / 2)) % 2 === 0;

  // Variant styles
  const variants = {
    minimal: {
      background: 'rgba(30, 35, 50, 0.95)',
      borderRadius: 12,
      border: 'none',
      padding: 30,
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
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
    hacker: {
      background: 'rgba(0, 0, 0, 0.95)',
      borderRadius: 8,
      border: '1px solid #00D9FF',
      padding: 30,
      boxShadow: '0 0 30px #00D9FF40'
    }
  };

  const variantStyle = variants[variant as keyof typeof variants] || variants.editor;

  // Cursor styles
  const cursorStyles = {
    block: {
      display: 'inline-block',
      width: '0.6em',
      height: '1.2em',
      background: '#00D9FF',
      marginLeft: 2
    },
    line: {
      display: 'inline-block',
      width: 2,
      height: '1.2em',
      background: '#00D9FF',
      marginLeft: 2
    },
    underline: {
      display: 'inline-block',
      width: '0.6em',
      height: 2,
      background: '#00D9FF',
      marginLeft: 2,
      verticalAlign: 'bottom'
    },
    none: {
      display: 'none'
    }
  };

  const cursorStyle = cursorStyles[cursor_style as keyof typeof cursorStyles] || cursorStyles.line;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'"
      }}
    >
      <Highlight
        theme={themes.nightOwl}
        code={displayedCode}
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
                isPrime.js
              </div>
            </div>
            <div style={{ padding: 30 }}>
              {/* Code content with syntax highlighting and typing effect */}
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

                {/* Code with syntax highlighting and typing effect */}
                <div
                  style={{
                    flex: 1,
                    fontSize: '32px',
                    lineHeight: 1.8,
                    overflow: 'auto',
                    whiteSpace: 'pre'
                  }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} style={{ display: 'flex', alignItems: 'center' }}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                      {/* Show cursor on last line */}
                      {i === tokens.length - 1 && showCursor && cursor_style !== 'none' && (
                        <span style={cursorStyle}></span>
                      )}
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
