import React from 'react'
import Nav from './Nav'
import Score from './Score'
import { withRouter } from 'react-router-dom'
import { getFlashcard } from '../store/action/flashCardAction'
import { connect } from 'react-redux'

class Flashcard extends React.Component{
  state={
    score: 0,
    wrong: 0,
    input: React.createRef()
  }
  componentDidMount = () => {
    this.props.getFlashcard()
  }


  handleInput = (e) => {
    e.preventDefault()
    let all = this.props.activity.map(word => word.question.toLowerCase())
    console.log(all)
    if (all.includes(this.state.input.current.value.toLowerCase())){
      this.setState({
        score: Number(this.state.score)+10
      })
      this.speak('great job')
      alert('Correct answer for: ' + this.state.input.current.value)
      this.props.history.push('/flashcard')
      this.state.input.current.value = ''
    } else {
      e.preventDefault()
      this.setState({
        wrong: Number(this.state.wrong)+1
      })
      this.speak('lets try another word')
      alert('youll get the next one 😕')
      this.state.input.current.value = ''
      this.props.history.push('/flashcard')
    }
  }
  // return voice.name === 'Melina';
  speak = (text) => {
    var voiceGetter = setInterval(function() {
    var voices = speechSynthesis.getVoices();
    var voice = voices.filter(function (voice) {
      return voice.name === 'Google US English';
    })[0];
      if (voices.length !== 0) {
       var u = new SpeechSynthesisUtterance()
        u.text = text
        u.lang = 'en-US'
        u.voice = voice
        speechSynthesis.speak(u)
        clearInterval(voiceGetter)
      }
    },100)
  }

  finished = () => {
    fetch('http://localhost:3000/api/v1/activities/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({
        user: this.props.user,
        activity: "spelling"
      })
    })
    .then(res => res.json())
    .then(resp => this.submitActivity(resp))

    this.props.history.push('/activity')
  }

  submitActivity = (res) => {
    fetch('http://localhost:3000/api/v1/scores/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({
        score:
        {
          activity_id: res.activity_id,
          activity_name: res.activity_name,
          wrong_answer: this.state.wrong,
          correct_answer: this.state.score,
          user_id: this.props.user.parent_email
        }
      })
    })
    .then(res => res.json())
    .then(console.log)
  }


  click = () => {
    this.props.history.push('/flashcard')
  }

  render(){
    let idx = Math.floor(Math.random() * this.props.activity.length);
    let game = this.props.activity[idx];
    console.log(this.props.user)


    return(
      <div>
        <Nav user={this.props.user} />
        <div className='activity'>
          <Score score={this.state.score} />
          <div className="game-card">
          <center><img img height='400px' width='400px' src={game ? game.img_url : null } /></center>
          {game ? this.speak(`spell ${game.question}`) : 'null'}
          <center><h1>{game ? game.question : null}</h1></center>
          <center><form  onSubmit={this.handleInput} >
          <input type='text' ref={this.state.input} />
          <br />
          <button class="ui yellow button" type="submit" >Submit</button>
          </form></center>
          <center><button class="ui yellow button second" onClick={this.click}>Next</button>
          <button class="ui yellow button second" onClick={this.finished}>Done</button></center>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      getFlashcard: () => dispatch((dispatch) => (getFlashcard(dispatch)))
  }
}

const mapStateToProps = (state) => {
  return  {user: state.user.user, activity: state.activity.activity}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Flashcard))
