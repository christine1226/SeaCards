import React from 'react'
import Nav from '../components/Nav'
import Signup from '../Signup/Signup'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentUser} from '../store/action/userAction'

class HomePageContainer extends React.Component{
  state={
    logClick: false,
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getCurrentUser(token)
      this.props.history.push('/activity')
    }
  }

  handleLogClick = (e) => {
    e.preventDefault()
    this.setState({
      logClick: true
    })
  }

  render(){
    return (
      <div>
        <Nav handleLogClick={this.handleLogClick} />
        <center><img alt="" className="header" src="https://images.cooltext.com/5233365.png" /></center>
        <div className="home-wrap">
          <img src='active.png' alt="" />
        </div>
        {this.state.logClick && <Signup SignupSubmit={this.props.signupSubmit} />}
      </div>
    )
  }

}
const mapDispatchToProps = (dispatch) => {
  return{
    getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token)))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(HomePageContainer))
