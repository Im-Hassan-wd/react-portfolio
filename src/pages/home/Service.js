import Card from "../../components/Card";

export default function Service() {
  return (
    <div className="services">
      <section>
        <div className="images">
          <img src="./img/google.png" alt="company" />
          <img src="./img/slack.png" alt="company" />
          <img src="./img/google.png" alt="company" />
          <img src="./img/slack.png" alt="company" />
          <img src="./img/google.png" alt="company" />
        </div>
        <div className="cards">
          <Card
            iconClass="fi-bs-objects-column"
            title="UI / UX Designer."
            body="2+ projects"
          />
          <Card
            iconClass="fi-bs-terminal"
            title="Front End Developer."
            body="2+ projects"
          />
          <Card
            iconClass="fi-bs-bolt"
            title="Social Media Developer."
            body="2+ projects"
          />
        </div>
      </section>
      <div className="container" />
    </div>
  );
}
