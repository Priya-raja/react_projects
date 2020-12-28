import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

function Profile () {
    return (
        <div>
            <h1> This is a Profile page </h1>
          <ul>
                <Link to="/Profile/Info">Info</Link>
                <Link to="/Profile/Settings">Settings</Link>
            
          </ul>
          </div>

    )
}

export default Profile;
