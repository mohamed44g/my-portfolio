
import About from "./About";
import Home from "./Home/index";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Features from "./Features";
import Footer from "./footer";
function App() {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  } catch (e) {
    console.error("Error in App component:", e);
  }
  return (
    <>
      <Home />
      <About />
      <Timeline />
      <Projects />
      <Features />
      <Footer />
    </>
  );
}

export default App;
