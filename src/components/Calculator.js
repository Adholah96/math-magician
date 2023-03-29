// eslint-disable-next-line import/no-extraneous-dependencies

import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Display({ objState }) {
  return (
    <div className="display">{objState.next || objState.total || '0'}</div>
  );
}

Display.propTypes = {
  objState: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

function Calculator() {
  const [objState, setObjState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnButton) => {
    const newObjState = calculate(objState, btnButton);
    setObjState(newObjState);
  };

  const createDigits = () => {
    const empty = [];
    for (let i = 1; i < 10; i += 1) {
      empty.push(
        <button type="button" key={i} onClick={() => handleClick(`${i}`)}>
          {i}
        </button>
      );
    }
    return empty;
  };
  return (
    <div className="Application">
      <h2>Lets do some Math</h2>
      <div className="calc">
        <Display objState={objState} />
        <div className="operands-container">
          <div className="left-operand">
            <button type="button" onClick={() => handleClick('AC')}>
              AC
            </button>
            <button type="button" onClick={() => handleClick('+/-')}>
              +/-
            </button>
            <button type="button" onClick={() => handleClick('%')}>
              %
            </button>
            {createDigits()}
            <button type="button" onClick={() => handleClick('0')}>
              0
            </button>
            <button type="button" onClick={() => handleClick('.')}>
              .
            </button>
          </div>
          <div className="right-operand">
            <button type="button" onClick={() => handleClick('+')}>
              +
            </button>
            <button type="button" onClick={() => handleClick('x')}>
              *
            </button>
            <button type="button" onClick={() => handleClick('-')}>
              -
            </button>
            <button type="button" onClick={() => handleClick('÷')}>
              /
            </button>
            <button type="button" onClick={() => handleClick('=')}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
