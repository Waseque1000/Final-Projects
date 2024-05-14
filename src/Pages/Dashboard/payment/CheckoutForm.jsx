import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
  //
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();

  const elements = useElements();

  //
  const { user } = useAuth();
  //
  const [clientSecret, setClientSecret] = useState("");

  //
  const axiosSecure = useAxiosSecure();

  //
  const [processing, setProcessing] = useState(false);
  //
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  //   ?
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log("card", card);
    if (card == null) {
      return;
    }

    //
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError(" ");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // const transactionId = paymentIntent.id;
      //TODO :
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        price,
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        orderStatus: "service Pending",
        itemsNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          // confirm
        }
      });
    }

    // ?
  };
  return (
    <>
      <form className="w-2/3  mt-20 border p-9 " onSubmit={handleSubmit}>
        <CardElement
          className="payment"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn mt-5 btn-sm text-center btn-error"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600  ">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 text-center mb-10 font-semibold">
          Transaction SuccessFul {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
