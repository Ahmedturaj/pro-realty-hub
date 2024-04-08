import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Register = () => {
    const { signUp, setError, error } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password.length < 6) {
            setError('You have to put 6 character In Your Password');
            return;
        } else if (!/[A-z]/.test(password)) {
            setError('You have to use at least one Uppercase character In Your Password');
            return;
        } else if (!/[0-9]/.test(password)) {
            setError('You have to use at least one numeric character In Your Password');
            return;
        }
        else if (password !== confirmPassword) {
            setError('put the right password in confirm password');
            return;
        }
        signUp(name, photo, email, password);
        setError('')
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
                                <Link to={'/logIn'} className="label-text-alt link link-hover">Already Have an account</Link>
                            </label>
                            <label className="label">
                                <a className="label-text-alt link link-hover text-red-600">{error}</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;