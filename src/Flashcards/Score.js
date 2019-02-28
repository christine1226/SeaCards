import React from 'react'

export default class Score extends React.Component{

  render(){
    return(
      <div className='score-card'>
        <h3>Your Score:</h3>
        <h3>{this.props.score}</h3>
      </div>
    )
  }


}
