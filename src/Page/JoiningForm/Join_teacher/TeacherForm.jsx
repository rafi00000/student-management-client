import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const TeacherForm = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <form className="my-10 w-11/12 lg:w-3/4 mx-auto">
            <h1 className="text-5xl text-center font-semibold font-mono">Join As Teacher</h1>
            <div className="form-control">
                <label>Name</label>
                <input type="text" className="input input-bordered" />
            </div>
            
            <div className="form-control">
                <label>image</label>
                <input type="text" className="input input-bordered" defaultValue={user?.photoURL} />
            </div>

            <div className="form-control">
                <label>Experience</label>
                <select name="experience" className="input input-bordered">
                    <option value="1">Beginner</option>
                    <option value="2">Experienced</option>
                    <option value="3">Some Idea</option>
                </select>
            </div>
            
            
        </form>
    );
};

export default TeacherForm;