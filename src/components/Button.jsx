const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={` flex justify-center items-center gap-2 border py-4 px-7 font-montserrat text-lg leading-none rounded-full 
      ${fullWidth && "w-full"}
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : " bg-coral-red text-white border-coral-red"
      } 
     `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow Right Image"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
