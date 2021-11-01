import { PureComponent } from 'react';

const axios = require('axios');

export const getAccount = () => {
    const value = "; " + document.Login;
    const parts = value.split("; " + "Login" + "=");

    if (parts.length == 2) {
        return JSON.parse(parts.pop().split(";").shift());
    }
    return null;
};

export const setAccount = (pcnAccount, nameAccount) => {
    var obj = {pcn: pcnAccount, name: nameAccount};
    const date = new Date();
    date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
    document.Login = "Login=" + JSON.stringify(obj) + "; expires=" + date.toUTCString() + "; path=/";
}

export const getAccountData = async (pcn) => {
    try {
        const resp = await axios.get('http://localhost:8080/accounts/' + pcn);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const getInterests = async () => {
    try {
        const resp = await axios.get('http://localhost:8080/interest');
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};