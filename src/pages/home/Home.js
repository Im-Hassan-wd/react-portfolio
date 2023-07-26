// styles
import "./Home.css";

// components
import Work from "./components/Work";
import Intro from "./components/Intro";
import Review from "./components/Review";
import Service from "./components/Service";
import Experience from "./components/Experience";
import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <div className="home">
      <Intro />
      <Experience />
      <Service />
      <Work />
      <Review />
      <ContactForm />
    </div>
  );
}
