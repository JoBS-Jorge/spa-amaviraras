import './cardLoginStyles.css'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../input/Input';
import Mail from '../../assets/mail.svg';
import Unlock from '../../assets/unlock.svg';
import { useState } from 'react';
import { api } from '../../services/api';



const CardLogin = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [userExist, setUserExist] = useState('')
    let loged = false
    const navigate = useNavigate()

    function loginValidate (login, senha, loged){
        const dadosAcesso = [login, senha]
        let isLoged = loged
        console.log(dadosAcesso)

        api.get('/users').then((response) => {setUserExist(response.data)})
        
        let activeUser = userExist.find(user => user.email === login);
        console.log(activeUser)
        
        if(login === activeUser.email && senha === activeUser.password){
            console.log("Usuário autenticado")
            isLoged = true;
            
            navigate("/logged")
            return isLoged
        } else {
            console.log("Dados inválidos! Tente novamente.")
            return isLoged
        }

    }

    const handleLogin = (login) => {
        setLogin(login);
    }
    const handleSenha = (senha) => {
        setSenha(senha);
    }

    return(
        <div className="card_container">
            <div className='card_title'>
                <h1>JÁ POSSUI CADASTRO?</h1>
            </div>
            <div className='card_description'>
                <p>Faça o Login e acesse as suas informações_</p>
            </div>
            <div className='card_inputs'>
                <Input img={Mail} inputType='text' msg='email' value={login} handleInput={handleLogin} />
                <Input img={Unlock} inputType='password' msg='senha' value={senha} handleInput={handleSenha} />
                <button className='card_button' onClick={() => navigate("/logged")/*loginValidate(login, senha, loged)*/}>ENTRAR</button>
                {/* <span><Link className='linkToCriar' to={'/logged'}>teste.</Link></span> */}
            </div>
            <div className='card_options'>
                <div className='card_options_items'>
                    <span><Link className='linkToSenha' to={'/esqueciminhasenha'}>Esqueci minha senha.</Link> </span>
                    <span><Link className='linkToCriar' to={'/'}>Criar conta.</Link> </span>
                </div>
                

                <p>Para saber mais sobre as <a href='#'>Políticas de Privacidade</a> e os <a href='#'>Termos de Uso</a> da AMAVIRARAS, <a href='#'>acesse aqui.</a> </p>
            </div>
        </div>
    )
}

export default CardLogin;