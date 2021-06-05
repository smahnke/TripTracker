
import React from "react";

const Address = ({ address, location }) => {
  const { L_name, id } = location;


  return (
    <>
      <div className="address">
        <h1>{address.address}</h1>
        <h6>Location: {location.L_name}</h6>
        <br />
        <a href={`/users`}>users</a>
        <br />
        <a href={`/locations/${id}`}>go back to {L_name}</a>
        <br />
        <a href={`/locations/${id}/addresses/`}>Back to trip addresses</a>
        <br />
   
        <a href={`/locations/${location.id}/addresses`}>View Location Addresses</a><br />

      </div>
    </>
  );
};

export default Address;