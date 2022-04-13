import { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: 7,
  };

  inc() {
    this.setState({
      numero: this.state.numero + 1,
    });
  }

  dec() {
    this.setState({
      numero: this.state.numero - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Contador (usando classe)</h1>
        <h2>{this.props.valorInicial}</h2>
        <h3>{this.state.numero}</h3>
        <button onClick={() => this.inc()}>+</button>
        <button onClick={() => this.dec()}>-</button>
      </div>
    );
  }
}
