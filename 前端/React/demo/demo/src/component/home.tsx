import React, { Suspense, FC } from 'react';
import { UpdateChildren } from './update-children';
import { Filter } from './filter';
import { RadioGroup } from './radio-group';
import { Raido } from './radio';
import { VariableExampleParent } from './variable-example';
export const Home = () => {
  return (
    <>
      <div>我是home</div>
      <UpdateChildren>
        {({ name, value }) => (
          <div>
            {name}-{value}
          </div>
        )}
      </UpdateChildren>
      <Filter>
        <div>div1</div>
        <p className="a">div2</p>
        <div className="a">div3</div>
        <div className="a">div4</div>
      </Filter>
      <RadioGroup name="mvvm">
        <Raido value="vue">vue</Raido>
        <Raido value="ang">ang</Raido>
        <Raido value="ang">react</Raido>
      </RadioGroup>
    </>
  );
};
