import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount } from "./services";

function Profile() {
    // const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);

    setAccount("1234", "Joe");
    let account = getAccount();

    function displayVars() {
        console.log("Hello");
        console.log(process.env.ALLUSERSPROFILE);
    }



    // useEffect(() => {
    //     let mounted = true;
    //     getInterests()
    //         .then(items => {
    //             if (mounted) {
    //                 setInterests(items)
    //             }
    //         })
    //     return () => mounted = false;
    // }, [])

    // useEffect(() => {
    //     let Account = getAccount();
    //
    //     let mounted = true;
    //     getAccountData(Account.pcn)
    //         .then(items => {
    //             if (mounted) {
    //                 setAccount(items)
    //             }
    //         })
    //     return () => mounted = false;
    // }, [])

    if (account != undefined){
        return (
            <>
                <p>{account.name}</p>
                <p>{account.pcn}</p>

                <InterestDropdown interest={interests} accountId={account.id}/>
                <button onClick={displayVars()}>Click me</button>
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