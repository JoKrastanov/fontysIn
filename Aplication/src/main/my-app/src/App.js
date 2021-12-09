import React, { Component, useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import TopBar from "./TopBar";
import AccountPage from "./AccountPage";
import { getAccount } from "./services";
import Login from './Login';
import MessageIcon from "./MessageIcon";
import LastChats from "./LastChats";
import ProjectsExporter from './Portfolio/ProjectsExporter';
import { PDFViewer } from '@react-pdf/renderer';
import Popup from './components/Popup';

function App() {
    const [pcn, setPcn] = useState();
    const [hasRendered, setHasRendered] = useState(false);
    const [hasRendered2, setHasRendered2] = useState(false);
    const [hasRendered3, setHasRendered3] = useState(false);
    const rendered = { hasRendered, setHasRendered, hasRendered2, setHasRendered2, hasRendered3, setHasRendered3 }
    const [myAccount, setMyAccount] = useState(true);
    const [openedChat, setOpenedChat] = useState(0);
    const [buttonPopupPdf, setButtonPopupPdf] = useState(false);

    function updateButton (){
       setButtonPopupPdf(true);
    }

    function setPcnStates(pcn) {
        setPcn(pcn);
        setHasRendered(false);
        setHasRendered2(false);
        setHasRendered3(false);
        setMyAccount(false)
    }
    console.log(pcn)
    if (pcn != undefined) {
        return (
            <>
                <div><TopBar setPcn={setPcn} setPcnStates={setPcnStates} setMyAccount={setMyAccount} /></div>
                <div>
                <button onClick={updateButton} className='openPDF'>Click here to export to PDF</button>
                    <AccountPage pcn={pcn} setPcn={setPcn} rendered={rendered} setPcnStates={setPcnStates} myAccount={myAccount} />
                    <Popup trigger={buttonPopupPdf} setTrigger={setButtonPopupPdf}>
                    <PDFViewer><ProjectsExporter/></PDFViewer>
                    </Popup>                    
               </div>
                <div>
                   

                </div>
                <div id={"messages"}><MessageIcon openChat={setOpenedChat} openedChat={openedChat} pcn={pcn}/></div>
            </>
        )
    }else { return <Login setPcn={setPcn}/> }
}

export default App;