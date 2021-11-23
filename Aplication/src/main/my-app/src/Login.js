import React, { useEffect, useState } from "react";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount, getAllPendingRequests } from "./services";

function Login() {

    setAccount("1234" , "Joe");
    let Account = getAccount();


    return (<p> Logged in as {Account.name} {Account.pcn}</p>)
}

export default Login;