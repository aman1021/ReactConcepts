import React from "react"
import  ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"/>
      </div>

      <div className="nav-items">
        <ul>
          {/* {nav items is a list so we are using uoordered list amd list tag} */}
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resList = [
  {
  res:"Aman's Cafe",
  cuisine: ["Biryani", "North Indian", "Asian"],
  rating: "4.6",
  deliveryTime: 30,
  id: 1
},
{
  res:"Aman's Cafe",
  cuisine: ["Biryani", "North Indian", "Asian"],
  rating: "4.6",
  deliveryTime: 30,
  id: 2
},
{
  res:"Aman's Cafe",
  cuisine: ["Biryani", "North Indian", "Asian"],
  rating: "4.6",
  deliveryTime: 30,
  id: 3
},
{
  res:"Aman's Cafe",
  cuisine: ["Biryani", "North Indian", "Asian"],
  rating: "4.6",
  deliveryTime: 30,
  id: 4
},
{
  res:"Aman's Cafe",
  cuisine: ["Biryani", "North Indian", "Asian"],
  rating: "4.6",
  deliveryTime: 30,
  id: 5
}
]

const RestaurantCard = (props) => {
  const {resData} = props
  const {res, cuisine, deliveryTime, rating} = resData;
  return (
    <div className="res-card">
      <img className="resimg" alt="res-coffee" src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg"/>
      <h3>{res}</h3>
      <h4> {cuisine.join(", ")} </h4>
      <h4> {deliveryTime} minutes</h4>
      <h4> {rating} stars</h4>
    </div>
  )
}

// console.log(resList)

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData = {restaurant}/>
          ))}
      </div>
    </div>
  )
}

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
