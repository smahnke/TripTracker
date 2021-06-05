import React from 'react';

const Users = ({users}) => {
  return (
    <>
      <h1>All Users</h1>
      <a href="/users/new">Add User</a>
      {
        users.map( (user) => (
          <div>
            <h3>{user.email} {' '} {user.password}</h3>
          <a href={'/users/' + user.id}>Show User</a>
          {' '}
          <a href={'/users/' + user.id + '/edit'}>Edit User</a>
          {' '}
          <a href={'/users/' + user.id} data-method="delete">Delete User</a>
          {' '}
          </div>
        ))
      }
    </>
  )
}

export default Users;