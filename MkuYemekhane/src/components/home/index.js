import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, Text, ListItem, Thumbnail, Body, List } from 'native-base';
import { fetchMenu } from '../../actions';
import FoodTemplate from './foodTemplate';
import Calendar from '../calendar';
import XDate from 'xdate';

class Home extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      calendarIsOpen: false,
      selectedDate: new XDate(),
    }
  }
  componentDidMount(){
    this.props.fetchMenu();
  }
  toggleCalendar = () => this.setState({calendarIsOpen: !this.state.calendarIsOpen});
  calendarOnClosed = () => this.setState({calendarIsOpen: false});
  onDateChanged = (date) => {
    this.props.fetchMenu(date.timestamp);
    this.setState({selectedDate: new XDate(date.dateString)});
    this.toggleCalendar();
  }
  formatDate = () => {
    return this.state.selectedDate.toString('dd MMMM yyyy dddd');
  }
  renderFoodItem = (foodName, index) => (<FoodTemplate key={index} foodName={foodName} />);
  render() {
    return (
      <Container>
        <Calendar isOpen={this.state.calendarIsOpen} onClosed={this.calendarOnClosed} onDateChanged={this.onDateChanged}/>
        <Content>
          <ListItem last onPress={this.toggleCalendar}>
            <Thumbnail square size={80} source={require('../../images/calendar.png')} />
            <Body>
              <Text>{ this.formatDate() }</Text>
              <Text note>Tarihi değiştirmek için tıkla :)</Text>
            </Body>
          </ListItem>
          <List
            dataArray={this.props.foods.menu}
            renderRow={this.renderFoodItem}>
          >
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
   return {
    foods: state.foods,
   }
}

const mapDispatchToProps = {
  fetchMenu,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);