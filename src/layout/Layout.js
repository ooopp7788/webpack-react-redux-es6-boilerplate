import React, { Component } from 'react';
import { connect } from 'react-redux';
import dynamics from 'dynamics.js';
import {Layout} from 'antd'

import * as Actions from 'actions/home';
import './layout.less'

const { Header, Footer, Sider, Content } = Layout;

class HomeLayout extends Component {

  render() {

    return (
      <Layout className="homelayout">
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    )
  }
}

export default HomeLayout;
