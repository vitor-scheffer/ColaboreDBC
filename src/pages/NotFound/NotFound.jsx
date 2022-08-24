import { PageNotFound, TitleNotFound } from "./NotFound.styled"
import astronaut from '../../imgs/astronaut.svg'

const NotFound = () => {
  return (
    <PageNotFound>
      <TitleNotFound>Página não encontrada</TitleNotFound>
      <img src={astronaut} alt="" />
      <button><TitleNotFound onClick={() => window.history.go(-1)}>Back to home</TitleNotFound></button>
      
    </PageNotFound>
  )
}
export default NotFound