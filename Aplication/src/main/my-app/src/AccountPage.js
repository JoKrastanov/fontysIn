import React, { useState } from "react";
import Stories from "./Stories"
import './AccountPage.css'
import AllPeople from "./connections/AllPeople";
import { getAccount } from "./services";

export default function AccountPage(prop) {
    const [pcn, setPcn] = useState(getAccount().pcn);
    const [hasRendered, setHasRendered] = useState(false);
    const [hasRendered2, setHasRendered2] = useState(false);
    const [hasRendered3, setHasRendered3] = useState(false);
    const rendered = { hasRendered, setHasRendered, hasRendered2, setHasRendered2, hasRendered3, setHasRendered3 }

    function setPcnStates(pcn) {
        setPcn(pcn);
        setHasRendered (false);
        setHasRendered2 (false);
        setHasRendered3 (false);
    }

    return (
        <div id="AccountPageWrapper">
            <div id="StoriesWrapper">
                <Stories rendered={rendered} pcn={pcn} myAccount={true} />
            </div>
            <div id="AccountWrapper">
                <AllPeople setPcnStates={setPcnStates} hasRendered={"false"} />
            </div>
        </div>
    )
}