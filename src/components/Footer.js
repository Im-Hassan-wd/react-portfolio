// styles
import "./Footer.css";

const icons = ["linkedin", "github", "twitter", "instagram"];

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <div className="logo">
        Hassan<span>/</span>W
      </div>
      <div className="icons">
        {icons.map((icon) => (
          <a key={icon} href="#">
            <i className={`fi fi-brands-${icon}`}></i>
          </a>
        ))}
      </div>
      <span>{date.getFullYear()} Hassan Taiwo</span>
    </footer>
  );
}
