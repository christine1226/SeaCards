import React from 'react'
import Nav from '../components/Nav'
import Score from './Score'
import { withRouter } from 'react-router-dom'
import { getFlashcard } from '../store/action/flashCardAction'
import { connect } from 'react-redux'
import { getCurrentUser} from '../store/action/userAction'

class SpellingFlashcard extends React.PureComponent{
  state={
    score: 0,
    wrong: 0,
    input: '',
    flashcard: []
  }
  componentDidMount = () => {

    let token = localStorage.getItem('token')
    if (token){
      // this.props.getCurrentUser(token)
      this.props.getFlashcard()

      this.currentFlashcard()
    } else {
      this.props.history.push('/homepage')
    }
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


  handleInput = (e, prevState) => {
    e.preventDefault()
    console.log(prevState)
    if (prevState.flashcard.question === prevState.input || prevState.flashcard.question.toLowerCase() === prevState.input){
      this.setState({
        score: Number(this.state.score)+10
      })
      this.speak('great job')
      alert('Correct answer for: ' + prevState.input)
      // this.props.history.push('/flashcard')
      this.currentFlashcard()
      this.state.input = ''
    } else {
      e.preventDefault()
      this.setState({
        wrong: Number(this.state.wrong)+1
      })
      this.speak('lets try another word')
      alert('youll get the next one 😕')
      this.state.input = ''
      // this.props.history.push('/flashcard')
      this.currentFlashcard()
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
    // this.props.history.push('/flashcard')
    this.currentFlashcard()
  }

  change = (e) => {
    e.preventDefault()
    this.setState({
      input: e.target.value
    })
  }

  render(){
    console.log(this.state.flashcard)
    return(
      <div>
        <Nav user={this.props.user} />
        <div className='activity'>
          <Score score={this.state.score} />
          <div className="game-card">
          <center><img img height='400px' width='400px' src={this.state.flashcard ? this.state.flashcard.img_url : null } alt="" /></center>
          {this.state.flashcard ? this.speak(`spell ${this.state.flashcard.question}`) : 'null'}
          <center><h1>{this.state.flashcard ? this.state.flashcard.question : null}</h1></center>
          <center><form  onSubmit={(e) => this.handleInput(e, this.state)} >
          <input placeholder="type answer here" type='text' value={this.state.input} onChange={this.change}/>
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
    getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token))),
    getFlashcard: () => dispatch((dispatch) => (getFlashcard(dispatch)))
  }
}

const mapStateToProps = (state) => {
  return  {user: state.user.user, activity: state.activity.activity}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpellingFlashcard))
