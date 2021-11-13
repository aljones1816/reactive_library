import './styles/modal.css';

interface ModalProps {
    resetBookToEdit: (arg: any) => void;
    children: any;
    setBool: any;
}

const Modal = (props: ModalProps) => {
    const {resetBookToEdit, children, setBool} = props;

    return (
        
        <div className = "modal-background" onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (event.target !== event.currentTarget) {
                return;
            }
            
            resetBookToEdit(undefined)
            setBool(false);
        }}>
            <div className = "modal">
            {children}
            </div>
        </div>
    )
}

export default Modal;
