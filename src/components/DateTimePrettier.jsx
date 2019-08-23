import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/ru';

export default function DateTimePrettier(date) {
  return function (Component) {
    return class extends React.Component {
      state = {date: ''}
      
      changeTime() {
        const MinutesFromDate = moment().diff(moment(date), 'minutes')

        if (MinutesFromDate < 60) {
          return `${MinutesFromDate} минут назад`;
        } else if(MinutesFromDate > 60 && MinutesFromDate < 1440) {
          return `${Math.floor(MinutesFromDate / 60)} часов назад`;
        } else {
          return `${Math.floor(MinutesFromDate / 60 / 24)} дней назад`;
        }
      }
   
      componentDidMount() {
        this.setState({date: this.changeTime()})
      }

      render() {
        return <Component {...this.props} date={this.state.date} />;
      }
    };
  };
}

DateTimePrettier.propTypes = {
  date: PropTypes.string.isRequired
}

