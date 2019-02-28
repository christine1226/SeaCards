import React from 'react'
import Nav from '../components/Nav'
import ActivityCollection from '../components/ActivityCollection'
import UserInfo from '../components/UserInfo'
import { connect } from 'react-redux'
import { getCurrentUser} from '../store/action/userAction'
import { withRouter } from 'react-router-dom'
import { getFlashcard } from '../store/action/flashCardAction'

class ActivitiesContainer extends React.Component{

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getCurrentUser(token)
      this.props.history.push('/activity')
    } else {
      this.props.history.push('/homepage')
    }
  }


  onclick = (e) => {
  if(e.target.alt === 'spelling'){
    this.props.history.push('/flashcard')
  } else if(e.target.alt === 'numbers') {
    e.preventDefault()
    this.props.history.push('/number')
  } else if(e.target.alt === 'speech'){
    this.props.history.push('/speech')
  }
}

  render(){
    return(
      <div>

      <Nav user={this.props.user} parent='https://images.cooltext.com/5239476.png' />
      <center><img className="header" src="https://images.cooltext.com/5233399.png" alt="" /></center>
      <div className='main-wrap'>
      <UserInfo user={this.props.user} />
      <ActivityCollection onclick={this.onclick} />

      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token))),
      getFlashcard: () => dispatch((dispatch) => (getFlashcard(dispatch)))
  }
}

const mapStateToProps = (state) => {
  return  {user: state.user, activity: state.activity}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer))
