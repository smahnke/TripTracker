import React from 'react';

const Trip = ({ user, trip }) => {
  const { email, password, id } = user
  const { name, duration } = trip;
  
  return (
    <>
      <h1>Trip: {name}</h1>
      <p>
        Duration: {duration}
      </p>
      <a href='/'>Back</a>
      <br />
      <a href={'/trips/' + id} data-method="delete">Delete Trip</a>
      <br />
      <a href={'/trips/' + id + '/edit'}>Edit Trip</a>
      <br />
      <a href={`/trips/${trip.id}/locations`}>Show Locations</a>
    </>
  )
  }

export default Trip;