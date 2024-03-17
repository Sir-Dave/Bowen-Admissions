import { Navigate, useLocation } from "react-router-dom"

import { AuthContext } from "./context/AuthContext";

type Props = { children: React.ReactNode}

const ProtectedRoute = ({children}: Props) => {
    const location =  useLocation();
    const { isLoggedIn } = AuthContext();
    return isLoggedIn() ? ( <>{children}</>) : (
        <Navigate to="/sign-in" state = {{ from: location }} replace />
    );
}

export default ProtectedRoute

