import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Catalogo from "../pages/Catalogo/Catalogo"
import EsqueciMinhaSenha from "../pages/EsqueciMinhaSenha/EsqueciMinhaSenha";
import NewUser from "../pages/NewUser/NewUser";
import NewDesease from "../pages/NewDesease/NewDesease";
import Logged from "../pages/Logged/Logged";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/esqueciminhasenha" element={<EsqueciMinhaSenha />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/newdesease" element={<NewDesease />} />
                <Route path="/logged" element={<Logged />} />
                {/* <Route path="/*" element={<NotFoundPage />} /> */}
            </Routes>
        </>
    )
}

export default Router;