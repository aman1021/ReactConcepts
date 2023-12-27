import React from "react"
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

// const parent = React.createElement(
//   "div",{ id: "parent" },
//   React.createElement(
//     "div",{ id: "child" },
//     [
//       React.createElement("h1", {}, "I am H1 Tag and This is Namaste React🚀"),
//       React.createElement("h2", {}, "I am H2 Tag"),
//     ] // to create siblings we need to from an array.
//   )
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //children and attributes combinely forms props
//   "Hello world from React!" //children which goes inside h1 tag
// ); //creating an html tag

// console.log(heading); //gives us an object.

const root = ReactDOM.createRoot(document.getElementById("root")); // everything that we will render , will be inside the root

root.render(<AppLayout/>);
