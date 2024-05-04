import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <Featured />
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
