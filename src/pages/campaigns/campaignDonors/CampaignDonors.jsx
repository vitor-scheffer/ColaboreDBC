import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import Loading from "../../../components/loading/Loading"
import { useEffect, useState, useContext } from "react"
import { apiColabore } from "../../../services/api"
import { Section } from "../../../components/section/Section"
import { DonorsContainer, DonorsInfos, DonorsList, DonorsListTitle } from "./CampaignDonors.Styled"
import { Button } from "../../../components/button/Button"
import { useNavigate, useParams } from "react-router-dom"
import { Card } from "../../../components/card/Card"
import { CampaignContext } from '../../../context/CampaignContext'
import { AuthContext } from '../../../context/AuthContext'

function CampaignDonors() {
  const [doacoes, setDoacoes] = useState()
  const [loading, setLoading] = useState(true)
  const {idCampanha} = useParams()
  const {userDatas} = useContext(AuthContext)

  const setup = async () => {
    try {
      const {data} = await apiColabore.get(`campanha/campanhaPeloId?idCampanha=${idCampanha}`)
      setDoacoes(data.doacoes)
      setLoading(false)
    } catch (error) {
    }
    if(userDatas)
      setLoading(false)
  }

  useEffect(()=>{
    setup()
  },[])

  if(loading) {
    return (<Loading />)
  } 

  return (
    <>
      <Header userName={userDatas.nome} userImg={userDatas.foto}/>
      <Section>
        <DonorsContainer>
          <Card maxWidth="100%" minHeight="0">
            <DonorsList>
              <DonorsListTitle>Contribuidores</DonorsListTitle>
              {doacoes.length !== 0 ? doacoes.map(doador => {
                return(
                  <DonorsInfos key={doador.idUsuario}>
                    <img src={doador.foto} />
                    <div>
                      <p>{doador.nome}</p>
                      <p>Valor: {doador.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                  </DonorsInfos>
                )
              }) : <h2>Ainda não existem doações.</h2>}
              <Button id="contribuidoresVoltar" onClick={() => window.history.go(-1)}>Voltar</Button>
            </DonorsList>
          </Card>
        </DonorsContainer>
      </Section>
      <Footer />
    </>
  )
}

export default CampaignDonors