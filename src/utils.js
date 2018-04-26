export const OPERATORS = ['+', '-', '*', '/'];

export const parseDisplay = strValue =>
  Array.from(strValue).reduce((accumulator, current) => {
    if (!OPERATORS.includes(current) && parseInt(current)) {
      let lastValue = accumulator.splice(-1)[0];
      let newValue = parseInt(current);
      if (OPERATORS.includes(lastValue)) {
        newValue = parseInt(`${lastValue}${current}`);
        return [...accumulator, newValue];
      }
      if (lastValue) {
        return [...accumulator, lastValue, newValue];
      }
    }

    return [...accumulator, current];
  }, []);

export const runCalculation = () => {};
