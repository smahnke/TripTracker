import React from 'react';

const TripNew = ({trip, user}) => {
  const {email, password, id} = user
  const { name, duration, errors} = trip
  const defaultName = name ? name : ''
  const defaultDuration = duration ? duration : ''
  return (
    <>
    <h1>New Trip</h1>
    {errors && errors }
    <form action={`/users/${id}/trips`} method='post'>
      <input
        type='text'
        required
        placeholder='Name'
        defaultValue={defaultName}
        name='trip[name]'
      />
      <input
        type='text' 
        required
        placeholder="Duration"
        defaultValue={defaultDuration}
        name='trip[duration]'
      />
      <button type='submit'>Add Trip</button>
    </form>
    </>
  )
}

export default TripNew;