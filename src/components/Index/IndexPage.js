import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

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

    // console.log(inc, dec);

    return (
      <div>
        <h3>Webpack-React-Redux-ES6-Boilerplate <br/> Dev Environment</h3>
        <div className="redux-counter">
          <h2>Redux Counter</h2>
          <button onClick={() => dec()}>-</button>
          <span>{counter}</span>
          <button onClick={() => inc()}>+</button>
          <p>打开控制台,可查看counter变化日志</p>
        </div>
      </div>
    )
  }
}
