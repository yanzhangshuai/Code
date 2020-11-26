import React from "react";

class LifeCircle extends React.Component<any, any> {
    constructor(props) {
        console.log("进入constructor");
        super(props);
        // state 可以在 constructor 里初始化
        this.state = {text: "子组件的文本"};
    }

    // 初始化渲染时调用
    componentWillMount() {
        console.log("componentWillMount方法执行");
    }

    // 初始化渲染时调用
    componentDidMount() {
        console.log("componentDidMount方法执行")
    }

    //  组件卸载调用
    componentWillUnmount() {
        console.log('componentWillUnmount方法执行')
    }

    // 父组件修改组件的props时会调用
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps方法执行");
        console.log('nextProps', nextProps);
        console.log('==================================')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate方法执行");
        console.log('nextState', nextState);
        console.log('nextProps', nextProps);
        return true;
    }

    componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any) {
        console.log("componentWillUpdate方法执行");
        console.log('nextProps', nextProps);
        console.log('this.props', this.props);
        console.log('-------------------')
        console.log('nextState', nextState);
        console.log('this.state', this.state);
        console.log('-------------------')
        console.log('nextContext', nextContext)
        console.log('=============================================')
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState) {
        console.log("componentDidUpdate方法执行");
        console.log('prevProps', prevProps);
        console.log('this.props', this.props);
        console.log('-------------------')
        console.log('prevState', prevState);
        console.log('this.state', this.state);
        console.log('-------------------')
    }

    render() {
        console.log("render方法执行");
        return (
                <div className="container">
                    <button onClick={() => {
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

export class LifeParentCycle extends React.Component<any, any> {
    // state 也可以像这样用属性声明的形式初始化
    state = {
        text: "父组件的文本",
        // 新增的只与父组件有关的 state
        ownText: "仅仅和父组件有关的文本",
        hideChild: false
    };

    render(): JSX.Element {
        return (
                <div className="fatherContainer">
                    <button onClick={() => {
                        this.setState({
                            ownText: "修改后的父组件自有文本"
                        });
                    }} className="changeText">
                        修改父组件自有文本内容
                    </button>
                    <button onClick={() => {
                        this.setState({
                            text: "修改后的父组件文本"
                        });
                    }} className="changeText">
                        修改父组件文本内容
                    </button>
                    <button onClick={() => {
                        this.setState({
                            hideChild: !this.state.hideChild
                        });
                    }} className="hideChild">
                        隐藏子组件
                    </button>
                    {this.state.hideChild ? null : <LifeCircle text={this.state.text}/>}
                </div>
        );
    }
}