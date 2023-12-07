import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../UserContext/UserProvider"; 



function ProtectedRoutes(){
    const {isLoged} = useUserContext();

    return(
        isLoged ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes