import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  showNumberOfLetters = event => {
    const phraseLength = event.target.value.length
    this.setState({count: phraseLength})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="textInput" className="instruction">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="text-input"
            id="textInput"
            onChange={this.showNumberOfLetters}
          />
          <p className="letters-count">No.of letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
