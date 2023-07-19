import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Spinner from '../layout/Spinner';

interface PrivateRouteProps {
  component: React.ComponentType;
  token: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  token,
}: PrivateRouteProps) => {
  return <>{token ? <Component /> : <Navigate to="/login" />}</>;
};

PrivateRoute.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state: any) => ({
  token: state.auth.token,
})

export default connect(mapStateToProps)(PrivateRoute);
