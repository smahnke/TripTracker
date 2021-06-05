import React from "react";

const LocationEdit = ({ location, trip}) => {
  const { name, id } = trip;
  const { L_name } = location;
  const defaultL_name = L_name ? L_name : "";
  return (
    <>
      <h1>Edit Location!</h1>
      <form action={`/trips/${id}/locations/${location.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Location Name</p>
        <input defaultValue={defaultL_name} name="location[L_name]" type="text" />
        <button type="submit">edit</button>
      </form>

      <a href={`/locations/${id}`}>Back to {name}</a>
      <br />
      <a href={`/trips/${id}/locations/`}>Back to locations</a>
      <br />

    </>
  );
};

export default LocationEdit;