import { NavLink, Outlet } from "react-router-dom";
import { FaList } from "react-icons/fa";
import useRole from "../Hooks/useRole";

const Dashboard = () => {
  // TODO: make this admin func from db
  const [role, isloading] = useRole();
  console.log(role);
  const navItems = (
    <>
      {role === "admin" && (
        <>
          <li>
            <NavLink to={"/dashboard/teacher-req"}>Teacher Request</NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard/users"}>Users</NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard/all-class"}>All classes</NavLink>
          </li>
        </>
      )}

      {role === "student" && (
        <>
          <li>
            <NavLink to={"/dashboard/my-enrolled-class"}>
              My Enrolled classes
            </NavLink>
          </li>
        </>
      )}

      {/* teacher navlinks */}

      {role === "teacher" && (
        <>
          <li>
            <NavLink to={"/dashboard/add-class"}>
              Add Class
            </NavLink>
            <NavLink to={"/dashboard/my-class"}>
              My Class
            </NavLink>
          </li>
        </>
      )}

      {/* this is shared nav links */}
      <div className="divider divider-neutral"></div>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/dashboard/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className=" lg:flex items-center bg-yellow-400 px-5 rounded-md">
        <div className="drawer py-8">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button cursor-pointer btn"
            >
              <FaList></FaList>
            </label>
          </div>
          <div className="drawer-side z-30">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 min-h-full bg-yellow-200 lg:w-1/4 space-y-3">
              {navItems}
            </ul>
          </div>
        </div>

        <div className=" w-full ">
          <h3 className="text-2xl font-bold">Dashboard</h3>
        </div>
      </div>
      {/* 2nd flex item */}
      <div className="w-full min-h-screen border">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
