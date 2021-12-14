import React, { useEffect, useState } from "react";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount, getAllPendingRequests, getHashCode } from "./services";

function Login(prop) {
    setAccount("1234", "test");

    useEffect(() => {
        let mounted = true;
        getHashCode()
            .then(items => {
                if (mounted) {
                    setAccount(items , "");
                    prop.setPcn(items)
                }
            })
        return () => mounted = false;
    }, [])

    return "";
}

export default Login;