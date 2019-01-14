import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import userReducer from './store/reducer/userReducer'
import flashCardReducer from './store/reducer/flashCardReducer'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  user: userReducer,
  activity: flashCardReducer
})



const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
