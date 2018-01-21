import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends React.Component {
  state = {
    focusedInput: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    // console.log(setStartDate(startDate))
    // console.log(setEndDate(endDate))
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onChangeText = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onChangeSort = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onChangeText}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onChangeSort}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <br />
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          numberOfMonths={1}
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

const mapDispatchToProps = (dispatch, props) => ({
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
