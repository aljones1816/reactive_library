import './styles/modal.css';

interface ModalProps {
    resetBookToEdit: (arg: any) => void;
    children: any;
    toggleModal: (any);
}

const Modal = (props: ModalProps) => {
    const {resetBookToEdit, children, toggleModal} = props;

    return (
        
        <div className = "modal-background" onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (event.target !== event.currentTarget) {
                return;
            }
    
            resetBookToEdit(undefined)
            toggleModal(false);
        }}>
            <div className = "modal">
            {children}
            </div>
        </div>
    )
}

export default Modal;
