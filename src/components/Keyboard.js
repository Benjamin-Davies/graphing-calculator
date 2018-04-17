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

export const Command = {
  OPTN: 'OPTN',
  VARS: 'VARS',
  EXIT: 'EXIT',
  F_D: 'F_D',
  DEL: 'DEL',
  AC: 'AC',
  EXE: 'EXE',
  PRGM: 'PRGM',
  SETUP: 'SETUP',
  QUIT: 'QUIT',
  MIXED_IMP: 'MIXED_IMP',
  CAPTURE: 'CAPTURE',
  CLIP: 'CLIP',
  PASTE: 'PASTE',
  CATALOG: 'CATALOG',
  LIST: 'LIST',
  MAT: 'MAT',
  INS: 'INS'
};
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
      { title: 'OPTN', onClick: command(Command.OPTN) },
      { title: 'VARS', onClick: command(Command.VARS) },
      { title: 'MENU' },
      { title: 'x\u00B2' },
      { title: '^' },
      { title: 'EXIT', onClick: command(Command.EXIT) },
      { title: 'X,\u03B8,T' },
      { title: 'log' },
      { title: 'ln' },
      { title: 'sin' },
      { title: 'cos' },
      { title: 'tan' },
      { title: 'a b/c' },
      { title: 'F/D', onClick: command(Command.F_D) },
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
      { title: 'DEL', onClick: command(Command.DEL) },
      { title: 'AC', onClick: command(Command.AC) },
      { title: '*' },
      { title: '/' },
      { title: '+' },
      { title: '-' },
      { title: '(-)' },
      { title: 'EXE', onClick: command(Command.EXE) }
    ];
    const shiftKeys = [
      {},
      { title: 'PRGM', onClick: command(Command.PRGM) },
      { title: 'SET UP', onClick: command(Command.SETUP) },
      { title: '\u221A' },
      { title: '\u207F\u221A' },
      { title: 'QUIT', onClick: command(Command.QUIT) },
      { title: '\u2220' },
      { title: '10\u207F' },
      { title: 'e\u207F' },
      { title: 'sin\u207B\u00B9' },
      { title: 'cos\u207B\u00B9' },
      { title: 'tan\u207B\u00B9' },
      {},
      { title: 'a b/c / a/b', onClick: command(Command.MIXED_IMP) },
      { title: '\u221B' },
      { title: 'x\u207B\u00B9' },
      {},
      {},
      { title: 'CAPTURE', onClick: command(Command.CAPTURE) },
      { title: 'CLIP', onClick: command(Command.CLIP) },
      { title: 'PASTE', onClick: command(Command.PASTE) },
      { title: 'CATALOG', onClick: command(Command.CATALOG) },
      {},
      {},
      { title: 'LIST', onClick: command(Command.LIST) },
      { title: 'MAT', onClick: command(Command.MAT) },
      {},
      { title: 'i' },
      { title: '=' },
      { title: '\u03C0' },
      { title: 'INS', onClick: command(Command.INS) },
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
              />
              <NumericButton
                title={keys[33].title}
                onClick={keys[33].onClick || resetModifiers}
              />
              <NumericButton
                title={keys[34].title}
                onClick={keys[34].onClick || resetModifiers}
              />
              <NumericButton
                title={keys[35].title}
                onClick={keys[35].onClick || resetModifiers}
              />
              <NumericButton
                title={keys[36].title}
                onClick={keys[36].onClick || resetModifiers}
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
