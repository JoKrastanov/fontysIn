import React from 'react'
import {addProjectToAccount, getAccount} from './services'

function AddProject() {
    var title;
    var description;
    var link;

    return (
        <div>
            <input onChange={e => title = e.target.value} placeholder="title"></input>
            <input onChange={e => description = e.target.value} placeholder="description"></input>
            <input onChange={e => link = e.target.value} placeholder="link"></input>
            <button onClick={e => addProjectToAccount(title, description, link, getAccount().pcn) }>Submit</button>
        </div>
    )
}
 

export default AddProject
