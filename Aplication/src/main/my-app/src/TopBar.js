import React, { useEffect, useState } from "react";
import { getAccount, getAccountData, getInterests } from "./services";
import './TopBar.css'

function TopBar() {
    const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        let mounted = true;
        getInterests(getAccount().pcn)
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
                <div className="TopbarBg">

                <div id="Logo">
                    <span>Linkedtys</span>
                </div>

                <div id="SearchBar">
                    <div className="SearchBg">
                        <input id="Search" type="text" value="Search...">
                        </input>
                        <div id="SearchBg">
                        </div>
                    </div>

                </div>
                    <div id="LoggedUser" className="LoggedUser">
<div id="UserWrapper">
                        <div id="UserName">
                            <span>{account.name}</span>
                        </div>
                        <div className="UserPic">
                            <img id="UserPic" src="./logo512.png">
                            </img>
                        </div>
</div>
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
