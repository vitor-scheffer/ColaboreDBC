import logo from "../../imgs/logo.svg"
import logoHeader from "../../imgs/logoHeader.svg"
import { useContext } from "react"
import { CampaignContext } from '../../context/CampaignContext'

export const Logo = ({direction}) => {
  return (
    <div>
      <img src={logo} alt="logo"/>
    </div>
    
  )
}
export const LogoHeader = ({direction}) => {
  const {redirectCampaign} = useContext(CampaignContext)

  return (
    <div onClick={redirectCampaign}>
      <img src={logoHeader} alt="logo"/>
      <h2>Colabore</h2>
    </div>
  )
}