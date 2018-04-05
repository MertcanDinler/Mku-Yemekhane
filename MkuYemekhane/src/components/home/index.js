import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, Text, ListItem, Thumbnail, Body, List } from 'native-base';
import { fetchMenu } from '../../actions';
import FoodTemplate from './foodTemplate';

const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

class Home extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      today : new Date(),
    }
  }
  componentDidMount(){
    this.props.fetchMenu();
  }
  todayToText = () => {
    day = this.state.today.getDay();
    month = this.state.today.getUTCMonth();
    year = this.state.today.getUTCFullYear();
    dayNum = this.state.today.getUTCDate();
    dayNum = dayNum < 10 ? "0" + dayNum : dayNum;
    return dayNum + " " + monthNames[month] + " " + year + " " + dayNames[day];
  }
  renderFoodItem = (foodName, index) => (<FoodTemplate key={index} foodName={foodName} />);
  render() {
    return (
      <Container>
        <Content>
          <ListItem last onPress={() => alert('Burayı henüz yapmadık :)')}>
            <Thumbnail square size={80} source={require('../../images/calendar.png')} />
            <Body>
              <Text>{ this.todayToText() }</Text>
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