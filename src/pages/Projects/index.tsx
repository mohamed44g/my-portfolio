import Title from "../../components/Title";
import "./style.scss";
import img1 from "../../assets/images/Screenshot 2024-08-22 105109.png";
import img2 from "../../assets/images/screenshot-1741016850908.jpeg";
import img3 from "../../assets/images/Screenshot 2024-08-22 100121.png";
import img4 from "../../assets/images/screenshot-1737907325535.jpeg";
import img5 from "../../assets/images/screenshot-1753458935418.jpeg";
import ProjectCard from "../../components/projectCard";

export default function index() {
  return (
    <div className="Projects" id="Projects">
      <Title title="Projects" />
      <div className="container">
        <div className="d-flex flex-wrap cards justify-content-center align-items">
          <ProjectCard
            title="Meda+ academy"
            description="A medical courses platform that combines simple, clear explanations with scientific content, organizing all lectures, files, and materials in one place. It offers high-quality video lectures, clear categorization by subject and chapter, attached files (PDF, slides, videos), flexible video access anytime, technical support, and comment sections under each video for questions."
            img={img5}
            preview="https://med-aplus.com/"
            codePreview="#"
          />
          <ProjectCard
            title="Physics Legends"
            description=" An full stack e-learning website for Physics offers courses, online videos, and quizzes. Students can subscribe to any
 course, track their progress, and post questions on the community page. Teachers can respond to these questions and
 either accept or reject the posts. Additionally, students can privately chat with the teacher through the chat section."
            img={img2}
            preview="https://mohamed-seliim.com/"
            codePreview="#"
          />
          <ProjectCard
            title="Tripcraft"
            description="Travel agency for travel services and booking tickets online"
            img={img4}
            preview="https://tripcraft-eta.vercel.app/"
            codePreview="https://github.com/mohamed44g/Travel-frontend"
          />
          <ProjectCard
            title="Barca store"
            description="Community and store for Barcelona contain Barça history and the best players"
            img={img1}
            preview="https://barca-store.vercel.app/"
            codePreview="https://github.com/mohamed44g/barca-store"
          />

          <ProjectCard
            title="Fit gym"
            description="webstie for gym and for improve your body you can know the exercise and you can cacl your calories"
            img={img3}
            preview="https://mohamed44g.github.io/Fit-Gym/"
            codePreview="https://github.com/mohamed44g/Fit-Gym"
          />
        </div>
      </div>
    </div>
  );
}
