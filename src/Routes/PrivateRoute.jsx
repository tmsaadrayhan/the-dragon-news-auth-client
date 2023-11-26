import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { loading, account } = useContext(AuthContext);
  let location = useLocation();
  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner className="m-3" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  if (account) return children;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
