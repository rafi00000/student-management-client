import { useContext, useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AuthContext } from "../../Providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const axiosSecure = useAxiosPrivate();

  useEffect(() => {
    axiosSecure.get(`/user/${user.email}`).then((res) => {
      setUserInfo(res.data);
    });
  }, [axiosSecure, user]);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold bg-yellow-300 my-4 p-2">
        My Profile
      </h2>
      <div className="w-fit mx-auto">
        <img src={userInfo?.image} className="w-64"/>
        <h2 className="font-bold text-xl text-center">User Name: {userInfo?.name}</h2>
        <p className="text-center">{}</p>
      </div>
      {/*  */}
      <div>
        <p>Email: {userInfo?.email}</p>
        <p>Role: {userInfo?.role}</p>
        <p>Phone: {userInfo?.number}</p>
      </div>
    </div>
  );
};

export default MyProfile;
