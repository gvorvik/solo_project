import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import StudentPage from './components/StudentPage/StudentPage';
import Calendar from './components/Calendar/Calendar';
import SimpleMenu from './components/SimpleMenu/SimpleMenu';

import './styles/main.css';

const App = () => (
  <Router>
    <div>
      <SimpleMenu />

      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
          path="/student"
          component={StudentPage}
        />
        <Route
          path="/calendar"
          component={Calendar}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>

      <footer></footer>
    </div>
  </Router>
);

export default App;
