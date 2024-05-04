import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Recomemded from "../Recomended/Recomemded";
import Testimonial from "../Testimonial/Testimonial";
import ChefServices from "../chef-services/ChefServices";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <ChefServices></ChefServices>
      <PopulerMenu></PopulerMenu>
      <CallUs></CallUs>
      <Recomemded></Recomemded>
      <Featured />
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
