import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-2 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque
        labore deleniti? Sequi nisi eaque minima consectetur aliquid quae
        labore!
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
