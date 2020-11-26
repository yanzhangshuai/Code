/* eslint-disable react/jsx-no-undef */
import React from 'react'
import logo from './logo.svg'
import './App.css'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from './router/router'
import {ThemeApp} from './context-hook/hook-theme-app'
import {ClassThemeApp} from './context-class/class-theme-app'
import {ErrorBoundary} from './class-error-handle/error-boundary'
import {Person} from './class-error-handle/person'
import {VariableExampleParent} from './component/variable-example';
import {ParentLiteCycle} from './component/life-cycle';
import {Component2} from './component/forward-ref-demo';
import {SetState} from "./component/SetState";
import {LifeParentCycle} from "./life-cycle/life-cycle";
import {LifeCircleContainer16_3} from "./life-cycle/life-cycle-16.3";

function App() {
  // eslint-disable-next-line no-unused-expressions
  React.createElement()
  return (
    <div className="App">
      {/* 
          <ThemeApp />
          <hr/>
          <hr/>
          <ClassThemeApp />
          <hr/>
          <hr />
          <ErrorBoundary >
			<Person />
		</ErrorBoundary>
          
          <VariableExampleParent /> */}
      {/* <ParentLiteCycle /> */}
      {/*<Component2 />*/}
      {/*<SetState data={2}/>*/}
      {/*<LifeParentCycle/>*/}

      <LifeCircleContainer16_3/>
    </div>
  )
}

export default App
