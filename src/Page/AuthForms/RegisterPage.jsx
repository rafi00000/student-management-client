import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const axiosPublic = useAxiosPublic();
    const {emailRegister} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const number = form.number.value;


        emailRegister(email, password)
        .then(data =>{
            console.log(data);
            if(data.user){
                updateProfile(data.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                .then(res => {
                    toast.success("Created user successfully")
                    navigate("/")
                });
            }

            axiosPublic.post('/users', {name, email, role: "student", image: photoUrl, number})
            .then(data  => {
                console.log(data);
            })
            .catch(err =>{
                console.log(err);
            })
            
        })
        .catch(err =>{
            console.log(err);
        })

    }

    return (
        <div>
            <form className="w-3/4 lg:w-1/2 mx-auto space-y-3 border border-black mt-6 p-5 rounded-md" onSubmit={handleRegister}>
            <p className="text-4xl font-mono font-bold text-center">Register page</p>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" className="input input-bordered" name="name"/>
                </div>
                <div className="form-control">
                    <label>Photo URL</label>
                    <input type="text" className="input input-bordered" name="url"/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" className="input input-bordered" name="email"/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" className="input input-bordered" name="password"/>
                </div>
                <div className="form-control">
                    <label>Contact Number</label>
                    <input type="text" className="input input-bordered" name="number"/>
                </div>
                <div>
                    <p className="text-center"><button className="btn btn-outline">Register</button></p>
                </div>
                <div>
                    <p className="text-center">New here? <Link className="font-bold text-blue-600" to={'/login'}>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;