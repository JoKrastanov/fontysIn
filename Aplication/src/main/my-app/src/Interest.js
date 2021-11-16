import React from "react";

function Interest(prop) {
    console.log(prop);
    return (
        <>
            <p>{prop.interest.interest}</p>
        </>
    )
}

export default Interest;