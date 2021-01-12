import React from "react";

function Tours({ tours }) {
  return (
    <div>
      <h2>Our Suggestions</h2>
      {tours.map((tour) => {
        return (
          <article key={tour.id}>
            <h3>{tour.name}</h3>
            <img src={tour.image} alt={tour.name} />
          </article>
        );
      })}
    </div>
  );
}

export default Tours;
