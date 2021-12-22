import React, { useState, useEffect } from 'react'
import { getAccount, getALlAccounts, isAccountVisible, makeConnectionRequest } from '../services';
import OnePerson from './OnePerson';
import Popup from '../components/Popup';
import './AllPeople.css';

function AllPeople(prop) {
    const [accounts, setAccounts] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [requestPcn, setRequestPcn] = useState();

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
        if (await isAccountVisible(pcn, getAccount().pcn)) {
            prop.setPcnStates(pcn);
        }
        else {
            console.log(pcn);
            setRequestPcn(pcn);
            setButtonPopup(true);
        }
    }

    if (accounts != undefined) {
        return (
            <div id='AllPeopleWrapper'>
                <div id="PepopeTxt">People</div>
                {accounts.map(item => (
                    <>
                        {item.pcn != getAccount().pcn &&
                            <OnePerson key={item.pcn} person={item} redirectIfAccountIsVisible={redirectIfAccountIsVisible} />
                        }
                    </>
                ))}
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div>You don't have a connection with this person. Do you want to send a connection request?</div>
                    <button id="ConnectionButton" onClick={() => {
                        console.log(getAccount().pcn);
                        makeConnectionRequest(getAccount().pcn, requestPcn);
                        setButtonPopup(false);
                    }}>Send Connection request</button>
                </Popup>
            </div>

        )
    }
    return "";
}

export default AllPeople
