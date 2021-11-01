import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../assets/img/login/google.png';
import logo from '../../assets/img/logo/logo.png';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
  const { user, errors, signInUsingGoogle, signInUsingEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const redirected_url = location.state?.from || '/home';

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    setError('');
    signInUsingEmail(email, password);
    // redirecting
    user ? history.push(redirected_url) : history.push('/login');
  };

  const handleGoogleLogIn = () => {
    signInUsingGoogle();
    // redirecting
    user ? history.push(redirected_url) : history.push('/login');
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 rounded-3xl shadow-2xl p-10">
          <div>
            <img
              className="mx-auto h-12 w-auto shadow-2xl"
              src={logo}
              alt="logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
              Log in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                to="/register"
                className="font-medium text-blue-500 hover:text-blue-600 transition"
              >
                Create Account
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleLogIn}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={handlePassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-medium rounded-3xl text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition mb-4"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white ml-2"
                    aria-hidden="true"
                  />
                </span>
                Log In
              </button>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or continue with Google
              </p>
              <button
                onClick={handleGoogleLogIn}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-medium rounded-3xl text-gray-700 bg-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition  border-blue-500 mt-3 hover:text-white"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <img className="h-5 w-5 ml-2" src={google} alt="google" />
                </span>
                Google Log In
              </button>
            </div>
          </form>
          <div>
            {error ? (
              <p className="bg-red-300 text-gray-600 text-center rounded-3xl px-4 py-3 mb-8">
                {error}
              </p>
            ) : (
              ''
            )}
            {errors ? (
              <p className="bg-red-300 text-gray-600 text-center rounded-3xl px-4 py-3 mb-8">
                {errors}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
