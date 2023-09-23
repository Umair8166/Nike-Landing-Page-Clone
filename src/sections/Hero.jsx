import Button from "../components/Button";
import { statistics } from "../constants";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col w-full min-h-screen justify-center gap-10 max-container border-4 border-red-400"
    >
      <div className="relative flex flex-col w-full xl:w-2/5 justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Specail Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace nowrazp relative z-10 pr-10">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm: max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
