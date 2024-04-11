import { Link, useNavigate, useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const { logIn, setUser, googleLogIn, gitHubLogIn, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, ' ', password)
        logIn(email, password)
            .then((result) => {
                setUser(result.user)
                toast.success(`${user && user.displayName} , you have logged In Successfully`)
                navigate(location?.state ? location.state : '/')
                e.target.reset();
            })
            .catch(error => {
                const errorMessage = error.message
                    .split("/")[1]
                    .replace(/\)\./g, "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());
                toast.error(errorMessage);
            })

    }
    const handleGoogle = e => {
        e.preventDefault();
        googleLogIn()
            .then((result) => {
                setUser(result.user);
                toast.success(`${user && user.displayName}, You have Log In Via Google successfully`)
                navigate(location?.state ? location.state : '/')
                e.target.reset();
            })
            .catch(error => {
                const errorMessage = error.message
                    .split("/")[1]
                    .replace(/\)\./g, "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());
                toast.error(errorMessage);
            })
    }

    const handleGitHub = e => {
        e.preventDefault()
        gitHubLogIn()
            .then((result) => {
                setUser(result.user);
                toast.success(`${user && user.displayName},You have Log In Via GitHub successfully`)
                navigate(location?.state ? location.state : '/')
                e.target.reset();
            })
            .catch(error => {
                const errorMessage = error.message
                    .split("/")[1]
                    .replace(/\)\./g, "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());
                toast.error(errorMessage);
            })
    }
    return (
        <div className="w-4/6 mx-auto border mt-14 border-green-500 rounded-2xl bg-green-500 mb-5 shadow-green-200 shadow-lg">
            <PageTitle title={'SingIn'}></PageTitle>
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold py-2">Please LogIn</h1>
                <div className="card shrink-0 w-full p-4 bg-base-100 ">
                    <form onSubmit={handleLogIn} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered w-full border-2 border-green-500 border-dotted" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered border-2 border-green-500 border-dotted" required />
                            <label className="label mt-10">
                                <Link to={'/register'} className="label-text-alt link link-hover text-green-500">Have no account ? Create Account please</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6 gap-5">
                            <button className="btn bg-green-500 hover:border-2 hover:border-green-500 ">SignIn</button>
                            <button onClick={handleGoogle} className="btn bg-green-500 text-3xl hover:border-2 hover:border-green-500"><FcGoogle></FcGoogle></button>
                            <button onClick={handleGitHub} className="btn bg-green-500 text-3xl hover:border-2 hover:border-green-500"><TfiGithub></TfiGithub></button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;