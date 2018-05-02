import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, Text, Spinner, ListItem, Thumbnail, Body, List } from 'native-base';
import { fetchMenu } from '../../actions';
import FoodTemplate from './foodTemplate';
import Calendar from '../calendar';
import Weekend from '../errors/weekend';
import ConnectionFailed from '../errors/connection';
import Share from '../share';
import XDate from 'xdate';

const today = new XDate();

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
  onDateChanged = (date, eqeq) => {
    this.setState({calendarIsOpen:false});
    if(eqeq){
      this.props.fetchMenu(date.timestamp);
      this.setState({selectedDate: new XDate(date.dateString)});
    }

  }
  formatDate = () => {
    return this.state.selectedDate.toString('dd MMMM yyyy dddd');
  }
  renderFoodItem = (foodName, index) => (<FoodTemplate key={index} foodName={foodName} />);
  render() {
    return (
      <Container>
        <Calendar isOpen={this.state.calendarIsOpen} onClosed={this.calendarOnClosed} onDateChanged={this.onDateChanged} today={today}/>
        <Content>
          <ListItem last onPress={this.toggleCalendar}>
            <Thumbnail square size={80} source={require('../../images/calendar.png')} />
            <Body>
              <Text>{ this.formatDate() }</Text>
              <Text note>Tarihi değiştirmek için tıkla :)</Text>
            </Body>
          </ListItem>
          {this.props.foods.isLoading ? 
            <Spinner />
          :
          (this.props.foods.code == 200 ?
            <List
              dataArray={this.props.foods.menu}
              renderRow={this.renderFoodItem}>
            >
            </List> 
          : (this.props.foods.code == 404 ? 
              <Weekend /> 
            :
              <ConnectionFailed />
            )
          )
          }
        </Content>
        { !this.state.calendarIsOpen && !this.props.foods.isLoading && this.props.foods.code == 200 && <Share menu={this.props.foods.menu} date={this.state.selectedDate}/>}
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