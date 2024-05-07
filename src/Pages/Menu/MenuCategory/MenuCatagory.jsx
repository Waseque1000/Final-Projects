import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCatagory = ({ items, title, coverImg }) => {
  return (
    <div className="m-20">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid m-14 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-r-4 border-b-4 mt-10 ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCatagory;
