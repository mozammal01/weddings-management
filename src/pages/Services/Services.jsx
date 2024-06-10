import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className="max-w-6xl mx-auto my-20">
      <h3 className="text-3xl text-center font-bold my-20">Services</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mx-auto gap-10">
      {
        services.map(service => <Service key={service.id} service={service}></Service>)
      }
      </div>
    </div>
  );
};

export default Services;


