import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Components
import Error from "./Views/Error_v/Error.jsx";
import Home from "./Views/Home/Home";
import Layout from "./MainLayout/Layout.jsx";
import User from "./Views/SingleUser/User";
import Followers from "./Views/Followers/Followers.jsx";
import Following from "./Views/Following/Following.jsx";
import Repository from "./Views/Repos/Repository"

const App = ()=>{
    return(
       <BrowserRouter>
        <Layout>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/users/:username" exact element={<User/>}/>
                    <Route path="/users/:username/followers" exact element={<Followers/>}/>
                    <Route path="/users/:username/following" exact element={<Following/>}/>
                    <Route path="/users/:username/repos" exact element={<Repository/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Layout>
       </BrowserRouter>
    )
}

export default App;
