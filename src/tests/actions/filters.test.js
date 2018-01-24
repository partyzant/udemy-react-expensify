import moment from 'moment';
import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';

test('should gen set startDate obj', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});
test('should gen set endDate obj', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should gen obj SORT_BY_DATE', () => {
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});
test('should gen obj SORT_BY_AMOUNT', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should gen obj setTextFilter with param', () => {
  const text = 'some text'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  });
});
test('should gen obj setTextFilter without param', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
