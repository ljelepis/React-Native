import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default class App extends React.Component {//created a component and then using it in the app.js file.
  render() {
    return (//made our App.js file to connect to the redux store, via <Provider store={store}>
      <Provider store={store}>
            <Main />
      </Provider>
    );
  }
}
