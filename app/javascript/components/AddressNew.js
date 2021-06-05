import React from 'react';

const AddressNew = ({ address, location }) => {
  const { id } = location;
  const { address, errors } = address;
  const defaultAddress = address ? address : ""
 
  return (
    <>
      <h1>Please enter a new location address</h1>
      <p>Please enter complete address including zip code.</p>
      { errors && errors } 
      <form action={`/locations/${id}/addresses`} method="post">
        
        <input 
          type="text"
          required
          placeholder='Address'
          defaultValue={defaultAddress} 
          name="address[address]"
          />
      
    
        
        <button type="submit">Add Address</button>
      </form>
    </>
  )
}

export default AddressNew;