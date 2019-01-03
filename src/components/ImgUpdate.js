import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class ImgUpdate extends React.Component{
  state={
    img: ''
  }

  showWidget = (widget) =>{
    widget.open()
  }
  handleSubmit = (res) => {
    let token = localStorage.getItem('token')
    fetch('http://localhost:3000/api/v1/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        user:{
          avatar: res
        }
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  checkUploadResult = (resultEvent, widget) => {
    console.log(resultEvent.info.secure_url)
      if (resultEvent.event === 'success'){
      widget.close()
      this.setState({ img: resultEvent.info.secure_url}, this.handleSubmit(resultEvent.info.secure_url))}
  }


  render(){
    console.log(this.state)
    let widget = window.cloudinary.createUploadWidget({cloudName: "dbos8u0cz", uploadPreset: "yyaxlw0a" }
     , (error, result) => {this.checkUploadResult(result, widget)}
   );
    return(
      <div>
        <Nav user={this.props.user} />
        <h2>Add a new picture!</h2>
        {this.showWidget}
        <button onClick={()=> this.showWidget(widget)}>Click to upload photo! </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return  {user: state.user, activity: state.activity.activity}
}
export default connect(mapStateToProps)(ImgUpdate)
