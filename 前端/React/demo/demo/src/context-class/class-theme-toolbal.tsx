import React from 'react'
import { ClassThemeButton } from './class-theme-button'

export class ClassThemeToolbal extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }
    render() {
        return <ClassThemeButton {...this.props}>我是classThemeButton</ClassThemeButton>
    }
 
}
