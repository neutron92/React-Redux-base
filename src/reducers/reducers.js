import {
   combineReducers
} from 'redux'
import {
   ADD_TODO
} from '../actions/actions'
import {
   connectRouter
} from 'connected-react-router'

function logged(state = null, action) {
   switch (action.type) {
      case ADD_TODO:
         return [
            ...state, {
               id: action.id,
               text: action.text,
            }
         ]
      case 'USER_FETCH_SUCCEEDED':
         console.log('state action====================================');
         console.log(state, action);
         console.log('====================================');
         return action.users
      case 'USER_FETCH_FAILED':
         console.log('state action====================================');
         console.log(state, action);
         console.log('====================================');
         return [{
            id: null,
            message: action.message,
         }]

      case 'USER_IS_LOGGEDIN':
         return true
      default:

         return state
   }
}
const todoApp = (history) => combineReducers({
   router: connectRouter(history),
   logged
})
export default todoApp