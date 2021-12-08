import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import Profile from "./Profile";
import './Stories.css'
import SingularStory from "./SingularStory";
import { getAccount, getAccountData, getInterests, getProjectsFromAccount, addProjectToAccount, deleteProject, editOneProject } from "./services";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

function Stories(prop) {
    const [projects, setProjects] = useState([]);
    const [edit, setedit] = useState(false);
    const [data, setdata] = useState();


    const addProjectasync = async (title, description, link, pcn) => {
        await addProjectToAccount(title, description, link, pcn);
        window.location.reload(false);
    }

    const deleteProjectasync = async (item) => {
        await deleteProject(item.id, item.title, item.description, item.link, getAccount().pcn);
        window.location.reload(false);
    }

    const editProject = async (item) => {
        setdata(item);
        setedit(true);
    }

    const editProjectasync = async (id, title, description, link, pcn) => {
        // console.log(id, title, description, link, 1234);
        await editOneProject(id, title, description, link, 1234);
        setedit(false);
        // window.location.reload(false);
    }

    useEffect(() => {
        if (!prop.rendered.hasRendered) {
            prop.rendered.setHasRendered(true);
            getProjectsFromAccount(1234)
                .then(items => {
                    setProjects(items);
                })
            return;
        }
    })

    if (projects.length != 0) {
        return (
            <div id="Stories">
                <div id="Stories_g">
                    <div id="Profile" className="Profile">
                        <div id="StudentInfo">
                            <Profile rendered={prop.rendered} pcn={prop.pcn} myAccount={prop.myAccount} />
                        </div>
                    </div>
                    <div className="StoriesBg">
                        <rect id="StoriesBg" >
                            <div id="Stories_s">
                                <span>Projects</span>
                            </div>
                            {prop.myAccount === true &&
                                <div id="AddProject">
                                    <AddProject addProjectasync={addProjectasync} />
                                </div>
                            }
                            {prop.myAccount === true && edit === true &&
                                <div id="AddProject">
                                    <EditProject editProjectasync={editProjectasync} story={data}/>
                                </div>
                            }
                            {prop.myAccount === true &&
                                <div id="SingleStoriesWrapper">
                                    {projects.map(item => (
                                        <div>
                                            <SingularStory key={item.id} story={item} />
                                            <button id='AddButton' onClick={e => deleteProjectasync(item)}>delete</button>
                                            <button id='AddButton' onClick={e => editProject(item)}>edit</button>
                                        </div>
                                    ))}
                                </div>
                            }
                            {prop.myAccount === false &&
                                <div id="SingleStoriesWrapper">
                                    {projects.map(item => (
                                        <div>
                                            <SingularStory key={item.id} story={item} />
                                        </div>
                                    ))}
                                </div>
                            }
                        </rect>
                    </div>
                </div>
            </div>
        )
    }
    else return <p>Loading</p>

}

export default Stories;
