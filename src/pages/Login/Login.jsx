import React from "react";
import Menu from "../../components/menu/menu";
import CardPrincipal from "../../components/card_principal/card_principal";
import CardLogin from "../../components/card_login/card_login";

const Login = () => {
    let isLoged = false

    return(

        <div className="container">

            <>
                <Menu auth={isLoged}/>
                <div className="page_container">
                    <CardPrincipal/>
                    {isLoged? <p>usuário logado</p> :<CardLogin  />}
                </div>
            </>
                      
        </div>
    )
}

export default Login;