import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Edit() {

    const { user : currentUser } = useAuth();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(currentUser?.role !== "admin"){
            navigate("/");
        }
        const getUser = async (id) => {
            try {
                const url = `${BASE_URL}user/${id}`;
                const response = await axiosInstance.get(url);

                if (response.status === 200) {
                    if (response.data?.user) {
                        const { username, firstName, lastName, email, role } = response.data.user;
                        setValue('username', username);
                        setValue('firstName', firstName);
                        setValue('lastName', lastName);
                        setValue('email', email);
                        setValue('role', role);
                    }
                }
            } catch (error) {
                toast.error(error.response?.data?.message);
            }
        }
        getUser(id);
    }, []);

    const onSubmit = async (data) => {
        try {
            const url = `${BASE_URL}user/${id}`;
            const response = await axiosInstance.patch(url, data);

            if (response.status === 200) {
                toast.success(response.data?.message);
                navigate("/");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <h2 className="card-title text-center">Edit User Details</h2>
                            <div className="card-body py-md-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" {...register("username", { required: "Username is required" })} placeholder="Username" />
                                        {errors.username && <span className="text-danger">{errors.username.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" {...register("firstName", { required: "First Name is required" })} placeholder="First Name" />
                                        {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" {...register("lastName", { required: "Last Name is required" })} placeholder="Last Name" />
                                        {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} placeholder="Email" />
                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" {...register("role", { required: "Please select a role" })} >
                                            <option value="">Select Role</option>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        {errors.role && <span className="text-danger">{errors.role.message}</span>}
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <button type="submit" className="btn btn-primary">Edit Details</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit