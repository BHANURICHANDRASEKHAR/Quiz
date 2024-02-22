import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from '../redux/store.js';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><Provider store={store}>
  <App />
</Provider>,</BrowserRouter>
)
