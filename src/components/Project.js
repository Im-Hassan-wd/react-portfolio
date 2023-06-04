// static files
// import Design from "../img/work.png";
import "./Project.css";

export default function Project({ work }) {
  return (
    <li className="project">
      {work.date.map((d) => (
        <div className="project-date" key={d.month}>
          <span>{d.month}</span>
          <span>{d.year}</span>
        </div>
      ))}
      <div className="project-preview">
        <img src={work.photoURL} alt="work" />
      </div>
    </li>
  );
}
