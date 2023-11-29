import { useLoaderData } from "react-router-dom";

const ClassDetails = () => {
    const {data} = useLoaderData();
    console.log(data);
    const {name, title, price, email, image} = data;
    return (
        <div>
            
        </div>
    );
};

export default ClassDetails;