import axios from 'axios';
import { useEffect, useState } from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('https://cryptic-ocean-42525.herokuapp.com/destinations')
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="destinations" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-700">
              Dream Destinations
            </h1>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
        </div>
        {destinations.length === 0 ? (
          <div className="flex justify-center items-center my-24">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-wrap -m-4">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination._id}
                destination={destination}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
