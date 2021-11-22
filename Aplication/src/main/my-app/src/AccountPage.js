import React from "react";
import Stories from "./Stories"
import './AccountPage.css'
import AllPeople from "./connections/AllPeople";
export default function AccountPage(){
    return(
        <div id="AccountPageWrapper">
            <div id="StoriesWrapper">
            <Stories/>
            </div>
            <div id="AccountWrapper">
                <AllPeople/>
            </div>
        </div>
    )
}