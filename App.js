/*
<div id="parent">
    <div id="child">
     <h1></h1>
     <h2></h2>
     </div>
</div>




*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I am H1 Tag"),
      React.createElement("h2", {}, "I am H2 Tag"),
    ] // to create siblings we need to from an array.
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //children and attributes combinely forms props
//   "Hello world from React!" //children which goes inside h1 tag
// ); //creating an html tag

// console.log(heading); //gives us an object.

const root = ReactDOM.createRoot(document.getElementById("root")); // everything that we will render , will be inside the root

root.render(parent);
