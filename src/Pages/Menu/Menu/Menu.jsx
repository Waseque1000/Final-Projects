import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={img} title={"Our Menu"}></Cover>
      <PopulerMenu></PopulerMenu>
    </div>
  );
};

export default Menu;
