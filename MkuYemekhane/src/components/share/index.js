import React from 'react';
import { Share } from 'react-native';
import {Icon, Fab} from 'native-base';

export default (props) => {
  let message = "";
  if(props.menu != null){
    message = props.date.toString("dd MMMM dddd") + "\n+";
    message += props.menu.join("\n+");
  }
  const onPress = () => Share.share({message});
  return (
    <Fab active={true} style={{ backgroundColor: '#F44336' }} position="bottomRight" onPress={onPress}>
      <Icon name="md-share" />
    </Fab>
  );
}