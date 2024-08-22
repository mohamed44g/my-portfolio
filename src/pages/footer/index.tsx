import "./style.scss";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function index() {
  return (
    <footer className="footer" id = "Contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="icon">
                <FiPhoneCall color="#0d6efd" />
              </div>
              <h5 className="card-title">Call me at</h5>
              <p className="card-text">+201017893980</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="icon">
                <MdOutlineEmail color="#0d6efd" />
              </div>
              <h5 className="card-title">Email me at</h5>
              <p className="card-text">mohammedbadry456@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="icon">
                <IoLocationOutline color="#0d6efd" />
              </div>
              <h5 className="card-title">Where to find me</h5>
              <p className="card-text">Qena-Elshuon</p>
            </div>
          </div>
        </div>

        <div className="footer-info d-flex justify-content-around">
          <p>Made by Mohamed badry</p>

          <div className="icons-container d-flex gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=100095194875254"
              target="_blank"
            >
              <FaFacebookSquare className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-badry-566a91315/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a href="https://github.com/mohamed44g" target="_blank">
              <FaSquareGithub className="icons" />
            </a>

            <a href="https://wa.me/+201017893980?text=" target="_blank">
              <FaWhatsappSquare className="icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
