import React from "react";
import { Link } from "react-router-dom";

const ClubCard = ({ clubs }) => {
  return (
    <div className="club-container">
      {clubs.map((club) => (
        <div key={club.name} className="club-card">
          <h3>{club.name}</h3>
          <Link to={`/club/${club.name}`}>
            <button className="view-details-btn">View Details</button>
          </Link>
          <Link to="/join">
            <button className="view-details-btn">Join</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClubCard;
