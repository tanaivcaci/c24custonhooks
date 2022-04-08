import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Components
import Error from "./Views/Error_v/Error.jsx";
import Home from "./Views/Home/Home";
import Layout from "./MainLayout/Layout.jsx";
import User from "./Views/SingleUser/User";

const App = ()=>{
    return(
       <BrowserRouter>
        <Layout>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/users/:username" exact element={<User/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Layout>
       </BrowserRouter>
    )
}

export default App;
