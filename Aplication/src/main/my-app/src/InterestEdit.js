import React from "react";
import { getLanguage } from "./services";

function InterestEdit(prop) {
    if (getLanguage() === "ned")
        return (
            <>
                <>{prop.interest.interest} </>
                <button onClick={() => prop.deleteInterestAsync(prop.interest.id)}>Verwijderen</button>
            </>
        )
    else {
        return (
            <>
                <>{prop.interest.interest} </>
                <button onClick={() => prop.deleteInterestAsync(prop.interest.id)}>Delete</button>
            </>
        )
    }
}

export default InterestEdit;