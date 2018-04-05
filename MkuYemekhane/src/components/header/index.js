import React from 'react';
import { Container, Header as NBHeader, Left, Body, Right, Button, Icon, Title } from 'native-base';

class Header extends React.PureComponent {
  render() {
    return (
      <NBHeader>
        <Left>
          <Button transparent>
            <Icon name='menu' />
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
