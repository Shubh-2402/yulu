import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";


const LoginPage = () => {
    const { login } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        login(data);
    };

    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <h2 className="card-title text-center">Login</h2>
                            <div className="card-body py-md-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" {...register("username", { required: "Username is required" })} placeholder="Username" />
                                        {errors.username && <span className="text-danger">{errors.username.message}</span>}
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" {...register("password", { required: "Password is required" })} placeholder="Password" autoComplete="true" />
                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        <a href="/signup">Create Account</a>
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

export default LoginPage;