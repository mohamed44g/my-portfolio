import { useInView } from "react-intersection-observer";
import "./style.scss";
export default function Index() {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div
        className={`skills p-5 mt-5 ${inView && "animated-rotate"}`}
        ref={myRef}
      >
        <h2>Skills</h2>
        <div className="skills-box-container d-flex flex-wrap justify-content-center">
          <div className="skills-box">HTML</div>
          <div className="skills-box">CSS</div>
          <div className="skills-box">JavaScript</div>
          <div className="skills-box">React</div>
          <div className="skills-box">Bootstrap</div>
          <div className="skills-box">typescript</div>
          <div className="skills-box">material ui</div>
          <div className="skills-box">Node.js</div>
          <div className="skills-box">nest js</div>
          <div className="skills-box">Express</div>
          <div className="skills-box">Postgres sql</div>
        </div>
      </div>
    </>
  );
}
