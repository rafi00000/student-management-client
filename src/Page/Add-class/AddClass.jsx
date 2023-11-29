import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from './../../Providers/AuthProvider';
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

// imgbb api config
const api_key = import.meta.env.VITE_IMAGE_HOST;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${api_key}`;

const AddClass = () => {
    const {register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)

    const handleAddClass = async(data) =>{
        console.log(data);
        const imageFile = {image: data.image[0]} ;
        const res = await axios.post(image_hosting_api, imageFile , {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        console.log(res.data);

        if(res.data.success){
          const menuItem = {
            name: data.name,
            email: data.email,
            description: data.description, 
            price: data.price,
            title: data.title,
            image: res.data.data.display_url,
            status: "pending"
          };

          axiosPublic.post('/add-class', menuItem)
          .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
              alert("success");
            }
          })
        }

      }
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddClass)}
        className="w-1/2 mx-auto my-5 border p-5 rounded-md"
      >
        <p className="text-center text-4xl font-bold uppercase underline">
          Add Class
        </p>
        <div className="form-control">
          <label>Title</label>
          <input type="text" className="input input-bordered" {...register("title")}/>
        </div>

        <div className="form-control">
          <label>Name</label>
          <input type="text" className="input input-bordered" {...register("name")} defaultValue={user.displayName}/>
        </div>

        <div className="form-control">
          <label>Email</label>
          <input type="email" className="input input-bordered" {...register("email")} defaultValue={user.email} />
        </div>

        <div className="form-control">
          <label>Price</label>
          <input type="number" className="input input-bordered" {...register("price")}/>
        </div>

        <div className="form-control">
          <label>Description</label>
          <textarea
            {...register("description")}
            cols="30"
            rows="10"
            className="input input-bordered p-2"
          ></textarea>
        </div>

        <div className="form-control">
          <label>Image</label>
          <input type="file" {...register("image")} />
        </div>
        <p className="my-3 text-center">
          <button className="btn btn-outline">Add Class</button>
        </p>
      </form>
    </div>
  );
};

export default AddClass;
