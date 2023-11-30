import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPrivate from './../../Hooks/useAxiosPrivate';
import { AuthContext } from './../../Providers/AuthProvider';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {data} = useLoaderData();
    const axiosPrivate = useAxiosPrivate();
    const [clientSecret, setClientSecret] = useState(null);
    const {user} = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState(null);
    const navigate = useNavigate();
    console.log(data);

    useEffect(() =>{
      axiosPrivate.post('/create-payment-intent', {price: data.price})
      .then(res =>{
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      })
    }, [axiosPrivate, data])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) return
    const card = elements.getElement(CardElement);
    if(!card) return

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    error ? toast.error(error.message) : paymentMethod ? console.log(paymentMethod) : null

    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous"
        }
      }
    })

    if(confirmError){
      toast.error("something went wrong");
    }
    else{
      console.log("payment intent", paymentIntent);
      if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id);
        toast.success("Payment Successful");
        
        // now saving it to the database
        const paymentInfo= {
          email: user.email,
          price: data.price,
          date: new Date(),
          className: data.title,
          teacherMail: data.email,
          classId: data._id, 
          image: data.image,
          teacherName: data.name
        } ;
        console.log(paymentInfo);
        
        axiosPrivate.post("/payment", paymentInfo)
        .then(res => {
          console.log(res.data);
          toast.success("Saved to database");
          setTimeout(()=>{
            navigate("/dashboard/my-enrolled-class");
          }, 2000)

        })
      }
    }
  };

  return (
    <div className="my-20 grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto ">
        <div className="text-center">
            <p className="text-xl">Product Name: {data.title}</p>
            <p>Price: {data.price}$</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full mx-auto border p-5">
      <CardElement
        options={{
            style: {
              base: {
                fontSize: '15px',
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} 
      >
      </CardElement>
       <p className="text-center"><button disabled={!stripe || !clientSecret} className="btn btn-sm btn-outline my-5">Pay</button></p> 
       {transactionId && <p className="text-green-500 text-xl">Your Transaction ID: {transactionId}</p>}
    </form>
    <Toaster></Toaster>
    </div>
  );
};

export default CheckOutForm;
