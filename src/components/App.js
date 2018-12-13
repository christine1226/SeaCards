import React, { Component } from 'react';
import './App.css';
import HomePageContainer from './HomePageContainer'
import '/Users/christinescomputer/Documents/big-title/node_modules/semantic-ui/dist/semantic.min.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import ActivitiesContainer from './ActivitiesContainer'

class App extends Component {
  state={
    user: {},
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      fetch('http://localhost:3000/api/v1/current_user/', {
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        },
      })
      .then(res => res.json())
      .then(console.log)
      this.props.history.push('/activity')
    } else {
      this.props.history.push('/homepage')
    }
  }

  signupSubmit = (e, userObj) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user:{
          parent_name: userObj.parentName,
          parent_email: userObj.parentEmail,
          child_username: userObj.childUsername,
          password: userObj.password
        }
      })
    })
    .then(res => res.json())
    .then(user =>
      {localStorage.setItem('token', user.id)
      this.setState({
        user: user
    })}
    )
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/homepage' render={() => <HomePageContainer signupSubmit={this.signupSubmit} user={this.state.user} />}/>
          <Route path='/activity' render={() => <ActivitiesContainer />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
