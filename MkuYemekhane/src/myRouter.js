import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import { Dimensions } from 'react-native';
import Home from './components/home';
import Header from './components/header';
import Drawer from './components/drawer';
const drawerWidth = Dimensions.get('window').width*0.8;
const MyRouter = () => (
  <Router hideNavBar= 'true'>
    <Scene key='root'>
      <Scene drawer hideNavBar key="Drawer" contentComponent={Drawer} drawerWidth={drawerWidth}>
        <Scene key='Home' title='MKÜ Yemekhane' component={Home} iconName='ios-home'  navBar={Header} initial={true}/>
      </Scene>
    </Scene>
  </Router>
);

export default MyRouter;