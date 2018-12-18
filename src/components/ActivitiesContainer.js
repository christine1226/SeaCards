import React from 'react'
import Nav from './Nav'
import ActivityCollection from './ActivityCollection'
import UserInfo from './UserInfo'

export default class ActivitiesContainer extends React.Component{

  render(){
    return(
      <div>
        <Nav user={this.props.user} />
        <video src="../img/background_videos.mp4" autoplay="true"></video>
        <img className="header" src="https://images.cooltext.com/5233399.png" alt="" />
        <UserInfo />
        <ActivityCollection onclick={this.props.onclick} />
      </div>
    )
  }
}
