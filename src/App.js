import React, { Component } from 'react';
// import RootReducer from './redux';
import store from './utils/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootContainer  from './components/root-container';

// const store = createStore(RootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <RootContainer />
      </Provider>
    );
  }
}
