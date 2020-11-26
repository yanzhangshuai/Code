import React from 'react'

class LifeCircle16_3 extends React.Component<any,any>{
    constructor(props) {
        console.log('进入constructor')
        super(props)
        // state 可以在 constructor 里初始化
        this.state = { text: "子组件的文本" };
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps方法执行");
        console.log('props:',props)
        console.log('state:',state)
        return {
            fatherText: props.text
        }
    }
    
    //  初始化渲染时调用
    componentDidMount() {
        console.log("componentDidMount方法执行");
    }
    
    // 组件更新时调用
    shouldComponentUpdate(nextProps,nextState) {
        console.log("shouldComponentUpdate方法执行");
        return true;
    }
    
    //  组件更新时调用
    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any | null {
        console.log("getSnapshotBeforeUpdate方法执行");
        return "haha";
    }
    
    //  组件更新时调用
    componentDidUpdate(nextProps,nextState,valueFromSnapshot)
    {
        console.log("componentDidUpdate方法执行");
        console.log("从 getSnapshotBeforeUpdate 获取到的值是", valueFromSnapshot);
    }

    // 组件卸载时调用
    componentWillUnmount() {
        console.log("子组件的componentWillUnmount方法执行");
    }

    render() {
        console.log("render方法执行");
        return (
                <div className="container">
                    <button onClick={()=>{
                        this.setState({
                            text: "修改后的子组件文本"
                        });
                    }} className="changeText">
                        修改子组件文本内容
                    </button>
                    <p className="textContent">{this.state.text}</p>
                    <p className="fatherContent">{this.props.text}</p>
                </div>
        );
    }
}



export class LifeCircleContainer16_3 extends React.Component<any, any> {
    // state 也可以像这样用属性声明的形式初始化
    state = {
        text: "父组件的文本",
        hideChild: false
    };

    render() {
        return (
                <div className="fatherContainer">
                    <button onClick={()=>{
                        this.setState({
                            text: "修改后的父组件文本"
                        });
                    }} className="changeText">
                        修改父组件文本内容
                    </button>
                    <button onClick={() => {
                        this.setState({
                            hideChild: true
                        });
                    }} className="hideChild">
                        隐藏子组件
                    </button>
                    {this.state.hideChild ? null : <LifeCircle16_3 text={this.state.text} />}
                </div>
        );
    }
}