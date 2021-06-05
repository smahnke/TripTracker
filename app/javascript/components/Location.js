import React from "react";

const Location = ({ location, trip }) => {
  const { name, id } = trip;
 

  return (
    <>
      <div className="location">
        <h1>{location.L_name}</h1>
        <h6>Trip: {trip.name}</h6>
        <br />
        <a href={`/trips`}>trips</a>
        <br />
        <a href={`/trips/${id}`}>go back to {name}</a>
        <br />
        <a href={`/trips/${id}/locations/`}>Back to locations</a>
        <br />
        <a href={`/locations/${location.id}/addresses`}>view addresses</a><br />

      </div>
    </>
  );
};

export default Location;