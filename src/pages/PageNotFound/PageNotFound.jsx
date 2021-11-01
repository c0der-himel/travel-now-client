import { Link } from 'react-router-dom';
import errorImage from '../../assets/img/404/404.svg';

const PageNotFound = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-10 pb-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={errorImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-700">
            404 Page Not Found
          </h1>
          <p className="mb-8 leading-relaxed">
            The page your looking for doesn't exist.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-10 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
