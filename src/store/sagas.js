import {all} from 'redux-saga/effects'

// redux-modules
import {sagas as resource} from './modules/resource'

// single entry point to start all Sagas at once
export default function*(services = {}) {
  try {
    yield all([
      // redux-modules
      resource(services),
    ])
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('ROOT SAGA ERROR!!!', error)
    // eslint-disable-next-line no-console
    console.trace()
  }
}
