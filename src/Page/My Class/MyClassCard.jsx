import { FaBitbucket, FaPen } from "react-icons/fa";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MyClassCard = ({ card, refetch }) => {
  console.log(card);
  const { title, name, email, price, description, status, image, _id } = card;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    console.log(id);

    const res = await axiosPrivate.delete(`/class/${id}`);
    console.log(res);
    if (res.data) {
      toast.success("Deleted successfully");
      refetch();
    }
  };

  return (
    <div className="shadow-xl rounded-md p-5 border space-y-3">
      <div className="relative">
        <img src={image} alt="" className="mx-auto w-52 h-52" />
        <div className="absolute right-0 top-0 flex flex-col gap-2">
          <button
            className="btn"
            onClick={() => navigate(`/dashboard/update/${_id}`)}
          >
            <FaPen />
          </button>
          <button className="btn" onClick={() => handleDelete(_id)}>
            <FaBitbucket />
          </button>
        </div>
      </div>
      <p className="text-center text-xl">Title: {title}</p>
      <div className="flex items-center justify-around">
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>

      <div className="flex items-center justify-around">
        <p>Price: {price}$</p>
        <p>Status: {status}</p>
      </div>
      <p>Description: {description}</p>
      <p className="text-center">
        <button
          className="btn btn-outline"
          onClick={() => navigate(`/dashboard/my-class/${_id}`)}
        >
          See Details
        </button>
      </p>
      <Toaster></Toaster>
    </div>
  );
};

export default MyClassCard;
