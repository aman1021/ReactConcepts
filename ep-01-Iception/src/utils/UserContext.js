import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User"
})

export default UserContext; //We can use the context any where in any component without having it to be taken through props.