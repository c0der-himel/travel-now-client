import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState({});
  const cancelButtonRef = useRef(null);
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://cryptic-ocean-42525.herokuapp.com/booking', {
        people: data.people,
        address: data.address,
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
        cost: destination.price,
        destination: destination.destinationName,
        status: 'pending',
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          setOpen(true);
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`https://cryptic-ocean-42525.herokuapp.com/destinations/${id}`)
      .then((res) => setDestination(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section id="about" className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-700">
            {destination.night} Nights {destination.day} Days Stay At
            <br className="hidden lg:inline-block" />
            <span className="text-blue-500">
              <h3 className="mt-3">{destination.destinationName}</h3>
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">{destination.description}</p>
          <div className="flex flex-wrap w-full mb-5">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-2xl text-xl font-bold title-font mb-2 text-gray-700">
                Please fill the form for booking
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-gray-700 text-lg font-bold mb-3">
              Name: {user.displayName}
            </h3>
            <h3 className="text-gray-700 text-lg font-bold">
              Email: {user.email}
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap">
              <div className="w-full mb-5">
                <div className="relative">
                  <label
                    htmlFor="people"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Group Size (People)
                  </label>
                  <input
                    {...register('people', { required: true })}
                    type="number"
                    id="people"
                    name="people"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.people?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      Group of people size is required
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  Address
                </label>
                <textarea
                  {...register('address', { required: true })}
                  id="address"
                  name="address"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {errors.address?.type === 'required' && (
                  <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                    Address is required
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <button
                type="submit"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-10 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg transition shadow-2xl"
              >
                Book Now
              </button>
              {/* modal popup */}
              {open ? (
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                  >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>
                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ShieldCheckIcon
                                  className="h-8 w-8 text-blue-500"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title
                                  as="h3"
                                  className="text-2xl leading-6 font-bold text-blue-500 mt-1"
                                >
                                  Booking Placed Successfully
                                </Dialog.Title>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <Link
                              to="/mybookings"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              My Bookings
                            </Link>
                            <button
                              type="button"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>
              ) : null}
            </div>
          </form>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <img
            className="object-cover object-center rounded-3xl shadow-2xl hover:shadow transition duration-500"
            alt="about"
            src={destination.img}
          />
          <h3 className="tracking-widest text-white text-lg font-bold title-font absolute top-10 left-0 bg-blue-500 px-4 py-1 rounded-tr-3xl rounded-br-3xl shadow-2xl">
            ${destination.price}
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Details;
