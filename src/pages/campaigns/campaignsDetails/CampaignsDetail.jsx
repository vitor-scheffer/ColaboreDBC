import { useEffect, useState, useContext } from "react"
import { useParams } from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext"
import CardCampaignDetail from "../../../components/card/CardCampaignDetail"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import Loading from "../../../components/loading/Loading"
import { Section } from "../../../components/section/Section"
import { apiColabore } from "../../../services/api"
import { ContainerDetail } from '../../../components/card/Card'
import CardDetail from "../../../components/card/CardDetail"


function CampaignsDetail() {
  const [campanha, setCampanha] = useState()
  const [loading, setLoading] = useState(true)
  const [donors, setDonors] = useState([])
  const {idCampanha} = useParams()
  const {userDatas} = useContext(AuthContext)

  const setup = async () => {
    try {
      const {data} = await apiColabore.get(`campanha/campanhaPeloId?idCampanha=${idCampanha}`)
      setCampanha(data)
    } catch (error) {
    }
    if(userDatas)
      setLoading(false)
  }

  useEffect(()=>{
    setup()
  },[userDatas, campanha])

  if(loading) {
    return (<Loading />)
  } 

  const isAuthor = campanha.nome === userDatas.nome
  const hasUserDonated = campanha.doacoes.some(d => d.nome === userDatas.nome)
  // campanha.doacoes.forEach(d => donors.some(donor => (donor !== d) && donor.nome === userDatas.nome) ? setDonors(...donors, d) : "")
  const dateToFinished = new Date(campanha.dataLimite)
  const currentDate = new Date()
  const finishedByDate = currentDate > dateToFinished || campanha.statusMeta

  return (
    <>
      <Header userName={userDatas.nome} userImg={userDatas.foto}/>
        <Section>
          <ContainerDetail>
            <CardCampaignDetail
            campanha={campanha}
            finishedByDate={finishedByDate}
            />
            <CardDetail campanha={campanha}
            isAuthor={isAuthor}
            hasUserDonated={hasUserDonated}
            finishedByDate={finishedByDate}/>
          </ContainerDetail>
        </Section>
      <Footer />
    </>
  )
}

export default CampaignsDetail