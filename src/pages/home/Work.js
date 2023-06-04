import Project from "../../components/Project";

const works = [
  {
    date: [{ month: "Apr", year: "2023" }],
    photoURL: "./img/1.png",
  },
  {
    date: [{ month: "May", year: "2023" }],
    photoURL: "./img/2.png",
  },
];

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
        {works.map((work) => (
          <Project key={work.photoURL} work={work} />
        ))}
      </ul>
    </section>
  );
}
