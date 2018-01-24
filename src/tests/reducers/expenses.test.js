import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined , {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = expensesReducer(expenses , {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  });
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const state = expensesReducer(expenses , {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  });
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'Border Collie',
    note: 'pies',
    amount: 195150,
    createdAt: 5000
  };
  const state = expensesReducer(expenses , {
    type: 'ADD_EXPENSE',
    expense
  });
  expect(state).toEqual([...expenses, expense]);
});

test('shold edit expense', () => {
  const note = 'trata';
  const state = expensesReducer(expenses , {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {note}
  });
  expect(state[0].note).toBe(note);
});

test('shold edit no expense if id not found', () => {
  const note = 'trata';
  const state = expensesReducer(expenses , {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {note}
  });
  expect(state).toEqual(expenses);
});
