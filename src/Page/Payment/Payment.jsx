import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_PUBLISHABLE_KEY}`)

const Payment = () => {

    return (
        <div>
            <h1 className="text-4xl text-center font-semibold">Payment page</h1>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;