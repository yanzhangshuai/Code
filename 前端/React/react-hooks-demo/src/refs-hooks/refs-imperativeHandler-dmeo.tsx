import React, {useCallback, useImperativeHandle, useRef} from 'react'

const FancyImperativeButton = React.forwardRef((props: any, ref: any) => {
    const inputRef = useRef<any>(null);
    useImperativeHandle(ref, () => ({
        value: (data:string) => {
            // @ts-ignore
            inputRef?.current?.value = data;
        }
    }));
    return (<div>
        <input ref={inputRef} type="text"/>
        <button>{props.children}</button>
    </div>)
})


export const FancyImperativeHandleParent = () => {
    const ref = useRef();
    // @ts-ignore
    const handleClick = useCallback(() => ref.current.value(111), [ref]);

    return (
            <div>
                <FancyImperativeButton ref={ref}>Click Me</FancyImperativeButton>
                <button onClick={handleClick}>获取FancyImperativeButton焦点</button>
            </div>
    )
}