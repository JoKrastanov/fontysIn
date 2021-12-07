import React, {useEffect, useState} from "react";

import "./ChatBox.css"
import ChatList from "./ChatList";
import Chat from "./Chat.js";

function ChatBox(props) {

    const [openedChat, setOpenedChat] = useState(0);



    const handleOpenChat = (e) => {
        setOpenedChat(e);
    }
    const closeChat = () => {
        setOpenedChat(0);
    }


    return (
        <div className={"Chats"}>
            <div id={"ChatBox-menu"}>
                <div className={"Class-button"}>
                    <button onClick={closeChat}>&lt;</button>
                    <button id={"close-button"} onClick={props.onChange}>x</button>
                </div>
                {(openedChat == 0) ?
                    <div id={"list"}>
                        <ChatList chat={handleOpenChat}/>
                    </div> :
                    <div id={"opened-chat"}>
                        <Chat key={openedChat} id={openedChat}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default ChatBox;