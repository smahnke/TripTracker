import React from 'react';

const UserNew = ({user}) => {
  const { name, password, id } = user
  const defaultName = name ? name : "";
  const defaultPassword = password ? password :"";
  return (
    <>
      <h1>New User</h1>
      <form action='/users' method='post'>
        <input
          placeholder='Name'
          type='text'
          required
          defaultValue={defaultName}
          name='user[name]'
        />
        <input
          placeholder='Password'
          type='text'
          required
          defaultValue={defaultPassword}
          name='user[password]'
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default UserNew;