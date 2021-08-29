import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddStudent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null);

    // Handle Image Upload 

    const handleImageUpload = (event)=>{
        console.log('image uploading');
        const imgData = new FormData();
        imgData.set('key','aab4383b0506f1fa7e90aa51571f2c5c');
        if(event.target.files[0]){
            imgData.append("image", event.target.files[0])
        }
        axios
        .post("https://api.imgbb.com/1/upload", imgData)
            .then((res) => {
                setImgURL(res.data.data.display_url)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const onSubmit = data => {
        data.photo = imgURL;
        console.log('data',data);
        
        fetch('https://fathomless-sea-23138.herokuapp.com/addStudent',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result){
                alert('Student Added')
            }else{
                alert('There was an server side error')
            }
            
        })
        console.log(JSON.stringify(data));
    };
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 ps-0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h2 className="text-center pt-5">Add A Student Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" {...register("name", { required: true })} className="form-control" id="name" placeholder="Enter Student's Name" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="registraion">Registration Number</label>
                            <input type="number" {...register("registration", { required: true })} className="form-control" id="registraion" placeholder="Registraion Number" />
                            {errors.registration && <span>This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="id">Student Id</label>
                            <input type="number" {...register("id", { required: true })} className="form-control" id="id" placeholder="Student Id" />
                            {errors.id && <span>This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="photo">Photo</label>
                            <input type="file" {...register("photo", { required: true })} className="form-control" id="photo" onChange={handleImageUpload} />
                            {errors.file && <span>This field is required</span>}
                        </div>
                        <p>As soon as the image uploaded you can see the submit button</p>
                        {imgURL && 
                        <button type="submit" className="btn btn-primary">Submit</button>
                        }
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;