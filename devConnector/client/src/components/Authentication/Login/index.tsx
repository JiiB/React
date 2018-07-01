import * as React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChangeHandler = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (event: any) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={event => this.onSubmitHandler(event)}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={event => this.onChangeHandler(event)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={event => this.onChangeHandler(event)}
                  />
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

export default Login;
