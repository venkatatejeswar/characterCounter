import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'

class Counter extends Component {
  state = {textInput: '', textList: []}

  onCharInput = event => {
    this.setState({textInput: event.target.value})
  }

  onSaveText = event => {
    event.preventDefault()
    const {textInput} = this.state
    const string = {
      id: v4(),
      textValue: `${textInput}:${textInput.length}`,
    }
    if (textInput !== '') {
      this.setState(prevState => ({
        textList: [...prevState.textList, string],
        textInput: '',
      }))
    }
  }

  renderStrings = () => {
    const {textList} = this.state
    return (
      <ul className="strings_list">
        {textList.map(string => (
          <li key={string.id}>
            <p className="string">{string.textValue}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {textInput, textList} = this.state
    return (
      <div className="bg_container">
        <div className="app_container">
          <div className="char_container">
            <div className="title_container">
              <h1 className="char_title">
                Count the characters like a Boss . . .
              </h1>
            </div>
            <div className="result_container">
              {textList.length === 0 ? (
                <img
                  className="noInput_Img"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              ) : (
                this.renderStrings()
              )}
            </div>
          </div>
          <div className="counter_container">
            <h1 className="char_title">Character Counter</h1>
            <form className="input_container" onSubmit={this.onSaveText}>
              <input
                type="text"
                placeholder="Enter the characters here"
                className="input"
                onChange={this.onCharInput}
                value={textInput}
              />
              <button type="submit" className="save_btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
