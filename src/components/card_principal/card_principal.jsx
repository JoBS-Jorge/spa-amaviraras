import './cardPrincipalstyles.css'
import maeMenina from '../../assets/mãe-e-menina.png'
import { Link } from 'react-router-dom'

const CardPrincipal = () => {
    return(
        <div className="card_principal_container">
            <div className='card_principal_container_img'>
                <img src={maeMenina} alt="Mãe e menina com sindrome de down"/>
            </div>
            <h1>RARO É SER IGUAL</h1>
            <p>
              A plataforma para você saber mais sobre as diversas Doenças Raras e encontrar apoio e suporte com quem mais entende dos assunto.
            </p>
            <span>
              {/* TODO: criar um if para verificar se está na página /Login e se estiver alterar o texto e link abaixo para tela de cadastro */}
              <Link className='linkTo' to={'/login'}>Acessar a tela de <strong>LOGIN</strong></Link> 
            </span>
            <button>
              <Link className='linkTocatalogo' to={'/catalogo'}>Acessar catálogo de doenças raras</Link>
            </button>
          </div>
    )
}

export default CardPrincipal;