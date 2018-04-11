import React from 'react';
import { Image } from 'react-native';
import { Container, Content,  List, ListItem, Text, Icon, Left, Body, Right, } from 'native-base';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
const cover = require('../../images/yemekhane.png');
const logo = require('../../images/logo.png');
const menuList = [
{action: 'home', name: 'Ana Sayfa', icon: 'md-home'}

];
class Drawer extends React.PureComponent {
  handlePress = (action) => {
    if(action == 'home'){
      Actions.drawerClose();
    }else{
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
      </Container>
    );
  }
}


export default Drawer;
