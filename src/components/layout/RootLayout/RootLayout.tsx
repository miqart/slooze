import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from 'src/store/authStore';

import Spinner from './components/Spinner';

const RootLayout = () => {
  const { isAuthenticated, getUser } = useAuthStore();

  const { isFetching } = useQuery({
    queryKey: ['AUTH_ME'],
    queryFn: getUser,
    enabled: isAuthenticated,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    refetchOnMount: false,
  });

  if (isAuthenticated === undefined || isFetching) return <Spinner />;

  return <Outlet />;
};

export default RootLayout;
