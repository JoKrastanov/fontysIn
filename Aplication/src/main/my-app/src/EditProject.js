import React from 'react'
import './AddProject.css'
import {getAccount} from './services'

function EditProject(prop) {
    console.log(prop);
    var title;
    var description;
    var link;
//the inputs need to be changed to textareas and that might break the submit
    return (
        <div id='AddWrapper'>
            <input id='TitleBox' onChange={e => title = e.target.value} placeholder={prop.story.title}></input>
            <textarea id='DescriptionBox' onChange={e => description = e.target.value} placeholder={prop.story.description}></textarea>
            <input id='LinkBox' onChange={e => link = e.target.value} placeholder={prop.story.link}></input>
            <button id='AddButton' onClick={e => prop.editProjectasync(title, description, link, getAccount().pcn) }>Edit</button>
        </div>
    )
}
 

export default EditProject
