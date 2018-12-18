import React from 'react'
import ActivityCard from './ActivityCard'


export default class ActivityCollection extends React.Component{
  render(){

    return(
      <div>
      <ActivityCard onclick={this.props.onclick} />
      </div>
    )
  }
}
