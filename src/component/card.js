import ticketImage from "../assets/800w-b-XyvHsoukg.webp";



function Card() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={ticketImage} className="card-img-top" alt="ticket" />

      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
export default Card;
