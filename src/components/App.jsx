import "./App.css";
import React from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
import Result from "./Result";
import * as mathjs from "mathjs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "",
    };
  }

  calculate = (input) => {
    try {
      const result = parseFloat(mathjs.evaluate(input));

      if (Number.isInteger(result)) {
        this.setState({
          result: result.toString(),
        });
      } else {
        this.setState({
          result: result.toFixed(2),
        });
      }
    } catch (error) {
      this.setState({
        result: "Error",
      });
    }
  };

  reset = () => {
    this.setState({
      input: "",
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      input: this.state.input.slice(0, -1),
    });
  };

  handleButtonClick = (value) => {
    switch (value) {
      case "C":
        this.reset();
        break;
      case "CE":
        this.backspace();
        break;
      case "±":
        this.setState({
          input: parseFloat(this.state.input) * -1,
        });
        break;
      case "=":
        this.calculate(this.state.input);
        break;
      case "%":
        this.setState({
          input: this.state.input / 100,
        });
        break;
      default:
        this.setState({
          input: this.state.input + value,
          result: "",
        });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display input={this.state.input} />
        <Result result={this.state.result} />
        <KeyPad onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;
