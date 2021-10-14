import { PureComponent } from 'react';

const axios = require('axios');

export const getAcount = () => {
    const value = "; " + document.Login;
    const parts = value.split("; " + "Login" + "=");

    if (parts.length == 2) {
        return JSON.parse(parts.pop().split(";").shift());
    }
    return null;
};

export const setAcount = (pcnAccount, nameAccount) => {
    var obj = {pcn: pcnAccount, name: nameAccount};
    const date = new Date();
    date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
    document.Login = "Login=" + JSON.stringify(obj) + "; expires=" + date.toUTCString() + "; path=/";
}