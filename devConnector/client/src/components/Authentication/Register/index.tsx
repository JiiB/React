import * as React from "react";
import * as classNames from "classnames";
import axios from "axios";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {
      name: null,
      email: null,
      password: null,
      password2: null
    }
  };

  onChangeHandler = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (event: any) => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form noValidate onSubmit={event => this.onSubmitHandler(event)}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={event => this.onChangeHandler(event)}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.name}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classNames("form-control form-control", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={event => this.onChangeHandler(event)}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.email}
                  </div>
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classNames("form-control form-control", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={event => this.onChangeHandler(event)}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.password}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classNames("form-control form-control", {
                      "is-invalid": errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={event => this.onChangeHandler(event)}
                  />
                  <div className="invalid-feedback">
                    {this.state.errors.password2}
                  </div>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
