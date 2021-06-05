import React from 'react';

const TripEdit = ({trip, user}) => {
  const {id} = user;
  const { name, duration } = trip;
  const defaultName = name ? name : "";
  const defaultDuration = duration ? duration : "";
  return (
    <>
      <h1>Editing {name} and {duration}</h1>
      <form action={`/users/${id}/trips/${trip.id}`} method='post'>
        <input type='hidden' name='_method' value='patch' />
        <input
          placeholder='Name'
          type='text'
          required
          defaultValue={defaultName}
          name='trip[name]'
        />
        <input
          placeholder='Duration'
          type='text'
          required
          defaultValue={defaultDuration}
          name='trip[duration]'
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default TripEdit;