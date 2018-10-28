import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from 'react-router-dom'

import Home from './Components/home'

const Routes = props => {
  return (
    <Layout>
      <Switch>
          <Route exact component={Home} path='/'>
            
          </Route>
      </Switch>
    </Layout>
  );
};

export default Routes;

// HOC (high order component) for header / footer because displayed on every page
