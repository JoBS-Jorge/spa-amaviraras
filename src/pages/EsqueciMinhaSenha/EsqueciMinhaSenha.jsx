import './esqueciMinhaSenhaStyles.css'
import Menu from '../../components/menu/menu'
import Input from '../../components/input/Input'
import Mail from '../../assets/mail.svg';
import { useState } from 'react';

const EsqueciMinhaSenha = () => {
    const [login, setLogin] = useState('')

    const handleLogin = (login) => {
        setLogin(login);
    }
    return (
        <>
            <div className="container_esqueci_minha_senha">
                <Menu/>
                <div className="page_recuperar_senha_container">
                    <div className='card_recuperar_senha_container'>
                        <h1 className='card_recuperar_senha_title'>Esqueci minha senha</h1>
                        <form action="">
                            <p>Digite o seu e-mail para recuperar o acesso_</p>
                            <Input img={Mail} inputType='text' msg='Digite o seu e-mail' value={login} handleInput={handleLogin} />
                        </form>
                        <button className='card_button' onClick={() => console.log("e-mail enviado")}>Recuperar Senha</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EsqueciMinhaSenha;