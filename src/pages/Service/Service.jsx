import PropTypes from 'prop-types';

const Service = ({ service }) => {
  const {id, name, image, price, shortDescription, button } = service;
  return (
    <div onClick={id} className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image}alt=""/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-between">
          <button className="btn">{price}</button>
          <button className="btn bg-pink-500 text-white">{button}</button>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object
};

export default Service;