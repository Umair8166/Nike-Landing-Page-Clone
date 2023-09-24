import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-wrap max-xl:flex-col-reverse gap-10 max-container">
      {/* left */}
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolor
          necessitatibus earum? Sint minima sit nobis esse soluta aperiam,
          voluptatum autem quos earum, ullam placeat!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolor
          necessitatibus earum Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quo dolor necessitatibus earum
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
