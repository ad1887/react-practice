import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import AddUser from './AddUser/AddUser.jsx';
import CreateUser from './CreateUser';

class App extends React.Component {
  render() {
    return (
      <div>
          <Router>
            {/* <Link to="/login"></Link>
            <Link to="/dashboard"></Link>
            <Link to="/adduser"></Link>
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/adduser' component={AddUser} /> */}
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/add-user' component={AddUser} />
              <Route path='/create-user' component={CreateUser} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
