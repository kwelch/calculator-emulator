import React, { Component } from 'react';
import './App.css';
import Button from './Button';

const hasInvalidCharacters = value =>
  ![...value].every(char => Array.from('1234567890+-/*.').includes(char));

class App extends Component {
  state = {
    displayValue: '',
  };

  getRows = () => [
    [
      { value: 'clear', colSpan: '3', onClick: this.handleClear },
      { value: '%' },
    ],
    [{ value: '7' }, { value: '8' }, { value: '9' }, { value: '*' }],
    [{ value: '4' }, { value: '5' }, { value: '6' }, { value: '-' }],
    [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '+' }],
    [
      { value: '0', colSpan: '3' },
      { value: '=', onClick: this.runCalculation },
    ],
  ];

  updateDisplay = evt => {
    let value = evt.target.innerText;
    this.setState(prevState => ({
      displayValue: `${prevState.displayValue}${value}`,
    }));
  };

  handleInputChange = evt => {
    let value = evt.target.value;
    if (hasInvalidCharacters(value)) {
      console.log('invalid character entered. Nice try! :D');
      return null;
    }
    this.setState({
      displayValue: value,
    });
  };

  handleClear = () => {
    this.setState({
      displayValue: '',
    });
  };

  runCalculation = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      displayValue: eval(prevState.displayValue),
    }));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.runCalculation}>
          <table>
            <thead>
              <tr>
                <td colSpan="4">
                  <input
                    className="calculator__display"
                    onChange={this.handleInputChange}
                    value={this.state.displayValue}
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              {this.getRows().map((row, row_idx) => (
                <tr key={`row_${row_idx}`}>{row.map((props) => (<Button key={props.value} onClick={this.updateDisplay} {...props} />))}</tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
