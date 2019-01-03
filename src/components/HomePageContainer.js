import React from 'react'
import Nav from './Nav'
import Signup from './Signup'

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
    return (
      <div>
        <Nav handleLogClick={this.handleLogClick} />
        <center><img alt="" className="header" src="https://images.cooltext.com/5233365.png" /></center>
        <div className="home-wrap">
          <img src='active.png' />
        </div>
        {this.state.logClick && <Signup SignupSubmit={this.props.signupSubmit} />}
      </div>
    )
  }

}
