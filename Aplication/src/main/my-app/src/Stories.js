import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import {getAccount, getAccountData, getInterests, getProjectsFromAccount} from "./services";
import Profile from "./Profile";
import './Stories.css'
import SingularStory from "./SingularStory";


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
                </div>
            </div>
        )
    }
    else return <p>Loading</p>

}

export default Stories;
