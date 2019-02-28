import React, { Component } from 'react';
import './App.css';
import '/Users/christinescomputer/Documents/big-title/node_modules/semantic-ui/dist/semantic.min.css'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import HomePageContainer from '../Containers/HomePageContainer'
import ActivitiesContainer from '../Containers/ActivitiesContainer'
import SpellingFlashcard from '../Flashcards/SpellingFlashcard'
import Login from '../Signup/Login'
import Signup from '../Signup/Signup'
import ParentPortal from '../Containers/ParentPortal'
import ImgUpdate from './ImgUpdate'
import NumberFlashcard from '../Flashcards/NumberFlashcard'
import SpeechFlashcard from '../Flashcards/SpeechFlashcard'
import NoMatch from './NoMatch'




class App extends Component {


  render() {
    return (
        <Router>
        <div className="body">
        <Switch>
          <Route path='/homepage' component = { HomePageContainer }/>
          <Route path='/activity' component={ ActivitiesContainer }/>
          <Route path='/flashcard' component={ SpellingFlashcard }/>
          <Route path='/login' component={ Login }/>
          <Route path='/ParentPortal' component={ ParentPortal }/>
          <Route path='/ImgUpdate' component={ ImgUpdate }/>
          <Route path='/number' component={ NumberFlashcard }/>
          <Route path='/speech' component={ SpeechFlashcard }/>
          <Route path='/signup' component={ Signup }/>
          <Route component={ NoMatch } />
          </Switch>
          </div>
        </Router>
    )
  }
}



const mapStateToProps = (state) => {
  return  {user: state.user}
}
export default connect(mapStateToProps)(App)
