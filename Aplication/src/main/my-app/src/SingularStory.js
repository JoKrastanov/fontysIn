<<<<<<< Updated upstream
import React, {useEffect, useState} from "react";
import {getProjectsFromAccount, getAccountData,getAccount} from "./services";
export default function SingularStory (prop){
        if(prop.story != undefined){
            return (
                <div id="Story2">
                    {console.log(prop)}
                    <svg className="Rectangle_5">
                        <rect id="Rectangle_5" rx="30" ry="30" x="0" y="0" width="1042" height="270">
                        </rect>
                    </svg>
                    <div id="n_0_Sep">
                        <span>10Sep</span>
                    </div>
                    <div id="Story_to_end_all_stories">
                        <span>{prop.story.title}</span>
                    </div>
                    <div id="Phasellus_id_risus_facilisis_f">
                        <span>{prop.story.description}</span>
=======
import React, { useEffect, useState } from "react";
import './AddProject.css'
import { getProjectsFromAccount, getAccountData, getAccount } from "./services";
const axios = require('axios');
//rx="30" ry="30" x="0" y="0" width="1042" height="270"

export default function SingularStory(prop) {
    if (prop.story != undefined) {
        return (
            <div id="SingleStory">
                <div className="SingleStoryWrapper">
                    <div id="SingleStoryWrapper" >
                        <div id="DateWrap">
                            <span>10Sep</span>
                        </div>
                        <div id="TitleWrap">
                            <span>{prop.story.title}</span>
                        </div>
                        <div id="StoryDescriptionWrap">
                            <span>{prop.story.description}</span>
                        </div>
                        <div id="StoryLinkWrap">
                            <span>{prop.story.link}</span>
                        </div>
>>>>>>> Stashed changes
                    </div>
                </div>
            </div>
        )
    }
    else return <></>


}