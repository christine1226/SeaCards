import React from 'react'
import Nav from './Nav'

export default class Flashcard extends React.Component{



  render(){
    let idx = Math.floor(Math.random() * this.props.activity.length);
    let game = this.props.activity[idx];
    console.log(game)
    // console.log(this.props.game);
    return(
      <div>
        <Nav user={this.props.user} />
        <div className="game-card">
        <img img height='100%' width='100%' src={game ? game.img_url : null} />
        <center><h1>{game ? game.question : null}</h1></center>
        <center><input type='text' placeholder='Type word here' /></center>
        <button onClick={this.click}>Next</button>
        </div>
      </div>
    )
  }
}


// <img src={this.props.activity.map(res => {
//   return res.img_url
// })} />
