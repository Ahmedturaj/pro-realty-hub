import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";


const SignIn = () => {
    const handleLogIn = e => {
        e.preventDefault();
    }
    return (
        <div className="w-4/6 mx-auto border mt-14 border-gray-500 rounded-2xl bg-base-200">
            <PageTitle title={'SingIn'}></PageTitle>
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold py-2">Please LogIn</h1>
                <div className="card shrink-0 w-full p-4 bg-base-100 ">
                    <form onSubmit={handleLogIn} className="card-body w-full">
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
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to={'/signUp'} className="label-text-alt link link-hover text-blue-600">Create Account</Link>
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

export default SignIn;