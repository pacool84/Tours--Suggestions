import React from "react";
import "./tours.css";

function Tour({ id, image, info, price, name }) {
  return (
    <article className='tour-article'>
      <img src={image} alt={name} />
      <section className='tour-article__section'>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </section>
      <p className='tour-article__info'>{info}</p>
    </article>
  );
}

export default Tour;
