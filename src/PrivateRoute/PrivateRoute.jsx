import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Progress } from '@nextui-org/react';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md container mx-auto"
        />
    }

    if (user) {
        return children;
    } else {
        Swal.fire({
            text: "You have to log in first to view details",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
    }
    return <Navigate to="/signUp&logIn" state={{ from: location }} replace></Navigate>;

};

export default PrivateRoute;