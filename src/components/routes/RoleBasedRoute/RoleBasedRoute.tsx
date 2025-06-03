import { Navigate } from 'react-router-dom';
import { useAuthStore, UserRole } from 'src/store/authStore.ts';

interface RoleBasedRouteProps {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}
const RoleBasedRoute = ({ allowedRoles, children }: RoleBasedRouteProps) => {
  const role = useAuthStore((state) => state.user?.role);

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};

export default RoleBasedRoute;
