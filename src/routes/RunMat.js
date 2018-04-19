import React from 'react';
import { connect } from 'react-redux';
import './KeyboardRoute.css';
import { ADD_SYMBOL } from '../reducers/runMat';

import Keyboard from '../components/Keyboard';
import Symbol from '../components/Symbol';

export default connect(state => ({
  activeLine: state.runMat.activeLine,
  state
}))(props => {
  return (
    <main className="KeyboardRoute">
      <section className="ExpandedSection Display container flow-text">
        <p className="left-align">
          {props.activeLine.map((s, i) => {
            return <Symbol symbol={s} key={i} />;
          })}
        </p>
      </section>
      <Keyboard
        onCommand={console.log}
        onSymbol={symbol => {
          props.dispatch({ type: ADD_SYMBOL, symbol });
        }}
      />
    </main>
  );
});
