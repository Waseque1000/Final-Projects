import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(data);
      });
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            {/*  */}
            <div className="flex flex-col items-center space-y-8 mx-24 my-16">
              {/* !raitings */}
              <Rating
                className=""
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h2 className="text-yellow-500 text-4xl">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
