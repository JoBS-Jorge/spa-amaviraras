import './newUser.css'
import Menu from '../../components/menu/menu'
import Input from '../../components/input/Input'
import Mail from '../../assets/mail.svg';
import User from '../../assets/user.svg';
import Tag from '../../assets/tag.svg';
import Unlock from '../../assets/unlock.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from "../../services/api";

const NewUser = () => {
    class Usuario {
        constructor(name, email, password, access) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.access = access
        }
    }

    const [user,setUser] = useState('')
    const [mail,setMail] = useState('')
    const [acesso,setAcesso] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleUser = (user) => {
        setUser(user)
    }

    const handleMail = (mail) => {
        setMail(mail)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleAcesso = (acesso) => {
        setAcesso(acesso)
    }

    const submitDados = (user, mail, password, acesso) => {
        console.log(`Usuário: ${user} | E-mail: ${mail} | Senha: ${password} | Acesso: ${acesso}`);

        const newUser = new Usuario(user, mail, password, acesso);
        JSON.stringify(newUser);

        api.post('/users', newUser).then((response)=>{
            console.log(response.data)
            console.log("Cadastro realizado!")            
        })
        setUser('')

    }

    return (
        <>
            <div className="container_novo_usuario">
                <Menu/>
                <div className="page_novo_usuario_container">
                    <div className='card_novo_usuario_container'>
                        <h1 className='card_novo_usuario_title'>Novo Usuário</h1>
                        <form className='card_novo_usuario_inputs' action="">
                            <p>Digite o seu e-mail para recuperar o acesso_</p>
                            <Input img={User} inputType='text' msg='nome' value={user} handleInput={handleUser}/>
                            <Input img={Mail} inputType='text' msg='email' value={mail} handleInput={handleMail}/>
                            <Input img={Tag} inputType='text' msg='Permissão' value={acesso} handleInput={handleAcesso}/>
                            <Input img={Unlock} inputType='password' msg='Senha' value={password} handleInput={handlePassword}/>
                        </form>
                        <button className='card_button' onClick={()=>submitDados(user, mail, password, acesso)}>Cadastrar</button><button className='card_button' onClick={()=>navigate("/logged")}>Voltar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewUser;