import React from 'react';
import './KeyboardRoute.css';

import Keyboard from '../components/Keyboard';

export default () => {
  return (
    <main className="KeyboardRoute">
      <section className="ExpandedSection container flow-text">
        <p className="left-align">
          100-5<sup>2</sup>
        </p>
        <p className="right-align">75</p>
        <p className="left-align">Ans&divide;3</p>
      </section>
      <Keyboard />
    </main>
  );
};
