import React from 'react';

const LocationNew = ({ location, trip }) => {
  const { id } = trip;
  const { L_name, errors } = location;
  const defaultL_name = L_name ? L_name : ""

  return (
    <>
      <h1>New Location!</h1>
      { errors && errors } 
      {/* if there are errors render errors, if not don't render anything */}
      {/* /billboards/:billboard_id/artists/new(.:format) */}
      <form action={`/trips/${id}/locations`} method="post">
        
        <input 
          type="text"
          required
          placeholder='Location Name'
          defaultValue={defaultL_name} 
          name="location[L_name]"
          />
      
        
        <button type="submit">Add Location</button>
      </form>
    </>
  )
}

export default LocationNew;