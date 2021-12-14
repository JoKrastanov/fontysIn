import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import AccountPage from "./AccountPage";
import {connectToChats, getAccount} from "./services";
import Login from './Login';
import MessageIcon from "./MessageIcon";
import LastChats from "./LastChats";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import useSound from 'use-sound';
import messageSound from "./media/juntos-607.mp3"
import {getAccountChats} from "./services";

function App() {
    const [pcn, setPcn] = useState();
    const [hasRendered, setHasRendered] = useState(false);
    const [hasRendered2, setHasRendered2] = useState(false);
    const [hasRendered3, setHasRendered3] = useState(false);
    const rendered = { hasRendered, setHasRendered, hasRendered2, setHasRendered2, hasRendered3, setHasRendered3 }
    const [myAccount, setMyAccount] = useState(true);
    const [openedChat, setOpenedChat] = useState(0);
    const [stompClient, setStompClient] = useState(null);


    useEffect(() => {
        connectToChats(getAccount().pcn, setStompClient).then();
    }, []);

    function setPcnStates(pcn) {
        setPcn(pcn);
        setHasRendered(false);
        setHasRendered2(false);
        setHasRendered3(false);
        setMyAccount(false)
    }
    if (pcn != undefined) {
        return (
            <>
                <div><TopBar setPcn={setPcn} setPcnStates={setPcnStates} setMyAccount={setMyAccount} /></div>
                <div>
                    <AccountPage pcn={pcn} setPcn={setPcn} rendered={rendered} setPcnStates={setPcnStates} myAccount={myAccount} />
                </div>
                <div id={"messages"}><MessageIcon stomp={stompClient} openChat={setOpenedChat} openedChat={openedChat} pcn={pcn}/></div>
            </>
        )
    }else { return <Login setPcn={setPcn}/> }
}

export default App;