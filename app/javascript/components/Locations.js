import React from 'react';

const Locations = ({ trip, locations }) => {
  const { name } = trip
  
  //  trip.id
  
  return (
    <>
      <h1>Locations from the {name} Trip</h1>
      <a href={`/trips/${id}`}>Back to {name} trip</a>
      <br />
      <a href={`/trips/${id}/locations/new`}>New Location</a>
      {
        locations.map( (location) => (
          <div>
            <h3>{location.name}</h3>
            <a href={ `/trips/${id}/locations/${location.id}`}>Show Location</a>
            {' '}
            <a href={`/trips/${id}/locations/${location.id}/edit`}>Edit Location</a>
            {' '}
            <a href={`/trips/${id}/locations/${location.id}`} data-method="delete">Delete Location</a>
          </div>
        ))
      }
    </>
  )
}
export default Locations;