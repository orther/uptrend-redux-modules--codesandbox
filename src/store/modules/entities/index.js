import {createEntities} from 'uptrend-redux-modules'
import {isDevEnv} from '../../../config'
import * as schemas from './schemas'

export const {actions, middleware, reducer, selectors} = createEntities({
  isDevEnv,
  schemas,
})
