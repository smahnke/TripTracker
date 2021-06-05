import React from 'react';

const Trips = ({ user, trips }) => {
  const { email, password, id } = user
  const url = `/users/${id}/trips`
  return (
    <>
      <h1>{email}'s Trips</h1>
      <a href={`/users/${id}`}>Back to {email}</a>
      <br />
      <a href= {url + '/new'}>Add New Trip</a>
      {
        trips.map( (trip) => (
          <div>
            <h3>{trip.name}{" "}{trip.duration}</h3>
            <a href={url + '/' + trip.id}>Show Trip</a>
            {' '}
            <a href={url + '/' + trip.id + '/edit'}>Edit Trip</a>
            {' '}
            <a href={url + '/' + trip.id} data-method="delete">Delete Trip</a>
          </div>
        ))
      }
    </>
  )
}

export default Trips;