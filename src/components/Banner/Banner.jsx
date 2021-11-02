import { HashLink } from 'react-router-hash-link';
import bannerImage from '../../assets/img/banner/banner.jpg';

const Banner = () => {
  return (
    <div
      className="relative py-24 flex content-center items-center justify-center"
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute bg-blue-900 opacity-50"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-bold text-5xl">Travel Now</h1>
              <p className="mt-4 text-lg text-gray-300">
                Since 2014, we’ve helped more than 500,000 people of all ages
                enjoy the best outdoor experience.
              </p>
              <div className="btn-group mt-10">
                <HashLink
                  to="/home#destinations"
                  className="bg-blue-500 hover:bg-blue-600 px-12 py-3 text-white rounded-3xl shadow-2xl transition text-lg duration-500 hover:shadow"
                >
                  Explore Tours
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
