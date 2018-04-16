import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  TOGGLE_MINIMISE,
  TOGGLE_MODIFIER,
  Modifier
} from '../reducers/keyboard';
import './Keyboard.css';

export const Command = {
  OPTN: 'OPTN',
  PRGM: 'PRGM',
  VARS: 'VARS',
  SETUP: 'SETUP',
  QUIT: 'QUIT',
  EXIT: 'EXIT'
};
export const Symbol = {
  SQRT: 'SQRT',
  RADIUS: 'RADIUS',
  SQUARE: 'SQUARE',
  XROOT: 'XROOT',
  THETA: 'THETA',
  POWER: 'POWER'
};

export default connect(state => ({
  modifier: state.keyboard.modifier,
  minimiseOperatorsMobile: state.keyboard.minimiseOperatorsMobile
}))(
  withRouter(props => {
    const shift = props.modifier === Modifier.Shift;
    const alpha =
      props.modifier === Modifier.Alpha ||
      props.modifier === Modifier.AlphaLock;

    const command = c => {
      if (props.onCommand) {
        props.onCommand(c);
      }
    };
    const symbol = s => {
      if (props.onSymbol) {
        props.onSymbol(s);
      }
    };

    return (
      <div className="Keyboard grey lighten-5">
        <div className="container">
          <section className="ToggleMinimise hide-on-med-and-up">
            <button
              className="btn-flat"
              onClick={() => {
                props.dispatch({ type: TOGGLE_MINIMISE });
              }}
            >
              <i className="material-icons">
                {props.minimiseOperatorsMobile
                  ? 'arrow_drop_up'
                  : 'arrow_drop_down'}
              </i>
            </button>
          </section>
          <section
            className={
              props.minimiseOperatorsMobile
                ? 'OperatorsDark hide-on-small-only'
                : 'OperatorsDark'
            }
          >
            <div className="CursorArrows hide-on-small-only">
              <button className="btn grey">REPLAY</button>
            </div>
            <OperatorButton
              title="SHIFT"
              color={shift ? 'light-blue' : 'yellow darken-2'}
              onClick={() => {
                props.dispatch({
                  type: TOGGLE_MODIFIER,
                  modifier: Modifier.Shift
                });
              }}
            />
            <OperatorButton
              title="OPTN"
              onClick={() => {
                command(Command.OPTN);
              }}
            />
            <OperatorButton
              title={shift ? 'PRGM' : 'VARS'}
              onClick={() => {
                command(shift ? 'PRGM' : 'VARS');
              }}
            />
            <OperatorButton
              title={shift ? 'SET UP' : 'MENU'}
              color="grey"
              onClick={() => {
                if (shift) {
                  command(Command.SETUP);
                } else {
                  props.history.push({ pathname: '/' });
                }
              }}
            />
            <OperatorButton
              title={shift ? 'A-LOCK' : 'ALPHA'}
              color={alpha ? 'light-blue' : 'red lighten-1'}
              onClick={() => {
                props.dispatch({
                  type: TOGGLE_MODIFIER,
                  modifier: Modifier.Alpha
                });
              }}
            />
            <OperatorButton
              title={shift ? '\u221A' : alpha ? 'r' : 'x\u00B2'}
              onClick={() => {
                symbol(
                  shift ? Symbol.SQRT : alpha ? Symbol.RADIUS : Symbol.SQARE
                );
              }}
            />
            <OperatorButton
              title={shift ? 'x\u221A' : alpha ? '\u03B8' : '^'}
              onClick={() => {
                symbol(
                  shift ? Symbol.SQUARE : alpha ? Symbol.THETA : Symbol.POWER
                );
              }}
            />
            <OperatorButton
              title={shift ? 'QUIT' : 'EXIT'}
              onClick={() => {
                command(shift ? Command.QUIT : Command.EXIT);
              }}
            />
            <OperatorButton title="X,&theta;,T" />
            <OperatorButton title="log" />
            <OperatorButton title="ln" />
            <OperatorButton title="sin" />
            <OperatorButton title="cos" />
            <OperatorButton title="tan" />
            <OperatorButton title="a b/c" />
            <OperatorButton title="F/D" />
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
  })
);

const OperatorButton = props => {
  return (
    <div>
      <button
        className={props.color ? `btn ${props.color}` : 'btn blue darken-4'}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};

const NumericButton = props => {
  return (
    <div>
      <button
        className={props.color ? `btn ${props.color}` : 'btn-flat'}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};
