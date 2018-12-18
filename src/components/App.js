import React, { Component } from 'react';
import './App.css';
import HomePageContainer from './HomePageContainer'
import '/Users/christinescomputer/Documents/big-title/node_modules/semantic-ui/dist/semantic.min.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import ActivitiesContainer from './ActivitiesContainer'
import { connect } from 'react-redux'
import Flashcard from './Flashcard'
// import { mount } from '../action/action'


class App extends Component {
  state={
    user: null,
    activity: []
  }

  onclick = (e) => {
    console.log(e.target.alt)
    fetch('http://localhost:3003/flashcard')
    .then(res => res.json())
    .then(act =>
      this.setState({
      activity: act
    }))
    this.props.history.push('/flashcard')

  }

  // game = () => {
  //   let idx = Math.floor(Math.random() * this.state.activity.length);
  //   let game = this.state.activity[idx];
  //   return game
  // }


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
    .then(resp => this.setState({
      user: resp
    }))
    this.props.history.push('/activity')
  } else {
    this.props.history.push('/homepage')
  }
}

signupSubmit = (e, userObj) => {
  e.preventDefault()
  fetch('http://localhost:3000/api/v1/users/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
              Accepts: 'application/json'},
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
    {localStorage.setItem('token', user.user.id)
    this.setState({
      user: user.user
  }, this.componentDidMount(user))}
  )
}

  render() {

    return (
      <div className="body">
        <Switch>
          <Route path='/homepage' render={() => <HomePageContainer loginHandler={this.loginHandler} signupSubmit={this.signupSubmit}  />}/>
          <Route path='/activity' render={() => <ActivitiesContainer user={this.state.user} onclick={this.onclick} />}/>
          <Route path='/flashcard' render={() => <Flashcard user={this.state.user} activity={this.state.activity} />}/>
        </Switch>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state
//   }
// }
//
// const dispatchToProps = (dispatch) => {
//   return{
//      mount: (token) => dispatch(mount(token))
//   }
// }
//
// export default withRouter(connect(mapStateToProps, dispatchToProps)(App));
export default withRouter(App)
