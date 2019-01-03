import React from 'react'
import { withRouter } from 'react-router-dom'

class Nav extends React.Component{

   handleClick = (e) => {
     e.preventDefault()
     this.props.history.push('/ParentPortal')
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
          <a href="login" className="log" onClick={this.props.handleLogClick} >
            {this.props.user ? <img src="https://images.cooltext.com/5233419.png" alt="" /> : <img src="https://images.cooltext.com/5233390.png" alt="" />}
          </a>
        </li>
        </ul>
        </div>
    )
  }
}


export default withRouter(Nav)
