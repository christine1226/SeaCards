import React from 'react'
import Nav from './Nav'
import { withRouter } from 'react-router-dom'

class Flashcard extends React.Component{
  constructor(props){
    super(props)
    this.handleInput = this.handleInput
    this.input = React.createRef()
  }

  handleInput = (e) => {
    e.preventDefault()
    let all = this.props.activity.map(word => word.question.toLowerCase())
    console.log(all)
    if (all.includes(this.input.current.value.toLowerCase())){
      alert('Correct answer for: ' + this.input.current.value)
      this.props.history.push('/flashcard')
    } else {
      alert('youll get the next one 😕')
      this.props.history.push('/flashcard')
    }
  }



  click = () => {
    this.props.history.push('/flashcard')
  }

  render(){
    let idx = Math.floor(Math.random() * this.props.activity.length);
    let game = this.props.activity[idx];

    return(
      <div>
        <Nav user={this.props.user} />
        <div className="game-card">
        <img img height='100%' width='100%' src={game ? game.img_url : null} />
        <center><h1>{game ? game.question : null}</h1></center>
        <form  onSubmit={this.handleInput} >
        <center><input type='text' ref={this.input} /></center>
        <input type="submit" />
        </form>
        <button onClick={this.click}>Next</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Flashcard)


// <img src={this.props.activity.map(res => {
//   return res.img_url
// })} />
