import React from 'react';
import ticketImagePath from '../assets/800w-b-XyvHsoukg.webp';
import { Link } from 'react-router-dom';


function Card() {
  return (
    <div> {}
      <div className="card-container">
      

      <div className="card" style={{ width: "18rem" }}>
        <img src={ticketImagePath} alt="Ticket" />
        <div className="card-body">
        <h5 className="card-title">Special Ticket</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/about">
            <button>order now</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
