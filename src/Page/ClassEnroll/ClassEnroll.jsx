import { Link, useLoaderData } from "react-router-dom";

const ClassEnroll = () => {
    const {data} = useLoaderData();
    console.log(data);
    const {name, image, price, title, status, email, description, _id} = data;

    return (
        <div>
            <img src={image} className="mx-auto w-1/2"  />
            <p className="text-center font-bold">Title: {title}</p>

            <div>
                <p>Name: {name}</p>
                <p>email: {email}</p>
            </div>
            <div>
                <p>Price: {price}</p>
                <p>Status: {status}</p>
            </div>
            <p className="">Description: {description}</p>

            <p className="text-center "><Link to={`/dashboard/payment/${_id}`}><button className="btn btn-outline w-40">Pay</button></Link></p>
        </div>
    );
};

export default ClassEnroll;