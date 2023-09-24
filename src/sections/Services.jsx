import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      <h2 className="text-4xl font-palanquin font-bold w-full mb-4">
        Our <span className="text-coral-red">Services</span>
      </h2>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
