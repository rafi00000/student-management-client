import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";


const UpdateClass = () => {
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const {register, handleSubmit} = useForm();

  const { data } = useQuery({
    queryKey: ["update", id],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/classes/single/${id}`);
      return res.data;
    },
  });

  const updateClass =async (data) =>{
    console.log(data);
    const res = await axiosPrivate.patch(`/class/update/${id}`, data);
    if(res.data.modifiedCount){
        toast.success("successfully updated");
    }
  }
  

  return (
    <div>
      <h1 className="text-2xl text-center underline">Update Class</h1>
      <form className="w-4/5 lg:1/2 mx-auto border my-5 p-5 rounded-md" onSubmit={handleSubmit(updateClass)}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            className="input input-bordered"
            defaultValue={data?.title}
            {...register("title")}
          />
        </div>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            className="input input-bordered"
            defaultValue={data?.name}
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="input input-bordered"
            defaultValue={data?.email}
            {...register("email")}
            disabled
          />
        </div>
        <div className="form-control">
          <label>Price</label>

          <input
            type="number"
            className="input input-bordered"
            defaultValue={data?.price}
            {...register("price")}
          />
        </div>
        <div className="form-control">
          <label>Image</label>

          <input
            type="text"
            className="input input-bordered"
            defaultValue={data?.image}
            {...register("image")}
          />
        </div>
        <p className="text-center my-3"><button className="btn btn-outline">Submit</button></p>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateClass;
