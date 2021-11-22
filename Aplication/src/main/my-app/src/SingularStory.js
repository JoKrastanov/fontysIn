import React, {useEffect, useState} from "react";
import {getProjectsFromAccount, getAccountData,getAccount} from "./services";
//rx="30" ry="30" x="0" y="0" width="1042" height="270"
export default function SingularStory (prop){
        if(prop.story != undefined){
            return (
                <div id="Story2">
                    {console.log(prop)}
                    <div className="Rectangle_5">
                        <div id="Rectangle_5" >
                    <div id="n_0_Sep">
                        <span>10Sep</span>
                    </div>
                    <div id="Story_to_end_all_stories">
                        <span>{prop.story.title}</span>
                    </div>
                    <div id="Phasellus_id_risus_facilisis_f">
                        <span>{prop.story.description}</span>
                    </div>

                        </div>
                    </div>
                </div>
            )
        }
        else return <></>


}