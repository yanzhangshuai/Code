import React, { useEffect } from 'react'
import style from './sub.app.module.css'
import './sub.app.css'
import json from './sub.json'
export const SubApp = () => {

  const a = '<h1>我是subAp123123p</h1>'
  useEffect(() => {
    console.log('json', json);

  }, [])
  return (<div className={style.error} dangerouslySetInnerHTML={{ __html: a }}>

  </div>)
}