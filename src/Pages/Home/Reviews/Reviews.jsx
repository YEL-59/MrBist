import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/styles.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <div className="my-10">
        <SectionTitle heading={"Reviews"} subheading={"What our Clients say"} />

        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="flex flex-col items-center justify-center my-16 mx-24">
                  {/* <img src={review.img} className="rounded-full w-24 h-24" alt="" /> */}
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly></Rating>
                  <p className="text-center py-5">{review.details}</p>
                  <p className="text-center text-2xl text-orange-400">
                    {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Reviews;
