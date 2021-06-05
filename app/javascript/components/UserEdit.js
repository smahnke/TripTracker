import React from 'react';

const UserEdit = ({user}) => {
  const { email, password, id } = user
  const defaultEmail = email ? email : "";
  const defaultPassword = password ? password : "";
  return (
    <>
      <h1>Editing {title}</h1>
      <form action={'/users/$(id)'} method='post'>
        <input type='hidden' name='_method' value='patch' />
        <input
          placeholder='Name'
          type='text'
          required
          defaultValue={defaultEmail}
          name='user[email]'
        />
        <input
          placeholder='Password'
          type='text'
          required
          defaultValue={defaultPassword}
          name='user[password]'
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UserEdit;