import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((item, i) => <ExpenseListItem key={i} {...item} />)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
