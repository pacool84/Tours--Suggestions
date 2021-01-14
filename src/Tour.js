import React, { useState } from "react";
import "./tours.css";

function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='tour-article'>
      <img src={image} alt={name} />
      <section className='tour-article__section'>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </section>
      <p className='tour-article__info'>
        {readMore ? info : info.substring(0, 300) + "..."}
        <button
          onClick={() => setReadMore(!readMore)}
          className='tour-article__toggle'
        >
          {readMore ? "show less" : "showmore"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Not interested</button>
    </article>
  );
}

export default Tour;
