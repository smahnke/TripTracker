import React from 'react';

const UserNew = ({user}) => {
  const { email, password, id } = user
  const defaultEmail = email ? email : "";
  const defaultPassword = password ? password :"";
  return (
    <>
      <h1>New User</h1>
      <form action='/users' method='post'>
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
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default UserNew;