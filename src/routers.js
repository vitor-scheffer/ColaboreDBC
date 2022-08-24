import { useContext, useEffect, useState } from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext, AuthProvider } from "./context/AuthContext"
import { CampaignProvider } from "./context/CampaignContext"
import CampaignDonors from "./pages/campaigns/campaignDonors/CampaignDonors"
import Campaigns from "./pages/campaigns/Campaigns"
import CampaignsDetail from "./pages/campaigns/campaignsDetails/CampaignsDetail"
import CampaignsForm from "./pages/campaigns/campaignsForm/CampaignsForm"
import Login from "./pages/login/Login"
import NotFound from "./pages/NotFound/NotFound"
import Register from "./pages/register/Register"

const PrivateRoute = () => {
  const {auth} = useContext(AuthContext)
  const [token, setToken] = useState()

  return (
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CampaignProvider>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='criar-usuario' element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path='campanhas/:idUsuario' element={<Campaigns />} />
              <Route path='criar-campanha/' element={<CampaignsForm />} />
              <Route path='criar-campanha/:idCampanha' element={<CampaignsForm />} />
              <Route path='detalhe-campanha/:idCampanha' element={<CampaignsDetail />} />
              <Route path='doadores-campanha/:idCampanha' element={<CampaignDonors />} />
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </CampaignProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers