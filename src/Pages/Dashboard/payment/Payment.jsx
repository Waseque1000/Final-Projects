import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

//
const stripePromise = loadStripe(import.meta.env.VITE_Payment_token);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full ">
      <SectionTitle
        subHeading={"Please Payment "}
        heading={"Payment"}
      ></SectionTitle>
      <h2 className="text-3xl">teka to teka tumi koi </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
