import React from 'react'
import UserClass from './UserClass';



class About extends React.Component{
  constructor(props){
    super(props);

    console.log("constructor");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  render(){
    console.log("render");
    return (
      <div>
      <h1>About Us</h1>
      <h2>This is the About us page of Namaste Foods.....</h2>
      {/* <User name={"Aman Chandel(functional Component)"}/> */}
      <UserClass name={"Aman Chandel(class)"} location={"Patna class"}/>
    </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is the About us page of Namaste Foods.....</h2>
//       {/* <User name={"Aman Chandel(functional Component)"}/> */}
//       <UserClass name={"Aman Chandel(class)"} location={"Patna class"}/>
//     </div>
//   )
// }

export default About