import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import { store } from './redux/store'

import './index.css'
import 'antd/dist/antd.css'

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE)