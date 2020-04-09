import * as React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/js/bootstrap';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="login-form-wrapper">
                    <div className="row">
                        <div className="col">
                            <h4>Login Form</h4>
                            <form name="loginFrm" method="post">
                                <div className="form-group">
                                    <input name="username" className="form-control" placeholder="Username or Email" />
                                </div>
                                <div className="form-group">
                                    <input name="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;