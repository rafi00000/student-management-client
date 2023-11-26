import img1 from "/asset/partner/partner1.png";
import img2 from "/asset/partner/partner2.jpg";
import img3 from "/asset/partner/partner3.jpg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Partners = () => {
  return (
    <div className="bg-slate-200 p-5 my-10 space-y-6">
      <p className="text-center text-xl">Our Trusted Partners</p>
      <div className="flex gap-5 justify-center">
        <img src={img1} alt="" className="w-40 h-16" />
        <img src={img2} alt="" className="w-40 h-16" />
        <img src={img3} alt="" className="w-40 h-16" />
      </div>
    </div>
  );
};

export default Partners;
