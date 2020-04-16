import React, { Component } from 'react'

export default class Todo extends Component {
   render() {
      console.log('this.props====================================');
      console.log(this.props);
      console.log('====================================');
      return (
         <li>
            {this.props.title?(this.props.title):(this.props.message)}
         </li>
      )
   }
}