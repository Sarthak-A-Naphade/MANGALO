import React, { Component } from 'react'
import '../css/AboutCSS.css';
import UserClass from './UserClass';

class About extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    // console.log("parent constructor")
  }

  componentDidMount(){
    // console.log("parent componentDidMount")
  }

  render() {
    // console.log("parent render")
    return (
      <div>
          <h1>About us</h1>
          <UserClass name={'1 (Class)'} location={'Gujarat (Class)'}/>
      </div>
    )
  }
}

export default About;