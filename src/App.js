import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Components
import Home from "./Views/Home.js";
const App = ()=>{
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                   
            </Routes>
       </BrowserRouter>
    )
}

export default App;
