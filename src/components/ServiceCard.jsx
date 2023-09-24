const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] px-10 py-16 shadow-3xl rounded-[20px]">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h2 className="text-3xl font-palanquin font-bold mt-5 leading-normal">
        {label}
      </h2>
      <p className="font-montserrat break-words text-lg leading-normal text-slate-gray mt-3">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
