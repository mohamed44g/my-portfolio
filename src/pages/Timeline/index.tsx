import Title from "../../components/Title";
import "./style.scss";
import TimelineCard from "../../components/TimelineCard";
export default function Index() {
  return (
    <div className="Courses" id="Courses">
      <Title title="Courses" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="timeline">
              <TimelineCard
                title="Cs50"
                date="1/2022 - 12/2022"
                from="Harvard"
                description="An introduction to the intellectual enterprises of computer science and the art of programming."
                className="left"
              />

              <TimelineCard
                title="Front End"
                date="01/2023 - 04/2023"
                from="ITI"
                description="An introduction to front end development using Html Css JavaScript Bootstrap React"
                className="right"
              />

              <TimelineCard
                title="Pro Frontend Engineer"
                date="4/2023"
                from="Udemy"
                description="Learn React Js and how it works and how to mange application state and performance and learn more about api and how it works."
                className="left"
              />

              <TimelineCard
                title="React Native"
                date="10/2023 - 1/2024"
                from="Udemy"
                description="An introduction to React Native and how make an application using React Native"
                className="right"
              />

              <TimelineCard
                title="Mastering Nodejs"
                date="1/2024"
                from="Udemy"
                description="master backend using Node.js and Express and mongoDB and typescript and GraphQL."
                className="left"
              />

              <TimelineCard
                title="Web Design"
                date="7/2024 - 8/2024"
                from = "NTI"
                description="how design and develop a website using multibe web technologies."
                className="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
