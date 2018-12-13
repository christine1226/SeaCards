import React from 'react'

export default class Nav extends React.Component{
  render(){
    return (
      <div class="ui secondary pointing menu">
        <a href="homepage"class="active item">
          Title
        </a>
        <div class="right menu">
          <a href="login" class="ui item" onClick={this.props.handleLogClick}>
            Login / Signup
          </a>
        </div>
        </div>
    )
  }
}
