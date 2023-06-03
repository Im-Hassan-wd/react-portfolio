import Project from "../../components/Project";

export default function Work() {
  return (
    <section className="work">
      <div>
        <span className="span">/ Works</span>
        <h3>Selected works,</h3>
        <h3>Clients projetcs.</h3>
        <p>
          My goal is to create visually stunning and functional websites that
          provide an exceptional user experience and help businesses thrive
          online.
        </p>
        <h1 className="heading">Design & Code</h1>
      </div>
      <ul>
        <Project />
        <Project />
      </ul>
    </section>
  );
}
