import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import Stories from "./Stories";
import AddProject from './AddProject';
import AllPeople from './connections/AllPeople';
import PendingRequests from './connections/PendingRequests';


function App() {
    return (
        <>
            <div><TopBar/></div>
            <div>
            <AddProject/>
            <PendingRequests />
            <Stories/>
            <AllPeople />
            </div>
        </>
    )
}

export default App;