import Modal from 'react-modal'
import { useState } from 'react';
import useGet from '../hooks/useGet';
import ModalC from './ModalC';
import { useNavigate } from 'react-router-dom';

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.23)',
        zIndex: '99999',
    },
    content: {
        minWidth: window.innerWidth <= 650 ? '97%' : '40%',
        top: '50%',
        left: '50%',
        right: 'auto',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        background: '#ffffff',
    },
}
Modal.setAppElement('#root');

const UsContacts = ({ isOpen, closeModal, funcCheck, isChecked,setOpen2, setOpen1 }) => {
    const [isOpenC, setOpenC] = useState(false);

    const { state } = useGet(`https://contact.mediusware.com/api/country-contacts/United States/`)
    const { loading, data, error } = state

    const closeModalC = () => {
        setOpenC(false);
    }
    const Navigate = useNavigate();

    const moveToAll=()=>{
        setOpen2(false);
        setOpen1(true);
        Navigate("/problem-2/all-contacts", {
            replace: true
        })
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} centerd={true}>
            <h3 className="fw-bold">United states contacts only</h3>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="form-check">
                        <input className="form-check-input" checked={isChecked} type="checkbox" onChange={funcCheck} id="expiresIn" name="expiresIn" />
                        <label className="text-primary form-check-label" htmlFor="expiresIn">
                            Show Even only
                        </label>
                    </div>
                    {
                        loading && <h5 className="text-center">Loading...</h5>
                    }
                    {
                        data && data?.count > 0 && <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.results?.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value?.phone}</td>
                                                <td className="cursor-pointer " onClick={() => setOpenC(true)}>{value?.country?.name}</td>
                                                {
                                                    isOpenC && <ModalC isOpen={isOpenC} closeModal={closeModalC} />
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                    {
                        !loading && data?.count === 0 && <h5 className="mt-2 text-center">No data availabe</h5>
                    }
                    {
                        error && <h5>{error}</h5>
                    }
                    <div className="d-flex justify-content-center gap-3">
                        <button onClick={moveToAll} style={{ color: '#46139f' }} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                        <button style={{ color: '#ff7f50' }} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                        <button onClick={closeModal} style={{ color: '#46139f' }} className="btn btn-lg btn-outline-primary" type="button" >Close</button>
                    </div>
                </div>

            </div>
        </Modal>
    );
}

export default UsContacts;