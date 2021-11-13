interface ModalProps {
    resetBookToEdit: (arg: any) => void;
    children: any
}

const Modal = (props: ModalProps) => {
    const {resetBookToEdit, children} = props;

    return (
        
        <div className = "modal-background" onClick={(event: React.MouseEvent<HTMLElement>) => {
            resetBookToEdit(undefined)
        }}>
            <div className = "modal">
            {children}
            </div>
        </div>
    )
}

export default Modal;
