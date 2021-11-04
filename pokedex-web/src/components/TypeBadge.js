import React from "react";

const TypeBadge = ({type}) => (
    <img
        className="type-badge" 
        src={`${process.env.PUBLIC_URL}/img/badges/${type}.png`}
        alt=""
    ></img>
);

export default TypeBadge;