import React from 'react'

export default class Login extends React.Component{
  state={
    parentName: '',
    parentEmail: '',
    childUsername: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return(
      <form onSubmit={(e) => this.props.SignupSubmit(e, this.state)}>
        <h1>Signup</h1>
          <div class="ui segment">
            <div class="ui form">
              <div class="field">
                <label>Parent Name</label>
                <input placeholder="Parent Name" name="parentName" type="text" value={this.state.parentName} onChange={this.onChange}/>
              </div>
                <div class="field">
                <label>Parent E-mail</label>
                <input placeholder="Parent Email" name="parentEmail" type="text" value={this.state.parentEmail} onChange={this.onChange}/>
              </div>
              <div class="field">
                <label>Child Username</label>
                <input placeholder="Child Username" name="childUsername" type="text" value={this.state.childUsername} onChange={this.onChange}/>
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
