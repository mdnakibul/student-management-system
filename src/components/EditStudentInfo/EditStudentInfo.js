import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const EditStudentInfo = () => {
    const { studentId } = useParams();
    const [singleStudent, setSingleStudent] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);
    // Get Single Student Details 

    useEffect(() => {
        axios.get(`http://localhost:5000/student/${studentId}`)
            .then(res => {
                setSingleStudent(res.data)
                console.log(res);
            })
    }, []);

    const handleImageChange = (event) => {
        console.log('image uploading');
        const submitBtn = document.getElementById('stu-update-btn');
        submitBtn.style.display = "none";
        const imgData = new FormData();
        imgData.set('key', 'aab4383b0506f1fa7e90aa51571f2c5c');
        if (event.target.files[0]) {
            imgData.append("image", event.target.files[0])
        }
        axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then((res) => {
                setImageURL(res.data.data.display_url);
                submitBtn.style.display = "block";
            })
            .catch(error => {
                console.log(error)
            })
    }

    const onSubmit = data => {
        data.photo = singleStudent.photo;
        document.getElementById('photo').addEventListener('change', () => {
            data.photo = imageURL;
        });
        console.log('Data update in progress')
        axios.patch(`http://localhost:5000/update-student/${singleStudent._id}`,data)
        .then(res => {
            console.log(res);
            if(res){
                alert('Student Data Updated Successfully')
            }else{
                alert('There was an server side error')
            }
        })
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 ps-0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h2 className="text-center pt-5">Edit Student Details {studentId} </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" {...register("name", { required: true })} defaultValue={singleStudent.name} className="form-control" id="name" placeholder="Enter Student's Name" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="registraion">Registration Number</label>
                            <input type="number" {...register("registration", { required: true })} defaultValue={singleStudent.registration} className="form-control" id="registraion" placeholder="Registraion Number" />
                            {errors.registration && <span>This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="id">Student Id</label>
                            <input type="number" {...register("id", { required: true })} defaultValue={singleStudent.id} className="form-control" id="id" placeholder="Student Id" />
                            {errors.id && <span>This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="photo">Photo</label>
                            <input type="file" {...register("photo",)} defaultValue={singleStudent.photo} onChange={handleImageChange} className="form-control" id="photo" />
                            
                        </div>
                        <button type="submit" className="btn btn-primary" id="stu-update-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditStudentInfo;