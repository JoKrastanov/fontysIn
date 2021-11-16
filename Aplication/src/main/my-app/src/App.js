import React, { Component, useState, useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar";
import Stories from "./Stories";


function App() {
    return (
        <>
            <div><TopBar/></div>
            <div>
            <Stories/>
            </div>
        </>
    )
}

export default App;