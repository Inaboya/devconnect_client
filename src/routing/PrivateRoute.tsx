import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader';
import { RootState } from '../redux/store';

const PrivateRoute = ({ Component }: any) => {
  const [loading, isAuth] = useSelector((state: RootState) => [
    state.user.loading,
    state.user.isAuthenticated,
  ]);

  if (loading) return <SpinnerLoader />;

  if (isAuth) return <Component />;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
