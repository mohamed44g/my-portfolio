import Title2 from "../../components/title2";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Navbar from "../../components/Navbar/inedx";
import "./style.scss";
export default function Index() {

  return (
    <div className="Home" id="home">
      <Navbar />
      <div className="overlay">
        <div className="content">
          <p className="content-paragrapgh">Hello</p>
          <Title2 />
          <p className="content-paragrapgh">Front-End Developer</p>
          <button className="btn content-btn">Contact Me</button>
        </div>

        <div className="icons d-flex">
          <a
            href="https://www.facebook.com/profile.php?id=100095194875254"
            target="_blank"
          >
            <FaFacebookSquare size={30} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-badry-566a91315/"
            target="_blank"
          >
            <FaLinkedin size={30} className="icon" />
          </a>
          <a href="https://github.com/mohamed44g" target="_blank">
            <FaSquareGithub size={30} className="icon" />
          </a>

          <a href="https://wa.me/+201017893980?text=" target="_blank">
            <FaWhatsappSquare size={30} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
