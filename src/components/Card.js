import "./Card.css";

export default function Card({ iconClass, title, body }) {
  return (
    <div className="card">
      <i className={`card-tag fi ${iconClass}`}></i>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </div>
  );
}
