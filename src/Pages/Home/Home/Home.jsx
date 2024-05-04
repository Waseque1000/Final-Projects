import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <Featured />
    </>
  );
};

export default Home;
