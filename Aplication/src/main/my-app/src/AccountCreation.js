import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { editAccount } from './services';
import './AccountCreation.css';

function AccountCreation(prop) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        if (data.name !== ""){
            var account = prop.account;
            account.name = data.name;
            account.bio = data.bio;
            await editAccount(account);
            window.location.reload();
        }
    }

    return (
        <div id="LoginWrapperHor">
            <div id="LoginWrapperVer">
                <div id="LoginWrapperReal">
            <div id="header">Welcome to our site Please enter your name and bio</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input id="nameinput" {...register("name")} placeholder="name" /> <br/>
                <input id="bioinput" {...register("bio")} placeholder="bio" /> <br/>
                <input id="sumbitbtn" type="submit" value="Submit" />
            </form>
                </div>
            </div>
        </div>
    )
}

export default AccountCreation
