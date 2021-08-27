import { faSignOutAlt, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const signOut = () =>{
        console.log('Sign Out Requested');
    }
    return (
        <div className="sidebar w-100 position-relative py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/add-student" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Student</span>
                    </Link>
                </li>
                <li>
                    <Link to="/all-students" className="text-white">
                        <FontAwesomeIcon icon={faThList} /> <span>All Student</span>
                    </Link>
                </li>
                
            </ul>
            <div>
                <Link to="/" className="text-white" onClick={signOut}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;