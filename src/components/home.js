import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'
class Home extends React.Component {
   componentWillMount() {
      const { userId, dispatch } = this.props
      dispatch({type: 'USER_FETCH_REQUESTED'})

   }


   render() {
      const { dispatch, visibleTodos } = this.props
      /* const cookieName = 'LoginTest'

      const cookieLogged = Cookies.getJSON(cookieName)
      const [logged, setLogged] = useState(true)
      console.log('cookieLogged====================================');
      console.log(cookieLogged);
      console.log('====================================');
      //Cookies.set("logged",true ,{expires: 7, path: '' });
      Cookies.set(cookieName, { logged: logged }) */

   


      return (
         <div>
            <AddTodo onAddClick = {this.handleSubmit} />
            <TodoList todos = {visibleTodos}/>
         </div>
      )
   }
  }
  function select(state) {
     return {
        visibleTodos: state.todos
     }
  }
  export default connect(select)(Home);




