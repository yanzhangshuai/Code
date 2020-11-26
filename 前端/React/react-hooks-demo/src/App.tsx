import React from 'react';
import './App.css';
import { ClippyDemo } from './hooks/clippy-demo';
import { WindowSizeDemo } from './hooks/window-size.demo';
import { MediaQueryDemo } from './hooks/media-query-demo';
import { AsyncDemo } from './hooks/async-demo';
import { ScriptDemo } from './hooks/script-demo';
import { LocalStorageDemo } from './hooks/local-storage-demo';
import { DebounceDemo } from './hooks/debounce-demo';
import { OnlineStatusDemo } from './hooks/online-status-demo';
import { ReactSpeechKitDemo } from './hooks/react-speech-kit-demo';
import { InputDemo } from './hooks/input-demo';
import {FancyParent} from "./refs-hooks/refs-forward-demo";
import {FancyImperativeHandleParent} from "./refs-hooks/refs-imperativeHandler-dmeo";
import {KeyDemo} from "./key-hooks-demo/key-demo";
import {FuncClass} from "./func-or-class/funcclass";

function App() {
  return (
    <div className="App">
      {/* <ClippyDemo />
      <WindowSizeDemo />
      <MediaQueryDemo />
      <AsyncDemo />
      <ScriptDemo />
      <LocalStorageDemo/>
      <DebounceDemo/>
      <OnlineStatusDemo />
      <ReactSpeechKitDemo /> */}
      {/*<InputDemo />*/}
      {/*<FancyParent/>*/}
      {/*<FancyImperativeHandleParent/>*/}
      <KeyDemo/>
        {/* eslint-disable-next-line react/jsx-no-undef */}
      <FuncClass/>
    </div>
  );
}

export default App;
