import {Component, useCallback, useEffect, useState} from "react";
import React from "react";

function Example(props: any) {
    const {count} = props;
    const handleClick = () => {
        setTimeout(() => {
            console.log('count',count)
        }, 3000);
    };
    return (
            <div>
                <p>{count}</p>
                <button onClick={handleClick}>Alert Count</button>
            </div>
    );
}

class Example2 extends Component<{ count: number }> {
    handleClick = () => {
        setTimeout(() => {
            console.log('this.props.count',this.props.count)
        }, 3000);
    };

    render() {
        return (
                <div>
                    <h2>Example2</h2>
                    <p>{this.props.count}</p>
                    <button onClick={this.handleClick}>Alert Count</button>
                </div>
        );
    }
}

export const FuncClass = () => {
    const [count,setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
    });
    return (
            <>
                <Example count={count}/>
                <Example2 count={count}/>
            </>
    )
}