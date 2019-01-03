import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'


class ParentPortal extends React.Component{
  state={
    score: [],
    spelling: [],
    number: [],
    speech: []
  }
  componentDidMount = () => {

    fetch('http://localhost:3000/api/v1/progress')
    .then(res => res.json())
    .then(user_score => this.setState({score: user_score.score}, this.numbers))

  }

  handleEmail = () =>{

  }

  handleDelete = (e) => {
    e.preventDefault()
    console.log(e)
  }

  scores = () => {
    let scor = this.state.score.filter(score => score.activity_name == "spelling")
      this.setState({
        spelling: scor
      }, this.speech)
  }
  numbers = () => {
    let scoree = this.state.score.filter(score => score.activity_name == "number")
    console.log(scoree)
      this.setState({
        number: scoree
      }, this.scores)
  }

  speech = () => {
    let scoree = this.state.score.filter(score => score.activity_name == "speech")
    console.log(scoree)
      this.setState({
        speech: scoree
      })
  }


  render(){
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let scored = this.state.spelling.map(score => {
      return score.correct_answer
    })
    let spelling_scores = scored.reduce(reducer, 0)/10
    let num = this.state.number.map(score => {
      return score.correct_answer
    })
    let number_score = num.reduce(reducer, 0)/10
    let speech = this.state.speech.map(score => {
      return score.correct_answer
    })
    let speech_score = speech.reduce(reducer, 0)/10


    return(
      <div>
        <Nav user={this.props.user} />
        <div className="portal-container">
          <h1>ParentPortal</h1>
          <div className="activity-content">
          <div className="left">
            <h3>Spelling :</h3>
            <br/>
            <h3>Speech   :</h3>
            <br/>
            <h3>Numbers  :</h3>
            </div>
          <div className="right">
          <h4>{spelling_scores ? `${spelling_scores} correct answers` : "none"}</h4>
          <br/>
          <h4>{speech_score ? `${speech_score} correct answers `: "Not Available"}</h4>
          <br/>
          <h4>{number_score ? `${number_score} correct answers `: "Not Available"}</h4>
          </div>
          </div>
          <div className="portal-option">
            <a onClick={() => this.handleEmail()} href="Progress-Email">Request Progress E-mail</a>
            <a onClick={this.handleDelete} href="Delete">Delete Account</a>
            </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(ParentPortal)
