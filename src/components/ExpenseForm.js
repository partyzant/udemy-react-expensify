import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

moment.locale('pl');
const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onNoteChange = (e) => {
    // const note = e.target.value;
    e.persist(); // alternatywny sposób przekazywania wartości
    this.setState(() => ({note: e.target.value}));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState({ createdAt })
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount){
      this.setState({error: 'Wpisz description i kwotę!'});
    } else {
      this.setState({error: ''});
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render () {
    return (
      <div>
        {this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          /><br/>
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          /><br/>
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ calendarFocused: focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
          /><br/>
          <textarea
            placeholder="Add note (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea><br/>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
};
