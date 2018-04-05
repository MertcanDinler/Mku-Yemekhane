import React from 'react';
import MyRouter from './myRouter';
import configureStore from './store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { StyleProvider, Root } from 'native-base';
import getTheme from './theme/components';
import material from './theme/variables/material';

const { store, persistor } = configureStore()

export default class App extends React.PureComponent {
  componentDidMount(){
    //console.disableYellowBox = true;
  }
  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StyleProvider style={getTheme(material)}>
              <Root>
                <MyRouter />
              </Root>
            </StyleProvider>
          </PersistGate>
        </Provider>
    );
  }
}