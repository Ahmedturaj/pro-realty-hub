import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { signUp, setUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password.length < 6) {
            toast.warning('You have to put 6 character In Your Password');
            return;
        } else if (!/[A-z]/.test(password)) {
            toast.warning('You have to use at least one Uppercase character In Your Password');
            return;
        } else if (!/[0-9]/.test(password)) {
            toast.warning('You have to use at least one numeric character In Your Password');
            return;
        }
        else if (password !== confirmPassword) {
            toast.warning('put the right password in confirm password');
            return;
        }
        signUp(name, photo, email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                setUser(result.user)
                navigate(location?.state ? location.state : '/')
                toast.success('Registered successfully.')
            })
            .catch(error => {
                toast.warning(error.message)
            })
        e.target.reset();
    }
    return (
        <div className="w-4/6 mx-auto border mt-14 border-gray-500 rounded-2xl bg-base-200">
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold py-2">Please SignUp</h1>
                <div className="card shrink-0 w-full p-4 bg-base-100 ">
                    <form onSubmit={handleSignUp} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="Your Photo Url" name="photo" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm password"
                                name="confirmPassword" className="input input-bordered" required />
                            <label className="label">
                                <Link to={'/signIn'} className="label-text-alt link link-hover">Already Have an account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;