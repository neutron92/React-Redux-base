import React from 'react';
import less from 'less';
import 'antd/dist/antd.css';
//import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'


import './App.less';

class App extends React.Component {
  render() {
     return (

        <div>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
          {this.props.children}
        </div>
     
      
     )
  }
}
export default App;


