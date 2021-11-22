import React from 'react'

function OnePerson(prop) {
    return (
        <div>
            <h1>{prop.person.name}</h1>
            <button	onClick={ () => prop.redirectIfAccountIsVisible(prop.person.pcn)}>View Account</button>
        </div>
    )
}

export default OnePerson
