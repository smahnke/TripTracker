import React from 'react';

const Home=() => (
  <>
    {/* <h1 style={styles.mainHeader}>Home Page</h1> */}
    <h1 className="title">Welcome to Trip Tracker</h1>
    <br/>
    <p>This application allows you to track and plan your trips.</p>
    <a href="/users/new">Create a New User Account</a>
    <br/>
    <a href="/users/">Log in</a>
  </>
)

export default Home;