import FeaturesCard from "../../components/FeaturesCard";
import Title from "../../components/Title";
import { CgWebsite } from "react-icons/cg";
import { MdAppShortcut } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import "./style.scss";
export default function index() {
  return (
    <div className="features" id="Features">
      <Title title="what can I do?" />
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center cards">
          <FeaturesCard
            title="Website"
            description="Elevate your brand with a custom, responsive website that captivates visitors and drives conversions."
            icon={<CgWebsite size={50} color="#0d6efd" />}
          />
          <FeaturesCard
            title="application"
            description="Transform your business with application that enhances user experience and streamlines operations."
            icon={<MdAppShortcut size={50} color="#0d6efd"/>}
          />
          <FeaturesCard
            title="support"
            description="Enjoy six months of dedicated support to ensure your product remains top-notch. I provide continuous assistance."
            icon={<BiSupport size={50} color="#0d6efd" />}
          />
        </div>
      </div>
    </div>
  );
}
