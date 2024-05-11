// //  TODO: ami ekhono ai khane prb khuje api nai ...

// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

// const useCart = () => {
//   const { user } = useContext(AuthContext);
//   const token = localStorage.getItem("access-token");

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["carts", user?.email],
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/carts?email=${user?.email}`,
//         {
//           headers: {
//             authorization: `bearer ${token}`,
//           },
//         }
//       );
//       return res.json();
//     },
//   });

//   return [cart, refetch];
// };
// export default useCart;

// //  TODO:
// // !
// // api, axios (axios secure), tan stack

// // import { useQuery } from "@tanstack/react-query";
// // import useAxiosSecure from "./useAxiosSecure";
// // import useAuth from "./useAuth";

// // const useCart = () => {
// //   const axiosSecure = useAxiosSecure();
// //   const { user } = useAuth;
// //   const { refetch, data: cart = [] } = useQuery({
// //     queryKey: ["cart", user?.email],
// //     queryFn: async () => {
// //       const res = await axiosSecure.get(`/carts?email=${user.email}`);
// //       return res.data;
// //     },
// //   });

// //   return [cart, refetch];
// // };

// // export default useCart;

// TODO:
// api, axios (axios secure), tan stack

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
