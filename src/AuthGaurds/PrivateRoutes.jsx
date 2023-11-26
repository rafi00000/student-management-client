import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    
    console.log(user);
    const location = useLocation();
    if(user){
        return children
    }
    else{
        return <Navigate state={location.pathname} to={'/login'} replace={true}></Navigate>
    }
    
};

export default PrivateRoutes;