import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App';
import { Provider } from 'react-redux'
// import { configureStore } from './components/app/store/configure-store';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './components/app/store/reducers/rootReducer'
import thunk from 'redux-thunk' 
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/fb.config'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig), // redux binding for firestore
    reactReduxFirebase(firebaseConfig, {attachAuthIsReady: true}) // redux binding for firebase
  ))
console.log(store.getState())
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    rootElem);
})

const rootElem = document.getElementById('here-renders-my-app');

