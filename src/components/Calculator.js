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
        <div className="display">0</div>
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
