import { useLoaderData } from "react-router-dom";

const ClassDetails = () => {
    const {data} = useLoaderData();
    console.log(data);
    const {name, title, price, email, image} = data;
    return (
        <div>
            <h3 className="text-center text-xl uppercase underline font-bold">Class Details</h3>
            <div className="my-5">
                <img src={image} className="w-96 h-96 mx-auto" />
                <div className="text-xl">
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                </div>

                <div className="text-xl">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>

            </div>
        </div>
    );
};

export default ClassDetails;