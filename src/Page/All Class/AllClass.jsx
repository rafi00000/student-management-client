import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { FaBitbucket, FaThumbsUp } from 'react-icons/fa';

const AllClass = () => {
  const axiosPrivate = useAxiosPrivate();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/classes");
      return res.data;
    },
  });
  console.log(classes);

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
            </tr>
          </thead>
          <tbody>
            {classes.map((item) => <tr key={item._id}>
                <td className="border border-black">
                  <div className="avatar">
                    {console.log()}
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} />
                    </div>
                  </div>
                </td>
                <td className="border border-black">
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td className="border border-black">Purple</td>
                <td className="border border-black">
                  <p>{item.description.length > 15 ? item.description.slice(0, 15) : item.description}</p>
                </td>
                <td className="border border-black">
                  <p>{item.status}</p>
                </td>
                <td className="border border-black space-x-4 text-center">
                  <button className="btn btn-square">
                    <FaThumbsUp></FaThumbsUp>
                  </button>
                  <button className="btn btn-square">
                    <FaBitbucket></FaBitbucket>
                  </button>
                </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClass;
