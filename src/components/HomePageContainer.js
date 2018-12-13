import React from 'react'
import Nav from './Nav'
import Login from './Login'

export default class HomePageContainer extends React.Component{
  state={
    logClick: false
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
        <h1>MainPage w Title</h1>
        {this.state.logClick && <Login SignupSubmit={this.props.signupSubmit} />}
      </div>
    )
  }

}
