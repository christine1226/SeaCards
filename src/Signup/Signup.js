import React from 'react'
import Login from './Login'
import { signupUser } from '../store/action/userAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'



class Signup extends React.Component{
  state={
    click: false
  }

  onClickHandler = (e) =>{
    e.preventDefault()
    this.setState({
      click: true
    })
  }

  signupSubmit = (event) => {
    event.preventDefault()
    this.props.signupUser(event)
    this.props.history.push('/activity')
  }


  render(){
    if(this.state.click === false){
    return(
      <form onSubmit={this.signupSubmit}>
      <div className="ui segment first">
        <div className="form" class="ui form">
        <h1>Signup</h1>
          <div className="field">
            <label>Parent Name</label>
            <input placeholder="Parent Name" name="parentName" type="text" />
          </div>
            <div className="field">
            <label>Parent E-mail</label>
            <input placeholder="Parent Email" name="parentEmail" type="text" />
          </div>
          <div className="field">
            <label>Child Username</label>
            <input placeholder="Child Username" name="childUsername" type="text" />
          </div>
          <div className="field">
            <label>Password</label>
            <input placeholder="Password" name="password" type="password" />
          </div>
        <button type="submit" className="ui submit button">Submit</button>
        <a href='/login' onClick={this.onClickHandler}>Already a registered?</a>
        </div>
      </div>
    </form>)} else {
        return (<Login />)
    }

}
// <Link to='/login' onClick={this.onClickHandler}>Already a registered?</Link>
// else {
  //   return(<Login loginHandler={this.props.loginHandler} />)}
  // }
// return(
//   <form onSubmit={this.SignupSubmit}>
//   <div class="ui segment first">
//   <div className="form" class="ui form">
//   <h1>Signup</h1>
//   <div class="field">
//   <label>Parent Name</label>
//   <input placeholder="Parent Name" name="parentName" type="text" />
//   </div>
//   <div class="field">
//   <label>Parent E-mail</label>
//   <input placeholder="Parent Email" name="parentEmail" type="text" />
//   </div>
//   <div class="field">
//   <label>Child Username</label>
//   <input placeholder="Child Username" name="childUsername" type="text" />
//   </div>
//   <div class="field">
//   <label>Password</label>
//   <input placeholder="Password" name="password" type="password" />
//   </div>
//   <button type="submit" class="ui submit button">Submit</button>
//
//   <a href=>Already a registered?</a>
//   </div>
//   </div>
//   </form>)
// }
// {this.state.click && <Login />}
}
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (event) => dispatch(() => (signupUser(dispatch, event)))
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))
