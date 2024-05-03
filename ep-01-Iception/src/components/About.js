import React from 'react'
import User from "./User"
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is the About us page of Namaste Foods.....</h2>
      <User name={"Aman Chandel(functional Component)"}/>
      <UserClass name={"Aman Chandel(class)"} location={"Patna class"}/>
    </div>
  )
}

export default About