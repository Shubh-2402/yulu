import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const LoginPage = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const signup_url = `${BASE_URL}auth/login`;
            const response = await axiosInstance.post(signup_url, data);

            if (response.status === 200) {
                const authToken = response.data.token;
                const expiryDate = new Date();
                expiryDate.setTime(expiryDate.getTime() + (1 * 60 * 60 * 1000)); // 1 hour from now

                // Set cookie
                document.cookie = `authToken=${JSON.stringify({ value: authToken, expires: expiryDate.toUTCString() })}; expires=${expiryDate.toUTCString()}; path=/`;
                
                navigate("/");
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

// export async function action({ request }) {
//   const url = request.url;
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get('mode') || 'login';

//   if (mode !== 'login' && mode !== 'signup') {
//     throw json({ message: 'mode is not valid!' });
//   }

//   const data = await request.formData();

//   const authData = {
//     email: data.get('email'),
//     password: data.get('password'),
//   };

//   const response = await fetch('http://localhost:8001/' + mode, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(authData),
//   });

//   if (response.status === 400 || response.status === 401 || response.status === 409) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ msg: 'Can not authenticate the user' }, { status: 500 });
//   }

//   // access token
//   const respData = await response.json();

//   const token = respData.token;

//   saveAuthToken(token);

//   return redirect('/');
// }