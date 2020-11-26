import React from 'react';

export const VariableExample = ({ count }) => {
    console.log('count',count)
  const handleClick = () => {
    alert(count);
    setTimeout(() => {
      alert(count);
    }, 3000);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Alert Count1</button>
    </div>
  );
};

export class VariableExampleClass extends React.Component<any, any> {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.props.count);
    setTimeout(() => {
      alert(this.props.count);
    }, 3000);
  }
  render(): JSX.Element {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.handleClick}>Alert Count2</button>
      </div>
    );
  }
}

export class VariableExampleParent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    setInterval(() => {
      console.log('我是iner');
      if (this.state.count > 3) {
        return;
      }
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 2000);
  }
  // eslint-disable-next-line react/require-render-return
  render(): JSX.Element {
    return (
        <div>
            <VariableExampleClass count={this.state.count}/>
        <VariableExample count={this.state.count} />
      </div>
    );
  }
}
