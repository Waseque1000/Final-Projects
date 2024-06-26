import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <section className=" ">
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11am to 10pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-10"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
            Dessarts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">
            Cakes
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
