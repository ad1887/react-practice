import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AddUser from './AddUser';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    var custClass = {
        color: "#D34ED3",
        fontStyle: "italic"
      }; 
    return <Router>
      <h2 style={custClass}>Header Section</h2>
      <nav>
        <Link to={'/home'} className="nav-link">Home</Link>&nbsp;
        <Link to={'/register'} className="nav-link">Register</Link>&nbsp;
        <Link to={'/about'} className="nav-link">About</Link>&nbsp;
        <Link to={'/contact'} className="nav-link"> Contact </Link>
      </nav>
      <hr />
      <Switch>
          <Route path='/home' component={Home} />
          <Route path='/register' component={AddUser} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
      </Switch>
    </Router>;
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h3><em>Footer Section</em></h3>
      </div>
    );
  }
}

export default App;
