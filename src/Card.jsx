function Card({ title, description, imageUrl }) {
  return (
    <article className="card">
      <img src={imageUrl} alt="card image" />
      <h2>{title}</h2>
      <div>{description}</div>
    </article>
  );
}
export default Card;
