import * as React from "react";
import Alert from 'react-bootstrap/Alert';
import { gql } from '@apollo/client';
import { Mutation } from "react-apollo";

const defaultFormVals = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        username: '',
        password: ''
    }
}
const CREATE_USER = gql`
mutation createUser($firstname:String, $lastname:String, $email:String, $phone:String, $username:String, $password:String)
  {
    addUser(firstname:$firstname, lastname:$lastname, email:$email, phone:$phone, username:$username, password:$password) {
      firstname
      lastname
      email
      phone
      username
      password
    }
  }
`;

class UserRegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultFormVals;
    }
    ngOnInit(){
        this.setState({'showAlert': false});
    }
    handleChange = (event) => {
        event.preventDefault();
        const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'firstname':
                errors.firstname =
                    value.length === 0
                        ? 'Firstname cannot be empty'
                        : '';
                break;
            case 'lastname':
                errors.lastname =
                    value.length === 0
                        ? 'Lastname cannot be empty'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'phone':
                errors.phone =
                    phoneRegex.test(value)
                        ? ''
                        : 'Phone number must be 10 digits long';
                break;
            case 'username':
                errors.username =
                    value.length === 0
                        ? 'Username cannot be empty'
                        : '';
                break;
            case 'password':
                errors.password =
                    passwordRegex.test(value)
                    ? ''
                    : 'Password must have atleast 6 to 16 characters which contains a number and a special character !@#$%^&*';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
        let valid = true;
        Object.values(errors).forEach((val, key) => {
            if(val) {
                valid = false;
            }
        });
        this.setState({'isValid': valid});
    }
    handleSubmit = () => {
        // e.preventDefault();
        this.resetForm();
        this.setState({'showAlert': true})
        // let fState = Object.assign({}, this.state);
        // if(fState && fState.isValid){
        //     let {isValid, errors, ...fData} = fState;
        //     const [addUser] = useMutation(ADD_USER);
        //     addUser({ variables: JSON.stringify(fData) });
            // const requestOption = {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(fData)
            // }
            // fetch('http://localhost:3000/api/user', requestOption).then((res) => {
            //     if(res.status === 200) {
            //         this.resetForm();
            //         this.setState({'showAlert': true});
            //     }
            // });
        // }
    }
    resetForm = (e) => {
        this.setState(defaultFormVals);
    }
    render() {
        const { firstname, lastname, username, password, email, phone } = this.state;
        return (
            <article>
                <section className="container">
                    <div>
                        {this.state.showAlert && 
                        (<Alert variant="success" onClose={() => this.setState({'showAlert': false})} dismissible>
                            User created successfully
                        </Alert>)
                        }
                    </div>
                    <div className="reg-form-wrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <h3 className="pageTitle">Add User</h3>
                                <Mutation mutation={CREATE_USER}>
                                {(addUser, {data, loading, error}) => (
                                    <form name="addUserFrm" noValidate autoComplete="off" onSubmit={e => {
                                        e.preventDefault();
                                        addUser({ variables: {firstname:firstname, lastname:lastname, email:email, phone:phone, username:username, password:password} });
                                        this.handleSubmit();
                                    }}>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <input name="firstname" className="form-control" placeholder="First Name" value={firstname} onChange={this.handleChange} />
                                        {this.state.errors && this.state.errors.firstname && (
                                            <p className="error">{this.state.errors.firstname}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input name="lastname" className="form-control" placeholder="Last Name" value={lastname} onChange={this.handleChange} />
                                        {this.state.errors && this.state.errors.lastname && (
                                            <p className="error">{this.state.errors.lastname}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={this.handleChange} />
                                        {this.state.errors && this.state.errors.email && (
                                            <p className="error">{this.state.errors.email}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone No.</label>
                                        <input type="tel" name="phone" className="form-control" placeholder="Phone No." value={phone} onChange={this.handleChange} />
                                        {this.state.errors && this.state.errors.phone && (
                                            <p className="error">{this.state.errors.phone}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input name="username" className="form-control" placeholder="Username" value={username} onChange={this.handleChange} />
                                        {this.state.errors && this.state.errors.username && (
                                            <p className="error">{this.state.errors.username}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={this.handleChange} />
                                        {this.state.errors && this.state.errors.password && (
                                            <p className="error">{this.state.errors.password}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-3 submitBtn">
                                                <button type="submit" className="btn btn-primary" disabled=
                                                {!this.state.isValid || (!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.phone || !this.state.username || !this.state.password)}
                                                >Submit</button>
                                            </div>
                                            <div className="col-offset-2 col-5">
                                                <button type="button" className="btn btn-secondary" onClick={this.resetForm}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                )}
                                </Mutation>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}
export default UserRegForm;