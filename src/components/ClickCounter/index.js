// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">
          The Button has been clicked <br />
          <span className="span-element">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div>
          <button className="button-element" onClick={this.onClickMe}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
