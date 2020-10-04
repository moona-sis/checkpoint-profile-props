import React from 'react'

const profileStyle={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
    width: '50%'
    
  
  }
function Profile({fullname ='Mouna SI SMAIL',bio,job,children}) {
    return (
        
        <div style={profileStyle}>
            <div>{children}</div>
            <div className='name'>{fullname}</div>
            <div className='job'> {job}</div>
            <div className='bio'>{bio}</div>
            
        </div>
     
    )
}

export default Profile
