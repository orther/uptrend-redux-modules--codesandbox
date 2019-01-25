import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'

import middlewares from './middlewares'
import reducer from './reducer'
import sagas from './sagas'

const composeEnhancers = composeWithDevTools({
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    persist: false, // persist states on page reloading
    export: true, // export history of actions in a file
    import: false, //'custom', // import history of actions from a file
    jump: true, // jump back and forth (time travelling)
    skip: true, // skip (cancel) actions
    reorder: false, // drag and drop actions in the history list
    dispatch: true, // dispatch custom actions or action creators
    test: false, // generate tests for the selected actions
  },
})

const configureStore = (initialState, services = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const enhancers = [applyMiddleware(...middlewares, sagaMiddleware)]
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
  )

  const sagaTask = sagaMiddleware.run(sagas, services)

  return store
}

export default configureStore
