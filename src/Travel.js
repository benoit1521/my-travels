import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.destination} />
    <figcaption>
      <h1>{props.destination}</h1>
      <h2>{props.country}</h2>
      <p>Situé à {props.distance}</p>
    </figcaption>
  </figure>
);

export default Travel;