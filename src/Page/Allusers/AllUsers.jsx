import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axioSecure = useAxiosPrivate();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axioSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    console.log(id);
    axioSecure.patch(`/admin/admin/${id}`, {role: "admin"})
    .then(res => {
        console.log(res);
        refetch();
    })
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold">All users</h2>
      {/* search function */}
      <form className="mt-5">
        <input type="text" name="search" className="input input-bordered" />
        <button className="btn btn-outline">search</button>
      </form>

      {/* table */}
      <table className="table w-full table-fixed ">
        {/* head */}
        <thead>
          <tr>
            <th className="border border-black">Image</th>
            <th className="border border-black">User Name</th>
            <th className="border border-black">User Email</th>
            <th className="border border-black">Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="">
              {console.log(user)}
              <td className="border border-black">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="border border-black">{user?.name}</td>
              <td className="border border-black">{user.email}</td>
              <td className="border border-black space-x-2">
                <button disabled={user.role === "admin"} onClick={() =>handleMakeAdmin(user._id)} className="btn bg-green-500 hover:bg-green-600">
                  <FaUsers></FaUsers>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
