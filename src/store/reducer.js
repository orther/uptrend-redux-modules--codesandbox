import {combineReducers} from 'redux'
import {reducer as thunk} from 'redux-saga-thunk'

import {reducer as entities} from './modules/entities'
import {reducer as resource} from './modules/resource'

export const appReducers = {
  // none yet!
}

const libReducers = {
  thunk,
}

const reduxModulesReducers = {
  entities,
  resource,
}

const rootReducer = combineReducers({
  ...appReducers,
  ...libReducers,
  ...reduxModulesReducers,
})

export default rootReducer
