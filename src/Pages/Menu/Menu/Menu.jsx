import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import dessert from "../../../../src/assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../../src/assets/menu/pizza-bg.jpg";
import saladimg from "../../../../src/assets/menu/salad-bg.jpg";
import soupimg from "../../../../src/assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuCatagory from "../MenuCategory/MenuCatagory";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={img} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading={"Dont Miss"}
        heading={"Today's Offers"}
      ></SectionTitle>
      <MenuCatagory items={offered}></MenuCatagory>

      {/*dessert   */}
      <MenuCatagory
        items={desserts}
        title={"Dessert"}
        coverImg={dessert}
      ></MenuCatagory>

      {/* Pirzza    */}
      <MenuCatagory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaimg}
      ></MenuCatagory>

      {/*  Salads     */}
      <MenuCatagory
        items={salad}
        title={"Salad"}
        coverImg={saladimg}
      ></MenuCatagory>

      {/*  Soup     */}
      <MenuCatagory
        items={soup}
        title={"Soup"}
        coverImg={soupimg}
      ></MenuCatagory>
    </div>
  );
};

export default Menu;
