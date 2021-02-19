import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Checkout from './Containers/Checkout/Checkout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import {Route,Switch} from 'react-router-dom';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';

function App() {
  return (
    <div >
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
