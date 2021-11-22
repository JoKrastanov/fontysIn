import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import Stories from "./Stories";
import AddProject from './AddProject';


function App() {
    return (
        <>
            <div><TopBar/></div>
            <div>
            <AddProject/>
            <Stories/>
            
            </div>
        </>
    )
}

export default App;