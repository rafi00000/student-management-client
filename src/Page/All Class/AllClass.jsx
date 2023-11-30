import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { FaBitbucket, FaThumbsUp } from "react-icons/fa";
import toast from "react-hot-toast";

const AllClass = () => {
  const axiosPrivate = useAxiosPrivate();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/classes");
      return res.data;
    },
  });
  console.log(classes);

  // action button work here
  const handleAccept = (id) => {
    axiosPrivate
      .patch(`/add-class-action/${id}`, { status: "accepted" })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("accept successful");
          refetch();
        }
      });
  };

  const handleReject = (id) => {
    axiosPrivate
      .patch(`/add-class-action/${id}`, { status: "rejected" })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("rejection successful");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">All Classes</h1>
      {/* class section */}
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Email</th>
              <th>Description</th>
              <th>status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item) => (
              <tr key={item._id}>
                <td className="border border-black">
                  <div className="avatar">
                    {console.log()}
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} />
                    </div>
                  </div>
                </td>
                <td className="border border-black">{item.title}</td>
                <td className="border border-black">{item.email}</td>
                <td className="border border-black">
                  <p>
                    {item.description?.length > 15
                      ? item.description.slice(0, 15)
                      : item.description}
                  </p>
                </td>
                <td className="border border-black">
                  <p>{item.status}</p>
                </td>
                <td className="border border-black space-x-4 text-center">
                  <button
                    className="btn btn-square"
                    disabled={item.status !== "pending"}
                    onClick={() => handleAccept(item?._id)}
                  >
                    <FaThumbsUp></FaThumbsUp>
                  </button>
                  <button
                    className="btn btn-square"
                    disabled={item.status !== "pending"}
                    onClick={() => handleReject(item?._id)}
                  >
                    <FaBitbucket></FaBitbucket>
                  </button>
                </td>
                <td className="border border-black">
                  <button
                    className="btn btn-sm bg-yellow-300 hover:bg-yellow-400"
                    disabled={item.status !== "accepted"}
                  >
                    See Progress
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClass;
