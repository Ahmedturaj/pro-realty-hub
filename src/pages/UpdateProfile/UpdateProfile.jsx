import  { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config.init";
import 'animate.css';
import PageTitle from "../../components/PageTitle/PageTitle";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
          
            setUser({
                ...user,
                displayName: name,
                photoURL: photo
            });
         })
        
        .catch(error => {
            console.log(error.message);
        });
     
    };

    return (
        <div className="w-4/6 mx-auto border-2 mt-14 border-green-500 shadow-green-200 shadow-lg rounded-2xl bg-green-500 mb-5">
            <PageTitle title={'Update Profile'} />
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold py-2">Update Your Info</h1>
                <div className="card shrink-0 w-full p-4 bg-base-100">
                    <div className="flex items-center justify-center gap-4">
                        <img className="rounded-full animate__animated animate__fadeIn animate__zoomIn animate__slow	2s" src={user && user.photoURL} alt="" />
                        <p className="animate__animated animate__bounce animate__lightSpeedInLeft animate__delay-2s animate__slow	2s">{user && user.displayName}</p>
                    </div>
                    <form onSubmit={handleUpdateProfile} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user.displayName} placeholder="Name" name="name" className="input input-bordered w-full border-2 border-green-500 border-dotted" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" defaultValue={user.photoURL} placeholder="Photo" name="photo" className="input input-bordered w-full border-2 border-green-500 border-dotted" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" defaultValue={user.email} name="email" className="input input-bordered border-2 border-green-500 border-dotted" readOnly />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 hover:border-2 hover:border-green-500">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
