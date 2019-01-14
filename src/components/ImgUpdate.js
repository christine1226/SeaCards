import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { CloudinaryContext} from 'cloudinary-react';
import { getCurrentUser} from '../store/action/userAction'

class ImgUpdate extends React.Component{
  state={
    img: ''
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getCurrentUser(token)
    } else {
      this.props.history.push('/homepage')
    }
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
      if (resultEvent.event === 'success'){
      widget.close()
      this.setState({ img: resultEvent.info.secure_url}, this.handleSubmit(resultEvent.info.secure_url))}
  }


  render(){
    let widget = window.cloudinary.createUploadWidget({cloudName: "dbos8u0cz", uploadPreset: "yyaxlw0a" }
     , (error, result) => {this.checkUploadResult(result, widget)}
   );
    return(
      <div>
        <Nav user={this.props.user} />
        <div className="img-page">
          <h2>Hi, {this.props.user.user.child_username}! Click the green button to add a new picture!</h2>
          <iframe src="https://giphy.com/embed/3oEdvdEl6fCc53I0Za" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          {this.showWidget}
          <center><button class="ui green button" onClick={()=> this.showWidget(widget)}>Click to upload photo </button></center>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token)))
  }
}

const mapStateToProps = (state) => {
  return  {user: state.user, activity: state.activity.activity}
}
export default connect(mapStateToProps, mapDispatchToProps)(ImgUpdate)
