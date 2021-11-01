import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { Fragment, useRef, useState } from 'react';
import userImage from '../../assets/img/header/user.png';

const ManageAllBookingsCard = ({ booking, handleDeleteBooking }) => {
  const {
    _id,
    userName,
    userEmail,
    userPhoto,
    cost,
    status,
    destination,
    address,
  } = booking;

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [updateStatus, setUpdateStatus] = useState(status);

  const handleStatusUpdate = (id) => {
    axios
      .put(`http://localhost:5000/updatestatus/${id}`, {
        statusUpdate: 'approved',
      })
      .then((res) => {
        console.log(res.data);
        setUpdateStatus('approved');
      })
      .catch((err) => console.log(err));
  };

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src={userPhoto ? userPhoto : userImage}
                alt="userPhoto"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-700">
                {userName}
              </div>
              <div className="text-sm text-gray-500">{userEmail}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-700">{address}</div>
          <span className="text-gray-500">to</span>
          <div className="text-sm text-gray-700">{destination}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${cost}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-500"
          >
            {updateStatus}
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            onClick={() => setOpen(true)}
            className="text-red-500 hover:text-red-700"
          >
            Cancel Booking
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
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ShieldCheckIcon
                              className="h-8 w-8 text-red-500"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-2xl leading-6 font-bold text-red-500 mt-1"
                            >
                              Sure, want to cancel booking ?
                            </Dialog.Title>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          onClick={() => handleDeleteBooking(_id)}
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setOpen(false)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          ) : null}
        </td>
      </tr>
    </tbody>
  );
};

export default ManageAllBookingsCard;
