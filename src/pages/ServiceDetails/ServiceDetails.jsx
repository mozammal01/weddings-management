import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../shared/Navber";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();

  const service = services.find(obj => obj.id === id)

  const { longDescription } = service;

  return (
    <>
    <Navber></Navber>
      <div className="max-w-6xl mx-auto my-20">
        <h1 className="text-3xl text-center font-bold my-5">Hey There {id}</h1>
        <p>{longDescription}</p>
      </div>
    </>
  );
};

export default ServiceDetails;