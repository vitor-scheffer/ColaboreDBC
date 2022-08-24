import { LogoHeader } from '../logo/Logo'
import { FooterContainer } from './Footer.styled.js'

const Footer = () => {
  return (
    <FooterContainer>
      <div>
          <LogoHeader />
        <div>
          <p>©2022 Colabore.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </FooterContainer>
  )
}
export default Footer