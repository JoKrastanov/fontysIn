import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getAcount, setAcount } from '../src/services'


function App () {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])
    return (
        <div className="App">
            <h1 className="App-title">{message}</h1>
        </div>
    )
}

export default App;