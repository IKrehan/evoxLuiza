import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProductForm from './pages/ProductForm/ProductForm';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/add" component={ProductForm} />
    </Switch>
  );
}

export default Routes;