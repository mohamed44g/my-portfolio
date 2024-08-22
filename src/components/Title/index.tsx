import { useInView } from "react-intersection-observer";
import "./style.scss";

interface Iprops {
  title: string;
}
export default function Index({ title }: Iprops) {
  const { ref: myRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <h2 className={`Page-title ${inView && "rotate"}`} ref={myRef}>
      {title}
    </h2>
  );
}
