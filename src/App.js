import React from "react";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";

import Contact from "./components/Contact";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const LazyAbout=React.lazy(()=>import ('./components/About'))

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<React.Suspense fallback="loading..."><LazyAbout/></React.Suspense>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Success" element={<Success/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
