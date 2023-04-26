import { BrowserRouter, Link, Route, Routes  ,Navigate  } from 'react-router-dom';
import React from "react";
import Footer from "./components/Sections/Footer"
import TopNavbar from "./components/Nav/TopNavbar";
//import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Products from './components/Products/Products.jsx';


function App() {
  return (
    <div className="App">
   
  

    <Landing />


    </div>
  );
}

export default App;
