import React from 'react';
import { Symbol } from './Keyboard';

export default ({ symbol }) => {
  if (typeof symbol === 'number' || symbol.length === 1) {
    return symbol;
  }

  if (typeof symbol !== 'string') {
    console.error('Symbol is not a number or string. It is:', symbol);
    return '';
  }

  switch (symbol) {
    case Symbol.SQUARED:
      return <sup>2</sup>;
    case Symbol.POWER:
      return '^';
    case Symbol.IND_VAR:
      return 'x';
    case Symbol.LOG:
      return 'log ';
    case Symbol.LN:
      return 'ln ';
    case Symbol.SIN:
      return 'sin ';
    case Symbol.COS:
      return 'cos ';
    case Symbol.TAN:
      return 'tan ';
    case Symbol.FRACTION:
      return '/';
    case Symbol.L_PAREN:
      return '(';
    case Symbol.R_PAREN:
      return ')';
    case Symbol.COMMA:
      return ',';
    case Symbol.SET:
      return '\u2192';
    case Symbol.DOT:
      return '.';
    case Symbol.EXP:
      return '\u1D07';
    case Symbol.MULT:
      return '\u00D7';
    case Symbol.DIV:
      return '\u00F7';
    case Symbol.ADD:
      return '+';
    case Symbol.SUB:
      return '\u2212';
    case Symbol.NEG:
      return '-';
    default:
      console.error(`${symbol} is not a symbol`);
      return 'NO_SYMBOL_FOUND! ';
  }
};
