import React from 'react'
import {Image} from 'cloudinary-react';
import { withRouter } from 'react-router-dom'


class UserInfo extends React.Component{

  imgClick = () => {
    this.props.history.push('/ImgUpdate')
  }
  render(){
    return(
      <div className='user'>
        <h2>{this.props.user.user ? this.props.user.user.child_username : null}</h2>
        <Image onClick={this.imgClick} cloudName="dbos8u0cz" publicId={this.props.user.user ? this.props.user.user.avatar : "sample"} width="300" crop="scale"/>
      </div>
    )
  }
}
export default withRouter(UserInfo)
