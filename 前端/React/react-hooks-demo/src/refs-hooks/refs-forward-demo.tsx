import React, {useCallback, useRef} from 'react'
const FancyButton = React.forwardRef((props:any,ref:any)=>{
    return (<div>
        <input ref={ref} type="text" />
        <button>{props.children}</button>
    </div>)
})


export const FancyParent = ()=>{
    const ref = useRef();
    // @ts-ignore
    const handleClick = useCallback(() => ref.current.focus(), [ ref ]);

    return (
            <div>
                <FancyButton ref={ref}>Click Me</FancyButton>
                <button onClick={handleClick}>获取焦点</button>
            </div>
    )
}