import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import moment from 'moment';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
  state = {
    focusedInput: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate ? moment(startDate).valueOf() : undefined));
    this.props.dispatch(setEndDate(setEndDate ? moment(endDate).valueOf() : undefined));
  };
  render() {
    return(
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            this.props.dispatch( e.target.value === 'date' ? sortByDate() : sortByAmount() );
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <br/>
        <DateRangePicker
          startDate={moment(this.props.filters.startDate)} // momentPropTypes.momentObj or null,
          endDate={moment(this.props.filters.endDate)} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
