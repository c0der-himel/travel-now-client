import userImage from '../../assets/img/header/user.png';

const Testimonials = () => {
  return (
    <section id="testimonials" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-700">
              Testimonials
            </h1>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-3xl shadow-2xl hover:shadow transition duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="text-gray-500 mb-6">
                Our trip was truly a once-in-a-lifetime experience and we are so
                grateful to everyone that made it happen seamlessly. Our travel
                planner, Jaouad, was incredible. After reading our initial
                request and speaking with us on the phone, he designed a tour
                perfectly custom to what our interests were.
              </p>
              <a href="/" className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={userImage}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <h2 className="title-font font-bold text-blue-500 text-lg">
                    Holden Caulfield
                  </h2>
                  <span className="text-gray-500 text-sm">Teacher</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded-3xl shadow-2xl hover:shadow transition duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="text-gray-500 mb-6">
                Fantastic! Our Travel Now company took care of everything. The
                owner and his wife met us at the airport with a care package of
                coffee and chocolate. It was such a nice welcome. Our drivers to
                and from the resort were great. The transportation was
                comfortable and we had plenty of time to stop along the way.
              </p>
              <a href="/" className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={userImage}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <h2 className="title-font font-bold text-blue-500 text-lg">
                    Alper Kamu
                  </h2>
                  <span className="text-gray-500 text-sm">Lawyer</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
