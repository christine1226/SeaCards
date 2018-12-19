import React from 'react'

export default class UserInfo extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className='user'>
        <h2>{this.props.user ? this.props.user.child_username : null}</h2>
      </div>
    )
  }
}
