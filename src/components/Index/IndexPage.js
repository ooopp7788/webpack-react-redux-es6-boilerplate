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

  state = {
    dragging: false,
    // quadratic bezier control point
    c: { x: 160, y: 160 },
    // record drag start point
    start: { x: 0, y: 0 }
  }

  startDrag = (e) => {
    e = e.changeTouches ? e.changeTouches[0] : e;
    this.setState({
      dragging: true,
      start: { x: e.pageX, y: e.pageY },
    });
  }

  render() {
    const { counter, inc, dec } = this.props;
    const d = 'M0,0 L320,0 320,160' + 'Q' + this.state.c.x + ',' + this.state.c.y + ' 0,160';

    return (
      <div>
        <h3 className="title">Webpack-React-Redux-ES6-Boilerplate <br/> Dev Environment</h3>
        <div className="draggable-header-view">
          <svg className="bg" width="320" height="560">
            <path d={d} style={{fill: '#2196F3'}}></path>
          </svg>
          <div className="header">
            <h1>Elastic Draggable SVG Header</h1>
            <p>
              with <a href="https://facebook.github.io/react/" target="_blank">react.js</a> + <a href="http://dynamicsjs.com" target="_blank">dynamics.js</a>
            </p>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo,
              rhoncus ut, imperdiet a, venenatis vitae, justo.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
