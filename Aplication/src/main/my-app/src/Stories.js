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
        let mounted = true;
        getProjectsFromAccount(prop.pcn)
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
                <div id="Stories_g">
                    <div id="Profile" className="Profile">
                        <div id="Student_Studentovych__">
                            <Profile pcn={prop.pcn} myAccount={prop.myAccount}/>
                        </div>
                    </div>
                    <div className="StoriesBg">
                        <rect id="StoriesBg" >
                            <div id="Stories_s">
                                <span>Stories</span>
                            </div>
                            <div id="AddProject">
                                <AddProject />
                            </div>
                            {projects.map(item => (
                                <SingularStory key={item.id} story={item} />
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
