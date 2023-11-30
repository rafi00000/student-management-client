import { useLoaderData } from "react-router-dom";

const MyEnrolledDetail = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default MyEnrolledDetail;