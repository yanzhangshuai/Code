import React from "react";
const props = {
    value: 0,
    c: 0,
    key: 'bar'
};
const KeyComponent1 = ()=>{
    return <div key="foo" {...props}>
        <span>hello</span>
        <span>world</span>
    </div>;
}

const KeyComponent2 = ()=>{
    return<div {...props} key="foo">
        <span>hello</span>
        <span>world</span>
    </div>;
}


export const KeyDemo = ()=>{
    return (
            <>
                <KeyComponent1/>
                <KeyComponent2/>
            </>
    )
}


