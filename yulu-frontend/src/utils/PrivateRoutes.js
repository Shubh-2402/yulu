import { Outlet, Navigate } from 'react-router-dom'
import getCookie from './getCookie';

const PrivateRoutes = () => {
    const authToken = getCookie("authToken");
    let auth = {'token': authToken ? true : false }
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes