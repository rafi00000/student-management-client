import { useContext } from "react";
import { FaList } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/"}>All classes</NavLink>
      </li>

      <li>
        <NavLink to={"/join-teacher"}>Teach On Edutrack</NavLink>
      </li>
    </>
  );
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="drawer drawer-end lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button"
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
            <ul className="menu w-2/3 p-4 min-h-full bg-base-200 z-30 space-y-2">
              {navItems}
            </ul>
          </div>
        </div>
      <a className="btn btn-ghost text-2xl font-black">EduTrack</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* avatar here */}
    {
      user ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL || ""} alt="" className="rounded-full" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-72 space-y-2"
      >
        <p className="text-center text-xl font-bold">{user?.displayName || "no name"}</p>
        <Link to={'/dashboard'}>
          <a>Dashboard</a>
        </Link>
        <li onClick={logOut}>
          <a>Logout</a>
        </li>
      </ul>
    </div> : 
    <div>
      <Link to={'/login'}><button className="btn btn-sm btn-outline">Login</button></Link>
    </div>
    }
        
      </div>
    </div>
  );
};

export default NavBar;
