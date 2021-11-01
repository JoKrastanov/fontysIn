import React from "react";
import { getAccount, setAccount } from "./services";

function Login () {
    setAccount("2323", "Joe");
    let Account = getAccount();
    console.log(Account.pcn);
    console.log(Account.name);
    return(<p> Logged in as {Account.name} {Account.pcn}</p>)
}

export default Login;