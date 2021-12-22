import React, { useEffect, useState } from "react";
import {getAccount, getAccountData, getInterests, getALlAccounts, isAccountVisible} from "./services";
import './TopBar.css'
import PendingRequests from "./connections/PendingRequests";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function TopBar(prop) {
    const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);
    const [showReq, setShowReq] = useState(true);
    const [allPeople, setAllpeople] = useState([]);
    const [typedText, setTypedText] = useState("");

    const profileImage = (acc) =>
    {

        if(acc.binaryImage == null)
        {
            return "./defaultPhoto.png";
        }
        else{
            return acc.binaryImage;
        }
    }


    useEffect(() => {
        let mounted = true;
        getALlAccounts()
            .then(items => {
                setAllpeople(items);
                console.log(items);
            })
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


    const showRequests = () =>
    {
        setShowReq(!showReq);
    }

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        //console.log(result)
    }

    const handleOnSelect = async (item) => {
        setTypedText(item.name);
        if (await isAccountVisible(item.pcn, account.pcn)) {
            prop.setPcnStates(item.pcn);
        }
        else {
            alert("You don't have access to this account!");
        }

    }

    const handleOnFocus = () => {
        //console.log('Focused')
    }

    const formatResult = (pcn) => {
        const account = allPeople.find(acc => acc.pcn == pcn);
        return (<p dangerouslySetInnerHTML={{__html:
                '<div class="search-list-img">' +
                '<img src="' + profileImage(account) + '" alt="">' +
                '</div>' +
                '<div class="search-list-name">' +
                '<strong>'+account.name+'</strong>' +
                '</div>'
        }}></p>); //To format result as html
    }

    if (account != undefined){
        return (
            <div id="TopBar">
                <div className="TopbarBg">

                    <div id="Logo">
                        <span>Linkedtys</span>
                    </div>

                    <div id="SearchBar">
                        <div className="SearchBg">
                            <ReactSearchAutocomplete
                                items={allPeople}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnSelect}
                                onFocus={handleOnFocus}
                                showIcon={false}
                                autoFocus
                                formatResult={formatResult}
                                inputSearchString={typedText}
                                styling={{
                                    zIndex:"3",
                                    height: "30px"
                                }}
                                resultStringKeyName="pcn"
                            />
                            {/*<input id="Search" type="text" value="Search...">*/}
                            {/*</input>*/}
                            <div id="SearchBg">
                            </div>
                        </div>

                    </div>
                    <div id="LoggedUser" className="LoggedUser">
                        <div className="small-panel">
                            <button className="pending-requests-btn" onClick={showRequests}>Req</button>
                            <PendingRequests showReq={showReq}/>
                        </div>
                        <div id="UserWrapper" onClick={() => {
                            prop.setPcnStates(getAccount().pcn);
                            prop.setMyAccount(true);
                        }}>
                            <div id="UserName">
                                <span>{account.name}</span>
                            </div>
                            <div className="UserPic">
                                <img id="UserPic" src={profileImage(account)}>
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