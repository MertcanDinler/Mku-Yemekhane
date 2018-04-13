import React from 'react';
import { Item, Icon, ListItem, Text, Left, Body } from 'native-base';

export default class FoodTemplate extends React.PureComponent{
  render(){
    return(
      <ListItem icon noBorder>
        <Left>
          <Icon name='ios-arrow-dropright' style={{color:'red'}}/>
        </Left>
        <Body>
          <Text>{this.props.foodName}</Text>
        </Body>
      </ListItem>
    );
  }
}