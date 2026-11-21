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
        <p className="section-index">02 / THE TOOLKIT</p>
        <h2>Tools I reach for to build the next step.</h2>
        <div className="skills-box-container d-flex flex-wrap justify-content-center">
          <div className="skills-box">HTML / CSS</div>
          <div className="skills-box">JavaScript</div>
          <div className="skills-box">React</div>
          <div className="skills-box">React Native</div>
          <div className="skills-box">Bootstrap</div>
          <div className="skills-box">TypeScript</div>
          <div className="skills-box">Sass</div>
          <div className="skills-box">Material UI</div>
          <div className="skills-box">Next.js</div>
          <div className="skills-box">Node.js</div>
          <div className="skills-box">NestJS</div>
          <div className="skills-box">Express</div>
          <div className="skills-box">PostgreSQL</div>
          <div className="skills-box">MongoDB</div>
          <div className="skills-box">Git</div>
        </div>
      </div>
    </>
  );
}
