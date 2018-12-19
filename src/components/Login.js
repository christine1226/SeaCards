import React from 'react'

class Login extends React.Component{
  state={
    parentEmail: '',
    password: ''
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={(e)=> this.props.loginHandler(e, this.state)}>
      <div className="form" class="ui segment first">
        <div class="ui form">
        <h1>Login</h1>
          <div class="field">
            <label>Parent E-mail</label>
            <input placeholder="Parent E-mail" name="parentEmail" type="text" value={this.state.parentEmail} onChange={this.onChange}/>
          </div>
            <div class="field">
              <label>Password</label>
              <input placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.onChange}/>
            </div>
              <button type="submit" class="ui submit button">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}
export default Login
