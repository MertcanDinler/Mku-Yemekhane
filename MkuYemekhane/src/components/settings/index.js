import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Left, Body, Right, Icon, Switch, Text, List, ListItem, Separator } from 'native-base';
import { setNotification } from '../../actions';
const days = [
  {name: 'Pazartesi', key: 'monday'},
  {name: 'Salı', key: 'tuesday'},
  {name: 'Çarşamba', key: 'wednesday'},
  {name: 'Perşembe', key: 'thursday'},
  {name: 'Cuma', key: 'friday'}
]
class Settings extends React.PureComponent {
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  handleNotifySettings = (day, value) => this.props.setNotification({day, value});

  render() {
    return (
      <Container>
        <Content padder>
          <List>
          <ListItem icon>
              <Left>
                <Icon name="ios-notifications" />
              </Left>
              <Body>
                <Text>Pazartesi</Text>
              </Body>
              <Right>
                <Switch value={this.props.settings.notifications.monday} onValueChange={(value) => this.handleNotifySettings('monday',value)}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-notifications" />
              </Left>
              <Body>
                <Text>Salı</Text>
              </Body>
              <Right>
                <Switch value={this.props.settings.notifications.tuesday} onValueChange={(value) => this.handleNotifySettings('tuesday',value)}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-notifications" />
              </Left>
              <Body>
                <Text>Çarşamba</Text>
              </Body>
              <Right>
                <Switch value={this.props.settings.notifications.wednesday} onValueChange={(value) => this.handleNotifySettings(wednesday,value)}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-notifications" />
              </Left>
              <Body>
                <Text>Perşembe</Text>
              </Body>
              <Right>
                <Switch value={this.props.settings.notifications.thursday} onValueChange={(value) => this.handleNotifySettings(thursday,value)}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-notifications" />
              </Left>
              <Body>
                <Text>Cuma</Text>
              </Body>
              <Right>
                <Switch value={this.props.settings.notifications.friday} onValueChange={(value) => this.handleNotifySettings('friday',value)}/>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return {
   settings: state.settings,
  }
}

const mapDispatchToProps = {
  setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
