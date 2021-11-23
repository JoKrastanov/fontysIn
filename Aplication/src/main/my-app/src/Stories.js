import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import {getAccount, getAccountData, getInterests, getProjectsFromAccount} from "./services";
import Profile from "./Profile";
import './Stories.css'
import SingularStory from "./SingularStory";
import AddProject from "./AddProject";


function Stories() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let mounted = true;
        getProjectsFromAccount(getAccount().pcn)
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
                {console.log(projects)}
                <div id="Stories_g">
                    <div id="Profile" className="Profile">
                        <div id="Student_Studentovych__">
                            <Profile/>
                        </div>
                    </div>
                    <div className="StoriesBg">
                        <rect id="StoriesBg" >
                    <div id="Stories_s">
                        <span>Projects</span>
                    </div>
                    <div id="AddProject">
                        <AddProject/>
                    </div>
                    {projects.map(item => (
                        <SingularStory key={item.id} story={item}/>
                    ))}
                        </rect>
                </div>
                </div>
            </div>
        )
    }
    else return <p>Loading</p>

}

export default Stories;
