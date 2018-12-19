import React from 'react'
import Nav from './Nav'
import ActivityCollection from './ActivityCollection'
import UserInfo from './UserInfo'
import Score from './Score'

export default class ActivitiesContainer extends React.Component{

  render(){
    return(
      <div>
        <Nav user={this.props.user} />
        <center><img className="header" src="https://images.cooltext.com/5233399.png" alt="" /></center>
        <div className='main-wrap'>
        <Score />
        <ActivityCollection onclick={this.props.onclick} />
        <UserInfo user={this.props.user} />

        </div>
      </div>
    )
  }
}
