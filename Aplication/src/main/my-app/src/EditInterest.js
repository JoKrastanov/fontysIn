import React, { useState } from 'react'
import InterestEdit from './InterestEdit'
import { addInterest } from './services'

function EditInterest(prop) {
    const [input, setInput] = useState()
    
    return (
        <div>
            <input onChange={(e) => {setInput(e.target.value)}}></input>
            <button onClick={() => prop.addInterestAsync(input)}>add an interest</button>
            <ul>
                {prop.interests.map(item => (
                    <li><InterestEdit key={item.id} interest={item} deleteInterestAsync={prop.deleteInterestAsync}/> </li>
                ))}
            </ul>
        </div>
    )
}

export default EditInterest
