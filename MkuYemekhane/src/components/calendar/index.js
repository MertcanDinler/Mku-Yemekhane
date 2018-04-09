import React from 'react';
import styles from './styles';
import { Text } from 'native-base';
import Modal from 'react-native-modalbox';
import { Calendar as RNCalendar } from 'react-native-calendars';
import XDate from 'xdate';
const today = new XDate();
const lastDay = new XDate(today.getFullYear(), today.getMonth()+1, 0 );

class Calendar extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      selectedDay: false,
    }
  }
  handleSelect = (selectedDay) => {
    this.setState({selectedDay});
    this.props.onDateChanged(selectedDay);
  }

  render() {
    return (
      <Modal style={styles.modal} position={'bottom'} isOpen={ this.props.isOpen } onClosed={this.props.onClosed}>
        <RNCalendar
          minDate='2018-04-01'
          maxDate={lastDay.toString('yyyy-MM-dd')}
          firstDay={1}
          onDayPress={this.handleSelect}
          markedDates={{
            [this.state.selectedDay.dateString]: {selected: true},
          }}
          style={styles.calendar}
          theme={{
            backgroundColor: '#FFFFFF',
            calendarBackground: '#FFFFFF',
            todayTextColor: '#F44336',
            textSectionTitleColor: '#FF5252',
            selectedDayBackgroundColor: '#F44336',
            arrowColor: '#F44336',
          }}
        />
      </Modal>
    );
  }
}


export default Calendar;
