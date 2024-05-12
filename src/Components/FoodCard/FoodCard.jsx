import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, price, image, _id } = item;

  const navigate = useNavigate();
  const location = useLocation();
  // ?
  const { user } = useContext(AuthContext);
  //   console.log(item);

  // ? refatch er akj holo jokhon kono new oder add to cart kora hbe tokhon jno oi cart er number  change hoy
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    // console.log(item);

    if (user && user.email) {
      //
      const cartItem = {
        menuItemId: _id,
        name,
        price,
        image,
        email: user.email,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // TODO:  refetch to update the cart product
            refetch();
            Swal.fire({
              position: "top-end",
              title: "Food Added On the Cart ",
              // icon: "success",
              timer: 600,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Order Food ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
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
