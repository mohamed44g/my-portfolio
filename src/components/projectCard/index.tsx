import { FaSquareGithub } from "react-icons/fa6";
import { BiLinkAlt } from "react-icons/bi";
import "./style.scss";
import { useInView } from "react-intersection-observer";

interface Iprops {
  title: string;
  description: string;
  img: string;
  preview: string;
  codePreview: string;
}

export default function Index({
  title,
  description,
  img,
  preview,
  codePreview,
}: Iprops) {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <div
        className={`card project-card ${inView && "animated-rotate"}`}
        ref={myRef}
      >
        <div className="img-container">
          <img src={img} className="card-img" alt="Image 4" />
          <div className="card-img-overlay"></div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <a href={codePreview} className="card-link">
            <FaSquareGithub size={28} className="icons" />
          </a>
          <a href={preview} className="card-link">
            <BiLinkAlt size={28} className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}
