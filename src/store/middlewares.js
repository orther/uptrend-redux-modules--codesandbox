import {middleware as ReduxSagaThunk} from 'redux-saga-thunk'
import {middleware as entities} from './modules/entities'

export default [
  // redux-modules
  entities,

  // following middleware must be in this order
  ReduxSagaThunk,
]
