// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textValue: ''}

  onAddingChars = event => {
    const newText = event.target.value
    this.setState({textValue: newText})
  }

  render() {
    const {textValue} = this.state
    const count = textValue.length
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-image"
        />
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="description" htmlFor="userInput">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input-text"
            onChange={this.onAddingChars}
            id="userInput"
          />
          <br />
          <p className="button">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
