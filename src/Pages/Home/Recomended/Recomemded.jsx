import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import img from "../../../assets/home/slide1.jpg";
const Recomemded = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="flex flex-row justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-4 pt-6">
            <img src={img} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0  border-b-4 ">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-4 pt-6">
            <img src={img} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0  border-b-4 ">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-4 pt-6">
            <img src={img} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0  border-b-4 ">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomemded;
