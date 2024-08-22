import { CiCalendarDate } from "react-icons/ci";
import { useInView } from "react-intersection-observer";
import "./style.scss";

interface Iprops {
  title: string;
  date: string;
  description: string;
  className: string;
  from: string;
}

export default function Index({
  title,
  date,
  description,
  className,
  from,
}: Iprops) {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <div className={`timeline-item ${className}`}>
      <div className="timeline-point"></div>
      <div
        className={`timeline-content ${inView && "animated-rotate"}`}
        ref={myRef}
      >
        <h5>{title}</h5>
        <div
          className={`d-flex ${
            className === "right" && "flex-row-reverse"
          } align-items-center gap-2`}
        >
          <CiCalendarDate size={25} />
          <p className="course-date mt-3">{date}</p>
        </div>
        <p>from: {from}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
