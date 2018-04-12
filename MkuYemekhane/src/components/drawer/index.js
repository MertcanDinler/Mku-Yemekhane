import React from 'react';
import { Image, Share } from 'react-native';
import { Container, Content, Footer,  List, ListItem, Text, Icon, Left, Body, Right, } from 'native-base';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
const cover = require('../../images/yemekhane.png');
const logo = require('../../images/logo.png');
const menuList = [
{action: 'home', name: 'Ana Sayfa', icon: 'ios-home'},
{action: 'settings', name: 'Ayarlar', icon: 'ios-cog'},
{action: 'share', name: 'Uygulamayı Paylaş', icon: 'md-share'}
];
class Drawer extends React.PureComponent {
  handlePress = (action) => {
    Actions.drawerClose();
    if(action == 'share'){
      Share.share({message: 'Uygulama linki buraya konacak'});
    }else if(action != 'home'){
      Actions.push(action, {back: true});
    }
  }

  renderItem = (item) => (
    <ListItem icon last onPress={ () => this.handlePress(item.action) }>
      <Left>
        <Icon name={item.icon} />
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>
      <Right />
    </ListItem>
  );
  render() {
    return (
      <Container>
        <Content bounces={false} style={styles.Content}>
          <Image source={cover} style={styles.cover}/>
          <Image square style={styles.logo} source={logo} />
          <List dataArray={menuList} renderRow={this.renderItem}>
          </List>
        </Content>
        <Footer style={{backgroundColor: '#fff'}}>
          <Text style={{textAlign:'center', fontSize: 12}} small>BÖTE bölümü Topluma Hizmet Uygulamaları dersi kapsamında geliştirilmiştir. {'\n\u00A9'} 2018</Text>
        </Footer>
      </Container>
    );
  }
}


export default Drawer;
