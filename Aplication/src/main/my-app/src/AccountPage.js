import React from "react";
import Stories from "./Stories"
import './AccountPage.css'
export default function AccountPage(prop){
    return(
        <div >
            <Stories pcn={prop.pcn} myAccount={prop.myAccount}/>
        </div>
    )
}