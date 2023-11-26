import { NavLink, Outlet } from "react-router-dom";
import { FaList } from 'react-icons/fa';

const Dashboard = () => {
    const navItems = (
        <>
          <li>
            <NavLink to={"/dashboard/my-enrolled-class"}>My Enrolled classes</NavLink>
          </li>
    
          <li>
            <NavLink to={""}>Profile</NavLink>
          </li>
        </>
    )
  return (
    <div className="container mx-auto lg:flex">
      <div className="drawer py-8 border w-fit">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer btn"><FaList></FaList></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 min-h-full bg-yellow-200 lg:w-1/4 space-y-3">
      {navItems}
    </ul>
  </div>
</div>
      <div className="w-full py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
