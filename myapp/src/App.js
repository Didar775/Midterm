import React, { useState } from "react";
import { BrowserRouter , Route} from "react-router-dom";
import './styles/App.css' 
import Posts from "./pages/Posts"



function App() {

  return (
    <div>
      <Posts></Posts>
    </div>
  )
}

export default App;
