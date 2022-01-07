import React from "react";

function InterestEdit(prop) {
    return (
        <>
            <>{prop.interest.interest} </>
            <button onClick={() => prop.deleteInterestAsync(prop.interest.id)}>delete</button>
        </>
    )
}

export default InterestEdit;