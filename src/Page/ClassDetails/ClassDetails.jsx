import { useLoaderData } from "react-router-dom";

const ClassDetails = () => {
    const {data} = useLoaderData();
    console.log(data);
    const {name, title, price, email, image} = data;
    return (
        <div>
            <h3 className="text-center text-xl uppercase underline font-bold">Class Details</h3>
            {/* <div className="my-5">
                <img src={image} className="w-96 h-96 mx-auto" />
                <div className="text-xl">
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                </div>

                <div className="text-xl">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>

            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-7">
                <div className="p-10 rounded-xl shadow-2xl border">
                    <h1>Total Enrollment</h1>
                    <p>12</p>
                </div>
                <div className="p-10 rounded-xl shadow-2xl border">
                    <h1>Total Enrollment</h1>
                    <p>12</p>
                </div>
                <div className="p-10 rounded-xl shadow-2xl border">
                    <h1>Total Enrollment</h1>
                    <p>12</p>
                </div>
            </div>

            <div>
                <p className="text-center"><button className="btn btn-outline">Create</button></p>
            </div>
        </div>
    );
};

export default ClassDetails;