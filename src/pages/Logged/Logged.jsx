import React from "react";
import Menu from "../../components/menu/menu";
import CardPrincipal from "../../components/card_principal/card_principal";
import './loggedStyles.css'
import { Link, useNavigate } from "react-router-dom";

const Logged = () => {
    const navigate = useNavigate()
    return(
        <div className="container">
            <Menu auth="true"/>
            <div className="page_container">
                <CardPrincipal/>
                <div className='card_container'>
                    <div className='card_description'>
                        <p>O que deseja realizar?</p>
                    </div>
                        <button className='card_button'>
                            <Link className='linkTocatalogo' to={'/newuser'}>Novo Usuário</Link>
                        </button>
                        <span className="informations">Para cadastrar um novo usuário do sistema.</span>
                        <button className='card_button'>
                            <Link className='linkTocatalogo' to={'/newdesease'}>Novo Doença</Link>
                        </button>
                    <span className="informations">Para inserir uma nova doença em nossa base de dados.</span>

                    <button className='card_button' onClick={()=>navigate("/login")}>Sair</button>
                </div>

            </div>
        </div>
    )
}

export default Logged;