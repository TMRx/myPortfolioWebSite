import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero"
import Portfolio from "./components/portfolio/portfolio"
import Works from "./components/works/works"
import Testimonials from "./components/testimonials/testimonials"
import Contact from "./components/contact/bottom"
import "./App.scss"
import Menu from "./components/menu/menu"



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
    <div className="all">
    <Hero/>
    <Portfolio/>
    <Works/>
    <Testimonials/>
    <Contact/>
    </div>
    
    </div>
  );
}

export default App;
