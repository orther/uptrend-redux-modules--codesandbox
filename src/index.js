import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import ErrorBoundary from 'react-error-boundary'
import App from './components/App'

import configureStore from './store/configure'
// import {createApi} from './services/api'

const services = {
  // api: createApi(),
}

const store = configureStore({}, services)

const renderApp = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </Provider>
  </ErrorBoundary>
)

const root = document.getElementById('root')
render(renderApp(), root)
