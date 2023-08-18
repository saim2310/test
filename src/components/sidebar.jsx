import React from 'react';
import './CSS/sidebar.css';
import people from '../assets/customers icon.png'
const Sidebar = () => {

    return <>
        <div className="sidebar">
            <div className="logo">
            </div>
            <div className="abc">
                <button className='btn text-light'>
                    <span className='my-5'>
                        <img src={people} alt="" />
                    </span>
                    Customers
                </button>
            </div>
        </div>;
    </>

};

export default Sidebar;