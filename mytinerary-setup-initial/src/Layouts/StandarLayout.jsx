import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

function StandarLayout(params) {
    return (
        <>
 <Header></Header>

    <Outlet></Outlet>

 <Footer></Footer>
        </>
    );
}

export { StandarLayout };