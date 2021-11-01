import React from "react";

function Interest(prop) {
    console.log(prop);
    return (
        <>
            <p>{prop.interest.name}</p>
            <p>{prop.interest.description}</p>
        </>
    )
}

export default Interest;