import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, getAccountData, getInterests, getProjectsFromAccount, addProjectToAccount } from "./services";
import Profile from "./Profile";
import './Stories.css'
import SingularStory from "./SingularStory";
import AddProject from "./AddProject";
import ProjectsExporter from './Portfolio/ProjectsExporter';
import { PDFViewer } from '@react-pdf/renderer';
import Popup from './components/Popup';


function Stories(prop) {
    const [projects, setProjects] = useState([]);
    const [buttonPopupPdf, setButtonPopupPdf] = useState(false);

    function updateButton (){
       setButtonPopupPdf(true);
    }

    const addProjectasync = async (title, description, link, pcn) => {
        await addProjectToAccount(title, description, link, pcn);
        window.location.reload(false);
    }

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
                 {(getAccount().pcn == prop.pcn) ? <div className="pdfButton">
                   <button className="buttonExport"  onClick={updateButton}>Export portfolio to PDF</button>
                   <Popup trigger={buttonPopupPdf} setTrigger={setButtonPopupPdf}>
                    <PDFViewer><ProjectsExporter/></PDFViewer>
                    </Popup>
                          </div> : ''}
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
                                    <AddProject addProjectasync={addProjectasync}/>
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
