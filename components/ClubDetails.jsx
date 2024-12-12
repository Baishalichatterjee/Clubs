import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../styles.css";

const ClubDetails = ({ clubs }) => {
  const { clubName } = useParams();
  const navigate = useNavigate();
  
  // Find the club based on the name from the URL parameter
  const club = clubs.find((c) => c.name === clubName);

  if (!club) return <h2>Club not found</h2>;

  return (
    <div className="club-details">
      <h2>{club.name}</h2>
      <p><strong>Leader:</strong> {club.leader}</p>
      <p><strong>Faculty:</strong> {club.faculty}</p>
      <p><strong>Description:</strong> {club.description}</p>
      <p><strong>Why is this important?</strong></p>
      <ul>
        <li><strong>Club Leader:</strong> The leader of the club plays a crucial role in managing the club's activities, guiding members, and representing the club in various college events. It's important to know the leader to understand their vision for the club.</li>
        <li><strong>Faculty:</strong> The faculty advisor is essential for the club's functioning as they provide academic and administrative support, ensuring the club aligns with the institution's values and objectives.</li>
        <li><strong>Club Description:</strong> Understanding the club’s mission, goals, and activities helps students decide if it’s the right fit for their interests and growth.</li>
      </ul>
      <button onClick={() => navigate("/")} className="back-btn">
        Go Back
      </button>
      <Link to="/join">
        <button className="join-btn">Join</button>
      </Link>
    </div>
  );
};

export default ClubDetails;
