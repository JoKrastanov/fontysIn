import React, { useEffect, useState } from "react";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount } from "./services";

function Login() {

    setAccount("2345", "Joe");

    //example getting project
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let mounted = true;
        getProjectsFromAccount(getAccount().pcn)
            .then(items => {
                if (mounted) {
                    setProjects(items)
                    console.log(items)
                }
            })
        return () => mounted = false;
    }, [])

    let Account = getAccount();
    console.log(Account.pcn);
    console.log(Account.name);
    


    return (<p> Logged in as {Account.name} {Account.pcn}</p>)
}

export default Login;