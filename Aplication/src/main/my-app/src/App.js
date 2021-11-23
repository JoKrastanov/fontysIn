import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import Stories from "./Stories";
import AddProject from './AddProject';
import AllPeople from './connections/AllPeople';
import PendingRequests from './connections/PendingRequests';
import AccountPage from "./AccountPage";
import { getAccount } from './services';


function App() {
    const [pcn, setPcn] = useState(getAccount().pcn);
    console.log(pcn)
    return (
        <>
            <div><TopBar/></div>
            <div>
                <AccountPage pcn={pcn} myAccount={false} />
            </div>
            <PendingRequests />
            <AllPeople setPcn={setPcn} />
        </>
    )
}

export default App;