import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx"
import About from "./views/About.jsx"
import Contact from "./views/Contact.jsx"
import Blog from "./views/Blog.jsx"
import MainLayout from "./Layout/MainLayout.jsx";



const App = ()=>{
    return(
       <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/about" exact element={<About/>}/>
                    <Route path="/contact" exact element={<Contact/>}/>
                    <Route path="/blog" exact element={<Blog/>}/>
                </Routes>
            </MainLayout>
       </BrowserRouter>
    )
}

export default App;