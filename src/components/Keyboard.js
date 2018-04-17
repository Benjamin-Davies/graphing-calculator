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
export const Symbol = {
  SQUARED: 'SQUARED',
  POWER: 'POWER',
  IND_VAR: 'IND_VAR',
  LOG: 'LOG',
  LN: 'LN',
  SIN: 'SIN',
  COS: 'COS',
  TAN: 'TAN',
  FRACTION: 'FRACTION',
  L_PAREN: 'L_PAREN',
  R_PAREN: 'R_PAREN',
  COMMA: 'COMMA',
  SET: 'SET',
  DOT: 'DOT',
  EXP: 'EXP',
  MULT: 'MULT',
  DIV: 'DIV',
  ADD: 'ADD',
  SUB: 'SUB',
  NEG: 'NEG',
  SQRT: 'SQRT',
  ROOT: 'ROOT',
  ANGLE: 'ANGLE',
  TEN_POW: 'TEN_POW',
  E_POW: 'E_POW',
  ASIN: 'ASIN',
  ACOS: 'ACOS',
  ATAN: 'ATAN',
  CUBE_RT: 'CUBE_RT',
  RECIPROCAL: 'RECIPROCAL',
  I_UNIT: 'I_UNIT',
  EQ: 'EQ',
  PI: 'PI',
  L_C_BRACK: 'L_C_BRACK',
  R_C_BRACK: 'R_C_BRACK',
  L_S_BRACK: 'L_S_BRACK',
  R_S_BRACK: 'R_S_BRACK',
  ANS: 'ANS',
  RETURN: 'RETURN',
  RADIUS: 'RADIUS',
  THETA: 'THETA',
  SPACE: 'SPACE',
  QUOTES: 'QUOTES'
};

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
      {
        title: 'MENU',
        onClick: () => {
          this.props.history.push({ pathname: '/' });
        }
      },
      { title: 'x\u00B2', onClick: symbol(Symbol.SQUARED) },
      { title: '^', onClick: symbol(Symbol.POWER) },
      { title: 'EXIT', onClick: command(Command.EXIT) },
      { title: 'X,\u03B8,T', onClick: symbol(Symbol.IND_VAR) },
      { title: 'log', onClick: symbol(Symbol.LOG) },
      { title: 'ln', onClick: symbol(Symbol.LN) },
      { title: 'sin', onClick: symbol(Symbol.SIN) },
      { title: 'cos', onClick: symbol(Symbol.COS) },
      { title: 'tan', onClick: symbol(Symbol.TAN) },
      { title: 'a b/c', onClick: symbol(Symbol.FRACTION) },
      { title: 'F/D', onClick: command(Command.F_D) },
      { title: '(', onClick: symbol(Symbol.L_PAREN) },
      { title: ')', onClick: symbol(Symbol.R_PAREN) },
      { title: ',', onClick: symbol(Symbol.COMMA) },
      { title: '\u2192', onClick: symbol(Symbol.SET) },
      { title: '7', onClick: symbol(7) },
      { title: '8', onClick: symbol(8) },
      { title: '9', onClick: symbol(9) },
      { title: '4', onClick: symbol(4) },
      { title: '5', onClick: symbol(5) },
      { title: '6', onClick: symbol(6) },
      { title: '1', onClick: symbol(1) },
      { title: '2', onClick: symbol(2) },
      { title: '3', onClick: symbol(3) },
      { title: '0', onClick: symbol(0) },
      { title: '\u2022', onClick: symbol(Symbol.DOT) },
      { title: 'EXP', onClick: symbol(Symbol.EXP) },
      { title: 'DEL', onClick: command(Command.DEL) },
      { title: 'AC', onClick: command(Command.AC) },
      { title: '*', onClick: symbol(Symbol.MULT) },
      { title: '/', onClick: symbol(Symbol.DIV) },
      { title: '+', onClick: symbol(Symbol.ADD) },
      { title: '-', onClick: symbol(Symbol.SUB) },
      { title: '(-)', onClick: symbol(Symbol.NEG) },
      { title: 'EXE', onClick: command(Command.EXE) }
    ];
    const shiftKeys = [
      {},
      { title: 'PRGM', onClick: command(Command.PRGM) },
      { title: 'SET UP', onClick: command(Command.SETUP) },
      { title: '\u221A', onClick: symbol(Symbol.SQRT) },
      { title: '\u207F\u221A', onClick: symbol(Symbol.ROOT) },
      { title: 'QUIT', onClick: command(Command.QUIT) },
      { title: '\u2220', onClick: symbol(Symbol.ANGLE) },
      { title: '10\u207F', onClick: symbol(Symbol.TEN_POW) },
      { title: 'e\u207F', onClick: symbol(Symbol.E_POW) },
      { title: 'sin\u207B\u00B9', onClick: symbol(Symbol.ASIN) },
      { title: 'cos\u207B\u00B9', onClick: symbol(Symbol.ACOS) },
      { title: 'tan\u207B\u00B9', onClick: symbol(Symbol.ATAN) },
      {},
      { title: 'a b/c / a/b', onClick: command(Command.MIXED_IMP) },
      { title: '\u221B', onClick: symbol(Symbol.CUBE_RT) },
      { title: 'x\u207B\u00B9', onClick: symbol(Symbol.RECIPROCAL) },
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
      { title: 'i', onClick: symbol(Symbol.I_UNIT) },
      { title: '=', onClick: symbol(Symbol.EQ) },
      { title: '\u03C0', onClick: symbol(Symbol.PI) },
      { title: 'INS', onClick: command(Command.INS) },
      {},
      { title: '{', onClick: symbol(Symbol.L_C_BRACK) },
      { title: '}', onClick: symbol(Symbol.R_C_BRACK) },
      { title: '[', onClick: symbol(Symbol.L_S_BRACK) },
      { title: ']', onClick: symbol(Symbol.R_S_BRACK) },
      { title: 'ANS', onClick: symbol(Symbol.ANS) },
      { title: '\u23CE', onClick: symbol(Symbol.RETURN) }
    ];
    const alphaKeys = [
      {},
      {},
      {},
      { title: 'r', onClick: symbol(Symbol.RADIUS) },
      { title: '\u03B8', onClick: symbol(Symbol.THETA) },
      {},
      { title: 'A', onClick: symbol('A') },
      { title: 'B', onClick: symbol('B') },
      { title: 'C', onClick: symbol('C') },
      { title: 'D', onClick: symbol('D') },
      { title: 'E', onClick: symbol('E') },
      { title: 'F', onClick: symbol('F') },
      { title: 'G', onClick: symbol('G') },
      { title: 'H', onClick: symbol('H') },
      { title: 'I', onClick: symbol('I') },
      { title: 'J', onClick: symbol('J') },
      { title: 'K', onClick: symbol('K') },
      { title: 'L', onClick: symbol('L') },
      { title: 'M', onClick: symbol('M') },
      { title: 'N', onClick: symbol('N') },
      { title: 'O', onClick: symbol('O') },
      { title: 'P', onClick: symbol('P') },
      { title: 'Q', onClick: symbol('Q') },
      { title: 'R', onClick: symbol('R') },
      { title: 'U', onClick: symbol('U') },
      { title: 'V', onClick: symbol('V') },
      { title: 'W', onClick: symbol('W') },
      { title: 'Z', onClick: symbol('Z') },
      { title: 'SPACE', onClick: symbol(Symbol.SPACE) },
      { title: '"', onClick: symbol(Symbol.QUOTES) },
      {},
      {},
      { title: 'S', onClick: symbol('S') },
      { title: 'T', onClick: symbol('T') },
      { title: 'X', onClick: symbol('X') },
      { title: 'Y', onClick: symbol('Y') },
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
