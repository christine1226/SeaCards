import React from 'react'
import { withRouter } from 'react-router-dom'
import { getCurrentUser} from '../store/action/userAction'
import { connect } from 'react-redux'

class NoMatch extends React.Component{

  clicked = () => {
    let token = localStorage.getItem('token')
    if (token){
      this.props.getCurrentUser(token)
      this.props.history.push('/activity')
    } else {
      this.props.history.push('/homepage')
    }
  }

  render(){
    return(
      <div className="img-page">
        <h2>Theres nothing here 😕</h2>
        <center><button className="ui red button" onClick={this.clicked}>Go Back</button></center>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch((token)=>(getCurrentUser(dispatch, token)))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(NoMatch))
