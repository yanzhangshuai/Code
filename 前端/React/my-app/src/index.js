import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// function Repeat(props) {
  
//     return <div>{props.a}</div>;
//   }
  
// class A extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             a:1
//         };
//           // 为了在回调中使用 `this`，这个绑定是必不可少的
//     this.clicks = this.clicks.bind(this);
//     }
    
//     clicks(c){
//         console.log(c)
//       this.setState({a:2})
//     }

//     render(){
       
//         return (
//             <div class="board-row">
//                 这是A
//                 <button onClick={this.clicks.bind(this)}>点击</button>
//                 <Repeat a={this.state.a} />
//             </div>
//         )
//     }
// }

//   ReactDOM.render(<A />, document.getElementById("root"));


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

const BoilingVerdict = (props)=>{
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
      }
      return <p>The water would not boil.</p>;
}

class TemperatureInput  extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature:''};
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        console.log(scale)
        return (
            <fieldset>
                  <legend>Enter temperature in {scaleNames[scale]}:</legend>
                  <input value={temperature} onChange={this.handleChange}/>
                  <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}

class Caluclator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f'?tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <>
            <TemperatureInput scale="c" temperature={celsius}  onTemperatureChange={this.handleCelsiusChange}/>
            <TemperatureInput  scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
           <BoilingVerdict
          celsius={parseFloat(celsius)} />
            </>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

ReactDOM.render(<Caluclator />,document.getElementById('root'))