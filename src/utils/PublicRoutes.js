import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './common';

const PublicRoutes = () => {
  return !getToken() ? <Outlet /> : <Navigate to="/dashboard" />
}

export default PublicRoutes;