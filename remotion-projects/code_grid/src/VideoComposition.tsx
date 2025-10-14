import React from 'react';
import { AbsoluteFill } from 'remotion';
import { CodeBlock } from './components/CodeBlock';
import { Grid } from './components/Grid';

interface VideoCompositionProps {
  theme: string;
}

export const VideoComposition: React.FC<VideoCompositionProps> = ({ theme }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <Grid
        startFrame={15}
        durationInFrames={285}
        layout="3x3"
        gap={20}
        padding={40}
      >
        {[
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="const sum = (a, b) =>
  a + b;

sum(5, 3); // 8"
            language="javascript"
            title="sum.js"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="def fib(n):
  if n <= 1:
    return n
  a = fib(n-1)
  b = fib(n-2)
  return a + b"
            language="python"
            title="fib.py"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="function isPrime(n) {
  for (let i=2; i<n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}"
            language="javascript"
            title="prime.js"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="const reverse = str =>
  str.split('')
     .reverse()
     .join('');"
            language="javascript"
            title="reverse.js"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="class Circle:
  def __init__(self, r):
    self.radius = r
  
  def area(self):
    pi = 3.14
    return pi * 
           self.radius ** 2"
            language="python"
            title="circle.py"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="function* count() {
  let i = 0;
  while (true) {
    yield i++;
  }
}"
            language="javascript"
            title="generator.js"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(
      () => fn(...args),
      ms
    );
  };
};"
            language="javascript"
            title="debounce.js"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="function Counter() {
  const [n, setN] = 
        useState(0);
  
  return (
    <button 
      onClick={() => 
        setN(n + 1)}>
      {n}
    </button>
  );
}"
            language="javascript"
            title="Counter.tsx"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />,
          <CodeBlock
            startFrame={0}
            durationInFrames={300}
            code="async function get(url) {
  try {
    const res = 
          await fetch(url);
    return await 
           res.json();
  } catch (err) {
    console.error(err);
  }
}"
            language="javascript"
            title="fetch.js"
            variant="minimal"
            animation="fade_in"
            show_line_numbers={false}
          />
        ]}
      </Grid>
    </AbsoluteFill>
  );
};
