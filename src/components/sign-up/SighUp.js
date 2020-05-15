import React from 'react';

export class SighUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.username = React.createRef();
    this.fullname = React.createRef();
    this.password = React.createRef();

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this);
  }
  render() {
    return (
      <div className="app__register-page">
        <div className="app__register-layout">
          <div className="app__register-form-container">
            <form className="app__register-form" onSubmit={this.handleSubmit}>
              <input type="email" ref="{email}" />
              <input type="text" ref="{username}" />
              <input type="text" ref="{fullname}" />
              <input type="password" ref="{password}" />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}