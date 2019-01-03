import React, { Component } from 'react';
import './App.css';
import '/Users/christinescomputer/Documents/big-title/node_modules/semantic-ui/dist/semantic.min.css'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from '../store/action/userAction'
import HomePageContainer from './HomePageContainer'
import ActivitiesContainer from './ActivitiesContainer'
import Flashcard from './Flashcard'
import Login from './Login'
import Signup from './Signup'
import ParentPortal from './ParentPortal'
import ImgUpdate from './ImgUpdate'
import NumberFlashcard from './NumberFlashcard'
import SpeechFlashcard from './SpeechFlashcard'
import { withRouter } from 'react-router-dom'



class App extends Component {


  render() {
    return (
        <Router>
        <Switch>
          <div className="body">
          <Route path='/homepage' component = { HomePageContainer }/>
          <Route path='/activity' component={ ActivitiesContainer }/>
          <Route path='/flashcard' component={ Flashcard }/>
          <Route path='/login' component={ Login }/>
          <Route path='/ParentPortal' component={ ParentPortal }/>
          <Route path='/ImgUpdate' component={ ImgUpdate }/>
          <Route path='/number' component={ NumberFlashcard }/>
          <Route path='/speech' component={ SpeechFlashcard }/>
          </div>
          </Switch>
        </Router>
    )
  }
}




export default App
