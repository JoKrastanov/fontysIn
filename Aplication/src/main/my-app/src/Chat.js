import React, {useEffect, useState} from "react";

import {getChat, getAccount} from './services'

import "./Chat.css";
import Message from "./Message";
import sendImg from "./images/60525.png"

function Chat(props) {

    const [chat, setChat] = useState({});
    const [messages, setMessages] = useState([]);
    const [hasRendered, setHasRendered] = useState(false);

    useEffect( () => {
        if(!hasRendered) {
        getChat(getAccount().pcn, props.id)
            .then(response => {
                setChat(response);
                setMessages(response.messages)
                setHasRendered(true);
            })
        }
        return;
    }, [])


    return (
        <div id={"chat"}>
            <div id={"name"}>{(getAccount().pcn === chat.pcn1) ? chat.account1 : chat.account2}</div>
            <div className={"chat"}>
                <div id={"messages"}>
                    {(messages !== null) ? messages.map(msg => (
                        <Message key={msg.id} message={msg}/>
                    )) : ""
                    }
                </div>
                <div className={"sendbox"}>
                    <div className={"textbox"}><input type={"text"}/></div>
                    <img src={sendImg} id={"send"}/>
                </div>
            </div>
        </div>
        )
}

export default Chat