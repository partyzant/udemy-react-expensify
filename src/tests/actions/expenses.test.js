import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('123sam');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123sam'
  });
});

test('should edit expense', () => {
  const action = editExpense('232', {note:'aaa'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '232',
    updates: {note:'aaa'}
  });
});

test('should setup add expense', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test('should setup add expense with def vals', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
