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
    wrong: 0
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getNumberFlashcard()
    } else {
      this.props.history.push('/homepage')
    }
  }

  click = () => {
    this.props.history.push('/number')
  }

  score = (e,response) => {
    console.log(response)
    e.preventDefault()
    let all = this.props.activity.map(word => word.question)
    if (all.includes(response)){
      this.speak('great job')
      this.setState({
        score: Number(this.state.score)+10
      })
      alert('Correct answer for: ' + response)
      setTimeout = (() => {this.props.history.push('/number')}, 10000)
    } else {
      e.preventDefault()
      this.speak('lets try another word')
      this.setState({
        wrong: Number(this.state.wrong)+1
      })
      alert('youll get the next one 😕')
      setTimeout = (() => {this.props.history.push('/number')}, 10000)
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
        this.score(e, resp)
      }
    }
  }


  render(){
    let idx = Math.floor(Math.random() * this.props.activity.length);
    let game = this.props.activity[idx];
    console.log(game)
    return(
      <div>
      <Nav user={this.props.user} />
      <div className='activity'>
        <Score score={this.state.score} />
        <div className="game-card">
        <center><img img height='400px' width='400px' src={game ? game.img_url : null } /></center>
        {game ? this.speak(`say ${game.question}`) : 'null'}
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
