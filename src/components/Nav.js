import React from 'react'
import { connect } from 'react-redux'

class Nav extends React.Component{
  render(){
    // console.log("nav", this.props.user)
    return (
      <div>
      <ul className="nav">
        <li>
        <a href="homepage">
          <img alt="" src="https://images.cooltext.com/5233387.png" />
        </a>
        </li>
        <li>
          <a href="login" className="log" onClick={this.props.handleLogClick}>
            {this.props.user ? <img src="https://images.cooltext.com/5233419.png" alt="" /> : <img src="https://images.cooltext.com/5233390.png" alt="" />}
          </a>
        </li>
        </ul>
        </div>
    )
  }
}

// const mapStateToProps = (state) => {
//
//   return {
//     user: state
//   }
// }
export default Nav
