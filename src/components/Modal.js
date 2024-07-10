import { Backdrop, Content, CloseButton} from "../feature/styles/feature"
import { IoCloseSharp } from 'react-icons/io5'

const Modal = ({show, onClose, children}) => {

    if(!show){
        return null
    }

    return (
        <Backdrop>
            <Content>
                <CloseButton onClick={onClose}><IoCloseSharp/></CloseButton>
                {children}
            </Content>
        </Backdrop>
    )
}

export default Modal