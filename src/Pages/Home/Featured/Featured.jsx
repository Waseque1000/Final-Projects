import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featureitems pt-10 my-10 text-white">
      <SectionTitle
        subHeading={"Check it Out "}
        heading={" from our MEnu"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-20 px-36 pt-12">
        <div>
          <img src={img} alt="" />
        </div>

        <div className="md:ml-10">
          <h1 className="uppercase"> March 20, 2023</h1>
          <h2 className="uppercase "> WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
