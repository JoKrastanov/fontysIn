import React, {useEffect, useState} from "react";
import {getProjectsFromAccount, getAccountData,getAccount} from "./services";
//rx="30" ry="30" x="0" y="0" width="1042" height="270"
export default function SingularStory (prop){
        if(prop.story != undefined){
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

                        </div>
                    </div>
                </div>
            )
        }
        else return <></>


}