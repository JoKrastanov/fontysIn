import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import AccountPage from "./AccountPage";
import { getAccount } from "./services";
import MessageIcon from "./MessageIcon";
import LastChats from "./LastChats";

function App() {
    const [pcn, setPcn] = useState(getAccount().pcn);
    const [hasRendered, setHasRendered] = useState(false);
    const [hasRendered2, setHasRendered2] = useState(false);
    const [hasRendered3, setHasRendered3] = useState(false);
    const rendered = { hasRendered, setHasRendered, hasRendered2, setHasRendered2, hasRendered3, setHasRendered3 }
    const [myAccount, setMyAccount] = useState(true);
    const [openedChat, setOpenedChat] = useState(0);

    function setPcnStates(pcn) {
        setPcn(pcn);
        setHasRendered (false);
        setHasRendered2 (false);
        setHasRendered3 (false);
        setMyAccount(false)
    }


    return (
        <>
            <div><TopBar setPcn={setPcn} setPcnStates={setPcnStates} setMyAccount={setMyAccount}/></div>
            <div>
                <AccountPage pcn={pcn} setPcn={setPcn} rendered={rendered} setPcnStates={setPcnStates} myAccount={myAccount}/>
            </div>
            <div>

            </div>
            <div id={"messages"}><MessageIcon openChat={setOpenedChat} openedChat={openedChat} pcn={pcn}/></div>
        </>
    )
}

export default App;