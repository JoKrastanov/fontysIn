import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import Stories from "./Stories";
import AddProject from './AddProject';
import AllPeople from './connections/AllPeople';
import PendingRequests from './connections/PendingRequests';
import AccountPage from "./AccountPage";

function App() {

    return (
        <>
            <div><TopBar/></div>
            <div>
                <AccountPage/>
            </div>

        </>
    )
}

export default App;