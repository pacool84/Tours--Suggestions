import React from "react";
import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <div>
      <h2 className='tours-title'>Our Suggestions</h2>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </div>
  );
}

export default Tours;
