import React, { useState, useEffect } from 'react'
import { getAccount, getALlAccounts, isAccountVisable, makeConnectionRequest } from '../services';
import OnePerson from './OnePerson';
import Popup from '../components/Popup';

function AllPeople() {
    const [accounts, setAccounts] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [requestPcn, setRequestPcn] = useState();

    var pcnFriendRequestPopup;

    useEffect(() => {
        let mounted = true;
        getALlAccounts()
            .then(items => {
                if (mounted) {
                    setAccounts(items);
                }
            })
        return () => mounted = false;
    }, [])

    const redirectIfAccountIsVisible = async (pcn) => {
        if (await isAccountVisable(pcn, getAccount().pcn)) {
            alert("Redirect to user page");
        }
        else {
            console.log(pcn);
            setRequestPcn(pcn);
            setButtonPopup(true);
        }
    }

    if (accounts != undefined) {
        return (
            <div>
                {accounts.map(item => (
                    <>
                        {item.pcn != getAccount().pcn &&
                            <OnePerson key={item.pcn} person={item} redirectIfAccountIsVisible={redirectIfAccountIsVisible} />
                        }
                    </>
                ))}
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1>You don't have a connection with this person. Do you want to send a connection request?</h1>
                    <button onClick={() => {
                        console.log(getAccount().pcn);
                        makeConnectionRequest(getAccount().pcn, requestPcn);
                        setButtonPopup(false);
                    }}>Set Connection request</button>
                </Popup>
            </div>

        )
    }
    return "";
}

export default AllPeople
