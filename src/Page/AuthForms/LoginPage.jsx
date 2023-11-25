import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const LoginPage = () => {
    const {user, logIn} = useContext(AuthContext)
    const location = useLocation();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(data =>{
            console.log(data);
        })
        .catch(err =>{
            console.log(err);
        })

    }
    
    return (
        <div>
            <form className="w-3/4 lg:w-1/3 mx-auto space-y-3 border border-black mt-6 p-5 rounded-md" onSubmit={handleSubmit}>
            <p className="text-4xl font-mono font-bold text-center">Login page</p>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" className="input input-bordered" name="email"/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" className="input input-bordered" name="password"/>
                </div>
                <div>
                    <p className="text-center"><button className="btn btn-outline">Login</button></p>
                </div>
                <div>
                    <p className="text-center">New here? <Link className="font-bold text-blue-600" to={'/register'}>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;