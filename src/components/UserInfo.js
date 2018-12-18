import React from 'react'

export default class UserInfo extends React.Component{
  render(){
    return(

      <div class="ui stackable cards">
      <div class="ui card">
        <div class="image">
          <div class="ui placeholder">
            <div class="square image"></div>
          </div>
        </div>
        <div class="content">
          <div class="ui placeholder">
            <div class="header">
              <div class="very short line"></div>
              <div class="medium line"></div>
            </div>
            <div class="paragraph">
              <div class="short line"></div>
            </div>
          </div>
        </div>
        <div class="extra content">
          <div class="ui disabled primary button">Add</div>
          <div class="ui disabled button">Delete</div>
        </div>
      </div>
    </div>
    )
  }
}
