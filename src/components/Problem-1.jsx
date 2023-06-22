import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');

    //initialize some state for Table data and form data
    const [tableData, setTableData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        status: "",
    });

    //keep tracking changing of value of form data 
    const onValChange = (event) => {
        const value = (res) => ({
            ...res,
            [event.target.name]: event.target.value,
        });
        setFormData(value);
    };

    //form submit 
    const onFormSubmit = (event) => {
        event.preventDefault();

        //adding data new one with rest data and assigning to state
        const dataObj = (data) => [...data, formData];
        setTableData(dataObj);

        //making the form empty agai
        const isEmpty = { name: "", status: "" };
        setFormData(isEmpty);
    };

    const handleClick = (val) => {
        setShow(val);
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={onFormSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name"
                                onChange={onValChange}
                                name="name"
                                value={formData.name}
                                required />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status"
                                onChange={onValChange}
                                name="status"
                                value={formData.status}
                                required />
                        </div>
                        <div className="col-auto">
                            <button type="submit"
                                className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* All data here i have done some manual things for all data show */}
                            {
                                show === 'all' && tableData?.map((value, index) => {
                                    return value.status === 'active' && (
                                        <tr key={index}>
                                            <td>{value?.name}</td>
                                            <td>{value?.status}</td>
                                        </tr>
                                    )
                                })
                            }
                            {
                                show === 'all' && tableData?.map((value, index) => {
                                    return value.status === 'completed' && (
                                        <tr key={index}>
                                            <td>{value?.name}</td>
                                            <td>{value?.status}</td>
                                        </tr>
                                    )
                                })
                            }
                            {
                                show === 'all' && tableData?.map((value, index) => {
                                    return (value?.status !== 'active' && value?.status !== 'completed') && (
                                        <tr key={index}>
                                            <td>{value?.name}</td>
                                            <td>{value?.status}</td>
                                        </tr>
                                    )
                                })
                            }

                            {/* Showing only active data when click on active */}
                            {
                                show === 'active' && tableData?.map((value, index) => {
                                    return value?.status === 'active' && (
                                        <tr key={index}>
                                            <td>{value?.name}</td>
                                            <td>{value?.status}</td>
                                        </tr>
                                    )
                                })
                            }

                            {/* Showing only completed data when click on completed */}
                            {
                                show === 'completed' && tableData?.map((value, index) => {
                                    return value.status === 'completed' && (
                                        <tr key={index}>
                                            <td>{value?.name}</td>
                                            <td>{value?.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;