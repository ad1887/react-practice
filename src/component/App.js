import * as React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
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
    return <h2 style={custClass}>Header Section</h2>;
  }
}
class Content extends React.Component {
  arr = [];
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { firstname: "kevin", lastname: "jobs" },
        { firstname: "martin", lastname: "hopes" },
        { firstname: "brian", lastname: "lara" }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let defaultStateData = this.state.data;
    let formData = {};
    formData.firstname = e.target.firstname.value || '';
    formData.lastname = e.target.lastname.value || '';
    defaultStateData.unshift(formData);
    this.setState({'data': defaultStateData});
  }
  render() {
    return (
      <div>
        <h3>Content Section</h3>
        <UserForm data={this.state.data} handleSubmit={this.handleSubmit} />
        <div>
          <h4>Users List</h4>
          {this.state.data.map((data, i) => (
            <List key={i} data={data} dataIndex={i+1} />
          ))}
        </div>
      </div>
    );
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

export default App;
