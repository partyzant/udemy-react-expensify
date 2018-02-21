import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { ExpensesSummary } from './ExpensesSummary';
import selectExpenses from '../selectors/expenses'
import { log } from 'util';
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpenseList = (props) => {
  const expenseCount = props.expenses.length;
  const expensesTotal = selectExpensesTotal(props.expenses);

  return (
    <div>
      <div>
        <ExpensesSummary expenseCount={expenseCount} expensesTotal={expensesTotal}/>
      </div>
      {
        props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          props.expenses.map((expense, i) => <ExpenseListItem key={i} {...expense} />)
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
