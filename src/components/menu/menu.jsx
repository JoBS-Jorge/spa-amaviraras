import './menuStyles.css'
import logoAmaviraras from '../../assets/logo-amavi-horizontal.svg'
import ArrowLeft from '../../assets/arrow-left-circle.svg'
import User from '../../assets/user.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Menu = (isLoged) => {
  const [showMenu, setShowMenu] = useState(isLoged.auth)
  // console.log(showMenu)

  useEffect(() => {
    
  }, [showMenu]);

    return (
      <nav className='navBar_conteiner'>
          <div className="navBar_leftSide">
            <Link className='linkTo' to={'/login'}> 
              <div className='navBar_leftSide_link'>
                <img src={ArrowLeft} alt='icone arrow left'/>
                <h1 className='navBar_descriptions'>voltar para Home</h1>                
              </div>
            </Link>
          </div>
          <div className="navBar_center">
            <a href="https://www.amaviraras.org/">
              <img src={logoAmaviraras} alt='logo amaviraras'/>
            </a>
          </div>
          <div>
            <a href='#'>
              <div className="navBar_rightSide_link">
              <img src={User} alt='icone usuário'/>
              { showMenu? <h1 className='navBar_descriptions'>Jorge Braz</h1> : <h1 className='navBar_descriptions'>login</h1>}
                
              </div>
            </a>
          </div>
          
      </nav>
    );
  }
  
  export default Menu;