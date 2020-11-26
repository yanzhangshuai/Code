import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { useState } from 'react';
import React from 'react';

export const ReactSpeechKitDemo =  () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <br />
      <button onMouseDown={listen} >
        Listen
      </button>
      <button onClick={() => speak({ text: value })}>Speak</button>

      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
};