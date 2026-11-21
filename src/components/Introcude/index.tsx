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
        <p className="section-index">01 / THE FOUNDATION</p>
        <h2 className="introduce-title">From an idea to an experience people enjoy using.</h2>
        <p className="introduce-text mt-4">
          I&apos;m a full-stack developer who turns complex requirements into clear,
          fast, and useful products. My work blends a strong front-end eye with
          practical back-end foundations.
        </p>
        <a
          href="https://raw.githubusercontent.com/mohamed44g/my-portfolio/refs/heads/master/src/assets/Cv/mohamedbadry[frontend].pdf"
          className="btn about-btn mt-4"
          download="mohamedbadry[frontend].pdf"
        >
          Download my CV
        </a>
      </div>
    </>
  );
}
