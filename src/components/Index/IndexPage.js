import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import * as counterActions from 'actions/counterActions';

@connect(
  state => (
    { counter: state.counter }
  ),
  { ...counterActions }
)
export default class IndexPage extends Component {

  render() {
    const { counter, inc, dec } = this.props;

    return (
      <div>
        <h1>Webpack-React-Redux-ES6-Boilerplate Dev Environment</h1>
        <div className="redux-counter">
          <h2>Redux Counter</h2>
          <button onClick={() => inc()}>+</button>
          <span>{counter}</span>
          <button onClick={() => dec()}>-</button>
          <p>打开控制台,可查看counter变化日志</p>
        </div>
      </div>
    )
  }
}
