import React, { useEffect, useState } from "react";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount, getAllPendingRequests } from "./services";

function Login() {

    setAccount("2345" , "Joe");

    return "";
}

export default Login;