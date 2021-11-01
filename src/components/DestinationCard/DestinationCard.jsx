import { Link } from 'react-router-dom';

const DestinationCard = (props) => {
  const { _id, destinationName, img, price, description, day, night } =
    props.destination;

  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-white shadow-2xl p-10 rounded-3xl relative hover:shadow transition duration-500">
        <img
          className="h-56 rounded-3xl w-full object-cover object-center mb-6 shadow-2xl"
          src={img}
          alt="content"
        />
        <h3 className="tracking-widest text-white text-lg font-bold title-font absolute top-16 left-0 bg-blue-500 px-4 py-1 rounded-tr-3xl rounded-br-3xl shadow-2xl">
          {destinationName}
        </h3>
        <h2 className="text-2xl text-gray-700 font-bold title-font mb-4">
          {night} Nights {day} Days Stay
        </h2>
        <p className=" text-gray-500">{description}</p>
        <div className="mt-5 flex justify-between items-center">
          <h2 className="text-2xl text-gray-700 font-bold title-font">
            ${price}
          </h2>
          <Link
            to={`/destinations/${_id}`}
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-10 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg transition shadow-2xl"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
