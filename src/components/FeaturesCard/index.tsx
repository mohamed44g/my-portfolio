import { useInView } from "react-intersection-observer";
import "./style.scss";
import { ReactNode } from "react";

interface Iprops {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function Index({ title, description, icon }: Iprops) {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
      <div
        ref={myRef}
        className={`card features-card text-center ${
          inView && "animated-rotate"
        }`}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <div className="features-card-icon">{icon}</div>
          <h5 className="card-title mt-3">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>

  );
}
