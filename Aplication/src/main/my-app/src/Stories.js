import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import './Stories.css'
import { getAccount, getAccountData, getInterests, getProjectsFromAccount, addProjectToAccount, deleteProject, editProject } from "./services";
import Profile from "./Profile";
import SingularStory from "./SingularStory";
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
        console.log(item);
    }

    const editProjectasync = async (item) => {
        await editProject(item.id, item.title, item.description, item.link, getAccount().pcn);
        window.location.reload(false);
    }

    useEffect(() => {
        let mounted = true;
        getProjectsFromAccount(1)
            .then(items => {
                if (mounted) {
                    setProjects(items);

                }
            })
        return () => mounted = false;
    }, [])


    if (projects.length != 0) {
        return (
            <div id="Stories">
                {console.log(prop.myAccount)}
                <div id="Stories_g">
                    <svg className="StoriesBg">
                        <rect id="StoriesBg" rx="0" ry="0" x="0" y="0" width="1131" height="1299">
                        </rect>
                    </svg>

                    <div id="Stories_s">
                        <span>Stories</span>
                    </div>
                    <div id="Profile" className="Profile">
                        <div id="Student_Studentovych__">
                            <Profile/>
                        </div>
                    </div>
                    {projects.map(item => (
                        <SingularStory key={item.id} story={item}/>
                    ))}
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
                            {prop.myAccount === false &&
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
