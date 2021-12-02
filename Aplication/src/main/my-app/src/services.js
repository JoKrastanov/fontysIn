import { PureComponent } from 'react';

const axios = require('axios');

const url = "http://localhost:8080"
//https://fontysin.azurewebsites.net
//http://localhost:8080
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
    document.Login = "Login=" + JSON.stringify(obj) + "; path=/";
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
export const addProjectToAccount = async (title, description, link, accountPCN) => {
    var data = JSON.stringify({
        "title": title,
        "description": description,
        "link": link,
        "accountPCN": accountPCN
    });

    var config = {
        method: 'post',
        url: url + '/account/projects/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            return (JSON.stringify(response.data));
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

export const getALlAccounts = async () => {
    try {
        const resp = await axios.get(url + '/account');
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const isAccountVisable = async (pcn, myPcn) => {
    try {
        const resp = await axios.get(url + '/account/' + pcn + '/view/' + myPcn);
        return true;
    } catch (err) {
        // Handle Error Here
        return false;
    }
}

export const makeConnectionRequest = async (myPcn, requestPcn) => {
    var data = JSON.stringify({
        "pcn1": myPcn,
        "pcn2": requestPcn
    });

    var config = {
        method: 'post',
        url: url + '/account/connection',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            return (JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getAllPendingRequests = async (pcn) => {
    try {
        const resp = await axios.get(url + '/account/connections/pending/' + pcn);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const acceptRequest = async (request) => {

    request.accepted = 1;

    var config = {
        method: 'put',
        url:  url + '/account/connection',
        headers: {
            'Content-Type': 'application/json'
        },
        data: request
    };

    await axios(config)
}

export const getHashCode = async () => {
    try {
        const resp = await axios.get(url + '/account/my');
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}