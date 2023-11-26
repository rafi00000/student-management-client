import { useQuery } from "@tanstack/react-query";
import { FaThumbsUp, FaTimesCircle } from "react-icons/fa";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import toast, { Toaster } from "react-hot-toast";

const TeacherReq = () => {
  const axiosSecure = useAxiosPrivate();
  const { data: teacherReq = [], refetch } = useQuery({
    queryKey: ["teacher-req"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacher-req");
      return res.data;
    },
  });

  console.log(teacherReq);

  // handling the btn actions
  const handleConfirm = (email) => {
    console.log(email);
    axiosSecure.patch(`/admin/teacher/${email}`).then((res) => {
      if (res.data.modifiedCount) {
        // updating the teacher status from another db
        axiosSecure
          .patch(`/admin/teacher-req/${email}`, { status: "accepted" })
          .then((res) => {
            refetch();
            toast.success("success in making teacher");
          });
      }
    });
  };

  const handleReject = (email) => {
    axiosSecure
      .patch(`/admin/teacher-req/${email}`, { status: "rejected" })
      .then((res) => {
        refetch();
        toast.success("successful operation");
      });
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center text-4xl font-bold font-mono">
        Teacher Requests
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Experience</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {teacherReq.map((req) => (
            <tr key={req?._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={req.url} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{req.name}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-sm">{req.experience}</div>
              </td>
              <td>{req.title}</td>
              <td>{req.category}</td>
              <td>{req.status}</td>

              {/* action btn */}
              <th className="space-x-2">
                <button
                  className="btn bg-green-500 hover:bg-green-600"
                  onClick={() => handleConfirm(req.email)}
                >
                  <FaThumbsUp className="text-white"></FaThumbsUp>
                </button>
                <button
                  className="btn bg-red-500 hover:bg-red-600"
                  onClick={() => handleReject(req.email)}
                >
                  <FaTimesCircle className="text-white"></FaTimesCircle>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster></Toaster>
    </div>
  );
};

export default TeacherReq;
