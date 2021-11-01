import { HashLink } from 'react-router-hash-link';
import aboutImage from '../../assets/img/about/about.jpg';

const About = () => {
  return (
    <section id="about" className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 pt-52 pb-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-700">
            Before they sold out
            <br className="hidden lg:inline-block" />
            Book your <span className="text-blue-500">Dream Destination</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            High on our wish list is hiking the Great Wall of China, especially
            the more remote sections. From ancient temples to modern cities
            China is full of both culture and beauty. A nature lover and
            photographers dream destination. We want to backpack, explore ice
            caves, visit waterfalls, and relax in the Blue Lagoon.
          </p>
          <div className="flex justify-center">
            <HashLink
              to="/home#destinations"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-10 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg transition shadow-2xl"
            >
              Destinations
            </HashLink>
            <HashLink
              to="/home#testimonials"
              className="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-10 focus:outline-none hover:bg-gray-400 rounded-3xl text-lg transition shadow-2xl"
            >
              Reviews
            </HashLink>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-3xl shadow-2xl hover:shadow transition duration-500"
            alt="about"
            src={aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
