import React from 'react';

const Addresses = ({ location, addresses }) => {
  const { L_name, id } = location
  
  //  location.id
 
  return (
    <>
      <h1>Address from {L_name} </h1>
      <a href={`/locations/${id}/`}>Back to {L_name}</a>
      <br />
      <a href={`/locations/${id}/addresses/new`}>New Address</a>
      {
        addresses.map( (address) => (
          <div>
            <h3>{address.address}</h3>
            <a href={`/locations/${id}/addresses/${address.id}`}>Show Address</a>
            {' '}
            <a href={`/locations/${id}/addresses/${address.id}/edit`}>Edit Address</a>
            {' '}
            <a href={`/locations/${id}/addresses/${address.id}`} data-method="delete">Delete Address</a>
          </div>
        ))
      }
    </>
  )
}
export default Addresses;