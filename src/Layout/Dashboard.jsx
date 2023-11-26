import { NavLink, Outlet } from "react-router-dom";
import { FaList } from "react-icons/fa";

const Dashboard = () => {
  // TODO: make this admin func from db
  const isAdmin = true;
  const isUser = false;

  const navItems = (
    <>
      {isAdmin && (
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

          <li>
            <NavLink to={"/dashboard/profile"}>Profile</NavLink>
          </li>
        </>
      )}

      {isUser && (
        <>
          <li>
            <NavLink to={"/dashboard/my-enrolled-class"}>
              My Enrolled classes
            </NavLink>
          </li>

          <li>
            <NavLink to={""}>Profile</NavLink>
          </li>
        </>
      )}
      {/* this is shared nav links */}
      <div className="divider divider-neutral"></div>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto lg:flex">
      <div className="drawer py-8 w-fit">
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
      <div className="w-full py-10">
        <h1 className="text-center font-bold text-5xl uppercase underline mb-10">Dashboard</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
