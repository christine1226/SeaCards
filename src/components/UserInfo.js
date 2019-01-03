import React from 'react'
import {Image} from 'cloudinary-react';
import { withRouter } from 'react-router-dom'
import ImgUpdate from './ImgUpdate'

class UserInfo extends React.Component{

  imgClick = () => {
    this.props.history.push('/ImgUpdate')
  }
  render(){
    console.log(this.props.user.user.avatar)
    return(
      <div className='user'>
        <h2>{this.props.user ? this.props.user.user.child_username : null}</h2>
        <Image onClick={this.imgClick} cloudName="dbos8u0cz" publicId={this.props.user.user.avatar ? this.props.user.user.avatar : "sample"} width="300" crop="scale"/>
      </div>
    )
  }
}
export default withRouter(UserInfo)
