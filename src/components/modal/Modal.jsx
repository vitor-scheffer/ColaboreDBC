import { ModalContent } from './Modal.styled'
import { Button } from '../button/Button'
import { redColor } from '../../consts'

const Modal = ({closeModal, confirmModal}) => {
  return (
      <div className="modalBackground">
      <ModalContent>
        <div className="title">
          <h1>Você tem certeza?</h1>
        </div>
        <div className="body">
          <p>Não será possível reverter essa contribuição.</p>
        </div>
        <div className="btnsModal">
          <Button id="cancelarModal" onClick={() => closeModal(false)} background={redColor} border={`1px solid ${redColor}`}>Cancelar</Button>
          <Button id="confirmarModal" type="submit" >Confirmar</Button>
        </div>
        </ModalContent>
      </div>
  )
}
export default Modal