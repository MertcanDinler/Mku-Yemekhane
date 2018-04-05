import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import Home from './components/home';
import Header from './components/header';
const MyRouter = () => (
  <Router hideNavBar= 'true'>
    <Scene key='root'>
        <Scene key='Home' title='MKÜ Yemekhane' component={Home} iconName='ios-home'  navBar={Header} initial={true}/>
    </Scene>
  </Router>
);

export default MyRouter;