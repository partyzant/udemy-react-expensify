import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';

const Exp = () => (
  <div>
    this is from my dash comp
  </div>
);

const Exp2 = () => (
  <div>
    this is from my dash comp 2
  </div>
);

const Exp3 = () => (
  <div>
    this is from my dash comp 3
  </div>
);

const Exp4 = () => (
  <div>
    this is from my dash comp 4
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route path="/" component={Exp} exact={true}/>
        <Route path="/create" component={Exp2} exact={true} />
        <Route path="/edit" component={Exp3} exact={true} />
        <Route path="/help" component={Exp4} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
