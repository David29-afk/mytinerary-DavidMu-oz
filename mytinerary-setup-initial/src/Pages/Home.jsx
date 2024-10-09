import React from "react";
import { Header } from "../Components/Header";
import { Helcome } from "../Components/Helcome";
import { Content } from "../Components/Carrousel";


function Home(params) {
    return (
        <>
<Helcome></Helcome>
<Content></Content>
        </>

    );
}

export { Home };