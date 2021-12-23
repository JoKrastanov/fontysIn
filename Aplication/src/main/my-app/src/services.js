import {PureComponent, useState} from 'react';
import messageSound from "./media/juntos-607.mp3";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { url } from './config/config';

const axios = require('axios');

const ENDPOINT = url + "/chat";


export const getAccount = () => {
    const value = "; " + document.Login;
    const parts = value.split("; " + "Login" + "=");

    if (parts.length == 2) {
        return JSON.parse(parts.pop().split(";").shift());
    }
    return null;
};

export const updateAccount = (account, newVisibility) => {
    var data = JSON.stringify({
        "pcn": account.pcn,
        "name": account.name,
        "bio": account.bio,
        "type": account.type,
        "visibility": newVisibility
    });

    var config = {
        method: 'PUT',
        url: url + '/account',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            if(response.status === 204)
            {
                console.log("Successfully changed visibility!")
            }

            return (response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};


export const updateAccountPictrure = (account, newPic) => {
    var data = JSON.stringify({
        "pcn": account.pcn,
        "name": "",
        "bio": "",
        "type": "",
        "visibility": 0,
        "binaryImage": newPic
    });

    var config = {
        method: 'PUT',
        url: url + '/account/picture',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            if(response.status === 204)
            {
                console.log("Successfully changed picture!")
            }

            return (response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};


export const setAccount = (pcnAccount, nameAccount) => {
    if (pcnAccount != ""){
        var obj = { pcn: pcnAccount, name: nameAccount };
        document.Login = "Login=" + JSON.stringify(obj) + "; path=/";
    }
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

export const deleteAccount = async (pcn) => {

    var config = {
        method: 'delete',
        url: url + '/account/' + pcn,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const deleteProject = async (id, title, description, link, accountPCN) => {
    var data = JSON.stringify({
        "id": id,
        "title": title,
        "description": description,
        "link": link,
        "accountPCN": accountPCN
    });

    var config = {
        method: 'delete',
        url: url + '/account/projects/',
        headers: {
            'Content-Type': 'application/json'
         },
        data: data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
};

export const editOneProject = async (id, title, description, link, accountPCN) => {
    var data = JSON.stringify({
        "id": id,
        "title": title,
        "description": description,
        "link": link,
        "accountPCN": accountPCN
    });

    var config = {
        method: 'put',
        url: url + '/account/projects/',
        headers: {
            'Content-Type': 'application/json'
         },
        data: data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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

export const isAccountVisible = async (pcn, myPcn) => {
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
let stompCl;
export const getAccountChats = async (pcn) => {

    try {
       const resp = await axios.get(url + '/chat/account/' + pcn)
        return resp.data;
    }
    catch (err) {
        // Handle Error Here
        console.error(err);
    }

}

export const getChat = async (pcn1, pcn2) => {
    try {
        const resp = await axios.get(url + '/chat/' + pcn1 + '/' + pcn2)
        if(resp.data.id == null) {
            const resp = await axios.get(url + '/chat/' + pcn1 + '/' + pcn2);
            const socket = SockJS(ENDPOINT);
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, () => {
                    stompClient.subscribe('/topic/messages/' + resp.data.id, (data) => {
                        onMessageReceived(data);
                    });
            });
            console.log(resp.data)
            return resp.data
        }
        return resp.data
    }
    catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
export const sendMessage = (message) => {
    stompCl.send("/app/chat/" + message.chatId, {} ,JSON.stringify(message));
}

export const editAccount = async (account) => {
    var config = {
        method: 'put',
        url: url + '/account',
        headers: {
            'Content-Type': 'application/json'
        },
        data: account
    };

    return await axios(config)
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error(error);
            return false;
        });
}


export const connectToChats = async (pcn) => {
    try {
        let chats = "";
        const resp = await getAccountChats(pcn);
        for (let i = 0; i < resp.length; i++) {
            chats += (`,${resp[i].id}`)
        }
        let ids = chats.split(',')
        const socket = SockJS(ENDPOINT);
        const stompClient1 = Stomp.over(socket);
        stompClient1.connect({}, () => {
            // subscribe to the backend
            for (let i = 1; i < ids.length; i++) {
                stompClient1.subscribe('/topic/messages/' + ids[i], (data) => {
                    onMessageReceived(data);
                });
            }
        });
        // maintain the client for sending and receiving
        stompCl = stompClient1;
    }
    catch (err) {
        console.log(err);
    }
}

export const onMessageReceived = (data) =>
{
    try {
        let audio = new Audio(messageSound);
        const message = JSON.parse(data.body)
        if(getAccount().pcn !== message.senderPCN)  {audio.play();}
        const updateChat = new CustomEvent('build', {
            detail: {message : message}
        }, {once : true});
        document.dispatchEvent(updateChat);

    }
    catch (err) {
        console.log(err);
    }
}

export const searchForChats = async (name, pcn) => {
    try {
        const resp = await axios.get(url + `/chat/search/` + pcn + '/' + name)
        console.log(resp.data);
        return resp.data;
    }
    catch (err) {
        console.log(err);
    }
}

