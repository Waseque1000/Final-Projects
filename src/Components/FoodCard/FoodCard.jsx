const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  //   console.log(item);

  const handleAddToCart = (item) => {
    console.log(item);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <p className="absolute right-0 mt-6 px-3 py-1 rounded-lg mr-7 bg-slate-900 text-white ">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-r-4 border-b-4 mt-10 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
