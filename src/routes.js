import React from "react";
import {Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Usuario from "./components/pages/Usuario";

const Routes = () => {
    return(
        <BrowserRouter>  
            <Route component = {Home} path = "/" exact />
            <Route component = {Sobre} path = "/sobre" />
            <Route component = {Usuario} path = "/usuario" />
        </BrowserRouter>
    )
}

export default Routes;