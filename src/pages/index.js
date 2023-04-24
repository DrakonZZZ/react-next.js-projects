import React, { useState, useEffect } from 'react';

const CompA = (props) => {
  return (
    <>
      <h1>{props.propData}</h1>
      <h2>{props.propData1}</h2>
      <CompC />
    </>
  );
};

const CompB = () => {
  const [value, muteValue] = useState(0);
  const [myOtherValue, muteValue2] = useState(10);
  function changeValue(change) {
    if (value >= 0) {
      muteValue(value + change);
    } else {
    }
  }

  useEffect(() => {
    console.log('use effect');
  }, [myOtherValue, value]);

  return (
    <>
      <h1>CompB</h1>
      <CompC />
      <div>Count: {value}</div>
      <button onClick={() => changeValue(+1)}>+</button>
      <button onClick={() => changeValue(-1)}>-</button>
      <hr></hr>
      <div>Count: {myOtherValue}</div>
      <button onClick={() => muteValue2(myOtherValue + 1)}>+</button>
      <button onClick={() => muteValue2(myOtherValue - 1)}>-</button>
    </>
  );
};

class CompD extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  changeState(valueChange) {
    this.setState({
      value: valueChange,
    });
  }

  render() {
    const { value } = this.state;
    const { myProp, propData2: PropData2 } = this.props;

    return (
      <>
        <h1>CompD</h1>
        <div>Count: {this.state.value}</div>
        <button onClick={() => this.changeState(value + 1)}>+</button>
        <button onClick={() => this.changeState(value - 1)}>-</button>
        <h2>{myProp}</h2>
        <PropData2 />
      </>
    );
  }
}

const OuterComp = () => {
  return (
    <>
      <h1>MY COMPONENT</h1>
    </>
  );
};

const CompC = () => {
  return <p>Where am i going with this </p>;
};

const Home = () => {
  const text = 'Component';

  return (
    <div>
      <h1>Hello My dude</h1>
      <CompA propData={text} propData1={'string'} />
      <CompB />
      <CompD myProp={text} propData2={OuterComp} />
    </div>
  );
};

export default Home;
