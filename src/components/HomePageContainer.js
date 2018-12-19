import React from 'react'
import Nav from './Nav'
import Signup from './Signup'
import ActivityCollection from './ActivityCollection'
import UserInfo from './UserInfo'
import Score from './Score'

export default class HomePageContainer extends React.Component{
  state={
    logClick: false,
  }

  handleLogClick = (e) => {
    e.preventDefault()
    this.setState({
      logClick: true
    })
  }

  render(){
    console.log("container", this.props.user)
    return (
      <div>
        <Nav handleLogClick={this.handleLogClick} user={this.props.user} />
        <center><img alt="" className="header" src="https://images.cooltext.com/5233365.png" /></center>
        <div className="home-wrap">
          <img src='active.png' />
        </div>
        {this.state.logClick && <Signup loginHandler={this.props.loginHandler} SignupSubmit={this.props.signupSubmit} />}
      </div>
    )
  }

}
