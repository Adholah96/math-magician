// eslint-disable-next-line import/no-extraneous-dependencies

import PropTypes from 'prop-types';

function Display({ value }) {
  return <div className="display">{value}</div>;
}

Display.propTypes = {
  value: PropTypes.number.isRequired,
};

function Calculator() {
  const createDigits = () => {
    const empty = [];
    for (let i = 1; i < 10; i += 1) {
      empty.push(
        <button type="button" key={i}>
          {i}
        </button>
      );
    }
    return empty;
  };
  return (
    <div className="Application">
      <div className="calc">
        <Display value={0} />
        <div className="operands-container">
          <div className="left-operand">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            {createDigits()}
            <button type="button">0</button>
            <button type="button">.</button>
          </div>
          <div className="right-operand">
            <button type="button">+</button>
            <button type="button">*</button>
            <button type="button">-</button>
            <button type="button">/</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
