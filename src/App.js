import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    displayValue: '',
  };

  updateDisplay = evt => {
    let value = evt.target.innerText
    this.setState(prevState => ({
      displayValue: `${prevState.displayValue}${value}`,
    }));
  };

  handleInputChange = evt => {
    let value = evt.target.value;
    this.setState({
      displayValue: value,
    });
  };

  runCalculation = () => {
    
  }

  render() {
    return (
      <div className="App">
        <form>
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
              <tr>
                <td colSpan="3">Clear</td>
                <td>%</td>
              </tr>
              <tr>
                <td>
                  <span onClick={this.updateDisplay}>7</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>8</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>9</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>x</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span onClick={this.updateDisplay}>4</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>5</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>6</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>-</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span onClick={this.updateDisplay}>1</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>2</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>3</span>
                </td>
                <td>
                  <span onClick={this.updateDisplay}>+</span>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <span onClick={this.updateDisplay}>0</span>
                </td>
                <td>
                  <span onClick={this.runCalculation}>=</span>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
