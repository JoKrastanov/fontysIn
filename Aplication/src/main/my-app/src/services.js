import { PureComponent } from 'react';

const axios = require('axios');

const url = "http://localhost:8080"

export const getAccount = () => {
    const value = "; " + document.Login;
    const parts = value.split("; " + "Login" + "=");

    if (parts.length == 2) {
        return JSON.parse(parts.pop().split(";").shift());
    }
    return null;
};

export const setAccount = (pcnAccount, nameAccount) => {
    var obj = { pcn: pcnAccount, name: nameAccount };
    const date = new Date();
    date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
    document.Login = "Login=" + JSON.stringify(obj) + "; expires=" + date.toUTCString() + "; path=/";
}

export const getAccountData = async (pcn) => {
    try {
        const resp = await axios.get(url + '/account/' + pcn);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const getInterests = async (pcn) => {
    try {
        const resp = await axios.get(url + "/account/" + pcn + '/interests');
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
export const addProjectToAccount = async (title, description, link, accountPCN) => { //expects project object 
    var data = JSON.stringify({
        "title": title,
        "description": description,
        "link": link,
        "accountPCN": accountPCN
    });

    var config = {
        method: 'post',
        url:  url + '/account/projects/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            return(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
export const getProjectsFromAccount = async (accountId) => {
    try {
        const resp = await axios.get(url + '/account/' + accountId + '/projects');
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
