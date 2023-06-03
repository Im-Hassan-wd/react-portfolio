// styles
import "./Home.css";

// components
import Experience from "./Experience";
import Service from "./Service";
import Intro from "./Intro";
import Work from "./Work";
import Review from "./Review";
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
