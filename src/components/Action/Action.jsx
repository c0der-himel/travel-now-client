import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Action = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-24 pb-44 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
          <span className="block">Ready to dive in ?</span>
          <span className="block text-blue-500">
            Start your travelling today with us.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <HashLink
              to="/home#destinations"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-3xl shadow-2xl text-white bg-blue-500 hover:bg-blue-600 transition duration-500 hover:shadow"
            >
              Destinations
            </HashLink>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              to="/mybookings"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-3xl shadow-2xl text-gray-500 bg-gray-300 hover:bg-gray-400 hover:text-white transition duration-500 hover:shadow"
            >
              Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
