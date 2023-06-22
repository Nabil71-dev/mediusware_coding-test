import Modal from 'react-modal'

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.03)',
        zIndex: '99999',
    },
    content: {
        minWidth: window.innerWidth <= 650 ? '97%' : '30%',
        top: '50%',
        left: '50%',
        right: 'auto',
        height: '250px',
        transform: 'translate(-50%, -50%)',
        background: '#ffffff',
    },
}
Modal.setAppElement('#root');

const ModalC = ({ isOpen, closeModal }) => {

    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} centerd={true}>
                <h3>Hi I'm Modal C</h3>
                <button onClick={closeModal} style={{ color: '#46139f' }} className="btn btn-lg btn-outline-primary" type="button" >Close</button>
            </Modal>
        </>
    );
}

export default ModalC;