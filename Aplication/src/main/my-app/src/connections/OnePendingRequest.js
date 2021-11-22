import React, { useState, useEffect } from 'react'
import { getAccountData } from '../services';

function OnePendingRequest(prop) {
    const [person, setPerson] = useState();

    useEffect(() => {
        let mounted = true;
        getAccountData(prop.request.pcn1)
            .then(items => {
                if (mounted) {
                    setPerson(items);
                }
            })
        return () => mounted = false;
    }, [])

    if (person !== undefined){
        return (
            <div>
                <h3>Connection Request</h3>
                <p>Name: {person.name}</p>
                <p>Bio: {person.bio}</p>
                <p>Role: {person.type}</p>
                <button onClick={() => prop.acceptRequest(prop.request)}>accept request</button>
            </div>
        )
    }
    return "";
    
}

export default OnePendingRequest
