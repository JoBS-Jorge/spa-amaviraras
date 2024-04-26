import React from "react";
import Menu from "../../components/menu/menu";
import CardPrincipal from "../../components/card_principal/card_principal";
import CardAcesso from "../../components/card_acesso/card_acesso";
import './homeStyles.css'

const Home = () => {
    return(
        <div className="container">
            <Menu/>
            <div className="page_container">
                <CardPrincipal/>
                <CardAcesso/>
            </div>
        </div>
    )
}

export default Home;