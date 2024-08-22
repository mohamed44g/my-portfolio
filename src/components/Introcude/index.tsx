import { useInView } from "react-intersection-observer";
import "./style.scss";
export default function Index() {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <div
        className={`introduce d-flex flex-column p-5 ${
          inView && "animated-rotate"
        }`}
        ref={myRef}
      >
        <h2 className="introduce-title">Let me introduce myself</h2>
        <p className="introduce-text mt-4">
          Experienced front-end developer skilled in HTML, CSS, JavaScript, and
          React, with knowledge of Node.js, Express, and MongoDB. Strong
          commitment and time management abilities. Active content creator on
          LinkedIn and Facebook, sharing programming insights.
        </p>
        <a
          href="../../assets/Cv/Cv.pdf"
          className="btn about-btn mt-4"
          download="Cv.pdf"
        >
          Download my cv
        </a>
      </div>
    </>
  );
}
