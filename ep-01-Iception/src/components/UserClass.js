
import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
       //we can create as many state variables inside the this.state
        this.state = {
            count: 0,
            count2: 1,
        }
        console.log("child constructor");
    }

    componentDidMount(){
        console.log("child component did mount")
    }

    render(){
        console.log("child render")
        return(
            <div className="user-card">
                <h1>count: {this.state.count}</h1>
                <button onClick = {()=> {
                    //NEVER UPDATE STATE VARIABLES DIRECTLY
                     this.setState({
                        count: this.state.count + 1
                     })
                }}>Increase count</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h3>Contact: chandeltwts</h3>
            </div>
        )
    }
}

export default UserClass;