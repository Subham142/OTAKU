import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="377284183475-9aqk2b3ibth6bkcl8g169c38rg6r2a42.apps.googleusercontent.com">
    <App /> 
    </GoogleOAuthProvider>;
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
