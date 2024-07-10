import { Backdrop, Content, CloseButton } from "../feature/styles/feature"

const Modal = ({show, onClose, children}) => {

    if(!show){
        return null
    }

    return (
        <Backdrop>
            <Content>
                <CloseButton onClick={onClose}>X</CloseButton>
                {children}
            </Content>
        </Backdrop>
    )
}

export default Modal