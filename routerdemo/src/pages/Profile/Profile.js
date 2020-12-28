import React from 'react'
import {Link} from 'react-router-dom'

function Profile () {
    return (
        <div>
            <h1> This is a Profile page </h1>
          <ul>
                <li><Link to="/Profile/Info">Profile Info</Link></li>
                <li><Link to="/Profile/Settings">Profile Settings</Link></li>
            
          </ul>
          </div>
        

    )
}

export default Profile;
