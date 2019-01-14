import React from 'react'
import { withRouter } from 'react-router-dom'
import { clearUser } from '../store/action/userAction'
import { connect } from 'react-redux'

class Nav extends React.Component{

   handleClick = (e) => {
     e.preventDefault()
     this.props.history.push('/ParentPortal')
   }

   logout = () => {
     localStorage.removeItem("token")
     this.props.logout()
     this.props.history.push('/homepage')
   }

  render(){
    return (
      <div>
      <ul className="nav">
        <li>
        <a href="activity">
          <img alt="" src="https://images.cooltext.com/5233387.png" />
        </a>
        </li>
        <li>
        <a className="parent-portal" href="ParentPortal" onClick={this.handleClick}>
        {this.props.parent ?  <img src="https://images.cooltext.com/5239486.png" alt=""/> : null}
        </a>
        </li>
        <li>
          <a className="log"  >
            {this.props.user ? <img onClick={this.logout} src="https://images.cooltext.com/5233419.png" alt="" /> : <img onClick={this.props.handleLogClick} src="https://images.cooltext.com/5233390.png" alt="" />}
          </a>
        </li>
        </ul>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(clearUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Nav))
