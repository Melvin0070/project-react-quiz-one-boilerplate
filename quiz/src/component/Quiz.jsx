import React, { Component } from 'react'
import "./Quiz.css"
export default class Quiz extends Component {
  render() {
    return (
      <div>
            <div className="question">
            <h1>Question</h1>
            <div>
              <p className='questionNumber'>1 of 15</p>
              <h2>What is React</h2>
            </div>

            <div className="optionsContainer">
              <button className="option">Library</button>
              <button className="option">Framework</button>
              <button className="option">Server</button>
              <button className="option">None of these</button>
            </div>
  
            <div className="buttonsBox">
              <button className="previous">Previous</button>
              <button className="next">Next</button>
              <button className="quit">Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
