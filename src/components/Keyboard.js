import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  TOGGLE_MINIMISE,
  RESET_MODIFIERS,
  TOGGLE_MODIFIER,
  Modifier
} from '../reducers/keyboard';
import './Keyboard.css';

export const Command = {};
export const Symbol = {};

export class Keyboard extends Component {
  componentWillMount() {
    this.props.dispatch({ type: RESET_MODIFIERS });
  }

  render() {
    const shift = this.props.modifier === Modifier.Shift;
    const alpha =
      this.props.modifier === Modifier.Alpha ||
      this.props.modifier === Modifier.AlphaLock;

    const resetModifiers = () => {
      this.props.dispatch({ type: RESET_MODIFIERS });
    };
    const command = c => () => {
      if (this.props.onCommand) {
        this.props.onCommand(c);
      }
      resetModifiers();
    };
    const symbol = s => () => {
      if (this.props.onSymbol) {
        this.props.onSymbol(s);
      }
      resetModifiers();
    };

    const noneKeys = [
      { title: 'OPTN' },
      { title: 'VARS' },
      { title: 'MENU' },
      { title: 'x\u00B2' },
      { title: '^' },
      { title: 'EXIT' },
      { title: 'X,\u03B8,T' },
      { title: 'log' },
      { title: 'ln' },
      { title: 'sin' },
      { title: 'cos' },
      { title: 'tan' },
      { title: 'a b/c' },
      { title: 'F/D' },
      { title: '(' },
      { title: ')' },
      { title: ',' },
      { title: '\u2192' },
      { title: '7' },
      { title: '8' },
      { title: '9' },
      { title: '4' },
      { title: '5' },
      { title: '6' },
      { title: '1' },
      { title: '2' },
      { title: '3' },
      { title: '0' },
      { title: '\u2022' },
      { title: 'EXP' },
      { title: 'DEL' },
      { title: 'AC' },
      { title: '*' },
      { title: '/' },
      { title: '+' },
      { title: '-' },
      { title: '(-)' },
      { title: 'EXE' }
    ];
    const shiftKeys = [
      {},
      { title: 'PRGM' },
      { title: 'SET UP' },
      { title: '\u221A' },
      { title: '\u207F\u221A' },
      { title: 'QUIT' },
      { title: '\u2220' },
      { title: '10\u207F' },
      { title: 'e\u207F' },
      { title: 'sin\u207B\u00B9' },
      { title: 'cos\u207B\u00B9' },
      { title: 'tan\u207B\u00B9' },
      {},
      { title: 'a b/c / a/b' },
      { title: '\u221B' },
      { title: 'x\u207B\u00B9' },
      {},
      {},
      { title: 'CAPTURE' },
      { title: 'CLIP' },
      { title: 'PASTE' },
      { title: 'CATALOG' },
      {},
      {},
      { title: 'LIST' },
      { title: 'MAT' },
      {},
      { title: 'i' },
      { title: '=' },
      { title: '\u03C0' },
      { title: 'INS' },
      {},
      { title: '{' },
      { title: '}' },
      { title: '[' },
      { title: ']' },
      { title: 'ANS' },
      { title: '\u23CE' }
    ];
    const alphaKeys = [
      {},
      {},
      {},
      { title: 'r' },
      { title: '\u03B8' },
      {},
      { title: 'A' },
      { title: 'B' },
      { title: 'C' },
      { title: 'D' },
      { title: 'E' },
      { title: 'F' },
      { title: 'G' },
      { title: 'H' },
      { title: 'I' },
      { title: 'J' },
      { title: 'K' },
      { title: 'L' },
      { title: 'M' },
      { title: 'N' },
      { title: 'O' },
      { title: 'P' },
      { title: 'Q' },
      { title: 'R' },
      { title: 'U' },
      { title: 'V' },
      { title: 'W' },
      { title: 'Z' },
      { title: 'SPACE' },
      { title: '"' },
      {},
      {},
      { title: 'S' },
      { title: 'T' },
      { title: 'X' },
      { title: 'Y' },
      {},
      {}
    ];

    const keys = shift ? shiftKeys : alpha ? alphaKeys : noneKeys;

    return (
      <div className="Keyboard grey lighten-5">
        <div className="container">
          <section className="ToggleMinimise hide-on-med-and-up">
            <button
              className="btn-flat"
              onClick={() => {
                this.props.dispatch({ type: TOGGLE_MINIMISE });
              }}
            >
              <i className="material-icons">
                {this.props.minimiseOperatorsMobile
                  ? 'arrow_drop_up'
                  : 'arrow_drop_down'}
              </i>
            </button>
          </section>
          <section
            className={
              this.props.minimiseOperatorsMobile
                ? 'OperatorsDark hide-on-small-only'
                : 'OperatorsDark'
            }
          >
            <div className="CursorArrows hide-on-small-only">
              <button className="btn grey">REPLAY</button>
            </div>
            <OperatorButton
              title="SHIFT"
              onClick={() => {
                this.props.dispatch({
                  type: TOGGLE_MODIFIER,
                  modifier: Modifier.Shift
                });
              }}
              color={shift ? 'light-blue' : 'yellow darken-2'}
            />
            <OperatorButton
              title={keys[0].title}
              onClick={keys[0].onClick || resetModifiers}
            />
            <OperatorButton
              title={keys[1].title}
              onClick={keys[1].onClick || resetModifiers}
            />
            <OperatorButton
              title={keys[2].title}
              onClick={keys[2].onClick || resetModifiers}
              color="grey"
            />
            <OperatorButton
              title={shift ? 'A-LOCK' : 'ALPHA'}
              onClick={() => {
                this.props.dispatch({
                  type: TOGGLE_MODIFIER,
                  modifier: Modifier.Alpha
                });
              }}
              color={alpha ? 'light-blue' : 'red lighten-1'}
            />
            {keys
              .slice(3, 18)
              .map(({ title, onClick }, i) => (
                <OperatorButton
                  key={i}
                  title={title}
                  onClick={onClick || resetModifiers}
                />
              ))}
          </section>
          <div className="Light">
            <section className="Numeric">
              {keys
                .slice(18, 30)
                .map(({ title, onClick }, i) => (
                  <NumericButton
                    title={title}
                    key={i}
                    onClick={onClick || resetModifiers}
                  />
                ))}
            </section>
            <section className="OperatorsLight">
              <NumericButton
                title={keys[30].title}
                onClick={keys[30].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[31].title}
                onClick={keys[31].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[32].title}
                onClick={keys[32].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[33].title}
                onClick={keys[33].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[34].title}
                onClick={keys[34].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[35].title}
                onClick={keys[35].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[36].title}
                onClick={keys[36].onClick || resetModifiers}
                color="grey"
              />
              <NumericButton
                title={keys[37].title}
                onClick={keys[37].onClick || resetModifiers}
                color="light-blue"
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(state => ({
    modifier: state.keyboard.modifier,
    minimiseOperatorsMobile: state.keyboard.minimiseOperatorsMobile
  })),
  withRouter
)(Keyboard);

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
