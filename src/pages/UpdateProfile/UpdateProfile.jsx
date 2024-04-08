import { useContext } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
const UpdateProfile = () => {
    const { user, setUser} = useContext(AuthContext);

    const handleUpdateProfile = (e) => {
      
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                setUser(auth.currentUser);
                toast.success('Your profile has been update successfully.')
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div className="w-4/6 mx-auto border mt-14 border-green-500 rounded-2xl bg-green-500">
            <PageTitle title={'Update Profile'} />
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold py-2">Update Your Info</h1>
                <div className="card shrink-0 w-full p-4 bg-base-100">
                    <div className="flex items-center justify-center gap-4">
                        <img className="rounded-full animate__animated animate__backInDown animate__slow	2s" src={user&&user.photoURL} alt="" />
                        <p className="animate__animated animate__bounce animate__backInLeft animate__delay-1s animate__slow	2s">{user&&user.displayName}</p>
                    </div>
                    <form onSubmit={handleUpdateProfile} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user.displayName} placeholder="Name" name="name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" defaultValue={user.photoURL} placeholder="Photo" name="photo" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" defaultValue={user.email} name="email" className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;
