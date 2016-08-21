import React from 'react';
import { Route } from 'react-router';
import Base from 'components/Base';
import IndexPage from 'components/Index/IndexPage';

export default (
  <Route component={Base}>
    <Route path='/' component={IndexPage} />
  </Route>
);
