import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    console.log(user);
    const location = useLocation();
    if(loading){
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={location.pathname} to={'/login'} replace={true}></Navigate>
    }
    
};

export default PrivateRoutes;