import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import { Dimensions } from 'react-native';
import Home from './components/home';
import Settings from './components/settings';
import Header from './components/header';
import Drawer from './components/drawer';
const drawerWidth = Dimensions.get('window').width*0.8;
const MyRouter = () => (
  <Router hideNavBar= 'true'>
    <Scene key='root' navBar={Header}>
      <Scene drawer hideNavBar key='drawer' contentComponent={Drawer} drawerWidth={drawerWidth}>
        <Scene key='home' title='MKÜ Yemekhane' component={Home} iconName='ios-home' initial={true}/>
      </Scene>
      <Scene key='settings' title='Ayarlar' component={Settings} />
    </Scene>
  </Router>
);

export default MyRouter;