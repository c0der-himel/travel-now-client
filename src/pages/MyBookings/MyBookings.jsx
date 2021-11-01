import axios from 'axios';
import { useEffect, useState } from 'react';
import MyBookingsDetails from '../../components/MyBookingsDetails/MyBookingsDetails';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cryptic-ocean-42525.herokuapp.com/mybookings/${user?.email}`
      )
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
    // fetch(`http://localhost:5000/mybookings/${user?.email}`, {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem('idToken')}`,
    //   },
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       return res.json();
    //     } else if (res.status === 401) {
    //       history.push('/login');
    //     }
    //   })
    //   .then((data) => setBookings(data));
  }, [user?.email]);

  const handleDeleteBooking = (id) => {
    axios
      .delete(`https://cryptic-ocean-42525.herokuapp.com/mybookings/${id}`)
      .then((res) => {
        const remainingBookings = bookings.filter(
          (booking) => booking._id !== id
        );
        setBookings(remainingBookings);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ml-10">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-700">
            My Bookings
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
      </div>
      {bookings.length === 0 ? (
        <div className="flex justify-center items-center my-24">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 relative"></div>
          <h3 className="text-3xl text-blue-500 font-bold absolute">
            You have no Bookings
          </h3>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <div className="pb-24 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow-2xl overflow-hidden border-b border-gray-200 rounded-2xl">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        User Info
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Destination
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cost
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {bookings.map((booking) => (
                    <MyBookingsDetails
                      key={booking._id}
                      booking={booking}
                      handleDeleteBooking={handleDeleteBooking}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
