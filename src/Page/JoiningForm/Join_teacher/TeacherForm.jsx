import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const TeacherForm = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    console.log(user);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const experience = form.experience.value;
        const title = form.title.value;
        const category = form.category.value;
        const teacherInfo = {name, url, experience, title, category, email: user.email, userID: user._id, status: 'pending'};

        axiosPublic.post('/teacher-req', teacherInfo)
        .then(res => {
            console.log(res);
        })
    }
    

    return (
        <form className="my-10 w-11/12 lg:w-3/4 mx-auto p-5 border rounded-md" onSubmit={handleSubmit}>
            <h1 className="text-5xl text-center font-semibold font-mono">Join As Teacher</h1>
            <div className="form-control">
                <label>Name</label>
                <input type="text" className="input input-bordered" name="name" defaultValue={user?.displayName}  />
            </div>
            
            <div className="form-control">
                <label>image</label>
                <input type="text" className="input input-bordered" name="url" defaultValue={user?.photoURL} />
            </div>

            <div className="form-control">
                <label>Experience</label>
                <select name="experience" className="input input-bordered">
                    <option value="beginner">Beginner</option>
                    <option value="experienced">Experienced</option>
                    <option value="someIdea">Some Idea</option>
                </select>
            </div>

            <div className="form-control">
                <label>Title</label>
                <input type="text" className="input input-bordered" name="title" required />
            </div>
            
            <div className="form-control">
                <label>Category</label>
                <select name="category" className="input input-bordered">
                    <option value="web">Web Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="video">Video Editing</option>
                    <option value="cyber">Cyber Security</option>
                </select>
            </div>

            <div className="my-5">
                <p className="text-center"><button className="btn btn-outline">Submit for review</button></p>
            </div>
        </form>
    );
};

export default TeacherForm;