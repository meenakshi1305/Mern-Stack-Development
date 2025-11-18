import "./Card.css";
const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} />
      <h1 id="title">{title}</h1>
      <p id="description">{description}</p>
    </div>
  );
};

export default Card;
