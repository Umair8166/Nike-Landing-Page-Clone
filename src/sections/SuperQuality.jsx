import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="w-full max=container flex max-xl:flex-col justify-between items-start gap-10"
    >
      {/* left */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolor
          necessitatibus earum? Sint minima sit nobis esse soluta aperiam,
          voluptatum autem quos earum, ullam placeat!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolor
          necessitatibus earum
        </p>
        <div className="mt-10">
          <Button label="View Details" />
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="product-detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
