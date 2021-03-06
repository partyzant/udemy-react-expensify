import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

import moment from 'moment';
store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: moment(Date.now()) }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: moment(Date.now()).subtract(4, 'days').valueOf() }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: moment(Date.now()).subtract(2, 'days').valueOf() }));
/*
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(state.filters);
console.log(visibleExpenses);*/

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
