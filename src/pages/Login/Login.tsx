import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Button from 'src/components/ui/Button';
import { Form } from 'src/components/ui/Form';
import Input from 'src/components/ui/Input';
import { useAuthStore } from 'src/store/authStore.ts';

import { LoginSchema, TLoginForm } from './Login.zod.ts';

const Login = () => {
  const { login, isLoginPending, isAuthenticated, error, user } =
    useAuthStore();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: 'emilys',
      password: 'emilyspass',
    },
  });

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    await login(data.username, data.password);
  };

  if (isAuthenticated) {
    return (
      <Navigate to={user?.role === 'admin' ? '/dashboard' : '/home'} replace />
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h2 className="mb-2 text-center text-3xl font-bold">Welcome Back</h2>
          <p className="mb-8 text-center text-gray-500">Login</p>
          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <Input
                required
                className="h-12"
                name="username"
                control={form.control}
                label="Username"
                placeholder="Username"
                disabled={isLoginPending}
              />
              <Input
                required
                className="h-12"
                name="password"
                control={form.control}
                label="Password"
                placeholder="Password"
                type="password"
                autoComplete="current-password"
                disabled={isLoginPending}
              />
              <Button
                size="xl"
                type="submit"
                className="w-full rounded-2xl bg-violet-500 px-4 py-2 font-semibold text-white hover:bg-violet-600 disabled:opacity-50"
                isPending={isLoginPending}
                pendingText="Signing in..."
              >
                Sign in
              </Button>
            </form>
          </Form>
          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-200" />
            <span className="mx-2 text-xs text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-200" />
          </div>
          <Button
            size="xl"
            type="button"
            className="w-full rounded-2xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            disabled={isLoginPending}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </Button>
          <div className="mt-6 flex items-center justify-center gap-x-1 text-center text-sm">
            <span className="text-foreground">Don’t have an account?</span>
            <div className="cursor-pointer font-medium text-primary hover:text-primary/90">
              Sign Up
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-screen w-1/2 md:block">
        <img
          src="/login-image.jpg"
          alt="Login Visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
