import React from 'react'
import Flashcard from './Flashcard'
import { Route, withRouter} from 'react-router-dom'

class ActivityCard extends React.Component{


  render(){
    // <img src="https://images.cooltext.com/5233711.png" alt="m" />

    return(
      <div className='collection'>
      <div className="pick">Pick an Activity:</div>
      <div  class="ui two column grid">
        <div class="column">
          <div onClick={this.props.onclick} name="spelling" className="card" class="ui segment second">
            <center><img height="240" width="240" alt="spelling" src="https://media.giphy.com/media/ABpE5i7mftk6Q/giphy.gif" /></center>
            <center><h3>Spelling</h3></center>
          </div>
        </div>
        <div class="column">
          <div onClick={this.props.onclick} className="card" class="ui segment second">
            <center><img height="240" width="240" alt="numbers" src="https://i.pinimg.com/originals/5d/b6/8c/5db68cc680114bab1b25ca621db26dca.gif" /></center>
            <center><h3>Numbers</h3></center>
          </div>
        </div>
        <div class="column">
          <div onClick={this.props.onclick} className="card" class="ui segment second">
            <center><img height="240" width="240" alt="speech" src="https://media.giphy.com/media/NfpzZFtEECnYc/giphy.gif" /></center>
            <center><h3>Speech</h3></center>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default withRouter(ActivityCard)
