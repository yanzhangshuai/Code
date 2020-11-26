import React from 'react';

export class LiteCycle extends React.Component<any, any> {
  btn: React.RefObject<any>;
  constructor(props) {
    super(props);
    console.log('我是构造函数');
    console.log('=========================');
    this.btn = React.createRef<any>();
  }

  componentWillMount() {
    console.log('我是:componentWillMount');
    console.log(this.btn);
    console.log('=========================');
  }
  componentDidMount() {
    console.log('我是:componentDidMount');
    console.log(this.btn);
    console.log('=========================');
  }
  // eslint-disable-next-line react/no-typos
  getDerivedStateFromProps(nextProps, prevState) {
    console.log('我是:getDerivedStateFromProps');
    console.log(nextProps);
    console.log(prevState);
    console.log('=========================');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('我是:shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    console.log(this.props);
    console.log('=========================');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('我是:componentWillUpdate');
    console.log(nextProps);
    console.log(nextState);
    console.log(this.props);
    console.log('=========================');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('我是:componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.log(this.props);
    console.log('=========================');
  }

  render() {
    console.log('我是render函数===============');
    return (
      <div>
        <div>{this.props.data}</div>
        <button ref={this.btn}>点击</button>
      </div>
    );
  }
}
export class ParentLiteCycle extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
  }

  render() {
    return (
      <div>
        <div></div>
        <button
          onClick={() => {
            this.setState({ data: 2 });
          }}
        >
          点击父级
        </button>
        <LiteCycle data={this.state.data} />
      </div>
    );
  }
}
