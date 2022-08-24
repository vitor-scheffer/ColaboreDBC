import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OnlyNumbers } from "../utils/Formatting";

const CampaignContext = createContext();

const CampaignProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [campanhaById, setCampanhaById] = useState()
  const navigate = useNavigate();

  const handleDeleteCampaign = async (idCampanha) => {
    try {
      await apiColabore.delete(`/campanha/delete?id=${idCampanha}`)
      redirectCampaign()
      toast.success('Campanha excluída com sucesso')
    } catch (error) {
      toast.error('Não foi possível excluir a campanha.')
      console.log(error)
    }
  }

  const handleUpdateCampaign = async (values, image, tags, idCampanha) => {
    const campaignImage = new FormData()
    image && campaignImage.append('multipartFile', image[0])

    const newDate = new Date (values.dataLimite)

    const isoDate = newDate.toISOString()

    const newValues = {
      titulo: values.titulo,
      meta: typeof values.meta === 'string' ? OnlyNumbers(values.meta) : values.meta,
      descricao: values.descricao,
      encerrarAutomaticamente: values.encerrarAutomaticamente,
      dataLimite: isoDate,
      tags: tags
    }

    try {
      await apiColabore.put(`/campanha/${idCampanha}`, newValues)

      try {
        await apiColabore.post(`/campanha/cadastrarFoto?idCampanha=${idCampanha}`, campaignImage, {headers: {'Content-Type': 'multipart/form-data'}})
      } catch (error) {
        typeof image !== 'string' && toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }
      redirectCampaign()
      toast.success('Campanha editada com sucesso!')
    } catch (error) {
      toast.error('Não foi possível editar a campanha.')
      console.log(error)
    }
  }

  const handleCreateCampaign = async (values, image, tags) => {

    const campaignImage = new FormData()
    image && campaignImage.append('multipartFile', image[0])

    const newDate = new Date (values.dataLimite)

    const isoDate = newDate.toISOString()

    const newValues = {
      titulo: values.titulo,
      meta: OnlyNumbers(values.meta),
      descricao: values.descricao,
      encerrarAutomaticamente: values.encerrarAutomaticamente,
      dataLimite: isoDate,
      tags: tags
    }

    try {
      const {data: campanhaValues} =   await apiColabore.post('/campanha/cadastrar', newValues)
      const idCampanha = campanhaValues.idCampanha

      try {
        await apiColabore.post(`/campanha/cadastrarFoto?idCampanha=${idCampanha}`, campaignImage, {headers: {'Content-Type': 'multipart/form-data'}})
      } catch (error) {
        toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }

      redirectCampaign()
      toast.success('Campanha cadastrada com sucesso')
          
      } catch (error) {
        toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }
  }

  const redirectCampaign = async () => {
    try{
      const { data } = await apiColabore.get('/usuario/dadosUsuario')
      navigate(`/campanhas/${data.idUsuario}`)
    } catch(e) {
      console.log(e)
      toast.error('Ops! Ocorreu algum erro.')
    }
  }

  const getCampanhaById = async (idCampanha) => {
    try {
      const {data} = await apiColabore.get(`campanha/campanhaPeloId?idCampanha=${idCampanha}`)
      console.log(data)
      setCampanhaById(data)
    } catch (error) {
    }
  }

  const handleDonation = async(values, campanha, setOpenModal) => {
    try {
      await apiColabore.post(`/doador/${campanha.idCampanha}`, values)
      setOpenModal(false)
      toast.success('Contribuição realizada com sucesso!')

    } catch (error) {
      console.log(error)
      toast.error('Ocorreu um erro.')
    }
  }

  const handleMyContributionsFilter = (setLoadingBody, setIsAllCampaigns, setIsReachedGoals, setIsNotReachedGoals, setIsOpenCampaign, setIsMyCampaigns, setIsMyContributions, isMyContributions) => {
    setLoadingBody(true)
    setIsAllCampaigns(false)
    setIsReachedGoals(false)
    setIsNotReachedGoals(false)
    setIsOpenCampaign(false)
    setIsMyCampaigns(false)
    setIsMyContributions(!isMyContributions ? true : false)
  }

  const handleMyCampaignsFilter = (setLoadingBody, setIsAllCampaigns, setIsReachedGoals, setIsNotReachedGoals, setIsOpenCampaign, setIsMyCampaigns, setIsMyContributions, isMyCampaigns) => {
    setLoadingBody(true)
    setIsAllCampaigns(false)
    setIsReachedGoals(false)
    setIsNotReachedGoals(false)
    setIsOpenCampaign(false)
    setIsMyContributions(false)
    setIsMyCampaigns(!isMyCampaigns ? true : false)
  }

  return (
    <CampaignContext.Provider value={{ redirectCampaign, getCampanhaById, campanhaById, handleDonation, handleCreateCampaign, handleUpdateCampaign, handleDeleteCampaign, handleMyContributionsFilter, handleMyCampaignsFilter }}>
      {children}
    </CampaignContext.Provider>
  )

}

export { CampaignContext, CampaignProvider }