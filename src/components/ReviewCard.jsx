import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px]"
      />

      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          height={24}
          width={24}
          className="object-contain m-0"
        />
        <p className="info-text font-montserrat text-slate-gray">({rating})</p>
      </div>

      <h3 className="mt-2 text-2xl font-semibold font-palanquin text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
