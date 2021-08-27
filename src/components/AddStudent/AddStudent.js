import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
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
                            <input type="file" {...register("photo", { required: true })} className="form-control" id="photo" />
                            {errors.file && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;