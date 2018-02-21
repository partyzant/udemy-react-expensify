import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('get total should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('get total should correctly add up single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('get total should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});