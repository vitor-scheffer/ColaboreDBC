import { useEffect, useState, useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import Loading from "../components/loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userDatas, setUserDatas] = useState()
  const navigate = useNavigate();

  const getUserDatas = async () => {
    try {
      const { data } = await apiColabore.get('usuario/dadosUsuario')
      setUserDatas(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const redirectHome = async () => {
    try{
      const { data } = await apiColabore.get('/usuario/dadosUsuario')
      navigate(`/campanhas/${data.idUsuario}`)
    } catch(e) {
      console.log(e)
      toast.error('Ops! Ocorreu algum erro.')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      apiColabore.defaults.headers.common['Authorization'] = token
      setAuth(true)
      getUserDatas()
    }
    const currentLocation = window.location.pathname

    if(token && currentLocation === "/") {
      redirectHome()
    }
    setLoading(false)
  }, [auth]);

  const handleLogin = async (user) => {
    try {
      const { data } = await apiColabore.post('/autenticacao/login', user);
      localStorage.setItem('token', data)
      apiColabore.defaults.headers.common['Authorization'] = data
      try{
        const { data } = await apiColabore.get('/usuario/dadosUsuario')
        setAuth(true)
        navigate(`/campanhas/${data.idUsuario}`)
        toast.success('Seja bem vindo!')
      } catch(e) {
        console.log(e)
        toast.error('Deu erro')
      }
    } catch (e) {
      console.log(e)
      toast.error('Deu erro')
    }
  }

  const handleSignUp = async (values, image) => {
    setLoading(true)
    const userImage = new FormData()
    image && userImage.append('multipartFile', image[0])
    try {
      const {data} =  await apiColabore.post('/autenticacao/cadastrar', values)
      localStorage.setItem('token', data)
      apiColabore.defaults.headers.common['Authorization'] = data

      if(image) {
        try {
          await apiColabore.post('/autenticacao/cadastrarFoto', userImage, {headers: {'Content-Type': 'multipart/form-data'}})
        } catch (error) {
          toast.error('Não foi possível adicionar a imagem.')
          console.log(error)
        }
      }
      try {
        const { data: userData } = await apiColabore.get('/usuario/dadosUsuario')
        setLoading(false)
        setAuth(true)
        toast.success('Seja bem vindo!')
        navigate(`/campanhas/${userData.idUsuario}`)
      } catch (error) {
        toast.error('Ocooreu algum erro.')
        console.log(error)
      }
    } catch (e) {
      console.log(e)
      toast.error('Ocooreu algum erro.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    apiColabore.defaults.headers.common['Authorization'] = undefined
    setAuth(false)
    navigate('/')
    toast.success('Tchau!')
  }

  if (loading) {
      return (<Loading />)
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, auth, userDatas }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  )

}

export { AuthContext, AuthProvider }