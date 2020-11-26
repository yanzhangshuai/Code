import React, {Component} from "react";

export class SetState extends Component<{
    data:number
}, {
    number:number
}>{
    constructor(props) {
        super(props);
        this.state = {
            number:1,
        }
    }

    componentDidMount() {
        // 第一次调用
        this.setState({ number: this.state.number + 1 });
        console.log('first setState', this.state);

        // 第二次调用
        this.setState({ number: this.state.number + 1 });
        console.log('second setState', this.state);

        // 第三次调用
        this.setState({ number: this.state.number + 1 }, () => {
            console.log('in callback', this.state)
        });
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         // 第一次调用
    //         this.setState({ number: this.state.number + 1 });
    //         console.log('first setState', this.state);
    //
    //         // 第二次调用
    //         this.setState({ number: this.state.number + 1 });
    //         console.log('second setState', this.state);
    //     });
    // }
    render() {
        return (<>
            <div>我是SetStateNumber{this.state.number}</div>
            <div>我是SetStateData{this.props.data}</div>
        </>)
    }
}