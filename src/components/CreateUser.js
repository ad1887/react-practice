import React from 'react';
import { connect } from 'react-redux';
import addUserAction from "../actions/user";

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
class CreateUser extends React.Component {
    arr = [];
    
    constructor(props) {
      super(props);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
      e.preventDefault();
      let formData = {};
      formData.firstname = e.target.firstname.value || '';
      formData.lastname = e.target.lastname.value || '';
      this.props.addUserAction(formData);
    }
    render() {
      console.log(this.props.data);
      return (
        <div>
          <h3>Content Section</h3>
          <UserForm data={this.props.data} handleSubmit={this.handleSubmit} />
          <div>
            <h4>Users List</h4>
            {this.props.data.map((data, i) => (
              <List key={i} data={data} dataIndex={i+1} />
            ))}
          </div>
        </div>
      );
    }
  }

  export default connect(mapStateToProps, {addUserAction})(CreateUser);
  class List extends React.Component {
    render() {
      return (
        <div>
          <span>{this.props.dataIndex}</span>
          <span> {this.props.data.firstname}</span>
          <span> {this.props.data.lastname}</span>
        </div>
      );
    }
  }
  
  class UserForm extends React.Component {
    render() {
      return (
        <fieldset>
          <legend>Register User</legend>
          <form onSubmit={this.props.handleSubmit}>
            <label>
              FirstName:
              <input name="firstname" />
            </label>
            <br />
            <br />
            <label>
              LastName:
              <input name="lastname" />
            </label>
            <br />
            <br />
            <button type="submit">Save</button>
          </form>
        </fieldset>
      );
    }
  }