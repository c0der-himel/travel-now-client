import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { Fragment, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HashLink } from 'react-router-hash-link';

const NewDestination = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = ({
    destinationName,
    description,
    price,
    img,
    night,
    day,
  }) => {
    const booking = { destinationName, description, price, img, night, day };
    axios
      .post('https://cryptic-ocean-42525.herokuapp.com/newbooking', booking)
      .then((res) => {
        if (res.data.insertedId) {
          setOpen(true);
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-700">
            Add A New Destination
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded mx-auto"></div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <form
              className="flex flex-wrap"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="destinationName"
                    className="leading-7 text-sm text-gray-600 ml-2"
                  >
                    Destination Name
                  </label>
                  <input
                    {...register('destinationName', { required: true })}
                    type="text"
                    id="destinationName"
                    name="destinationName"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3"
                  />
                  {errors.destinationName?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      Destination Name is required
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="price"
                    className="leading-7 text-sm text-gray-600 ml-2"
                  >
                    Price
                  </label>
                  <input
                    {...register('price', { required: true })}
                    type="number"
                    id="price"
                    name="price"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3"
                  />
                  {errors.price?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      Price is required
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="night"
                    className="leading-7 text-sm text-gray-600 ml-2"
                  >
                    Night
                  </label>
                  <input
                    {...register('night', { required: true })}
                    type="number"
                    id="night"
                    name="night"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3"
                  />
                  {errors.night?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      How many night is required
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="day"
                    className="leading-7 text-sm text-gray-600 ml-2"
                  >
                    Day
                  </label>
                  <input
                    {...register('day', { required: true })}
                    type="number"
                    id="day"
                    name="day"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3"
                  />
                  {errors.day?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      How many day is required
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="img"
                    className="leading-7 text-sm text-gray-600 ml-2"
                  >
                    Image URL
                  </label>
                  <input
                    {...register('img', { required: true })}
                    type="text"
                    id="img"
                    name="img"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3"
                  />
                  {errors.img?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      Image URL is required
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="description"
                    className="leading-7 text-sm text-gray-600 ml-2"
                  >
                    Description
                  </label>
                  <textarea
                    rows="8"
                    {...register('description', { required: true })}
                    id="description"
                    name="description"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mb-3 resize-none"
                  ></textarea>
                  {errors.description?.type === 'required' && (
                    <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded">
                      Description is required
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 w-full mt-3">
                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 hover:shadow rounded-3xl text-lg shadow-2xl transition duration-500">
                  Add Destination
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
                                    Destination Added Successfully
                                  </Dialog.Title>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <HashLink
                                to="/home#destinations"
                                className="w-full inline-flex justify-center rounded-3xl shadow-2xl border border-transparent px-6 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow"
                              >
                                Destinations
                              </HashLink>
                              <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-3xl shadow-2xl px-6 py-2 text-base font-medium text-red-500 border border-red-500 hover:bg-red-400 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow hover:text-white"
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
        </div>
      </div>
    </section>
  );
};

export default NewDestination;
