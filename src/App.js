import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAsH2Y9q4ZxeuQaYcg_jQPLs73nxETFEt0',
      authDomain: 'react-native-manager-f455a.firebaseapp.com',
      databaseURL: 'https://react-native-manager-f455a.firebaseio.com',
      projectId: 'react-native-manager-f455a',
      storageBucket: '',
      messagingSenderId: '112886707030'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
