import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/"}>All classes</NavLink>
      </li>

      <li>
        <NavLink to={"/"}>Teach On Edutrack</NavLink>
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
