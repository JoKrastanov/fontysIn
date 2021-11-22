import React from 'react'

function OnePerson(prop) {
    return (
        <div id='SinglePersonWrapper'>
            <div id='Name'>{prop.person.name}</div>
            <button id='ViewBtn'	onClick={ () => prop.redirectIfAccountIsVisible(prop.person.pcn)}>View Account</button>
        </div>
    )
}

export default OnePerson
