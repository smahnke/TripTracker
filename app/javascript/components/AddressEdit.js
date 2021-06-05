import React from "react";

const AddressEdit = ({ address, location}) => {
  const { L_name, id } = location;
  const { address } = address;
  const defaultL_name = L_name ? L_name : "";
  return (
    <>
      <h1>Edit Address!</h1>
      <form action={`/locations/${id}/addresses/${address.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Address</p>
        <input defaultValue={defaultL_name} name="address[address]" type="text" />
        <button type="submit">edit</button>
      </form>

      <a href={`/locations/${id}`}>Back to {L_name}</a>
      <br />
      <a href={`/locations/${id}/addresses/`}>Back to addresses</a>
      <br />
      
    </>
  );
};

export default AddressEdit;