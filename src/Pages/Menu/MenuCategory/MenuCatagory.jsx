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
    </div>
  );
};

export default MenuCatagory;
