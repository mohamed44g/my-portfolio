import "./style.scss";
import Skills from "../../components/Skills";
import Introcude from "../../components/Introcude";
export default function Index() {
  return (
    <>
      <div className="container" id="About">
        <div className="introduce-cards">
          <Introcude />
          <Skills />
        </div>
      </div>
    </>
  );
}
