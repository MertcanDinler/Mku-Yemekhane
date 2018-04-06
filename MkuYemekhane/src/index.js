import React from 'react';
import MyRouter from './myRouter';
import configureStore from './store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { StyleProvider, Root } from 'native-base';
import getTheme from './theme/components';
import material from './theme/variables/material';
import XDate from 'xdate';

const { store, persistor } = configureStore()

XDate.locales['tr'] = {
  monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kastım','Aralık'],
  monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz','Tem.','Ağu','Eyl','Eki','Kas','Ara'],
  dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
  dayNamesShort: ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt']
};
XDate.defaultLocale = 'tr';

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