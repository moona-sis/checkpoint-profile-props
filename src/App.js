import React from 'react';

import './App.css';
import Profile from './profile/Profile'
import Image from './assets/me.png'
import Navbar from './profile/Navbar'

const imgStyle={
 
  marginTop: '20vh',
  width: '60%',
  paddingLeft: '160px',
  paddingBottom: '30px'

}


function App() {
 
  return (
    <div>
      <Navbar title = 'My profile'/>
      <div className='container'>
        
    <Profile  bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' job='GRAPHIC DESIGNER'>
      <img style ={imgStyle} alt='me' src={Image}/>
      </Profile>
      </div>
    </div>
  );
}

export default App;
