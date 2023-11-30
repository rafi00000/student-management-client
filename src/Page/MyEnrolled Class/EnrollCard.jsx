import { Link } from "react-router-dom";

const EnrollCard = ({card}) => {
    console.log(card);
    const {className,  teacherName, image, classId} = card;
    

    return (
        <div>
            <img src={image} alt="" className="mx-auto w-96 h-72" />
            <p className="text-center text-xl">Class Name: {className}</p>
            <p className="text-lg font-semibold">Posted By: {teacherName}</p>
            <Link to={`/dashboard/my-enrolled-class/${classId}`}><p className="text-center"><button className="btn btn-outline">Continue</button></p></Link>
           
        </div>
    );
};

export default EnrollCard;