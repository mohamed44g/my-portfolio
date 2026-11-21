import "./style.scss";
import Skills from "../../components/Skills";
import Introcude from "../../components/Introcude";
export default function Index() {
  return (
    <>
      <section className="story-section container about-section" id="About">
        <div className="introduce-cards">
          <Introcude />
          <Skills />
        </div>
      </section>
    </>
  );
}
