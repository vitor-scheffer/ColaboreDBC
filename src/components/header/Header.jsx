import { LogoHeader } from '../logo/Logo'
import noUserImg from '../../imgs/no-user.jpeg'
import { HeaderContainer } from './Header.styled.js'
import { BiLogOut } from 'react-icons/bi'
import { Button } from "../button/Button"
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Header = ({userName, userImg}) => {
  const {handleLogout} = useContext(AuthContext)
  
  return (
    <HeaderContainer>
      <div>
        <LogoHeader />
        <div>
          <span>{userName}</span>
          <img src={userImg ? userImg : noUserImg} alt="Foto de perfil do usuário." />
          <Button id='logout'
          onClick={handleLogout}
          width="4.5rem"
          padding="0.5rem"
          background="transparent"
          border="1px solid white">
            <BiLogOut />Sair  
          </Button>
        </div>
      </div>  
    </HeaderContainer>
  )
}
export default Header