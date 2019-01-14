import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { getCurrentUser} from '../store/action/userAction'


class ParentPortal extends React.Component{
  state={
    score: [],
    spelling: [],
    number: [],
    speech: []
  }
  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getCurrentUser(token)
    } else {
      this.props.history.push('/homepage')
    }
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
    let scor = this.state.score.filter(score => score.activity_name === "spelling")
      this.setState({
        spelling: scor
      }, this.speech)
  }
  numbers = () => {
    let scoree = this.state.score.filter(score => score.activity_name === "number")
    console.log(scoree)
      this.setState({
        number: scoree
      }, this.scores)
  }

  speech = () => {
    let scoree = this.state.score.filter(score => score.activity_name === "speech")
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
    let spelling_wrong = this.state.spelling.map(score => {
      return score.wrong_answer
    })
    let wrong_spell = spelling_wrong.reduce(reducer, 0)
    let spelling_scores = scored.reduce(reducer, 0)/10



    let num = this.state.number.map(score => {
      return score.correct_answer
    })
    let num_wrong = this.state.number.map(score => {
      return score.wrong_answer
    })
    let wrong_num = num_wrong.reduce(reducer, 0)
    let number_score = num.reduce(reducer, 0)/10



    let speech = this.state.speech.map(score => {
      return score.correct_answer
    })
    let speech_score = speech.reduce(reducer, 0)/10
    let speech_wrong = this.state.speech.map(score => {
      return score.wrong_answer
    })
    let wrong_speech = speech_wrong.reduce(reducer, 0)


    return(
      <div>
        <Nav user={this.props.user} />
        <div className="portal-container">
        <div className="ui two column grid">
          <div className="column">
            <div className="card" class="ui segment second">
            <h1>Spelling</h1>
            <h3>Correct Answers:</h3>
            <h3>{spelling_scores ? spelling_scores : "none"}</h3>
            <h3>Wrong Answers:</h3>
            <h3>{wrong_spell ? wrong_spell : "none"}</h3>
            </div>
          </div>
          <div className="column">
          <div className="card" class="ui segment second">
            <h1>Numbers</h1>
            <h3>Correct Answers:</h3>
            <h3>{number_score ? number_score: "Not Available"}</h3>
            <h3>Wrong Answers:</h3>
            <h3>{wrong_num ? wrong_num: "Not Available"}</h3>
          </div>
          </div>
          <div className="column">
          <div className="card" class="ui segment second">
            <h1>Speech</h1>
            <h3>Correct Answers:</h3>
            <h3>{speech_score ? speech_score : "Not Available"}</h3>
            <h3>Wrong Answers:</h3>
            <h3>{wrong_speech ? wrong_speech : "Not Available"}</h3>
          </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
// <h1>ParentPortal</h1>
// <div className="activity-content">
// <div className="left">
//   <h3>Spelling :</h3>
//   <br/>
//   <h3>Speech   :</h3>
//   <br/>
//   <h3>Numbers  :</h3>
//   </div>
// <div className="right">
// <h4>{spelling_scores ? `${spelling_scores} correct answers` : "none"}</h4>
// <br/>
// <h4>{speech_score ? `${speech_score} correct answers `: "Not Available"}</h4>
// <br/>
// <h4>{number_score ? `${number_score} correct answers `: "Not Available"}</h4>
// </div>
// </div>
// <div className="portal-option">
//   <a onClick={() => this.handleEmail()} >Request Progress E-mail</a>
//   <a onClick={this.handleDelete} >Delete Account</a>
//   </div>
const mapDispatchToProps = (dispatch) => {
  return{
    getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token)))
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentPortal)
