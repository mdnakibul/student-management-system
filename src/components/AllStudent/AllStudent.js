import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AllStudent = () => {

    const history = useHistory();
    // Delete A Student 

    const deleteStudent = (studentId) => {
        axios.delete(`http://localhost:5000/deleteStudent/${studentId}`)
            .then(res => {
                console.log(res.data);
                alert('Student Deleted Successfully');
                window.location.reload(false);
            })
    };

    // Edit Student details 
    const editStudent = (studentId) => {
        console.log('Edit Student Request Received', studentId);
        history.push(`/edit-student/${studentId}`)
    }

    // Get student list 
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/students')
            .then((res) => {
                setStudents(res.data);
                console.log(res.data);

            });
    }, []);

    const sortStudentData = (event) => {
        // Sorting student array 
        if (event.target.value === 'name') {
            const sortedStudent = students.sort((a, b) => a.name.localeCompare(b.name));
            setStudents(sortedStudent);
            console.log(students);
        } else if (event.target.value === 'registration') {
            const sortedStudent = students.sort((a, b) => a.registration.localeCompare(b.registration));
            setStudents(sortedStudent);
            console.log(students);
        } else if (event.target.value === 'id') {
            const sortedStudent = students.sort((a, b) => a.id.localeCompare(b.id));
            setStudents(sortedStudent);
            console.log(students);
        }


        // Get the table body and make it empty 
        const tableRef = document.getElementById('student-table').getElementsByTagName('tbody')[0];
        tableRef.innerHTML = "";

        // Inseting Sorted Student Data 
        students.forEach(student => {

            const rowData = `<tr key=${student._id}>
            <td>${student.name}</td>
            <td>${student.registration}</td>
            <td>${student.id}</td>
            <td class="bg-success text-white" role="button" onclick='${editStudent}(${student._id})'> <i className="fas fa-edit"></i> Edit</td>
            <td class="bg-danger text-white" role="button" onclick="${deleteStudent}(${student._id})"> <i className="fas fa-trush"></i> Delete</td>
        </tr>`;
            tableRef.insertRow().innerHTML = rowData;
        })
    }

    // Search For Student 

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log()
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h2 className="text-center py-5">All Student List</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("searchData", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.searchData && <span>This field is required</span>}

                            <input type="submit" value="Search"/>
                        </form>
                        <select name="sort" className="float-end me-3" id="sort" onChange={sortStudentData}>
                            <option value="null">Sort</option>
                            <option value="name">Name</option>
                            <option value="registration">Registration</option>
                            <option value="id">ID</option>
                        </select>
                    </div>
                    <table className="table table-responsive table-hover text-center" id="student-table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Registration Number</th>
                                <th scope="col">Id</th>
                                <th scope="col" colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody id="all-student-data">
                            {
                                students.map((student) => {
                                    return (
                                        <tr key={student._id}>
                                            <td>{student.name}</td>
                                            <td>{student.registration}</td>
                                            <td>{student.id}</td>
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