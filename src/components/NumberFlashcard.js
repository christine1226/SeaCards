import React from 'react'
import Nav from './Nav'
import Score from './Score'
import { getNumberFlashcard } from '../store/action/flashCardAction'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser} from '../store/action/userAction'

class NumberFlashcard extends React.Component{
  state={
    score: 0,
    wrong: 0,
    flashcard: []
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getNumberFlashcard()
      this.currentFlashcard()
    } else {
      this.props.history.push('/homepage')
    }
  }

  click = () => {
    this.currentFlashcard()
  }

  currentFlashcard = () => {
    setTimeout(() => {
     console.log('Our data is fetched');
     let idx = Math.floor(Math.random() * this.props.activity.length);
     let game = this.props.activity[idx];
     this.setState({
       flashcard: game
     })
   }, 1000)

  }

  handleInput = (e, prevState, resp) => {
    e.preventDefault()
    console.log(prevState)
    if (prevState.flashcard.question === resp){
      this.setState({
        score: Number(this.state.score)+10
      })
      this.speak('great job')
      alert('Correct answer for: ' + resp)
      // this.props.history.push('/flashcard')
      this.currentFlashcard()

    } else {
      e.preventDefault()
      this.setState({
        wrong: Number(this.state.wrong)+1
      })
      this.speak('lets try another word')
      alert('youll get the next one 😕')
      this.currentFlashcard()
    }
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
        activity: "number"
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
          user_id: this.props.user.user.parent_email
        }
      })
    })
    .then(res => res.json())
    .then(console.log)
  }




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

  listen = (e) => {
    e.preventDefault()
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let recognition = new window.SpeechRecognition();
    recognition.interimResults = true
    recognition.lang = 'en-US'
    recognition.start()
    recognition.onresult = e =>{
      // console.log(e.results[0][0].transcript)
      let response = Array.from(e.results)
      let here = response.map(res => res[0].transcript)
      let resp = here.join([])
      console.log(resp)
      if(e.results[0].isFinal){
        recognition.stop()
        this.setState({
          input: resp
        }, this.handleInput(e, this.state, resp))
      }
    }
  }


  render(){
    return(
      <div>
      <Nav user={this.props.user} />
      <div className='activity'>
        <Score score={this.state.score} />
        <div className="game-card">
        <center><img img height='400px' width='400px' src={this.state.flashcard ? this.state.flashcard.img_url : null } /></center>
        {this.state.flashcard ? this.speak(`say ${this.state.flashcard.question}`) : 'null'}
        <center>
        <button class="ui green button" onClick={this.listen} >Speak</button>
        <br />
        <button onClick={this.finish} class="ui yellow button" type="submit" >Submit</button>
        </center>
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
    getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token))),
    getNumberFlashcard: () => dispatch((dispatch) => (getNumberFlashcard(dispatch)))
  }
}

const mapStateToProps = (state) => {
  return  {user: state.user, activity: state.activity.activity}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NumberFlashcard))
