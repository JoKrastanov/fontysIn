import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, getAccountData, getInterests } from "./services";

function Profile() {
    const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        let mounted = true;
        getInterests()
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
            <>
                <p>{account.name}</p>
                <p>{account.pcn}</p>
                <p>{account.bio}</p>
                {account.interests.map(item => (
                        <Interest key={item.id} interest={item} />
                    ))}

                <InterestDropdown interest={interests} accountId={account.id}/>
            </>
        )
    }
    else{
        return (
            <p>Loading Please Wait</p>
        )
    }
    
}

export default Profile;