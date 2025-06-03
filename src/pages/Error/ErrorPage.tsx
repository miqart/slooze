import { useNavigate, useRouteError } from 'react-router-dom';
import Button from 'src/components/ui/Button';
import { dashboardRoles } from 'src/constants.ts';
import { useAuthStore } from 'src/store/authStore.ts';

interface RouteError {
  statusText?: string;
  message?: string;
}

interface IProps {
  statusCode?: 403 | 404;
}

const ErrorPage = ({ statusCode }: IProps) => {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useAuthStore((state) => state.user?.role);

  return (
    <div id="error-page" className="mt-80 w-full text-center">
      {statusCode ? (
        <>
          {statusCode === 403 && (
            <>
              <h1>403</h1>
              <h3 className="mb-4">Forbidden</h3>
              <p>
                You don’t have permission to access the page or resource you
                were trying to reach
              </p>
            </>
          )}
          {statusCode === 404 && (
            <>
              <h1>404</h1>
              <h3 className="mb-4">Not Found</h3>
              <p>This page does not exist</p>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="mb-4">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i className="text-destructive">
              {error.statusText ?? error.message}
            </i>
          </p>
        </>
      )}
      <Button
        className="mt-4"
        onClick={() =>
          navigate(
            isAuthenticated
              ? role && dashboardRoles.includes(role)
                ? '/dashboard'
                : '/home'
              : '/login'
          )
        }
      >
        Go home
      </Button>
    </div>
  );
};

export default ErrorPage;
