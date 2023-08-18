import { React, useState, useEffect } from 'react';
import './CSS/userList.css';
import './CSS/modals.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setUsers } from '../redux/action';
import UserModal from "./Modal"
import path from '../assets/Path 7602.png'

import path2 from '../assets/Path 7602@2x.png'
import dustbin from '../assets/e8dad4d260c33c98d5d7c49ac3cb712d.png'

import UserModalDelete from './deleteModal';
const UserList = () => {

    const dispatch = useDispatch();

    const Users = useSelector(state => state.users);

    console.log("UUU", Users.users);

    const [modalItem, setModalItem] = useState("");

    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);

    const handleCloseDelete = () => setShowDelete(false)

    const handleShow = (modalItemValue) => { setShow(true); setModalItem(modalItemValue) };

    const handleShowDelete = () => setShowDelete(true)

    const fetchData = async () => {
        try {
            const apiUrl = 'https://reqres.in/api/users?page=1';
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }


    const [updateData, setUpdateData] = useState({
        first_name: "",
        email: ""
    })

    const [AddData, setAddData] = useState({
        first_name: "",
        email: ""
    })

    const handleNameUpdate = (e) => {
        setUpdateData({ ...updateData, first_name: e.target.value })
    }

    const handleEmailUpdate = (e) => {
        setUpdateData({ ...updateData, email: e.target.value })
    }

    const handleNameAdd = (e) => {
        setAddData({ ...AddData, first_name: e.target.value })
    }

    const handleEmailAdd = (e) => {
        setAddData({ ...AddData, email: e.target.value })
    }



    const AddUser = () => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedImage);
            reader.onload = () => {
                const imageName = selectedImage.name;
                const imageUrl = reader.result;
                // console.log('Image Name:', imageName);
                console.log('Image URL:', imageUrl);
                const newid = Users.users.length + 1

                const payload = {
                    ...AddData,
                    id: newid,
                    avatar: imageUrl
                }
                // console.log(updatedUser);
                console.log(payload);

                dispatch(addUser(payload))
                setAddData(
                    {
                        first_name: "",
                        email: ""
                    }
                )
            };
        }
        else {
            alert("Image is required")
        }


    };


    const updateUser = (userId, updatedUser) => {

        if (selectedImage) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedImage);
            reader.onload = () => {
                const imageName = selectedImage.name;
                const imageUrl = reader.result;
                // console.log('Image Name:', imageName);
                console.log('Image URL:', imageUrl);
                const payload = {
                    ...updateData,
                    id: userId
                }
                console.log(updatedUser);
                console.log(payload);
                const updatedUserList = Users.users.map(user =>
                    user.id === userId ? payload : user
                );
                console.log(updatedUserList);
                // return
                dispatch(setUsers(updatedUserList));

            }
        }
        else {
            alert("image is required")
        }
    };

    const deleteUser = (userId) => {
        const updatedUserList = Users.users.filter(user => user.id !== userId);
        dispatch(setUsers(updatedUserList));
    };


    useEffect(() => {
        fetchData().then(
            res => {
                console.log("DATA", res);
                dispatch(setUsers(res));
            }
        );

    }, [])

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className="container-fluid comp">
            <div className="main-content">
                <UserModal className="Addmodal" btnText=" +  ADD NEW CUSTOMER" id={`View`} customClasses="btn_view ADD" title="Add New User" modalItem={modalItem} show={show} handleShow={handleShow} handleClose={handleClose} >
                    <div className=' d-flex flex-column jc-between ai-center mb-4 ADDContainer'>
                        <input className='inputs' onChange={(e) => handleNameAdd(e)} placeholder="name" type="text" />
                        <br />
                        <input className='inputs' onChange={(e) => handleEmailAdd(e)} placeholder="email" type="text" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <button className='AddUser' onClick={() => AddUser()} >Add Customer</button>
                    </div>
                </UserModal>

                <div className="col-lg-12 col-md-10 col-sm-12 customer-list">
                    <div className='table-responsive'>
                        <div className="scrollable-table-container ">
                            <table className="table mt-5 text-center TBL table-responsive">
                                <thead className='tableHead'>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">
                                            <p> CuStomer ID#</p>
                                        </th>
                                        <th scope="col">
                                            <p> Customer Name </p>
                                        </th>
                                        <th scope="col">
                                            <p> Email</p>
                                        </th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (Users.users.length) > 0 && Users.users.map((item, i) =>
                                        (
                                            <tr key={i} className='tableRow'>
                                                <td>
                                                    <div className="img-container">
                                                        <img className='image' src={item?.avatar} alt="image" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='tbl_contents'>
                                                        {item?.id}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='tbl_contents' style={{ color: '#57BC90' }}>
                                                        {item?.first_name}
                                                    </div>
                                                </td>
                                                <td>

                                                    <div className='tbl_contents'>
                                                        {item?.email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='tbl_contents'>
                                                        <UserModal btnText="Edit" id={`View${i}`} title="Edit User" customClasses="btn_view EDIT" modalItem={modalItem} show={show} handleClose={handleClose} handleShow={handleShow} >
                                                            <div className=' d-flex flex-column jc-between ai-center mb-4'>
                                                                <input className='inputs' onChange={(e) => handleNameUpdate(e)} placeholder="name" type="text" />
                                                                <br />
                                                                <input className='inputs' onChange={(e) => handleEmailUpdate(e)} placeholder="email" type="text" />
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={handleImageUpload}
                                                                />
                                                                <button className='AddUser' onClick={() => updateUser(item?.id, updateData)} >Edit Customer</button>
                                                            </div>
                                                        </UserModal>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className='tbl_contents'>
                                                        <UserModalDelete btnText="Delete" id={`View${i}`} title="" customClasses="btn_view DELETE" modalItem={modalItem} showDelete={showDelete} handleCloseDelete={handleCloseDelete} handleShowDelete={handleShowDelete} >
                                                            <div className='d-flex jc-center ai-center modal_header del-body'>
                                                                <div className="logoDelete">
                                                                    <img src={dustbin} alt="" />
                                                                </div>
                                                                <div className="txt">
                                                                    <h3>Are you Sure?</h3>
                                                                    <h6>Do you really want to delete this customer? This process can not be undone.</h6>
                                                                </div>
                                                                <div className='delBtn'>
                                                                    <button className='cancel' onClick={handleClose}>Cancel</button>
                                                                    <button className='confirm' onClick={() => deleteUser(item?.id)} >Delete</button>
                                                                </div>
                                                            </div>
                                                        </UserModalDelete>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default UserList;