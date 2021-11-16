import React, { useEffect, useState } from "react";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount } from "./services";

function Login() {

    setAccount("2323", "Joe");

    //example adding project
    var data = JSON.stringify({
        "id": 1,
        "title": "test",
        "description": "A nice test",
        "link": "poo.com"
    });
    addProjectToAccount(1, data)

    //example getting project
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let mounted = true;
        getProjectsFromAccount(1) // 1 is UserId
            .then(items => {
                if (mounted) {
                    setProjects(items)
                    console.log(items)
                }
            })
        return () => mounted = false;
    }, [])

    let Account = getAccount();



    return (<p> Logged in as {Account.name} {Account.pcn}</p>)
}

export default Login;