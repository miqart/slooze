import 'src/styles/index.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AuthenticatedLayout from 'src/components/layout/AuthenticatedLayout';
import RootLayout from 'src/components/layout/RootLayout';
import HomeRedirect from 'src/components/routes/HomeRedirect';
import ProtectedRoute from 'src/components/routes/ProtectedRoute';
import RoleBasedRoute from 'src/components/routes/RoleBasedRoute';
import { dashboardRoles } from 'src/constants.ts';
import Dashboard from 'src/pages/Dashboard';
import EmptyPage from 'src/pages/EmptyPage';
import ErrorPage from 'src/pages/Error';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomeRedirect />} />
      <Route path="login" element={<Login />} />
      <Route path="403" element={<ErrorPage statusCode={403} />} />

      {/* Routes for logged-in users */}
      <Route
        element={
          <ProtectedRoute>
            <AuthenticatedLayout />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="products" element={<EmptyPage title="Products" />} />
        <Route path="add/product" element={<EmptyPage title="Add Product" />} />
        <Route path="traffic" element={<EmptyPage title="Traffic" />} />
        <Route path="earning" element={<EmptyPage title="Earning" />} />
        <Route path="payment" element={<EmptyPage title="Payment" />} />
        <Route path="payout" element={<EmptyPage title="Payout" />} />
        <Route path="my-profile" element={<EmptyPage title="My Profile" />} />
        <Route path="security" element={<EmptyPage title="Security" />} />
        <Route path="support" element={<EmptyPage title="Support" />} />

        {/* Routes for specific roles */}
        <Route
          path="dashboard"
          element={
            <RoleBasedRoute allowedRoles={dashboardRoles}>
              <Dashboard />
            </RoleBasedRoute>
          }
        />
      </Route>

      <Route path="*" element={<ErrorPage statusCode={404} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
