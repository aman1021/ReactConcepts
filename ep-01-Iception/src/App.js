import React, {lazy, Suspense} from "react"
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app"> 
      <Header/>
      {/* This outlet is filled with the particular children(from approuter from below) according to the route path */}
      <Outlet/> 
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
])

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

root.render(<RouterProvider router={appRouter}/>);
