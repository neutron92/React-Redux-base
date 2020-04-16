import React from 'react';
//import { Router, Route } from 'react-router';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Login from './components/Login/login'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

//let store = createStore(todoApp)
let store = configureStore()
const Routes = (props) => (
  <Provider store = {store}>
   <ConnectedRouter history={history}>
      <App>
          <Switch> 
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
          </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);
export default Routes;