import React, { useEffect, useState } from "react";
import { getAccount, getAccountData, getInterests } from "./services";
import './TopBar.css'

function TopBar() {
    const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        let mounted = true;
        getInterests(1234)
            .then(items => {
                if (mounted) {
                    setInterests(items)
                }
            })
        return () => mounted = false;
    }, [])

    useEffect(() => {
        let Account = getAccount();

        let mounted = true;
        getAccountData(Account.pcn)
            .then(items => {
                if (mounted) {
                    setAccount(items)
                }
            })
        return () => mounted = false;
    }, [])

    if (account != undefined){
        return (
            <div id="TopBar">
                <svg className="TopbarBg" viewBox="0 0 1920 71">
                </svg>
                <div id="Logo">
                    <span>Linkedtys</span>
                </div>
                <div id="LoggedUser" className="LoggedUser">
                    <div id="UserName">
                        <span>{account.name}</span>
                    </div>
                    <svg className="UserPic">
                        <ellipse id="UserPic" rx="28" ry="28" cx="28" cy="28">
                        </ellipse>
                    </svg>
                </div>
                <div id="SearchBar">
                    <svg className="SearchBg">
                        <rect id="SearchBg" rx="17" ry="17" x="0" y="0" width="704" height="41">
                        </rect>
                    </svg>
                    <div id="Search">
                        <span>Search...</span>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <p>Loading Please Wait</p>
        )
    }

}

export default TopBar;
