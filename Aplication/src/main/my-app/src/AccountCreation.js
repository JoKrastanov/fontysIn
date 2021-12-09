import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { editAccount } from './services';

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
        <div>
            <p>Welcome to our site Please enter your name and bio</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" /> <br/>
                <input {...register("bio")} placeholder="bio" /> <br/>
                <input type="submit" value="Submit" /> 
            </form>
            
        </div>
    )
}

export default AccountCreation
