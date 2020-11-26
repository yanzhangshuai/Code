import React from 'react';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
export const WindowSizeDemo = () => {
  const [width, height] = useWindowSize();
  return (
    <div>
      width: {width}, height: {height}
    </div>
  )
}