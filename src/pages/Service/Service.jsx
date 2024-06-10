import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const {id, name, image, price, shortDescription, button } = service;
  return (
    <Link to={`/services/${id}`}>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className='min-h-72' src={image}alt=""/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-between">
          <button className="btn">{price}</button>
          <button className="btn bg-pink-500 text-white">{button}</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

Service.propTypes = {
  service: PropTypes.object
};

export default Service;