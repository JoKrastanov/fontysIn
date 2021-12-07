import React, {useEffect, useState} from "react";
import "./ChatList.css"

import {getAccount, getAccountChats} from "./services";
import OnePendingRequest from "./connections/OnePendingRequest";
import ChatContainer from "./ChatContainer";

function ChatList(props) {

    const [Chats, setChats] = useState(false);

    useEffect(() => {
        let mounted = true;
        getAccountChats(getAccount().pcn)
            .then(items => {
                if (mounted) {
                    setChats(items)
                }
            })
        return () => mounted = false;
    }, [])

    const openChat = (e) => {
        props.chat(e);
    }

    if(Chats === false) {
        return "";
    }
        else {
        return (
            <div className="chat-list">
                <div id={"title"}>Chats</div>
                <div id={"search"}><input type={"text"} placeholder={"Search for people..."}/></div>
                <div id={"list"}>
                    {Chats.map(message => (
                        <ChatContainer id={(getAccount().pcn === message.pcn1) ? message.pcn2 : message.pcn1} {...message} open={openChat}/>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default ChatList;