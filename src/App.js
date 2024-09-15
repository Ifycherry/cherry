import { Component } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.css';

export default class App extends Component{
  render(){
    return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}
// export default App;