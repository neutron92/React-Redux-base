import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'


export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
      applyMiddleware(sagaMiddleware)
    ),
    
  )

  sagaMiddleware.run(mySaga)

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}