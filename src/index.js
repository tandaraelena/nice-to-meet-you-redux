import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App';
import { Provider } from 'react-redux'
import { configureStore } from './components/app/store/configure-store';

const store = configureStore()
console.log(store.getState())

const rootElem = document.getElementById('here-renders-my-app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElem);
