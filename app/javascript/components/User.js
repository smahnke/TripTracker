import React from 'react';

const User = ({ user }) => {
  const { id, name, password } = user;
  
  return (
    <>
      <h1>User: {name}</h1>
    
      <a href='/'>Back to Main Menu</a>
      <br />
      <a href={'/users/' + id} data-method="delete">Delete User</a>
      <br />
      <a href={'/users/' + id + '/edit'}>Edit User</a>
      <br />
      <a href={`/users/${id}/trips`}>Show Trips</a>
    </>
  )
}

export default User;