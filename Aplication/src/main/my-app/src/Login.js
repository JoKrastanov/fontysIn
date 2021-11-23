import React, { useEffect, useState } from "react";
import { getAccount, setAccount, addProjectToAccount, getProjectsFromAccount, getAllPendingRequests } from "./services";

function Login() {

    setAccount("1234" , "Joe");

    return "";
}

export default Login;