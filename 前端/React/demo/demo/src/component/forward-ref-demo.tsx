import React, { useRef } from 'react';

 function logProps(Component) {
  class LogProps extends React.Component<any, any> {
    componentDidUpdate(prevProps) {
      console.log('老 prop' + prevProps);
      console.log('新 prop' + prevProps);
    }
    render() {
      const { forwardedRef, ...reset } = this.props;
        console.log('forwardedRef',forwardedRef)
      return <Component ref={forwardedRef} {...reset} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

 const Compoent1 = () => {
  return <div>我是Component1</div>;
};

export const Component2 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const C1 = logProps(Compoent1);
//   const C2 = logProps(ref3);
  return (
    <div>
          <C1 ref={ref1} />
          <button ref={ref3} onClick={() => {
              console.log('我是ref1');
              console.log(ref1);
              console.log('我是ref2');
              console.log(ref2);
              console.log('我是ref3');
              console.log(ref3);
          }}></button>
      </div>
  );
};
