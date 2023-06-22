import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllContacts from './AllCcontacts';
import UsContacts from './UsContacts';


const Problem2 = () => {
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const Navigate = useNavigate();

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    const all_contacts = () => {
        setOpen1(true);
        Navigate("/problem-2/all-contacts", {
            replace: true
        })
    }

    const us_contacts = () => {
        setOpen2(true);
        Navigate("/problem-2/us-contacts", {
            replace: true
        })
    }

    const closeModal = () => {
        setOpen1(false);
        setOpen2(false);
        Navigate("/problem-2", {
            replace: true
        })
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button onClick={all_contacts} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    {
                        isOpen1 && <AllContacts  isOpen={isOpen1} closeModal={closeModal} funcCheck={handleCheckboxChange} isChecked={isChecked} setOpen2={setOpen2} setOpen1={setOpen1}/> 
                    }
                    <button onClick={us_contacts} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                    {
                        isOpen2 && <UsContacts   isOpen={isOpen2} closeModal={closeModal} funcCheck={handleCheckboxChange} isChecked={isChecked} setOpen2={setOpen2} setOpen1={setOpen1}/>
                    }
                </div>
            </div>

        </div>
    );
};

export default Problem2;