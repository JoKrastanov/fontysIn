import React, { useEffect, useState } from 'react'
import { deleteAccount } from './services';

function DeleteAccountWarning(prop) {


        return (
            <div className="deleteAccountWarning">
                <h6>Are you sure you want to delete your account?</h6>
                <button id="SaveButton" onClick={() => {deleteAccount(prop.pcn); window.location.reload();}}>Delete</button>
            </div>
        )
}

export default DeleteAccountWarning
