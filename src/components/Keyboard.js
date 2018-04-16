import React from 'react';
import './Keyboard.css';

export default () => {
  return (
    <div className="Keyboard grey lighten-5">
      <div className="container">
        <section className="OperatorsDark">
          <div className="CursorArrows">
            <button className="btn grey">REPLAY</button>
          </div>
          <OperatorButton title="SHIFT" color="yellow darken-2" />
          <OperatorButton title="OPTN" />
          <OperatorButton title="VARS" />
          <OperatorButton title="MENU" color="grey" />
          <OperatorButton title="ALPHA" color="red lighten-1" />
          <OperatorButton title="x&sup2;" />
          <OperatorButton title="^" />
          <OperatorButton title="EXIT" />
          <OperatorButton title="X,&theta;,T" />
          <OperatorButton title="log" />
          <OperatorButton title="ln" />
          <OperatorButton title="sin" />
          <OperatorButton title="cos" />
          <OperatorButton title="tan" />
          <OperatorButton title="a b/c" />
          <OperatorButton title="F&harr;D" />
          <OperatorButton title="(" />
          <OperatorButton title=")" />
          <OperatorButton title="," />
          <OperatorButton title="&rarr;" />
        </section>
        <div className="Light">
          <section className="Numeric">
            <NumericButton title="7" />
            <NumericButton title="8" />
            <NumericButton title="9" />
            <NumericButton title="4" />
            <NumericButton title="5" />
            <NumericButton title="6" />
            <NumericButton title="1" />
            <NumericButton title="2" />
            <NumericButton title="3" />
            <NumericButton title="0" />
            <NumericButton title="&#x2022;" />
            <NumericButton title="EXP" />
          </section>
          <section className="OperatorsLight">
            <NumericButton title="DEL" color="grey" />
            <NumericButton title="AC" color="grey" />
            <NumericButton title="&times;" />
            <NumericButton title="&divide;" />
            <NumericButton title="+" />
            <NumericButton title="-" />
            <NumericButton title="(-)" />
            <NumericButton title="EXE" color="light-blue" />
          </section>
        </div>
      </div>
    </div>
  );
};

const OperatorButton = props => {
  return (
    <div>
      <button
        className={props.color ? `btn ${props.color}` : 'btn blue darken-4'}
      >
        {props.title}
      </button>
    </div>
  );
};

const NumericButton = props => {
  return (
    <div>
      <button className={props.color ? `btn ${props.color}` : 'btn-flat'}>
        {props.title}
      </button>
    </div>
  );
};
