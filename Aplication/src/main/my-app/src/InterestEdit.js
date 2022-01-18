import React from "react";
import { getLanguage } from "./services";

function InterestEdit(prop) {
    if (getLanguage() === "ned")
        return (
            <>
                <>{prop.interest.interest} </>
                <button id={"delete-interest-button"} onClick={() => prop.deleteInterestAsync(prop.interest.id)}>🗑</button>
            </>
        )
    else {
        return (
            <>
                <>{prop.interest.interest} </>
                <button id={"delete-interest-button"} onClick={() => prop.deleteInterestAsync(prop.interest.id)}>🗑</button>
            </>
        )
    }
}

export default InterestEdit;