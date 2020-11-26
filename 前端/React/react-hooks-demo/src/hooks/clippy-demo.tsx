import React from 'react';
import useClippy from 'use-clippy';

export const ClippyDemo = () => {
  const [clipboard, setClipboard] = useClippy();
  return (
    <div>
      <button onClick={() => {
        alert(`Your clipboard contains: ${clipboard}`);
      }}>剪切板内容
      </button>
      <button
        onClick={() => {
          setClipboard(`Random number: ${Math.random()}`);
        }}
      >
       复制新的东西到剪切板
      </button>
    </div>
  )
}