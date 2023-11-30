import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import toast, { Toaster } from "react-hot-toast";

const UpdateClass = () => {
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const { data: classInfo } = useQuery({
    queryKey: ["update", id],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/classes/single/${id}`);
      return res.data;
    },
  });

  const updateClass = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const image = form.image.value;
    const data = {
      title,
      name,
      email,
      price,
      image,
    };
    console.log(data);
    const res = await axiosPrivate.patch(`/class/update/${id}`, data);
    if (res.data.modifiedCount) {
      toast.success("successfully updated");
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center underline">Update Class</h1>
      <form
        className="w-4/5 lg:1/2 mx-auto border my-5 p-5 rounded-md"
        onSubmit={updateClass}
      >
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            className="input input-bordered"
            defaultValue={classInfo?.title}
            name="title"
          />
        </div>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            className="input input-bordered"
            defaultValue={classInfo?.name}
            name="name"
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="input input-bordered"
            defaultValue={classInfo?.email}
            name="email"
            disabled
          />
        </div>
        <div className="form-control">
          <label>Price</label>

          <input
            type="number"
            className="input input-bordered"
            defaultValue={classInfo?.price}
            name="price"
          />
        </div>
        <div className="form-control">
          <label>Image</label>

          <input
            type="text"
            className="input input-bordered"
            defaultValue={classInfo?.image}
            name="image"
          />
        </div>
        <p className="text-center my-3">
          <button className="btn btn-outline">Submit</button>
        </p>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateClass;
