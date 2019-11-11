import React, { Component } from 'react'
import apiKey from './apiKey'

// // for later...maybe...
const baseApiUrl = `https://pixabay.com/api/?key=${apiKey}&category=nature&safesearch=true&q=`
//
//
// fetch(baseApiUrl)
//   .then(res => res.json())
//   .then(pics => {
//     const randomImageURL = pics.hits[0].webformatURL
//     console.log(randomImageURL)
//   })

class MyControlledInput extends Component {
  constructor(props) {
    super(props)
    this.state = { inputText: "", imageUrl: "" }
  }

  handleInputChange = (e) => {
    const newInput = e.target.value
    this.setState(function(){
      return {inputText: newInput}
    }, function() {
      const searchTerm = this.state.inputText.replace(" ", "+")
      fetch(`${baseApiUrl}${searchTerm}`)
        .then(res => res.json())
        .then(pics => {
          if (pics.hits[0]) {
            console.log(pics)
            const randomImageURL = pics.hits[0].webformatURL

            console.log(randomImageURL)
            this.setState({imageUrl: randomImageURL})
          }
        })
    })
    // console.log(this.state)
  }

  render() {
    return (
      <div className="controlled-input-wrapper">
        <input type="text" onChange={this.handleInputChange} value={this.state.inputText}></input>
        <p>You typed: {this.state.inputText}</p>
        <img src={this.state.imageUrl} />
      </div>
    )
  }
}

export default MyControlledInput
