import { Navigate } from 'react-router-dom';
import { useAuthStore } from 'src/store/authStore.ts';

const HomeRedirect = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return <Navigate to={isAuthenticated ? '/home' : '/login'} replace />;
};

export default HomeRedirect;
