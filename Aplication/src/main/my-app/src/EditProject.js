import React from 'react'
import './AddProject.css'
import {getAccount} from './services'

function EditProject(prop) {
    var id = prop.story.id;
    var title;
    var description;
    var link;
//the inputs need to be changed to textareas and that might break the submit
    return (
        <div id='AddWrapper'>
            <label>Edit project {prop.story.title}</label>
            <input id='TitleBox' onChange={e => title = e.target.value} placeholder="title"></input>
            <textarea id='DescriptionBox' onChange={e => description = e.target.value} placeholder="description"></textarea>
            <input id='LinkBox' onChange={e => link = e.target.value} placeholder="link"></input>
            <button id='AddButton' onClick={e => prop.editProjectasync(id, title, description, link, getAccount().pcn) }>Submit</button>
        </div>
    )
}
 

export default EditProject
