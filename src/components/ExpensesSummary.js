import React from 'react';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const formatedExpTot = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing {expenseCount} totaling {formatedExpTot}</h1>
    </div>
  );
};
