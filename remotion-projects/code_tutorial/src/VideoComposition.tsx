import React from 'react';
import { AbsoluteFill } from 'remotion';
import { CodeBlock } from './components/CodeBlock';
import { TypingCode } from './components/TypingCode';

interface VideoCompositionProps {
  theme: string;
}

export const VideoComposition: React.FC<VideoCompositionProps> = ({ theme }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <CodeBlock
        startFrame={15}
        durationInFrames={120}
        code="const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
};

console.log(fibonacci(10));"
        language="javascript"
        title="fibonacci.js"
        variant="editor"
        animation="slide_up"
        show_line_numbers={true}
      />
      <TypingCode
        startFrame={150}
        durationInFrames={240}
        code="function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}"
        language="javascript"
        title="isPrime.js"
        variant="editor"
        cursor_style="line"
        typing_speed="normal"
        show_line_numbers={true}
      />
      <CodeBlock
        startFrame={420}
        durationInFrames={120}
        code="$ npm install remotion
+ remotion@4.0.358
added 247 packages in 12s

$ npm run dev
> dev
> remotion studio

Server running at http://localhost:3000"
        language="bash"
        title=""
        variant="terminal"
        animation="fade_in"
        show_line_numbers={false}
      />
      <TypingCode
        startFrame={570}
        durationInFrames={180}
        code="async function hack() {
  const target = await connect();
  const data = await infiltrate(target);
  return decrypt(data);
}"
        language="javascript"
        title=""
        variant="hacker"
        cursor_style="block"
        typing_speed="fast"
        show_line_numbers={false}
      />
      <CodeBlock
        startFrame={780}
        durationInFrames={150}
        code="def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)"
        language="python"
        title="merge_sort.py"
        variant="glass"
        animation="scale_in"
        show_line_numbers={true}
      />
    </AbsoluteFill>
  );
};
