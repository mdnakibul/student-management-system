import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllStudent = () => {
    const studentId = 111111;
    const deleteStudent = (studentId) => {
        console.log('Student Delete Request Received',studentId);
    };
    const editStudent = (studentId) => {
        console.log('Edit Student Request Received',studentId);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-5">All Student List</h2>
                    <table className="table table-responsive table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Registration Number</th>
                                <th scope="col">Id</th>
                                <th scope="col" colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>1310432342</td>
                                <td>@1182313</td>
                                <td className="bg-success text-white" role="button" onClick={() => editStudent(studentId)}> <FontAwesomeIcon icon={faEdit} /> Edit</td>
                                <td className="bg-danger text-white" role="button" onClick={() => deleteStudent(studentId)}> <FontAwesomeIcon icon={faTrash} /> Delete</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>1310432342</td>
                                <td>@1182313</td>
                                <td className="bg-success text-white" role="button" onClick={() => editStudent(studentId)}> <FontAwesomeIcon icon={faEdit} /> Edit</td>
                                <td className="bg-danger text-white" role="button" onClick={() => deleteStudent(studentId)}> <FontAwesomeIcon icon={faTrash} /> Delete</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>1310432342</td>
                                <td>@1182313</td>
                                <td className="bg-success text-white" role="button" onClick={() => editStudent(studentId)}> <FontAwesomeIcon icon={faEdit} /> Edit</td>
                                <td className="bg-danger text-white" role="button" onClick={() => deleteStudent(studentId)}> <FontAwesomeIcon icon={faTrash} /> Delete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllStudent;