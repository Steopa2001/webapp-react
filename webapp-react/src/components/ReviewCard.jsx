import React from "react";

const ReviewCard = ({ review }) => {
    const {id, name, vote, text} = review;
  return (
    <div className="review-card" key={id}>
      <h3>{name}</h3>
      <p>{vote}</p>
      <p>{text}</p>
    </div>
  );
};

export default ReviewCard;
