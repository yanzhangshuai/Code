import React from "react";
import Moveable from "moveable";
import imgUrl from "./1.jpg";
export class MoveableDemo extends React.Component{
    dragContentRef: React.LegacyRef<HTMLImageElement> = React.createRef();
    moveable:Moveable;
    constructor() {
        super();
        this.state = {
            rotate:0,
            width:100,
            height:150
        }
    }
    moveableInit(){
        console.log(this.dragContentRef.current)
        if (this.moveable) this.moveable.destroy()
        this.moveable =  new Moveable(document.body,{
            target:this.dragContentRef.current,
            origin: false,
            bounds: {
                left: 0,
                top: 0,
            },
            baseDirection: [-1, -1],
            draggable: true,
            pinchable: true,
            scalable: false,
            throttleDrag: 1,
            keepRatio: true,
            resizable: true,
            throttleResize: 1,
            throttleRotate: 1,
        })
        this.moveable.on("resizeStart", ({ target, clientX, clientY }) => {
            console.log("onResizeStart", clientX);
        }).on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
            this.setState({
                width,
                height
            })
            // delta[0] && (target!.style.width = `${width}px`);
            // delta[1] && (target!.style.height = `${height}px`);
        }).on("resizeEnd", ({ target, isDrag, clientX, clientY }) => {
            console.log("onResizeEnd", target, isDrag);
        });
    }
    componentDidMount() {
        this.moveableInit();
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        rotate:this.state.rotate+90,
                        height:this.state.width,
                        width:this.state.height
                    })
                    this.moveableInit();
                    console.log('this.dragContentRef',(this.dragContentRef).current)
                }}>点击旋转</button>
                <div ref={this.dragContentRef} style={{width:`${this.state.width}px`,height:`${this.state.height}px`,background:'red',margin: "50px auto",}}>
                    <img src={imgUrl} style={{
                        width:'100%',
                        height:'100%',
                        transform: `rotate(${this.state.rotate}deg)`
                    }
                    }/>
                </div>
            </div>
        )
    }
}