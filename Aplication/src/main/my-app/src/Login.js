import React from "react";
import { getAcount, setAcount } from "./services";

function Login () {
    setAcount("pcn123456", "Joe");
    let acount = getAcount();
    console.log(acount.pcn);
    console.log(acount.name);
    return(<p>Login</p>)
}

export default Login;