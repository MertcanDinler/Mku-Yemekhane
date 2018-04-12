import React from 'react';
import { Container, Header as NBHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Header extends React.PureComponent {
  openDrawer = () => {
    if(this.props.back){
      Actions.pop();
    }else{
      Actions.drawerOpen();
    }
  };
  render() {
    return (
      <NBHeader>
        <Left>
          <Button transparent onPress={this.openDrawer}>
            <Icon name={ this.props.back ? 'ios-arrow-back': 'menu'} />
          </Button>
        </Left>
        <Body>
          <Title>{ this.props.title }</Title>
        </Body>
        <Right />
      </NBHeader>
    );
  }
}


export default Header;
