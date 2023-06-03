// static files
import Design from "../img/design.png";
import "./Project.css";

export default function Project() {
  return (
    <li className="project">
      <div className="project-date">
        <span>Jan</span>
        <span>2021</span>
      </div>
      <div className="project-preview">
        <img src={Design} alt="work" />
      </div>
    </li>
  );
}
