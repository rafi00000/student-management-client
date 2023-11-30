import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-6xl">Something Went Wrong</h1>
            <button className="btn btn-outline" onClick={() => navigate("/")}>Go Home</button>
        </div>
    );
};

export default ErrorPage;