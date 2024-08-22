import Title from "../../components/Title";
import "./style.scss";
import img1 from "../../assets/images/Screenshot 2024-08-22 105109.png";
import img2 from "../../assets/images/Screenshot 2024-08-22 095937.png";
import img3 from "../../assets/images/Screenshot 2024-08-22 100121.png";
import img4 from "../../assets/images/Screenshot 2024-08-22 100504.png";
import ProjectCard from "../../components/projectCard";

export default function index() {
  return (
    <div className="Projects" id="Projects">
      <Title title="Projects" />
      <div className="container">
        <div className="d-flex flex-wrap cards justify-content-center align-items">
          <ProjectCard
            title="Barca store"
            description="Community and store for Barcelona contain Barça history and the best players"
            img={img1}
            preview="https://barca-store.vercel.app/"
            codePreview="https://github.com/mohamed44g/barca-store"
          />

          <ProjectCard
            title="Game store"
            description="Store for sailing video games and get games latest news."
            img={img2}
            preview="https://mohamed44g.github.io/Gaming/"
            codePreview="https://github.com/mohamed44g/Gaming"
          />

          <ProjectCard
            title="Fit gym"
            description="webstie for gym and for improve your body you can know the exercise and you can cacl your calories"
            img={img3}
            preview="https://mohamed44g.github.io/Fit-Gym/"
            codePreview="https://github.com/mohamed44g/Fit-Gym"
          />

          <ProjectCard
            title="to-do-list"
            description="lite to-do app for planning your day and remember your daily tasks."
            img={img4}
            preview="https://mohamed44g.github.io/Todolist/"
            codePreview="https://github.com/mohamed44g/Todolist"
          />
        </div>
      </div>
    </div>
  );
}
