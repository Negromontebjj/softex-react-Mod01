import React from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import {} from "react-dom";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Usuario from "./components/pages/Usuario";

const Rotas = () => {
    return(
        <BrowserRouter> 
            <Routes> 
                <Route element = {<Home/>} path = "/" exact />
                <Route element = {<Sobre />} path = "/sobre" />
                <Route element = {<Usuario />} path = "/usuario" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;