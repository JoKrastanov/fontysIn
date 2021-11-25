import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, getAccountData, getInterests, getProjectsFromAccount } from "./services";
import Profile from "./Profile";
import './Stories.css'
import SingularStory from "./SingularStory";
import AddProject from "./AddProject";


function Stories(prop) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        if (!prop.rendered.hasRendered) {
            prop.rendered.setHasRendered(true);
            getProjectsFromAccount(prop.pcn)
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
                                    <AddProject />
                                </div>
                            }
                            <div id="SingleStoriesWrapper">
                            {projects.map(item => (
                                <SingularStory key={item.id} story={item} />
                            ))}
                                </div>
                        </rect>
                    </div>
                </div>
            </div>
        )
    }
    else return <p>Loading</p>

}

export default Stories;
