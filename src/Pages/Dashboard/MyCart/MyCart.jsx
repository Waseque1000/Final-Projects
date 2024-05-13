import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  //
  const [cart, refetch] = useCart();

  //

  //? total price
  const totalOk = cart.reduce((sum, item) => item.price + sum, 0);
  const total = totalOk.toFixed(2);

  // delete function
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "success!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-[80]">
      <Helmet>
        <title>Bistro Boss || My Cart </title>
      </Helmet>
      <div>
        <div className="uppercase h-[80px] flex gap-16">
          <h2 className="text-2xl">
            {" "}
            Total Orders{" "}
            <span className="text-3xl font-bold">{cart.length}</span>{" "}
          </h2>
          <h2 className="text-2xl">
            {" "}
            Total price{" "}
            <span className="text-3xl ml-3 text-red-600 font-bold">
              ${total}
            </span>{" "}
          </h2>

          <Link to={"/dashboard/payment"}>
            <button className="btn btn-active btn-sm bg-[#D1AC54]  ">
              Pay
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={row.image} />
                        </div>
                      </div>
                      {/* <div>
                        <div className="font-bold">{row.name}</div>
                      </div> */}
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td className="text-end pr-8">{row.price}</td>
                  <td className="ml-10">
                    <button
                      onClick={() => handleDelete(row)}
                      className="btn btn-ghost  text-red-600 text-[15px]"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
