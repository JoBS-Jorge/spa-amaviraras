import './styles.css'
import { Link } from 'react-router-dom';
import User from '../../assets/user.svg'
import Mail from '../../assets/mail.svg'
import Phone from '../../assets/phone.svg'
import Unlock from '../../assets/unlock.svg'
import Input from '../input/Input';
import { useState } from 'react';

const CardAcesso = (props) => {
    const [user,setUser] = useState('')
    const [mail,setMail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')

    const handleUser = (user) => {
        setUser(user)
    }

    const handleMail = (mail) => {
        setMail(mail)
    }

    const handlePhone = (phone) => {
        setPhone(phone)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const submitDados = (user, mail, phone, password) => {
        console.log(`Usuário: ${user} | E-mail: ${mail} | Telefone: ${phone} | Senha: ${password}`);
    }

    return(
        <div className="card_acesso_container">
            <div className='card_acesso_title'>
                <h1>SEJA UM ASSOCIADO AMAVIRARAS.</h1>
            </div>
            <div className='card_acesso_description'>
                <p>Crie a sua conta e tenha benefícios_</p>
            </div>
            <div className='card_acesso_inputs'>
                <Input img={User} inputType='text' msg='nome' value={user} handleInput={handleUser}/>
                <Input img={Mail} inputType='text' msg='email' value={mail} handleInput={handleMail}/>
                <Input img={Phone} inputType='text' msg='contato' value={phone} handleInput={handlePhone}/>
                <Input img={Unlock} inputType='password' msg='Senha' value={password} handleInput={handlePassword}/>
                <button className='card_acesso_button' onClick={()=>submitDados(user, mail, phone, password)}>criar minha conta agora.</button>
            </div>
            <div className='card_acesso_termos'>
                <p>Ao clicar em "criar minha conta agora", declaro que aceito as <a href='#'>Políticas de Privacidade</a> e os <a href='#'>Termos de Uso</a> da AMAVIRARAS.</p>
                <span>Já tenho conta. <Link to={'/login'}>Fazer Login.</Link> </span>
            </div>
        </div>
    )
}

export default CardAcesso;