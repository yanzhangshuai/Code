import React from 'react';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query';
export const MediaQueryDemo = () => {
  // const matches = useMediaQuery('only screen and (min-width: 400px)')
  const { matches, matchesAny, matchesAll } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 400px)',
    height:'(max-height: 400px)'
  })
  return (
    // <div>
    //   "Matches:"  {`${matches ? 'Matched!' : 'Nope :()'}`}
    // </div>
    <div>
     <li> Screen matched? {matches.screen ? 'Yes' : 'No'}</li>
     <li> Width matched? {matches.width ? 'Yes' : 'No'}</li>
     <li> Width matched? {matches.height ? 'Yes' : 'No'}</li>
     <li>All matched? {matchesAll ? 'Yes' : 'No'}</li>
     <li> Any matched? {matchesAny ? 'Yes' : 'No'}</li>
   
    
   
    </div>
  );
}