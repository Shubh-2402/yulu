import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SignupPage = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const signup_url = `${BASE_URL}auth/register`;
            const response = await axiosInstance.post(signup_url, data);

            if (response.status === 201) {

                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <h2 className="card-title text-center">SignUp on Yulu</h2>
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
                                        <select className="form-control" {...register("role", { required: "Please select a role" })}>
                                            <option value="">Select Role</option>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        {errors.role && <span className="text-danger">{errors.role.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" {...register("password", { required: "Password is required" })} placeholder="Password" autoComplete="true" />
                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" {...register("confirmPassword", { required: "Please confirm your password", validate: value => value === getValues("password") || "Passwords do not match" })} placeholder="Confirm Password" autoComplete="true" />
                                        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <a href="/login">Login</a>
                                        <button type="submit" className="btn btn-primary">Create Account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignupPage;
