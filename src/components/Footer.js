// styles
import "./Footer.css";

const icons = [
  { brand: "linkedin", link: "linkedin.com/in/hassan-warwick" },
  { brand: "github", link: "github.com/im-hassan-wd" },
  { brand: "twitter", link: "twitter.com/iamweirdwarwick" },
  { brand: "instagram", link: "instagram.com/weirdwarwick" },
];

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <div className="logo">
        Hassan<span>/</span>W
      </div>
      <div className="icons">
        {icons.map((icon) => (
          <a key={icon.brand} href={`https://${icon.link}`}>
            <i className={`fi fi-brands-${icon.brand}`}></i>
          </a>
        ))}
      </div>
      <span>{date.getFullYear()} Hassan Taiwo</span>
    </footer>
  );
}
