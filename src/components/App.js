import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LogIn from "./login";
import Success from "./success";
export default function App(){
  return (
  
    <Router>
      <div class="page">
    <Routes >
      <Route path="/" element={<LogIn />}/>
    </Routes>
      </div>
    <Routes>
      <Route path="/success" element={<Success />}/>
    </Routes>
    </Router>
    
  )
}