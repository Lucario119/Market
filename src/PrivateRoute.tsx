import { Navigate, Outlet } from 'react-router-dom';
interface isAdminLoggedProp {
  isAdminLogged: boolean;
}

function PrivateRoute({ isAdminLogged }: isAdminLoggedProp) {
  return isAdminLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
