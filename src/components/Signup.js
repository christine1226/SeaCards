import React from 'react'
import Login from './Login'

export default class Signup extends React.Component{
  state={
    parentName: '',
    parentEmail: '',
    childUsername: '',
    password: '',
    click: false
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onClickHandler = (e) =>{
    e.preventDefault()
    this.setState({
      click: true
    })
  }


  render(){
    if(this.state.click === false){
      return(
        <form onSubmit={(e) => this.props.SignupSubmit(e, this.state)}>
        <div class="ui segment first">
          <div className="form" class="ui form">
          <h1>Signup</h1>
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
          <a href="Login" onClick={this.onClickHandler}>Already a registered?</a>
          </div>
        </div>
      </form>)}
    else {
      return(<Login loginHandler={this.props.loginHandler} />)}


  }
}
