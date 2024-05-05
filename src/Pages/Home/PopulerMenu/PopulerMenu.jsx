import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //       console.log(menu);
  //     });
  // }, [menu]);

  // customs  hooks er data

  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it  out "}
        heading={"From our menu"}
      ></SectionTitle>
    </section>
  );
};

export default PopulerMenu;
