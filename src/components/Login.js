import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loginUser } from '../store/action/userAction'
import { Link } from 'react-router-dom'


class Login extends React.Component{

  login = (event) => {
    event.preventDefault()
    this.props.loginUser(event)
    this.props.history.push('/activity')
  }



  render(){
    return(
      <form onSubmit={this.login}>
      <div className="form" className="ui segment first">
        <div className="ui form">
        <h1>Login</h1>
          <div className="field">
            <label>Parent E-mail</label>
            <input placeholder="Parent E-mail" name="parentEmail" type="text"  />
          </div>
            <div className="field">
              <label>Password</label>
              <input placeholder="Password" name="password" type="password"  />
            </div>
              <button type="submit" className="ui submit button">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (event) => dispatch(() => (loginUser(dispatch, event)))
  }
}


export default withRouter(connect(null, mapDispatchToProps)(Login))
