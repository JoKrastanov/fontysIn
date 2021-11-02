import React from "react";

function Interest(prop) {
    console.log(prop);
    return (
        <>
            <p>{prop.interest.name}</p>
        </>
    )
}

export default Interest;