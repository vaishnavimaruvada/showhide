// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  showHideFirstname = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  showHideLastname = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  getFirstname = () => {
    const {firstname} = this.state

    return (
      firstname && (
        <div className="name-card">
          <p>Joe</p>
        </div>
      )
    )
  }

  getLastname = () => {
    const {lastname} = this.state

    return (
      lastname && (
        <div className="name-card">
          <p>Jonas</p>
        </div>
      )
    )
  }

  render() {
    return (
      <div className="bgcontainer">
        <h1>Show/Hide App</h1>
        <div className=".divc">
          <div className="container">
            <button
              className="button"
              type="button"
              onClick={this.showHideFirstname}
            >
              Show/Hide First name
            </button>
            {this.getFirstname()}
          </div>
          <div className="container">
            <button
              className="button"
              type="button"
              onClick={this.showHideLastname}
            >
              Show/Hide Last name
            </button>
            {this.getLastname()}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
