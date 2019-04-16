import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </View>
    );
  }
}

export default App;
