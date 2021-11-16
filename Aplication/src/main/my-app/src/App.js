import React, { Component, useState, useEffect } from 'react';
import Profile from './Profile';
import './App.css';
import Login from "./Login";


function App() {
    return (
        <>
            <Login />
            <Profile/>
        </>
    )
}

export default App;