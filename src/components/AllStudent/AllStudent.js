import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';

const AllStudent = () => {

    // Delete A Student 

    const deleteStudent = (studentId) => {
        console.log('Student Delete Request Received', studentId);
        axios.delete(`http://localhost:5000/deleteStudent/${studentId}`)
            .then(res => {
                console.log(res.data);
            })
    };
    const editStudent = (studentId) => {
        console.log('Edit Student Request Received', studentId);
    }

    // Get student list 
    const [students, setStudents] = useState([]);

    axios.get('http://localhost:5000/students')
        .then((res) => {
            setStudents(res.data);
            console.log(students);

        })

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
                            {
                                students.map((student) => {
                                    return (
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{student.name}</td>
                                            <td>{student.registraion}</td>
                                            <td>@{student.id}</td>
                                            <td className="bg-success text-white" role="button" onClick={() => editStudent(student._id)}> <FontAwesomeIcon icon={faEdit} /> Edit</td>
                                            <td className="bg-danger text-white" role="button" onClick={() => deleteStudent(student._id)}> <FontAwesomeIcon icon={faTrash} /> Delete</td>
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

export default AllStudent;