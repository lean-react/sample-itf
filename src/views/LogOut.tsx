import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/context";

export default function LogOut() {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, [logout]);

    return <Navigate to="/" replace />;
}